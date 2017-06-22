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

var IconPostToSisLine = function (_Component) {
  _inherits(IconPostToSisLine, _Component);

  function IconPostToSisLine() {
    _classCallCheck(this, IconPostToSisLine);

    return _possibleConstructorReturn(this, (IconPostToSisLine.__proto__ || Object.getPrototypeOf(IconPostToSisLine)).apply(this, arguments));
  }

  _createClass(IconPostToSisLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconPostToSisLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M906.667 853.333v-640h106.666v640H906.667zm15.648 335.627c20.8-20.8 54.613-20.8 75.413 0l266.667 266.667-75.414 75.413-175.68-175.573v564.586h-106.56v-564.586l-175.68 175.573-75.413-75.413 266.667-266.667zm-317.92-705.941c86.08 28.16 221.653 111.253 182.4 243.306-18.454 62.08-63.68 104.96-127.36 120.534-17.707 4.373-36.374 6.506-55.36 6.506-76.587 0-159.254-34.24-215.68-92.266l76.373-74.347c43.2 44.48 117.653 69.547 169.067 56.533 26.986-6.613 43.093-21.653 50.666-47.253 19.414-64.96-112.213-111.253-113.493-111.787-85.227-28.16-219.733-110.72-185.067-241.813 16.32-62.187 60.16-105.493 122.987-122.027 88.533-23.36 205.013 12.694 275.84 85.654l-76.373 74.346c-43.734-44.906-120.96-70.4-172.48-56.746-25.387 6.613-40.32 21.333-46.827 45.973-17.28 65.493 113.92 112.853 115.307 113.387zm746.613 0c86.08 28.16 221.653 111.253 182.4 243.306-18.453 62.08-63.68 104.96-127.36 120.534-17.707 4.373-36.373 6.506-55.36 6.506-76.587 0-159.253-34.24-215.68-92.266l76.373-74.347c43.2 44.48 117.654 69.547 169.067 56.533 26.987-6.613 43.093-21.653 50.667-47.253 19.413-64.96-112.214-111.253-113.494-111.787-85.226-28.16-219.733-110.72-185.066-241.813 16.32-62.187 60.16-105.493 122.986-122.027 88.534-23.36 205.014 12.694 275.84 85.654l-76.373 74.346c-43.733-44.906-120.96-70.4-172.48-56.746-25.387 6.613-40.32 21.333-46.827 45.973-17.28 65.493 113.92 112.853 115.307 113.387zm302.293 423.648c0 29.333-24 53.333-53.333 53.333h-1280c-29.333 0-53.333-24-53.333-53.333V160c0-29.333 24-53.333 53.333-53.333h1280c29.333 0 53.333 24 53.333 53.333v746.667zM1599.968 0h-1280c-88.213 0-160 71.787-160 160v746.667c0 88.213 71.787 160 160 160h1280c88.213 0 160-71.787 160-160V160c0-88.213-71.787-160-160-160z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPostToSisLine;
}(_react.Component);

exports.default = IconPostToSisLine;