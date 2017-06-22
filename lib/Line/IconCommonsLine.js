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

var IconCommonsLine = function (_Component) {
  _inherits(IconCommonsLine, _Component);

  function IconCommonsLine() {
    _classCallCheck(this, IconCommonsLine);

    return _possibleConstructorReturn(this, (IconCommonsLine.__proto__ || Object.getPrototypeOf(IconCommonsLine)).apply(this, arguments));
  }

  _createClass(IconCommonsLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCommonsLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M715.926 1409.203c-250.128 0-453.094-201.777-453.094-449.644 0-247.602 204.487-449.643 454.882-449.643h272.823V352.175H715.926c-336.47 0-610.751 272.328-610.751 607.384 0 335.054 274.282 607.385 610.75 607.385H988.75v-157.741H715.926zM368.007 959.559c0 189.642 155.74 344.469 347.919 344.469h377.998v368.09H715.926C321.538 1672.118 0 1352.868 0 959.56 0 566.248 321.537 247 715.926 247h379.786v368.09H717.714c-192.59 0-349.707 155.239-349.707 344.47zm990.537-355.563v250.76H742.745c-58.564 0-104.754 46.204-104.754 104.803s46.19 104.803 104.754 104.803h615.8v250.76l402.577-355.563-402.578-355.563zM1253.37 370.78L1920 959.56l-666.63 588.779v-378.802H742.744c-116.658 0-209.929-93.3-209.929-209.978 0-116.678 93.271-209.978 209.93-209.978h510.623V370.78z', fillRule: 'nonzero', stroke: 'none', strokeWidth: '1' })
      );
    }
  }]);

  return IconCommonsLine;
}(_react.Component);

exports.default = IconCommonsLine;