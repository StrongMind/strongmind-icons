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

var IconToggleRightLine = function (_Component) {
  _inherits(IconToggleRightLine, _Component);

  function IconToggleRightLine() {
    _classCallCheck(this, IconToggleRightLine);

    return _possibleConstructorReturn(this, (IconToggleRightLine.__proto__ || Object.getPrototypeOf(IconToggleRightLine)).apply(this, arguments));
  }

  _createClass(IconToggleRightLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconToggleRightLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M863.593 604.735l79.85-79.85 435.162 435.163-435.162 435.162-79.85-79.737 298.956-298.955H.045V903.577H1162.55L863.593 604.735zM1072.941 113C1540.066 113 1920 492.934 1920 960.059c0 467.125-379.934 847.059-847.059 847.059-256.15 0-495.247-113.845-656.075-312.283l87.868-71.153c139.257 171.897 346.278 270.494 568.207 270.494 404.781 0 734.118-329.336 734.118-734.117 0-404.781-329.337-734.118-734.118-734.118-221.93 0-428.95 98.598-568.207 270.494l-87.868-71.153C577.694 226.845 816.79 113 1072.94 113z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconToggleRightLine;
}(_react.Component);

exports.default = IconToggleRightLine;