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

var IconEditLine = function (_Component) {
  _inherits(IconEditLine, _Component);

  function IconEditLine() {
    _classCallCheck(this, IconEditLine);

    return _possibleConstructorReturn(this, (IconEditLine.__proto__ || Object.getPrototypeOf(IconEditLine)).apply(this, arguments));
  }

  _createClass(IconEditLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconEditLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1803.305 1337.072L1919.958 1920l-582.928-116.653-950.128-950.015 79.15-79.15 801.792 801.68 307.977-307.976-907.362-907.474L281.22 747.65 49.034 515.464c-65.379-65.603-65.379-172.069 0-237.448l228.94-228.94c65.267-65.379 171.733-65.49 237.448 0l232.186 232.187 1055.697 1055.809zm-411.196 363.056l385 77.023-77.023-385-45.116-45.116-307.977 307.977 45.117 45.116zM281.222 589.352l308.089-308.09-59.11-59.11-93.927-93.926c-10.972-10.971-25.301-16.345-39.63-16.345-14.33 0-28.548 5.374-39.52 16.345l-228.94 228.94c-21.718 21.718-21.718 57.318 0 79.149l153.038 153.037zm394.134 6.907l692.304 692.304-79.149 79.15-692.304-692.305 79.149-79.15z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconEditLine;
}(_react.Component);

exports.default = IconEditLine;