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

var IconTableLine = function (_Component) {
  _inherits(IconTableLine, _Component);

  function IconTableLine() {
    _classCallCheck(this, IconTableLine);

    return _possibleConstructorReturn(this, (IconTableLine.__proto__ || Object.getPrototypeOf(IconTableLine)).apply(this, arguments));
  }

  _createClass(IconTableLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconTableLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1800 600h-480V120h420c33 0 60 27 60 60v420zm-480 600V720h480v480h-480zm480 540c0 33-27 60-60 60h-420v-480h480v420zM720 600V120h480v480H720zm0 600V720h480v480H720zm0 600v-480h480v480H720zM600 600H120V180c0-33 27-60 60-60h420v480zm-480 600V720h480v480H120zm480 600H180c-33 0-60-27-60-60v-420h480v480zM1740 0H180C80.76 0 0 80.76 0 180v1560c0 99.24 80.76 180 180 180h1560c99.24 0 180-80.76 180-180V180c0-99.24-80.76-180-180-180z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconTableLine;
}(_react.Component);

exports.default = IconTableLine;