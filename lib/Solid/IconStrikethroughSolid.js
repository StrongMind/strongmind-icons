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

var IconStrikethroughSolid = function (_Component) {
  _inherits(IconStrikethroughSolid, _Component);

  function IconStrikethroughSolid() {
    _classCallCheck(this, IconStrikethroughSolid);

    return _possibleConstructorReturn(this, (IconStrikethroughSolid.__proto__ || Object.getPrototypeOf(IconStrikethroughSolid)).apply(this, arguments));
  }

  _createClass(IconStrikethroughSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconStrikethroughSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1226.76 1261.689h244.44c9.24 67.2 4.92 138.84-16.32 215.64-53.16 190.08-176.64 319.56-348 364.8-46.44 12.24-94.56 17.76-143.04 17.76-209.16 0-424.92-104.04-546.84-225.12l-52.44-56.04 175.68-163.68 49.2 52.92c98.76 97.92 303.48 182.16 456.24 142.08 89.28-23.64 147.48-87.96 177.96-196.92 16.56-60 17.16-109.44 3.12-151.44zm693.24-360v240H0v-240h561.72c-135.6-96.84-226.68-243.6-156.72-479.16 67.08-225.84 220.68-311.16 337.8-343.08 247.8-66.72 543.6 48.36 696.48 191.16l-163.8 175.32c-105.12-98.16-319.2-176.16-469.8-134.76-85.8 23.28-141.6 82.08-170.64 179.76-54.48 183.24 66.72 252 377.76 345.48 71.04 21.36 133.56 40.68 183.96 65.28H1920z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconStrikethroughSolid;
}(_react.Component);

exports.default = IconStrikethroughSolid;