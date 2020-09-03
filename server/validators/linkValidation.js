const { check } = require("express-validator")

exports.linkCreateValidation = [
  check("title").not().isEmpty().withMessage("Link title is required"),
  check("url").not().isEmpty().withMessage("URL is required"),
  check("categories").not().isEmpty().withMessage("Choose the category"),
  check("type").not().isEmpty().withMessage("Choose type (free/paid)"),
  check("format")
    .not()
    .isEmpty()
    .withMessage("Choose the format of the resource"),
]

exports.linkUpdateValidation = [
  check("title").not().isEmpty().withMessage("Link title is required"),
  check("url").not().isEmpty().withMessage("URL is required"),
  check("categories").not().isEmpty().withMessage("Choose the category"),
  check("type").not().isEmpty().withMessage("Choose type (free/paid)"),
  check("format")
    .not()
    .isEmpty()
    .withMessage("Choose the format of the resource"),
]
