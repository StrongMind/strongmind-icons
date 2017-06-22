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

var IconAddressBookLine = function (_Component) {
  _inherits(IconAddressBookLine, _Component);

  function IconAddressBookLine() {
    _classCallCheck(this, IconAddressBookLine);

    return _possibleConstructorReturn(this, (IconAddressBookLine.__proto__ || Object.getPrototypeOf(IconAddressBookLine)).apply(this, arguments));
  }

  _createClass(IconAddressBookLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAddressBookLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M112.941 0H1920v1920H112.941v-338.824h-56.47c-31.172 0-56.471-25.298-56.471-56.47s25.299-56.47 56.47-56.47h56.471V1016.47h-56.47C25.299 1016.47 0 991.17 0 960c0-31.172 25.299-56.47 56.47-56.47h56.471V451.764h-56.47c-31.172 0-56.471-25.3-56.471-56.47 0-31.173 25.299-56.471 56.47-56.471h56.471V0zM1807.06 1807.059V112.94H225.882v225.883h56.47c31.173 0 56.472 25.298 56.472 56.47s-25.3 56.47-56.471 56.47h-56.47V903.53h56.47c31.172 0 56.47 25.3 56.47 56.471 0 31.172-25.298 56.47-56.47 56.47h-56.47v451.765h56.47c31.172 0 56.47 25.3 56.47 56.47 0 31.173-25.298 56.471-56.47 56.471h-56.47v225.883h1581.176zm-851.35-338.97c20.103 1.468 39.642 2.258 58.955 2.258 197.534 0 350.117-75.557 427.03-123.557l26.541-16.603v-155.52c0-90.353-53.986-172.01-137.45-208.15-43.143-18.636-87.303-32.64-132.366-43.257 27.332-37.383 43.934-83.012 43.934-132.706v-112.94c0-124.575-101.308-225.883-225.882-225.883-124.575 0-225.883 101.308-225.883 225.882v112.941c0 50.372 17.054 96.34 44.95 133.949-46.08 10.955-91.594 24.62-135.529 43.595-82.108 35.463-135.303 116.781-135.303 207.247v154.616l26.315 16.603c110.457 69.684 236.499 111.699 364.687 121.524zm-278.062-292.744c0-45.29 26.315-85.948 67.2-103.567 84.254-36.48 171.445-54.89 259.878-56.47 3.953.112 7.68 1.129 11.746 1.129 2.936 0 5.647-.79 8.583-.904 14.57.226 29.026-.339 43.595.79 74.542 5.648 147.727 23.831 217.412 53.874 42.014 18.183 69.233 59.18 69.233 104.47v92.047c-79.623 44.612-218.654 101.76-391.002 88.772-99.84-7.68-198.325-38.174-286.645-88.546v-91.595zM903.53 677.613c0-62.23 50.598-112.941 112.942-112.941 62.343 0 112.94 50.71 112.94 112.941v112.941c0 61.102-49.016 110.457-109.665 112.264-2.372 0-4.744-.113-7.115-.113-60.424-2.146-109.102-51.275-109.102-112.15V677.612z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAddressBookLine;
}(_react.Component);

exports.default = IconAddressBookLine;