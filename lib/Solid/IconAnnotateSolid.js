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

var IconAnnotateSolid = function (_Component) {
  _inherits(IconAnnotateSolid, _Component);

  function IconAnnotateSolid() {
    _classCallCheck(this, IconAnnotateSolid);

    return _possibleConstructorReturn(this, (IconAnnotateSolid.__proto__ || Object.getPrototypeOf(IconAnnotateSolid)).apply(this, arguments));
  }

  _createClass(IconAnnotateSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAnnotateSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'g',
          { fillRule: 'nonzero', stroke: 'none', strokeWidth: '1' },
          _react2.default.createElement('path', { d: 'M798.076 1354.24c-.24.368-.478.739-.711 1.113-23.718 42.918-79.06 105.035-112.941 101.647-33.883-3.388-44.048-27.106-72.283-96-36.141-89.224-94.87-206.682-190.87-197.647-120.847 10.165-179.577 225.882-199.906 320.753-6.55 31.188 13.424 61.78 44.611 68.33 31.188 6.549 61.78-13.425 68.33-44.612a484.518 484.518 0 0 1 97.13-225.883s30.493 10.165 77.929 127.624c47.435 117.459 99.388 161.506 169.411 166.023h9.036c112.94 0 196.517-143.435 205.553-160.376 10.037-16.097 10.996-35.284 4.266-51.575h339.697a87.85 87.85 0 0 0 61.496-26.355l169.411-172.872v642.708H0V113h1468.235v91.142L822.674 862.89a87.85 87.85 0 0 0-24.598 61.495v429.856zM225.882 677.707v112.941h338.824V677.706H225.882zm0-225.882v112.94h564.706v-112.94H225.882z' }),
          _react2.default.createElement('path', { d: 'M1903.059 468.765l-225.883-225.883a56.47 56.47 0 0 0-80.188 0L919.341 920.53a56.47 56.47 0 0 0-15.812 39.53v282.353h282.353a56.47 56.47 0 0 0 39.53-16.941l677.647-677.647c21.523-21.959 21.523-57.101 0-79.06zm-208.941 128.753l-145.694-145.694 89.223-89.224 145.694 145.694-89.223 89.224z' })
        )
      );
    }
  }]);

  return IconAnnotateSolid;
}(_react.Component);

exports.default = IconAnnotateSolid;