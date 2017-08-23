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

var IconMoveUpTopSolid = function (_Component) {
  _inherits(IconMoveUpTopSolid, _Component);

  function IconMoveUpTopSolid() {
    _classCallCheck(this, IconMoveUpTopSolid);

    return _possibleConstructorReturn(this, (IconMoveUpTopSolid.__proto__ || Object.getPrototypeOf(IconMoveUpTopSolid)).apply(this, arguments));
  }

  _createClass(IconMoveUpTopSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMoveUpTopSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M338.824 57.966v222.155H0v1581.29h225.882V506.117h112.942v222.268l406.814-335.21L338.824 57.967zm1355.407 448.15h225.882V280.122H1694.23v225.996zm-338.937 0h225.995V280.122h-225.995v225.996zm-338.823 0h225.882V280.122H1016.47v225.996zM677.76 957.882h1242.353V732H677.76v225.882zm0 451.765h1242.353v-225.995H677.76v225.995zm0 451.765h1242.353v-225.883H677.76v225.883z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMoveUpTopSolid;
}(_react.Component);

exports.default = IconMoveUpTopSolid;