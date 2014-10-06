Meteor.publish('posts', function(options) {
  check(options, Object);
  
  return Posts.find({}, options);
});

Meteor.publish('singlePost', function(id) {
  check(id, String);
  
  return id && Posts.find(id);
});


Meteor.publish('comments', function(postId) {
  check(postId, String);
  
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});