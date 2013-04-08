Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {sort: {submitted: -1}, limit: postsHandle.limit()});
  },
  postsReady: function() {
    return postsHandle.ready();
  },
  allPostsLoaded: function() {
    return postsHandle.ready() &&  
      Posts.find().count() < postsHandle.loaded();
  }
});

Template.postsList.events({
  'click .load-more': function(event) {
    event.preventDefault();
    postsHandle.loadNextPage();
  }
});
