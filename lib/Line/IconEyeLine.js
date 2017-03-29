'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEyeLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEyeLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEyeLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1322.143c-301.773 0-546.96-259.005-632.6-362.215 85.423-103.284 329.74-362.07 632.6-362.07 301.773 0 546.96 259.004 632.6 362.214-85.423 103.284-329.74 362.07-632.6 362.07m783.74-403.86C1730.41 899.304 1410.813 453 960 453S189.59 899.305 176.26 918.281a72.262 72.262 0 0 0 0 83.438C189.59 1020.695 509.187 1467 960 1467s770.41-446.305 783.74-465.281a72.262 72.262 0 0 0 0-83.438"/>\n        <path d="M960 670.286c-159.835 0-289.818 129.937-289.818 289.714S800.165 1249.714 960 1249.714c159.835 0 289.818-129.937 289.818-289.714S1119.835 670.286 960 670.286"/>\n    </g>\n</svg>'
  }));
}