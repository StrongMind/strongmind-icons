'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTroubleLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTroubleLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTroubleLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 320c-352.88 0-640 287.12-640 640s287.12 640 640 640 640-287.12 640-640-287.12-640-640-640m0 1440c-441.12 0-800-358.88-800-800s358.88-800 800-800 800 358.88 800 800-358.88 800-800 800m376.56-1063.48L1223.44 583.4 960 846.84 696.56 583.4 583.44 696.52l263.44 263.44-263.44 263.44 113.12 113.12L960 1073.16l263.44 263.36 113.12-113.12-263.44-263.44 263.44-263.44z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}