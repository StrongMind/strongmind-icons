'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarAddLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarAddLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarAddLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 320h-120V120c0-66.32-53.76-120-120-120-66.24 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.24 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h640v-160H320V800h1280v280h160V480c0-88.4-71.6-160-160-160zm-80 960h-160v240h-240v160h240v240h160v-240h240v-160h-240v-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}