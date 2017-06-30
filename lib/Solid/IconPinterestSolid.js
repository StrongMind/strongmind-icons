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

var IconPinterestSolid = function (_Component) {
  _inherits(IconPinterestSolid, _Component);

  function IconPinterestSolid() {
    _classCallCheck(this, IconPinterestSolid);

    return _possibleConstructorReturn(this, (IconPinterestSolid.__proto__ || Object.getPrototypeOf(IconPinterestSolid)).apply(this, arguments));
  }

  _createClass(IconPinterestSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconPinterestSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M796.863 1332.48C745.587 1596.875 679.29 1787.52 494.067 1920c-57.26-399.473 84.029-699.445 149.534-1018.165-111.811-185.11 13.44-557.816 249.036-466.108 289.92 113.054-230.174 661.384 133.044 733.327 379.257 74.993 515.012-572.16 279.982-807.303-339.727-339.502-1016.584-51.615-911.21 429.74 42.466 194.034-101.986 249.262-101.986 249.262C175.46 993.318 164.28 829.1 170.265 668.838 183.705 300.31 506.49 42.24 830.293 6.438c409.525-45.177 793.864 148.066 846.833 527.548 59.859 428.16-176.979 920.019-614.965 886.588-118.588-9.035-265.298-88.094-265.298-88.094', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconPinterestSolid;
}(_react.Component);

exports.default = IconPinterestSolid;