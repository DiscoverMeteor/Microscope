import { createContainer } from 'meteor/react-meteor-data';
import PostsList from '../components/PostsList.jsx';

// XXX: ???
import '../../api/posts/Posts.js';
// import Posts from '../../api/posts/Posts.js';

const PostsListPage = createContainer(() => {
  const posts = Posts.find().fetch();
  return {
    posts,
    requested: 3,
    countReady: true,
    count: 3,
    onNextPage: () => {},
  };
}, PostsList);

export default PostsListPage;
