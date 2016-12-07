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

var IconQuizStatsAvgSolid = function (_Component) {
  _inherits(IconQuizStatsAvgSolid, _Component);

  function IconQuizStatsAvgSolid() {
    _classCallCheck(this, IconQuizStatsAvgSolid);

    return _possibleConstructorReturn(this, (IconQuizStatsAvgSolid.__proto__ || Object.getPrototypeOf(IconQuizStatsAvgSolid)).apply(this, arguments));
  }

  _createClass(IconQuizStatsAvgSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconQuizStatsAvgSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797' }),
          _react2.default.createElement('path', { d: 'M1208.1 1072.931c-11.574-10.574-17.171-27.295-17.171-49.764V664.991h-134v318.524c-13 26.435-28.852 46.921-49.287 61.46-20.435 14.54-45.214 21.81-74.148 21.81-31.104 0-54.697-9.253-70.61-27.758-15.914-18.504-23.955-43.12-23.955-73.85V664.99h-134v623.346c0 16.521 5.19 28.962 15.499 37.718 10.307 8.756 24.9 12.936 43.708 12.936h66.793v-118.558c0-12.887-.665-26.847-1.931-41.882-1.266-15.034-3.723-29.656-7.34-43.864 13.02 10.243 28.022 18.008 45.02 23.295 16.999 5.288 36.345 7.93 58.045 7.93 31.828 0 60.217-7.517 85.173-22.552 24.955-15.034 47.196-36.429 66.726-64.184 4.702 16.851 11.574 31.555 20.616 44.111 9.04 12.556 19.439 22.882 31.194 30.978 11.754 8.095 24.683 14.125 38.789 18.091 14.106 3.966 28.753 5.947 43.943 5.947 13.02 0 24.685-1.156 34.99-3.469 10.31-2.313 19.17-5.37 26.584-9.169 7.415-3.8 12.86-8.179 16.656-13.135 3.798-4.956 5.535-10.078 5.535-15.365v-48.174h-39.28c-20.252 0-35.976-5.486-47.55-16.06' })
        )
      );
    }
  }]);

  return IconQuizStatsAvgSolid;
}(_react.Component);

exports.default = IconQuizStatsAvgSolid;