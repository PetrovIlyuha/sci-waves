const Category = require("../models/Category")
const slugify = require("slugify")
const formidable = require("formidable")
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
exports.readSingleCategory = (req, res) => {}
exports.updateCategory = (req, res) => {}
exports.removeCategory = (req, res) => {}
