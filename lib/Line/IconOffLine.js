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

var IconOffLine = function (_Component) {
  _inherits(IconOffLine, _Component);

  function IconOffLine() {
    _classCallCheck(this, IconOffLine);

    return _possibleConstructorReturn(this, (IconOffLine.__proto__ || Object.getPrototypeOf(IconOffLine)).apply(this, arguments));
  }

  _createClass(IconOffLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconOffLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1908.236 936.597L1920 960.23l-11.658 23.634c-187.797 377.713-551.097 612.353-948.31 612.353-111.385 0-220.227-18.546-323.876-55.003l35.186-99.94c92.203 32.43 189.386 48.963 288.69 48.963 348.463 0 668.417-202.422 841.164-529.795-69.735-131.839-164.48-246.404-274.912-332.46l65.178-83.618c129.295 100.893 238.985 236.548 316.774 392.233zM393.822 1292.616c-110.537-86.056-205.283-200.727-275.124-332.46C291.55 632.677 611.61 430.361 959.968 430.361c99.41 0 196.487 16.533 290.492 49.6 27.555 8.69 55.321 19.711 82.982 32.005l-189.704 189.705c-52.142-36.988-115.2-59.35-183.77-59.35-175.291 0-317.94 142.65-317.94 317.941 0 68.57 22.362 131.627 59.349 183.77l-212.703 212.596c-30.734-18.547-62.21-39.319-94.852-64.012zm778.107-332.354c0 116.896-95.065 211.96-211.96 211.96-39.107 0-75.459-11.34-106.935-29.992l288.902-289.008c18.653 31.582 29.993 67.827 29.993 107.04zm-423.921 0c0-116.79 95.064-211.96 211.96-211.96 39.213 0 75.458 11.446 107.04 29.992L778 1067.302c-18.546-31.582-29.992-67.827-29.992-107.04zm211.96 317.94c175.397 0 317.94-142.543 317.94-317.94 0-68.463-22.361-131.627-59.242-183.663l573.67-573.671L1717.408 128l-304.905 304.905c-43.027-21.408-86.373-40.273-128.66-53.52-103.542-36.457-212.49-55.004-323.875-55.004-397.213 0-760.62 234.64-948.204 612.354L0 960.368l11.764 23.634c77.79 155.685 187.479 291.34 317.516 392.656 28.403 21.514 55.64 40.167 82.24 57.23l-283.814 283.814 74.928 74.928 573.67-573.67c52.037 36.88 115.095 59.243 183.664 59.243', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconOffLine;
}(_react.Component);

exports.default = IconOffLine;