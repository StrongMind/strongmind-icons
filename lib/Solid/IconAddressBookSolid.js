'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAddressBookSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAddressBookSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAddressBookSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1360 1440H560v-106.667c0-115.2 85-208 191-213.333 54 65.067 128 106.667 209 106.667s155-41.6 209-106.667c107 5.333 191 98.133 191 213.333V1440zM960 720c88 0 160 71.68 160 160s-72 160-160 160-160-71.68-160-160 72-160 160-160zm640-240H320c-88.32 0-160 71.6-160 160v960c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160V640c0-88.4-71.68-160-160-160zM800 400h400V160H800zM320 400h400V160H320z"/>\n    </g>\n</svg>'
  }));
}