Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
  this.route('postsList', {path: '/'});
  
  this.route('postPage', {
    path: '/posts/:_id',
    data: function() { return Posts.findOne(this.params._id); }
  });
  
  this.route('postSubmit', {
    path: '/submit'
  });
});


var requireLogin = function(pause) {
  if (! Meteor.user()) {
    this.render('accessDenied');
    pause();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});