'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDragHandleLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDragHandleLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDragHandleLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M642 480h240V240H642v240zm400 0h240V240h-240v240zM642 880h240V640H642v240zm400 0h240V640h-240v240zm-400 400h240v-240H642v240zm400 0h240v-240h-240v240zm-400 400h240v-240H642v240zm400 0h240v-240h-240v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}