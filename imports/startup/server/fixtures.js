import Posts from '../../api/posts/Posts.js';
import Comments from '../../api/comments/Comments.js';
import { Meteor } from 'meteor/meteor';

// Fixture data
if (Posts.find().count() === 0) {
  const now = new Date().getTime();

  // create two users
  const tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' },
  });
  const tom = Meteor.users.findOne(tomId);
  const sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' },
  });
  const sacha = Meteor.users.findOne(sachaId);

  const telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    userId: sacha._id,
    username: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submittedAt: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [], votes: 0,
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    username: tom.profile.name,
    submittedAt: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?',
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    username: sacha.profile.name,
    submittedAt: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!',
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    username: tom.profile.name,
    url: 'http://meteor.com',
    submittedAt: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0,
  });

  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    username: tom.profile.name,
    url: 'http://themeteorbook.com',
    submittedAt: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [], votes: 0,
  });

  for (let i = 0; i < 10; i++) {
    Posts.insert({
      title: `Test post #${i}`,
      userId: sacha._id,
      username: sacha.profile.name,
      url: `http://google.com/?q=test-${i}`,
      submittedAt: new Date(now - i * 3600 * 1000 + 1),
      commentsCount: 0,
      upvoters: [], votes: 0,
    });
  }
}
