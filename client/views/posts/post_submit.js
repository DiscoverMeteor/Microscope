var ERRORS_KEY = 'postSubmitErrors';

Template.postSubmit.created = function() {
  Session.set(ERRORS_KEY, {});
}

Template.postSubmit.helpers({
  errors: function() {
    return Session.get(ERRORS_KEY);
  }
});

Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    }
    
    // ensure the post has a title
    var errors = {}
    if (!post.title)
      errors.title = 'Please fill in a headline';
    
    // and a URL
    if (!post.url)
      errors.url =  "Please fill in a URL";
    
    if (_.keys(errors).length)
      return Session.set(ERRORS_KEY, errors);
    
    Meteor.call('post', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);
      
      if (result.postExists) {
        throwError('This link has already been posted');
      }
    
      Router.go('postPage', {_id: result._id});  
    });
  }
});