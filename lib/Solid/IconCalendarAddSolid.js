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

var IconCalendarAddSolid = function (_Component) {
  _inherits(IconCalendarAddSolid, _Component);

  function IconCalendarAddSolid() {
    _classCallCheck(this, IconCalendarAddSolid);

    return _possibleConstructorReturn(this, (IconCalendarAddSolid.__proto__ || Object.getPrototypeOf(IconCalendarAddSolid)).apply(this, arguments));
  }

  _createClass(IconCalendarAddSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCalendarAddSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M375.913 0H542.87v83.478h834.782V0h166.957v83.478h333.913V1920H42V83.478h333.913V0zM208.957 250.435V417.39h1502.608V250.435H1544.61v83.478h-166.957v-83.478H542.87v83.478H375.913v-83.478H208.957zm0 333.913v1168.695h1502.608V584.348H208.957zm667.826 166.956h166.956v333.913h333.913v166.957H1043.74v333.913H876.783v-333.913H542.87v-166.957h333.913V751.304z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconCalendarAddSolid;
}(_react.Component);

exports.default = IconCalendarAddSolid;