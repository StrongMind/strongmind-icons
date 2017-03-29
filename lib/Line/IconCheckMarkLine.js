'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCheckMarkLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckMarkLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCheckMarkLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M937.152 1320c-31.68 0-62.24-12.56-84.88-35.12l-377.12-377.12c-46.88-46.88-46.88-122.8 0-169.68 46.8-46.88 122.8-46.88 169.68 0l277.04 276.88 546.16-764.72c38.56-53.84 113.44-66.32 167.44-27.92 53.92 38.56 66.4 113.44 27.92 167.44l-628.56 880c-20.56 28.64-52.64 46.96-87.76 49.84-3.28.24-6.64.4-9.92.4zM1600 880v720H320V320h891.44V160H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.4 0 160-71.6 160-160V880h-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}