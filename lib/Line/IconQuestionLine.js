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

var IconQuestionLine = function (_Component) {
  _inherits(IconQuestionLine, _Component);

  function IconQuestionLine() {
    _classCallCheck(this, IconQuestionLine);

    return _possibleConstructorReturn(this, (IconQuestionLine.__proto__ || Object.getPrototypeOf(IconQuestionLine)).apply(this, arguments));
  }

  _createClass(IconQuestionLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconQuestionLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M960 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059M960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0m89.336 350.355c114.862 29.703 208.264 123.106 237.968 237.967 23.378 90.466 10.729 183.303-35.464 261.459-45.515 77.026-121.186 133.948-207.586 156.084-13.779 3.502-27.783 14.796-27.783 31.85v91.708H903.529v-91.708c0-66.07 46.306-124.123 112.716-141.29 57.6-14.682 107.971-52.63 138.353-104.018 30.833-52.292 39.19-114.749 23.378-175.85-19.651-75.67-81.204-137.223-156.875-156.875-70.927-18.184-143.548-3.953-199.341 39.303-55.68 43.144-87.642 108.311-87.642 178.673H621.176c0-105.6 47.888-203.294 131.464-268.01 83.69-64.714 191.661-86.4 296.696-59.293zm-89.28 1004.94v-.114l56.471.113h-56.47zm0-112.942c-62.343 0-112.94 50.71-112.94 112.941 0 62.23 50.597 112.941 112.94 112.941 62.231 0 112.942-50.71 112.942-112.94 0-62.231-50.71-112.942-112.942-112.942z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconQuestionLine;
}(_react.Component);

exports.default = IconQuestionLine;