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

var IconToggleLeftSolid = function (_Component) {
  _inherits(IconToggleLeftSolid, _Component);

  function IconToggleLeftSolid() {
    _classCallCheck(this, IconToggleLeftSolid);

    return _possibleConstructorReturn(this, (IconToggleLeftSolid.__proto__ || Object.getPrototypeOf(IconToggleLeftSolid)).apply(this, arguments));
  }

  _createClass(IconToggleLeftSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconToggleLeftSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M903.53 1637.176c204.649 0 395.858-90.917 524.385-249.487l175.51 142.08c-171.557 211.878-426.69 333.29-699.896 333.29C405.346 1863.059 0 1457.713 0 959.529 0 461.346 405.346 56 903.53 56c273.204 0 528.338 121.412 699.896 333.29l-175.51 142.08c-128.528-158.57-319.737-249.488-524.387-249.488-373.722 0-677.647 303.925-677.647 677.647 0 373.723 303.925 677.647 677.647 677.647zM1920 846.588v225.883H950.287l202.504 202.503-159.7 159.699-475.143-475.144 475.144-475.143 159.699 159.699-202.504 202.503H1920z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconToggleLeftSolid;
}(_react.Component);

exports.default = IconToggleLeftSolid;