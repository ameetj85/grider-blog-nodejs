const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/events', (req, res) => {
  const event = req.body;

  console.log(req.body);

  try {
    axios.post('http://localhost:4000/events', event);
  } catch (error) {
    console.log('Unable to post to 4000');
  }

  try {
    axios.post('http://localhost:4001/events', event);
  } catch (error) {
    console.log('Unable to post to 4001');
  }

  try {
    axios.post('http://localhost:4002/events', event);
  } catch (error) {
    console.log('Unable to post to 4002');
  }

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
