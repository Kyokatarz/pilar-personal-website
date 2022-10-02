import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(1337, () => console.log('Example app is listening on port 1337.'));
