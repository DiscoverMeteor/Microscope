Errors = {
  // Local (client-only) collection
  collection: new Meteor.Collection(null),
  
  throw: function(message) {
    Errors.collection.insert({message: message, seen: false})
  },
  clearSeen: function() {
    Errors.collection.remove({seen: true});
  }
};
