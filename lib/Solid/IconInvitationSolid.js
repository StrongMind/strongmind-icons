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

var IconInvitationSolid = function (_Component) {
  _inherits(IconInvitationSolid, _Component);

  function IconInvitationSolid() {
    _classCallCheck(this, IconInvitationSolid);

    return _possibleConstructorReturn(this, (IconInvitationSolid.__proto__ || Object.getPrototypeOf(IconInvitationSolid)).apply(this, arguments));
  }

  _createClass(IconInvitationSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconInvitationSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M53 1756.981V932.235l395.413 316.48L53 1756.98zm1245.408-370.272l89.28-71.573 387.307 498.24H144.275l387.413-498.24 89.28 71.573H1298.408zm172.512-138.048l395.413-316.373v824.64l-395.413-508.267zM906.333 266.667H1013v266.666h266.667V640H1013v266.667H906.333V640H639.667V533.333h266.666V266.667zM372.968-.011h1173.44v498.347l319.893 277.333v19.947l-426.666 341.44v-1030.4h-960v1030.4L52.968 795.616v-19.947l320-277.333V-.011z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconInvitationSolid;
}(_react.Component);

exports.default = IconInvitationSolid;