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

var IconCalendarDaysSolid = function (_Component) {
  _inherits(IconCalendarDaysSolid, _Component);

  function IconCalendarDaysSolid() {
    _classCallCheck(this, IconCalendarDaysSolid);

    return _possibleConstructorReturn(this, (IconCalendarDaysSolid.__proto__ || Object.getPrototypeOf(IconCalendarDaysSolid)).apply(this, arguments));
  }

  _createClass(IconCalendarDaysSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCalendarDaysSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1' },
            _react2.default.createElement('path', { d: 'M974.505 1416.621c-82.334 0-141.515-34.447-194.372-95.887l-90.804 83.351c62.23 74.992 154.277 128.075 283.143 128.075 154.278 0 258.862-96.79 258.862-231.19v-2.034c0-134.4-105.6-190.644-217.525-204.198l205.892-208.263v-95.887H730.552V902.06h320.076l-199.68 209.394 21.12 80.188h60.31c103.454 0 170.09 40.546 170.09 112.376v2.147c0 66.635-55.003 110.456-127.963 110.456' }),
            _react2.default.createElement('path', { d: 'M375.913 0H542.87v83.478h834.782V0h166.957v83.478h333.913V1920H42V83.478h333.913V0zM208.957 250.435V417.39h1502.608V250.435H1544.61v83.478h-166.957v-83.478H542.87v83.478H375.913v-83.478H208.957zm0 333.913v1168.695h1502.608V584.348H208.957z' })
          )
        )
      );
    }
  }]);

  return IconCalendarDaysSolid;
}(_react.Component);

exports.default = IconCalendarDaysSolid;