exports.readUserProfile = (req, res) => {
  req.profile.hashed_password = null
  req.profile.salt = null
  return res.json(req.profile)
}
