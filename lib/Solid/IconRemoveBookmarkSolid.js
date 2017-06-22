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

var IconRemoveBookmarkSolid = function (_Component) {
  _inherits(IconRemoveBookmarkSolid, _Component);

  function IconRemoveBookmarkSolid() {
    _classCallCheck(this, IconRemoveBookmarkSolid);

    return _possibleConstructorReturn(this, (IconRemoveBookmarkSolid.__proto__ || Object.getPrototypeOf(IconRemoveBookmarkSolid)).apply(this, arguments));
  }

  _createClass(IconRemoveBookmarkSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconRemoveBookmarkSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1261.963 920.14l-120.66 120.66L960.48 859.867l-180.934 180.935L658.886 920.14 839.82 739.205 658.886 558.27l120.66-120.547 180.935 180.935 180.821-180.935 120.661 120.547-180.934 180.935 180.934 180.935zM1415.377 0H505.586C411.422 0 335 76.536 335 170.586V1920l625.481-375.289L1585.963 1920V170.586C1585.963 76.536 1509.426 0 1415.377 0z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconRemoveBookmarkSolid;
}(_react.Component);

exports.default = IconRemoveBookmarkSolid;