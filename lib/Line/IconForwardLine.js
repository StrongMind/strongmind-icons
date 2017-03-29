'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconForwardLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconForwardLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconForwardLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1040.08 160c20.8 0 41.2 8.16 56.48 23.44l720 720c31.28 31.28 31.28 81.84 0 113.12l-720 720A80.027 80.027 0 0 1 1040 1760c-10.32 0-20.72-2-30.64-6.08-29.84-12.4-49.36-41.6-49.36-73.92v-240H159.28c-43.2 0-79.28-35.84-79.28-80.16v-799.6c0-43.76 35.44-80.24 79.28-80.24H960V240c0-32.32 19.52-61.52 49.36-73.92 10-4.08 20.4-6.08 30.72-6.08M1120 433.2V640H240v640h880v206.88L1646.8 960 1120 433.2" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}