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

var IconFolderLockedLine = function (_Component) {
  _inherits(IconFolderLockedLine, _Component);

  function IconFolderLockedLine() {
    _classCallCheck(this, IconFolderLockedLine);

    return _possibleConstructorReturn(this, (IconFolderLockedLine.__proto__ || Object.getPrototypeOf(IconFolderLockedLine)).apply(this, arguments));
  }

  _createClass(IconFolderLockedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconFolderLockedLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M990.223 394.824h929.732v564.705h-112.941V507.765H225.837V394.824h628.63L703.918 168.94H112.896v1411.765c0 31.172 25.412 56.47 56.47 56.47h957.742v112.942H169.367c-93.403 0-169.412-76.01-169.412-169.412V56H764.34l225.882 338.824zm816.836 1298.823c0 31.172-25.412 56.47-56.47 56.47h-338.824c-31.06 0-56.47-25.298-56.47-56.47v-282.353h451.764v282.353zm-338.824-508.235c0-62.23 50.598-112.941 112.941-112.941 62.344 0 112.942 50.71 112.942 112.94v112.942h-225.883v-112.941zm338.824 0c0-124.574-101.308-225.883-225.883-225.883-124.574 0-225.882 101.309-225.882 225.883v112.94h-112.941v395.295c0 93.402 76.01 169.412 169.412 169.412h338.823c93.403 0 169.412-76.01 169.412-169.412v-395.294h-112.941v-112.941z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconFolderLockedLine;
}(_react.Component);

exports.default = IconFolderLockedLine;