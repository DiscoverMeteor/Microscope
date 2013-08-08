@postsHandle = Meteor.subscribeWithPagination 'posts', 10
@newPostsHandle = Meteor.subscribeWithPagination 'newPosts', 10
@bestPostsHandle = Meteor.subscribeWithPagination 'bestPosts', 10

Meteor.subscribe 'notifications'

Deps.autorun ()->
  Meteor.subscribe 'comments', Session.get('currentPostId')

Deps.autorun ()->
  console.log 'There are' + Posts.find().count() + ' posts'
