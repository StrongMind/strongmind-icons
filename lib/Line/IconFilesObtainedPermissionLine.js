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

var IconFilesObtainedPermissionLine = function (_Component) {
  _inherits(IconFilesObtainedPermissionLine, _Component);

  function IconFilesObtainedPermissionLine() {
    _classCallCheck(this, IconFilesObtainedPermissionLine);

    return _possibleConstructorReturn(this, (IconFilesObtainedPermissionLine.__proto__ || Object.getPrototypeOf(IconFilesObtainedPermissionLine)).apply(this, arguments));
  }

  _createClass(IconFilesObtainedPermissionLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconFilesObtainedPermissionLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M960 0c529.355 0 960 430.645 960 960s-430.645 960-960 960S0 1489.355 0 960 430.645 0 960 0zm0 1807.059c467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059zM1125.945 756.19c8.65 8.208 13.055 17.933 13.055 29.624v268.056h-75.974V1372H855.974v-318.129H780V785.815c0-11.712 4.242-21.438 12.537-29.624 8.007-8.051 19.014-12.934 30.371-12.099h273.303c11.09 0 21.017 3.892 29.734 12.1zM960.022 709C898.044 709 867 678.518 867 617.577v-.044C867 555.881 898 525 960.023 525c62.023 0 92.977 30.837 92.977 92.556 0 60.962-31 91.444-92.978 91.444z', stroke: '#979797', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconFilesObtainedPermissionLine;
}(_react.Component);

exports.default = IconFilesObtainedPermissionLine;