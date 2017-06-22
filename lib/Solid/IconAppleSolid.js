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

var IconAppleSolid = function (_Component) {
  _inherits(IconAppleSolid, _Component);

  function IconAppleSolid() {
    _classCallCheck(this, IconAppleSolid);

    return _possibleConstructorReturn(this, (IconAppleSolid.__proto__ || Object.getPrototypeOf(IconAppleSolid)).apply(this, arguments));
  }

  _createClass(IconAppleSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAppleSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1474.444 1018.923c2.494 290.908 249.98 387.499 252.815 388.973-2.268 6.575-39.566 137.857-130.489 273.448-78.565 117.111-159.965 233.655-288.3 236.036-126.18 2.494-166.767-76.298-311.087-76.298-144.206 0-189.214 73.917-308.706 78.792-123.913 4.762-218.237-126.52-297.37-243.178-161.892-238.87-285.578-674.665-119.491-968.86 82.42-146.133 229.8-238.643 389.879-241.024 121.646-2.267 236.603 83.78 310.974 83.78 74.37 0 213.815-103.393 360.63-88.315 61.446 2.608 233.881 25.282 344.644 190.462-8.843 5.895-205.88 122.78-203.5 366.184zm-211.786-717.472C1191.915 381.263 1076.164 443.39 962.68 435c-15.305-108.496 41.947-221.185 107.248-292.155C1142.939 63.034 1266.172 3.855 1367.75 0c13.038 110.536-34.69 221.525-105.093 301.45z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconAppleSolid;
}(_react.Component);

exports.default = IconAppleSolid;