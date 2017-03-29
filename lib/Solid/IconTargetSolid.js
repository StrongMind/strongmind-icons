'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTargetSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTargetSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTargetSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1040 1432.8V1120H880v312.8c-200.56-33.84-358.88-192.16-392.8-392.8H800V880H487.2C521.12 679.44 679.44 521.12 880 487.28V800h160V487.28c200.56 33.84 358.88 192.16 392.8 392.72H1120v160h312.8c-33.92 200.64-192.24 358.96-392.8 392.8zM1840 880h-245.52c-36.32-288.88-265.6-518.16-554.48-554.4V80H880v245.6C591.12 361.84 361.84 591.12 325.52 880H80v160h245.52c36.32 288.96 265.6 518.24 554.48 554.48V1840h160v-245.52c288.88-36.24 518.16-265.52 554.48-554.48H1840V880z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}