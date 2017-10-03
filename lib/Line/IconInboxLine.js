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

var IconInboxLine = function (_Component) {
  _inherits(IconInboxLine, _Component);

  function IconInboxLine() {
    _classCallCheck(this, IconInboxLine);

    return _possibleConstructorReturn(this, (IconInboxLine.__proto__ || Object.getPrototypeOf(IconInboxLine)).apply(this, arguments));
  }

  _createClass(IconInboxLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconInboxLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M185.455 0h1549.09l10.91 76.364L1920 1210.909V1920H0v-709.09L174.545 76.363 185.455 0zm152.727 174.545l-147.273 960h594.546v87.273c0 47.273 17.272 88.182 51.818 122.727 34.545 34.546 75.454 51.819 122.727 51.819 47.273 0 88.182-17.273 122.727-51.819 34.546-34.545 51.818-75.454 51.818-122.727v-87.273h594.546l-147.273-960H338.182zM174.545 1309.091v436.364h1570.91V1309.09h-452.728C1270.91 1385.455 1230 1448.18 1170 1497.273c-60 49.09-130 73.636-210 73.636s-150-24.545-210-73.636c-60-49.091-100.909-111.818-122.727-188.182H174.545z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconInboxLine;
}(_react.Component);

exports.default = IconInboxLine;