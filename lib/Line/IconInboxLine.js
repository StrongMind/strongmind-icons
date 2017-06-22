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

var IconInboxLine = function (_Component) {
  _inherits(IconInboxLine, _Component);

  function IconInboxLine() {
    _classCallCheck(this, IconInboxLine);

    return _possibleConstructorReturn(this, (IconInboxLine.__proto__ || Object.getPrototypeOf(IconInboxLine)).apply(this, arguments));
  }

  _createClass(IconInboxLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconInboxLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1750.588 1750.118H169.412c-31.172 0-56.47-25.412-56.47-56.47V1398.08l210.183 126.155h1273.75l210.184-126.155v295.567c0 31.059-25.299 56.47-56.47 56.47zM169.412 846.588h169.412v555.332L112.94 1266.39V903.06c0-31.059 25.299-56.47 56.47-56.47zm282.353 564.706V168.941h1016.47v1242.353H451.765zm1298.823-564.706c31.172 0 56.47 25.412 56.47 56.47v363.333l-225.882 135.529V846.588h169.412zm0-112.94h-169.412V56H338.824v677.647H169.412C76.009 733.647 0 809.657 0 903.06v790.588c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V903.06c0-93.403-76.01-169.412-169.412-169.412zM621.176 488.903h564.706V375.962H621.176v112.942zm0 677.647h564.706v-112.942H621.176v112.942zm0-338.824h677.648V714.786H621.176v112.941z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconInboxLine;
}(_react.Component);

exports.default = IconInboxLine;