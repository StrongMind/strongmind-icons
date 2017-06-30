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

var IconNextUnreadSolid = function (_Component) {
  _inherits(IconNextUnreadSolid, _Component);

  function IconNextUnreadSolid() {
    _classCallCheck(this, IconNextUnreadSolid);

    return _possibleConstructorReturn(this, (IconNextUnreadSolid.__proto__ || Object.getPrototypeOf(IconNextUnreadSolid)).apply(this, arguments));
  }

  _createClass(IconNextUnreadSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconNextUnreadSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1628.7 822.865c5.815.22 11.41.33 17.225.33 38.29 0 74.606-7.132 109.495-17.555v857.633l-424.812-491.847-82.943 71.643 442.804 512.692H64.951l442.804-512.692-82.943-71.643L0 1663.273V524.663l878.039 812.43 592.454-557.235c48.603 25.014 101.924 40.484 158.207 43.007zm-248.677-108.649l-502.598 472.866L.044 375.091V329.56h1278.933c-8.777 29.622-15.47 60.232-16.786 92.598-4.608 102.473 30.939 200.557 100.278 276.26 5.376 5.924 11.85 10.312 17.554 15.798zm277.927-548.997c151.295 6.803 268.47 134.839 261.777 286.244-6.583 147.126-127.926 262.106-273.736 262.106-4.06 0-8.338-.11-12.507-.33-151.295-6.692-268.47-134.838-261.667-286.243C1378.29 279.87 1499.743 165 1645.552 165c4.06 0 8.229.11 12.398.22z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconNextUnreadSolid;
}(_react.Component);

exports.default = IconNextUnreadSolid;