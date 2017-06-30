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

var IconTextSuperscriptLine = function (_Component) {
  _inherits(IconTextSuperscriptLine, _Component);

  function IconTextSuperscriptLine() {
    _classCallCheck(this, IconTextSuperscriptLine);

    return _possibleConstructorReturn(this, (IconTextSuperscriptLine.__proto__ || Object.getPrototypeOf(IconTextSuperscriptLine)).apply(this, arguments));
  }

  _createClass(IconTextSuperscriptLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTextSuperscriptLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M0 481.452h1231.314v136.812h-547.25v1231.314H547.25V618.264H0V481.452zm1838.283 5.595c-90.297 90.296-213.018 200.978-288.401 268.016h365.426v136.813h-478.844c-37.76 0-68.406-30.646-68.406-68.407v-59.924c0-19.7 8.619-38.58 23.532-51.578 2.189-1.915 216.437-188.117 349.966-321.646 38.581-38.582 50.758-78.941 35.161-116.838-16.007-38.718-57.461-65.67-100.83-65.67-100.148 0-183.877 108.492-184.835 109.723l-109.313-82.36C1386.801 228.47 1506.923 71 1675.886 71c98.642 0 190.033 60.334 227.246 150.22 36.802 88.928 12.587 188.391-64.85 265.827z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconTextSuperscriptLine;
}(_react.Component);

exports.default = IconTextSuperscriptLine;