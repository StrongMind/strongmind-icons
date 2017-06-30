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

var IconNotGradedLine = function (_Component) {
  _inherits(IconNotGradedLine, _Component);

  function IconNotGradedLine() {
    _classCallCheck(this, IconNotGradedLine);

    return _possibleConstructorReturn(this, (IconNotGradedLine.__proto__ || Object.getPrototypeOf(IconNotGradedLine)).apply(this, arguments));
  }

  _createClass(IconNotGradedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconNotGradedLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1386.667 1333h106.666v-320h-106.666v320zm0 213.333h106.666v-106.666h-106.666v106.666zM320 799.667V373h746.667v426.667H320zM426.667 693H960V479.667H426.667V693zM320 1119.667h533.333V1013H320v106.667zM320 1333h320v-106.667H320V1333zM0 52.99v1813.333h1066.667v-106.667h-960v-1600H1280v533.333h106.667v-640H0zM1440 1653c205.867 0 373.333-167.467 373.333-373.333 0-205.867-167.466-373.334-373.333-373.334-205.867 0-373.333 167.467-373.333 373.334 0 205.866 167.466 373.333 373.333 373.333zm0-853.333c264.64 0 480 215.36 480 480s-215.36 480-480 480-480-215.36-480-480 215.36-480 480-480z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconNotGradedLine;
}(_react.Component);

exports.default = IconNotGradedLine;