import { createContainer } from 'meteor/react-meteor-data';

import PostsEdit from '../components/PostsEdit.jsx';
import Posts from '../../api/posts/Posts.js';

const PostsEditPage = createContainer(() => {
  return {
    // XXX:
    post: Posts.findOne(),
  };
}, PostsEdit);

export default PostsEditPage;
