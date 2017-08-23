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

var IconMoveDownSolid = function (_Component) {
  _inherits(IconMoveDownSolid, _Component);

  function IconMoveDownSolid() {
    _classCallCheck(this, IconMoveDownSolid);

    return _possibleConstructorReturn(this, (IconMoveDownSolid.__proto__ || Object.getPrototypeOf(IconMoveDownSolid)).apply(this, arguments));
  }

  _createClass(IconMoveDownSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMoveDownSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M677.647 394.995V169H1920v225.995H677.647zm0 903.53v-225.996H1920v225.996H677.647zm0 451.764v-225.882H1920v225.882H677.647zm338.824-903.529V620.878h225.882V846.76H1016.47zm338.823 0V620.878h225.882V846.76h-225.882zm338.824 0V620.878H1920V846.76h-225.882zM0 169.068h225.882v451.877H348.65v-222.38l441.94 335.209-441.94 335.322V846.715H0V169.068z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMoveDownSolid;
}(_react.Component);

exports.default = IconMoveDownSolid;