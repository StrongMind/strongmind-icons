'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAlertSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAlertSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAlertSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 1105.722c-88.4 0-160-71.577-160-159.95V705.849C1440 440.812 1225.12 226 960 226S480 440.812 480 705.848v239.925c0 88.372-71.6 159.95-160 159.95H160v239.923h1600v-239.924h-160zM960 1695c151.28 0 273.76-119.722 280-269.355H680C686.24 1575.278 808.72 1695 960 1695z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}