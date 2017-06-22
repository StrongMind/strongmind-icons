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

var IconMoveDownBottomSolid = function (_Component) {
  _inherits(IconMoveDownBottomSolid, _Component);

  function IconMoveDownBottomSolid() {
    _classCallCheck(this, IconMoveDownBottomSolid);

    return _possibleConstructorReturn(this, (IconMoveDownBottomSolid.__proto__ || Object.getPrototypeOf(IconMoveDownBottomSolid)).apply(this, arguments));
  }

  _createClass(IconMoveDownBottomSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMoveDownBottomSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1355.294 1637.143V1411.26h225.882v225.883h-225.882zm338.824.113V1411.26H1920v225.996h-225.882zm-677.647-.113V1411.26h225.882v225.883H1016.47zM0 168.919h225.882v1242.353H348.65v-222.269l441.94 335.323-441.94 335.096v-222.268H0V168.919zm677.647 1016.459V959.496H1920v225.882H677.647zm0-903.53V55.966H1920v225.882H677.647zm0 451.878V507.844H1920v225.882H677.647z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMoveDownBottomSolid;
}(_react.Component);

exports.default = IconMoveDownBottomSolid;