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

var IconAdminSolid = function (_Component) {
  _inherits(IconAdminSolid, _Component);

  function IconAdminSolid() {
    _classCallCheck(this, IconAdminSolid);

    return _possibleConstructorReturn(this, (IconAdminSolid.__proto__ || Object.getPrototypeOf(IconAdminSolid)).apply(this, arguments));
  }

  _createClass(IconAdminSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAdminSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1255.385 0c181.539 0 337.691 65.384 468.461 196.154C1854.616 326.924 1920 483.076 1920 664.615c0 181.54-65.384 337.692-196.154 468.462-130.77 130.77-286.922 196.154-468.461 196.154-98.462 0-196.923-24.615-295.385-73.846v221.538H738.462v221.539H516.923V1920H0v-544.615l18.462-27.693L600 770.77c-6.154-49.23-9.23-84.615-9.23-106.154 0-181.539 65.383-337.691 196.153-468.461C917.693 65.384 1073.845 0 1255.385 0zm0 147.692c-141.54 0-263.077 50.769-364.616 152.308C789.23 401.539 738.462 523.076 738.462 664.615c0 24.616 4.615 64.615 13.846 120l4.615 36.923-27.692 27.693-581.539 586.154v336.923h221.539v-221.539h221.538v-221.538h221.539v-221.539h175.384l18.462 9.231c76.923 43.077 160 64.615 249.23 64.615 141.54 0 263.077-50.768 364.616-152.307 101.539-101.54 152.308-223.076 152.308-364.616 0-141.539-50.769-263.076-152.308-364.615-101.539-101.539-223.076-152.308-364.615-152.308zm147.692 221.539c40 0 74.615 14.615 103.846 43.846 29.231 29.23 43.846 63.846 43.846 103.846 0 40-14.615 74.615-43.846 103.846-29.23 29.231-63.846 43.846-103.846 43.846-40 0-74.615-14.615-103.846-43.846-29.231-29.23-43.846-63.846-43.846-103.846 0-40 14.615-74.615 43.846-103.846 29.23-29.231 63.846-43.846 103.846-43.846z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconAdminSolid;
}(_react.Component);

exports.default = IconAdminSolid;