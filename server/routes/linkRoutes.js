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
  canUpdateDeleteLink,
} = require("../controllers/authController")

const {
  createLink,
  getAllLinks,
  clickCount,
  updateLink,
  readSingleLink,
  removeLink,
  popularLinks,
  popularInCategory,
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
  canUpdateDeleteLink,
  updateLink
)
router.put(
  "/link/admin/:id",
  linkUpdateValidation,
  runValidation,
  requireSignin,
  adminMiddleware,
  updateLink
)
router.delete(
  "/link/:id",
  requireSignin,
  authMiddleware,
  canUpdateDeleteLink,
  removeLink
)
router.delete("/link/admin/:id", requireSignin, adminMiddleware, removeLink)

// Top links by number of likes (votes)
router.get("/links/top", popularLinks)

router.get("/link/popular/:slug", popularInCategory)
module.exports = router
