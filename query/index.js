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

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({});
});

const handleEvent = (type, data) => {
  if (type === 'PostCreated') {
    const { id, title, content } = data;

    posts[id] = { id, title, content, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, status, comment, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, status, comment });
  }

  if (type === 'CommentUpdated') {
    const { id, comment, postId, status } = data;

    const post = posts[postId];
    const commentFound = post.comments.find((comment) => {
      return comment.id === id;
    });

    if (commentFound) {
      commentFound.status = status;
      comment.comment = comment;
    }
  }
};

app.listen(4002, async () => {
  console.log('Listening on 4002');

  try {
    const res = await axios.get('http://localhost:4005/events');
    for (let event of res.data) {
      console.log('Processing event: ' + event.type);
      handleEvent(event.type, event.data);
    }
  } catch (error) {}
});
