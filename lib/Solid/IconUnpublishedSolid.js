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

var IconUnpublishedSolid = function (_Component) {
  _inherits(IconUnpublishedSolid, _Component);

  function IconUnpublishedSolid() {
    _classCallCheck(this, IconUnpublishedSolid);

    return _possibleConstructorReturn(this, (IconUnpublishedSolid.__proto__ || Object.getPrototypeOf(IconUnpublishedSolid)).apply(this, arguments));
  }

  _createClass(IconUnpublishedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconUnpublishedSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1826.36 113l74.316 85.045L93.616 1779.22l-74.314-85.045 286.757-250.955C131.113 1402.562-.01 1246.14-.01 1058.995c0-217.863 177.317-395.294 395.294-395.294 20.894 0 41.223 2.824 61.553 5.986 25.863-256.263 240.226-457.75 503.153-457.75 188.95 0 359.83 104.922 447.247 267.783L1826.36 113zm93.629 889.525c0 249.6-202.165 451.764-451.765 451.764H644.883l192-174.945 796.235-696.96 10.165 3.5c168.282 70.024 276.706 233.676 276.706 416.64z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconUnpublishedSolid;
}(_react.Component);

exports.default = IconUnpublishedSolid;