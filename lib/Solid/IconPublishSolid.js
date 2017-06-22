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

var IconPublishSolid = function (_Component) {
  _inherits(IconPublishSolid, _Component);

  function IconPublishSolid() {
    _classCallCheck(this, IconPublishSolid);

    return _possibleConstructorReturn(this, (IconPublishSolid.__proto__ || Object.getPrototypeOf(IconPublishSolid)).apply(this, arguments));
  }

  _createClass(IconPublishSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconPublishSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M903.53 1750.176v-338.823h112.94v338.823H903.53zm564.705-1242.352c249.149 0 451.765 202.729 451.765 451.764 0 249.036-202.616 451.765-451.765 451.765h-451.764v-371.915l185.9 186.014 79.963-79.963L960 823.27l-322.334 322.22 79.962 79.963 185.901-186.014v371.915H395.294C177.318 1411.353 0 1234.035 0 1016.059c0-217.977 177.318-395.294 395.294-395.294 20.894 0 41.337 2.71 61.553 5.986C482.597 370.374 697.073 169 960 169c221.816 0 408.847 143.661 478.08 342.212 10.165-.678 19.99-3.388 30.155-3.388z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPublishSolid;
}(_react.Component);

exports.default = IconPublishSolid;