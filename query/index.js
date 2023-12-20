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

  console.log(req.body);
  console.log(posts);

  if (type === 'PostCreated') {
    const { id, title, content } = data;

    posts[id] = { id, title, content, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, comment, postId } = data;
    const post = posts[postId];
    post.comments.push({ id, comment });
  }

  res.send({});
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
