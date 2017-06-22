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

var IconMsExcelSolid = function (_Component) {
  _inherits(IconMsExcelSolid, _Component);

  function IconMsExcelSolid() {
    _classCallCheck(this, IconMsExcelSolid);

    return _possibleConstructorReturn(this, (IconMsExcelSolid.__proto__ || Object.getPrototypeOf(IconMsExcelSolid)).apply(this, arguments));
  }

  _createClass(IconMsExcelSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMsExcelSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1468.235 185.873c39.53 13.78 434.937 434.937 434.937 434.937h-434.937V185.873zm0 1225.48H338.824V620.765h790.588v338.823h338.823v451.765zM451.765 959.588h225.882V733.706H451.765v225.882zm0 338.824h225.882v-225.883H451.765v225.883zm338.823 0h225.883v-225.883H790.588v225.883zm0-338.824h225.883V733.706H790.588v225.882zm338.824 338.824h225.882v-225.883h-225.882v225.883zm225.882-564.706V169H0v1581.176h1920V733.706h-564.706z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMsExcelSolid;
}(_react.Component);

exports.default = IconMsExcelSolid;