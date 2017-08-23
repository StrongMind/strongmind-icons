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
          _react2.default.createElement('path', { d: 'M533.303 1778.7v-106.669H1920v106.67H533.303zm0-853.352V818.68H1920v106.67H533.303zm0 426.676V1245.25H1920v106.775H533.303zM357.66 141l304.434 304.327L357.66 749.76l-75.308-75.521L457.93 498.66H106.562V1778.69H0V392.099h457.93l-175.577-175.79L357.66 141zM853.31 498.672v-106.67h213.338v106.67H853.31zm426.676 0v-106.67h213.338v106.67h-213.338zm426.676 0v-106.67H1920v106.67h-213.338z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMoveUpTopLine;
}(_react.Component);

exports.default = IconMoveUpTopLine;