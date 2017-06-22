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

var IconMoreLine = function (_Component) {
  _inherits(IconMoreLine, _Component);

  function IconMoreLine() {
    _classCallCheck(this, IconMoreLine);

    return _possibleConstructorReturn(this, (IconMoreLine.__proto__ || Object.getPrototypeOf(IconMoreLine)).apply(this, arguments));
  }

  _createClass(IconMoreLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMoreLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M266.667 693c146.986 0 266.666 119.68 266.666 266.667 0 146.986-119.68 266.666-266.666 266.666C119.68 1226.333 0 1106.653 0 959.667 0 812.68 119.68 693 266.667 693zM960 693c146.987 0 266.667 119.68 266.667 266.667 0 146.986-119.68 266.666-266.667 266.666-146.987 0-266.667-119.68-266.667-266.666C693.333 812.68 813.013 693 960 693zm693.333 0C1800.32 693 1920 812.68 1920 959.667c0 146.986-119.68 266.666-266.667 266.666-146.986 0-266.666-119.68-266.666-266.666 0-146.987 119.68-266.667 266.666-266.667z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMoreLine;
}(_react.Component);

exports.default = IconMoreLine;