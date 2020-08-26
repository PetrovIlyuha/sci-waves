const { check } = require("express-validator")

exports.userRegistrationValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Email must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be no less than 6 characters!"),
]

exports.userLoginValidator = [
  check("email").isEmail().withMessage("Email must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be no less than 6 characters!"),
]

exports.forgotPassValidator = [
  check("email").isEmail().withMessage("Email must be a valid email address"),
]

exports.resetPassValidator = [
  check("newPassword")
    .isLength({ min: 6 })
    .withMessage("Password must be no less than 6 characters!"),
  check("resetPasswordLink").not().isEmpty().withMessage("Token is required!"),
]
