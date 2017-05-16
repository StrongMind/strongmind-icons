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

var IconCloudLockSolid = function (_Component) {
  _inherits(IconCloudLockSolid, _Component);

  function IconCloudLockSolid() {
    _classCallCheck(this, IconCloudLockSolid);

    return _possibleConstructorReturn(this, (IconCloudLockSolid.__proto__ || Object.getPrototypeOf(IconCloudLockSolid)).apply(this, arguments));
  }

  _createClass(IconCloudLockSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconCloudLockSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1322 1369.997c0 30.968-25.032 56-56 56H818c-30.968 0-56-25.032-56-56v-392c0-30.968 25.032-56 56-56 0-123.536 100.464-224 224-224s224 100.464 224 224c30.968 0 56 25.032 56 56v392zm291.833-619.846c.429-7.346.586-14.534.586-21.684 0-257.783-210.313-467.47-468.916-467.47-187.496 0-354.597 112.326-428.478 277.942-11.838-1.211-23.637-1.758-35.475-1.758-199.373 0-363.037 155.615-375.226 351.511C191.38 966.206 120 1096.699 120 1236.96c0 209.961 155.732 390.619 362.177 420.273l802.454.977c284.154 0 515.369-230.433 515.369-513.689 0-153.935-68.567-297.282-186.167-394.37z"/>\n        <path d="M1042 809.997c-61.712 0-112 50.232-112 112h224c0-61.768-50.288-112-112-112"/>\n    </g>\n</svg>'
      }));
    }
  }]);

  return IconCloudLockSolid;
}(_react.Component);

exports.default = IconCloudLockSolid;