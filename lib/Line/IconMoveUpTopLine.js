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

var IconMoveUpTopLine = function (_Component) {
  _inherits(IconMoveUpTopLine, _Component);

  function IconMoveUpTopLine() {
    _classCallCheck(this, IconMoveUpTopLine);

    return _possibleConstructorReturn(this, (IconMoveUpTopLine.__proto__ || Object.getPrototypeOf(IconMoveUpTopLine)).apply(this, arguments));
  }

  _createClass(IconMoveUpTopLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMoveUpTopLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M599.967 1881.418v-120.003H1920v120.003H599.967zm0-960.024V801.391H1920v120.003H599.967zm0 480.012v-120.123H1920v120.123H599.967zM402.37 39L744.86 381.369 402.37 723.857l-84.722-84.962L515.173 441.37h-395.29v1440.036H0V321.487h515.173L317.648 123.722 402.37 39zm557.606 402.382V321.38h240.006v120.003H959.976zm360.009 0V321.38h240.006v120.003h-240.006zm360.009 0V321.38H1920v120.003h-240.006z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMoveUpTopLine;
}(_react.Component);

exports.default = IconMoveUpTopLine;