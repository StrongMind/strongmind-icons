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

var IconSpeedGraderLine = function (_Component) {
  _inherits(IconSpeedGraderLine, _Component);

  function IconSpeedGraderLine() {
    _classCallCheck(this, IconSpeedGraderLine);

    return _possibleConstructorReturn(this, (IconSpeedGraderLine.__proto__ || Object.getPrototypeOf(IconSpeedGraderLine)).apply(this, arguments));
  }

  _createClass(IconSpeedGraderLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconSpeedGraderLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1009.254 1263.78l807.077-807.19 79.85 79.962-886.927 886.927L498.76 912.985l79.849-79.85 430.645 430.645zM832.94 225.941L846.72 337.98C696.96 356.5 553.75 415.795 432.79 509.536l-69.12-89.223C500.669 314.148 662.966 246.948 832.942 225.94zm1072.614 832.941c4.743 39.643 7.228 79.172 7.228 119.83 0 40.66-2.485 80.19-7.228 119.719-21.007 170.089-88.207 332.385-194.372 469.383l-89.223-69.12c93.74-120.96 153.035-264.17 171.557-413.93 4.179-35.011 6.325-70.023 6.325-106.051 0-36.028-2.146-71.04-6.438-106.165-6.437-52.97-18.183-105.713-34.899-156.65l107.407-35.124c18.862 57.939 32.189 117.798 39.643 178.108zM0 1058.882c21.007-169.976 88.207-332.273 194.372-469.27l89.223 69.12c-93.74 120.96-153.035 264.17-171.557 413.93L0 1058.881zm0 239.662l112.038-13.78c18.522 149.76 77.816 292.97 171.557 413.93l-89.223 69.12C88.207 1630.816 21.007 1468.52 0 1298.544zm1541.907-878.22l-69.12 89.224c-121.073-93.741-264.17-153.036-413.93-171.558l13.78-112.038c169.976 20.895 332.272 88.208 469.27 194.372z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconSpeedGraderLine;
}(_react.Component);

exports.default = IconSpeedGraderLine;