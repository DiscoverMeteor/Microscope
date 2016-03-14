import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';

import pluralize from '../util/pluralize';

const PostsItem = ({ post, onUpvote }) => {
  // XXX: are we passing in Meteor.user?
  const currentUserId = Meteor.userId();

  const canVote = currentUserId && !_.include(post.upvoters, currentUserId);
  const linkClass = classnames('upvote', 'btn', 'btn-default', {
    'btn-primary': canVote,
    upvotable: canVote,
    disabled: !canVote,
  });

  const a = document.createElement('a');
  a.href = post.url;
  const domain = a.hostname;

  let editLink;
  if (currentUserId === post.userId) {
    editLink = (<a href="{{pathFor 'postEdit'}}">Edit</a>);
  }

  const postPath = FlowRouter.path('posts.show', { _id: post._id });

  return (
    <div className="post">
      <a href="#" className={linkClass} onClick={canVote && onUpvote}>⬆</a>
      <div className="post-content">
        <h3><a href={post.url}>{post.title}</a><span>{domain}</span></h3>
        <p>
          {pluralize(post.upvotes, 'Vote')} {' '}
          submitted by {post.username}, {' '}
          <a href={postPath}>
            {pluralize(post.commentsCount, 'comment')}
          </a>
          {editLink}
        </p>
      </div>
      <a href={postPath} className="discuss btn btn-default">Discuss</a>
    </div>
  );
};

PostsItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    upvoters: PropTypes.arrayOf(PropTypes.string),
    upvotes: PropTypes.number.isRequired,
    commentsCount: PropTypes.number.isRequired,
  }).isRequired,
  onUpvote: PropTypes.func.isRequired,
};

export default PostsItem;
