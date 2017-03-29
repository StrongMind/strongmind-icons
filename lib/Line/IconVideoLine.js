'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconVideoLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconVideoLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconVideoLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 160H240c-88.24 0-160 71.68-160 160v1280c0 88.24 71.76 160 160 160h1440c88.24 0 160-71.76 160-160V320c0-88.32-71.76-160-160-160zM800 1200l480-240-480-240v480zm-560 400V320h1440l.08 1280H240zM400 400h160v160H400V400zm320 0h160v160H720V400zm320 0h160v160h-160V400zm320 0h160v160h-160V400zm-960 960h160v160H400v-160zm320 0h160v160H720v-160zm320 0h160v160h-160v-160zm320 0h160v160h-160v-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}