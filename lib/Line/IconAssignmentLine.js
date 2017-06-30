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

var IconAssignmentLine = function (_Component) {
  _inherits(IconAssignmentLine, _Component);

  function IconAssignmentLine() {
    _classCallCheck(this, IconAssignmentLine);

    return _possibleConstructorReturn(this, (IconAssignmentLine.__proto__ || Object.getPrototypeOf(IconAssignmentLine)).apply(this, arguments));
  }

  _createClass(IconAssignmentLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAssignmentLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement('path', { id: 'a', d: 'M1903.483 807.19c22.023 22.023 22.023 57.712 0 79.848l-677.638 677.637c-10.616 10.504-24.96 16.49-39.98 16.49h-225.88c-31.17 0-56.469-25.299-56.469-56.47v-225.88c0-15.02 5.986-29.364 16.49-39.867l677.636-677.637c22.137-22.136 57.825-22.136 79.962 0l225.879 225.879zM1668.23 962.482l115.424-115.424-146.031-146.031-115.424 115.424 146.03 146.03zm-505.744 505.743l425.895-425.895-146.03-146.03-425.895 425.894v146.031h146.03zM0 0h1468.214v564.698h-112.94V112.94H112.94v1694.092h1242.334v-225.879h112.94v338.819H0V0zm338.819 790.588V338.83h790.576v451.758H338.82zm112.94-112.94h564.697V451.77H451.758v225.88zm-112.94 451.758v-112.94h564.697v112.94H338.82zm0 225.88v-112.94h338.818v112.94H338.82z' })
          ),
          _react2.default.createElement('path', { d: 'M1903.483 807.19c22.023 22.023 22.023 57.712 0 79.848l-677.638 677.637c-10.616 10.504-24.96 16.49-39.98 16.49h-225.88c-31.17 0-56.469-25.299-56.469-56.47v-225.88c0-15.02 5.986-29.364 16.49-39.867l677.636-677.637c22.137-22.136 57.825-22.136 79.962 0l225.879 225.879zM1668.23 962.482l115.424-115.424-146.031-146.031-115.424 115.424 146.03 146.03zm-505.744 505.743l425.895-425.895-146.03-146.03-425.895 425.894v146.031h146.03zM0 0h1468.214v564.698h-112.94V112.94H112.94v1694.092h1242.334v-225.879h112.94v338.819H0V0zm338.819 790.588V338.83h790.576v451.758H338.82zm112.94-112.94h564.697V451.77H451.758v225.88zm-112.94 451.758v-112.94h564.697v112.94H338.82zm0 225.88v-112.94h338.818v112.94H338.82z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconAssignmentLine;
}(_react.Component);

exports.default = IconAssignmentLine;