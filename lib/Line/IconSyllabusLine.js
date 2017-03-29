'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSyllabusLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSyllabusLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSyllabusLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M802 480h960V320H802v160zm0 560h960V880H802v160zm0 560h960v-160H802v160zM562 160H242c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V240c0-44.16-35.76-80-80-80zm0 560H242c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V800c0-44.16-35.76-80-80-80zm0 560H242c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80v-320c0-44.16-35.76-80-80-80z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}