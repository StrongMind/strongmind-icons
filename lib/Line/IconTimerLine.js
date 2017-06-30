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

var IconTimerLine = function (_Component) {
  _inherits(IconTimerLine, _Component);

  function IconTimerLine() {
    _classCallCheck(this, IconTimerLine);

    return _possibleConstructorReturn(this, (IconTimerLine.__proto__ || Object.getPrototypeOf(IconTimerLine)).apply(this, arguments));
  }

  _createClass(IconTimerLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTimerLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M960 0c529.355 0 960 430.645 960 960s-430.645 960-960 960S0 1489.355 0 960c0-172.687 46.419-341.986 134.174-489.6l97.017 57.713C153.826 658.22 112.94 807.529 112.94 960c0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-448.038-349.779-816-790.588-845.139v223.963H903.529V0H960zM677.647 960c0-57.487 17.393-110.795 47.097-155.407L242.372 322.334l79.962-79.962 482.259 482.372c44.612-29.704 97.92-47.097 155.407-47.097 155.633 0 282.353 126.72 282.353 282.353S1115.633 1242.353 960 1242.353 677.647 1115.633 677.647 960zm451.765 0c0-93.402-76.01-169.412-169.412-169.412S790.588 866.598 790.588 960s76.01 169.412 169.412 169.412 169.412-76.01 169.412-169.412z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconTimerLine;
}(_react.Component);

exports.default = IconTimerLine;