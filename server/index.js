const express = require('express')
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const cors = require('cors');

const { default: sendEmail } = require('./mailer');

dotEnv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/v1', (req, res) => {
  res.send('Successful response.')
})

app.post('/api/v1/sendMail', (req, res) => {
  const { name, email, message } = req.body
  sendEmail({ name, email, message })
  res.status(200).send('Email sent successfully.')
})

app.listen(process.env.PORT, () => console.log(`Example app is listening on port ${process.env.PORT}.`))
