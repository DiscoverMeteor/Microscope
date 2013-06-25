Meteor.Router.add({
  '/feed.xml': function() {
    var feed = new RSS({
      title: "New Microscope Posts",
      description: "The latest posts from Microscope, the smallest news aggregator."
    });
    
    Posts.find({}, {sort: {submitted: -1}, limit: 20}).forEach(function(post) {
      feed.item({
        title: post.title,
        description: post.body,
        author: post.author,
        date: post.submitted,
        url: '/posts/' + post._id
      })
    });
    
    return feed.xml();
  },
  
  '/api/posts': function() {
    var data = Posts.find().fetch();
    return JSON.stringify(data);
  },
  
  '/api/posts/:_id': function(id) {
    var post = Posts.findOne(id);
    if (post) {
      return JSON.stringify(post);
    } else {
      return [404, "Post not found"];
    }
  }
});