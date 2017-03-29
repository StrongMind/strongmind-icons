'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconZippedLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconZippedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconZippedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1440 160H480c-88.24 0-160 71.68-160 160v1280c0 88.24 71.76 160 160 160h960c88.24 0 160-71.76 160-160V320c0-88.32-71.76-160-160-160zM480 1600V320h480v160h160V320h320l.08 1280H480zm640-1120h160v160h-160V480zM960 640h160v160H960V640zm160 160h160v160h-160V800zM960 960h160v160H960V960z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}