import React, { PropTypes } from 'react';

const CommentsItem = ({ comment }) => (
  <li>
    <h4>
      <span className="author">{comment.username}</span> {' '}
      <span className="date">on {comment.submittedAt.toString()}</span>
    </h4>
    <p>{comment.body}</p>
  </li>
);

CommentsItem.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    submittedAt: PropTypes.instanceOf(Date).isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentsItem;
