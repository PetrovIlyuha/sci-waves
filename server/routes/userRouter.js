const express = require("express")
const router = express.Router()

// controllers
const { readUserProfile } = require("../controllers/userController")

const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/authController")

router.get("/user", requireSignin, authMiddleware, readUserProfile)

router.get("/admin", requireSignin, adminMiddleware, readUserProfile)

module.exports = router
