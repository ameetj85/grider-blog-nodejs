const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', async (req, res) => {
  const commentId = randomBytes(4).toString('hex');

  const { comment } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, comment });

  commentsByPostId[req.params.id] = comments;

  try {
    await axios.post('http://localhost:4005/events', {
      type: 'CommentCreated',
      data: {
        id: commentId,
        comment,
        postId: req.params.id,
      },
    });
  } catch (error) {
    console.log('Unable to post to 4005');
    console.log(error);
  }

  res.status(201).send(comments);
});

app.post('/events', (req, res) => {
  console.log('Received event: ' + req.body.type);
  res.send({});
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
