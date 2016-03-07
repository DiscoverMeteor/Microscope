import React, { PropTypes } from 'react';
import PostsItem from './PostsItem.jsx';

const PostsList = ({ posts, requested, countReady, count, onNextPage }) => {
  let nextLink;
  if (!countReady || posts.length < requested) {
    // XXX: spinner
    nextLink = (<div id="spinner" />);
  } else if (count > requested) {
    // XXX: do we need a URL?
    nextLink = <a className="load-more" onClick={onNextPage()}>Load more</a>;
  }

  return (
    <div className="posts page">
      <div className="wrapper">
        {posts.map(post => <PostsItem post={post} key={post._id} />)}
      </div>
      {nextLink}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  requested: PropTypes.number.isRequired,
  countReady: PropTypes.bool.isRequired,
  count: PropTypes.number,
  onNextPage: PropTypes.func.isRequired,
};

export default PostsList;
