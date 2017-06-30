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

var IconMoveDownLine = function (_Component) {
  _inherits(IconMoveDownLine, _Component);

  function IconMoveDownLine() {
    _classCallCheck(this, IconMoveDownLine);

    return _possibleConstructorReturn(this, (IconMoveDownLine.__proto__ || Object.getPrototypeOf(IconMoveDownLine)).apply(this, arguments));
  }

  _createClass(IconMoveDownLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMoveDownLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M746.667 373.667V267H1920v106.667H746.667zm0 853.333v-106.773H1920V1227H746.667zm0 426.667V1547H1920v106.667H746.667zM0 267.043h106.667v426.666H457.92L282.347 518.136l75.306-75.52L662.08 747.043l-304.427 304.32-75.306-75.414L457.92 800.27H0V267.043zm746.667 533.29V693.667h320v106.666h-320zm426.666 0V693.667h320.107v106.666h-320.107zm426.667 0V693.667h320v106.666h-320z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMoveDownLine;
}(_react.Component);

exports.default = IconMoveDownLine;