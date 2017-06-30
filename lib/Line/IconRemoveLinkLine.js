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

var IconRemoveLinkLine = function (_Component) {
  _inherits(IconRemoveLinkLine, _Component);

  function IconRemoveLinkLine() {
    _classCallCheck(this, IconRemoveLinkLine);

    return _possibleConstructorReturn(this, (IconRemoveLinkLine.__proto__ || Object.getPrototypeOf(IconRemoveLinkLine)).apply(this, arguments));
  }

  _createClass(IconRemoveLinkLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconRemoveLinkLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M928.15 1290.856l89.293-91.468c34.924 34.029 54.369 79.57 54.625 128.31.255 49.253-18.806 95.69-53.986 130.87L611.02 1865.503c-34.284 34.412-79.954 53.218-128.694 53.218-48.74 0-94.538-18.806-128.823-53.218L54.154 1566.154c-70.872-70.871-70.872-186.517 0-257.388l407.063-407.064c35.052-35.18 78.035-59.87 130.741-54.113 48.74.256 94.282 19.7 128.439 54.625l-91.596 89.42c-9.978-10.49-19.7-16.118-37.866-16.118-14.584 0-28.528 5.885-39.146 16.63L144.598 1399.21c-20.98 21.108-20.98 55.392.128 76.5l299.349 299.349c20.34 20.212 56.16 20.212 76.5 0l407.063-406.935c10.746-10.746 16.63-24.946 16.503-39.658 0-14.2-5.757-27.504-15.991-37.61zm938.586-939.585c70.616 72.407 70.36 188.18 0 258.54l-407.063 406.936c-34.156 34.412-79.954 53.217-128.694 53.217-48.74 0-94.41-18.805-128.695-53.217l90.445-90.444c20.34 20.212 56.287 20.212 76.5 0l407.063-406.936c21.108-21.108 20.852-56.16-.512-78.29l-297.813-297.559c-21.492-20.98-56.544-20.98-77.652 0L993.38 550.454c-10.106 10.106-15.735 23.666-15.735 38.122 0 14.711 5.629 28.272 15.735 38.378l-90.445 90.444c-70.999-70.871-70.999-186.517 0-257.389l406.936-406.935c70.487-70.616 186.133-70.744 258.156-.512l298.71 298.71zM364.773 275.692l-90.444 90.445L18.475 110.283l90.444-90.444 255.854 255.853zM10.748 640.732V512.804h361.777V640.73H10.748zm500.706-266.856V12.1H639.38v361.777H511.454zm1042.143 1271.529l90.444-90.444 255.854 255.853-90.444 90.445-255.854-255.854zm-18.728-237.112v-127.927h383.78v127.927h-383.78zM1279.015 1920v-383.78h127.927V1920h-127.927z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconRemoveLinkLine;
}(_react.Component);

exports.default = IconRemoveLinkLine;