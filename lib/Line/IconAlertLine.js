'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconAlertLine = function (_Component) {
  _inherits(IconAlertLine, _Component);

  function IconAlertLine() {
    _classCallCheck(this, IconAlertLine);

    return _possibleConstructorReturn(this, (IconAlertLine.__proto__ || Object.getPrototypeOf(IconAlertLine)).apply(this, arguments));
  }

  _createClass(IconAlertLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconAlertLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M960 240c-265.12 0-480 214.88-480 480v80c0 88.4-71.6 160-160 160H160v400h1600V960h-160c-88.4 0-160-71.6-160-160v-80c0-265.12-214.88-480-480-480m0 160c176.48 0 320 143.52 320 320v80c0 176.48 143.52 320 320 320v80H320v-80c176.48 0 320-143.52 320-320v-80c0-176.48 143.52-320 320-320zm0 1309.464c151.28 0 273.76-119.76 280-269.44H680c6.24 149.68 128.72 269.44 280 269.44z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAlertLine;
}(_react.Component);

exports.default = IconAlertLine;