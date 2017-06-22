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

var IconSisNotSyncedLine = function (_Component) {
  _inherits(IconSisNotSyncedLine, _Component);

  function IconSisNotSyncedLine() {
    _classCallCheck(this, IconSisNotSyncedLine);

    return _possibleConstructorReturn(this, (IconSisNotSyncedLine.__proto__ || Object.getPrototypeOf(IconSisNotSyncedLine)).apply(this, arguments));
  }

  _createClass(IconSisNotSyncedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconSisNotSyncedLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M717.572 1338.748l-79.85-79.85 242.372-242.484-242.372-242.372 79.85-79.85 242.372 242.373 242.484-242.372 79.85 79.85-242.372 242.371 242.372 242.485-79.85 79.85-242.484-242.373-242.372 242.372zM960 0c529.355 0 960 430.645 960 960s-430.645 960-960 960S0 1489.355 0 960c0-285.29 127.059-552.621 342.89-734.118H0v-112.94h564.706v564.705H451.765V284.273C239.548 444.085 112.94 692.894 112.94 960c0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059V0z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconSisNotSyncedLine;
}(_react.Component);

exports.default = IconSisNotSyncedLine;