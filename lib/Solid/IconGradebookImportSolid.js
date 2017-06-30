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

var IconGradebookImportSolid = function (_Component) {
  _inherits(IconGradebookImportSolid, _Component);

  function IconGradebookImportSolid() {
    _classCallCheck(this, IconGradebookImportSolid);

    return _possibleConstructorReturn(this, (IconGradebookImportSolid.__proto__ || Object.getPrototypeOf(IconGradebookImportSolid)).apply(this, arguments));
  }

  _createClass(IconGradebookImportSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconGradebookImportSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1574.513 138.515c-30.381-30.268-66.748-51.84-106.278-65.619v434.936h434.937c-13.78-39.529-35.238-75.896-65.62-106.164l-263.04-263.153zm-219.219 482.19V56h-903.53v903.53H0v112.94h451.765v790.589H1920V620.706h-564.706zM887.04 1425.3l-79.85-79.85 272.866-272.978h-515.35V959.529h515.35L807.191 686.664l79.849-79.85L1296.226 1016 887.04 1425.299z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconGradebookImportSolid;
}(_react.Component);

exports.default = IconGradebookImportSolid;