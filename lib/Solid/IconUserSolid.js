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

var IconUserSolid = function (_Component) {
  _inherits(IconUserSolid, _Component);

  function IconUserSolid() {
    _classCallCheck(this, IconUserSolid);

    return _possibleConstructorReturn(this, (IconUserSolid.__proto__ || Object.getPrototypeOf(IconUserSolid)).apply(this, arguments));
  }

  _createClass(IconUserSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconUserSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1587.854 1133.986c-109.666-42.353-223.51-72.057-339.276-91.257h-5.195c135.53-91.369 224.866-246.324 224.866-421.609v-24.847c-28.235 18.07-64.377 41.788-115.087 57.713-15.925 202.165-186.466 362.428-393.148 362.428-199.793 0-365.93-148.97-390.777-342.212-3.388-16.94-4.517-34.898-4.517-53.082v-60.988c1.355-.113 2.258-.452 3.614-.678 10.503-1.807 19.877-4.179 29.364-6.663 8.132-2.033 16.15-4.18 23.38-6.664 7.905-2.71 15.472-5.421 22.587-8.583 8.132-3.502 15.586-7.116 23.04-10.956 5.083-2.823 10.391-5.308 15.135-8.132a662.834 662.834 0 0 0 20.668-12.762c3.388-2.259 7.34-4.518 10.503-6.55 4.857-3.163 9.6-5.986 14.344-8.923 34.447-21.572 67.313-38.4 128.527-38.513h.226c53.195 0 84.932 12.085 114.635 29.026 9.826 5.647 19.539 11.972 29.817 18.522 35.124 22.815 73.976 47.549 133.722 58.956.678.113 1.13.452 1.807.564 20.33 3.728 43.143 5.873 69.007 5.873.452 0 .79-.113 1.242-.113 103.342-.225 157.214-34.785 204.537-65.392l55.793-34.448v-.112l.564-.452-3.952-21.346-2.372-15.473c-5.308-34.447-15.247-67.426-27.22-99.501-24.733-66.748-62.568-127.963-114.521-179.803-26.993-27.218-57.6-50.936-89.224-70.136-80.188-50.71-173.93-77.93-269.93-77.93-220.235 0-408.846 141.177-478.87 338.824-19.2 53.082-29.365 109.553-29.365 169.412V621.12c0 19.2 1.13 38.4 3.502 56.47C472.108 829.949 557.152 960.735 678 1042.166h-5.083c-111.812 18.41-222.042 46.983-328.433 87.19-140.612 53.309-231.53 183.417-231.53 331.709V1669.1l26.768 16.49c172.235 106.955 454.475 234.353 820.292 234.353 201.938 0 508.235-40.546 820.404-234.353l26.654-16.49v-208.037c0-144.904-88.094-276.255-219.218-327.078', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconUserSolid;
}(_react.Component);

exports.default = IconUserSolid;