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

var IconCheckPlusSolid = function (_Component) {
  _inherits(IconCheckPlusSolid, _Component);

  function IconCheckPlusSolid() {
    _classCallCheck(this, IconCheckPlusSolid);

    return _possibleConstructorReturn(this, (IconCheckPlusSolid.__proto__ || Object.getPrototypeOf(IconCheckPlusSolid)).apply(this, arguments));
  }

  _createClass(IconCheckPlusSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconCheckPlusSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M229.948 98h229.949v230.063H689.96v229.949H459.897v229.833H229.948V558.012H0V328.063h229.948V98zm574.894 459.931V327.983h574.871V557.93h-574.87zM229.948 902.842h229.949v689.845h1034.767v-574.87h230.064v804.819H229.948V902.842zm844.992 97.89l684.326-668.806L1920 496.455l-845.06 825.86-408.044-398.846 160.85-164.413 247.194 241.675z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconCheckPlusSolid;
}(_react.Component);

exports.default = IconCheckPlusSolid;