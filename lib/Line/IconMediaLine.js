'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMediaLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMediaLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMediaLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1360 1520h160v-160h-160v160zm-320 0h160v-160h-160v160zm-320 0h160v-160H720v160zm-320 0h160v-160H400v160zm960-960h160V400h-160v160zm-320 0h160V400h-160v160zm-320 0h160V400H720v160zm-320 0h160V400H400v160zm1280.08 1040L1680 320H240v1280h1440.08zM1840 320v1280c0 88.24-71.76 160-160 160H240c-88.24 0-160-71.76-160-160V320c0-88.32 71.76-160 160-160h1440c88.24 0 160 71.68 160 160zM800 720l480 240-480 240V720z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}