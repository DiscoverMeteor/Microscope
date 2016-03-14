import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { ValidationError } from 'meteor/mdg:validation-error';
import { Errors } from 'meteor/errors-react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { update, remove } from '../../api/posts/methods.js';
import { callMethod } from '../util/methods.js';


class PostsEdit extends Component {
  constructor() {
    super();

    this.onUrlChange = this.onUrlChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    const { post } = this.props;
    this.state = {
      url: post.url,
      title: post.title,
      errors: {},
    };
  }
  onSubmit(event) {
    event.preventDefault();
    const post = {
      id: this.props.post._id,
      title: this.state.title,
      url: this.state.url,
    };

    this.setState({ errors: {} });
    callMethod(update, post, error => {
      if (error instanceof ValidationError) {
        this.setState({ errors: error.errors });
      } else if (error) {
        Errors.throw(error.message);
      } else {
        this.setState({ body: null });
      }
    });
  }
  onUrlChange(event) {
    this.setState({ url: event.target.value });
  }
  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  onDelete(event) {
    event.preventDefault();

    if (confirm('Delete this post?')) { // eslint-disable-line no-alert
      callMethod(remove, this.props.post._id, error => {
        if (error) {
          Errors.throw(error.message);
        } else {
          FlowRouter.go('home');
        }
      });
    }
  }
  errorMessage(field) {
    return this.state.errors[field];
  }
  groupClasses(field) {
    return classnames('form-group', { 'has-error': this.state.errors[field] });
  }
  render() {
    const { url, title } = this.state;

    return (
      <form className="main form page">
        <div className={this.groupClasses('url')}>
          <label className="control-label" htmlFor="url">URL</label>
          <div className="controls">
            <input
              name="url"
              id="url"
              type="text"
              value={url}
              placeholder="Your URL"
              className="form-control"
            />
            <span className="help-block">{this.errorMessage('url')}</span>
          </div>
        </div>
        <div className={this.groupClasses('title')}>
          <label className="control-label" htmlFor="title">Title</label>
          <div className="controls">
            <input
              name="title"
              id="title"
              type="text"
              value={title}
              placeholder="Name your post"
              className="form-control"
            />
            <span className="help-block">{this.errorMessage('title')}</span>
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary submit"
          onSubmit={this.onSubmit}
        />
        <hr />
        <a className="btn btn-danger delete" href="#">Delete post</a>
      </form>
    );
  }
}

PostsEdit.propTypes = {
  ready: PropTypes.bool.isRequired,
  // XXX: enumerate prop types?
  post: PropTypes.object,
};

export default PostsEdit;

