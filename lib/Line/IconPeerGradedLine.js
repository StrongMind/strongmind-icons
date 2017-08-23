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

var IconPeerGradedLine = function (_Component) {
  _inherits(IconPeerGradedLine, _Component);

  function IconPeerGradedLine() {
    _classCallCheck(this, IconPeerGradedLine);

    return _possibleConstructorReturn(this, (IconPeerGradedLine.__proto__ || Object.getPrototypeOf(IconPeerGradedLine)).apply(this, arguments));
  }

  _createClass(IconPeerGradedLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconPeerGradedLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1145.209 948.912c166.798 35.057 287.956 194.139 287.956 378.245v211.888l-22.49 16.426c-120.937 88.746-367.22 232.393-694.974 232.393-17.309 0-34.837-.44-52.587-1.212-288.727-13.56-507.781-133.174-640.735-231.18L0 1538.934v-211.888c0-184.107 121.268-343.188 288.287-378.245 58.539-12.348 117.85-21.829 177.381-28.994-82.02-70.887-134.938-174.185-134.938-290.712V518.852C330.73 306.192 503.813 133 716.582 133c212.77 0 385.853 173.192 385.853 385.852v110.244c0 116.747-53.138 220.266-135.38 291.042 59.642 7.276 119.284 16.316 178.154 28.774zm177.712 533.799v-155.554c0-132.292-84.336-245.953-200.422-270.427-149.931-31.64-304.162-45.751-455.416-41.782-119.173 2.976-239.008 17.087-356.086 41.672-116.307 24.474-200.754 138.245-200.754 270.427v155.774c122.15 85.439 312.54 182.122 558.053 193.698 303.39 14.552 532.035-108.59 654.625-193.808zM440.974 629.096c0 152.025 123.583 275.608 275.608 275.608 152.026 0 275.61-123.583 275.61-275.608v-45.2c-29.326 23.261-68.242 45.2-127.883 45.2-81.69 0-125.568-40.35-157.648-69.785-27.23-25.245-43.657-40.459-81.58-40.459-38.696 0-55.343 15.324-82.904 40.68-23.702 21.938-53.909 49.61-101.203 62.398v7.166zm275.608-385.853c-145.3 0-263.481 113.441-273.624 256.206 7.717-5.953 15.545-12.678 24.474-20.946 32.081-29.435 75.958-69.894 157.648-69.894 80.92 0 124.575 40.238 156.326 69.563 27.56 25.356 44.207 40.68 82.903 40.68 37.593 0 53.798-15.103 80.918-40.129 11.025-10.142 22.82-20.946 36.491-30.978-31.64-117.41-137.915-204.502-265.136-204.502zm1125.476 64.416L1920 385.6l-431.713 431.713-235.37-235.37 77.942-77.942 157.428 157.428 353.77-353.771z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconPeerGradedLine;
}(_react.Component);

exports.default = IconPeerGradedLine;