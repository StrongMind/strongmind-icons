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

var IconLinkLine = function (_Component) {
  _inherits(IconLinkLine, _Component);

  function IconLinkLine() {
    _classCallCheck(this, IconLinkLine);

    return _possibleConstructorReturn(this, (IconLinkLine.__proto__ || Object.getPrototypeOf(IconLinkLine)).apply(this, arguments));
  }

  _createClass(IconLinkLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconLinkLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1866.003 351.563L1565.128 50.575c-69.46-67.652-180.932-67.426-248.923.565L906.23 461.116c-68.33 68.443-68.33 179.69.113 248.132l31.623 31.624 79.737-79.963-31.624-31.51c-24.282-24.396-24.282-64.038 0-88.433l409.977-409.977c24.508-24.395 64.828-24.17 89.675 0l299.859 299.972c24.734 25.186 24.847 65.619.564 90.014l-409.976 409.977c-24.508 24.282-64.15 24.282-88.546 0l-110.795-110.909 159.473-159.36-79.85-79.85-435.614 435.502-109.779-109.779c-32.866-33.656-76.8-52.292-123.67-52.63-43.596 1.694-92.273 18.296-126.156 52.178L51.377 1316.081c-68.442 68.442-68.442 179.69 0 248.132l301.553 301.553c34.108 34.108 79.059 51.275 124.01 51.275 44.95 0 89.9-17.167 124.122-51.275l409.976-409.977c33.77-33.882 52.405-78.607 52.066-126.042-.226-46.984-18.974-90.918-52.066-123.219l-30.494-30.494-79.85 79.85 30.946 30.945c11.86 11.633 18.41 27.106 18.523 43.595.113 16.942-6.664 33.092-18.974 45.516l-409.977 409.976c-23.492 23.492-64.94 23.492-88.433 0l-301.553-301.553c-11.746-11.746-18.183-27.444-18.183-44.273 0-16.715 6.437-32.414 18.183-44.16l409.977-409.976c12.197-12.31 28.235-19.087 45.063-19.087h.452c16.49.113 31.962 6.663 43.934 19.087l110.344 110.23-162.184 162.297 79.85 79.85 438.324-438.438 110.796 110.908c34.334 34.221 79.171 51.275 124.122 51.275 44.95 0 89.901-17.054 124.122-51.275l409.977-409.977c67.877-67.99 67.99-179.463 0-249.26', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconLinkLine;
}(_react.Component);

exports.default = IconLinkLine;