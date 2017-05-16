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

var IconSisImportedLine = function (_Component) {
  _inherits(IconSisImportedLine, _Component);

  function IconSisImportedLine() {
    _classCallCheck(this, IconSisImportedLine);

    return _possibleConstructorReturn(this, (IconSisImportedLine.__proto__ || Object.getPrototypeOf(IconSisImportedLine)).apply(this, arguments));
  }

  _createClass(IconSisImportedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconSisImportedLine',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M190 859.98h658.438L719.17 730.68l141.365-141.4 370.608 370.7-370.608 370.7-141.365-141.4 129.268-129.3H190v-200zm317.102 524.22C620.474 1497.5 771.137 1560 931.297 1560c160.16 0 310.824-62.4 423.996-175.8 113.372-113.4 175.756-264.1 175.756-424.3 0-160.3-62.384-310.9-175.756-424.2C1242.12 422.3 1091.458 360 931.297 360c-160.16 0-310.823 62.4-424.195 175.7L365.737 394.3C516.799 243.1 717.75 160 931.297 160c213.648 0 414.398 83.2 565.36 234.3C1647.822 545.3 1731 746.2 1731 959.9c0 213.6-83.18 414.6-234.242 565.7-151.063 151.1-351.813 234.4-565.46 234.4-213.548 0-414.499-83.3-565.561-234.4l141.365-141.4z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconSisImportedLine;
}(_react.Component);

exports.default = IconSisImportedLine;