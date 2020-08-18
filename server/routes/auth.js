const express = require("express");
const router = express.Router();
const { register } = require("../controllers/authController");
const { userRegistrationValidator } = require("../validators/authValidations");
const { runValidation } = require("../validators");

router.post("/register", userRegistrationValidator, runValidation, register);

module.exports = router;
