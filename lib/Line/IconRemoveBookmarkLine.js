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

var IconRemoveBookmarkLine = function (_Component) {
  _inherits(IconRemoveBookmarkLine, _Component);

  function IconRemoveBookmarkLine() {
    _classCallCheck(this, IconRemoveBookmarkLine);

    return _possibleConstructorReturn(this, (IconRemoveBookmarkLine.__proto__ || Object.getPrototypeOf(IconRemoveBookmarkLine)).apply(this, arguments));
  }

  _createClass(IconRemoveBookmarkLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconRemoveBookmarkLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1415.377 0H505.586C411.536 0 335 76.536 335 170.586V1920l625.481-375.289L1585.963 1920V170.586C1585.963 76.536 1509.426 0 1415.377 0zm56.862 1719.164L960.48 1412.109l-511.757 307.055V170.586c0-31.388 25.474-56.862 56.862-56.862h909.79c31.389 0 56.863 25.474 56.863 56.862v1548.578zm-230.28-1181l-80.516-80.403-200.95 201.064-201.064-201.064-80.403 80.403L880.09 739.228l-201.064 200.95 80.403 80.403 201.064-200.95 200.95 200.95 80.516-80.403-201.064-200.95 201.064-201.064z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconRemoveBookmarkLine;
}(_react.Component);

exports.default = IconRemoveBookmarkLine;