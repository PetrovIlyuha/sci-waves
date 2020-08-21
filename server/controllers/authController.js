const User = require("../models/User");
const AWS = require("aws-sdk");
const jwt = require("jsonwebtoken");
const { registerEmailParams } = require("../utils/helperFunctions");
const shortId = require("shortid");

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

exports.registerActivate = (req, res) => {
  const { token } = req.body;
  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION_KEY, function (
    err,
    decoded
  ) {
    if (err) {
      return res.status(401).json({
        error: "Link had expired! Try to register again!",
      });
    }
    const { name, email, password } = decoded;
    const username = shortId.generate();
    User.findOne({ email }).exec((err, user) => {
      if (user) {
        return res.status(401).json({
          error: "Email had been taken by some other user!",
        });
      }
      // register new user
      const newUser = new User({ username, name, email, password });
      newUser.save((err, user) => {
        if (err) {
          return res.status(401).json({
            error: "Error saving user into the database. Try later!",
          });
        }
        return res.json({
          message: "Registration was successful. Visit Login Page.",
        });
      });
    });
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist...Please, register!",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Password does not match with the registered One!!",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const { _id, name, email, role } = user;
    return res.json({
      token,
      user: { _id, name, email, role },
    });
  });
};
