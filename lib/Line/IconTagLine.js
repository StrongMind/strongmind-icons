'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTagLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTagLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTagLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M320 766.88l800 800L1566.88 1120l-800-800H320v446.88zM1120 1760c-20.48 0-40.96-7.84-56.56-23.44l-880-880C168.48 841.6 160 821.2 160 800V240c0-44.16 35.84-80 80-80h560c21.2 0 41.52 8.48 56.56 23.44l880 880c31.28 31.28 31.28 81.84 0 113.12l-560 560c-15.6 15.6-36.08 23.44-56.56 23.44zM720 560.008c0 88.24-71.68 160-160 160-88.48 0-160-71.76-160-160 0-88.4 71.52-160 160-160 88.32 0 160 71.6 160 160" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}