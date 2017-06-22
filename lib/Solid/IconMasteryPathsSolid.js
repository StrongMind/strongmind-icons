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

var IconMasteryPathsSolid = function (_Component) {
  _inherits(IconMasteryPathsSolid, _Component);

  function IconMasteryPathsSolid() {
    _classCallCheck(this, IconMasteryPathsSolid);

    return _possibleConstructorReturn(this, (IconMasteryPathsSolid.__proto__ || Object.getPrototypeOf(IconMasteryPathsSolid)).apply(this, arguments));
  }

  _createClass(IconMasteryPathsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMasteryPathsSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1496.099 0l-397.312 397.312 151.551 151.55L1388.92 410.28v330.754c0 146.835-74.06 198.066-215.965 283.273-71.06 42.55-150.693 90.46-212.75 161.733-62.056-71.274-141.69-119.183-212.75-161.733C605.552 939.1 531.49 887.87 531.49 741.034V410.28l138.582 138.582 151.551-151.55L424.312 0 27 397.312l151.55 151.55L317.134 410.28v330.754c0 275.02 177.38 381.556 319.928 466.978 141.905 85.207 215.966 136.438 215.966 283.273V1920h214.357v-428.715c0-146.835 74.06-198.066 215.965-283.273 142.548-85.422 319.929-191.958 319.929-466.978V410.28l138.582 138.582 151.55-151.55L1496.1 0z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMasteryPathsSolid;
}(_react.Component);

exports.default = IconMasteryPathsSolid;