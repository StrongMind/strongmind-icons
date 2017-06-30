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

var IconQuizStatsCronbachsAlphaLine = function (_Component) {
  _inherits(IconQuizStatsCronbachsAlphaLine, _Component);

  function IconQuizStatsCronbachsAlphaLine() {
    _classCallCheck(this, IconQuizStatsCronbachsAlphaLine);

    return _possibleConstructorReturn(this, (IconQuizStatsCronbachsAlphaLine.__proto__ || Object.getPrototypeOf(IconQuizStatsCronbachsAlphaLine)).apply(this, arguments));
  }

  _createClass(IconQuizStatsCronbachsAlphaLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconQuizStatsCronbachsAlphaLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M960 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059M960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0m15.224 1125.222c-69.232 38.851-195.162 95.21-258.409 32.866-59.972-59.069-56.696-208.829 7.115-327.078 52.292-96.678 136.998-146.259 200.81-146.259 9.487 0 18.41 1.13 26.767 3.275 61.44 16.15 95.435 94.08 93.176 213.798-1.242 66.41 2.146 123.896 10.052 172.687-23.83 17.28-50.259 34.221-79.51 50.71m241.129 44.16c-5.308-2.484-21.233-12.762-35.238-51.388 207.247-182.738 207.021-382.305 206.908-392.357l-112.94 1.355c0 6.777-1.808 125.93-116.443 254.457-1.13-22.928-1.581-48.678-1.017-77.591 4.518-250.165-122.54-310.588-177.43-325.045-125.365-32.979-275.577 50.26-355.539 198.438-77.816 144-94.193 355.878 12.988 461.365 32.98 32.414 82.447 60.762 155.181 60.762 61.44 0 139.37-20.33 237.742-75.67 20.442-11.52 39.755-23.267 57.938-35.238 19.991 40.207 46.871 67.877 80.64 83.463 65.62 30.043 144.678 7.68 223.624-62.23l-74.993-84.48c-40.659 36.254-80.075 53.534-101.421 44.16', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconQuizStatsCronbachsAlphaLine;
}(_react.Component);

exports.default = IconQuizStatsCronbachsAlphaLine;