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

var IconTargetLine = function (_Component) {
  _inherits(IconTargetLine, _Component);

  function IconTargetLine() {
    _classCallCheck(this, IconTargetLine);

    return _possibleConstructorReturn(this, (IconTargetLine.__proto__ || Object.getPrototypeOf(IconTargetLine)).apply(this, arguments));
  }

  _createClass(IconTargetLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTargetLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1691.249 1016.47c-27.558 359.718-315.106 647.154-674.824 674.824v-223.059h-112.94v223.06c-359.718-27.671-647.154-315.107-674.711-674.824H451.72V903.529H228.774c27.557-359.717 314.993-647.153 674.71-674.823v223.059h112.941v-223.06c359.718 27.671 647.266 315.107 674.824 674.824H1468.19v112.942h223.059zm112.941-112.94c-28.01-421.949-365.703-759.756-787.765-787.765V0h-112.94v115.765c-421.949 28.01-759.643 365.816-787.653 787.764H-.045v112.942h115.877c28.01 421.948 365.704 759.755 787.652 787.764V1920h112.941v-115.765c422.062-28.01 759.756-365.816 787.765-787.764h115.765V903.529H1804.19zM960 1242.352c-155.633 0-282.353-126.72-282.353-282.353S804.367 677.647 960 677.647 1242.353 804.367 1242.353 960 1115.633 1242.353 960 1242.353m0-677.647c-217.976 0-395.294 177.318-395.294 395.294 0 217.976 177.318 395.294 395.294 395.294 217.976 0 395.294-177.318 395.294-395.294 0-217.976-177.318-395.294-395.294-395.294', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconTargetLine;
}(_react.Component);

exports.default = IconTargetLine;