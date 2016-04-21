// <template name="postSubmit">
//   <form class="main form page">
//     <div class="form-group {{errorClass 'url'}}">
//       <label class="control-label" for="url">URL</label>
//       <div class="controls">
//           <input name="url" id="url" type="text" value="" placeholder="Your URL" class="form-control"/>
//           <span class="help-block">{{errorMessage 'url'}}</span>
//       </div>
//     </div>
//     <div class="form-group {{errorClass 'title'}}">
//       <label class="control-label" for="title">Title</label>
//       <div class="controls">
//           <input name="title" id="title" type="text" value="" placeholder="Name your post" class="form-control"/>
//           <span class="help-block">{{errorMessage 'title'}}</span>
//       </div>
//     </div>
//     <input type="submit" value="Submit" class="btn btn-primary"/>
//   </form>
// </template>

// Template.postSubmit.onCreated(function() {
//   Session.set('postSubmitErrors', {});
// });

// Template.postSubmit.helpers({
//   errorMessage: function(field) {
//     return Session.get('postSubmitErrors')[field];
//   },
//   errorClass: function (field) {
//     return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
//   }
// });

// Template.postSubmit.events({
//   'submit form': function(e) {
//     e.preventDefault();
    
//     var post = {
//       url: $(e.target).find('[name=url]').val(),
//       title: $(e.target).find('[name=title]').val()
//     };
    
//     var errors = validatePost(post);
//     if (errors.title || errors.url)
//       return Session.set('postSubmitErrors', errors);
    
//     Meteor.call('postInsert', post, function(error, result) {
//       // display the error to the user and abort
//       if (error)
//         return throwError(error.reason);
      
//       // show this result but route anyway
//       if (result.postExists)
//         throwError('This link has already been posted');
      
//       Router.go('postPage', {_id: result._id});  
//     });
//   }
// });