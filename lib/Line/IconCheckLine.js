'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCheckLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCheckLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M799.967 1680c-42.24 0-83.039-16.72-113.118-46.88l-479.99-479.993c-62.479-62.48-62.479-163.758 0-226.237 62.479-62.48 163.757-62.48 226.235 0l346.473 346.395 690.146-966.227c51.359-72 151.437-88.56 223.195-37.28 71.999 51.44 88.638 151.358 37.28 223.197L930.203 1612.961c-27.36 38.32-70.159 62.56-117.038 66.479-4.48.4-8.8.56-13.2.56" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}