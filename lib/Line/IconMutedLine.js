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

var IconMutedLine = function (_Component) {
  _inherits(IconMutedLine, _Component);

  function IconMutedLine() {
    _classCallCheck(this, IconMutedLine);

    return _possibleConstructorReturn(this, (IconMutedLine.__proto__ || Object.getPrototypeOf(IconMutedLine)).apply(this, arguments));
  }

  _createClass(IconMutedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMutedLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1505.845 72.093l-187.52 223.467c-44.16-32.64-93.333-61.013-147.2-83.947-67.84-27.626-138.773-43.84-211.093-49.386V53H853.365v109.333c-357.44 27.414-640 326.4-640 690.667v373.333c0 56.427-22.72 111.574-62.293 151.04-39.467 39.574-94.613 62.294-151.04 62.294v106.666h269.333L119.18 1725.427l81.706 68.48L1587.552 140.573l-81.707-68.48zM238.86 1439.667c51.733-58.027 81.173-134.827 81.173-213.334V853c0-323.413 263.253-586.667 586.667-586.667 77.12 0 152.426 14.827 223.253 43.734 43.733 18.666 83.84 41.813 119.573 67.626L358.86 1439.667h-120zm1574.474 0c29.44 0 53.334 23.893 53.334 53.333 0 29.44-23.894 53.333-53.334 53.333h-586.666c0 176.427-143.574 320-320 320-176.427 0-320-143.573-320-320V1493c0-29.44 23.893-53.333 53.333-53.333h935.04c-50.773-56.64-81.707-131.414-81.707-213.334V853c0-118.72-35.2-232.96-101.76-330.027l87.894-60.373C1558.293 577.587 1600 712.627 1600 853v373.333c0 117.654 95.68 213.334 213.333 213.334zm-906.666 320c117.653 0 213.333-95.68 213.333-213.334H693.333c0 117.654 95.68 213.334 213.334 213.334z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMutedLine;
}(_react.Component);

exports.default = IconMutedLine;