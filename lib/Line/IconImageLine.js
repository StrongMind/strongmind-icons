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

var IconImageLine = function (_Component) {
  _inherits(IconImageLine, _Component);

  function IconImageLine() {
    _classCallCheck(this, IconImageLine);

    return _possibleConstructorReturn(this, (IconImageLine.__proto__ || Object.getPrototypeOf(IconImageLine)).apply(this, arguments));
  }

  _createClass(IconImageLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconImageLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M0 1807.118V113h1920v1694.118H0zm112.941-112.829H1807.06V225.941H112.94V1694.29zm1580.499-291.388l10.504 65.393H207.924l20.104-71.718c85.384-306.07 172.913-457.072 283.37-489.712 102.55-30.156 185.336 43.82 258.86 109.1 43.596 38.514 90.806 81.092 122.542 78.834 15.925-1.807 32.188-20.556 43.144-36.029 182.851-258.409 332.498-286.87 426.691-264.847 160.716 37.384 272.076 242.26 330.805 608.98zm-1335.755-47.548h1212.762c-50.485-265.186-134.4-428.386-233.336-451.426-83.012-19.313-196.066 60.762-308.895 220.01-35.237 49.807-76.348 77.816-122.315 83.124-81.092 9.6-146.033-49.694-210.41-106.503-54.211-48.113-110.682-97.017-152.018-85.384-34.447 10.165-102.325 69.12-185.788 340.179zm319.962-564.706c-124.574 0-225.882-101.308-225.882-225.882s101.308-225.883 225.882-225.883S903.53 440.191 903.53 564.765c0 124.574-101.308 225.882-225.882 225.882zm0-338.823c-62.343 0-112.941 50.71-112.941 112.94 0 62.231 50.598 112.942 112.941 112.942 62.344 0 112.941-50.71 112.941-112.941 0-62.23-50.597-112.941-112.94-112.941z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconImageLine;
}(_react.Component);

exports.default = IconImageLine;