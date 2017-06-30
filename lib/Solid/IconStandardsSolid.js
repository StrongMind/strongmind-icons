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

var IconStandardsSolid = function (_Component) {
  _inherits(IconStandardsSolid, _Component);

  function IconStandardsSolid() {
    _classCallCheck(this, IconStandardsSolid);

    return _possibleConstructorReturn(this, (IconStandardsSolid.__proto__ || Object.getPrototypeOf(IconStandardsSolid)).apply(this, arguments));
  }

  _createClass(IconStandardsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconStandardsSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M960.057 0L112 363.42v715.76c0 390.672 512 670.417 730.572 789.824 27.477 15.038 49.753 27.137 65.018 36.296v.113c16.17 9.725 34.262 14.587 52.467 14.587 18.091 0 36.296-4.862 52.466-14.7 15.265-9.159 37.54-21.258 65.018-36.296 218.572-119.407 730.572-399.152 730.572-789.824V363.42L960.057 0zM846.982 1272.198L524.27 949.484l80.056-79.943 242.657 242.77 525.343-525.456 80.057 79.944-605.4 605.399z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconStandardsSolid;
}(_react.Component);

exports.default = IconStandardsSolid;