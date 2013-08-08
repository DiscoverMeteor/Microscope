Meteor.publish 'posts', (limit)->
  return Posts.find({}, {sort: {submitted: -1}, limit: limit})

Meteor.publish 'comments', (postId)->
  return Comments.find(
    postId: postId
  )

Meteor.publish 'notifications', ()->
  return Notifications.find({userId: this.userId})

Meteor.publish 'newPosts', (limit)->
  return Posts.find({}, {sort: {submitted: -1}, limit: limit})

Meteor.publish 'bestPosts', (limit)->
  return Posts.find({}, {sort: {votes: -1, submitted: -1}, limit: limit})
