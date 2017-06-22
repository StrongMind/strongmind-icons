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

var IconHourGlassLine = function (_Component) {
  _inherits(IconHourGlassLine, _Component);

  function IconHourGlassLine() {
    _classCallCheck(this, IconHourGlassLine);

    return _possibleConstructorReturn(this, (IconHourGlassLine.__proto__ || Object.getPrototypeOf(IconHourGlassLine)).apply(this, arguments));
  }

  _createClass(IconHourGlassLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconHourGlassLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1072.588 960c0 167.266 96.226 245.308 189.29 320.64 116.555 94.532 247.793 200.922 261.346 526.419H396.07c13.553-325.497 144.79-431.887 261.345-526.419 93.064-75.332 189.29-153.374 189.29-320.64s-96.226-245.308-189.29-320.64c-116.555-94.532-247.792-200.922-261.345-526.419h1127.153c-13.553 325.497-144.791 431.887-261.346 526.419-93.064 75.332-189.29 153.374-189.29 320.64m260.443-232.998c135.529-109.891 304.263-246.663 304.263-670.531V0H282v56.47c0 423.869 168.734 560.64 304.264 670.532 88.771 72.057 147.5 119.605 147.5 232.998 0 113.393-58.729 160.941-147.5 232.998C450.734 1302.889 282 1439.66 282 1863.529V1920h1355.294v-56.47c0-423.869-168.734-560.64-304.263-670.532-88.772-72.057-147.502-119.605-147.502-232.998 0-113.393 58.73-160.941 147.502-232.998M933.84 1274.665l-169.638 137.676c-74.315 60.197-138.353 112.037-172.687 225.317h736.264c-34.334-113.28-98.372-165.12-172.687-225.317l-169.638-137.676c-15.021-12.197-36.593-12.197-51.614 0', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconHourGlassLine;
}(_react.Component);

exports.default = IconHourGlassLine;