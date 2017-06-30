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

var IconClearTextFormattingSolid = function (_Component) {
  _inherits(IconClearTextFormattingSolid, _Component);

  function IconClearTextFormattingSolid() {
    _classCallCheck(this, IconClearTextFormattingSolid);

    return _possibleConstructorReturn(this, (IconClearTextFormattingSolid.__proto__ || Object.getPrototypeOf(IconClearTextFormattingSolid)).apply(this, arguments));
  }

  _createClass(IconClearTextFormattingSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconClearTextFormattingSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1' },
            _react2.default.createElement('path', { d: 'M1902.45 1037.571c23.399 23.399 23.399 61.439 0 84.839l-599.99 599.99c-11.281 11.28-26.521 17.64-42.48 17.64H0v-119.998h875.146l-137.518-137.638c-23.399-23.399-23.399-61.438 0-84.839l719.989-719.988c23.399-23.4 61.438-23.4 84.839 0l359.994 359.994z' }),
            _react2.default.createElement('path', { d: 'M243.452 1360.186L615.086 300.003H120.094V180.005h1079.983v119.998H742.164L356.61 1399.786z' })
          )
        )
      );
    }
  }]);

  return IconClearTextFormattingSolid;
}(_react.Component);

exports.default = IconClearTextFormattingSolid;