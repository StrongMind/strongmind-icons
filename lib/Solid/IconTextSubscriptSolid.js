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

var IconTextSubscriptSolid = function (_Component) {
  _inherits(IconTextSubscriptSolid, _Component);

  function IconTextSubscriptSolid() {
    _classCallCheck(this, IconTextSubscriptSolid);

    return _possibleConstructorReturn(this, (IconTextSubscriptSolid.__proto__ || Object.getPrototypeOf(IconTextSubscriptSolid)).apply(this, arguments));
  }

  _createClass(IconTextSubscriptSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTextSubscriptSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M0 5h1178.283v294.57H736.427V1625.14H441.856V299.57H0V5zm1810.137 1457.256c-51.697 51.697-112.82 109.138-171.146 162.75h275.718v294.57h-589.141c-81.449 0-147.285-65.836-147.285-147.285v-64.363c0-42.713 18.558-83.217 50.666-111.2 2.21-2.063 231.09-200.898 372.926-342.734 10.752-10.752 27.837-30.93 21.798-45.51-5.007-12.226-21.798-25.334-40.356-25.334-53.906 0-118.123 60.24-140.51 89.402l-235.067-177.626c15.907-21.209 160.835-206.347 375.577-206.347 135.65 0 261.137 83.364 312.54 207.23 51.55 124.162 19.441 261.285-85.72 366.447z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconTextSubscriptSolid;
}(_react.Component);

exports.default = IconTextSubscriptSolid;