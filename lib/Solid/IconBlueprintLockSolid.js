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

var IconBlueprintLockSolid = function (_Component) {
  _inherits(IconBlueprintLockSolid, _Component);

  function IconBlueprintLockSolid() {
    _classCallCheck(this, IconBlueprintLockSolid);

    return _possibleConstructorReturn(this, (IconBlueprintLockSolid.__proto__ || Object.getPrototypeOf(IconBlueprintLockSolid)).apply(this, arguments));
  }

  _createClass(IconBlueprintLockSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconBlueprintLockSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1520.5 319.996H360v1281h240v-160h-80v-961h961v80h160v-240z"/>\n        <path d="M40 0v1279.996h240v-160h-80v-960h960v80h160V0zM1582.857 1102.567h-445.716v-80.144c0-122.867 99.988-222.856 222.86-222.856 122.868 0 222.856 99.99 222.856 222.856v80.144zm-222.857 520c-61.509 0-111.429-49.92-111.429-111.43 0-61.508 49.92-111.427 111.43-111.427 61.506 0 111.426 49.92 111.426 111.427 0 61.51-49.92 111.43-111.427 111.43zm371.427-520v-91.144c0-204.804-166.623-371.427-371.427-371.427-204.806 0-371.429 166.623-371.429 371.427v91.144c-81.937 0-148.57 66.561-148.57 148.57v520c0 81.94 66.633 148.573 148.57 148.573h742.856c81.94 0 148.573-66.634 148.573-148.573v-520c0-82.009-66.634-148.57-148.573-148.57z"/>\n    </g>\n</svg>'
      }));
    }
  }]);

  return IconBlueprintLockSolid;
}(_react.Component);

exports.default = IconBlueprintLockSolid;