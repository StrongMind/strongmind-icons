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

var IconBulletListLine = function (_Component) {
  _inherits(IconBulletListLine, _Component);

  function IconBulletListLine() {
    _classCallCheck(this, IconBulletListLine);

    return _possibleConstructorReturn(this, (IconBulletListLine.__proto__ || Object.getPrototypeOf(IconBulletListLine)).apply(this, arguments));
  }

  _createClass(IconBulletListLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconBulletListLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M169.412 226c93.402 0 169.412 76.01 169.412 169.412s-76.01 169.412-169.412 169.412C76.009 564.824 0 488.814 0 395.412 0 302.009 76.01 226 169.412 226zm395.294 225.882v-112.94H1920v112.94H564.706zM169.412 790.706c93.402 0 169.412 76.01 169.412 169.412s-76.01 169.411-169.412 169.411C76.009 1129.53 0 1053.52 0 960.118c0-93.403 76.01-169.412 169.412-169.412zm395.294 225.882v-112.94H1920v112.94H564.706zm-395.294 338.824c93.402 0 169.412 76.01 169.412 169.412s-76.01 169.411-169.412 169.411C76.009 1694.235 0 1618.225 0 1524.824c0-93.403 76.01-169.412 169.412-169.412zm395.294 225.882v-112.941H1920v112.941H564.706z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconBulletListLine;
}(_react.Component);

exports.default = IconBulletListLine;