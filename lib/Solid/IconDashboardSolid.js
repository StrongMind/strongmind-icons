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

var IconDashboardSolid = function (_Component) {
  _inherits(IconDashboardSolid, _Component);

  function IconDashboardSolid() {
    _classCallCheck(this, IconDashboardSolid);

    return _possibleConstructorReturn(this, (IconDashboardSolid.__proto__ || Object.getPrototypeOf(IconDashboardSolid)).apply(this, arguments));
  }

  _createClass(IconDashboardSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconDashboardSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M833.89 1063.327c28.913 170.315 64.038 348.198 83.463 384.79 27.558 51.84 92.047 71.944 144 44.387 51.84-27.558 71.718-92.273 44.16-144.113-19.425-36.593-146.936-165.46-271.623-285.064zm177.995 554.315c-78.72 0-154.955-42.353-194.372-116.555-44.385-83.802-109.1-501.346-121.637-584.245-3.501-23.717 8.244-47.21 29.364-58.277 21.346-11.294 47.097-8.02 64.829 8.357 61.553 56.923 370.899 344.81 415.284 428.612 56.697 106.842 15.812 239.887-91.143 296.697-32.64 17.28-67.765 25.411-102.325 25.411zm-108.4-986.857V471.312h112.94v159.473h-112.94zM1469.68 865.24l-79.85-79.85 112.716-112.715 79.85 79.85L1469.68 865.24zm-1019.452 0L337.513 752.524l79.85-79.85L530.078 785.39l-79.85 79.85zm1432.726 645.775H1358.57v-112.942h434.26c9.486-50.71 14.23-103.115 14.23-156.084 0-467.125-380.047-847.06-847.059-847.06-467.125 0-847.059 379.935-847.059 847.06 0 52.97 4.744 105.374 14.118 156.084h487.454v112.942H36.932l-10.39-43.144C8.921 1395.137 0 1319.128 0 1241.99c0-529.243 430.645-960 960-960s960 430.757 960 960c0 77.139-8.922 153.148-26.654 225.882l-10.39 43.144z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconDashboardSolid;
}(_react.Component);

exports.default = IconDashboardSolid;