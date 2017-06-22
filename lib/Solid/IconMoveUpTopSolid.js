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
        _react2.default.createElement('path', { d: 'M338.79 55.989l406.814 335.21L338.79 726.407V504.139H225.848v1355.294H-.034V278.144H338.79V55.989zm1016.504 448.128V278.234h225.882v225.883h-225.882zm-338.823 0V278.234h225.882v225.883H1016.47zm-338.824 903.53V1181.65H1920v225.995H677.647zm0 451.764v-225.883H1920v225.883H677.647zm1016.47-1355.294V278.12H1920v225.996h-225.882zM677.648 955.88V730H1920v225.882H677.647z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMoveUpTopSolid;
}(_react.Component);

exports.default = IconMoveUpTopSolid;