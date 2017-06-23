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

var IconPeerGradedSolid = function (_Component) {
  _inherits(IconPeerGradedSolid, _Component);

  function IconPeerGradedSolid() {
    _classCallCheck(this, IconPeerGradedSolid);

    return _possibleConstructorReturn(this, (IconPeerGradedSolid.__proto__ || Object.getPrototypeOf(IconPeerGradedSolid)).apply(this, arguments));
  }

  _createClass(IconPeerGradedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconPeerGradedSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement('path', { d: 'M1145.209 948.802c166.798 35.167 287.956 194.249 287.956 378.355v211.778l-22.49 16.536c-120.937 88.746-367.22 232.393-694.974 232.393-17.198 0-34.837-.44-52.476-1.212-288.838-13.56-507.892-133.174-640.846-231.291L0 1538.825v-211.778C0 1142.94 121.268 983.859 288.176 948.69c58.65-12.237 117.96-21.718 177.492-28.994-82.02-70.776-134.938-174.074-134.938-290.601V518.852C330.73 306.082 503.813 133 716.582 133c212.77 0 385.853 173.082 385.853 385.852v110.244c0 116.747-53.138 220.266-135.49 291.153 59.752 7.165 119.284 16.205 178.264 28.553zm-428.627-44.098c152.026 0 275.61-123.693 275.61-275.608V518.852c0-2.536-.662-4.96-.773-7.607-32.852 29.766-62.177 62.729-127.11 62.729-120.166 0-120.166-110.244-239.229-110.244-97.675 0-116.858 71.99-184.106 99.22v66.146c0 151.915 123.583 275.608 275.608 275.608zm1125.476-597.09l-353.771 353.772-157.428-157.428-77.942 77.942 235.37 235.37L1920 385.557l-77.942-77.942z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconPeerGradedSolid;
}(_react.Component);

exports.default = IconPeerGradedSolid;