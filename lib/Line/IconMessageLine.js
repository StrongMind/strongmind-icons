'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMessageLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMessageLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMessageLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M320 1321V695.32l597.6 373.52A80.132 80.132 0 0 0 960 1081c14.72 0 29.44-4.08 42.4-12.16l597.6-373.6.08 625.76H320zm1129.04-720L960 906.6 470.96 601h978.08zM1600 441H320c-88.24 0-160 71.76-160 160v720c0 88.24 71.76 160 160 160h1280c88.24 0 160-71.76 160-160V601c0-88.24-71.76-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}