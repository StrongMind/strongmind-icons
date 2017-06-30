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

var IconQuizSolid = function (_Component) {
  _inherits(IconQuizSolid, _Component);

  function IconQuizSolid() {
    _classCallCheck(this, IconQuizSolid);

    return _possibleConstructorReturn(this, (IconQuizSolid.__proto__ || Object.getPrototypeOf(IconQuizSolid)).apply(this, arguments));
  }

  _createClass(IconQuizSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconQuizSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M616.625 1262.663l85.636 85.636-352.354 352.233-85.636-85.636 352.354-352.233zM0 1526.947l440.533-440.533 85.514 85.757-440.411 440.29L0 1526.947zm528.494 176.056l264.296-264.296 85.635 85.757-264.295 264.174-85.636-85.635zm527.295-179.872l591.819-591.818-2.665 707.614-236.558 236.68h-.121l-352.475-352.476zM325.95 320.066l707.492-2.786-591.697 591.697L89.27 556.745l236.68-236.679zm1262.404 240.567l-42.757 42.878-184.11-184.231 42.756-42.879c86.605-86.483 172.24-102.108 226.747-100.291l55.96 2.059 2.301 56.08c2.302 54.992-13.323 138.932-100.897 226.384zm302.087-486.56c-73.281-27.617-341.21-101.382-615.56 172.967L570.174 951.747l221.417 221.538 221.418 221.417 704.707-704.828c273.016-273.017 199.857-543.005 172.725-615.801', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconQuizSolid;
}(_react.Component);

exports.default = IconQuizSolid;