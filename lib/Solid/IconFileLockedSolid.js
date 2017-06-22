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

var IconFileLockedSolid = function (_Component) {
  _inherits(IconFileLockedSolid, _Component);

  function IconFileLockedSolid() {
    _classCallCheck(this, IconFileLockedSolid);

    return _possibleConstructorReturn(this, (IconFileLockedSolid.__proto__ || Object.getPrototypeOf(IconFileLockedSolid)).apply(this, arguments));
  }

  _createClass(IconFileLockedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconFileLockedSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M225.882 507.765H1920v504.056c0 23.83-30.833 30.72-42.353 9.939-58.052-104.245-169.299-175.172-296.47-175.172-186.353 0-338.824 152.47-338.824 338.824h-67.765c-24.96 0-45.176 20.216-45.176 45.176v463.06c0 19.2 2.259 38.4 5.647 56.47H169.412C75.896 1750.118 0 1674.334 0 1580.706V56h764.612l225.882 338.824H225.882v112.94zm1468.236 790.588h-225.883v-112.941c0-62.23 50.71-112.941 112.941-112.941s112.942 50.71 112.942 112.94v112.942zm112.94-112.941c0-124.574-101.194-225.883-225.882-225.883-124.687 0-225.882 101.309-225.882 225.883v112.94h-112.941v395.295c0 93.402 76.01 169.412 169.412 169.412h338.823c93.403 0 169.412-76.01 169.412-169.412v-395.294h-112.941v-112.941z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconFileLockedSolid;
}(_react.Component);

exports.default = IconFileLockedSolid;