'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMarkerSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMarkerSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMarkerSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1016.56 1816.54l480-479.994c15.6-15.6 23.44-36.08 23.44-56.56V160c0-44.16-35.84-79.999-80-79.999H480c-44.16 0-80 35.84-80 80v1119.986c0 20.48 7.84 40.96 23.44 56.56l480 479.994c31.28 31.28 81.84 31.28 113.12 0z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}