import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { createContainer } from 'meteor/react-meteor-data';

import PostsShow from '../components/PostsShow.jsx';
import Posts from '../../api/posts/Posts.js';
import Comments from '../../api/comments/Comments.js';

const PostsShowPage = createContainer(() => {
  const postId = FlowRouter.getParam('_id');

  const handles = [
    Meteor.subscribe('posts.single', postId),
    Meteor.subscribe('comments.list', postId),
  ];

  return {
    ready: _.all(handles, h => h.ready()),
    post: Posts.findOne(postId),
    comments: Comments.find({ postId }).fetch(),
  };
}, PostsShow);

export default PostsShowPage;
