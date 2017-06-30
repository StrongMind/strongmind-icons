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

var IconMasqueradeSolid = function (_Component) {
  _inherits(IconMasqueradeSolid, _Component);

  function IconMasqueradeSolid() {
    _classCallCheck(this, IconMasqueradeSolid);

    return _possibleConstructorReturn(this, (IconMasqueradeSolid.__proto__ || Object.getPrototypeOf(IconMasqueradeSolid)).apply(this, arguments));
  }

  _createClass(IconMasqueradeSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMasqueradeSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1468.235 1125.99c187.483-15.812 350.118-116.33 451.765-262.024v830.118c0 124.235-101.647 225.882-225.882 225.882-124.236 0-225.883-101.647-225.883-225.882V1125.99zM1411.765 0H1920v508.235c0 280.207-228.028 508.236-508.235 508.236h-903.53C228.028 1016.47 0 788.442 0 508.235V0h508.235C706.108 0 876.085 114.861 960 280.207 1043.915 114.861 1213.892 0 1411.765 0zm282.353 395.294v-56.47h-282.353c-155.746 0-282.353 126.72-282.353 282.352v56.471h282.353c155.746 0 282.353-126.72 282.353-282.353zm-903.53 282.353v-56.47c0-155.633-126.607-282.353-282.353-282.353H225.882v56.47c0 155.633 126.607 282.353 282.353 282.353h282.353z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMasqueradeSolid;
}(_react.Component);

exports.default = IconMasqueradeSolid;