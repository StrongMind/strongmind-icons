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

var IconInProgressSolid = function (_Component) {
  _inherits(IconInProgressSolid, _Component);

  function IconInProgressSolid() {
    _classCallCheck(this, IconInProgressSolid);

    return _possibleConstructorReturn(this, (IconInProgressSolid.__proto__ || Object.getPrototypeOf(IconInProgressSolid)).apply(this, arguments));
  }

  _createClass(IconInProgressSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconInProgressSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M240 0h1440.496v160h-160.055v320c0 100-25.008 192.5-75.026 277.5-50.017 85-115.039 152.5-195.067 202.5 80.028 50 145.05 117.5 195.067 202.5 50.018 85 75.026 177.5 75.026 277.5v320h160.055v160H240v-160h160.055v-320c0-100 25.009-192.5 75.026-277.5 50.017-85 115.04-152.5 195.067-202.5-80.028-50-145.05-117.5-195.067-202.5-50.017-85-75.026-177.5-75.026-277.5V160H240V0zm319.67 159.835v319.89c0 109.962 39.173 204.095 117.523 282.402 78.35 78.307 172.536 117.46 282.559 117.46 110.023 0 204.208-39.153 282.558-117.46 78.35-78.307 117.525-172.44 117.525-282.403v-319.89H559.669zm90.34 400.082h620.476c-20.015 70.073-58.378 127.632-115.088 172.679-56.71 45.046-121.76 67.57-195.15 67.57s-138.439-22.524-195.15-67.57c-56.71-45.047-95.072-102.606-115.088-172.679zm309.742 480.497c-110.023 0-204.209 39.152-282.559 117.46-78.35 78.306-117.524 172.44-117.524 282.402v319.89h80.017c0-89.97 30.839-165.776 92.519-227.422 61.68-61.646 137.528-92.468 227.547-92.468s165.867 30.822 227.547 92.468c61.68 61.646 92.519 137.452 92.519 227.421h80.017v-319.89c0-109.962-39.175-204.095-117.525-282.402-78.35-78.307-172.535-117.46-282.558-117.46z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconInProgressSolid;
}(_react.Component);

exports.default = IconInProgressSolid;