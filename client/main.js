newPostsHandle = Meteor.subscribeWithPagination('newPosts', 10);
bestPostsHandle = Meteor.subscribeWithPagination('bestPosts', 10);
mostClickedPostsHandle = Meteor.subscribeWithPagination('mostClickedPosts', 10);

Deps.autorun(function() {
  Meteor.subscribe('singlePost', Session.get('currentPostId'));
  
  Meteor.subscribe('comments', Session.get('currentPostId'));
})

Meteor.subscribe('notifications');

Meteor.subscribe('currentUser');

Deps.autorun(function(){
  if (Meteor.user() && !Meteor.loggingIn()) {
    Meteor.call('getHash', Meteor.user().emails[0].address, function(error, result){
      Session.set('userEmailHash', result);
    });
    if(Session.get('userEmailHash')){
      var intercomSettings = {
        email: Meteor.user().emails[0].address,
        created_at: Math.round(Meteor.user().createdAt/1000),
        user_name: Meteor.user().username,
        user_hash: Session.get('userEmailHash'),
        widget: {
          activator: '#Intercom',
          use_counter: true
        },
        app_id: "k20iexvc"
      };
      Intercom('boot', intercomSettings);
    }
  }
});