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

var IconIntegrationsLine = function (_Component) {
  _inherits(IconIntegrationsLine, _Component);

  function IconIntegrationsLine() {
    _classCallCheck(this, IconIntegrationsLine);

    return _possibleConstructorReturn(this, (IconIntegrationsLine.__proto__ || Object.getPrototypeOf(IconIntegrationsLine)).apply(this, arguments));
  }

  _createClass(IconIntegrationsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconIntegrationsLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1581.235 734.118c0 217.976-177.317 395.294-395.294 395.294H960.06c-217.977 0-395.294-177.318-395.294-395.294V564.706h1016.47v169.412zm225.883-282.353h-338.824V0h-112.941v451.765H790.647V0H677.706v451.765H338.882v112.94h112.942v169.413c0 280.207 228.028 508.235 508.235 508.235h56.47v395.294c0 93.402-76.009 169.412-169.411 169.412-93.403 0-169.412-76.01-169.412-169.412 0-155.633-126.72-282.353-282.353-282.353S113 1482.014 113 1637.647V1920h112.941v-282.353c0-93.402 76.01-169.412 169.412-169.412s169.412 76.01 169.412 169.412c0 155.633 126.72 282.353 282.353 282.353 155.746 0 282.353-126.72 282.353-282.353v-395.294h56.47c280.207 0 508.235-228.028 508.235-508.235V564.706h112.942V451.765z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconIntegrationsLine;
}(_react.Component);

exports.default = IconIntegrationsLine;