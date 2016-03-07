// XXX: temporarily copied out of the react-meteor-data package until a new version is published.

/**
 * Container helper using react-meteor-data.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { ReactMeteorData } from 'meteor/react-meteor-data';

export default function createContainer(options = {}, Component) {
  let expandedOptions = options;
  if (typeof options === 'function') {
    expandedOptions = {
      getMeteorData: options,
    };
  }

  const {
    getMeteorData,
    pure = true,
  } = expandedOptions;

  const mixins = [ReactMeteorData];
  if (pure) {
    mixins.push(PureRenderMixin);
  }

  /* eslint-disable react/prefer-es6-class */
  return React.createClass({
    displayName: 'MeteorDataContainer',
    mixins,
    getMeteorData() {
      return getMeteorData(this.props);
    },
    render() {
      return <Component {...this.props} {...this.data} />;
    },
  });
}
