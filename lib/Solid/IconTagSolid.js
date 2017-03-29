'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTagSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTagSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTagSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M559.995 719.993c-88.479 0-159.998-71.76-159.998-159.998 0-88.399 71.52-159.998 159.998-159.998 88.319 0 159.998 71.6 159.998 159.998 0 88.239-71.68 159.998-159.998 159.998m1176.545 343.436l-879.989-879.99A79.926 79.926 0 0 0 799.992 160H239.999C195.839 160 160 195.84 160 239.999v559.993c0 21.2 8.48 41.6 23.44 56.56l879.989 879.988c15.6 15.6 36.08 23.44 56.559 23.44 20.48 0 40.96-7.84 56.56-23.44l559.992-559.993c31.28-31.28 31.28-81.839 0-113.118" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}