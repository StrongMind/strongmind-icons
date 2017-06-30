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

var IconUnmutedLine = function (_Component) {
  _inherits(IconUnmutedLine, _Component);

  function IconUnmutedLine() {
    _classCallCheck(this, IconUnmutedLine);

    return _possibleConstructorReturn(this, (IconUnmutedLine.__proto__ || Object.getPrototypeOf(IconUnmutedLine)).apply(this, arguments));
  }

  _createClass(IconUnmutedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconUnmutedLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M252.356 1468.235c53.76-59.971 86.513-139.143 86.513-225.882V847.059c0-342.55 278.626-621.177 621.176-621.177 342.438 0 621.177 278.626 621.177 621.177v395.294c0 86.739 32.753 165.91 86.4 225.882H252.356zm707.69 338.824c-124.575 0-225.883-101.308-225.883-225.883h451.765c0 124.575-101.309 225.883-225.883 225.883zm734.117-564.706V847.059c0-385.694-299.294-702.268-677.647-731.294V0H903.575v115.765c-378.466 29.026-677.647 345.6-677.647 731.294v395.294c0 124.574-101.309 225.882-225.883 225.882v112.941h621.177c0 186.805 151.906 338.824 338.823 338.824 186.805 0 338.824-152.019 338.824-338.824h621.176v-112.94c-124.574 0-225.882-101.309-225.882-225.883z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconUnmutedLine;
}(_react.Component);

exports.default = IconUnmutedLine;