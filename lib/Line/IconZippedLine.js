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

var IconZippedLine = function (_Component) {
  _inherits(IconZippedLine, _Component);

  function IconZippedLine() {
    _classCallCheck(this, IconZippedLine);

    return _possibleConstructorReturn(this, (IconZippedLine.__proto__ || Object.getPrototypeOf(IconZippedLine)).apply(this, arguments));
  }

  _createClass(IconZippedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconZippedLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M846.873 1807.059v-338.824h112.715v-112.94H846.873v-112.942h112.715v-112.941H846.873V1016.47h112.715V903.529H846.873V790.59h112.715V677.646H846.873V441.261c65.506-23.379 112.715-85.496 112.715-158.908V112.94h225.883v451.765h451.764v1242.353H846.873zm-564.932 0V112.94h338.824v169.412c0 73.638 47.435 135.755 113.167 159.134v123.219H620.765v112.941h113.167v112.941H620.765V903.53h113.167v112.942H620.765v112.94h113.167v112.942H620.765v112.941h113.167v112.941H620.765v112.941h113.167v225.883h-451.99zM846.647 112.94v169.412c0 31.172-25.412 56.47-56.47 56.47-31.06 0-56.471-25.298-56.471-56.47V112.94h112.941zm451.765 23.379l315.444 315.445h-315.444V136.32zm402.183 242.485L1371.485 49.58C1339.86 18.071 1296.265 0 1251.655 0H169v1920h1581.176V498.522c0-45.176-17.618-87.755-49.58-119.717z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconZippedLine;
}(_react.Component);

exports.default = IconZippedLine;