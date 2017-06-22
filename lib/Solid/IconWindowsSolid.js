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

var IconWindowsSolid = function (_Component) {
  _inherits(IconWindowsSolid, _Component);

  function IconWindowsSolid() {
    _classCallCheck(this, IconWindowsSolid);

    return _possibleConstructorReturn(this, (IconWindowsSolid.__proto__ || Object.getPrototypeOf(IconWindowsSolid)).apply(this, arguments));
  }

  _createClass(IconWindowsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconWindowsSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M734.118 1016.437c31.171 0 56.47 25.299 56.47 56.47v634.504c0 16.376-7.115 31.85-19.426 42.579-10.39 9.035-23.491 13.891-37.044 13.891-2.485 0-5.196-.113-7.68-.564L48.79 1669.35C20.78 1665.51 0 1641.68 0 1613.444v-540.537c0-31.171 25.299-56.47 56.47-56.47h677.648zm-7.726-859.855c16.151-2.372 32.415 2.597 44.725 13.327 12.424 10.73 19.426 26.315 19.426 42.579V846.99c0 31.285-25.186 56.47-56.47 56.47H56.424c-31.171 0-56.47-25.185-56.47-56.47V306.455c0-28.123 20.781-52.066 48.79-55.906l677.647-93.967zM1900.698 13.914c12.198 10.73 19.313 26.203 19.313 42.466v790.588c0 31.285-25.299 56.471-56.47 56.471H960.01c-31.171 0-56.47-25.186-56.47-56.47V179.711c0-28.235 20.78-52.066 48.903-55.906L1855.974.474c16.15-2.033 32.414 2.71 44.724 13.44zm-37.169 1002.523c31.172 0 56.471 25.299 56.471 56.47v790.589c0 16.376-7.115 31.849-19.313 42.465-10.39 9.149-23.605 14.005-37.158 14.005-2.484 0-5.082-.113-7.567-.452l-903.53-123.331c-28.008-3.84-48.903-27.784-48.903-56.02v-667.256c0-31.171 25.3-56.47 56.471-56.47h903.53z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconWindowsSolid;
}(_react.Component);

exports.default = IconWindowsSolid;