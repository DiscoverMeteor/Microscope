import React, { PropTypes } from 'react';

const CommentsNew = ({ post }) => (
  <div />
);

export default CommentsNew;

// // <template name="commentSubmit">
// //   <form name="comment" class="comment-form form">
// //     <div class="form-group {{errorClass 'body'}}">
// //         <div class="controls">
// //             <label for="body">Comment on this post</label>
// //             <textarea name="body" id="body" class="form-control" rows="3"></textarea>
// //             <span class="help-block">{{errorMessage 'body'}}</span>
// //         </div>
// //     </div>
// //     <button type="submit" class="btn btn-primary">Add Comment</button>
// //   </form>
// // </template>

// Template.commentSubmit.onCreated(function() {
//   Session.set('commentSubmitErrors', {});
// });

// Template.commentSubmit.helpers({
//   errorMessage: function(field) {
//     return Session.get('commentSubmitErrors')[field];
//   },
//   errorClass: function (field) {
//     return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
//   }
// });

// Template.commentSubmit.events({
//   'submit form': function(e, template) {
//     e.preventDefault();
    
//     var $body = $(e.target).find('[name=body]');
//     var comment = {
//       body: $body.val(),
//       postId: template.data._id
//     };
    
//     var errors = {};
//     if (! comment.body) {
//       errors.body = "Please write some content";
//       return Session.set('commentSubmitErrors', errors);
//     }
    
//     Meteor.call('commentInsert', comment, function(error, commentId) {
//       if (error){
//         throwError(error.reason);
//       } else {
//         $body.val('');
//       }
//     });
//   }
// });