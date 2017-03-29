'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowOpenUpLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowOpenUpLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowOpenUpLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 863.702l-519.957 520.212c-64.444 64.477-168.117 64.474-232.062.498-64.39-64.423-63.722-167.926.497-232.177L824.991 535.42c37.041-37.06 87.042-52.817 135.009-47.37 47.967-5.447 97.968 10.31 135.009 47.37l616.513 616.816c64.22 64.251 64.887 167.754.497 232.177-63.945 63.976-167.618 63.979-232.062-.498L960 863.702z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}