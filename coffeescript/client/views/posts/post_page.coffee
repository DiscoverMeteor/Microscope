Template.postPage.helpers(
  currentPost: ()->
    Posts.findOne Session.get('currentPostId')

  comments: ()->
    return Comments.find({postId: this._id})
)
