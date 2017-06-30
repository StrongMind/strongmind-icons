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

var IconSisSyncedSolid = function (_Component) {
  _inherits(IconSisSyncedSolid, _Component);

  function IconSisSyncedSolid() {
    _classCallCheck(this, IconSisSyncedSolid);

    return _possibleConstructorReturn(this, (IconSisSyncedSolid.__proto__ || Object.getPrototypeOf(IconSisSyncedSolid)).apply(this, arguments));
  }

  _createClass(IconSisSyncedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconSisSyncedSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M921.93 1328.021l-304-304.106 150.827-150.827 153.174 153.28 336-336.107 150.826 150.934-486.826 486.826zM960 0c529.28 0 960 430.613 960 960s-430.72 960-960 960S0 1489.387 0 960c0-239.04 88.64-465.92 244.48-640H53.333V106.667H640v586.666H426.667v-254.08C291.733 577.387 213.333 762.987 213.333 960c0 411.627 334.934 746.667 746.667 746.667s746.667-335.04 746.667-746.667S1371.733 213.333 960 213.333V0z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconSisSyncedSolid;
}(_react.Component);

exports.default = IconSisSyncedSolid;