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

var IconBlueprintSolid = function (_Component) {
  _inherits(IconBlueprintSolid, _Component);

  function IconBlueprintSolid() {
    _classCallCheck(this, IconBlueprintSolid);

    return _possibleConstructorReturn(this, (IconBlueprintSolid.__proto__ || Object.getPrototypeOf(IconBlueprintSolid)).apply(this, arguments));
  }

  _createClass(IconBlueprintSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconBlueprintSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M564.706 1581.177H338.824V338.824h1242.353v225.882h-112.942V451.765H451.765v1016.47h112.941v112.942zM0 0h1242.353v225.882h-112.941v-112.94H112.941v1016.47h112.941v112.94H0V0zm847.059 1920H677.647v-169.412h112.942v56.471h56.47V1920zm180.662 0v-112.941h180.662V1920h-180.662zm361.433 0v-112.941h180.662V1920h-180.662zm530.846 0h-169.412v-112.941h56.471v-56.471H1920V1920zm-112.941-711.508v-180.661H1920v180.661h-112.941zm0 361.435v-180.662H1920v180.662h-112.941zM1920 847.059h-112.941v-56.47h-56.471V677.647H1920v169.412zm-892.169-56.471V677.647h180.661v112.941h-180.661zm361.434 0V677.647h180.662v112.941h-180.662zm-598.677 56.47h-112.94V677.648h169.41v112.942h-56.47v56.47zm-112.941 361.325v-180.662h112.941v180.662H677.647zm0 361.433v-180.662h112.941v180.662H677.647z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconBlueprintSolid;
}(_react.Component);

exports.default = IconBlueprintSolid;