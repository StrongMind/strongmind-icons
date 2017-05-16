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

var IconFolderLockedSolid = function (_Component) {
  _inherits(IconFolderLockedSolid, _Component);

  function IconFolderLockedSolid() {
    _classCallCheck(this, IconFolderLockedSolid);

    return _possibleConstructorReturn(this, (IconFolderLockedSolid.__proto__ || Object.getPrototypeOf(IconFolderLockedSolid)).apply(this, arguments));
  }

  _createClass(IconFolderLockedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconFolderLockedSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M920 811.429c-52.267 0-93 40.229-93 91.429V994h186v-91.142c0-51.2-40.733-91.43-93-91.43"/>\n        <path d="M1200 1283.195c0 42.42-34.385 76.805-76.801 76.805H716.801c-42.417 0-76.801-34.387-76.801-76.805v-212.104c0-42.42 34.388-77.091 76.808-77.091H733v-91.143C733 802.286 817.333 720 920 720s187 82.286 187 182.857V994h16.191c42.42 0 76.809 34.672 76.809 77.091v212.104zM1680 480h-624l-55.76-139.44C975.92 279.84 917.12 240 851.68 240H320c-88.4 0-160 71.6-160 160v1200c0 44.16 35.84 80 80 80h1360c88.4 0 160-71.6 160-160V560c0-44.16-35.84-80-80-80z"/>\n    </g>\n</svg>'
      }));
    }
  }]);

  return IconFolderLockedSolid;
}(_react.Component);

exports.default = IconFolderLockedSolid;