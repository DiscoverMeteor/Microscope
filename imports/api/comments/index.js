import { Meteor } from 'meteor/meteor';

import Comments from './Comments.js';
import * as Methods from './methods.js';

if (Meteor.isServer) {
  require('./server/publications.js');
}

// XXX: do we like this?
export default Comments;
export { Methods };
