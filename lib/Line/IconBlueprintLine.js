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

var IconBlueprintLine = function (_Component) {
  _inherits(IconBlueprintLine, _Component);

  function IconBlueprintLine() {
    _classCallCheck(this, IconBlueprintLine);

    return _possibleConstructorReturn(this, (IconBlueprintLine.__proto__ || Object.getPrototypeOf(IconBlueprintLine)).apply(this, arguments));
  }

  _createClass(IconBlueprintLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconBlueprintLine',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1757.5 1597h159.501v-239.251H1757.5zM1757.5 1278h159.501v-239.25H1757.5zM720.75 1597h159.5v-239.25h-159.5zM721.747 1278h159.5v-239.25h-159.5zM1359.747 1916h239.25v-159.5h-239.25zM1040.747 1916h239.251v-159.5h-239.251zM1358.75 879.25H1598v-159.5h-239.25zM1039.75 879.25H1279v-159.5h-239.25z"/>\n        <path d="M481.5 1438.497h79.75v159.5H322V321h1276.997v239.25h-159.5V480.5H481.5z"/>\n        <path d="M880.25 879.25v80.747h-159.5V719.75H960v159.5zM720.75 1676.75V1916H960v-159.5h-79.75v-79.75z"/>\n        <path d="M3 2v1276h239.25v-159.5H162.5v-957h957v79.75H1279V2zM1677.75 719.75v159.5h79.75V959H1917V719.75zM1757.5 1676.75v79.75h-79.75V1916H1917v-239.25z"/>\n    </g>\n</svg>'
      }));
    }
  }]);

  return IconBlueprintLine;
}(_react.Component);

exports.default = IconBlueprintLine;