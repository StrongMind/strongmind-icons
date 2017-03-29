'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPartialSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPartialSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPartialSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 322.4c-351.557 0-637.6 286.043-637.6 637.6s286.043 637.6 637.6 637.6 637.6-286.043 637.6-637.6S1311.557 322.4 960 322.4m0 1434.6c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797"/>\n        <path d="M1358.5 1039.7h-797V880.3h797z"/>\n    </g>\n</svg>'
  }));
}