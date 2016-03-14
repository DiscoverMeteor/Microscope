import React, { Component, PropTypes } from 'react';
import Errors from './Errors';

class ErrorItem extends Component {
  onComponentDidMount() {
    Errors.collection.update(error._id, {$set: {seen: true}});
  }
  render() {
    return (
      <div class="alert alert-error alert-danger alert-dismissable">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        {this.props.message}
      </div>
    );
  }
}

ErrorItem.propTypes = {
  error: PropTypes.shape({
    _id: PropTypes.string.isRequired,    
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default ErrorItem;