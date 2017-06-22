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

var IconStandardsLine = function (_Component) {
  _inherits(IconStandardsLine, _Component);

  function IconStandardsLine() {
    _classCallCheck(this, IconStandardsLine);

    return _possibleConstructorReturn(this, (IconStandardsLine.__proto__ || Object.getPrototypeOf(IconStandardsLine)).apply(this, arguments));
  }

  _createClass(IconStandardsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconStandardsLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1694.176 1077.91c0 323.238-470.174 580.066-670.87 689.732-25.864 14.118-47.435 25.864-63.247 35.238-15.812-9.374-37.384-21.12-63.247-35.238-200.697-109.666-670.87-366.494-670.87-689.731V437.534L960.058 122.88l734.117 314.654v640.377zM960.06 0L113 362.993v714.918c0 390.211 511.398 669.628 729.713 788.894 27.445 15.02 49.694 27.106 64.941 36.254v.113c16.15 9.713 34.221 14.57 52.405 14.57a100.79 100.79 0 0 0 52.405-14.683c15.247-9.148 37.496-21.233 64.94-36.254 218.316-119.266 729.714-398.683 729.714-788.894V362.993L960.058 0zm-355.37 868.563l-79.849 79.85 322.221 322.333 604.687-604.687-79.85-79.85-524.837 524.726L604.69 868.563z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconStandardsLine;
}(_react.Component);

exports.default = IconStandardsLine;