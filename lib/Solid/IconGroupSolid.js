'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGroupSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGroupSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGroupSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1040 960v140h560v254.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1260h-400v94.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1260H480v94.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1100h560V960H555V858.667c0-109.44 86.063-197.6 193.388-202.667 54.674 61.813 129.6 101.333 211.612 101.333 82.013 0 156.938-39.52 211.612-101.333C1279.95 661.067 1365 749.227 1365 858.667V960h-325zm-79.5-694C849.125 266 758 356.72 758 468.5S849.125 671 960.5 671 1163 580.28 1163 468.5 1071.875 266 960.5 266z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}