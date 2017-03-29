'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCompleteLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCompleteLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCompleteLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 320c-352.88 0-640 287.12-640 640s287.12 640 640 640 640-287.12 640-640-287.12-640-640-640m0 1440c-441.12 0-800-358.88-800-800s358.88-800 800-800 800 358.88 800 800-358.88 800-800 800m-67.224-405.824l-323.52-323.44 141.44-141.44 156.56 156.56 331.36-463.92 162.72 116.16-468.56 656.08z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}