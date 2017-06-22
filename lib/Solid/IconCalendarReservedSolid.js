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

var IconCalendarReservedSolid = function (_Component) {
  _inherits(IconCalendarReservedSolid, _Component);

  function IconCalendarReservedSolid() {
    _classCallCheck(this, IconCalendarReservedSolid);

    return _possibleConstructorReturn(this, (IconCalendarReservedSolid.__proto__ || Object.getPrototypeOf(IconCalendarReservedSolid)).apply(this, arguments));
  }

  _createClass(IconCalendarReservedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCalendarReservedSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1694.176 451.765H225.942V282.353c0-31.624 24.846-56.471 56.47-56.471h169.411v56.471c0 31.623 24.848 56.471 56.471 56.471 31.624 0 56.471-24.848 56.471-56.471v-56.471h790.589v56.471c0 31.623 24.846 56.471 56.47 56.471 31.623 0 56.47-24.848 56.47-56.471v-56.471h169.412c31.623 0 56.47 24.847 56.47 56.471v169.412zM847.118 1491.953l-378.353-379.482 79.058-79.059 299.295 298.164 525.176-524.047 79.06 79.059-604.236 605.365zm790.588-1379.012h-169.412v-56.47c0-31.624-24.847-56.471-56.47-56.471-31.624 0-56.47 24.847-56.47 56.471v56.47H564.765v-56.47C564.765 24.847 539.918 0 508.294 0c-31.623 0-56.471 24.847-56.471 56.471v56.47H282.412C188.671 112.941 113 188.612 113 282.353V1920h1694.118V282.353c0-93.741-75.671-169.412-169.412-169.412z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCalendarReservedSolid;
}(_react.Component);

exports.default = IconCalendarReservedSolid;