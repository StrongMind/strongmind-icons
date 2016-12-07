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

var IconFilesPublicDomainLine = function (_Component) {
  _inherits(IconFilesPublicDomainLine, _Component);

  function IconFilesPublicDomainLine() {
    _classCallCheck(this, IconFilesPublicDomainLine);

    return _possibleConstructorReturn(this, (IconFilesPublicDomainLine.__proto__ || Object.getPrototypeOf(IconFilesPublicDomainLine)).apply(this, arguments));
  }

  _createClass(IconFilesPublicDomainLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconFilesPublicDomainLine',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement(
          'g',
          { stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' },
          _react2.default.createElement('path', { d: 'M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797' }),
          _react2.default.createElement('path', { d: 'M840.477 920.212c-11.424 12.593-28.506 18.792-51.274 18.792h-94.254V807.587l.368.417h91.07c47.475 0 71.199 21.647 71.199 65.56 0 18.704-5.686 34.055-17.11 46.648m-35.625-194.208H585.949v435h111v-140h86.595c35.095 0 65.46-5.131 91.044-14.881 25.637-9.803 44.845-22.517 57.65-37.925 12.805-15.462 21.838-30.918 27.045-46.327 5.207-15.41 7.81-31.716 7.81-48.56 0-98.11-54.116-147.307-162.242-147.307M1255.315 1035.471c-17.56 22.954-45.774 34.532-84.694 34.532h-63.672V817.416l-.177-.026 62.542.08c39.85 0 68.505 11.423 86.039 34.27 17.534 22.928 26.282 53.583 26.282 91.892 0 38.31-8.786 68.938-26.32 91.84m77.575-256.07c-39.903-35.494-94.95-53.399-165.086-53.399H996.949v434.734l.032.266h170.823c70.163 0 125.183-17.893 165.086-53.386 39.797-35.44 59.722-90.279 59.722-164.135 0-73.775-19.925-128.588-59.722-164.08' })
        )
      );
    }
  }]);

  return IconFilesPublicDomainLine;
}(_react.Component);

exports.default = IconFilesPublicDomainLine;