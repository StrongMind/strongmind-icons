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

var IconWordpressSolid = function (_Component) {
  _inherits(IconWordpressSolid, _Component);

  function IconWordpressSolid() {
    _classCallCheck(this, IconWordpressSolid);

    return _possibleConstructorReturn(this, (IconWordpressSolid.__proto__ || Object.getPrototypeOf(IconWordpressSolid)).apply(this, arguments));
  }

  _createClass(IconWordpressSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconWordpressSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1243.561 1811.41l-238.305-636.197-272.866 638.118c-103.229-2.598-163.087-64.828-163.087-64.828L162.6 471.59s-16.037-63.36-106.842-63.36H-.034l37.045-96.226h519.755v96.226s-51.614 41.562-39.53 99.162c12.198 57.6 220.236 887.266 220.236 887.266l200.584-443.972-93.064-293.647c-35.69-90.24-65.054-177.205-88.433-200.245-32.979-35.802-93.063-48.564-93.063-48.564v-96.226h640.376v96.226h-105.939s-55.793 11.18-60.65 93.176c-1.016 16.49 8.584 73.864 8.584 73.864l248.47 816.903s255.248-468.706 258.862-570.805c3.727-101.872-35.802-268.687-147.275-335.322-178.334-107.407-133.27-321.092 4.179-396.65 58.729-32.188 111.02-33.43 170.54-33.43 209.845 0 233.45 237.854 233.45 237.854 13.892 81.996 4.066 221.478-35.463 344.47-103.229 319.85-358.702 895.286-457.638 1114.391-79.51 78.946-177.43 58.73-177.43 58.73', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconWordpressSolid;
}(_react.Component);

exports.default = IconWordpressSolid;