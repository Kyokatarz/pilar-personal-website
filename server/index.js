const express = require('express')
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');

const { default: sendEmail } = require('./mailer');

dotEnv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Successful response.')
})

app.post('/sendMail', (req, res) => {
  // sendEmail()
  res.status(200).send('Email sent successfully.')
})

app.listen(process.env.PORT, () => console.log(`Example app is listening on port ${process.env.PORT}.`))
