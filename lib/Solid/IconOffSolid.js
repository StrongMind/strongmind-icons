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

var IconOffSolid = function (_Component) {
  _inherits(IconOffSolid, _Component);

  function IconOffSolid() {
    _classCallCheck(this, IconOffSolid);

    return _possibleConstructorReturn(this, (IconOffSolid.__proto__ || Object.getPrototypeOf(IconOffSolid)).apply(this, arguments));
  }

  _createClass(IconOffSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconOffSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M642.077 960.295c0-175.276 142.637-317.913 317.912-317.913 68.458 0 130.45 23.632 182.27 60.721L702.8 1142.564c-37.09-51.82-60.722-113.812-60.722-182.27zm576.481-183.648l-442.216 442.216-573.62 573.726-75.027-75.027 283.79-283.684c-26.811-17.273-54.151-35.924-82.128-57.118C199.225 1275.346 89.651 1139.597 11.87 984.032L0 960.401l11.763-23.738C199.437 559.09 562.81 324.47 959.989 324.47c111.376 0 220.314 18.545 323.847 54.999 42.282 13.246 85.519 32.003 128.649 53.409L1717.257 128l75.027 75.027-573.726 573.62zm689.891 160.366L1920 960.326l-11.55 23.208c-187.675 378.422-551.049 612.617-948.44 612.617-111.269 0-220.419-18.015-324.27-55.105l-23.314-8.477 266.199-266.305c26.069 7.1 52.985 11.975 81.386 11.975 175.275 0 317.912-142.637 317.912-317.913 0-28.4-4.875-55.316-11.869-81.385l329.781-329.781C1723 648.666 1831.091 783.355 1908.45 937.013z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconOffSolid;
}(_react.Component);

exports.default = IconOffSolid;