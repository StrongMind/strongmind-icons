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

var IconCoursesSolid = function (_Component) {
  _inherits(IconCoursesSolid, _Component);

  function IconCoursesSolid() {
    _classCallCheck(this, IconCoursesSolid);

    return _possibleConstructorReturn(this, (IconCoursesSolid.__proto__ || Object.getPrototypeOf(IconCoursesSolid)).apply(this, arguments));
  }

  _createClass(IconCoursesSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCoursesSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1750.176 1468.235h-225.882v338.824h169.412V1920H451.353c-82.447 0-161.506-36.141-215.718-99.388-42.917-50.824-66.635-116.33-66.635-182.965V282.353C169 126.494 295.494 0 451.353 0h1298.823v1468.235zm-338.823 112.941v-112.94H463.776c-89.223 0-166.023 60.988-179.576 140.046-1.13 9.036-2.259 18.07-2.259 25.977v3.388c0 40.659 13.553 79.059 40.659 109.553 31.624 38.4 79.059 59.859 128.753 59.859h960v-112.941H408.435v-112.942h1002.918zm-903.53-790.588h903.53V338.824h-903.53v451.764zm56.471 225.883h790.588V903.529H564.294v112.942zm56.47-338.824h677.648V451.765H620.765v225.882z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconCoursesSolid;
}(_react.Component);

exports.default = IconCoursesSolid;