/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import Posts from '../Posts.js';

Meteor.publish('posts.list', function publishPostsList(options) {
  new SimpleSchema({
    sort: { type: Object },
    'sort.submitted': { type: Number, optional: true },
    'sort._id': { type: Number, optional: true },
    limit: { type: Number },
  }).validate(options);

  return Posts.find({}, options);
});

Meteor.publish('posts.single', function publishPostsSingle(id) {
  new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id },
  }).validate(id);

  return Posts.find(id);
});
