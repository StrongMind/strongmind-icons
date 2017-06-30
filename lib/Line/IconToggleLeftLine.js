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

var IconToggleLeftLine = function (_Component) {
  _inherits(IconToggleLeftLine, _Component);

  function IconToggleLeftLine() {
    _classCallCheck(this, IconToggleLeftLine);

    return _possibleConstructorReturn(this, (IconToggleLeftLine.__proto__ || Object.getPrototypeOf(IconToggleLeftLine)).apply(this, arguments));
  }

  _createClass(IconToggleLeftLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconToggleLeftLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M541.372 960.093l435.163-435.276 79.849 79.963-298.955 298.842h1162.616v112.828H757.43l298.955 298.956-79.85 79.85-435.162-435.163zm305.687 734.083c221.93 0 428.95-98.597 568.207-270.494l87.868 71.153c-160.828 198.438-399.925 312.283-656.075 312.283C379.934 1807.118 0 1427.184 0 960.058 0 492.935 379.934 113 847.059 113c256.15 0 495.247 113.845 656.075 312.282l-87.868 71.153c-139.257-171.896-346.278-270.494-568.207-270.494-404.781 0-734.118 329.337-734.118 734.118 0 404.781 329.337 734.117 734.118 734.117z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconToggleLeftLine;
}(_react.Component);

exports.default = IconToggleLeftLine;