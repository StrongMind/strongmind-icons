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

var IconNameSolid = function (_Component) {
  _inherits(IconNameSolid, _Component);

  function IconNameSolid() {
    _classCallCheck(this, IconNameSolid);

    return _possibleConstructorReturn(this, (IconNameSolid.__proto__ || Object.getPrototypeOf(IconNameSolid)).apply(this, arguments));
  }

  _createClass(IconNameSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconNameSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M951.62 688.015c-8.358-2.146-17.393-3.162-26.88-3.162-63.812 0-148.518 49.355-200.81 146.033-63.924 118.362-67.087 268.122-7.002 327.19 63.247 62.23 189.064 6.212 258.296-32.753 29.365-16.376 55.568-33.43 79.398-50.71-7.793-48.904-11.068-106.39-9.939-172.687 2.26-119.83-31.736-197.647-93.063-213.91m217.502 583.894c-33.882-15.586-60.65-43.257-80.64-83.35-18.184 11.858-37.384 23.717-57.939 35.124-98.372 55.228-176.188 75.557-237.741 75.557-72.621.113-122.202-28.235-155.068-60.649-107.182-105.487-90.918-317.365-13.102-461.365 80.076-148.066 229.61-231.53 355.652-198.437 54.777 14.456 181.836 74.88 177.318 325.044-.452 28.913-.113 54.777 1.016 77.704 114.636-128.64 116.443-247.793 116.443-254.57l112.94-1.355c.114 10.052.34 209.732-207.02 392.47 14.117 38.514 30.042 48.791 35.35 51.276 21.007 9.6 60.65-7.906 101.421-44.16l74.993 84.48c-79.058 70.25-158.343 92.386-223.623 62.23M959.955-.033c-529.355 0-960 430.758-960 960 0 529.355 430.645 960 960 960 529.468 0 960-430.645 960-960 0-529.242-430.532-960-960-960', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconNameSolid;
}(_react.Component);

exports.default = IconNameSolid;