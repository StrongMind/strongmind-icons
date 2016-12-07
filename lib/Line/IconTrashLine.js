'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconBase = require('../IconBase');

var _IconBase2 = _interopRequireDefault(_IconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconTrashLine = function (_Component) {
  _inherits(IconTrashLine, _Component);

  function IconTrashLine() {
    _classCallCheck(this, IconTrashLine);

    return _possibleConstructorReturn(this, (IconTrashLine.__proto__ || Object.getPrototypeOf(IconTrashLine)).apply(this, arguments));
  }

  _createClass(IconTrashLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconTrashLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M445 885v837c0 22 16 38 38 38h926c22 0 38-16 38-38V885l1.789-192.138-1003.679 1.231L445 885zm602 0h200v575c0 56-44 100-100 100s-100-44-100-100V885zm-400 0h200v575c0 56-44 100-100 100s-100-44-100-100V885zM1445 360h-200c0-110-90-200-200-200H845c-110 0-200 90-200 200H445c-110 0-200 90-200 200h1400c0-110-90-200-200-200' })
        )
      );
    }
  }]);

  return IconTrashLine;
}(_react.Component);

exports.default = IconTrashLine;