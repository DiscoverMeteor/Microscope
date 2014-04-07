var POST_HEIGHT = 80;

Template.postItem.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary upvotable';
    } else {
      return 'disabled';
    }
  },
  attributes: function() {
    var newPosition = this._rank * POST_HEIGHT;
    var sessionKey = 'current-post-position-' + this._id;
    var previousPosition = Session.get(sessionKey);
    var attributes = {}

    if (_.isUndefined(previousPosition)) {
      attributes.class = 'post invisible';
    } else {
      var delta = previousPosition - newPosition;      
      attributes.style = "top: " + delta + "px";
      if (delta === 0)
        attributes.class = "post animate"
    }
    
    Meteor.setTimeout(function() {
      Session.set(sessionKey, newPosition);
    }); 
    
    return attributes;
  }
});


Template.postItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});