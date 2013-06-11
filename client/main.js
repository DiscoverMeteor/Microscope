Tracker.autorun(function(){
  if (Meteor.user() && !Meteor.loggingIn()) {
    var intercomSettings = {
      name: Meteor.user().username,
      email: Meteor.user().emails[0].address,
      created_at: Math.round(Meteor.user().createdAt/1000),
      favorite_color: _.sample(['blue','red','green','yellow']),
      user_id: Meteor.user()._id,
      user_hash: Meteor.user().intercomHash,
      app_id: "4na10aq1"
    };
    Intercom('boot', intercomSettings);
  }
});