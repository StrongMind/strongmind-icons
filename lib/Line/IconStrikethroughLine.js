'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStrikethroughLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStrikethroughLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStrikethroughLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 880H240v160h720c132.32 0 240 107.68 240 240s-107.68 240-240 240H720v-80H560v160c0 44.16 35.84 80 80 80h320c220.56 0 400-179.44 400-400 0-90.4-31.28-172.96-82-240h402V880zM734.768 720c-8.96-25.12-14.8-51.76-14.8-80 0-132.32 107.68-240 240-240h160v80h160V320c0-44.16-35.76-80-80-80h-240c-220.48 0-400 179.44-400 400 0 27.36 2.88 54.16 8.16 80h166.64z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}