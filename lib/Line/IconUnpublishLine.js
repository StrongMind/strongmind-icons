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

var IconUnpublishLine = function (_Component) {
  _inherits(IconUnpublishLine, _Component);

  function IconUnpublishLine() {
    _classCallCheck(this, IconUnpublishLine);

    return _possibleConstructorReturn(this, (IconUnpublishLine.__proto__ || Object.getPrototypeOf(IconUnpublishLine)).apply(this, arguments));
  }

  _createClass(IconUnpublishLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconUnpublishLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1468.235 394.824c249.149 0 451.765 202.616 451.765 451.764s-202.616 451.765-451.765 451.765h-112.94v-112.941h112.94c186.805 0 338.824-152.02 338.824-338.824s-152.019-338.823-338.824-338.823c-1.92 0-3.727.564-5.647.677 2.146 18.523 5.647 36.706 5.647 55.793 0 44.16-5.76 88.094-16.94 130.673l-109.215-28.913c8.81-33.204 13.214-67.426 13.214-101.76 0-217.976-177.318-395.294-395.294-395.294-212.442 0-385.13 168.96-393.6 379.37 38.174 18.409 74.202 41.788 105.374 72.282l-78.946 80.753c-53.082-52.066-123.219-80.64-197.534-80.64-155.746 0-282.353 126.72-282.353 282.353 0 155.746 126.607 282.353 282.353 282.353h169.412v112.94H395.294C177.318 1298.353 0 1121.036 0 903.06c0-217.977 177.318-395.294 395.294-395.294 20.894 0 41.224 2.71 61.553 5.986C482.597 257.487 697.073 56 960 56c221.816 0 408.847 143.661 478.08 342.212 10.052-.678 19.99-3.388 30.155-3.388zm-451.764 1218.962l185.9-185.9 79.963 79.849L960 1829.955l-322.334-322.22 79.962-79.85 185.901 185.901V903.048h112.942v710.738z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUnpublishLine;
}(_react.Component);

exports.default = IconUnpublishLine;