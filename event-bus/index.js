const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const events = [];

app.post('/events', async (req, res) => {
  const event = req.body;

  console.log(req.body);

  events.push(event);

  try {
    await axios.post('http://localhost:4000/events', event);
  } catch (error) {
    console.log('Unable to post to 4000');
  }

  try {
    await axios.post('http://localhost:4001/events', event);
  } catch (error) {
    console.log('Unable to post to 4001');
  }

  try {
    await axios.post('http://localhost:4002/events', event);
  } catch (error) {
    console.log('Unable to post to 4002');
  }

  try {
    await axios.post('http://localhost:4003/events', event);
  } catch (error) {
    console.log('Unable to post to 4003');
  }

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
