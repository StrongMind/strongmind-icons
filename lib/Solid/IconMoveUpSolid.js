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

var IconMoveUpSolid = function (_Component) {
  _inherits(IconMoveUpSolid, _Component);

  function IconMoveUpSolid() {
    _classCallCheck(this, IconMoveUpSolid);

    return _possibleConstructorReturn(this, (IconMoveUpSolid.__proto__ || Object.getPrototypeOf(IconMoveUpSolid)).apply(this, arguments));
  }

  _createClass(IconMoveUpSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMoveUpSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M677.669 1750.262v-225.879H1920v225.879H677.669zm0-1355.27V169H1920v225.991H677.669zm0 903.513v-225.992H1920v225.992H677.669zm338.818-451.757V620.87h225.878v225.878h-225.878zm338.817 0V620.87h225.878v225.878h-225.878zm338.818 0V620.87H1920v225.878h-225.878zM338.818 620.881V398.617L745.624 733.82l-406.806 335.204V846.759h-112.94v903.514H0V620.88h338.818z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconMoveUpSolid;
}(_react.Component);

exports.default = IconMoveUpSolid;