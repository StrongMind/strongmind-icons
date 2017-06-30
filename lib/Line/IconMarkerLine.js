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

var IconMarkerLine = function (_Component) {
  _inherits(IconMarkerLine, _Component);

  function IconMarkerLine() {
    _classCallCheck(this, IconMarkerLine);

    return _possibleConstructorReturn(this, (IconMarkerLine.__proto__ || Object.getPrototypeOf(IconMarkerLine)).apply(this, arguments));
  }

  _createClass(IconMarkerLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMarkerLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1290 1083.396c-114.12 113.16-253.68 269.88-332.04 466.8-76.92-199.08-215.16-354.84-327.96-466.92-141.36-140.04-210-279.48-210-426.48 0-295.92 240.84-536.76 543.12-536.76 296.04 0 536.88 240.84 536.88 536.76 0 147-68.64 286.44-210 426.6M956.88.036C594.72.036 300 294.636 300 656.796c0 180.6 80.28 348 245.4 511.68 239.76 237.84 351.48 457.56 351.48 691.56v60h120v-60c0-232.92 110.4-446.16 357.72-691.44 165.12-163.8 245.4-331.2 245.4-511.8C1620 294.636 1325.28.036 956.88.036', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMarkerLine;
}(_react.Component);

exports.default = IconMarkerLine;