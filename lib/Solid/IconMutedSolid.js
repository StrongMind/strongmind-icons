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

var IconMutedSolid = function (_Component) {
  _inherits(IconMutedSolid, _Component);

  function IconMutedSolid() {
    _classCallCheck(this, IconMutedSolid);

    return _possibleConstructorReturn(this, (IconMutedSolid.__proto__ || Object.getPrototypeOf(IconMutedSolid)).apply(this, arguments));
  }

  _createClass(IconMutedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMutedSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1594.413 20.183l86.513 72.62L212.691 1843.393l-86.513-72.621 159.021-189.628H.023V1468.2c59.745 0 118.136-24.056 159.924-65.957 41.901-41.788 65.958-100.066 65.958-159.925V847.025c0-385.694 299.181-702.155 677.647-731.181V-.034h112.941v115.765c76.687 5.76 151.68 22.927 223.51 52.292 57.036 24.169 109.102 54.211 155.86 88.884l198.55-236.724zm99.705 1222.17c0 124.235 101.647 225.882 225.882 225.882v112.941h-621.176C1298.824 1767.53 1146.353 1920 960 1920s-338.824-152.47-338.824-338.824v-48.564L1555.2 417.882l11.294 15.812c83.577 121.977 127.624 264.282 127.624 413.365v395.294z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMutedSolid;
}(_react.Component);

exports.default = IconMutedSolid;