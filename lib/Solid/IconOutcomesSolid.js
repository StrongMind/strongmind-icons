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

var IconOutcomesSolid = function (_Component) {
  _inherits(IconOutcomesSolid, _Component);

  function IconOutcomesSolid() {
    _classCallCheck(this, IconOutcomesSolid);

    return _possibleConstructorReturn(this, (IconOutcomesSolid.__proto__ || Object.getPrototypeOf(IconOutcomesSolid)).apply(this, arguments));
  }

  _createClass(IconOutcomesSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconOutcomesSolid',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M783.95 1057.053c0 44.077 35.757 79.994 79.994 79.994 44.236 0 79.993-35.917 79.993-79.994 0-44.237-35.757-79.994-79.993-79.994-44.237 0-79.994 35.757-79.994 79.994zM1777 257.112L1663.889 144l-336.534 336.535-223.422-223.423V817.07h559.956l-223.423-223.424L1777 257.112zm-1153.038 799.94c0-132.31 107.672-239.981 239.982-239.981V657.082c-220.543 0-399.97 179.427-399.97 399.97 0 220.545 179.427 399.972 399.97 399.972 220.542 0 399.968-179.427 399.968-399.971h-159.987c0 132.31-107.672 239.982-239.981 239.982-132.31 0-239.982-107.672-239.982-239.982zm239.982 559.96c-308.776 0-559.957-251.182-559.957-559.96 0-308.776 251.18-559.958 559.957-559.958V337.106C467.014 337.106 144 660.042 144 1057.053 144 1454.063 467.015 1777 863.944 1777c396.928 0 719.943-322.936 719.943-719.947H1423.9c0 308.777-251.18 559.959-559.956 559.959z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconOutcomesSolid;
}(_react.Component);

exports.default = IconOutcomesSolid;