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

var IconCloudLockLine = function (_Component) {
  _inherits(IconCloudLockLine, _Component);

  function IconCloudLockLine() {
    _classCallCheck(this, IconCloudLockLine);

    return _possibleConstructorReturn(this, (IconCloudLockLine.__proto__ || Object.getPrototypeOf(IconCloudLockLine)).apply(this, arguments));
  }

  _createClass(IconCloudLockLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCloudLockLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1253.602 1075.047v112.941h112.941v395.294c0 93.403-75.896 169.412-169.412 169.412H858.308c-93.403 0-169.412-76.01-169.412-169.412v-395.294h112.941v-112.94c0-124.575 101.308-225.883 225.883-225.883 124.687 0 225.882 101.308 225.882 225.882zm0 508.235V1300.93H801.837v282.353c0 31.172 25.412 56.47 56.47 56.47h338.824c31.172 0 56.47-25.298 56.47-56.47zm-338.824-508.235v112.941h225.883v-112.94c0-62.232-50.598-112.942-112.941-112.942-62.231 0-112.942 50.71-112.942 112.941zm553.457-569.223c249.036 0 451.765 202.616 451.765 451.764s-202.73 451.765-451.765 451.765v-112.941c186.805 0 338.824-152.02 338.824-338.824s-152.019-338.823-338.824-338.823c-1.92 0-3.727.564-5.647.677 2.146 18.523 5.647 36.706 5.647 55.793 0 44.386-5.76 88.32-16.94 130.786l-109.215-29.139c8.81-32.866 13.214-67.087 13.214-101.647 0-217.976-177.318-395.294-395.294-395.294-212.442 0-385.13 168.96-393.713 379.257 38.287 18.522 74.428 41.9 105.6 72.395l-78.946 80.753c-53.195-52.066-123.332-80.64-197.647-80.64-155.633 0-282.353 126.72-282.353 282.353s126.72 282.353 282.353 282.353h169.412v112.94H395.294C177.318 1409.353 0 1232.036 0 1014.06c0-217.977 177.318-395.294 395.294-395.294 20.894 0 41.337 2.71 61.553 5.986C482.597 368.487 697.073 167 960 167c221.816 0 408.847 143.661 478.08 342.212 10.165-.678 19.99-3.388 30.155-3.388z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconCloudLockLine;
}(_react.Component);

exports.default = IconCloudLockLine;