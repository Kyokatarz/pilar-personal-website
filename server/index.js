const express = require('express')
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const cors = require('cors');

const { default: sendEmail } = require('./mailer');

dotEnv.config();

const app = express();

const origin = process.env.NODE_ENV === 'production' ? process.env.PROD_URL : process.env.DEV_URL

var corsOptions = {
  origin,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors(corsOptions))

app.get('/v1', (req, res) => {
  res.send('Successful response.')
})

app.post('/api/v1/sendMail', (req, res) => {
  const { name, email, message } = req.body
  sendEmail({ name, email, message })
  res.status(200).send('Email sent successfully.')
})

app.listen(process.env.PORT, () => console.log(`Example app is listening on port ${process.env.PORT}.`))
