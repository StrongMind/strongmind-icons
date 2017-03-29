'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFolderLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFolderLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFolderLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M851.68 240H320c-88.32 0-160 71.6-160 160v1200c0 44.16 35.84 80 80 80h1360c88.4 0 160-71.6 160-160V560c0-44.16-35.84-80-80-80h-624l-55.76-139.44C975.92 279.84 917.12 240 851.68 240m0 160l55.76 139.44C931.76 600.16 990.56 640 1056 640h544v880H320V400h531.68" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}