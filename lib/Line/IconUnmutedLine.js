'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUnmutedLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnmutedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUnmutedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M941.12 252.16c-59.12-24.48-129.2-10.48-174.24 34.72L518.32 640H320c-88.24 0-160 71.84-160 160v320c0 88.24 71.76 160 160 160h198.32l239.6 342.4c33.28 39.68 76.72 57.6 122.08 57.6 21.04 0 41.68-4.08 61.12-12.08 60.08-24.72 98.88-82.88 98.88-147.92V400c0-65.04-38.8-123.04-98.88-147.84zM601.68 1120H320V800h281.68L880 402.16l.08 1115.84-278.4-398zM1200 320v160c220.56 0 400 179.44 400 400s-179.44 400-400 400v160c308.8 0 560-251.2 560-560 0-308.72-251.2-560-560-560zm240 560c0-132.32-107.68-240-240-240v160c44.08 0 80 35.92 80 80 0 44.16-35.92 80-80 80v160c132.32 0 240-107.68 240-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}