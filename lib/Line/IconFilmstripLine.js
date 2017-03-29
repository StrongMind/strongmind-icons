'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilmstripLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilmstripLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilmstripLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1032.447 579.94l217.364-289.73H887.538L670.175 579.94zM1467.175 290.21L1249.81 579.94h507.182V290.21zM815.084 869.67l434.727 289.73-434.727 289.729v-579.46zm-652.091 579.459c0 79.965 64.847 144.865 144.909 144.865h1304.182c79.99 0 144.909-64.9 144.909-144.865V724.805h-1594v724.324zM670.175 290.21H162.993v289.73H452.81z"/>\n    </g>\n</svg>'
  }));
}