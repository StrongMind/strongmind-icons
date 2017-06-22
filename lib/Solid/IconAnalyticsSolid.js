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

var IconAnalyticsSolid = function (_Component) {
  _inherits(IconAnalyticsSolid, _Component);

  function IconAnalyticsSolid() {
    _classCallCheck(this, IconAnalyticsSolid);

    return _possibleConstructorReturn(this, (IconAnalyticsSolid.__proto__ || Object.getPrototypeOf(IconAnalyticsSolid)).apply(this, arguments));
  }

  _createClass(IconAnalyticsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAnalyticsSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M451.765 774.704H338.824c0-94.193 57.035-381.516 240.677-473.337 117.798-58.73 257.054-28.687 414.381 89.337 76.462 57.26 150.55 76.009 226.9 57.035C1432.431 395.334 1585.015 76.162 1586.597 73l102.098 48c-7.002 15.134-176.752 370.673-440.357 436.405-109.779 27.219-218.315 1.694-322.221-76.349-120.509-90.352-220.236-116.555-296.132-78.607-133.61 66.749-178.221 312.283-178.221 372.255zm1016.47-56.471H1920v1129.412H0V153.527h112.941v1581.177h225.883V944.115h451.764v790.589H903.53v-564.706h451.765v564.706h112.941V718.233z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAnalyticsSolid;
}(_react.Component);

exports.default = IconAnalyticsSolid;