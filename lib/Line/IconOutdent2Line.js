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

var IconOutdent2Line = function (_Component) {
  _inherits(IconOutdent2Line, _Component);

  function IconOutdent2Line() {
    _classCallCheck(this, IconOutdent2Line);

    return _possibleConstructorReturn(this, (IconOutdent2Line.__proto__ || Object.getPrototypeOf(IconOutdent2Line)).apply(this, arguments));
  }

  _createClass(IconOutdent2Line, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconOutdent2Line',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M885.734 548.955V434.037H1920v114.918H885.734zm0 344.756V778.792H1920v114.919H885.734zm-804.43 344.755v-114.918h1838.581v114.918H81.305zm0 344.755v-114.918h1838.581v114.918H81.305zM270.519 336l81.247 81.132L220.07 548.944h493.345v114.918H220.069l131.696 131.812-81.247 81.247L0 606.518 270.518 336z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconOutdent2Line;
}(_react.Component);

exports.default = IconOutdent2Line;