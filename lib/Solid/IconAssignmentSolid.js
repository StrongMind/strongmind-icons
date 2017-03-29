'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAssignmentSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAssignmentSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAssignmentSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1480 1520V800h320v720c0 88.32-71.68 160-160 160s-160-71.68-160-160zm160-1120l160 240h-320l160-240zm-560-160H280c-88.24 0-160 71.76-160 160v1120c0 88.24 71.76 160 160 160h800c88.24 0 160-71.76 160-160V400c0-88.24-71.76-160-160-160zm-80 480H360V560h640v160zm0 320H360V880h640v160zm-240 320H360v-160h400v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}