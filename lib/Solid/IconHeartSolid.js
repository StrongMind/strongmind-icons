'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHeartSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHeartSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHeartSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1280 320c-127.52 0-245.68 66.96-320 166.4C885.68 386.96 767.52 320 640 320c-220.56 0-400 179.44-400 400 0 439.28 649.92 850.56 677.6 867.84A80.132 80.132 0 0 0 960 1600c14.72 0 29.44-4.08 42.4-12.16 27.68-17.28 677.6-428.56 677.6-867.84 0-220.56-179.44-400-400-400" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}