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

var IconClearTextFormattingLine = function (_Component) {
  _inherits(IconClearTextFormattingLine, _Component);

  function IconClearTextFormattingLine() {
    _classCallCheck(this, IconClearTextFormattingLine);

    return _possibleConstructorReturn(this, (IconClearTextFormattingLine.__proto__ || Object.getPrototypeOf(IconClearTextFormattingLine)).apply(this, arguments));
  }

  _createClass(IconClearTextFormattingLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconClearTextFormattingLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1235.141 1619.922h-190.317l-179.997-179.998 635.15-635.149 275.155 275.155-539.99 539.992zm667.31-582.472l-359.995-359.994c-23.52-23.399-61.44-23.399-84.839 0l-719.989 719.99c-23.519 23.52-23.519 61.438 0 84.957l137.518 137.52H0v119.997h1259.98c15.96 0 31.2-6.36 42.48-17.52l599.99-599.99c23.4-23.52 23.4-61.44 0-84.96z' }),
          _react2.default.createElement('path', { d: 'M120.034 180.004v119.999h494.993L243.392 1360.066l113.158 39.72L742.105 300.003h457.912V180.004z' })
        )
      );
    }
  }]);

  return IconClearTextFormattingLine;
}(_react.Component);

exports.default = IconClearTextFormattingLine;