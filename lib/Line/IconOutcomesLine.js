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

var IconOutcomesLine = function (_Component) {
  _inherits(IconOutcomesLine, _Component);

  function IconOutcomesLine() {
    _classCallCheck(this, IconOutcomesLine);

    return _possibleConstructorReturn(this, (IconOutcomesLine.__proto__ || Object.getPrototypeOf(IconOutcomesLine)).apply(this, arguments));
  }

  _createClass(IconOutcomesLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconOutcomesLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1242.353 597.73l581.06-581.263 79.962 79.85-581.23 581.33h259.031v112.941h-451.764V338.824h112.94v258.905zM960 1920C430.645 1920 0 1489.355 0 960S430.645 0 960 0c170.654 0 339.05 46.08 487.115 133.158l-57.26 97.355C1259.067 153.6 1110.437 112.94 960 112.94c-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-150.55-40.659-299.181-117.572-429.967l97.242-57.148C1873.92 620.95 1920 789.345 1920 960c0 529.355-430.645 960-960 960zm0-338.824c-342.438 0-621.176-278.625-621.176-621.176 0-342.55 278.738-621.176 621.176-621.176v112.94c-280.207 0-508.235 228.029-508.235 508.236S679.793 1468.235 960 1468.235 1468.235 1240.207 1468.235 960h112.941c0 342.55-278.738 621.176-621.176 621.176zm0-338.823c-155.746 0-282.353-126.72-282.353-282.353S804.254 677.647 960 677.647v112.941c-93.402 0-169.412 76.01-169.412 169.412s76.01 169.412 169.412 169.412 169.412-76.01 169.412-169.412h112.94c0 155.633-126.606 282.353-282.352 282.353z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconOutcomesLine;
}(_react.Component);

exports.default = IconOutcomesLine;