import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { ValidationError } from 'meteor/mdg:validation-error';

import { insert } from '../../api/comments/methods.js';

class CommentsNew extends Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.state = { errors: {} };
  }

  onSubmit() {
    const comment = {
      postId: this.props.postId,
      body: 'lorem ipsum',
    };

    try {
      insert(comment, error => {
        // XXX: clear body value
        // XXX: handle error
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        this.setState(error.errors);
      } else {
        throw error;
      }
    }
  }

  errorMessage(field) {
    return this.state.errors[field];
  }

  render() {
    const fieldClasses = classnames('form-group', { 'has-error': this.state.errors.body });

    return (
      <form name="comment" className="comment-form form" onSubmit={this.onSubmit}>
        <div className={fieldClasses}>
          <div className="controls">
            <label htmlFor="body">Comment on this post</label>
            <textarea name="body" id="body" className="form-control" rows="3"></textarea>
            <span className="help-block">{this.errorMessage('body')}</span>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add Comment</button>
      </form>
    );
  }
}

CommentsNew.propTypes = {
  postId: PropTypes.string.isRequired
};

export default CommentsNew;



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