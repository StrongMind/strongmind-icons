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

var IconFilesCopyrightSolid = function (_Component) {
  _inherits(IconFilesCopyrightSolid, _Component);

  function IconFilesCopyrightSolid() {
    _classCallCheck(this, IconFilesCopyrightSolid);

    return _possibleConstructorReturn(this, (IconFilesCopyrightSolid.__proto__ || Object.getPrototypeOf(IconFilesCopyrightSolid)).apply(this, arguments));
  }

  _createClass(IconFilesCopyrightSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconFilesCopyrightSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M987.206 1104.293c-35.865 0-62.963-13.084-81.294-39.32-18.331-26.168-27.563-61.035-27.563-104.671 0-95.972 36.33-143.926 108.857-143.926 14.479 0 30.153 4.849 47.156 14.546 16.87 9.697 31.083 26.66 42.772 50.836l108.79-56.76h-.066c-43.503-78-115.498-117.784-216.12-117.718-68.608 0-125.461 22.802-170.358 68.43-45.031 45.495-67.48 107.073-67.48 184.647 0 79.502 22.25 141.54 66.683 186.039 44.499 44.631 102.946 66.95 175.472 66.95 45.496 0 87.073-11.355 124.797-34.204 37.725-22.714 67.214-53.995 88.467-93.779l-100.09-50.875c-19.327 46.558-52.734 69.804-100.023 69.804"/>\n        <path d="M960.5 1598C608.418 1598 323 1312.582 323 960.5S608.418 323 960.5 323 1598 608.418 1598 960.5 1312.582 1598 960.5 1598M960 163c-440.171 0-797 356.829-797 797s356.829 797 797 797 797-356.829 797-797-356.829-797-797-797"/>\n    </g>\n</svg>'
      }));
    }
  }]);

  return IconFilesCopyrightSolid;
}(_react.Component);

exports.default = IconFilesCopyrightSolid;