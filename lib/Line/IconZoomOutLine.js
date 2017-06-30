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

var IconZoomOutLine = function (_Component) {
  _inherits(IconZoomOutLine, _Component);

  function IconZoomOutLine() {
    _classCallCheck(this, IconZoomOutLine);

    return _possibleConstructorReturn(this, (IconZoomOutLine.__proto__ || Object.getPrototypeOf(IconZoomOutLine)).apply(this, arguments));
  }

  _createClass(IconZoomOutLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconZoomOutLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M853 1600c-382.293 0-693.333-311.04-693.333-693.333 0-382.294 311.04-693.334 693.333-693.334 382.293 0 693.333 311.04 693.333 693.334C1546.333 1288.96 1235.293 1600 853 1600zm997.76 228.907l-396.373-396.267C1577.587 1291.733 1653 1108.16 1653 906.667c0-441.174-358.827-800-800-800s-800 358.826-800 800c0 441.173 358.827 800 800 800 201.387 0 385.173-75.414 525.973-198.614l396.267 396.374 75.52-75.52zM479.667 960.053h746.666V853.387H479.667v106.666z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconZoomOutLine;
}(_react.Component);

exports.default = IconZoomOutLine;