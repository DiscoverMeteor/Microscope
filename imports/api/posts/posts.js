import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Posts = new Mongo.Collection('posts');

const schema = new SimpleSchema({
  title: {
    type: String,
    min: 5,
    max: 50,
  },
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
  },
  username: {
    type: String,
    denyUpdate: true,
  },
  submittedAt: {
    type: Date,
    denyUpdate: true,
  },
  commentsCount: {
    type: Number,
    defaultValue: 0,
  },
  upvoterIds: {
    type: Array,
    defaultValue: [],
  },
  'upvoterIds.$': {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  upvotes: {
    type: Number,
    defaultValue: 0,
  },
});

Posts.attachSchema(schema);

export default Posts;
