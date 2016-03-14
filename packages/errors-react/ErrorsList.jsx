import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import ErrorItem from './ErrorItem.jsx';
import Errors from './Errors.jsx'

const ErrorsList = errors => (
  <div>
    {errors.map(error => <ErrorItem key={error._id} error={error} />)}
  </div>
);

ErrorsList.propTypes = {
  errors: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    errors: Errors.collection.find(),
  };
}, ErrorsList);
