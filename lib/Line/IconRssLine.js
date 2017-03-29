'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRssLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRssLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRssLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M282 200v159.992c705.76 0 1280 574.21 1280 1279.932h160C1722 845.966 1076.08 200 282 200zm0 479.975v159.991c441.12 0 800 358.701 800 799.958h160c0-529.332-430.64-959.95-960-959.95zM442 1720c132.548 0 240-107.446 240-239.987 0-132.542-107.452-239.988-240-239.988s-240 107.446-240 239.988C202 1612.554 309.452 1720 442 1720z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}