// Models import
const User = require("../models/User")
const Link = require("../models/Link")

// 3-rd party packages (utils)
const _ = require("lodash")
const expressJWT = require("express-jwt")
const shortId = require("shortid")
const jwt = require("jsonwebtoken")

// AWS SDK import
const AWS = require("aws-sdk")
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const ses = new AWS.SES({ apiVersion: "2010-12-01" })

const {
  registerEmailParams,
  forgotPassEmailParams,
} = require("../utils/helperFunctions")

exports.register = async (req, res) => {
  const { name, email, password, categories } = req.body
  // check for existing user
  await User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Provided email was taken",
      })
    }
    // generating token from username, email and password
    const token = jwt.sign(
      { name, email, password, categories },
      process.env.JWT_ACCOUNT_ACTIVATION_KEY,
      { expiresIn: "1h" }
    )
    const params = registerEmailParams(email, name, token)
    const sendEmailOnRegistration = ses.sendEmail(params).promise()

    sendEmailOnRegistration
      .then(data => {
        console.log("email sending success", data)
        res.json({
          message: `Confirmation Email was sent to ${email}!`,
        })
      })
      .catch(err => {
        console.log(`AWS SES error: ${err}`)
        res.json({
          message: `We could not verify your email! Please, try again later!`,
        })
      })
  })
}

exports.registerActivate = (req, res) => {
  const { token } = req.body
  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION_KEY, function (
    err,
    decoded
  ) {
    if (err) {
      return res.status(401).json({
        error: "Link had expired! Try to register again!",
      })
    }
    const { name, email, password, categories } = decoded
    const username = shortId.generate()
    User.findOne({ email }).exec((err, user) => {
      if (user) {
        return res.status(401).json({
          error: "Email had been taken by some other user!",
        })
      }
      // register new user
      const newUser = new User({ username, name, email, password, categories })
      newUser.save((err, user) => {
        if (err) {
          return res.status(401).json({
            error: "Error saving user into the database. Try later!",
          })
        }
        return res.json({
          message: "Registration was successful. Visit Login Page.",
        })
      })
    })
  })
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  await User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist...Please, register!",
      })
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Password does not match with the registered One!!",
      })
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    })
    const { _id, name, email, role } = user
    return res.json({
      token,
      user: { _id, name, email, role },
    })
  })
}

exports.requireSignin = expressJWT({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
})

exports.authMiddleware = (req, res, next) => {
  const authenticatedUserID = req.user._id
  User.findOne({ _id: authenticatedUserID }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User was not found!",
      })
    }
    req.profile = user
    next()
  })
}

exports.adminMiddleware = (req, res, next) => {
  const authenticatedUserID = req.user._id
  User.findOne({ _id: authenticatedUserID }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User was not found!",
      })
    }
    if (user.role !== "admin") {
      return res.status(401).json({
        message: "You are not Admin!",
      })
    }
    req.profile = user
    next()
  })
}

// password forgot/reset
exports.forgotPassword = (req, res) => {
  const { email } = req.body
  // try to find user in DB
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User does not exist...",
      })
    }
    // token generation and email it to the user
    const token = jwt.sign(
      { name: user.name },
      process.env.JWT_RESET_PASSWORD,
      { expiresIn: "10m" }
    )
    const params = forgotPassEmailParams(email, token)
    // population of db > user > resetPasswordLink
    return user.updateOne({ resetPasswordLink: token }, (err, done) => {
      if (err) {
        return res.status(400).json({
          error: "Password reset failed. Try again later...",
        })
      }
      const sendEmail = ses.sendEmail(params).promise()
      sendEmail
        .then(data => {
          console.log("SES reset password success..", data)
          return res.json({
            message: `Email has been sent to ${email}. Follow the link from email to reset your password!`,
          })
        })
        .catch(err => {
          console.log("SES reset password failure", err)
          return res.json({
            message: `Email was not verified. Please, try again later.`,
          })
        })
    })
  })
}
exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body
  if (resetPasswordLink) {
    // check validity of the reset password link
    jwt.verify(
      resetPasswordLink,
      process.env.JWT_RESET_PASSWORD,
      (err, success) => {
        if (err) {
          return res.status(400).json({
            error: "Link has expired. Perform another reset password request.",
          })
        }
        // then link is active and valid
        User.findOne({ resetPasswordLink }).exec((err, user) => {
          if (err || !user) {
            return res.status(400).json({
              error: "Invalid Token. Try again later...",
            })
          }
          const updatedFields = {
            password: newPassword,
            resetPasswordLink: "",
          }
          user = _.extend(user, updatedFields)
          user.save((err, done) => {
            if (err) {
              return res.status(400).json({
                error:
                  "Saving User in Database with new password failed. Try again",
              })
            }
            res.json({
              message: "You can start using new password!",
            })
          })
        })
      }
    )
  }
}

exports.canUpdateDeleteLink = (req, res, next) => {
  const { id } = req.params
  Link.findOne({ _id: id }).exec((err, link) => {
    if (err) {
      return res.status(400).json({ error: "Could not find link" })
    }
    let authorizedUser =
      link.postedBy._id.toString() === req.user._id.toString()
    if (!authorizedUser) {
      return res
        .status(400)
        .json({ error: "You are not eligible to modify the resource" })
    }
    next()
  })
}
