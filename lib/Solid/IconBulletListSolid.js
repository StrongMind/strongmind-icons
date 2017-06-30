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

var IconBulletListSolid = function (_Component) {
  _inherits(IconBulletListSolid, _Component);

  function IconBulletListSolid() {
    _classCallCheck(this, IconBulletListSolid);

    return _possibleConstructorReturn(this, (IconBulletListSolid.__proto__ || Object.getPrototypeOf(IconBulletListSolid)).apply(this, arguments));
  }

  _createClass(IconBulletListSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconBulletListSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M225.882 169c124.574 0 225.883 101.308 225.883 225.882S350.456 620.765 225.882 620.765C101.308 620.765 0 519.456 0 394.882 0 270.308 101.308 169 225.882 169zm451.765 338.824V281.94H1920v225.883H677.647zM225.882 733.706c124.574 0 225.883 101.308 225.883 225.882s-101.309 225.883-225.883 225.883C101.308 1185.47 0 1084.162 0 959.588c0-124.574 101.308-225.882 225.882-225.882zm451.765 338.823V846.647H1920v225.882H677.647zm-451.765 225.883c124.574 0 225.883 101.308 225.883 225.882s-101.309 225.882-225.883 225.882C101.308 1750.176 0 1648.868 0 1524.294s101.308-225.882 225.882-225.882zm451.765 338.823v-225.882H1920v225.882H677.647z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconBulletListSolid;
}(_react.Component);

exports.default = IconBulletListSolid;