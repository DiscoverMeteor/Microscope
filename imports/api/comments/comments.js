import { Mongo } from 'meteor/mongo';

const Comments = new Mongo.Collection('comments');

// XXX: add a schema to comments

export default Comments;
