const Category = require("../models/Category")
const slugify = require("slugify")
const formidable = require("formidable")
const AWS = require("aws-sdk")
const { v4: uuidv4 } = require("uuid")
const fs = require("fs")

// s3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

exports.createCategory = (req, res) => {
  let form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded to S3",
      })
    }
    console.log({ err, fields, files })
    const { name, content } = fields
    const { image } = files
    const slug = slugify(name)
    let category = new Category({ name, content, slug })
    if (image.size > 3000000) {
      return res.status(400).json({
        error: "Image is too large. Limit is 3Mb",
      })
    }
    // upload image to S3
    const params = {
      Bucket: "sci-waves",
      Key: `category/${uuidv4()}`,
      Body: fs.readFileSync(image.path),
      ACL: "public-read", // access-control level (in the bucket's policy)
      ContentType: `image/jpg`,
    }
    s3.upload(params, function (err, data) {
      if (err) {
        console.log(err)
        res.status(400).json({ error: "Upload to S3 has failed..." })
      }
      // console.log("S3 image response after upload", data)
      category.image.url = data.Location
      category.image.key = data.Key
      // save category to DB
      category.save((err, success) => {
        if (err) res.status(400).json({ error: "Error while saving category" })
        return res.json(success)
      })
    })
  })
}

exports.getAllCategories = (req, res) => {}
exports.readSingleCategory = (req, res) => {}
exports.updateCategory = (req, res) => {}
exports.removeCategory = (req, res) => {}
