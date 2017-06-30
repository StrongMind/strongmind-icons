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

var IconTableSolid = function (_Component) {
  _inherits(IconTableSolid, _Component);

  function IconTableSolid() {
    _classCallCheck(this, IconTableSolid);

    return _possibleConstructorReturn(this, (IconTableSolid.__proto__ || Object.getPrototypeOf(IconTableSolid)).apply(this, arguments));
  }

  _createClass(IconTableSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTableSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1355.294 1694.118v-338.824h339.05v338.824h-339.05zM790.588 564.706V225.882h338.824v338.824H790.588zm0 564.706V790.588h338.824v338.824H790.588zm0 564.706v-338.824h338.824v338.824H790.588zM225.882 564.706V225.882h338.824v338.824H225.882zm0 564.706V790.588h338.824v338.824H225.882zm0 564.706v-338.824h338.824v338.824H225.882zm1129.412-564.706V790.588h338.937v338.824h-338.937zm0-564.706V225.882h338.824v338.824h-338.824zM1694.118 0H225.882C101.308 0 0 101.308 0 225.882v1468.236C0 1818.692 101.308 1920 225.882 1920h1468.236c124.574 0 225.882-101.308 225.882-225.882V225.882C1920 101.308 1818.692 0 1694.118 0z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconTableSolid;
}(_react.Component);

exports.default = IconTableSolid;