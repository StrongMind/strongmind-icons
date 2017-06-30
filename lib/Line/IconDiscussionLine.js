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

var IconDiscussionLine = function (_Component) {
  _inherits(IconDiscussionLine, _Component);

  function IconDiscussionLine() {
    _classCallCheck(this, IconDiscussionLine);

    return _possibleConstructorReturn(this, (IconDiscussionLine.__proto__ || Object.getPrototypeOf(IconDiscussionLine)).apply(this, arguments));
  }

  _createClass(IconDiscussionLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconDiscussionLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M677.647 16v338.936h112.941V129.054h1016.47V919.53h-225.994v259.765L1321.412 919.53h-79.172V467.878H0v1016.47h338.71v418.9l417.996-418.9h485.534v-451.877h32.753l419.125 419.124v-419.124H1920V16H677.647zM338.79 919.563h564.706v-112.94H338.79v112.94zm0 225.883h338.936v-113.054H338.79v113.054zM112.94 580.706h1016.47v790.701H710.4L451.652 1631.06v-259.652h-338.71V580.706z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconDiscussionLine;
}(_react.Component);

exports.default = IconDiscussionLine;