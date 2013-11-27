Template.postsList.helpers({
  hasMorePosts: function(){
    this.posts.rewind();
    return Router.current().limit() == this.posts.fetch().length;
  }
});
