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

var IconFlagLine = function (_Component) {
  _inherits(IconFlagLine, _Component);

  function IconFlagLine() {
    _classCallCheck(this, IconFlagLine);

    return _possibleConstructorReturn(this, (IconFlagLine.__proto__ || Object.getPrototypeOf(IconFlagLine)).apply(this, arguments));
  }

  _createClass(IconFlagLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconFlagLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1848.715 357.685c-13.891-15.586-35.35-22.137-55.793-17.167-419.802 105.035-630.324-19.087-833.844-139.03C756.46 82.333 547.52-40.66 168.94 103.905V0H56v1920h112.941V227.012c352.941-148.97 522.127-52.292 732.763 71.83 195.84 115.313 415.849 245.083 811.82 174.156-170.88 375.53-385.92 382.87-652.912 392.131-233.788 8.02-498.748 17.28-762.24 280.772l79.85 79.963c232.093-232.095 463.058-240 686.343-247.906 290.823-10.052 591.473-20.443 794.88-562.786 7.34-19.652 3.275-41.788-10.73-57.487', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconFlagLine;
}(_react.Component);

exports.default = IconFlagLine;