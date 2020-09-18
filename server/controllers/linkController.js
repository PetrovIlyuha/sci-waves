const slugify = require("slugify")
const Category = require("../models/Category")

const Link = require("../models/Link")
const User = require("../models/User")
const { linkPublishedParams } = require("../utils/helperFunctions")

const AWS = require("aws-sdk")
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const ses = new AWS.SES({ apiVersion: "2010-12-01" })

exports.createLink = (req, res, next) => {
  const { title, url, categories, type, format } = req.body
  let slug = slugify(url.split("/").pop())
  if (slug === "") {
    slug = slugify(title)
  }
  let link = new Link({ title, url, categories, type, format, slug })
  link.postedBy = req.user._id

  link.slug = slug
  link.save((err, data) => {
    if (err) {
      console.error(err)
      return res.status(400).json({ error: "Link already Exist in Database!" })
    }
    res.status(200).json(data)
    // find all users who have chosen the category link as favorite
    User.find({ categories: { $in: categories } }).exec((err, users) => {
      if (err) {
        return res
          .status(400)
          .send(
            "Could not find user's with the preference for this category..."
          )
      }
      Category.find({ _id: { $in: categories } }).exec(function (err, result) {
        data.categories = result
        for (const user of users) {
          console.log("Email will be sent to", user.email)
          const params = linkPublishedParams(user, data)
          const sendEmail = ses.sendEmail(params).promise()
          sendEmail
            .then(success => {
              console.log("Email new link notification success", success)
              return
            })
            .catch(failure => {
              console.log("Email new link notification failure", failure)
              return
            })
        }
      })
    })
  })
}

exports.getAllLinks = (req, res, next) => {
  const { limit, skip } = req.body
  let limitForLinks = limit ? parseInt(limit) : 10
  let skipLinks = skip ? parseInt(skip) : 0
  Link.find({})
    .populate("postedBy", "name")
    .populate("categories", "name slug")
    .sort({ createdAt: -1 })
    .skip(skipLinks)
    .limit(limitForLinks)
    .exec((err, data) => {
      if (err) {
        return res
          .status(400)
          .json({ error: "Error getting links from database" })
      }
      res.json(data)
    })
}

exports.clickCount = (req, res) => {
  const { linkId } = req.body
  Link.findByIdAndUpdate(linkId, { $inc: { likes: 1 } }, { new: true }).exec(
    (err, data) => {
      if (err) {
        return res
          .status(400)
          .json({ error: "Could not update link's likes count" })
      }
      res.json(data)
    }
  )
}
exports.updateLink = (req, res, next) => {
  const { id } = req.params
  const { title, url, categories, type, format } = req.body
  const updatedFields = { title, url, categories, type, format }
  Link.findByIdAndUpdate({ _id: id }, updatedFields, { new: true }).exec(
    function (err, updatedResource) {
      if (err) {
        return res.status(400).json({ error: "Can't update resource" })
      }
      res.json(updatedResource)
    }
  )
}

exports.readSingleLink = (req, res, next) => {
  const { id } = req.params
  Link.findOne({ _id: id }).exec((err, link) => {
    if (err) {
      return res.status(400).json({ error: err })
    }
    res.json(link)
  })
}

exports.removeLink = (req, res, next) => {
  const { id } = req.params
  Link.findOneAndRemove({ _id: id }).exec(function (err, data) {
    if (err) {
      return res.status(500).json({ error: "Could not delete link from DB" })
    }
    res.json({ message: "Link was successfully deleted" })
  })
}
