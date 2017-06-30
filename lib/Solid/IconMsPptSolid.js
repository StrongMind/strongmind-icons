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

var IconMsPptSolid = function (_Component) {
  _inherits(IconMsPptSolid, _Component);

  function IconMsPptSolid() {
    _classCallCheck(this, IconMsPptSolid);

    return _possibleConstructorReturn(this, (IconMsPptSolid.__proto__ || Object.getPrototypeOf(IconMsPptSolid)).apply(this, arguments));
  }

  _createClass(IconMsPptSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMsPptSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M338.824 846.647V733.706h338.823v112.941H338.824zm0-225.882V507.824h677.647v112.94H338.824zm1016.47 112.94V169H0v1581.176h1920V733.706h-564.706zm-169.412 903.53c-217.976 0-395.294-177.317-395.294-395.294 0-217.976 177.318-395.294 395.294-395.294 217.977 0 395.294 177.318 395.294 395.294 0 217.977-177.317 395.294-395.294 395.294zm-56.47-671.91v308.669l211.2 203.633c-44.5 29.365-97.581 46.645-154.73 46.645-155.746 0-282.353-126.608-282.353-282.353 0-136.32 97.13-250.391 225.883-276.593zm338.823-779.452s421.158 395.407 434.937 434.937h-434.937V185.873zm-225.882 779.453c128.753 26.202 225.882 140.273 225.882 276.593 0 57.713-17.506 111.473-47.435 156.197l-178.447-172.122V965.326z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMsPptSolid;
}(_react.Component);

exports.default = IconMsPptSolid;