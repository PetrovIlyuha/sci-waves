const Category = require("../models/Category")
const slugify = require("slugify")
const Link = require("../models/Link")
const AWS = require("aws-sdk")
const { v4: uuidv4 } = require("uuid")
const fs = require("fs")

// s3 config
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

exports.createCategory = (req, res) => {
  const { name, image, content } = req.body
  // image data
  const base64Data = new Buffer.from(
    image.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  )
  const imageType = image.split(";")[0].split("/")[1]
  const slug = slugify(name)
  let category = new Category({ name, content, slug })
  const params = {
    Bucket: "sci-waves",
    Key: `category/${uuidv4()}.${imageType}`,
    Body: base64Data,
    ACL: "public-read", // access-control level (in the bucket's policy)
    ContentEncoding: "base64",
    ContentType: `image/${imageType}`,
  }
  s3.upload(params, function (err, data) {
    if (err) {
      console.log(err)
      res.status(400).json({ error: "Upload to S3 has failed..." })
    }
    // console.log("S3 image response after upload", data)
    category.image.url = data.Location
    category.image.key = data.Key
    category.postedBy = req.user._id
    // save category to DB
    category.save((err, success) => {
      if (err) res.status(400).json({ error: "Error while saving category" })
      return res.json(success)
    })
  })
}

exports.getAllCategories = (req, res) => {
  Category.find({}).exec((err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "Error accessing categories in Database",
      })
    }
    res.json(categories)
  })
}
exports.readSingleCategory = (req, res) => {
  const { limit, skip } = req.body
  const { slug } = req.params
  let limitForLinks = limit ? parseInt(limit) : 10
  let skipLinks = skip ? parseInt(skip) : 0

  Category.findOne({ slug })
    .populate("postedBy", "_id name username")
    .exec((err, category) => {
      if (err) {
        return res.status(400).json({ error: "Could not load category..." })
      }
      // res.json(category)
      Link.find({ categories: category })
        .populate("postedBy", "_id name username")
        .populate("categories", "name")
        .sort({ createdAt: -1 })
        .limit(limitForLinks)
        .skip(skipLinks)
        .exec((err, links) => {
          if (err) {
            return res
              .status(400)
              .json({ error: "Could not load links from this category" })
          }
          res.json({ category, links })
        })
    })
}
exports.updateCategory = (req, res) => {
  const { slug } = req.params
  const { name, image, content } = req.body
  Category.findOneAndUpdate({ slug }, { name, content }, { new: true }).exec(
    (error, updated) => {
      if (error) {
        return res
          .status(400)
          .json({ error: "Could not find category to update...hmm" })
      }
      console.log("Updated Category", updated)
      if (image) {
        // remove old image from S3 before uploading new image
        const deleteParams = {
          Bucket: "sci-waves",
          Key: `${updated.image.key}`,
        }
        s3.deleteObject(deleteParams, function (err, data) {
          if (err) console.error(`S3 delete image white updating: ${err}`)
          else console.log(`S3 deleted image while updating: ${data}`)
        })

        // Uploading new image
        const imageType = image.split(";")[0].split("/")[1]
        const base64Data = new Buffer.from(
          image.replace(/^data:image\/\w+;base64,/, ""),
          "base64"
        )
        const params = {
          Bucket: "sci-waves",
          Key: `category/${uuidv4()}.${imageType}`,
          Body: base64Data,
          ACL: "public-read", // access-control level (in the bucket's policy)
          ContentEncoding: "base64",
          ContentType: `image/${imageType}`,
        }

        s3.upload(params, function (err, data) {
          if (err) {
            console.log(err)
            res.status(400).json({ error: "Upload to S3 has failed..." })
          }
          // console.log("S3 image response after upload", data)
          updated.image.url = data.Location
          updated.image.key = data.Key
          // save updated category instance to DB
          updated.save((err, success) => {
            if (err)
              res
                .status(400)
                .json({ error: "Error while saving updated category" })
            res.json(success)
          })
        })
      } else {
        res.json(updated)
      }
    }
  )
}
exports.removeCategory = (req, res) => {
  const { slug } = req.params
  Category.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      res.status(400).json({ error: `Error while removing category: ${err}` })
    }
    const deleteParams = {
      Bucket: "sci-waves",
      Key: `${data.image.key}`,
    }
    s3.deleteObject(deleteParams, function (err, data) {
      if (err) console.error(`S3 delete image error white removing: ${err}`)
      else console.log(`S3 deleted image while removing: ${data}`)
    })
    res.json({ message: "Category removed from S3 and DataBase" })
  })
}
