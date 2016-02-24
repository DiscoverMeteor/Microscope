Meteor.publish('comments', function(postId) {
  check(postId, String);
  return Comments.find({postId: postId});
});