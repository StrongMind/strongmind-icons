'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconModuleLine;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconModuleLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconModuleLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M441.395 645.5l518.137 230.338L1477.589 645.5 959.532 415.16 441.395 645.5zm518.137 396.315c-11.016 0-21.953-2.298-32.255-6.816l-713.25-317.053c-28.53-12.761-46.995-41.058-46.995-72.446 0-31.389 18.465-59.686 46.995-72.368l713.25-317.052a79.321 79.321 0 0 1 64.43 0l713.25 317.052a79.09 79.09 0 0 1 47.075 72.368c0 31.388-18.466 59.685-47.075 72.446L991.707 1035c-10.302 4.518-21.239 6.816-32.175 6.816z"/>\n        <path d="M1752 832.434L958.073 1193.24 167 863.584v171.605l761.989 317.687c9.747 4.2 20.13 6.024 30.511 6.024 11.174 0 22.348-2.299 32.73-6.975l759.77-345.35V832.434z"/>\n        <path d="M1752 1149.487l-793.927 360.805L167 1180.637v171.605l761.989 317.686c9.747 4.201 20.13 6.024 30.511 6.024 11.174 0 22.348-2.298 32.73-6.975l759.77-345.35v-174.14z"/>\n    </g>\n</svg>'
  }));
}