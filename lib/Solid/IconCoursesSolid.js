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

var IconCoursesSolid = function (_Component) {
  _inherits(IconCoursesSolid, _Component);

  function IconCoursesSolid() {
    _classCallCheck(this, IconCoursesSolid);

    return _possibleConstructorReturn(this, (IconCoursesSolid.__proto__ || Object.getPrototypeOf(IconCoursesSolid)).apply(this, arguments));
  }

  _createClass(IconCoursesSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCoursesSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M516.923 111c147.693 0 295.384 29.23 443.077 87.692C1107.693 140.23 1255.384 111 1403.077 111c70.77 0 145.384 7.692 223.846 23.077 78.462 15.385 139.23 32.308 182.308 50.77l64.615 23.076L1920 231v1504.615h-830.77c-30.769 49.231-73.845 73.847-129.23 73.847-55.385 0-98.461-24.616-129.23-73.847H0V231l46.154-23.077C200 143.307 356.922 111 516.924 111zm0 147.692c-113.847 0-236.922 24.615-369.23 73.846v1190.77c129.23-43.077 252.306-64.616 369.23-64.616s240 21.539 369.23 64.616V332.538c-138.461-49.23-261.537-73.846-369.23-73.846zm886.154 0c-107.693 0-230.769 24.615-369.23 73.846v1190.77c129.23-43.077 252.306-64.616 369.23-64.616s240 21.539 369.23 64.616V332.538c-132.308-49.23-255.383-73.846-369.23-73.846z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconCoursesSolid;
}(_react.Component);

exports.default = IconCoursesSolid;