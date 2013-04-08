Meteor.subscribe('posts');

Deps.autorun(function() {
  Meteor.subscribe('comments', Session.get('currentPostId'));
})

Meteor.subscribe('notifications');
