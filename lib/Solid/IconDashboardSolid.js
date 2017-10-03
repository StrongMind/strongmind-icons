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

var IconDashboardSolid = function (_Component) {
  _inherits(IconDashboardSolid, _Component);

  function IconDashboardSolid() {
    _classCallCheck(this, IconDashboardSolid);

    return _possibleConstructorReturn(this, (IconDashboardSolid.__proto__ || Object.getPrototypeOf(IconDashboardSolid)).apply(this, arguments));
  }

  _createClass(IconDashboardSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconDashboardSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M960 160c263.335 0 489.166 94.166 677.5 282.5S1920 856.665 1920 1120c0 230.001-73.333 433.332-220 610l-20 30H240l-20-30C73.333 1553.332 0 1350.001 0 1120c0-263.335 94.166-489.166 282.5-677.5S696.665 160 960 160zm0 160c-220.001 0-408.333 78.333-565 235-156.667 156.667-235 344.999-235 565 0 173.334 55 333.333 165 480h1270c110-146.667 165-306.666 165-480 0-220.001-78.333-408.333-235-565-156.667-156.667-344.999-235-565-235zm0 80c23.333 0 42.5 7.5 57.5 22.5s22.5 34.167 22.5 57.5-7.5 42.5-22.5 57.5S983.333 560 960 560s-42.5-7.5-57.5-22.5S880 503.333 880 480s7.5-42.5 22.5-57.5S936.667 400 960 400zm-320 85c23.333 0 42.5 7.5 57.5 22.5S720 541.667 720 565s-7.5 42.5-22.5 57.5S663.333 645 640 645s-42.5-7.5-57.5-22.5S560 588.333 560 565s7.5-42.5 22.5-57.5S616.667 485 640 485zm640 0c23.333 0 42.5 7.5 57.5 22.5s22.5 34.167 22.5 57.5-7.5 42.5-22.5 57.5-34.167 22.5-57.5 22.5-42.5-7.5-57.5-22.5-22.5-34.167-22.5-57.5 7.5-42.5 22.5-57.5 34.167-22.5 57.5-22.5zM405 720c23.333 0 42.5 7.5 57.5 22.5S485 776.667 485 800s-7.5 42.5-22.5 57.5S428.333 880 405 880s-42.5-7.5-57.5-22.5S325 823.333 325 800s7.5-42.5 22.5-57.5S381.667 720 405 720zm1085 0l80 140-450 260c0 46.667-15.833 85-47.5 115s-69.166 45-112.5 45-80.833-15.833-112.5-47.5S800 1163.334 800 1120s15.833-80.833 47.5-112.5S916.666 960 960 960c26.667 0 53.333 6.667 80 20l450-260zM320 1040c23.333 0 42.5 7.5 57.5 22.5s22.5 34.167 22.5 57.5-7.5 42.5-22.5 57.5-34.167 22.5-57.5 22.5-42.5-7.5-57.5-22.5-22.5-34.167-22.5-57.5 7.5-42.5 22.5-57.5 34.167-22.5 57.5-22.5zm1280 0c23.333 0 42.5 7.5 57.5 22.5s22.5 34.167 22.5 57.5-7.5 42.5-22.5 57.5-34.167 22.5-57.5 22.5-42.5-7.5-57.5-22.5-22.5-34.167-22.5-57.5 7.5-42.5 22.5-57.5 34.167-22.5 57.5-22.5zM405 1360c23.333 0 42.5 7.5 57.5 22.5s22.5 34.167 22.5 57.5-7.5 42.5-22.5 57.5-34.167 22.5-57.5 22.5-42.5-7.5-57.5-22.5-22.5-34.167-22.5-57.5 7.5-42.5 22.5-57.5 34.167-22.5 57.5-22.5zm1110 0c23.333 0 42.5 7.5 57.5 22.5s22.5 34.167 22.5 57.5-7.5 42.5-22.5 57.5-34.167 22.5-57.5 22.5-42.5-7.5-57.5-22.5-22.5-34.167-22.5-57.5 7.5-42.5 22.5-57.5 34.167-22.5 57.5-22.5z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconDashboardSolid;
}(_react.Component);

exports.default = IconDashboardSolid;