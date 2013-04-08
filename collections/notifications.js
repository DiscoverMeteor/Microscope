Notifications = new Meteor.Collection('notifications');

Notifications.allow({
  update: ownsDocument
});

createCommentNotification = function(comment) {
  var post = Posts.findOne(comment.postId);
  Notifications.insert({
    userId: post.userId,
    postId: post._id,
    commentId: comment._id,
    commenterName: comment.author,
    read: false
  });
};