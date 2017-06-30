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

var IconWindowsLine = function (_Component) {
  _inherits(IconWindowsLine, _Component);

  function IconWindowsLine() {
    _classCallCheck(this, IconWindowsLine);

    return _possibleConstructorReturn(this, (IconWindowsLine.__proto__ || Object.getPrototypeOf(IconWindowsLine)).apply(this, arguments));
  }

  _createClass(IconWindowsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconWindowsLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M677.647 1642.605l-564.706-78.268V1129.4h564.706v513.205zm56.47-626.146H56.472c-31.172 0-56.471 25.3-56.471 56.47v540.537c0 28.236 20.781 52.066 48.79 55.906l677.648 93.967c2.484.452 5.195.565 7.68.565 13.553 0 26.654-4.856 37.044-13.892 12.31-10.73 19.426-26.202 19.426-42.579V1072.93c0-31.172-25.299-56.47-56.47-56.47zm37.045-846.483c-12.31-10.729-28.574-15.811-44.724-13.327L48.79 250.616C20.78 254.456 0 278.287 0 306.522V847.06c0 31.172 25.299 56.47 56.47 56.47h677.648c31.171 0 56.47-25.298 56.47-56.47V212.555c0-16.376-7.115-31.85-19.426-42.579zm-93.515 620.612H112.941V355.652l564.706-78.268v513.204zm1223.04-776.583c-12.198-10.843-28.8-15.7-44.725-13.553l-903.53 123.332c-28.008 3.84-48.903 27.783-48.903 56.018V847.06c0 31.172 25.3 56.47 56.471 56.47h903.53c31.171 0 56.47-25.298 56.47-56.47V56.47c0-16.377-7.115-31.85-19.313-42.466zm-93.628 776.583H1016.47V229.045l790.588-107.86v669.403zm56.47 225.905H960c-31.172 0-56.47 25.186-56.47 56.47v667.257c0 28.236 20.894 52.066 48.903 56.02l903.53 123.218c2.484.339 5.082.565 7.566.565 13.553 0 26.767-4.97 37.158-14.005 12.198-10.73 19.313-26.202 19.313-42.466v-790.588c0-31.285-25.299-56.47-56.47-56.47zm-56.47 782.344l-790.588-107.972v-561.43h790.588v669.402z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconWindowsLine;
}(_react.Component);

exports.default = IconWindowsLine;