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

var IconFilesCopyrightSolid = function (_Component) {
  _inherits(IconFilesCopyrightSolid, _Component);

  function IconFilesCopyrightSolid() {
    _classCallCheck(this, IconFilesCopyrightSolid);

    return _possibleConstructorReturn(this, (IconFilesCopyrightSolid.__proto__ || Object.getPrototypeOf(IconFilesCopyrightSolid)).apply(this, arguments));
  }

  _createClass(IconFilesCopyrightSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconFilesCopyrightSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M960 0c529.355 0 960 430.645 960 960s-430.645 960-960 960S0 1489.355 0 960 430.645 0 960 0zm0 1807.059c467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059zm24.844-716.324c42.573 0 72.648-20.946 90.048-62.898l90.108 45.842c-19.133 35.847-45.681 64.034-79.644 84.5-33.962 20.588-71.392 30.821-112.351 30.821-65.293 0-117.911-20.11-157.972-60.327C775.03 1088.576 755 1032.676 755 961.04c0-69.9 20.21-125.386 60.75-166.38C856.17 753.544 907.353 733 969.118 733c90.587-.06 155.402 35.789 194.567 106.072h.06l-97.941 51.144c-10.523-21.784-23.319-37.07-38.507-45.807-15.307-8.738-29.418-13.106-42.453-13.106-65.294 0-98 43.209-98 129.686 0 39.32 8.31 70.738 24.814 94.317 16.503 23.64 40.898 35.429 73.186 35.429z', stroke: '#979797', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconFilesCopyrightSolid;
}(_react.Component);

exports.default = IconFilesCopyrightSolid;