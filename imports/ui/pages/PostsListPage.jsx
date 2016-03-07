import { Meteor } from 'meteor/meteor';

import createContainer from './createContainer';
import PostsList from '../components/PostsList.jsx';
import Posts from '../../api/posts/Posts.js';

const PostsListPage = createContainer(() => {
  // XXX: this should be an argument somehow
  const sort = { submitted: -1, _id: -1 };
  const limit = 30;
  const sub = Meteor.subscribe('posts.list', { sort, limit });

  const posts = Posts.find().fetch();
  return {
    posts,
    requested: 3,
    countReady: sub.ready(),
    count: 3,
    onNextPage: () => {},
  };
}, PostsList);

export default PostsListPage;
