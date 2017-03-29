'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMarkerLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMarkerLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMarkerLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1016.56 1816.55l479.994-480c15.6-15.6 23.44-36.08 23.44-56.56v-1120c0-44.16-35.84-80-80-80H480.006c-44.159 0-79.999 35.84-79.999 80v1120c0 20.48 7.84 40.96 23.44 56.56l479.995 480c31.28 31.28 81.839 31.28 113.118 0zM560 239.998h800v959.99l-400 399.995-400-399.996V239.998z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}