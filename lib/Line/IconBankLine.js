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

var IconBankLine = function (_Component) {
  _inherits(IconBankLine, _Component);

  function IconBankLine() {
    _classCallCheck(this, IconBankLine);

    return _possibleConstructorReturn(this, (IconBankLine.__proto__ || Object.getPrototypeOf(IconBankLine)).apply(this, arguments));
  }

  _createClass(IconBankLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconBankLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M561.273 1604.006h194.274c24.874 0 29.055-9.328 31.2-14.367l34.094-74.086c18.656-48.247 77.731-88.238 136.164-90.061 27.018-.75 83.306-.536 130.802-.214l53.18.214c53.178 0 96.815 28.52 129.515 84.7l40.1 70.548c5.896 10.721 17.582 22.193 32.914 22.193l183.767.751-54.465-233.622 37.096-19.192c115.471-59.612 194.275-190.629 183.446-304.706l-3.645-37.633 34.416-16.082c71.834-33.344 105.821-71.191 79.983-175.19-15.01-61.006-66.581-117.722-133.698-102.82l-38.92 8.685-19.62-34.738C1494.583 479.745 1325.29 399.012 1204.03 367.92c-193.953-49.748-367.856-4.824-431.864 35.167l-40.742 25.41-29.698-37.633c-63.9-81.162-167.363-90.168-248.847-54.572 30.235 50.713 56.61 111.825 71.62 168.22l11.257 42.244-39.026 19.513c-63.9 31.95-146.885 150.96-164.361 235.766l-3.646 17.798-13.83 11.901c-63.58 54.894-145.063 74.622-207.677 80.84v180.337c0 55.537 26.268 84.593 82.556 91.562 92.527 11.472 138.737 60.898 179.479 104.535 45.352 48.461 84.593 90.382 195.346 100.782l60.255 5.683-12.973 59.183c-7.183 33.022-30.77 97.78-50.605 149.35zm1101.209 107.537l-319.18-1.394c-52 0-100.568-29.699-126.407-77.41l-39.241-69.046c-18.012-30.986-30.664-30.986-36.668-30.986l-53.822-.214c-45.995-.214-100.568-.536-126.836.214-17.476.536-37.203 15.332-40.849 24.66l-34.952 76.23c-21.443 48.998-68.618 77.624-128.98 77.624H402.808l30.02-73.764c12.33-30.342 39.241-98.746 57.468-151.067-106.036-24.338-157.07-78.91-199.313-124.155-36.454-39.026-60.47-64.651-114.292-71.298C66.045 1277.32 0 1203.234 0 1092.91V808.146h53.608c71.834 0 135.734-17.262 178.62-47.711 24.767-89.418 95.744-204.353 177.12-265.465-20.692-58.755-51.034-112.148-75.158-143.026l-34.201-43.422 44.601-32.808c130.053-95.636 302.026-86.63 410.742 15.332 110.754-49.64 295.379-73.228 475.286-27.018 135.306 34.63 321.647 122.01 456.524 340.73 97.673-.429 192.558 71.834 221.078 186.662 32.379 130.481-1.609 220.864-106.68 281.655-2.358 133.912-83.413 272.542-205.853 351.88l66.795 286.588zM850.722 645.446l-52.964-93.17c148.171-84.271 322.29-84.807 465.529-1.394l-53.822 92.634c-111.719-64.758-242.414-64.114-358.743 1.93M750.519 853.498c0 59.183-48.033 107.215-107.216 107.215-59.183 0-107.215-48.032-107.215-107.215 0-59.183 48.032-107.216 107.215-107.216 59.183 0 107.216 48.033 107.216 107.216', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconBankLine;
}(_react.Component);

exports.default = IconBankLine;