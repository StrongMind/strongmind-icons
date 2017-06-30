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

var IconAddressBookSolid = function (_Component) {
  _inherits(IconAddressBookSolid, _Component);

  function IconAddressBookSolid() {
    _classCallCheck(this, IconAddressBookSolid);

    return _possibleConstructorReturn(this, (IconAddressBookSolid.__proto__ || Object.getPrototypeOf(IconAddressBookSolid)).apply(this, arguments));
  }

  _createClass(IconAddressBookSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAddressBookSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M112.941 0H1920v1920H112.941v-338.824h-56.47c-31.172 0-56.471-25.298-56.471-56.47 0-31.285 25.299-56.47 56.47-56.47h56.471V1016.47h-56.47C25.299 1016.47 0 991.17 0 960c0-31.285 25.299-56.47 56.47-56.47h56.471V451.764h-56.47c-31.172 0-56.471-25.3-56.471-56.47 0-31.286 25.299-56.471 56.47-56.471h56.471V0zm1355.294 1330.447v-155.859c0-90.466-54.211-171.67-137.788-207.924-6.776-3.276-13.553-5.648-20.33-7.793-58.729 101.534-168.282 170.54-293.646 170.54-125.365 0-234.918-69.006-293.647-169.411-7.906 2.146-14.683 4.518-22.589 7.906-82.447 36.028-135.53 117.459-135.53 207.812v154.73l25.977 15.81c110.683 70.024 237.177 111.813 364.8 121.977 20.33 1.017 39.53 2.146 58.73 2.146 197.647 0 350.117-75.67 426.917-124.122l27.106-15.812zm-677.647-652.8v112.941c0 124.461 101.308 225.883 225.883 225.883 124.574 0 225.882-101.422 225.882-225.883v-112.94c0-124.575-101.308-225.883-225.882-225.883-124.575 0-225.883 101.308-225.883 225.882z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconAddressBookSolid;
}(_react.Component);

exports.default = IconAddressBookSolid;