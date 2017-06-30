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

var IconTextSuperscriptSolid = function (_Component) {
  _inherits(IconTextSuperscriptSolid, _Component);

  function IconTextSuperscriptSolid() {
    _classCallCheck(this, IconTextSuperscriptSolid);

    return _possibleConstructorReturn(this, (IconTextSuperscriptSolid.__proto__ || Object.getPrototypeOf(IconTextSuperscriptSolid)).apply(this, arguments));
  }

  _createClass(IconTextSuperscriptSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTextSuperscriptSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M0 415.471h1094.335v273.584H683.959v1231.127H410.376V689.055H0V415.471zm1817.964 122.333c-48.014 48.014-104.783 101.363-158.952 151.155h256.074v273.584H1367.92c-75.646 0-136.792-61.146-136.792-136.792v-59.778c0-39.67 17.236-77.287 47.056-103.278 2.052-1.915 214.627-186.584 346.357-318.314 9.986-9.986 25.854-28.727 20.245-42.27-4.65-11.353-20.245-23.527-37.48-23.527-50.066 0-109.708 55.948-130.5 83.032l-218.32-164.97C1273.26 176.946 1407.862 5 1607.305 5c125.985 0 242.531 77.424 290.272 192.466 47.877 115.316 18.056 242.669-79.613 340.338z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconTextSuperscriptSolid;
}(_react.Component);

exports.default = IconTextSuperscriptSolid;