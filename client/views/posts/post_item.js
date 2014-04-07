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
  attrs: function() {
    var newPosition = this._rank * POST_HEIGHT;
    var key = 'current-post-position-' + this._id;
    
    var previousPosition = Session.get(key);
    var attrs = {}
    if (! _.isUndefined(previousPosition)) {
      // calculate difference between old position and new position and send element there
      var delta = previousPosition - newPosition;
      attrs.style = "top: " + delta + "px";
      
      // if we are moving to the "old position", don't animate
      if (delta !== 0)
        attrs.class = "post instant"
    } else {
      attrs.class = 'post invisible';
    }
    
    // let it draw in the old position, then..
    if (previousPosition !== newPosition) {
      Meteor.setTimeout(function() {
        Session.set(key, newPosition);
      }); 
    }
    
    console.log(attrs)
    return attrs;
  }
});


Template.postItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});