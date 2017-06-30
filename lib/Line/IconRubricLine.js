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

var IconRubricLine = function (_Component) {
  _inherits(IconRubricLine, _Component);

  function IconRubricLine() {
    _classCallCheck(this, IconRubricLine);

    return _possibleConstructorReturn(this, (IconRubricLine.__proto__ || Object.getPrototypeOf(IconRubricLine)).apply(this, arguments));
  }

  _createClass(IconRubricLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconRubricLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1344.962 112.94C1321.584 47.324 1259.466 0 1185.942 0H734.177c-73.525 0-135.643 47.323-159.022 112.94H113V1920h1694.118V112.94h-462.156zm349.214 1694.119H225.942V225.882h338.823v225.884h790.589V225.882h338.822v1581.177zM677.706 225.882v-56.47c0-31.171 25.299-56.471 56.47-56.471h451.766c31.172 0 56.47 25.3 56.47 56.472v169.412H677.706V225.882zm-225.86 790.589h338.823V677.647H451.846v338.824zm112.941-112.942h112.941V790.588H564.787v112.941zm338.824-112.941h564.707V677.647H903.611v112.941zm0 564.706h564.707v-112.941H903.611v112.941zm0-338.823h338.823V903.529H903.611v112.942zm0 564.706h338.823v-112.941H903.611v112.941zm-338.824-112.942h112.941v-112.941H564.787v112.941zm-112.941 112.942h338.823v-338.824H451.846v338.824z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconRubricLine;
}(_react.Component);

exports.default = IconRubricLine;