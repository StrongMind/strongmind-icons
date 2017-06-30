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

var IconSyllabusSolid = function (_Component) {
  _inherits(IconSyllabusSolid, _Component);

  function IconSyllabusSolid() {
    _classCallCheck(this, IconSyllabusSolid);

    return _possibleConstructorReturn(this, (IconSyllabusSolid.__proto__ || Object.getPrototypeOf(IconSyllabusSolid)).apply(this, arguments));
  }

  _createClass(IconSyllabusSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconSyllabusSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1344.962 112.941h462.156V1920H113V112.941h462.155C598.535 47.322 660.652 0 734.176 0h451.765c73.525 0 135.643 47.322 159.021 112.941zM903.588 790.588h564.706v-112.94H903.588v112.94zm0 564.706h564.706v-112.941H903.588v112.941zm0 225.882h338.824v-112.94H903.588v112.94zm-451.764-564.705h338.823V677.647H451.824v338.824zm0 564.705h338.823v-338.823H451.824v338.823zm451.764-564.705h338.824V903.529H903.588v112.942zM677.706 225.882v112.942h564.706V169.412c0-31.172-25.412-56.47-56.47-56.47H734.175c-31.058 0-56.47 25.298-56.47 56.47v56.47z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconSyllabusSolid;
}(_react.Component);

exports.default = IconSyllabusSolid;