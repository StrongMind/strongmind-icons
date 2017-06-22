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

var IconTextSubscriiptLine = function (_Component) {
  _inherits(IconTextSubscriiptLine, _Component);

  function IconTextSubscriiptLine() {
    _classCallCheck(this, IconTextSubscriiptLine);

    return _possibleConstructorReturn(this, (IconTextSubscriiptLine.__proto__ || Object.getPrototypeOf(IconTextSubscriiptLine)).apply(this, arguments));
  }

  _createClass(IconTextSubscriiptLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTextSubscriiptLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M0 5h1435.956v159.55H797.753v1435.957h-159.55V164.55H0V5zm1824.701 1442.45c-105.303 105.303-248.42 234.38-336.332 312.56h426.16v159.55H1356.1c-44.036 0-79.775-35.739-79.775-79.775v-69.883c0-22.976 10.051-44.993 27.442-60.15 2.553-2.235 252.41-219.383 408.131-375.104 44.993-44.994 59.193-92.061 41.005-136.257-18.668-45.153-67.012-76.584-117.59-76.584-116.79 0-214.435 126.524-215.552 127.96l-127.481-96.05c5.903-7.818 145.989-191.46 343.034-191.46 115.036 0 221.616 70.361 265.013 175.186 42.92 103.708 14.68 219.701-75.627 310.007z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTextSubscriiptLine;
}(_react.Component);

exports.default = IconTextSubscriiptLine;