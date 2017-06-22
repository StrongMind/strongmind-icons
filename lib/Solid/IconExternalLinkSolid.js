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

var IconExternalLinkSolid = function (_Component) {
  _inherits(IconExternalLinkSolid, _Component);

  function IconExternalLinkSolid() {
    _classCallCheck(this, IconExternalLinkSolid);

    return _possibleConstructorReturn(this, (IconExternalLinkSolid.__proto__ || Object.getPrototypeOf(IconExternalLinkSolid)).apply(this, arguments));
  }

  _createClass(IconExternalLinkSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconExternalLinkSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M1386.667 426.003c0-88.213-71.787-160-160-160H160c-88.213 0-160 71.787-160 160v160h1386.667v-160zM1904.373 1028.296l-320-320-75.413 75.414 228.907 229.013h-351.254v106.613h-533.28V1012.67h533.334v-320H0v800c0 88.533 71.467 160 160 160h1066.667c88.533 0 160-71.467 160-160v-373.28h351.2l-228.907 228.906 75.413 75.414 320-320c20.8-20.8 20.8-54.613 0-75.414' })
        )
      );
    }
  }]);

  return IconExternalLinkSolid;
}(_react.Component);

exports.default = IconExternalLinkSolid;