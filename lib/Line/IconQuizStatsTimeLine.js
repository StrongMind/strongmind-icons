'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconQuizStatsTimeLine = function (_Component) {
  _inherits(IconQuizStatsTimeLine, _Component);

  function IconQuizStatsTimeLine() {
    _classCallCheck(this, IconQuizStatsTimeLine);

    return _possibleConstructorReturn(this, (IconQuizStatsTimeLine.__proto__ || Object.getPrototypeOf(IconQuizStatsTimeLine)).apply(this, arguments));
  }

  _createClass(IconQuizStatsTimeLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconQuizStatsTimeLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1040 560H880v400c0 21.2 8.4 41.52 23.44 56.56l240 240 113.12-113.12L1040 926.88V560z' }),
          _react2.default.createElement('path', { d: 'M960 1680c-397.645 0-720-322.355-720-720s322.355-720 720-720 720 322.355 720 720-322.355 720-720 720m0-1600C473.99 80 80 473.989 80 960c0 486.01 393.99 880 880 880 486.011 0 880-393.99 880-880 0-486.011-393.989-880-880-880' })
        )
      );
    }
  }]);

  return IconQuizStatsTimeLine;
}(_react.Component);

exports.default = IconQuizStatsTimeLine;