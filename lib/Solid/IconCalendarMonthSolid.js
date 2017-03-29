'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarMonthSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarMonthSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarMonthSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160zm-320 1080h240v240h-240v-240zm-800 0h240v240H480v-240zm400 0h240v240H880v-240zm400-400h240v240h-240v-240zm-400 0h240v240H880v-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}