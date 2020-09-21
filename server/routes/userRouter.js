const express = require("express")
const router = express.Router()

// controllers
const {
  readUserProfile,
  updateUserProfile,
} = require("../controllers/userController")

// user profile update validation
const { userUpdateValidator } = require("../validators/authValidations")
const { runValidation } = require("../validators")

const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/authController")

router.get("/user", requireSignin, authMiddleware, readUserProfile)

router.get("/admin", requireSignin, adminMiddleware, readUserProfile)
router.put(
  "/user",
  userUpdateValidator,
  runValidation,
  requireSignin,
  authMiddleware,
  updateUserProfile
)

module.exports = router
