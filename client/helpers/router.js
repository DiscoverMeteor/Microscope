Router.configure({
  layout: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('home', {
    path: '/', template: 'newPosts'
  });
  
  this.route('bestPosts', {path: '/best'});
  this.route('newPosts', {path: '/new'});
  
  this.route('postPage', {
    path: '/posts/:_id',
    waitOn: function() {
      return Meteor.subscribe('singlePost', this.params._id);
    },
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });
  
});


// Meteor.Router.add({
//   '/': {to: 'newPosts', as: 'home'},
//   '/best': 'bestPosts',
//   '/new': 'newPosts',
//   
//   '/posts/:_id': {
//     to: 'postPage', 
//     and: function(id) { Session.set('currentPostId', id); }
//   },
//   
//   '/posts/:_id/edit': {
//     to: 'postEdit', 
//     and: function(id) { Session.set('currentPostId', id); }    
//   },
//   
//   '/submit': 'postSubmit'
// });
// 
// Meteor.Router.filters({
//   'requireLogin': function(page) {
//     if (Meteor.user())
//       return page;
//     else if (Meteor.loggingIn())
//       return 'loading';
//     else
//       return 'accessDenied';
//   },
//   'clearErrors': function(page) {
//     clearErrors();
//     return page;
//   }
// });
// 
// Meteor.Router.filter('requireLogin', {only: 'postSubmit'});
// Meteor.Router.filter('clearErrors');
