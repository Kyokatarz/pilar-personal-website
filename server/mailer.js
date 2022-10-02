const nodeMailer = require('nodemailer')

async function sendEmail() {
  // send email
   // create reusable transporter object using the default SMTP transport
   const transporter = nodeMailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.SENDER_EMAIL, // generated ethereal user
      pass: process.env.SENDER_PASSWORD, // generated ethereal password
    },
  })

  // send mail with defined transport object
  await transporter.sendMail({
    from: '"Test 👻" pilar.miralles.bot@outlook.com', // sender address
    to: "pilota97@gmail.com", // list of receivers
    subject: "Que puta tu me miras, bastarda?", // Subject line
    text: "Yo soy va a puto matarte 🔪! ", // plain text body
    html: "<a href=`https://www.youtube.com/watch?v=dQw4w9WgXcQ`>Ay yo check this out </a>", // html body
  }, (error, info) => {
    if (error) {
      console.log(error)
    } else {
      console.log(info)
    }
  })
  console.log('Send email successfully.')
}

exports.default = sendEmail

