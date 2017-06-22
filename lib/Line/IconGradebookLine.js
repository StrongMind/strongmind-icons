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

var IconGradebookLine = function (_Component) {
  _inherits(IconGradebookLine, _Component);

  function IconGradebookLine() {
    _classCallCheck(this, IconGradebookLine);

    return _possibleConstructorReturn(this, (IconGradebookLine.__proto__ || Object.getPrototypeOf(IconGradebookLine)).apply(this, arguments));
  }

  _createClass(IconGradebookLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconGradebookLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1694.176 1807.059H338.882v-112.941h56.47c31.173 0 56.472-25.3 56.472-56.47 0-31.173-25.3-56.472-56.471-56.472h-56.47v-338.823h56.47c31.172 0 56.47-25.299 56.47-56.47 0-31.172-25.298-56.471-56.47-56.471h-56.47V790.588h56.47c31.172 0 56.47-25.299 56.47-56.47 0-31.172-25.298-56.47-56.47-56.47h-56.47V338.823h56.47c31.172 0 56.47-25.3 56.47-56.471 0-31.172-25.298-56.47-56.47-56.47h-56.47V112.94h1355.293V1807.06zM225.941 0v225.882h-56.47c-31.172 0-56.471 25.3-56.471 56.47 0 31.173 25.299 56.472 56.47 56.472h56.471v338.823h-56.47c-31.172 0-56.471 25.299-56.471 56.47 0 31.172 25.299 56.471 56.47 56.471h56.471v338.824h-56.47c-31.172 0-56.471 25.299-56.471 56.47 0 31.172 25.299 56.47 56.47 56.47h56.471v338.824h-56.47c-31.172 0-56.471 25.3-56.471 56.471 0 31.172 25.299 56.47 56.47 56.47h56.471V1920h1581.177V0H225.94zm1242.353 734.118v508.235h-903.53v-903.53h621.177v112.942H677.706v677.647h677.647V734.118h112.941zM895.648 622.114l145.017 145.13 352.602-352.603 79.85 79.85-432.452 432.451-224.866-224.979 79.85-79.85z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconGradebookLine;
}(_react.Component);

exports.default = IconGradebookLine;