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

var IconStatsLine = function (_Component) {
  _inherits(IconStatsLine, _Component);

  function IconStatsLine() {
    _classCallCheck(this, IconStatsLine);

    return _possibleConstructorReturn(this, (IconStatsLine.__proto__ || Object.getPrototypeOf(IconStatsLine)).apply(this, arguments));
  }

  _createClass(IconStatsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconStatsLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1581.176 1734.749h225.883v-903.53h-225.883v903.53zm-564.705 0h225.882v-451.765H1016.47v451.765zm-564.706 0h225.882v-677.647H451.765v677.647zm1016.47-1016.47H1920v1129.41H0V153.573h112.941V1734.75h225.883V944.16h451.764v790.589H903.53v-564.706h451.765v564.706h112.941V718.279zm-838.238-315.83c-133.722 66.749-178.221 312.396-178.221 372.255H338.835c0-94.193 57.035-381.516 240.677-473.337 117.685-58.616 257.055-28.574 414.382 89.337 76.348 57.374 150.55 76.122 226.786 57.148C1432.33 395.334 1585.028 76.275 1586.609 73l102.099 48.113c-7.003 15.134-176.753 370.673-440.358 436.292-109.666 27.331-218.315 1.694-322.221-76.349-120.395-90.352-220.122-116.555-296.132-78.607z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconStatsLine;
}(_react.Component);

exports.default = IconStatsLine;