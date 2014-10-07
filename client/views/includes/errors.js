var ERROR_DISPLAY = 3000;

Template.errors.helpers({
  ready: function() {
    return Router.current() && Router.current().ready();
  },
  errors: function() {
    return Errors.find();
  }
});

Template.error.rendered = function() {
  var error = this.data;
  Errors.update(error._id, {$set: {seen: true}});

  Meteor.setTimeout(clearErrors, 3000);
};