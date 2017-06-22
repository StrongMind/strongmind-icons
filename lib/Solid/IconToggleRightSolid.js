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

var IconToggleRightSolid = function (_Component) {
  _inherits(IconToggleRightSolid, _Component);

  function IconToggleRightSolid() {
    _classCallCheck(this, IconToggleRightSolid);

    return _possibleConstructorReturn(this, (IconToggleRightSolid.__proto__ || Object.getPrototypeOf(IconToggleRightSolid)).apply(this, arguments));
  }

  _createClass(IconToggleRightSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconToggleRightSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M767.232 644.107l159.699-159.699 475.03 475.144-475.03 475.144-159.699-159.812 202.504-202.39H.023V846.61h969.713L767.232 644.107zM1016.471 56C1514.654 56 1920 461.346 1920 959.53c0 498.183-405.346 903.529-903.53 903.529-273.204 0-528.338-121.412-699.896-333.29l175.51-142.08c128.528 158.57 319.737 249.487 524.387 249.487 373.722 0 677.647-303.924 677.647-677.647 0-373.722-303.925-677.647-677.647-677.647-204.65 0-395.86 90.918-524.386 249.487l-175.51-142.08C488.131 177.412 743.264 56 1016.47 56z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconToggleRightSolid;
}(_react.Component);

exports.default = IconToggleRightSolid;