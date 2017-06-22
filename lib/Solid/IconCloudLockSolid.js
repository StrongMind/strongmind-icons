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

var IconCloudLockSolid = function (_Component) {
  _inherits(IconCloudLockSolid, _Component);

  function IconCloudLockSolid() {
    _classCallCheck(this, IconCloudLockSolid);

    return _possibleConstructorReturn(this, (IconCloudLockSolid.__proto__ || Object.getPrototypeOf(IconCloudLockSolid)).apply(this, arguments));
  }

  _createClass(IconCloudLockSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCloudLockSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1129.418 1185.458h-225.88v-112.94c0-62.23 50.71-112.94 112.941-112.94 62.229 0 112.939 50.71 112.939 112.94v112.94zm112.94 0v-112.94c0-124.573-101.307-225.88-225.879-225.88-124.574 0-225.881 101.307-225.881 225.88v112.94H677.657v395.29c0 93.402 76.009 169.412 169.41 169.412h338.821c93.402 0 169.411-76.01 169.411-169.411v-395.291h-112.941z' }),
          _react2.default.createElement('path', { d: 'M1468.24 507.818c-10.166 0-20.33 2.259-30.495 3.388-68.895-198.775-256.374-342.21-477.737-342.21-263.15 0-477.738 201.035-502.584 457.409-20.33-3.388-41.789-5.648-62.118-5.648-245.08 0-438.773 224.187-386.82 478.19C46.321 1283.83 217.99 1411.339 406.6 1411.339h158.117v-282.351c0-31.171 25.298-56.47 56.47-56.47h56.47c0-186.351 152.47-338.82 338.821-338.82 186.351 0 338.821 152.469 338.821 338.82h56.47c31.17 0 56.47 25.299 56.47 56.47v282.35c249.598 0 451.761-202.162 451.761-451.76 0-249.597-202.163-451.76-451.76-451.76' })
        )
      );
    }
  }]);

  return IconCloudLockSolid;
}(_react.Component);

exports.default = IconCloudLockSolid;