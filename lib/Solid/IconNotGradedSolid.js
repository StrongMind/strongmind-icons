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

var IconNotGradedSolid = function (_Component) {
  _inherits(IconNotGradedSolid, _Component);

  function IconNotGradedSolid() {
    _classCallCheck(this, IconNotGradedSolid);

    return _possibleConstructorReturn(this, (IconNotGradedSolid.__proto__ || Object.getPrototypeOf(IconNotGradedSolid)).apply(this, arguments));
  }

  _createClass(IconNotGradedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconNotGradedSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1468.235 1355.294h112.941v-338.823h-112.94v338.823zm0 225.882h112.941v-112.94h-112.94v112.94zm56.47-677.647c217.977 0 395.295 177.318 395.295 395.295 0 217.976-177.318 395.294-395.294 395.294-217.977 0-395.294-177.318-395.294-395.294 0-217.977 177.317-395.295 395.294-395.295zM338.825 1129.412V1016.47h564.705v112.94H338.824zm0 225.882v-112.941h338.823v112.941H338.824zm0-564.706V338.824h790.588v451.764H338.824zm677.647 508.236c0-260.895 198.324-474.015 451.764-502.476V0H0v1920h1468.235v-118.701c-253.44-28.461-451.764-241.581-451.764-502.475z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconNotGradedSolid;
}(_react.Component);

exports.default = IconNotGradedSolid;