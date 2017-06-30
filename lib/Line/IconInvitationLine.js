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

var IconInvitationLine = function (_Component) {
  _inherits(IconInvitationLine, _Component);

  function IconInvitationLine() {
    _classCallCheck(this, IconInvitationLine);

    return _possibleConstructorReturn(this, (IconInvitationLine.__proto__ || Object.getPrototypeOf(IconInvitationLine)).apply(this, arguments));
  }

  _createClass(IconInvitationLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconInvitationLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M338.79-.011v527.66L-.034 821.298v1098.692h1920V821.297l-338.71-293.647V-.011H338.79zm112.94 1203.953V112.93h1016.471v1091.012l-189.289 151.34H641.02l-189.29-151.34zm1129.526-526.87l225.882 195.726v60.085l-225.882 180.706V677.07zM112.907 932.881v-60.084L338.79 677.071v436.518L112.907 932.883zm1205.76 535.455l488.47-390.777v623.323l-238.08-301.553-88.658 70.023 266.654 337.695H172.88l266.767-337.695-88.659-70.023-238.08 301.553V1077.56l488.47 390.777h717.29zM903.53 960V677.647H621.176V564.706H903.53V282.353h112.942v282.353h282.353v112.941H1016.47V960H903.529z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconInvitationLine;
}(_react.Component);

exports.default = IconInvitationLine;