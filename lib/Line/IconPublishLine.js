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

var IconPublishLine = function (_Component) {
  _inherits(IconPublishLine, _Component);

  function IconPublishLine() {
    _classCallCheck(this, IconPublishLine);

    return _possibleConstructorReturn(this, (IconPublishLine.__proto__ || Object.getPrototypeOf(IconPublishLine)).apply(this, arguments));
  }

  _createClass(IconPublishLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconPublishLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1468.235 507.824c249.149 0 451.765 202.616 451.765 451.764s-202.616 451.765-451.765 451.765h-112.94v-112.941h112.94c186.805 0 338.824-152.02 338.824-338.824s-152.019-338.823-338.824-338.823c-1.92 0-3.727.677-5.647.677 2.033 18.523 5.647 36.706 5.647 55.793 0 44.273-5.76 88.207-16.94 130.673l-109.215-28.913c8.696-33.091 13.214-67.2 13.214-101.76 0-217.976-177.318-395.294-395.294-395.294-212.442 0-385.13 168.96-393.713 379.257 38.287 18.522 74.315 41.9 105.6 72.395l-78.946 80.753c-53.195-51.953-123.332-80.64-197.647-80.64-155.633 0-282.353 126.607-282.353 282.353s126.72 282.353 282.353 282.353h169.412v112.94H395.294C177.318 1411.353 0 1234.036 0 1016.06c0-217.977 177.318-395.294 395.294-395.294 20.894 0 41.337 2.71 61.553 5.986C482.597 370.374 697.073 169 960 169c221.816 0 408.847 143.661 478.08 342.212 10.165-.678 19.99-3.388 30.155-3.388zm-830.513 637.722l322.334-322.334 322.222 322.334-79.85 79.85-185.9-185.902v710.739H903.585v-710.739l-186.014 185.901-79.85-79.85z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPublishLine;
}(_react.Component);

exports.default = IconPublishLine;