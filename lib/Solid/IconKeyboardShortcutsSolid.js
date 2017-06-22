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

var IconKeyboardShortcutsSolid = function (_Component) {
  _inherits(IconKeyboardShortcutsSolid, _Component);

  function IconKeyboardShortcutsSolid() {
    _classCallCheck(this, IconKeyboardShortcutsSolid);

    return _possibleConstructorReturn(this, (IconKeyboardShortcutsSolid.__proto__ || Object.getPrototypeOf(IconKeyboardShortcutsSolid)).apply(this, arguments));
  }

  _createClass(IconKeyboardShortcutsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconKeyboardShortcutsSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1581.176 1073c0 31.172-25.298 56.47-56.47 56.47h-112.941c-31.172 0-56.47-25.298-56.47-56.47V960.059c0-31.172 25.298-56.47 56.47-56.47h112.94c31.173 0 56.471 25.298 56.471 56.47V1073zm0 338.824c0 31.171-25.298 56.47-56.47 56.47h-112.941c-31.172 0-56.47-25.299-56.47-56.47v-112.942c0-31.171 25.298-56.47 56.47-56.47h112.94c31.173 0 56.471 25.299 56.471 56.47v112.942zM1242.353 1073c0 31.172-25.299 56.47-56.47 56.47H1072.94c-31.172 0-56.47-25.298-56.47-56.47V960.059c0-31.172 25.298-56.47 56.47-56.47h112.941c31.172 0 56.47 25.298 56.47 56.47V1073zm0 338.824c0 31.171-25.299 56.47-56.47 56.47H734.117c-31.172 0-56.47-25.299-56.47-56.47v-112.942c0-31.171 25.298-56.47 56.47-56.47h451.764c31.172 0 56.47 25.299 56.47 56.47v112.942zM564.706 1073c0 31.172-25.299 56.47-56.47 56.47H395.293c-31.172 0-56.47-25.298-56.47-56.47V960.059c0-31.172 25.298-56.47 56.47-56.47h112.941c31.172 0 56.47 25.298 56.47 56.47V1073zm0 338.824c0 31.171-25.299 56.47-56.47 56.47H395.293c-31.172 0-56.47-25.299-56.47-56.47v-112.942c0-31.171 25.298-56.47 56.47-56.47h112.941c31.172 0 56.47 25.299 56.47 56.47v112.942zm112.941-451.765c0-31.172 25.299-56.47 56.47-56.47H847.06c31.172 0 56.47 25.298 56.47 56.47V1073c0 31.172-25.298 56.47-56.47 56.47H734.118c-31.172 0-56.47-25.298-56.47-56.47V960.059zm1072.941-395.294h-729.26c14.907-86.965 65.957-113.506 133.383-147.163 89.336-44.611 200.583-100.291 200.583-304.602h-112.941c0 134.513-57.939 163.426-138.24 203.633-80.301 40.094-177.544 90.24-196.518 248.132H169.412C76.009 564.765 0 640.775 0 734.176v903.53c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412v-903.53c0-93.402-76.01-169.411-169.412-169.411z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconKeyboardShortcutsSolid;
}(_react.Component);

exports.default = IconKeyboardShortcutsSolid;