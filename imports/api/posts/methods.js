import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';

import Posts from './Posts.js';
import { ownsDocument } from '../permissions.js';

const insert = new ValidatedMethod({
  name: 'posts.insert',
  validate: new SimpleSchema({
    title: { type: String },
    url: { type: String },
  }).validator(),
  run({ title, url }) {
    const user = Meteor.user();
    if (!user) {
      // XXX: error types
      throw 'unauthorized';
    }

    const postWithSameLink = Posts.findOne({ url });
    if (postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id,
      };
    }

    const post = _.extend({ title, url }, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0,
      upvoters: [],
      votes: 0,
    });

    const postId = Posts.insert(post);

    return {
      _id: postId,
    };
  },
});

const update = new ValidatedMethod({
  name: 'posts.update',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id },
    title: { type: String, optional: true },
    url: { type: String, optional: true },
  }).validator(),
  run({ id, title, url }) {
    if (!this.userId) {
      throw 'unauthorized';
    }

    if (!ownsDocument(Posts.findOne({ id }), this.userId)) {
      throw 'unauthorized';
    }

    return Posts.update({ id }, { $set: { url, title } });
  },
});

const remove = new ValidatedMethod({
  name: 'posts.remove',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id },
  }).validator(),
  run({ id }) {
    if (!this.userId) {
      throw 'unauthorized';
    }

    if (!ownsDocument(Posts.findOne({ id }), this.userId)) {
      throw 'unauthorized';
    }

    return Posts.remove({ id });
  },
});

const upvote = new ValidatedMethod({
  name: 'posts.upvote',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id },
  }).validator(),
  run({ id }) {
    if (!this.userId) {
      throw 'unauthorized';
    }

    const affected = Posts.update({
      _id: id,
      upvoters: { $ne: this.userId },
    }, {
      $addToSet: { upvoters: this.userId },
      $inc: { votes: 1 },
    });

    if (! affected) {
      throw new Meteor.Error('invalid', "You weren't able to upvote that post");
    }
  },
});


export { insert, update, remove, upvote };
