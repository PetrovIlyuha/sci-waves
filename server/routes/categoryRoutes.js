const express = require("express")
const router = express.Router()

const {
  createCategoryValidator,
  updateCategoryValidator,
} = require("../validators/categoryValidation")
const { runValidation } = require("../validators")
const {
  requireSignin,
  adminMiddleware,
  authMiddleware,
} = require("../controllers/authController")

const {
  createCategory,
  getAllCategories,
  updateCategory,
  readSingleCategory,
  removeCategory,
} = require("../controllers/categoryController")

// routes
// ! create category
router.post("/category", requireSignin, adminMiddleware, createCategory)
// all categories
router.get("/categories", getAllCategories)
// single category
router.post("/category/:slug", readSingleCategory)
// ! update category
router.put(
  "/category/:slug",
  updateCategoryValidator,
  runValidation,
  requireSignin,
  adminMiddleware,
  updateCategory
)
router.delete("/category/:slug", requireSignin, adminMiddleware, removeCategory)

module.exports = router
