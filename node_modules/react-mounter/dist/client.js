'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._isDomReady = undefined;
exports._ready = _ready;
exports._getRootNode = _getRootNode;
exports.mounter = mounter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domready = require('domready');

var _domready2 = _interopRequireDefault(_domready);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document*/

var _isDomReady = exports._isDomReady = false;
function _ready(cb) {
  if (_isDomReady) {
    return cb();
  }

  (0, _domready2.default)(function () {
    exports._isDomReady = _isDomReady = true;
    setTimeout(cb, 10);
  });
}

function _getRootNode(rootId, rootProps) {
  var rootNode = document.getElementById(rootId);

  if (rootNode) {
    return rootNode;
  }

  var rootNodeHtml = (0, _utils.buildRootNode)(rootId, rootProps);
  var body = document.getElementsByTagName('body')[0];
  body.insertAdjacentHTML('beforeend', rootNodeHtml);

  return document.getElementById(rootId);
}

function mounter(layoutClass, regions, options) {
  _ready(function () {
    var rootId = options.rootId;
    var rootProps = options.rootProps;

    var rootNode = _getRootNode(rootId, rootProps);
    var el = _react2.default.createElement(layoutClass, regions);
    _reactDom2.default.render(el, rootNode);
  });
}