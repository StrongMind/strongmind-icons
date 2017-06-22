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

var IconEducatorsSolid = function (_Component) {
  _inherits(IconEducatorsSolid, _Component);

  function IconEducatorsSolid() {
    _classCallCheck(this, IconEducatorsSolid);

    return _possibleConstructorReturn(this, (IconEducatorsSolid.__proto__ || Object.getPrototypeOf(IconEducatorsSolid)).apply(this, arguments));
  }

  _createClass(IconEducatorsSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconEducatorsSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M0-.011h1920V1129.4h-338.824v-112.94h225.883V112.93H112.94v903.53h112.941v112.94H0V-.01zm451.765 847.07v-11.294c68.894-28.01 88.546-101.647 188.611-101.647 121.977 0 121.977 112.94 245.083 112.94 66.974 0 97.13-34.22 131.012-64.94v64.94c0 155.747-126.607 282.354-282.353 282.354s-282.353-126.607-282.353-282.353zM1471.849 714.24l-356.329 948.932c-174.268 10.39-448.941 17.957-631.002-48.113l38.4-106.165c130.334 47.435 337.807 53.873 529.807 41.675l132.593-354.635-60.424-15.812c-46.758-12.197-93.854-21.346-141.176-29.138 88.207-72.509 145.694-181.045 145.694-303.925V734.118c0-217.977-177.318-395.294-395.294-395.294-217.977 0-395.294 177.317-395.294 395.294v112.94c0 122.655 57.374 231.078 145.242 303.587-56.019 9.374-111.473 20.894-166.024 36.48-120.734 34.334-205.1 146.371-205.1 272.075v329.11l34.898 14.457C332.273 1879.454 535.115 1920 734.118 1920c180.254 0 348.65-15.925 474.127-44.725 50.371-11.407 90.917-46.983 108.65-95.096l31.849-87.304c14.343-39.19 7.567-81.995-18.41-114.522-12.988-16.49-29.816-28.913-48.565-36.48l295.793-787.878-105.713-39.755z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconEducatorsSolid;
}(_react.Component);

exports.default = IconEducatorsSolid;