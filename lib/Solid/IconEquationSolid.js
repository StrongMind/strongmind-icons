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

var IconEquationSolid = function (_Component) {
  _inherits(IconEquationSolid, _Component);

  function IconEquationSolid() {
    _classCallCheck(this, IconEquationSolid);

    return _possibleConstructorReturn(this, (IconEquationSolid.__proto__ || Object.getPrototypeOf(IconEquationSolid)).apply(this, arguments));
  }

  _createClass(IconEquationSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconEquationSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M567.744 1350.826c39.456-85.786 70.857-190.249 94.206-313.617 23.345-123.139 35.017-253.627 35.017-391.351 0-25.446-.346-54.858-1.164-87.888-.812-33.147-1.979-61.278-3.496-84.036h-75.294c-42.61 0-76.814 7.47-102.73 22.758-25.683 15.174-46.928 35.249-63.856 59.877-13.658 19.492-24.515 44.588-31.984 75.165-7.59 30.581-12.84 63.73-16.342 99.443h-75.88c-2.335-23.927-4.668-47.505-6.066-70.846-1.64-23.344-2.338-49.954-2.338-79.718 0-28.831 5.137-57.775 15.525-86.72 10.508-28.832 28.014-57.195 52.065-85.203 21.01-25.68 49.493-47.149 85.799-64.539C507.392 326.634 547.783 318 592.024 318H1627v155.583h-271.643v833.826c0 51.003 15.178 91.503 45.293 121.733 30.352 30.113 73.544 45.286 129.926 45.286 11.325 0 24.75-.469 40.51-1.167 15.64-1.166 29.533-1.867 41.673-2.682v81.702c-37.939 13.538-75.88 24.977-113.584 34.314-37.821 9.337-84.867 14.004-141.25 14.004-76.466 0-133.9-24.743-172.067-73.998-38.298-49.37-57.434-116.482-57.434-201.455V473.703H810.902l2.335 80.884c.818 31.86 1.172 66.18 1.172 102.71 0 105.394-8.993 220.592-27.087 345.481-18.094 124.884-44.942 232.5-80.313 322.605-34.669 88.356-74.128 156.398-118.37 204.606-44.358 47.847-95.723 72.011-154.557 72.011-48.329 0-83.698-16.34-106.228-49.021-22.529-32.681-33.854-66.995-33.854-102.71 0-30.581 10.505-60.694 31.984-89.872 21.365-29.18 53-44.002 94.794-44.002 25.679 0 52.526 4.435 80.31 13.423 27.78 8.868 50.197 15.872 67.008 21.008h-.357.005z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconEquationSolid;
}(_react.Component);

exports.default = IconEquationSolid;