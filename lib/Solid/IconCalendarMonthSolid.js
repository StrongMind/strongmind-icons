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
          _react2.default.createElement('path', { d: 'M1637.706 112.941c93.404 0 169.412 76.01 169.412 169.412V1920H113V282.353c0-93.402 76.009-169.412 169.412-169.412h169.411v-56.47c0-31.172 25.3-56.471 56.471-56.471 31.172 0 56.471 25.299 56.471 56.471v56.47h790.589v-56.47c0-31.172 25.299-56.471 56.47-56.471s56.47 25.299 56.47 56.471v56.47h169.412zm56.47 338.824V282.353c0-31.172-25.411-56.471-56.47-56.471h-169.412v56.471c0 31.172-25.299 56.471-56.47 56.471s-56.47-25.299-56.47-56.471v-56.471H564.765v56.471c0 31.172-25.299 56.471-56.471 56.471-31.171 0-56.471-25.299-56.471-56.471v-56.471H282.412c-31.059 0-56.47 25.299-56.47 56.471v169.412h1468.234zm-451.762 677.647h338.823V790.588h-338.823v338.824zm0 451.765h338.823v-338.823h-338.823v338.823zm-451.767-451.765h338.824V790.588H790.647v338.824zm0 451.765h338.824v-338.823H790.647v338.823zm-451.765-451.765h338.824V790.588H338.882v338.824zm0 451.765h338.824v-338.823H338.882v338.823z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconCalendarMonthSolid;
}(_react.Component);

exports.default = IconCalendarMonthSolid;