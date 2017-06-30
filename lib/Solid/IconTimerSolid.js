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

var IconTimerSolid = function (_Component) {
  _inherits(IconTimerSolid, _Component);

  function IconTimerSolid() {
    _classCallCheck(this, IconTimerSolid);

    return _possibleConstructorReturn(this, (IconTimerSolid.__proto__ || Object.getPrototypeOf(IconTimerSolid)).apply(this, arguments));
  }

  _createClass(IconTimerSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTimerSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M960 0c529.694 0 960 430.306 960 960s-430.306 960-960 960S0 1489.694 0 960c0-172.8 46.306-342.212 134.4-489.035l35.012-58.73 29.364 25.977L633.6 873.035A311.165 311.165 0 0 0 621.176 960c0 186.353 152.471 338.824 338.824 338.824S1298.824 1146.353 1298.824 960 1146.353 621.176 960 621.176c-19.2 0-38.4 2.26-56.47 5.648V0H960zM734.118 960c0-41.788 12.197-80.414 31.962-114.07L242.372 322.333l79.962-79.962L845.93 766.08c33.657-19.765 72.283-31.962 114.071-31.962 124.574 0 225.882 101.308 225.882 225.882S1084.574 1185.882 960 1185.882 734.118 1084.574 734.118 960z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconTimerSolid;
}(_react.Component);

exports.default = IconTimerSolid;