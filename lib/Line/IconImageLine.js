'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconImageLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconImageLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconImageLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M160 399.607C160 311.46 231.857 240 319.264 240h1281.472c87.96 0 159.264 71.41 159.264 159.607v1120.786c0 88.148-71.857 159.607-159.264 159.607H319.264C231.304 1680 160 1608.59 160 1520.393V399.607zm160 0v1120.786c0-.116-.277-.393-.736-.393h1281.472c-.76 0-.736-.023-.736.393V399.607c0 .116.277.393.736.393H319.264c.76 0 .736.023.736-.393zM480 1360l240-320 160 160 320-400 240 560H480zm200-800c110.32 0 200 89.52 200 200 0 110.56-89.68 200-200 200-110.56 0-200-89.44-200-200 0-110.48 89.44-200 200-200z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}