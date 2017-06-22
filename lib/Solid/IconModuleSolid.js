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

var IconModuleSolid = function (_Component) {
  _inherits(IconModuleSolid, _Component);

  function IconModuleSolid() {
    _classCallCheck(this, IconModuleSolid);

    return _possibleConstructorReturn(this, (IconModuleSolid.__proto__ || Object.getPrototypeOf(IconModuleSolid)).apply(this, arguments));
  }

  _createClass(IconModuleSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconModuleSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1581.176 1072.47h-225.882v438.551l-366.833 213.685c-17.506 10.278-39.416 10.278-56.922 0L564.706 1511.02v-438.55H338.824V685.647c0-20.103 10.842-38.739 28.009-48.79l310.814-181.045v164.894h564.706V455.812l310.814 181.044c17.167 10.052 28.01 28.688 28.01 48.791v386.824zm112.942 0V685.648c0-60.085-32.189-116.216-84.142-146.485L1242.353 325.14V56H677.647v269.139L310.024 539.162c-51.953 30.269-84.142 86.4-84.142 146.485v386.824H0v564.705h557.026l317.703 185.111c26.429 15.36 55.68 23.04 85.271 23.04 29.59 0 58.955-7.68 85.27-23.04l317.704-185.11H1920V1072.47h-225.882z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconModuleSolid;
}(_react.Component);

exports.default = IconModuleSolid;