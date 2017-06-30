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

var IconStudentViewSolid = function (_Component) {
  _inherits(IconStudentViewSolid, _Component);

  function IconStudentViewSolid() {
    _classCallCheck(this, IconStudentViewSolid);

    return _possibleConstructorReturn(this, (IconStudentViewSolid.__proto__ || Object.getPrototypeOf(IconStudentViewSolid)).apply(this, arguments));
  }

  _createClass(IconStudentViewSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconStudentViewSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M895.949 1273.174C892.288 1029.27 692.76 832 448 832c-107.904 0-205.824 39.936-283.264 103.808 24.064-185.088 53.888-394.112 70.016-503.552 7.936-64 62.464-112.256 127.104-112.256H512V192H361.856c-129.152 0-238.464 96.64-253.952 223.232C103.552 445.056 0 1148.8 0 1280c0 247.04 200.96 448 448 448 244.76 0 444.288-197.269 447.949-441.174v57.225h134.528c31.36 216.448 216.448 384 441.472 384 247.04 0 446.848-201.088 446.848-448 0-131.2-99.2-834.944-103.296-863.36-15.232-128-121.088-224.64-246.4-224.64h-161.152v128H1569.1c62.592 0 115.712 48.256 123.52 113.792 15.616 109.44 44.8 320.512 68.224 506.496-78.336-66.56-178.304-108.288-288.896-108.288-225.024 0-410.112 167.424-441.472 384H895.949v57.123z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconStudentViewSolid;
}(_react.Component);

exports.default = IconStudentViewSolid;