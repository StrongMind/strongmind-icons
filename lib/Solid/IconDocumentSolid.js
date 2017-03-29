'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDocumentSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDocumentSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDocumentSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1120 640V240l400 400h-400zm240 800H560v-160h800v160zM560 960h800v160H560V960zm0-320h320v160H560V640zm673.12-480H480c-88.24 0-160 71.84-160 160v1280c0 88.24 71.76 160 160 160h960c88.24 0 160-71.76 160-160V526.88L1233.12 160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}