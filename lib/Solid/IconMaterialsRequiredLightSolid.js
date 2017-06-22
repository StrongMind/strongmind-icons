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

var IconMaterialsRequiredLightSolid = function (_Component) {
  _inherits(IconMaterialsRequiredLightSolid, _Component);

  function IconMaterialsRequiredLightSolid() {
    _classCallCheck(this, IconMaterialsRequiredLightSolid);

    return _possibleConstructorReturn(this, (IconMaterialsRequiredLightSolid.__proto__ || Object.getPrototypeOf(IconMaterialsRequiredLightSolid)).apply(this, arguments));
  }

  _createClass(IconMaterialsRequiredLightSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMaterialsRequiredLightSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1920 1886.762l-483.32-128.108-364.527-364.528c109.475-100.158 237.584-220.114 363.363-347.058l356.375 356.375L1920 1886.763zM396.671 188.74l184.01 184.01-173.528 174.694-185.176-185.175 174.694-173.53zm150.237 688.293c101.322-112.969 224.772-244.571 355.21-372.68L444.421 46.655c-25.622-25.621-68.713-26.786-95.5 0L78.73 314.52c-12.811 11.646-19.799 29.116-19.799 47.75 0 17.47 6.988 34.938 19.799 46.585l468.179 468.179zm172.015 668.96c-58.58 130.904-329.705 192.28-505.913 214.757 28.533-73.139 58.697-184.01 58.697-326.794 0-78.263 55.436-160.485 129.157-191.115 21.662-9.084 44.023-13.626 66.966-13.626 59.745 0 122.635 30.28 182.846 88.861 72.09 91.54 95.033 168.288 68.247 227.917zM1913.944 184.896c2.213-55.785-20.381-90.49-45.653-115.88-19.333-19.333-53.34-42.276-110.29-39.713-320.738 13.043-1132.947 931-1266.995 1084.964-45.654-3.61-91.307 2.911-135.097 21.08-118.093 49.38-200.665 172.131-200.665 298.61 0 227.334-87.696 360.567-88.395 361.732L0 1893.168l117.976-6.522c60.444-3.261 593.61-39.714 707.277-292.903 21.196-47.4 25.855-97.945 15.49-151.285 162.348-141.385 1060.74-938.454 1073.2-1257.562h.001z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMaterialsRequiredLightSolid;
}(_react.Component);

exports.default = IconMaterialsRequiredLightSolid;