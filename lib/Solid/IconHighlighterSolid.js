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

var IconHighlighterSolid = function (_Component) {
  _inherits(IconHighlighterSolid, _Component);

  function IconHighlighterSolid() {
    _classCallCheck(this, IconHighlighterSolid);

    return _possibleConstructorReturn(this, (IconHighlighterSolid.__proto__ || Object.getPrototypeOf(IconHighlighterSolid)).apply(this, arguments));
  }

  _createClass(IconHighlighterSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconHighlighterSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M110 1920h1699.932v-113.329H110V1920zm367.548-528.792l143.474 95.65-60.29 93.156H326.82l150.727-188.806zm-164.893 302.134h309.84l123.189-190.732 59.724-89.416c16.433-24.593 45.105-37.626 72.644-32.186 76.61 14.28 154.24-22.099 192.66-88.396l575.256-903.571c40.345-69.697 20.626-158.66-44.991-202.632l-242.75-161.834c-65.731-43.518-155.375-27.765-203.54 35.586L488.542 901.627c-47.712 62.784-51.338 148.688-8.953 213.512 15.3 23.685 14.62 54.964-1.7 79.67l-58.251 87.263-190.166 238.444c-25.839 32.299-30.712 75.477-12.806 112.649 17.906 37.058 54.738 60.177 95.99 60.177z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconHighlighterSolid;
}(_react.Component);

exports.default = IconHighlighterSolid;