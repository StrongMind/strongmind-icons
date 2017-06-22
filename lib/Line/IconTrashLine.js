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

var IconTrashLine = function (_Component) {
  _inherits(IconTrashLine, _Component);

  function IconTrashLine() {
    _classCallCheck(this, IconTrashLine);

    return _possibleConstructorReturn(this, (IconTrashLine.__proto__ || Object.getPrototypeOf(IconTrashLine)).apply(this, arguments));
  }

  _createClass(IconTrashLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTrashLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1581.176 1750.588c0 31.06-25.411 56.47-56.47 56.47H395.294c-31.059 0-56.47-25.41-56.47-56.47V564.706H225.882v1185.882c0 93.403 76.01 169.412 169.412 169.412h1129.412c93.402 0 169.412-76.01 169.412-169.412V564.706h-112.942v1185.882zm-903.529-169.412h112.941V677.647h-112.94v903.53zm451.765 0h112.94V677.647h-112.94v903.53zm211.211-1242.352L1217.065 0H694.6L571.268 338.824H.01v112.94h1920v-112.94h-579.388zm-649.299 0l82.334-225.883h364.462l82.334 225.883h-529.13z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTrashLine;
}(_react.Component);

exports.default = IconTrashLine;