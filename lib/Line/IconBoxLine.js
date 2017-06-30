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

var IconBoxLine = function (_Component) {
  _inherits(IconBoxLine, _Component);

  function IconBoxLine() {
    _classCallCheck(this, IconBoxLine);

    return _possibleConstructorReturn(this, (IconBoxLine.__proto__ || Object.getPrototypeOf(IconBoxLine)).apply(this, arguments));
  }

  _createClass(IconBoxLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconBoxLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1468.235 0v112.941H451.765V0H0v451.878h112.941v1016.47H0V1920h451.765v-112.941h1016.47V1920h451.878v-451.652h-112.941V451.878h112.94V0h-451.877zm113.054 338.824h225.883V112.94h-225.883v225.883zm-1468.348 0h225.883V112.94H112.94v225.883zm112.941 113.054h225.883V225.882h1016.47v225.996h225.996v1016.47h-225.996v225.77H451.765v-225.77H225.882V451.878zm1355.407 1355.18h225.883v-225.882h-225.883v225.883zm-1468.348 0h225.883v-225.882H112.94v225.883z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconBoxLine;
}(_react.Component);

exports.default = IconBoxLine;