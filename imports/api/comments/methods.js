import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _ } from 'meteor/underscore';

import Comments from './Comments.js';
import Posts from '../posts/Posts.js';

const insert = new ValidatedMethod({
  name: 'comments.insert',
  validate: new SimpleSchema({
    postId: { type: String, regEx: SimpleSchema.RegEx.Id },
    body: { type: String },
  }).validator(),
  run({ postId, body }) {
    const user = Meteor.user();
    const post = Posts.findOne(postId);

    if (!post) {
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');
    }

    const comment = _.extend({ postId, body }, {
      userId: user._id,
      username: user.username,
      submittedAt: new Date(),
    });

    // update the post with the number of comments
    Posts.update(comment.postId, { $inc: { commentsCount: 1 } });

    // create the comment, save the id
    comment._id = Comments.insert(comment);

    // XXX: fix me
    // now create a notification, informing the user that there's been a comment
    // createCommentNotification(comment);

    return comment._id;
  },
});

export { insert };
