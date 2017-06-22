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

var IconMsWordLine = function (_Component) {
  _inherits(IconMsWordLine, _Component);

  function IconMsWordLine() {
    _classCallCheck(this, IconMsWordLine);

    return _possibleConstructorReturn(this, (IconMsWordLine.__proto__ || Object.getPrototypeOf(IconMsWordLine)).apply(this, arguments));
  }

  _createClass(IconMsWordLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMsWordLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1700.595 378.805c31.963 31.962 49.581 74.54 49.581 119.717V1920H169V0h1082.654c44.499 0 88.207 18.07 119.718 49.581l329.223 329.224zm-63.36 1428.254V564.706h-451.764V112.94H281.94V1807.06h1355.294zM1298.412 136.32v315.445h315.444L1298.412 136.32z' }),
          _react2.default.createElement('path', { d: 'M507.824 790.588V338.824h451.764v451.764H507.824zm112.94-112.94h225.883V451.764H620.765v225.882zM507.824 1016.47h903.529V903.53h-903.53zM507.824 1468.235h790.588v-112.94H507.824zM507.824 1242.353h677.647v-112.941H507.824z' })
        )
      );
    }
  }]);

  return IconMsWordLine;
}(_react.Component);

exports.default = IconMsWordLine;