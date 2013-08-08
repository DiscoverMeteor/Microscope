@Notifications = new Meteor.Collection('notifications')

Notifications.allow(
  update: ownsDocument
)

@createCommentNotification = (comment)->
  post = Posts.findOne(comment.postId)
  if comment.userId isnt post.userId
    console.log "inserting"
    Notifications.insert(
      userId: post.userId
      postId: post._id
      commentId: comment._id
      commenterName: comment.author
      read: false
    )
