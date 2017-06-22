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

var IconTroubleLine = function (_Component) {
  _inherits(IconTroubleLine, _Component);

  function IconTroubleLine() {
    _classCallCheck(this, IconTroubleLine);

    return _possibleConstructorReturn(this, (IconTroubleLine.__proto__ || Object.getPrototypeOf(IconTroubleLine)).apply(this, arguments));
  }

  _createClass(IconTroubleLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTroubleLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M961 1C431.645 1 1 431.645 1 961s430.645 960 960 960 960-430.645 960-960S1490.355 1 961 1m0 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059m319.465-1246.374l-319.51 319.51-319.398-319.51-79.85 79.85 319.398 319.51-319.397 319.398 79.85 79.85 319.397-319.398 319.51 319.397 79.85-79.85-319.51-319.397 319.51-319.51-79.85-79.85z' })
        )
      );
    }
  }]);

  return IconTroubleLine;
}(_react.Component);

exports.default = IconTroubleLine;