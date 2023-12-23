import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://posts.com/posts/create', {
      title,
      content,
    });
    console.log(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            value={title}
            type='text'
            className='form-control'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Content</label>
          <input
            value={content}
            type='text'
            className='form-control'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
