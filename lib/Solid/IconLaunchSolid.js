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

var IconLaunchSolid = function (_Component) {
  _inherits(IconLaunchSolid, _Component);

  function IconLaunchSolid() {
    _classCallCheck(this, IconLaunchSolid);

    return _possibleConstructorReturn(this, (IconLaunchSolid.__proto__ || Object.getPrototypeOf(IconLaunchSolid)).apply(this, arguments));
  }

  _createClass(IconLaunchSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconLaunchSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1' },
            _react2.default.createElement('path', { d: 'M508.235 0H56.471C25.299 0 0 25.299 0 56.47v451.765c0 31.172 25.299 56.47 56.47 56.47h451.765c31.172 0 56.47-25.298 56.47-56.47V56.471C564.706 25.299 539.408 0 508.236 0zM1185.882 0H734.118c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.47 56.47 56.47h451.764c31.172 0 56.47-25.298 56.47-56.47V56.471c0-31.172-25.298-56.471-56.47-56.471zM1863.53 0h-451.765c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.47 56.47 56.47h451.764c31.172 0 56.471-25.298 56.471-56.47V56.471C1920 25.299 1894.701 0 1863.53 0zM508.235 677.647H56.471C25.299 677.647 0 702.946 0 734.117v451.765c0 31.172 25.299 56.47 56.47 56.47h451.765c31.172 0 56.47-25.298 56.47-56.47V734.118c0-31.172-25.298-56.47-56.47-56.47zM1185.882 677.647H734.118c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.47 56.47 56.47h451.764c31.172 0 56.47-25.298 56.47-56.47V734.118c0-31.172-25.298-56.47-56.47-56.47zM1863.53 677.647h-451.765c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.47 56.47 56.47h451.764c31.172 0 56.471-25.298 56.471-56.47V734.118c0-31.172-25.299-56.47-56.47-56.47zM508.235 1355.294H56.471c-31.172 0-56.471 25.299-56.471 56.47v451.765C0 1894.701 25.299 1920 56.47 1920h451.765c31.172 0 56.47-25.299 56.47-56.47v-451.765c0-31.172-25.298-56.47-56.47-56.47zM1185.882 1355.294H734.118c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.471 56.47 56.471h451.764c31.172 0 56.47-25.299 56.47-56.47v-451.765c0-31.172-25.298-56.47-56.47-56.47zM1863.53 1355.294h-451.765c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.471 56.47 56.471h451.764c31.172 0 56.471-25.299 56.471-56.47v-451.765c0-31.172-25.299-56.47-56.47-56.47z' })
          )
        )
      );
    }
  }]);

  return IconLaunchSolid;
}(_react.Component);

exports.default = IconLaunchSolid;