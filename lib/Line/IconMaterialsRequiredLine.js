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

var IconMaterialsRequiredLine = function (_Component) {
  _inherits(IconMaterialsRequiredLine, _Component);

  function IconMaterialsRequiredLine() {
    _classCallCheck(this, IconMaterialsRequiredLine);

    return _possibleConstructorReturn(this, (IconMaterialsRequiredLine.__proto__ || Object.getPrototypeOf(IconMaterialsRequiredLine)).apply(this, arguments));
  }

  _createClass(IconMaterialsRequiredLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconMaterialsRequiredLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M740.133 1272.387l-4.266-4.693c-35.307-34.88-72.64-61.12-110.614-80.214 296-337.706 949.44-1005.76 1152.107-1013.973 6.613.32 13.653.32 22.507 9.173 3.306 3.307 3.413 11.734 3.306 16.32-7.893 200.214-676.906 856.107-1011.093 1150.294-14.187-25.28-31.147-50.774-51.947-76.907zm-18.88 277.76c-53.76 119.787-301.866 176-463.36 196.587 26.24-66.987 53.76-168.534 53.76-299.2 0-71.68 50.88-146.987 118.4-175.254 19.734-8.213 40.32-12.266 61.227-12.266 54.72 0 112.32 27.733 167.36 81.28 66.027 83.946 87.147 154.133 62.613 208.853zm-443.626-1369.6l102.72 102.72-137.92 138.027L138.96 317.827l138.667-137.28zm1632.106 22.72c1.814-48.853-17.706-79.253-40.213-101.76-16.747-16.853-48.213-36.907-96.427-34.56C1548.667 76.12 1036.987 586.734 733.2 911.96L317.84 496.707 455.76 358.68 778 680.92l75.413-75.413L315.6 67.587c-20.693-20.693-54.187-20.8-75.307-.213L25.893 279.64C15.76 289.667 10 303.214 10 317.507c0 14.187 5.653 27.84 15.68 37.76l634.987 634.987c-69.76 75.946-121.92 134.613-147.947 164.373-41.92-3.52-83.733 2.56-123.733 19.2-108.374 45.227-184 157.76-184 273.707 0 208.213-80.427 330.133-80.96 331.093l-61.44 89.387 108.266-5.974c55.36-2.986 543.68-36.373 647.68-268.16 19.52-43.52 23.787-89.92 14.294-138.88 56.533-50.026 204.053-182.186 373.013-346.133l508.8 508.693v137.92h-137.92l-437.76-437.653-75.413 75.413 469.013 468.907h288.747V1573.4l-539.414-539.306c295.467-292.8 620.8-654.08 627.84-830.827z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconMaterialsRequiredLine;
}(_react.Component);

exports.default = IconMaterialsRequiredLine;