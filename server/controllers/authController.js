const User = require("../models/User");
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

exports.register = (req, res) => {
  // console.log("REGISTER ENDPOINT", req.body);
  const { name, email, password } = req.body;
  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [process.env.EMAIL_TO],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
            <html>
              <body>
              <h2 style="color: blue">Hello, ${name}</h2>
              <p>Test SES from Amazon</p>
              </body>
            </html>
          `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Finish your registration",
      },
    },
  };

  const sendEmailOnRegistration = ses.sendEmail(params).promise();

  sendEmailOnRegistration
    .then((data) => {
      console.log(data);
      res.send("Email was sent to your inbox!");
    })
    .catch((err) => {
      console.log(`AWS SES error: ${err}`);
      res.send(`Email sending process have failed!`);
    });
};
