'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconCalendarMonthSolid = function (_Component) {
  _inherits(IconCalendarMonthSolid, _Component);

  function IconCalendarMonthSolid() {
    _classCallCheck(this, IconCalendarMonthSolid);

    return _possibleConstructorReturn(this, (IconCalendarMonthSolid.__proto__ || Object.getPrototypeOf(IconCalendarMonthSolid)).apply(this, arguments));
  }

  _createClass(IconCalendarMonthSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCalendarMonthSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M375.913 0H542.87v83.478h834.782V0h166.957v83.478h333.913V1920H42V83.478h333.913V0zM208.957 250.435V417.39h1502.608V250.435H1544.61v83.478h-166.957v-83.478H542.87v83.478H375.913v-83.478H208.957zm0 333.913v1168.695h1502.608V584.348H208.957zm500.87 166.956h166.956v166.957H709.826V751.304zm333.912 0h166.957v166.957h-166.957V751.304zm333.913 0h166.957v166.957h-166.957V751.304zM375.913 1085.217H542.87v166.957H375.913v-166.957zm333.913 0h166.957v166.957H709.826v-166.957zm333.913 0h166.957v166.957h-166.957v-166.957zm333.913 0h166.957v166.957h-166.957v-166.957zM375.913 1419.13H542.87v166.957H375.913V1419.13zm333.913 0h166.957v166.957H709.826V1419.13zm333.913 0h166.957v166.957h-166.957V1419.13z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconCalendarMonthSolid;
}(_react.Component);

exports.default = IconCalendarMonthSolid;