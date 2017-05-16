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

var IconSisSyncedLine = function (_Component) {
  _inherits(IconSisSyncedLine, _Component);

  function IconSisSyncedLine() {
    _classCallCheck(this, IconSisSyncedLine);

    return _possibleConstructorReturn(this, (IconSisSyncedLine.__proto__ || Object.getPrototypeOf(IconSisSyncedLine)).apply(this, arguments));
  }

  _createClass(IconSisSyncedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconSisSyncedLine',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M341.067 800c71.359-275.6 321.354-480 618.949-480 280.955 0 519.59 182.24 605.509 434.48L1360.009 960H1840V480l-151.437 151.44C1562.885 353.92 1283.93 160 960.016 160c-386.313 0-709.507 275.28-783.826 640h164.877zm1237.866 320c-71.359 275.6-321.354 480-618.949 480-280.875 0-519.59-182.24-605.509-434.48L559.991 960H80v480l151.437-151.44C357.115 1566.08 636.07 1760 959.984 1760c386.313 0 709.507-275.28 783.906-640h-164.957zM892.76 1354.176l-323.514-323.44 141.438-141.44 156.557 156.56 331.354-463.92 162.717 116.16-468.552 656.08z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconSisSyncedLine;
}(_react.Component);

exports.default = IconSisSyncedLine;