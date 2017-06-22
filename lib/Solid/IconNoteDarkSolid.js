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

var IconNoteDarkSolid = function (_Component) {
  _inherits(IconNoteDarkSolid, _Component);

  function IconNoteDarkSolid() {
    _classCallCheck(this, IconNoteDarkSolid);

    return _possibleConstructorReturn(this, (IconNoteDarkSolid.__proto__ || Object.getPrototypeOf(IconNoteDarkSolid)).apply(this, arguments));
  }

  _createClass(IconNoteDarkSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconNoteDarkSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M621.176 338.824c-93.402 0-169.411-76.01-169.411-169.412C451.765 76.009 527.775 0 621.176 0c93.403 0 169.412 76.01 169.412 169.412 0 26.09-6.437 50.484-16.94 72.62L999.98 468.255l-79.962 79.962-226.221-226.334c-22.137 10.504-46.645 16.942-72.622 16.942zM338.824 1016.47V903.529h1242.352v112.942H338.824zm0 338.823v-112.941h790.588v112.941H338.824zM917.082 225.882H1920v1129.412h-564.706V1920H0V225.882h344.47c25.977 128.753 140.048 225.883 276.706 225.883 13.553 0 27.106-1.13 39.53-3.389L920.47 708.141l239.435-239.435-242.824-242.824zm551.153 1686.675v-444.31h444.424l-444.424 444.31z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconNoteDarkSolid;
}(_react.Component);

exports.default = IconNoteDarkSolid;