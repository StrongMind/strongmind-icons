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

var IconMsWordSolid = function (_Component) {
  _inherits(IconMsWordSolid, _Component);

  function IconMsWordSolid() {
    _classCallCheck(this, IconMsWordSolid);

    return _possibleConstructorReturn(this, (IconMsWordSolid.__proto__ || Object.getPrototypeOf(IconMsWordSolid)).apply(this, arguments));
  }

  _createClass(IconMsWordSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMsWordSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1' },
            _react2.default.createElement('path', { d: 'M169-.011h1016.47v564.706h564.706v1355.294H169v-1920zm338.824 790.7H959.7V338.813H507.824V790.69zm0 225.77h903.529V903.52h-903.53v112.94zm0 225.883h677.647V1129.4H507.824v112.942zm0 225.995h790.588v-113.054H507.824v113.054z' }),
            _react2.default.createElement('path', { d: 'M620.765 677.647h225.882V451.765H620.765zM1298.4 451.81h434.937L1298.4 16.873z' })
          )
        )
      );
    }
  }]);

  return IconMsWordSolid;
}(_react.Component);

exports.default = IconMsWordSolid;