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

var IconRssSolid = function (_Component) {
  _inherits(IconRssSolid, _Component);

  function IconRssSolid() {
    _classCallCheck(this, IconRssSolid);

    return _possibleConstructorReturn(this, (IconRssSolid.__proto__ || Object.getPrototypeOf(IconRssSolid)).apply(this, arguments));
  }

  _createClass(IconRssSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconRssSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M53.333 0C1082.56 0 1920 837.44 1920 1866.667V1920h-408.853v-53.333c0-803.84-653.974-1457.814-1457.814-1457.814H0V0h53.333zm0 628.96c682.454 0 1237.76 555.2 1237.76 1237.76v53.333H882.24v-53.333c0-457.067-371.84-828.907-828.907-828.907H0V628.96h53.333zm213.856 757.707c146.774 0 266.134 119.36 266.134 266.133 0 146.773-119.36 266.24-266.134 266.24C120.416 1919.04.95 1799.573.95 1652.8c0-146.773 119.467-266.133 266.24-266.133z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconRssSolid;
}(_react.Component);

exports.default = IconRssSolid;