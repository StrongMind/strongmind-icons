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

var IconMoveDownSolid = function (_Component) {
  _inherits(IconMoveDownSolid, _Component);

  function IconMoveDownSolid() {
    _classCallCheck(this, IconMoveDownSolid);

    return _possibleConstructorReturn(this, (IconMoveDownSolid.__proto__ || Object.getPrototypeOf(IconMoveDownSolid)).apply(this, arguments));
  }

  _createClass(IconMoveDownSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMoveDownSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M853.013 480V266.56H1919.68V480H853.013zm0 853.333v-213.44H1919.68v213.44H853.013zm0 426.667v-213.333H1919.68V1760H853.013zm-.106-853.333V693.333h320v213.334h-320zm426.666 0V693.333h213.334v213.334h-213.334zm320 0V693.333h320.107v213.334h-320.107zM0 320h213.333v373.333h115.52v-209.92L746.24 800l-417.387 316.587v-209.92H0V320z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMoveDownSolid;
}(_react.Component);

exports.default = IconMoveDownSolid;