'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExpandLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExpandLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExpandLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1039.667 1405.196V959.992H880.333v445.204l-182.675-182.752-112.649 112.696L960 1710.288l374.991-375.148-112.649-112.696zM482 800.6h956V641.2H482zM482 561.5h956V402.1H482zM482 322.4h956V163H482z"/>\n    </g>\n</svg>'
  }));
}