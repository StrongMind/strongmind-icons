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

var IconAnnouncementSolid = function (_Component) {
  _inherits(IconAnnouncementSolid, _Component);

  function IconAnnouncementSolid() {
    _classCallCheck(this, IconAnnouncementSolid);

    return _possibleConstructorReturn(this, (IconAnnouncementSolid.__proto__ || Object.getPrototypeOf(IconAnnouncementSolid)).apply(this, arguments));
  }

  _createClass(IconAnnouncementSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAnnouncementSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1920 847.013c0 136.32-97.13 250.504-225.882 276.706v513.883c0 26.202-17.958 49.016-43.483 55.002a57.279 57.279 0 0 1-12.988 1.468c-21.12 0-40.772-11.746-50.485-31.172C1379.238 1247.164 964.18 1242.307 960 1242.307H395.294c-155.746 0-282.353-126.607-282.353-282.352v-56.471h-56.47C25.299 903.484 0 878.298 0 847.014c0-31.172 25.299-56.471 56.47-56.471h56.471v-56.47c0-155.634 126.607-282.354 282.353-282.354h564.593c16.941-.113 420.48-7.002 627.275-420.48 11.633-23.492 37.61-35.576 63.473-29.816 25.525 6.099 43.483 28.8 43.483 55.002V570.42C1822.87 596.623 1920 710.693 1920 847.013zm-1468.235 508.27H958.87c3.388 0 20.329 0 46.305 4.517l-3.388 55.341c-1.13 29.365-25.976 53.083-55.34 53.083-65.507 0-110.683 19.2-141.177 57.6-68.895 88.094-45.177 263.153-30.495 324.14 4.518 16.942 0 35.013-10.164 48.566-11.294 13.553-27.106 21.458-44.047 21.458h-212.33c-31.623 0-56.47-24.847-56.47-56.47v-508.235z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAnnouncementSolid;
}(_react.Component);

exports.default = IconAnnouncementSolid;