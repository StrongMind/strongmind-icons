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

var IconLaunchLine = function (_Component) {
  _inherits(IconLaunchLine, _Component);

  function IconLaunchLine() {
    _classCallCheck(this, IconLaunchLine);

    return _possibleConstructorReturn(this, (IconLaunchLine.__proto__ || Object.getPrototypeOf(IconLaunchLine)).apply(this, arguments));
  }

  _createClass(IconLaunchLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconLaunchLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1' },
            _react2.default.createElement('path', { d: 'M112.941 451.765h338.824V112.94H112.94v338.824zM508.235 0H56.471C25.299 0 0 25.299 0 56.47v451.765c0 31.172 25.299 56.47 56.47 56.47h451.765c31.172 0 56.47-25.298 56.47-56.47V56.471C564.706 25.299 539.408 0 508.236 0zM790.588 451.765h338.824V112.94H790.588v338.824zM1185.882 0H734.118c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.47 56.47 56.47h451.764c31.172 0 56.47-25.298 56.47-56.47V56.471c0-31.172-25.298-56.471-56.47-56.471zM1468.235 451.765h338.824V112.94h-338.824v338.824zM1863.53 0h-451.764c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.47 56.47 56.47h451.764c31.172 0 56.471-25.298 56.471-56.47V56.471C1920 25.299 1894.701 0 1863.53 0zM112.941 1129.412h338.824V790.588H112.94v338.824zm395.294-451.765H56.471C25.299 677.647 0 702.946 0 734.117v451.765c0 31.172 25.299 56.47 56.47 56.47h451.765c31.172 0 56.47-25.298 56.47-56.47V734.118c0-31.172-25.298-56.47-56.47-56.47zM790.588 1129.412h338.824V790.588H790.588v338.824zm395.294-451.765H734.118c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.47 56.47 56.47h451.764c31.172 0 56.47-25.298 56.47-56.47V734.118c0-31.172-25.298-56.47-56.47-56.47zM1468.235 1129.412h338.824V790.588h-338.824v338.824zm395.294-451.765h-451.764c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.47 56.47 56.47h451.764c31.172 0 56.471-25.298 56.471-56.47V734.118c0-31.172-25.299-56.47-56.47-56.47zM112.941 1807.059h338.824v-338.824H112.94v338.824zm395.294-451.765H56.471c-31.172 0-56.471 25.299-56.471 56.47v451.765C0 1894.701 25.299 1920 56.47 1920h451.765c31.172 0 56.47-25.299 56.47-56.47v-451.765c0-31.172-25.298-56.47-56.47-56.47zM790.588 1807.059h338.824v-338.824H790.588v338.824zm395.294-451.765H734.118c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.471 56.47 56.471h451.764c31.172 0 56.47-25.299 56.47-56.47v-451.765c0-31.172-25.298-56.47-56.47-56.47zM1468.235 1807.059h338.824v-338.824h-338.824v338.824zm395.294-451.765h-451.764c-31.172 0-56.47 25.299-56.47 56.47v451.765c0 31.172 25.298 56.471 56.47 56.471h451.764c31.172 0 56.471-25.299 56.471-56.47v-451.765c0-31.172-25.299-56.47-56.47-56.47z' })
          )
        )
      );
    }
  }]);

  return IconLaunchLine;
}(_react.Component);

exports.default = IconLaunchLine;