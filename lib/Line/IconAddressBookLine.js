'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAddressBookLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAddressBookLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAddressBookLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1280 480V160H320v320c-88.32 0-160 71.6-160 160v960c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160V640c0-88.4-71.68-160-160-160h-320zM480 320h240v160H480V320zm400 0h240v160H880V320zM320 640h1280v960H320V640z"/>\n        <path d="M751 1120c-106 5.333-191 98.133-191 213.333V1440h800v-106.667c0-115.2-84-208-191-213.333-54 65.067-128 106.667-209 106.667s-155-41.6-209-106.667zM960 800c-88 0-160 71.68-160 160s72 160 160 160 160-71.68 160-160-72-160-160-160z"/>\n    </g>\n</svg>'
  }));
}