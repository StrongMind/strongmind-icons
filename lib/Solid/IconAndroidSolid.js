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

var IconAndroidSolid = function (_Component) {
  _inherits(IconAndroidSolid, _Component);

  function IconAndroidSolid() {
    _classCallCheck(this, IconAndroidSolid);

    return _possibleConstructorReturn(this, (IconAndroidSolid.__proto__ || Object.getPrototypeOf(IconAndroidSolid)).apply(this, arguments));
  }

  _createClass(IconAndroidSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAndroidSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M113 1298.836V734.142h112.939v564.694H113zm1581.144 0V734.142h112.939v564.694h-112.94zm-296.69-1019.499c118.472 108.648 183.751 253.435 183.751 407.71v734.102c0 88.318-76.008 160.034-169.408 160.034h-169.409V1920H1129.45v-338.817H790.633V1920H677.694v-338.817H508.286c-93.4 0-169.408-71.716-169.408-160.034V709.296c0-200.58 107.292-380.266 269.246-488.913L519.58 87.906c-17.393-25.976-10.39-60.987 15.472-78.38 25.863-17.28 60.987-10.277 78.38 15.586l94.304 141.06c59.858-25.862 123.78-44.61 191.883-50.596 109.325-9.6 216.956 7.906 314.083 48.112l92.384-138.463c17.167-25.976 52.29-33.091 78.267-15.698 25.976 17.28 32.978 52.29 15.698 78.266l-85.72 128.637c29.25 18.861 57.372 39.416 83.122 62.907zm-211.535 398.336c62.23 0 112.939-50.71 112.939-112.94 0-62.228-50.71-112.938-112.939-112.938-62.23 0-112.939 50.71-112.939 112.939 0 62.23 50.71 112.939 112.939 112.939zm-451.755 0c62.229 0 112.938-50.71 112.938-112.94 0-62.228-50.71-112.938-112.938-112.938-62.23 0-112.94 50.71-112.94 112.939 0 62.23 50.71 112.939 112.94 112.939z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAndroidSolid;
}(_react.Component);

exports.default = IconAndroidSolid;