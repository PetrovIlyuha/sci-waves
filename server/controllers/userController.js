const User = require("../models/User")
const Link = require("../models/Link")

exports.readUserProfile = (req, res) => {
  User.findOne({ _id: req.user._id }).exec((err, user) => {
    if (err) {
      console.error("Error getting user (customer) from DB: ", err)
      res.status(401).json(err)
    }
    Link.find({ postedBy: user })
      .populate("categories", "name slug")
      .populate("postedBy", "name")
      .sort({ createdAt: -1 })
      .exec((err, links) => {
        if (err) {
          console.error("Error getting links (customer) from DB: ", err)
          res.status(401).json(err)
        }
        user.hashed_password = undefined
        user.salt = undefined
        return res.json({ user, links })
      })
  })
}

exports.updateUserProfile = (req, res) => {
  const { name, password, categories } = req.body
  switch (true) {
    case password && password.length < 6:
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" })
      break
  }
  User.findOneAndUpdate(
    { _id: req.user._id },
    { name, password, categories },
    { new: true }
  ).exec(function (err, updatedUser) {
    if (err) {
      return res.status(400).json({ error: "Could not find a user" })
    }
    updatedUser.hashed_password = undefined
    updatedUser.salt = undefined
    res.json(updatedUser)
  })
}
