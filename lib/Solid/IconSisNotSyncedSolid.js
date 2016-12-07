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

var IconSisNotSyncedSolid = function (_Component) {
  _inherits(IconSisNotSyncedSolid, _Component);

  function IconSisNotSyncedSolid() {
    _classCallCheck(this, IconSisNotSyncedSolid);

    return _possibleConstructorReturn(this, (IconSisNotSyncedSolid.__proto__ || Object.getPrototypeOf(IconSisNotSyncedSolid)).apply(this, arguments));
  }

  _createClass(IconSisNotSyncedSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconSisNotSyncedSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M341.067 800c71.359-275.6 321.354-480 618.949-480 280.955 0 519.59 182.24 605.509 434.48L1360.009 960H1840V480l-151.437 151.44C1562.885 353.92 1283.93 160 960.016 160c-386.313 0-709.507 275.28-783.826 640h164.877zm1237.866 320c-71.359 275.6-321.354 480-618.949 480-280.875 0-519.59-182.24-605.509-434.48L559.991 960H80v480l151.437-151.44C357.115 1566.08 636.07 1760 959.984 1760c386.313 0 709.507-275.28 783.906-640h-164.957zm-237.516-418.56L1199.98 560 950.704 809.36 701.43 560 559.99 701.44l249.356 249.28L559.99 1200l141.438 141.44 249.275-249.28 249.276 249.28L1341.417 1200l-249.275-249.28 249.275-249.28z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconSisNotSyncedSolid;
}(_react.Component);

exports.default = IconSisNotSyncedSolid;