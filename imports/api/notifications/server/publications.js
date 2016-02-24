Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});
