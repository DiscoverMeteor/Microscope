Meteor.Router.add({
  '/feed.xml': function() {
    var feed = new RSS({
      title: "New Microscope Posts",
      description: "The latest posts from Microscope, the smallest news aggregator."
    });
    
    return feed.xml();
  }
});