'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHeartLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHeartLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHeartLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M640 480c-132.32 0-240 107.68-240 240 0 269.04 371.44 576.56 560 704.48 188.56-127.92 560-435.44 560-704.48 0-132.32-107.68-240-240-240-135.12 0-240 129.04-240 240 0 44.16-35.84 80-80 80s-80-35.84-80-80c0-110.96-104.88-240-240-240m320 1120c-14.72 0-29.44-4.08-42.4-12.16C889.92 1570.56 240 1159.28 240 720c0-220.56 179.44-400 400-400 127.52 0 245.68 66.96 320 166.4 74.32-99.44 192.48-166.4 320-166.4 220.56 0 400 179.44 400 400 0 439.28-649.92 850.56-677.6 867.84A80.132 80.132 0 0 1 960 1600" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}