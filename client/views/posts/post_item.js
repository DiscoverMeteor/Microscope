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
    var key = 'current-post-position-' + this._id;
    var previousPosition = Session.get(key);
    var attributes = {}

    if (! _.isUndefined(previousPosition)) {
      // calculate difference between old position and new position and send element there
      var delta = previousPosition - newPosition;
      attributes.style = "top: " + delta + "px";
      
      // if we are moving back to 0, add "animate" class
      if (delta === 0)
        attributes.class = "post animate"
    } else {
      // if no Session variable is set, this is the first time the helper is being run
      attributes.class = 'post invisible';
    }
    
    // let it draw in the old position, then..
    if (previousPosition !== newPosition) {
      Meteor.setTimeout(function() {
        Session.set(key, newPosition);
      }); 
    }
    
    console.log(attributes)
    return attributes;
  }
});


Template.postItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});