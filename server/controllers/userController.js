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
