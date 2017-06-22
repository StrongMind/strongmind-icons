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

var IconNextUnreadLine = function (_Component) {
  _inherits(IconNextUnreadLine, _Component);

  function IconNextUnreadLine() {
    _classCallCheck(this, IconNextUnreadLine);

    return _possibleConstructorReturn(this, (IconNextUnreadLine.__proto__ || Object.getPrototypeOf(IconNextUnreadLine)).apply(this, arguments));
  }

  _createClass(IconNextUnreadLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconNextUnreadLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M0 373.397v1386.667h1706.667v-803.2H1600v602.56l-305.6-366.827-82.027 68.267 327.04 392.533H167.253l327.04-392.533-82.026-68.267-305.6 366.827v-897.6l746.666 690.88 490.56-453.76-72.32-78.4-418.24 386.773-746.666-690.88v-36.373H1123.2V373.397H0zm1836.117-109.365c57.707 63.04 87.36 144.853 83.52 230.293-3.733 85.334-40.533 164.16-103.68 221.867-59.413 54.4-135.573 83.84-215.573 83.84-4.907 0-9.707-.107-14.613-.32-85.44-3.84-164.16-40.64-221.867-103.68-57.707-63.04-87.36-144.853-83.627-230.293 3.84-85.334 40.64-164.16 103.68-221.867 63.147-57.707 145.494-87.36 230.294-83.52 85.333 3.84 164.16 40.64 221.866 103.68zm-92.16 373.44c42.134-38.507 66.667-91.093 69.12-147.947 2.56-56.96-17.173-111.466-55.68-153.493-38.4-42.027-90.986-66.56-147.946-69.12-3.2-.213-6.4-.213-9.707-.213-53.333 0-104.107 19.626-143.68 55.893-42.133 38.507-66.667 90.987-69.227 147.947-2.56 56.96 17.28 111.36 55.68 153.493 38.507 42.027 91.094 66.56 148.054 69.12 56.853 2.88 111.36-17.28 153.386-55.68z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconNextUnreadLine;
}(_react.Component);

exports.default = IconNextUnreadLine;