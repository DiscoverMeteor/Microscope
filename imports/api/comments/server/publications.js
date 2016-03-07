/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Comments from '../Comments.js';


Meteor.publish('comments.list', function publishCommentsList(postId) {
  new SimpleSchema({
    postId: { type: String, regEx: SimpleSchema.RegEx.Id },
  }).validate({ postId });

  return Comments.find({ postId });
});
