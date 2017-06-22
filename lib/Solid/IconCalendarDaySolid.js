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

var IconCalendarDaySolid = function (_Component) {
  _inherits(IconCalendarDaySolid, _Component);

  function IconCalendarDaySolid() {
    _classCallCheck(this, IconCalendarDaySolid);

    return _possibleConstructorReturn(this, (IconCalendarDaySolid.__proto__ || Object.getPrototypeOf(IconCalendarDaySolid)).apply(this, arguments));
  }

  _createClass(IconCalendarDaySolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCalendarDaySolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1694.176 451.765H225.942V282.353c0-31.624 24.846-56.471 56.47-56.471h169.411v56.471c0 31.623 24.848 56.471 56.471 56.471 31.624 0 56.471-24.848 56.471-56.471v-56.471h790.589v56.471c0 31.623 24.846 56.471 56.47 56.471 31.623 0 56.47-24.848 56.47-56.471v-56.471h169.412c31.623 0 56.47 24.847 56.47 56.471v169.412zm-477.74 849.317c0 134.4-105.035 231.529-258.636 231.529-128.753 0-221.364-53.082-283.482-128.752l90.353-83.577c53.082 62.118 112.941 96 195.388 96 72.282 0 127.624-42.917 127.624-109.554v-2.257c0-72.284-66.636-112.942-170.542-112.942h-59.859l-21.459-80.188L1035.73 902.4H716.106V790.588h489.035v96L998.459 1094.4c111.812 13.553 217.977 70.024 217.977 204.423v2.259zm421.27-1188.141h-169.412v-56.47c0-31.624-24.847-56.471-56.47-56.471-31.624 0-56.47 24.847-56.47 56.471v56.47H564.765v-56.47C564.765 24.847 539.918 0 508.294 0c-31.623 0-56.471 24.847-56.471 56.471v56.47H282.412C188.671 112.941 113 188.612 113 282.353V1920h1694.118V282.353c0-93.741-75.671-169.412-169.412-169.412z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCalendarDaySolid;
}(_react.Component);

exports.default = IconCalendarDaySolid;