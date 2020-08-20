const express = require("express");
const router = express.Router();
const { register, registerActivate } = require("../controllers/authController");
const { userRegistrationValidator } = require("../validators/authValidations");
const { runValidation } = require("../validators");

router.post("/register", userRegistrationValidator, runValidation, register);
router.post("/register/activate", registerActivate);

module.exports = router;
