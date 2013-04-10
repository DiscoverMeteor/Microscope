Meteor.Router.add({
  '/': 'postsList',
  
  '/posts/:_id': {
    to: 'postPage', 
    and: function(id) { Session.set('currentPostId', id); }
  },
  
  '/posts/:_id/edit': {
    to: 'postEdit', 
    and: function(id) { Session.set('currentPostId', id); }    
  },
  
  '/submit': 'postSubmit'
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  },
  'clearErrors': function(page) {
    Meteor.Errors.clear();
    return page;
  }
});

Meteor.Router.filter('requireLogin', {only: 'postSubmit'});
Meteor.Router.filter('clearErrors');
