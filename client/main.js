postsHandle = Meteor.subscribeWithPagination('posts', 10);

Deps.autorun(function() {
  Meteor.subscribe('comments', Session.get('currentPostId'));
})

Meteor.subscribe('notifications');
