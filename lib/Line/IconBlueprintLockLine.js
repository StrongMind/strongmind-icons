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

var IconBlueprintLockLine = function (_Component) {
  _inherits(IconBlueprintLockLine, _Component);

  function IconBlueprintLockLine() {
    _classCallCheck(this, IconBlueprintLockLine);

    return _possibleConstructorReturn(this, (IconBlueprintLockLine.__proto__ || Object.getPrototypeOf(IconBlueprintLockLine)).apply(this, arguments));
  }

  _createClass(IconBlueprintLockLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconBlueprintLockLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M564.706 1581.176H338.824V338.823h1242.353v225.882h-112.942v-112.94H451.765v1016.47h112.941v112.941zM0 0h1242.353v225.882h-112.941V112.941H112.941v1016.471h112.941v112.94H0V0zm1636.515 1247h142.5v514.632c0 87.354-71.03 158.383-158.383 158.383h-641.25c-87.353 0-158.382-71.03-158.382-158.383V1247h142.5v-233.493C963.5 827.937 1114.492 677 1300.007 677c185.514 0 336.508 150.938 336.508 336.507V1247zM1676 1761.632v-411.617H924.015v411.617c0 30.552 24.871 55.368 55.367 55.368h641.25c30.552 0 55.368-24.816 55.368-55.368zm-609.485-748.125V1247H1533.5v-233.493c0-128.713-104.779-233.492-233.493-233.492-128.713 0-233.492 104.779-233.492 233.492z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconBlueprintLockLine;
}(_react.Component);

exports.default = IconBlueprintLockLine;