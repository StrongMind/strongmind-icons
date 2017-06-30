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

var IconExpandLine = function (_Component) {
  _inherits(IconExpandLine, _Component);

  function IconExpandLine() {
    _classCallCheck(this, IconExpandLine);

    return _possibleConstructorReturn(this, (IconExpandLine.__proto__ || Object.getPrototypeOf(IconExpandLine)).apply(this, arguments));
  }

  _createClass(IconExpandLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconExpandLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1750.588 113C1843.991 113 1920 189.01 1920 282.412v1185.882h-112.941V282.412c0-31.06-25.412-56.47-56.47-56.47H169.411c-31.06 0-56.47 25.41-56.47 56.47v1185.882H0V282.412C0 189.009 76.01 113 169.412 113h1581.176zm-734.117 1242.353H903.529V701.085L661.158 943.569l-79.963-79.962L960 484.915l378.805 378.692-79.963 79.962-242.371-242.484v654.268zM0 1807.118v-112.942h1920v112.942H0z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconExpandLine;
}(_react.Component);

exports.default = IconExpandLine;