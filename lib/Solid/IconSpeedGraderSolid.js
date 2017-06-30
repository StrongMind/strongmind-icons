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

var IconSpeedGraderSolid = function (_Component) {
  _inherits(IconSpeedGraderSolid, _Component);

  function IconSpeedGraderSolid() {
    _classCallCheck(this, IconSpeedGraderSolid);

    return _possibleConstructorReturn(this, (IconSpeedGraderSolid.__proto__ || Object.getPrototypeOf(IconSpeedGraderSolid)).apply(this, arguments));
  }

  _createClass(IconSpeedGraderSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconSpeedGraderSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1006.176 1171.384l724.587-724.587 150.826 150.827-875.413 875.413-519.893-519.893 150.826-150.827 369.067 369.067zM0 1286.221l211.733-26.133c16.32 131.947 68.587 258.027 151.254 364.8l-168.64 130.667C88.213 1618.488 21.013 1456.14 0 1286.22zm859.275-860.778c-132.054 16.213-258.134 68.586-364.8 151.253L363.7 408.056c137.067-106.133 299.307-173.44 469.44-194.347l26.134 211.734zm1046.4 621.301c4.8 40 7.146 79.147 7.146 119.787 0 40.533-2.346 79.68-7.146 119.466-21.014 170.134-88.214 332.48-194.347 469.547l-168.64-130.667c82.667-106.773 134.933-232.853 151.253-364.8 3.734-30.72 5.547-61.76 5.547-93.546 0-31.894-1.813-62.934-5.547-93.867-5.866-46.613-16.106-93.013-30.72-137.813l202.667-66.347c18.88 57.813 32.32 117.76 39.787 178.24zM0 1046.744c21.013-169.92 88.213-332.267 194.347-469.333l168.64 130.666c-82.667 106.774-134.934 232.854-151.254 364.8L0 1046.744zm1541.93-638.699l-130.773 168.64c-106.56-82.666-232.746-135.04-364.693-151.253l26.133-211.733c170.027 21.013 332.374 88.213 469.334 194.346z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconSpeedGraderSolid;
}(_react.Component);

exports.default = IconSpeedGraderSolid;