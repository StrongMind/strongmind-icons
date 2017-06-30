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

var IconCloudDownloadSolid = function (_Component) {
  _inherits(IconCloudDownloadSolid, _Component);

  function IconCloudDownloadSolid() {
    _classCallCheck(this, IconCloudDownloadSolid);

    return _possibleConstructorReturn(this, (IconCloudDownloadSolid.__proto__ || Object.getPrototypeOf(IconCloudDownloadSolid)).apply(this, arguments));
  }

  _createClass(IconCloudDownloadSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCloudDownloadSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1468.235 411.824c249.149 0 451.765 202.616 451.765 451.764s-202.616 451.765-451.765 451.765h-451.764v315.445l185.9-186.014 79.963 79.849L960 1846.967l-322.334-322.334 79.962-79.85 185.901 186.015v-315.445H395.294C177.318 1315.353 0 1138.035 0 920.059c0-217.977 177.318-395.294 395.294-395.294 20.894 0 41.224 2.71 61.553 5.986C482.597 274.487 697.073 73 960 73c221.816 0 408.847 143.661 478.08 342.212 10.052-.678 19.99-3.388 30.155-3.388zM903.53 1202.412h112.942V920.059H903.529v282.353z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconCloudDownloadSolid;
}(_react.Component);

exports.default = IconCloudDownloadSolid;