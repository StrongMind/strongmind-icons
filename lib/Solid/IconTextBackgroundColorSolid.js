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

var IconTextBackgroundColorSolid = function (_Component) {
  _inherits(IconTextBackgroundColorSolid, _Component);

  function IconTextBackgroundColorSolid() {
    _classCallCheck(this, IconTextBackgroundColorSolid);

    return _possibleConstructorReturn(this, (IconTextBackgroundColorSolid.__proto__ || Object.getPrototypeOf(IconTextBackgroundColorSolid)).apply(this, arguments));
  }

  _createClass(IconTextBackgroundColorSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTextBackgroundColorSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M928.806 512l-185.984 512h434.304L991.142 512h-62.336zm419.072 981.875l-124.16-341.888h-527.36L572.07 1493.875 451.878 1450.1 839.206 383.987h241.664l387.2 1066.112-120.192 43.776zM1728.038-.013h-1536c-105.856 0-192 86.144-192 192v1536c0 105.856 86.144 192 192 192h1536c105.856 0 192-86.144 192-192v-1536c0-105.856-86.144-192-192-192z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTextBackgroundColorSolid;
}(_react.Component);

exports.default = IconTextBackgroundColorSolid;