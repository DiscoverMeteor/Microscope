import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';

import PostsEdit from '../components/PostsEdit.jsx';
import Posts from '../../api/posts/Posts.js';

const PostsEditPage = createContainer(() => {
  const postId = FlowRouter.getParam('_id');
  const sub = Meteor.subscribe('posts.single', postId);

  return {
    ready: sub.ready(),
    post: Posts.findOne(postId),
  };
}, PostsEdit);

export default PostsEditPage;
