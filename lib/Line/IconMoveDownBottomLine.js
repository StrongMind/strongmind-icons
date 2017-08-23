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
          _react2.default.createElement('path', { d: 'M533.333 247.677V141.011H1920v106.666H533.333zm0 853.334V994.237H1920v106.774H533.333zm0-426.774V567.571H1920v106.666H533.333zM0 141h106.667v1280H457.92l-175.573-175.68 75.306-75.413 304.427 304.32-304.427 304.426-75.306-75.413 175.573-175.573H0V141zm853.333 1386.57v-106.666h213.334v106.667H853.333zm426.667 0v-106.666h213.333v106.667H1280zm426.667 0v-106.666H1920v106.667h-213.333z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMoveDownBottomLine;
}(_react.Component);

exports.default = IconMoveDownBottomLine;