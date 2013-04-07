Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    }
    
    Meteor.call('post', post, function(error, id) {
      if (error)
        return alert(error.reason);
        
        Router.go('postPage', {_id: id});
    });
  }
});