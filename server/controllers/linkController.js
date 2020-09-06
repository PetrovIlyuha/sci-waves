const Link = require("../models/Link")
const slugify = require("slugify")

exports.createLink = (req, res, next) => {
  const { title, url, categories, type, format } = req.body
  const slug = slugify(url.split("/").pop())
  let link = new Link({ title, url, categories, type, format, slug })
  link.postedBy = req.user._id

  link.slug = slug
  link.save((err, data) => {
    if (err) {
      console.error(err)
      return res.status(400).json({ error: "Link already Exist in Database!" })
    }
    res.status(200).json(data)
  })
}

exports.getAllLinks = (req, res, next) => {
  Link.find({}).exec((err, data) => {
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
exports.updateLink = (req, res, next) => {}
exports.readSingleLink = (req, res, next) => {}
exports.removeLink = (req, res, next) => {}
