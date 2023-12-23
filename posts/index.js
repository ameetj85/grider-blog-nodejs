const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts/create', async (req, res) => {
  const id = randomBytes(4).toString('hex');

  const { title, content } = req.body;

  posts[id] = {
    id,
    title,
    content,
  };

  try {
    await axios.post('http://event-bus-srv:4005/events', {
      type: 'PostCreated',
      data: {
        id,
        title,
        content,
      },
    });
  } catch (error) {
    console.log('Unable to send message to 4005');
  }

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Received event: ' + req.body.type);
  res.send({});
});

app.listen(4000, () => {
  console.log('v 2023');
  console.log('Listening on 4000');
});
