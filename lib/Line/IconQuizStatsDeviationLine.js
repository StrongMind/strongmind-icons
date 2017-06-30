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

var IconQuizStatsDeviationLine = function (_Component) {
  _inherits(IconQuizStatsDeviationLine, _Component);

  function IconQuizStatsDeviationLine() {
    _classCallCheck(this, IconQuizStatsDeviationLine);

    return _possibleConstructorReturn(this, (IconQuizStatsDeviationLine.__proto__ || Object.getPrototypeOf(IconQuizStatsDeviationLine)).apply(this, arguments));
  }

  _createClass(IconQuizStatsDeviationLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconQuizStatsDeviationLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M960 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059M960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0m169.412 1047.902c0 107.181-87.19 194.485-194.485 194.485h-62.795c-107.294 0-194.485-87.304-194.485-194.485v-175.85c0-107.18 87.19-194.371 194.485-194.371h62.795c107.294 0 194.485 87.19 194.485 194.372v175.85zM960 567.224c-8.358-.677-16.49-2.484-25.073-2.484h-62.795c-169.525 0-307.426 137.788-307.426 307.313v175.85c0 169.524 137.901 307.425 307.426 307.425h62.795c169.525 0 307.426-137.901 307.426-307.426v-175.85c0-74.089-27.445-141.289-71.266-194.371h240.678V564.74H960v2.484z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconQuizStatsDeviationLine;
}(_react.Component);

exports.default = IconQuizStatsDeviationLine;