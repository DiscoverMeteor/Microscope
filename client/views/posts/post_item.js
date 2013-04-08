Template.postItem.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

Template.postItem.events({
  'click .upvote': function(event) {
    event.preventDefault();
    Meteor.call('upvote', this._id);
  }
});