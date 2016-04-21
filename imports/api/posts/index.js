import { Meteor } from 'meteor/meteor';

import Posts from './Posts.js';
import * as Methods from './methods.js';

if (Meteor.isServer) {
  require('./server/publications.js');
}

// XXX: do we like this?
export default Posts;
export { Methods };
