exports.registerEmailParams = (email, name, token) => {
  return {
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
              <h2 style="color: blue">${name}, please verify your email address</h2>
              <p>Please follow up the link to complete your registration:</p>
              <strong>This link will be expired in 1 hour!</strong>
              <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
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
};
