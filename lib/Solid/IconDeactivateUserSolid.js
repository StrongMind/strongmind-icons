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

var IconDeactivateUserSolid = function (_Component) {
  _inherits(IconDeactivateUserSolid, _Component);

  function IconDeactivateUserSolid() {
    _classCallCheck(this, IconDeactivateUserSolid);

    return _possibleConstructorReturn(this, (IconDeactivateUserSolid.__proto__ || Object.getPrototypeOf(IconDeactivateUserSolid)).apply(this, arguments));
  }

  _createClass(IconDeactivateUserSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconDeactivateUserSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1112.648 948.632c162.056 34.168 279.768 188.726 279.768 367.598v205.757l-21.85 16.066c-117.391 86.223-356.78 225.786-675.108 225.786-16.923 0-33.953-.429-51.198-1.179-280.518-13.174-493.343-129.387-622.517-224.714L0 1521.879v-205.756c0-178.872 117.82-333.43 279.983-367.598 56.982-11.889 114.606-21.1 172.445-28.17-79.689-68.763-131.101-169.124-131.101-282.339V530.907c0-206.72 168.16-374.88 374.881-374.88 206.72 0 374.882 168.16 374.882 374.88v107.11c0 113.428-51.734 214.003-131.637 282.874 58.053 6.962 115.892 15.745 173.195 27.741zm-416.44-42.843c147.596 0 267.773-120.177 267.773-267.773V530.907c0-2.463-.643-4.82-.75-7.39-31.812 28.92-60.517 60.945-123.497 60.945-116.749 0-116.749-107.11-232.426-107.11-94.899 0-113.536 69.943-178.872 96.399v64.265c0 147.596 120.176 267.773 267.772 267.773zM1839.915 156L1920 236.085l-200.269 200.269L1920 636.623l-80.085 80.085-200.269-200.27-200.156 200.27-80.198-80.085 200.27-200.269-200.27-200.269L1439.49 156l200.156 200.269L1839.915 156z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconDeactivateUserSolid;
}(_react.Component);

exports.default = IconDeactivateUserSolid;