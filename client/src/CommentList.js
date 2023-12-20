import React from 'react';

const CommentList = ({ comments }) => {
  const renderedComments = Object.values(comments).map((comment) => {
    return (
      <li key={comment.id}>
        {comment.status === 'pending' && (
          <span style={{ color: 'blue' }}>Pending approval by moderator.</span>
        )}
        {comment.status === 'rejected' && (
          <span style={{ color: 'red' }}>Comment rejected by moderator.</span>
        )}
        {comment.status === 'approved' && comment.comment}
      </li>
    );
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
