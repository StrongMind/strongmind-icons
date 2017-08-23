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

var IconMoveUpLine = function (_Component) {
  _inherits(IconMoveUpLine, _Component);

  function IconMoveUpLine() {
    _classCallCheck(this, IconMoveUpLine);

    return _possibleConstructorReturn(this, (IconMoveUpLine.__proto__ || Object.getPrototypeOf(IconMoveUpLine)).apply(this, arguments));
  }

  _createClass(IconMoveUpLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMoveUpLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M533.341 1653.659v-106.666H1920v106.666H533.341zm0-1279.993V267H1920v106.666H533.341zm0 853.329v-106.773H1920v106.773H533.341zM282.345 518.08l75.306-75.413 304.425 304.319-304.425 304.318-75.306-75.306 175.572-175.68h-351.25v853.33H0V693.653h457.917L282.345 518.08zm570.994 282.25V693.663h213.332V800.33H853.34zm426.665 0V693.663h213.332V800.33h-213.332zm426.664 0V693.663H1920V800.33h-213.332z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMoveUpLine;
}(_react.Component);

exports.default = IconMoveUpLine;