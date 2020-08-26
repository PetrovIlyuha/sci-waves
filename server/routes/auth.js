const express = require("express")
const router = express.Router()
const {
  register,
  registerActivate,
  login,
  requireSignin,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController")
const {
  userRegistrationValidator,
  userLoginValidator,
  forgotPassValidator,
  resetPassValidator,
} = require("../validators/authValidations")
const { runValidation } = require("../validators")

router.post("/register", userRegistrationValidator, runValidation, register)
router.post("/register/activate", registerActivate)
router.post("/login", userLoginValidator, runValidation, login)
router.put(
  "/forgot-password",
  forgotPassValidator,
  runValidation,
  forgotPassword
)
router.put("/reset-password", resetPassValidator, runValidation, resetPassword)

module.exports = router
