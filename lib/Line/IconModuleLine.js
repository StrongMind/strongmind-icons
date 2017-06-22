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

var IconModuleLine = function (_Component) {
  _inherits(IconModuleLine, _Component);

  function IconModuleLine() {
    _classCallCheck(this, IconModuleLine);

    return _possibleConstructorReturn(this, (IconModuleLine.__proto__ || Object.getPrototypeOf(IconModuleLine)).apply(this, arguments));
  }

  _createClass(IconModuleLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconModuleLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1920 1081.47v564.706h-557.026l-317.703 185.111c-26.316 15.36-55.793 23.04-85.271 23.04s-58.955-7.68-85.27-23.04l-317.704-185.11H0V1081.47h225.882V694.647c0-60.085 32.302-116.216 84.142-146.372L677.647 334.14V65h564.706v269.139l367.623 214.136c51.953 30.269 84.142 86.287 84.142 146.372v386.824H1920zm-931.652 652.236l366.946-213.685v-438.55h225.882V694.647c0-19.99-10.842-38.739-28.122-48.79l-310.701-181.045v164.894H677.647V464.812L366.833 645.856c-17.28 10.052-28.01 28.8-28.01 48.791v386.824h225.883v438.55l366.946 213.685c17.393 10.278 39.303 10.278 56.696 0zM790.588 516.765h338.824V177.94H790.588v338.824zm677.647 1016.47h338.824v-338.823h-338.824v338.823zm-1355.294 0h338.824v-338.823H112.94v338.823z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconModuleLine;
}(_react.Component);

exports.default = IconModuleLine;