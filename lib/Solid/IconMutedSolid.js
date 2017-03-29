'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMutedSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMutedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMutedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1578.947 264.259l-1354.631 1354.9 112.673 112.696 395.791-395.95 288.378 316.25c22.79 22.794 57.054 29.568 86.855 17.215 29.802-12.274 49.166-41.364 49.166-73.563V911.503l534.442-534.548-112.674-112.696zM1157.179 460.672V320.559c0-32.199-19.364-61.29-49.166-73.563-29.801-12.354-64.066-5.58-86.855 17.295L679.073 639.359H440.021c-43.827 0-79.685 35.865-79.685 79.7v478.2c0 16.896 6.535 31.88 15.619 44.791l781.224-781.378z"/>\n    </g>\n</svg>'
  }));
}