'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconToggleRightLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconToggleRightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconToggleRightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1602 160h-400v160h400v1280h-400v160h400c88.24 0 160-71.76 160-160V320c0-88.24-71.76-160-160-160zm-880 0H562v160h160V160zM562 1760h160v-160H562v160zM162 320v80h160v-80h80V160h-80c-88.24 0-160 71.76-160 160zm160 1200H162v80c0 88.24 71.76 160 160 160h80v-160h-80v-80zm0-960H162v160h160V560zm0 640H162v160h160v-160zm0-320H162v160h160V880zm1040 240c0-176.48-143.52-320-320-320H755.12l103.44-103.44-113.12-113.12L448.88 880l296.56 296.56 113.12-113.12L755.12 960H1042c88.24 0 160 71.76 160 160h160zm-320-960H882v400h160V160zM882 1760h160v-560H882v560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}