const nodeMailer = require('nodemailer')

async function sendEmail({firstName, lastName, email, message}) {
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
    from: '"It\'s me but a bot 🤖" pilar.miralles.bot@outlook.com', // sender address
    to: process.env.DEFAULT_RECEIVER, // list of receivers
    subject: "🔔 [You've got mail] Someone sent data through website form~", // Subject line
    html: `<div> 
    Firstname: ${firstName} <br/> 
    Lastname: ${lastName} <br/> 
    Email: ${email} <br/> 
    Message: ${message} </div>`, // html body
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

