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

var IconMsExcelLine = function (_Component) {
  _inherits(IconMsExcelLine, _Component);

  function IconMsExcelLine() {
    _classCallCheck(this, IconMsExcelLine);

    return _possibleConstructorReturn(this, (IconMsExcelLine.__proto__ || Object.getPrototypeOf(IconMsExcelLine)).apply(this, arguments));
  }

  _createClass(IconMsExcelLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMsExcelLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M790.588 959.588h225.883V733.706H790.588v225.882zm338.824 338.824h225.882v-225.883h-225.882v225.883zm-338.824 0h225.883v-225.883H790.588v225.883zm-338.823 0h225.882v-225.883H451.765v225.883zm0-338.824h225.882V733.706H451.765v225.882zM112.94 1637.235V281.941h1242.353v451.765h451.765v903.53H112.94zM1468.235 305.32l315.445 315.445h-315.445V305.32zm402.184 242.485L1541.195 218.58c-31.51-31.51-75.219-49.581-119.717-49.581H0v1581.176h1920V667.522c0-45.176-17.619-87.755-49.581-119.717z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMsExcelLine;
}(_react.Component);

exports.default = IconMsExcelLine;