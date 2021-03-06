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
  }
}

exports.forgotPassEmailParams = (email, token) => {
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
              <h2 style="color: beige; padding: 10px 20px; text-align: center; background-color: rgba(0,0,0,0.45); border-radius: 10px; box-shadow: 2px 3px 10px rgba(0,0,0,0.5);">Hi, Petrov, here is your link to reset password on Sci-Waves!</h2>
              <p style="">Please follow the link to reset your password:</p>
              <p style="padding: 10px 20px; text-align: center; background-color: #FFF7AE; border-radius: 10px; box-shadow: 1px 1px 5px rgba(0,0,0,0.5);">${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
              <strong>This link will be considered expired in 10 minutes!</strong>
            </body>
          </html>
          `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Reset your Password for the Sci-Waves site!",
      },
    },
  }
}

exports.linkPublishedParams = (user, data) => {
  return {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [user.email],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
            <html>
              <body>
              <h2 style="color: blue">Hi ${
                user.name
              }! New link on Sci-Waves!</h2>
              <p>Newly recommended resource: ${data.title}</p>
              <p>Tagged by Categories:</p>
              ${data.categories
                .map(category => {
                  return `
                  <div>
                    <h2>${category.name}</h2>
                    <img src="${category.image.url}" alt="${category.name}" style="height: 40px;"/>
                    <h3>
                      <a href="${process.env.CLIENT_URL}/links/${category.slug}">Go explore!</a>
                    </h3>
                  </div>
                `
                })
                .join("--------------------------")}

                <hr/>
                <p>Want to Unsubscribe?</p>
                <p>Disable notifications inside your <strong>profile dashboard</strong></p>
                <p>${process.env.CLIENT_URL}/user/profile/update</p>
              </body>
            </html>
          `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Check out new opportunities to learn on Sci-Waves!",
      },
    },
  }
}
