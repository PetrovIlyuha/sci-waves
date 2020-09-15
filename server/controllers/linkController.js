const Link = require("../models/Link")
const slugify = require("slugify")

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
