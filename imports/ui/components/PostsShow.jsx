import { Meteor } from 'meteor/meteor';
import React, { PropTypes } from 'react';

import Loading from './Loading.jsx';
import PostsItem from './PostsItem.jsx';
import CommentsItem from './CommentsItem.jsx';
import CommentsNew from './CommentsNew.jsx';

const PostsShow = ({ ready, post, comments }) => {
  // XXX: pass in user
  const loggedIn = !!Meteor.userId();

  if (!ready) {
    return <Loading />;
  }

  return (
    <div className="post-page page">
      <PostsItem post={post} />

      <ul className="comments">
        {comments.map(comment => <CommentsItem comment={comment} key={comment._id} />)}
      </ul>

      {loggedIn ?
        <CommentsNew postId={post._id} /> :
        <p>Please log in to leave a comment.</p>
      }
    </div>
  );
};

PostsShow.propTypes = {
  ready: PropTypes.bool.isRequired,
  post: PropTypes.object,
  comments: PropTypes.array,
};

export default PostsShow;
