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

var IconComposeSolid = function (_Component) {
  _inherits(IconComposeSolid, _Component);

  function IconComposeSolid() {
    _classCallCheck(this, IconComposeSolid);

    return _possibleConstructorReturn(this, (IconComposeSolid.__proto__ || Object.getPrototypeOf(IconComposeSolid)).apply(this, arguments));
  }

  _createClass(IconComposeSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconComposeSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1045.06 957.831l-305.25 538.876-105.852-42.318 305.25-536.648c9.377-17.349 30.009-28.368 52.633-28.368 9.495 0 18.521 1.876 27.078 5.51 14.419 6.681 25.086 17.583 29.423 30.478 3.752 10.667 2.462 21.92-3.282 32.47m593.15-460.687l-205.844-76.781 189.198-92.724c-15.942-99.17-41.848-193.887-79.829-281.219L1522.276 0l-54.86 16.763c-172.67 51.813-353.311 139.378-522.933 253.554-13.833 8.792-28.251 18.756-42.552 28.954l77.953 293.41-297.16-115.113C600.197 552.59 526.23 631.13 465.038 708.732l147.819 311.814-315.33-3.634c-24.149 97.53-22.86 192.715 10.667 274.537 43.02 100.929 127.187 183.571 250.271 245.817l21.687 11.019-153.328 275.24 6.799 96.475 99.053-54.86 152.39-273.13 17.936 5.392c70.92 21.217 141.137 32.001 208.657 32.001 89.09 0 173.725-18.17 251.444-53.805 58.846-27.196 118.747-69.865 163.058-108.783 69.865-59.784 113.94-123.905 138.558-167.16 24.5-42.904 46.654-93.662 67.403-147.82l-240.19-185.33 317.557-91.433c24.265-127.774 34.23-256.25 28.72-377.928', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconComposeSolid;
}(_react.Component);

exports.default = IconComposeSolid;