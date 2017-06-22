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

var IconTagLine = function (_Component) {
  _inherits(IconTagLine, _Component);

  function IconTagLine() {
    _classCallCheck(this, IconTagLine);

    return _possibleConstructorReturn(this, (IconTagLine.__proto__ || Object.getPrototypeOf(IconTagLine)).apply(this, arguments));
  }

  _createClass(IconTagLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTagLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1414.795 372.968c29.333 0 53.333 24 53.333 53.333v625.494l-638.4 638.506-678.933-678.933 638.506-638.4h363.52c-2.453 17.493-4.693 35.093-4.693 53.333 0 18.24 2.24 36.16 4.907 53.974-56.214-1.28-112.96 19.093-155.734 61.866-83.093 83.094-83.093 218.56 0 301.654 41.6 41.6 96.214 62.4 150.827 62.4s109.227-20.8 150.827-62.4c83.093-83.094 83.093-218.56 0-301.654-8.214-8.213-17.387-15.146-26.56-21.653l-.747-2.027c-11.093-29.866-16.853-60.906-16.853-92.16 0-18.453 2.346-36.053 6.186-53.333h153.814zm-223.68 223.147c16 31.68 36.48 60.48 61.44 86.08 3.306 30.826-5.44 62.613-29.014 86.186-41.706 41.707-109.12 41.707-150.826 0-41.6-41.6-41.6-109.226 0-150.826 20.8-20.8 48.106-31.147 75.413-31.147 14.827 0 29.227 3.627 42.987 9.707zM1521.46 52.968c-146.24 0-276.48 85.333-335.68 213.333h-440.64L-.032 1011.368l829.76 829.76 745.067-745.173V426.3c0-88.213-71.787-160-160-160h-106.347c48.853-65.706 127.147-106.666 213.013-106.666 147.094 0 266.667 119.573 266.667 266.666h106.667c0-205.866-167.467-373.333-373.334-373.333z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTagLine;
}(_react.Component);

exports.default = IconTagLine;