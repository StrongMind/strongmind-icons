'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPrinterSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPrinterSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPrinterSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1440 1120c0-44.16-35.84-80-80-80s-80 35.84-80 80c0 44.24 35.84 80 80 80s80-35.76 80-80zm-880 640h800v-320H560v320zm1200-880v720h-240v320H400v-320H160V880c0-132.32 107.68-240 240-240h160v160h800V640h160c132.32 0 240 107.68 240 240zM560 480H400V0h1120v480h-160V160H560v320z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}