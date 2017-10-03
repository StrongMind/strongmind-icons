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

var IconCalendarClockLine = function (_Component) {
  _inherits(IconCalendarClockLine, _Component);

  function IconCalendarClockLine() {
    _classCallCheck(this, IconCalendarClockLine);

    return _possibleConstructorReturn(this, (IconCalendarClockLine.__proto__ || Object.getPrototypeOf(IconCalendarClockLine)).apply(this, arguments));
  }

  _createClass(IconCalendarClockLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCalendarClockLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1' },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('path', { d: 'M1435.667 1226.667H1329V1440c0 14.187 5.653 27.733 15.573 37.76l123.414 123.306 75.413-75.413-107.733-107.733v-191.253z' }),
              _react2.default.createElement('path', { d: 'M1381.833 1808.999c-203.201 0-368.5-165.298-368.5-368.5 0-203.201 165.299-368.499 368.5-368.499s368.5 165.298 368.5 368.5c0 203.201-165.299 368.499-368.5 368.499m.5-848.999c-264.64 0-480 215.36-480 480s215.36 480 480 480 480-215.36 480-480-215.36-480-480-480' })
            ),
            _react2.default.createElement('path', { d: 'M202 1527h594v145H202v1H57V72.727h290.91V0h145.454v72.727h727.272V0h145.455v72.727H1657V876h-145V508.73H202V1527zm.455-1308.818v145.454h1309.09V218.182h-145.454v72.727h-145.455v-72.727H493.364v72.727H347.909v-72.727H202.455z' })
          )
        )
      );
    }
  }]);

  return IconCalendarClockLine;
}(_react.Component);

exports.default = IconCalendarClockLine;