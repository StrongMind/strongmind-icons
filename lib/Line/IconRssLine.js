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

var IconRssLine = function (_Component) {
  _inherits(IconRssLine, _Component);

  function IconRssLine() {
    _classCallCheck(this, IconRssLine);

    return _possibleConstructorReturn(this, (IconRssLine.__proto__ || Object.getPrototypeOf(IconRssLine)).apply(this, arguments));
  }

  _createClass(IconRssLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconRssLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1616.875 1813.333c-27.627-820.266-689.92-1482.56-1510.187-1510.186V107.52c928.213 27.733 1678.08 777.6 1705.813 1705.813h-195.626zM53.355 0H.02v408.853h53.334c803.733 0 1457.706 653.974 1457.706 1457.814V1920h408.96v-53.333C1920.021 837.44 1082.581 0 53.355 0zm933.984 1813.333c-26.667-473.493-407.147-853.973-880.64-880.746V736.853c581.226 27.094 1049.28 495.254 1076.373 1076.48H987.339zM53.365 628.907H.032v408.853h53.333c456.96 0 828.8 371.947 828.8 828.907V1920h408.854v-53.333c0-682.454-555.2-1237.76-1237.654-1237.76zM267.19 1812.288c-88 0-159.573-71.573-159.573-159.467 0-87.893 71.573-159.466 159.573-159.466 87.894 0 159.467 71.573 159.467 159.466 0 87.894-71.573 159.467-159.467 159.467m0-425.6c-146.773 0-266.24 119.36-266.24 266.133 0 146.774 119.467 266.134 266.24 266.134 146.774 0 266.134-119.36 266.134-266.134 0-146.773-119.36-266.133-266.134-266.133', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconRssLine;
}(_react.Component);

exports.default = IconRssLine;