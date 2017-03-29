'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRefreshLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRefreshLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRefreshLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M510.03 508.094C627.875 389.769 788.2 320.006 961.968 320.006c352.974 0 640.026 287.132 640.026 640.026H1762C1762 518.894 1403.186 160 961.968 160c-217.209 0-417.617 87.123-564.983 235.05L241.94 240.002v480.02h480.02l-211.93-211.93zm903.94 903.94c-117.845 118.325-278.171 188.088-451.938 188.088-352.974 0-640.026-287.132-640.026-640.026H162c0 441.138 358.814 800.032 800.032 800.032 217.209 0 417.617-87.123 564.983-235.13l155.046 155.127v-480.02h-480.02l211.93 211.93z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}