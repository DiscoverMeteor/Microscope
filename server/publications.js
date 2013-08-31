Meteor.publish('newPosts', function(limit) {
  return Posts.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('bestPosts', function(limit) {
  return Posts.find({}, {sort: {votes: -1, submitted: -1}, limit: limit});
});

Meteor.publish('mostClickedPosts', function(limit) {
  return Posts.find({}, {sort: {clicks: -1, submitted: -1}, limit: limit});
});

Meteor.publish('searchedPosts', function(query) {
  console.log(query)
  if(query){
      var doc = {};
      var postsIds = getSearchedPosts(query);
      console.log(postsIds)
      if (postsIds) {
          doc._id = {
              $in: postsIds
          };
      }
      return Posts.find(doc);
    }
});

Meteor.publish('singlePost', function(id) {
  return id && Posts.find(id);
});

Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});

Meteor.publish('currentUser', function() {
  return Meteor.users.find(this.userId, {fields: {createdAt: 1}});
});