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

var IconRemoveLinkSolid = function (_Component) {
  _inherits(IconRemoveLinkSolid, _Component);

  function IconRemoveLinkSolid() {
    _classCallCheck(this, IconRemoveLinkSolid);

    return _possibleConstructorReturn(this, (IconRemoveLinkSolid.__proto__ || Object.getPrototypeOf(IconRemoveLinkSolid)).apply(this, arguments));
  }

  _createClass(IconRemoveLinkSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconRemoveLinkSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M68.998 660.985V540.962h339.545v120.023H68.998zm7.358-497.699l84.736-84.856 240.165 240.046-84.856 84.856L76.356 163.286zm462.411 247.211V71.073H658.91v339.424H538.767zm348.067 890.425l168.752-158.79c44.288 43.208 68.893 101.18 69.253 162.991.36 62.412-23.885 121.103-68.293 165.512l-381.793 381.912c-43.568 43.448-101.54 67.453-163.23 67.453-61.813 0-119.784-24.005-163.232-67.453L67.438 1571.694c-89.897-90.017-89.897-236.445-.12-326.462L449.23 863.319c44.049-44.048 102.26-68.293 164.192-68.293h1.32c61.932.36 119.783 24.965 163.11 69.373L605.98 1032.071c1.44 1.32 4.081 3 7.322 3l-369.67 373.392 267.89 267.77 375.312-375.31zm612.236 80.2v-120.023h360.068v120.023H1499.07zm17.523 222.438l84.856-84.856 240.046 240.045-84.856 84.856-240.046-240.045zm336.22-1256.603c89.537 91.938 89.177 238.245 0 327.542l-381.912 381.673c-43.329 43.448-101.42 67.573-163.231 67.573-61.692 0-119.663-24.125-163.111-67.573L1314.27 886.46c-3.12-3.121-10.082-3.121-13.083 0l381.913-381.793-279.893-267.77-369.55 381.552c3.48-3.841 3.36-9.122-.24-12.843L863.704 775.318c-90.017-90.017-90.017-236.324 0-326.342l381.793-381.792c89.177-89.177 235.725-89.657 326.582-.96l280.733 280.733zm-593.789 1514.256v-360.069h120.023v360.069h-120.023z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconRemoveLinkSolid;
}(_react.Component);

exports.default = IconRemoveLinkSolid;