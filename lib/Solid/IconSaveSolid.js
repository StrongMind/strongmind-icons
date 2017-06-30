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

var IconSaveSolid = function (_Component) {
  _inherits(IconSaveSolid, _Component);

  function IconSaveSolid() {
    _classCallCheck(this, IconSaveSolid);

    return _possibleConstructorReturn(this, (IconSaveSolid.__proto__ || Object.getPrototypeOf(IconSaveSolid)).apply(this, arguments));
  }

  _createClass(IconSaveSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconSaveSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M903.647 338.824V0h112.941v338.824h-112.94zm621.177 903.529c93.402 0 169.411 76.01 169.411 169.412v338.823c0 93.403-76.01 169.412-169.411 169.412H395.412C302.009 1920 226 1843.99 226 1750.588v-338.823c0-93.403 76.01-169.412 169.412-169.412h1129.412zm-960 451.765c-62.344 0-112.942-50.71-112.942-112.942 0-62.23 50.598-112.94 112.942-112.94 62.343 0 112.94 50.71 112.94 112.94 0 62.231-50.597 112.942-112.94 112.942zm960-1355.294c93.74 0 169.411 75.67 169.411 169.411v677.647c-46.306-35.011-106.164-56.47-169.411-56.47H395.412c-63.247 0-123.106 21.459-169.412 56.47V508.235c0-93.74 75.67-169.411 169.412-169.411h508.235v428.385L657.322 520.885l-79.85 79.85 382.646 382.644 382.644-382.645-79.85-79.85-246.324 246.325V338.824h508.236z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconSaveSolid;
}(_react.Component);

exports.default = IconSaveSolid;