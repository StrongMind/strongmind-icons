'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTrashLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTrashLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTrashLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M445 885v837c0 22 16 38 38 38h926c22 0 38-16 38-38V885l1.789-192.138-1003.679 1.231L445 885zm602 0h200v575c0 56-44 100-100 100s-100-44-100-100V885zm-400 0h200v575c0 56-44 100-100 100s-100-44-100-100V885zM1445 360h-200c0-110-90-200-200-200H845c-110 0-200 90-200 200H445c-110 0-200 90-200 200h1400c0-110-90-200-200-200"/>\n    </g>\n</svg>'
  }));
}