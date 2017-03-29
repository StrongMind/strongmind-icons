'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStudentViewLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStudentViewLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStudentViewLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1240 1640H280c-88.24 0-160-71.76-160-160V680h160v800h960v160zm400-320H600c-88.24 0-160-71.76-160-160V440c0-88.32 71.76-160 160-160h1040c88.24 0 160 71.68 160 160v720c0 88.24-71.76 160-160 160zM600 440v720h1040.08l-.08-720H600zm960 320h-320V600h320v160zm0 320h-320V920h320v160zm-880 0c0-147.28 92.72-240 240-240s240 92.72 240 240H680zm400-400c0 88.32-71.68 160-160 160s-160-71.68-160-160 71.68-160 160-160 160 71.68 160 160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}