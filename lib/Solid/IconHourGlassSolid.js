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

var IconHourGlassSolid = function (_Component) {
  _inherits(IconHourGlassSolid, _Component);

  function IconHourGlassSolid() {
    _classCallCheck(this, IconHourGlassSolid);

    return _possibleConstructorReturn(this, (IconHourGlassSolid.__proto__ || Object.getPrototypeOf(IconHourGlassSolid)).apply(this, arguments));
  }

  _createClass(IconHourGlassSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconHourGlassSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1190.725 1368.395c77.93 63.247 151.68 122.993 191.096 252.763l22.25 72.96H515.336l22.137-72.96c39.416-129.77 113.167-189.516 191.21-252.763l169.524-137.675c35.577-28.913 87.304-29.026 122.993.113l169.525 137.562zm142.306-641.393c135.529-109.891 304.263-246.663 304.263-670.531V0H282v56.47c0 423.869 168.734 560.64 304.264 670.532 88.884 72.057 147.5 119.605 147.5 232.998 0 113.393-58.616 160.941-147.5 232.885C450.734 1302.889 282 1439.66 282 1863.529V1920h1355.294v-56.47c0-423.869-168.734-560.64-304.263-670.645-88.772-71.944-147.502-119.492-147.502-232.885 0-113.393 58.73-160.941 147.502-232.998z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconHourGlassSolid;
}(_react.Component);

exports.default = IconHourGlassSolid;