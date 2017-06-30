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

var IconPostToSisSolid = function (_Component) {
  _inherits(IconPostToSisSolid, _Component);

  function IconPostToSisSolid() {
    _classCallCheck(this, IconPostToSisSolid);

    return _possibleConstructorReturn(this, (IconPostToSisSolid.__proto__ || Object.getPrototypeOf(IconPostToSisSolid)).apply(this, arguments));
  }

  _createClass(IconPostToSisSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconPostToSisSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1600-.043c88.213 0 160 71.787 160 160v746.667c0 88.32-71.787 160-160 160H320c-88.213 0-160-71.68-160-160V159.957c0-88.213 71.787-160 160-160h1280zM922.293 1188.96c20.8-20.8 54.614-20.8 75.414 0l266.666 266.667-75.413 75.413-175.573-175.573v564.586H906.72v-564.586L731.04 1531.04l-75.413-75.413 266.666-266.667zm611.147-462.603c39.253-132.053-96.32-215.253-182.507-243.413-1.386-.427-132.693-47.147-115.2-113.28 6.614-24.64 21.44-39.36 46.827-45.973 51.307-13.227 128.853 11.84 172.48 56.746l76.373-74.346c-70.826-73.067-186.986-109.12-275.84-85.547-62.826 16.427-106.56 59.733-122.986 121.813-34.667 131.2 99.84 213.654 185.066 241.92 1.174.427 132.907 46.614 113.494 111.68-7.574 25.707-23.68 40.854-50.667 47.36-51.52 13.014-125.76-12.16-169.067-56.533l-76.373 74.347c56.427 58.026 139.093 92.266 215.68 92.266 19.093 0 37.653-2.026 55.36-6.4 63.68-15.786 108.907-58.56 127.36-120.64zM906.667 853.291h106.666v-640H906.667v640zM786.773 726.357c39.254-132.053-96.32-215.253-182.506-243.413-1.387-.427-132.694-47.147-115.2-113.28 6.613-24.64 21.44-39.36 46.826-45.973 51.52-13.227 128.747 11.84 172.48 56.746l76.374-74.346c-70.827-73.067-187.094-109.12-275.84-85.547-62.827 16.427-106.56 59.733-122.987 121.813-34.667 131.2 99.84 213.654 185.067 241.92 1.173.427 132.906 46.614 113.493 111.68-7.573 25.707-23.68 40.854-50.667 47.36-51.306 13.014-125.76-12.16-169.066-56.533l-76.374 74.347c56.427 58.026 139.094 92.266 215.68 92.266 19.094 0 37.654-2.026 55.36-6.4 63.68-15.786 108.907-58.56 127.36-120.64z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconPostToSisSolid;
}(_react.Component);

exports.default = IconPostToSisSolid;