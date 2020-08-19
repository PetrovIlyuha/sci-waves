const User = require("../models/User");
const AWS = require("aws-sdk");
const jwt = require("jsonwebtoken");
const { registerEmailParams } = require("../utils/helperFunctions");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  // check for existing user
  await User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Provided email was taken",
      });
    }
    // generating token from username, email and password
    const token = jwt.sign(
      { name, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION_KEY,
      { expiresIn: "1h" }
    );
    const params = registerEmailParams(email, name, token);
    const sendEmailOnRegistration = ses.sendEmail(params).promise();

    sendEmailOnRegistration
      .then((data) => {
        console.log("email sending success", data);
        res.json({
          message: `Confirmation Email was sent to ${email}!`,
        });
      })
      .catch((err) => {
        console.log(`AWS SES error: ${err}`);
        res.json({
          message: `We could not verify your email! Please, try again later!`,
        });
      });
  });
};
