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

var IconFilesCreativeCommonsLine = function (_Component) {
  _inherits(IconFilesCreativeCommonsLine, _Component);

  function IconFilesCreativeCommonsLine() {
    _classCallCheck(this, IconFilesCreativeCommonsLine);

    return _possibleConstructorReturn(this, (IconFilesCreativeCommonsLine.__proto__ || Object.getPrototypeOf(IconFilesCreativeCommonsLine)).apply(this, arguments));
  }

  _createClass(IconFilesCreativeCommonsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconFilesCreativeCommonsLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M960 0c529.355 0 960 430.645 960 960s-430.645 960-960 960S0 1489.355 0 960 430.645 0 960 0zm0 1807.059c467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059zm-183.32-717.615c43.413 0 73.951-21.282 91.684-63.753L960 1072.158c-19.475 36.314-46.48 64.822-81.015 85.64-34.49 20.817-72.58 31.202-114.203 31.202-66.397 0-119.99-20.33-160.707-61.104C563.36 1087.236 543 1030.547 543 958.01c0-70.815 20.59-126.994 61.75-168.606C645.885 747.817 697.943 727 760.808 727c92.101-.046 158.033 35.78 197.89 107.502l-.046.023-99.63 51.81c-10.645-22.117-23.706-37.638-39.16-46.466-15.502-8.83-29.888-13.29-43.181-13.29-66.374 0-99.608 43.796-99.608 131.432 0 39.823 8.436 71.653 25.24 95.56 16.825 23.931 41.6 35.873 74.368 35.873zm520.348-63.764l92.972 46.468c-20.338 36.316-47.81 64.825-82.28 85.643a214.414 214.414 0 0 1-112.913 31.204c-67.312 0-121.095-20.33-161.306-61.107-40.372-40.66-60.501-97.352-60.501-169.89 0-70.82 20.57-127 61.78-168.613 41.163-41.567 93.157-62.385 156.052-62.385 92.088-.046 157.656 35.781 196.588 107.507l-98.317 51.812c-10.599-22.119-23.708-37.64-39.165-46.468-15.573-8.83-30.401-13.29-44.51-13.29-66.404 0-99.641 43.796-99.641 131.436 0 39.825 8.436 71.656 25.241 95.564 16.805 23.932 41.605 35.874 74.377 35.874 43.372 0 73.912-21.283 91.623-63.755z', stroke: '#979797', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconFilesCreativeCommonsLine;
}(_react.Component);

exports.default = IconFilesCreativeCommonsLine;