const express = require("express");
const router = express.Router();
const {
  register,
  registerActivate,
  login,
} = require("../controllers/authController");
const {
  userRegistrationValidator,
  userLoginValidator,
} = require("../validators/authValidations");
const { runValidation } = require("../validators");

router.post("/register", userRegistrationValidator, runValidation, register);
router.post("/register/activate", registerActivate);
router.post("/login", userLoginValidator, runValidation, login);

module.exports = router;
