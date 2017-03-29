'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconInfoLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInfoLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconInfoLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960.175 1603.365c-354.283 0-642.544-288.26-642.544-642.544 0-354.276 288.26-642.537 642.544-642.537s642.545 288.261 642.545 642.537c0 354.283-288.261 642.544-642.545 642.544m0-1445.719c-442.874 0-803.174 360.308-803.174 803.175 0 442.954 360.3 803.182 803.174 803.182 442.875 0 803.175-360.228 803.175-803.182 0-442.867-360.3-803.175-803.175-803.175"/>\n        <path d="M812 937.007C812 906.075 837.077 881 868.002 881h183.996c30.93 0 56.002 25.08 56.002 56.007v506.986c0 30.932-25.077 56.007-56.002 56.007H868.002c-30.93 0-56.002-25.08-56.002-56.007V937.007zM960 733c86.156 0 156-69.844 156-156s-69.844-156-156-156-156 69.844-156 156 69.844 156 156 156z"/>\n    </g>\n</svg>'
  }));
}