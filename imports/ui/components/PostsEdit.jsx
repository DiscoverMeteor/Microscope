// <template name="postEdit">
//   <form class="main form page">
//     <div class="form-group {{errorClass 'url'}}">
//       <label class="control-label" for="url">URL</label>
//       <div class="controls">
//           <input name="url" id="url" type="text" value="{{url}}" placeholder="Your URL" class="form-control"/>
//           <span class="help-block">{{errorMessage 'url'}}</span>
//       </div>
//     </div>
//     <div class="form-group {{errorClass 'title'}}">
//       <label class="control-label" for="title">Title</label>
//       <div class="controls">
//           <input name="title" id="title" type="text" value="{{title}}" placeholder="Name your post" class="form-control"/>
//           <span class="help-block">{{errorMessage 'title'}}</span>
//       </div>
//     </div>
//     <input type="submit" value="Submit" class="btn btn-primary submit"/>
//     <hr/>
//     <a class="btn btn-danger delete" href="#">Delete post</a>
//   </form>
// </template>

// Template.postEdit.onCreated(function() {
//   Session.set('postEditErrors', {});
// });

// Template.postEdit.helpers({
//   errorMessage: function(field) {
//     return Session.get('postEditErrors')[field];
//   },
//   errorClass: function (field) {
//     return !!Session.get('postEditErrors')[field] ? 'has-error' : '';
//   }
// });

// Template.postEdit.events({
//   'submit form': function(e) {
//     e.preventDefault();
    
//     var currentPostId = this._id;
    
//     var postProperties = {
//       url: $(e.target).find('[name=url]').val(),
//       title: $(e.target).find('[name=title]').val()
//     }
    
//     var errors = validatePost(postProperties);
//     if (errors.title || errors.url)
//       return Session.set('postEditErrors', errors);
    
//     Posts.update(currentPostId, {$set: postProperties}, function(error) {
//       if (error) {
//         // display the error to the user
//         throwError(error.reason);
//       } else {
//         Router.go('postPage', {_id: currentPostId});
//       }
//     });
//   },
  
//   'click .delete': function(e) {
//     e.preventDefault();
    
//     if (confirm("Delete this post?")) {
//       var currentPostId = this._id;
//       Posts.remove(currentPostId);
//       Router.go('home');
//     }
//   }
// });
