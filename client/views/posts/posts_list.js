Template.newPosts.helpers({
  options: function() {
    return {
      sort: {submitted: -1},
      handle: newPostsHandle
    }
  }
});

Template.bestPosts.helpers({
  options: function() {
    return {
      sort: {votes: -1, submitted: -1},
      handle: bestPostsHandle
    }
  }
});

Template.postsList.helpers({
  postsWithRank: function() {
    var i = 0, options = {sort: this.sort, limit: this.handle.limit()};
    return Posts.find({}, options).map(function(post) {
      post._rank = i;
      i += 1;
      return post;
    });
  },

  postsReady: function() {
    return this.handle.ready();
  },
  allPostsLoaded: function() {
    return this.handle.ready() &&  
      Posts.find().count() < this.handle.loaded();
  }
});

Template.postsList.events({
  'click .load-more': function(e) {
    e.preventDefault();
    this.handle.loadNextPage();
  }
});
