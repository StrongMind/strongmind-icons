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

var IconFilesObtainedPermissionLine = function (_Component) {
  _inherits(IconFilesObtainedPermissionLine, _Component);

  function IconFilesObtainedPermissionLine() {
    _classCallCheck(this, IconFilesObtainedPermissionLine);

    return _possibleConstructorReturn(this, (IconFilesObtainedPermissionLine.__proto__ || Object.getPrototypeOf(IconFilesObtainedPermissionLine)).apply(this, arguments));
  }

  _createClass(IconFilesObtainedPermissionLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconFilesObtainedPermissionLine',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M1159.319 717.488c-10.441-9.83-22.332-14.49-35.615-14.49H796.35c-13.603-1-26.787 4.847-36.377 14.49-9.936 9.803-15.017 21.45-15.017 35.478v321.032h91v381h248v-381h91V752.966c0-14.001-5.276-25.648-15.637-35.478M960.002 660.514c73.988 0 110.994-36.45 110.994-109.348 0-73.803-36.952-110.677-110.993-110.677-74.042 0-111.048 36.927-111.048 110.65v.053c0 72.872 37.06 109.322 111.047 109.322"/>\n    </g>\n</svg>'
      }));
    }
  }]);

  return IconFilesObtainedPermissionLine;
}(_react.Component);

exports.default = IconFilesObtainedPermissionLine;