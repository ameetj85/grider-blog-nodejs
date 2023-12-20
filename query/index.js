const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  console.log(type, data);

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

  res.send({});
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
