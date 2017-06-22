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

var IconGradebookSolid = function (_Component) {
  _inherits(IconGradebookSolid, _Component);

  function IconGradebookSolid() {
    _classCallCheck(this, IconGradebookSolid);

    return _possibleConstructorReturn(this, (IconGradebookSolid.__proto__ || Object.getPrototypeOf(IconGradebookSolid)).apply(this, arguments));
  }

  _createClass(IconGradebookSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconGradebookSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1468.294 1242.353h-903.53v-903.53h712.66l-112.942 112.942H677.706v677.647h677.647V756.706l112.941-112.941v598.588zm-2.259-754.447L1014.271 938.54 796.294 721.694l80.188-80.188 137.789 137.788 371.576-371.576 80.188 80.188zM225.941 0v225.882h-56.47c-31.624 0-56.471 24.847-56.471 56.47 0 31.624 24.847 56.472 56.47 56.472h56.471v338.823h-56.47c-31.624 0-56.471 24.847-56.471 56.47 0 31.624 24.847 56.471 56.47 56.471h56.471v338.824h-56.47c-31.624 0-56.471 24.847-56.471 56.47 0 31.624 24.847 56.47 56.47 56.47h56.471v338.824h-56.47c-31.624 0-56.471 24.848-56.471 56.471 0 31.624 24.847 56.47 56.47 56.47h56.471V1920h1581.177V0H225.94z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconGradebookSolid;
}(_react.Component);

exports.default = IconGradebookSolid;