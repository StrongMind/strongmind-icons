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

var IconOutcomesSolid = function (_Component) {
  _inherits(IconOutcomesSolid, _Component);

  function IconOutcomesSolid() {
    _classCallCheck(this, IconOutcomesSolid);

    return _possibleConstructorReturn(this, (IconOutcomesSolid.__proto__ || Object.getPrototypeOf(IconOutcomesSolid)).apply(this, arguments));
  }

  _createClass(IconOutcomesSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconOutcomesSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M940.243 869.012c-66.897 0-121.263 54.468-121.263 121.263 0 66.897 54.366 121.264 121.263 121.264s121.263-54.367 121.263-121.264h161.684c0 156.026-126.922 282.948-282.947 282.948S657.296 1146.3 657.296 990.275c0-156.025 126.922-282.947 282.947-282.947v161.684zm124.244-518.733l186.341 186.34 426.24-426.34 142.99 142.99-426.341 426.24L1580.26 866.05h-515.773V350.28zm-710.33 640.017c0-323.167 262.94-586.106 586.106-586.106v161.685c-234.038 0-424.42 190.383-424.42 424.42 0 234.038 190.382 424.422 424.42 424.422 233.937 0 424.421-190.384 424.421-424.421h161.684c0 323.166-262.939 586.105-586.105 586.105s-586.105-262.94-586.105-586.105zm1351.974-451.281c80.741 137.128 123.385 293.254 123.385 451.3 0 490.308-398.956 889.264-889.263 889.264-490.408 0-889.263-398.956-889.263-889.263 0-490.409 398.855-889.263 889.263-889.263 158.147 0 314.173 42.644 451.301 123.284l-82.156 139.351C1197.23 297.6 1069.5 262.737 940.253 262.737c-401.179 0-727.579 326.4-727.579 727.579s326.4 727.579 727.58 727.579c401.178 0 727.578-326.4 727.578-727.58 0-129.246-34.964-256.976-101.053-369.246l139.352-82.054z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconOutcomesSolid;
}(_react.Component);

exports.default = IconOutcomesSolid;