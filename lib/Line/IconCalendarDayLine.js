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

var IconCalendarDayLine = function (_Component) {
  _inherits(IconCalendarDayLine, _Component);

  function IconCalendarDayLine() {
    _classCallCheck(this, IconCalendarDayLine);

    return _possibleConstructorReturn(this, (IconCalendarDayLine.__proto__ || Object.getPrototypeOf(IconCalendarDayLine)).apply(this, arguments));
  }

  _createClass(IconCalendarDayLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCalendarDayLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1637.706 112.941c93.403 0 169.412 76.01 169.412 169.412V1920H113V282.353c0-93.402 76.009-169.412 169.412-169.412h169.41v-56.47c0-31.172 25.3-56.47 56.472-56.47s56.47 25.298 56.47 56.47v56.47h790.589v-56.47c0-31.172 25.299-56.47 56.47-56.47 31.172 0 56.47 25.298 56.47 56.47v56.47h169.413zm56.47 338.824V282.353c0-31.172-25.411-56.47-56.47-56.47h-169.412v56.47c0 31.172-25.3 56.471-56.47 56.471-31.172 0-56.471-25.299-56.471-56.47v-56.472H564.765v56.471c0 31.172-25.3 56.471-56.471 56.471-31.171 0-56.471-25.299-56.471-56.47v-56.472H282.412c-31.06 0-56.47 25.3-56.47 56.471v169.412h1468.234zM225.942 1807.058h1468.234V564.705H225.942v1242.353zm733.563-390.437c-82.334 0-141.515-34.447-194.372-95.887l-90.804 83.351c62.23 74.992 154.277 128.075 283.143 128.075 154.278 0 258.862-96.79 258.862-231.19v-2.034c0-134.4-105.6-190.644-217.525-204.198l205.892-208.263v-95.887H715.552V902.06h320.076l-199.68 209.394 21.12 80.188h60.31c103.454 0 170.09 40.546 170.09 112.376v2.147c0 66.635-55.003 110.456-127.963 110.456', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCalendarDayLine;
}(_react.Component);

exports.default = IconCalendarDayLine;