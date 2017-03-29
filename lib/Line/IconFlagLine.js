'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFlagLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFlagLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFlagLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M243 1757h159.333V163H243zM1625.926 566.792l-1035.667-398.5c-24.458-9.325-52.022-6.137-73.692 8.687a79.727 79.727 0 0 0-34.575 65.753v797c0 26.221 12.906 50.769 34.575 65.673 13.464 9.245 29.238 14.027 45.092 14.027 9.64 0 19.359-1.833 28.6-5.34l1035.667-398.5c30.751-11.796 51.066-41.444 51.066-74.36 0-32.996-20.315-62.565-51.066-74.44"/>\n    </g>\n</svg>'
  }));
}