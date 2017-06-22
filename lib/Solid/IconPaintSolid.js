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

var IconPaintSolid = function (_Component) {
  _inherits(IconPaintSolid, _Component);

  function IconPaintSolid() {
    _classCallCheck(this, IconPaintSolid);

    return _possibleConstructorReturn(this, (IconPaintSolid.__proto__ || Object.getPrototypeOf(IconPaintSolid)).apply(this, arguments));
  }

  _createClass(IconPaintSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconPaintSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1863.812 72.483c40.643 40.643 58.109 87.876 56.021 140.602C1908.85 474.52 1423.33 953.447 1053.15 1280.79c-24.276-64.81-63.711-136.21-125.335-213.102l-8.787-9.886c-80.078-80.187-169.163-135.11-262.423-161.473C955.276 558.002 1460.677 33.927 1728.701 23.052c54.923-1.099 99.96 15.268 135.111 49.43zM818.133 1158.717l4.394 4.833c116.656 146.425 149.5 279.119 97.873 394.237-128.85 287.138-740.692 328.77-810.005 332.504L0 1896.442l61.953-91.83c.989-1.539 105.013-158.728 105.013-427.192 0-141.811 92.6-279.558 225.294-334.92 137.747-57.67 292.85-15.269 425.873 116.217z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPaintSolid;
}(_react.Component);

exports.default = IconPaintSolid;