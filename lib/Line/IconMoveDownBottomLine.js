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

var IconMoveDownBottomLine = function (_Component) {
  _inherits(IconMoveDownBottomLine, _Component);

  function IconMoveDownBottomLine() {
    _classCallCheck(this, IconMoveDownBottomLine);

    return _possibleConstructorReturn(this, (IconMoveDownBottomLine.__proto__ || Object.getPrototypeOf(IconMoveDownBottomLine)).apply(this, arguments));
  }

  _createClass(IconMoveDownBottomLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMoveDownBottomLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M600 159.012v-120h1320v120H600zm0 960v-120.12h1320v120.12H600zm0-480.12v-120h1320v120H600zM0 39h120v1440h395.16l-197.52-197.64 84.72-84.84 342.48 342.36-342.48 342.48-84.72-84.84L515.16 1599H0V39zm960 1559.892v-120h240v120H960zm360 0v-120h240v120h-240zm360 0v-120h240v120h-240z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMoveDownBottomLine;
}(_react.Component);

exports.default = IconMoveDownBottomLine;