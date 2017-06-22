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

var IconHighlighterLine = function (_Component) {
  _inherits(IconHighlighterLine, _Component);

  function IconHighlighterLine() {
    _classCallCheck(this, IconHighlighterLine);

    return _possibleConstructorReturn(this, (IconHighlighterLine.__proto__ || Object.getPrototypeOf(IconHighlighterLine)).apply(this, arguments));
  }

  _createClass(IconHighlighterLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconHighlighterLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M110 1920v-113.326h1699.888V1920H110zm367.539-528.779l143.47 95.647-60.29 93.154H326.816l150.724-188.8zm94.627-133.61c41.59-62.33 42.497-142.565 2.266-204.214-16.205-24.932-14.506-58.476 3.627-82.388l38.757-49.07 389.954 260.196-32.75 51.45c-15.753 27.085-46.011 41.364-75.25 36.038-72.754-12.92-146.19 18.359-187.667 80.801l-27.991 41.704-138.825-92.7 27.879-41.818zm672.022-1127.933c12.466-16.66 35.018-21.532 51.223-10.766L1537.93 280.74c16.092 10.766 20.399 33.318 11.106 49.523l-481.409 756.337-380.208-253.736 556.77-703.187zM312.65 1693.348h309.833l123.186-190.727 59.722-89.414c16.433-24.592 45.104-37.398 72.642-32.185 76.495 14.28 154.123-22.098 192.654-88.394l575.242-903.547c40.344-69.696 20.626-158.657-44.99-202.627l-242.744-161.83c-65.616-43.63-155.37-27.764-203.533 35.585L488.53 901.654c-47.71 62.782-51.336 148.683-8.953 213.506 15.3 23.685 14.62 54.963-1.7 79.668l-58.249 87.26-190.16 238.438c-25.84 32.298-30.712 75.475-12.807 112.646 17.906 37.058 54.737 60.176 95.987 60.176z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconHighlighterLine;
}(_react.Component);

exports.default = IconHighlighterLine;