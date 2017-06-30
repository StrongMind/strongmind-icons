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

var IconBankSolid = function (_Component) {
  _inherits(IconBankSolid, _Component);

  function IconBankSolid() {
    _classCallCheck(this, IconBankSolid);

    return _possibleConstructorReturn(this, (IconBankSolid.__proto__ || Object.getPrototypeOf(IconBankSolid)).apply(this, arguments));
  }

  _createClass(IconBankSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconBankSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1209.419 643.473c-111.721-64.76-242.42-64.116-358.752 2.037l-52.965-93.28c148.175-84.273 322.297-84.701 465.54-1.286l-53.823 92.53zM643.308 960.731c-59.292 0-107.218-47.926-107.218-107.218 0-59.291 47.926-107.218 107.218-107.218 59.184 0 107.218 47.927 107.218 107.218 0 59.292-48.034 107.218-107.218 107.218zm1264.958-169.19c-28.52-114.937-123.408-187.202-221.084-186.773-134.987-218.618-321.225-306.108-456.534-340.74-179.912-46.21-364.541-22.622-475.297 27.02-108.72-101.964-280.804-110.97-410.86-15.332l-44.495 32.701 34.095 43.53c24.231 30.772 54.574 84.167 75.267 143.03-81.378 61.114-152.356 176.051-177.231 265.578-42.887 30.343-106.79 47.498-178.518 47.498H0v284.878c0 110.327 65.94 184.415 176.588 198.032 53.93 6.647 77.947 32.272 114.294 71.192 42.351 45.246 93.28 99.928 199.426 124.266-18.227 52.322-45.139 120.728-57.576 151.07l-29.914 73.766h352.747c60.364 0 107.54-28.734 128.983-77.733l34.846-76.125c3.753-9.22 23.48-24.124 40.957-24.66 26.162-.75 80.736-.429 126.84-.107l53.716.214c6.004 0 18.655 0 36.668 30.772l39.35 69.156c25.839 47.712 74.301 77.411 126.41 77.411l319.08 1.394-66.69-286.594c122.443-79.341 203.5-217.974 205.752-351.89 105.18-60.899 139.061-151.07 106.789-281.554z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconBankSolid;
}(_react.Component);

exports.default = IconBankSolid;