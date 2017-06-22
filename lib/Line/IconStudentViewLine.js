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

var IconStudentViewLine = function (_Component) {
  _inherits(IconStudentViewLine, _Component);

  function IconStudentViewLine() {
    _classCallCheck(this, IconStudentViewLine);

    return _possibleConstructorReturn(this, (IconStudentViewLine.__proto__ || Object.getPrototypeOf(IconStudentViewLine)).apply(this, arguments));
  }

  _createClass(IconStudentViewLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconStudentViewLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1395.06 1560c-165.36 0-300-134.64-300-300s134.64-300 300-300c165.12 0 299.4 134.16 299.88 299.04 0 .36.12.72.12.96 0 165.36-134.64 300-300 300zm-975 0c-165.48 0-300-134.64-300-300s134.52-300 300-300c165.36 0 300 134.64 300 300s-134.64 300-300 300zm1394.88-300.96c-.36-124.8-96.96-781.8-100.92-808.44-14.76-120-117.12-210.6-238.2-210.6h-155.76v120h155.76c60.48 0 111.72 45.24 119.28 106.68 15 101.88 42.84 297.24 65.4 470.64-72.6-59.88-164.28-97.32-265.44-97.32-210.96 0-384.48 157.08-414 360H833.94c-29.4-202.92-202.92-360-413.88-360-101.28 0-192.96 37.44-265.56 97.32 22.56-173.52 50.52-369.48 65.52-472.08 7.44-60 58.68-105.24 119.16-105.24h140.88V240H339.18c-121.08 0-223.44 90.6-237.96 209.28C97.02 477.24.06 1137 .06 1260c0 231.6 188.4 420 420 420 210.96 0 384.48-157.08 413.88-360h147.12c29.52 202.92 203.04 360 414 360 231.6 0 420-188.4 420-420 0-.24-.12-.6-.12-.96', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconStudentViewLine;
}(_react.Component);

exports.default = IconStudentViewLine;