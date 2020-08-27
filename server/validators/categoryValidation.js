const { check } = require("express-validator")

exports.createCategoryValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  // check("image").not().isEmpty().withMessage("Image is required"),
  check("content")
    .isLength({ min: 20 })
    .withMessage("Category description is required"),
]

exports.updateCategoryValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("content")
    .isLength({ min: 20 })
    .withMessage("Category description is required"),
]
