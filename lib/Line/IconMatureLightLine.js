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

var IconMatureLightLine = function (_Component) {
  _inherits(IconMatureLightLine, _Component);

  function IconMatureLightLine() {
    _classCallCheck(this, IconMatureLightLine);

    return _possibleConstructorReturn(this, (IconMatureLightLine.__proto__ || Object.getPrototypeOf(IconMatureLightLine)).apply(this, arguments));
  }

  _createClass(IconMatureLightLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMatureLightLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M997.357 948.307c0-.113-.113-.226-.113-.339l.113.339zM136.901 505.213l312.852 1244.072 211.277-53.158L448.286 850.23 628.3 804.86l373.12 805.605 230.012-57.898-52.48-886.188 180.24-45.37 212.743 846.01 211.164-53.158-312.965-1244.073-461.83 116.248 26.297 676.943c1.468 35.213-21.218 65.911-55.189 74.376-33.858 8.351-68.281-7.9-83.517-39.84L598.843 389.077 136.901 505.213zm230.915 1380.973L0 423.276l660.127-166.02 254.39 521.194-22.685-579.544L1552.184 33 1920 1495.798l-430.115 108.121-186.222-740.71 45.935 776.036-411.155 103.494-326.846-705.497 186.221 740.823-430.002 108.121z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMatureLightLine;
}(_react.Component);

exports.default = IconMatureLightLine;