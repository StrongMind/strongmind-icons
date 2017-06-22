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

var IconZoomInLine = function (_Component) {
  _inherits(IconZoomInLine, _Component);

  function IconZoomInLine() {
    _classCallCheck(this, IconZoomInLine);

    return _possibleConstructorReturn(this, (IconZoomInLine.__proto__ || Object.getPrototypeOf(IconZoomInLine)).apply(this, arguments));
  }

  _createClass(IconZoomInLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconZoomInLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M854.397 1594.874c-408.288 0-740.477-332.19-740.477-740.477 0-408.288 332.189-740.477 740.477-740.477 408.287 0 740.477 332.189 740.477 740.477 0 408.287-332.19 740.477-740.477 740.477zM1920 1839.345l-423.325-423.211c131.577-150.488 212.118-346.543 212.118-561.737C1708.793 383.225 1325.568 0 854.397 0 383.225 0 0 383.225 0 854.397c0 471.17 383.225 854.396 854.397 854.396 215.08 0 411.363-80.54 561.737-212.118L1839.345 1920l80.655-80.655zM911.356 455.678h-113.92v341.759H455.679v113.92h341.759v341.758h113.92V911.356h341.758v-113.92H911.356V455.679z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconZoomInLine;
}(_react.Component);

exports.default = IconZoomInLine;