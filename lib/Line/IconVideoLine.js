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

var IconVideoLine = function (_Component) {
  _inherits(IconVideoLine, _Component);

  function IconVideoLine() {
    _classCallCheck(this, IconVideoLine);

    return _possibleConstructorReturn(this, (IconVideoLine.__proto__ || Object.getPrototypeOf(IconVideoLine)).apply(this, arguments));
  }

  _createClass(IconVideoLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconVideoLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1813.333 1557.195c-557.76 126.826-1148.48 126.826-1706.666 0V468.448c557.76-126.827 1148.48-126.933 1706.666 0v1088.747zM1879.04 374.26c-600.32-143.573-1238.4-143.466-1838.08 0L0 384.075v1257.493l40.96 9.813c300.053 71.787 609.28 108.054 919.04 108.054 309.867 0 619.2-36.267 919.04-108.054l40.96-9.813V384.075l-40.96-9.814zM853.333 786.987l376.32 225.813-376.32 225.813V786.987zm-106.666 640l690.346-414.187-690.346-414.187v828.374z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconVideoLine;
}(_react.Component);

exports.default = IconVideoLine;