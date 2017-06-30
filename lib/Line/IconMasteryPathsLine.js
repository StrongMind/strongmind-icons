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

var IconMasteryPathsLine = function (_Component) {
  _inherits(IconMasteryPathsLine, _Component);

  function IconMasteryPathsLine() {
    _classCallCheck(this, IconMasteryPathsLine);

    return _possibleConstructorReturn(this, (IconMasteryPathsLine.__proto__ || Object.getPrototypeOf(IconMasteryPathsLine)).apply(this, arguments));
  }

  _createClass(IconMasteryPathsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMasteryPathsLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1892.1 374.226L1517.874 0 1143.76 374.226l78.884 78.884 239.442-239.442v478.996c0 191.464-116.596 261.534-251.715 342.65-91.604 54.895-190.349 114.923-250.377 216.904-59.916-101.98-158.66-162.009-250.265-216.904-135.118-81.116-251.827-151.186-251.827-342.65V213.668L697.456 453.11l78.884-78.884L402.114 0 28 374.226l78.884 78.884 239.442-239.442v478.996c0 254.728 162.678 352.245 306.165 438.27 135.118 81.116 251.715 151.186 251.715 342.762V1920h111.576v-446.304c0-191.576 116.709-261.646 251.827-342.762 143.487-86.025 306.053-183.542 306.053-438.27V213.668l239.554 239.442 78.884-78.884z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMasteryPathsLine;
}(_react.Component);

exports.default = IconMasteryPathsLine;