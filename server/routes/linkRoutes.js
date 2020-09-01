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
} = require("../controllers/authController")

const {
  createLink,
  getAllLinks,
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
router.get("/links", getAllLinks)
router.get("/link/:slug", readSingleLink)
router.put(
  "/link/:slug",
  linkUpdateValidation,
  runValidation,
  requireSignin,
  authMiddleware,
  updateLink
)
router.delete("/link/:slug", requireSignin, authMiddleware, removeLink)
module.exports = router
