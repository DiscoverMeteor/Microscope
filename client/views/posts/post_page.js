Template.postPage.helpers({
  currentPost: function() {
    return Posts.findOne(Session.get('currentPostId'));
  },
  comments: function() {
    return Comments.find({postId: this._id});
  }
});