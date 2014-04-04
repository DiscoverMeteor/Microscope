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
  style: function(parent) {
    parent.posts.rewind();
    var rank = _.indexOf(parent.posts.map(function(p) { return p._id }), this._id);
    var newPosition = rank * POST_HEIGHT;
    var key = 'current-post-position-' + this._id;
    
    var previousPosition = Session.get(key);
    var props = {}
    if (! _.isUndefined(previousPosition)) {
      // calculate difference between old position and new position and send element there
      var delta = previousPosition - newPosition;
      props.style = "top: " + delta + "px";
      
      // if we are moving to the "old position", don't animate
      if (delta !== 0)
        props.class = "post instant"
    } else {
      props.class = 'post invisible';
    }
    
    // let it draw in the old position, then..
    if (previousPosition !== newPosition) {
      Meteor.setTimeout(function() {
        Session.set(key, newPosition);
      }); 
    }
    
    return props;
  }
});


Template.postItem.events({
  'click .upvotable': function(e) {
    e.preventDefault();
    Meteor.call('upvote', this._id);
  }
});