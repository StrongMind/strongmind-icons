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

var IconStrikethroughLine = function (_Component) {
  _inherits(IconStrikethroughLine, _Component);

  function IconStrikethroughLine() {
    _classCallCheck(this, IconStrikethroughLine);

    return _possibleConstructorReturn(this, (IconStrikethroughLine.__proto__ || Object.getPrototypeOf(IconStrikethroughLine)).apply(this, arguments));
  }

  _createClass(IconStrikethroughLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconStrikethroughLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1181.952 962.208h738v120h-1920v-120h814.92c-213.24-76.92-444.6-211.92-352.44-522.12 46.92-157.68 149.28-262.2 296.04-302.16 226.68-61.68 498.72 45.24 639.84 177l-81.84 87.72c-116.64-108.72-350.88-196.92-526.44-148.92-106.08 28.8-177.6 103.08-212.52 220.68-74.4 250.32 135.72 335.16 418.08 420 74.64 22.44 139.2 42.48 186.36 67.8zm96.036 263.556l110.4-47.16c35.04 82.32 37.92 177.6 8.64 283.32-60.36 216-199.32 294.72-305.4 322.68-42.12 11.16-85.68 16.2-129.6 16.2-191.52 0-390.24-96.24-502.68-207.96l-50.88-54.6 87.84-81.72 49.2 52.8c114.72 114 339.72 205.8 515.4 159.24 110.16-29.04 184.44-109.44 220.56-238.92 22.08-79.8 21-146.52-3.48-203.88z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconStrikethroughLine;
}(_react.Component);

exports.default = IconStrikethroughLine;