const express = require("express")
const router = express.Router()

const {
  linkCreateValidation,
  linkUpdateValidation,
} = require("../validators/linkValidation")
const { runValidation } = require("../validators")
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/authController")

const {
  createLink,
  getAllLinks,
  clickCount,
  updateLink,
  readSingleLink,
  removeLink,
} = require("../controllers/linkController")

// routes for linkSchema
router.post(
  "/link",
  linkCreateValidation,
  runValidation,
  requireSignin,
  authMiddleware,
  createLink
)
router.post("/links", requireSignin, adminMiddleware, getAllLinks)
router.get("/link/:id", readSingleLink)
router.put("/click-count", clickCount)
router.put(
  "/link/:id",
  linkUpdateValidation,
  runValidation,
  requireSignin,
  authMiddleware,
  updateLink
)
router.delete("/link/:id", requireSignin, authMiddleware, removeLink)
module.exports = router
