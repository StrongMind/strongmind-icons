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

var IconZoomOutSolid = function (_Component) {
  _inherits(IconZoomOutSolid, _Component);

  function IconZoomOutSolid() {
    _classCallCheck(this, IconZoomOutSolid);

    return _possibleConstructorReturn(this, (IconZoomOutSolid.__proto__ || Object.getPrototypeOf(IconZoomOutSolid)).apply(this, arguments));
  }

  _createClass(IconZoomOutSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconZoomOutSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M867.454 1518.044c-358.8 0-650.59-291.79-650.59-650.59s291.79-650.59 650.59-650.59 650.59 291.79 650.59 650.59-291.79 650.59-650.59 650.59zM1920 1766.678l-368.126-368.234c114.287-146.817 183.033-330.826 183.033-530.99C1734.907 389.16 1345.746 0 867.454 0 389.16 0 0 389.161 0 867.454c0 478.292 389.161 867.453 867.454 867.453 200.164 0 384.065-68.854 530.99-183.033L1766.678 1920 1920 1766.678zM487.943 975.885h759.021V759.022H487.943v216.863z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconZoomOutSolid;
}(_react.Component);

exports.default = IconZoomOutSolid;