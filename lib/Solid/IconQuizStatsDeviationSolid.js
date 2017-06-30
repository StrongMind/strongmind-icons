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

var IconQuizStatsDeviationSolid = function (_Component) {
  _inherits(IconQuizStatsDeviationSolid, _Component);

  function IconQuizStatsDeviationSolid() {
    _classCallCheck(this, IconQuizStatsDeviationSolid);

    return _possibleConstructorReturn(this, (IconQuizStatsDeviationSolid.__proto__ || Object.getPrototypeOf(IconQuizStatsDeviationSolid)).apply(this, arguments));
  }

  _createClass(IconQuizStatsDeviationSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconQuizStatsDeviationSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M677.647 872.098v175.85c0 107.18 87.19 194.371 194.485 194.371h62.795c107.294 0 194.485-87.19 194.485-194.372v-175.85c0-107.18-87.19-194.484-194.485-194.484h-62.795c-107.294 0-194.485 87.304-194.485 194.485m734.118-194.45h-240.678c43.821 53.194 71.266 120.281 71.266 194.484v175.736c0 169.525-137.901 307.426-307.426 307.426h-62.795c-169.525 0-307.426-137.901-307.426-307.426V872.132c0-169.525 137.901-307.426 307.426-307.426h539.633v112.941zM960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconQuizStatsDeviationSolid;
}(_react.Component);

exports.default = IconQuizStatsDeviationSolid;