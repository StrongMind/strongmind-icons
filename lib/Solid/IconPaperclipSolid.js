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

var IconPaperclipSolid = function (_Component) {
  _inherits(IconPaperclipSolid, _Component);

  function IconPaperclipSolid() {
    _classCallCheck(this, IconPaperclipSolid);

    return _possibleConstructorReturn(this, (IconPaperclipSolid.__proto__ || Object.getPrototypeOf(IconPaperclipSolid)).apply(this, arguments));
  }

  _createClass(IconPaperclipSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconPaperclipSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1748.318 252.722c-229.016-229.016-601.528-228.91-830.438 0l-792.748 792.749C44.522 1126.187 0 1233.38 0 1347.409c0 114.135 44.522 221.33 125.132 301.939 161.432 161.432 442.658 161.432 603.983 0l717.371-717.264c103.885-103.992 103.885-273.218-.213-377.53-104.099-103.992-273.646-103.885-377.424.107l-603.983 603.983 151.076 150.97 603.77-603.877c20.926-20.713 54.878-20.927 75.591-.214 20.82 20.927 20.82 54.879.107 75.698L578.146 1498.38c-80.716 80.716-221.329 80.716-302.045 0-40.358-40.358-62.566-93.956-62.566-150.97 0-57.013 22.208-110.61 62.566-150.969l792.748-792.749c145.631-145.417 382.655-145.63 528.5 0 145.63 145.631 145.63 382.869 0 528.5l-754.953 755.06 150.969 150.969 754.953-755.06c228.91-228.91 228.91-601.422 0-830.438', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconPaperclipSolid;
}(_react.Component);

exports.default = IconPaperclipSolid;