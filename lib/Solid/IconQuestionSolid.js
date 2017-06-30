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

var IconQuestionSolid = function (_Component) {
  _inherits(IconQuestionSolid, _Component);

  function IconQuestionSolid() {
    _classCallCheck(this, IconQuestionSolid);

    return _possibleConstructorReturn(this, (IconQuestionSolid.__proto__ || Object.getPrototypeOf(IconQuestionSolid)).apply(this, arguments));
  }

  _createClass(IconQuestionSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconQuestionSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1251.84 849.758c-45.515 77.139-121.186 133.948-207.586 156.085-13.779 3.614-27.783 14.795-27.783 31.962v91.595H903.529v-91.595c0-66.183 46.306-124.235 112.716-141.29 57.6-14.795 107.971-52.743 138.353-104.131 30.833-52.292 39.19-114.635 23.378-175.85-19.651-75.67-81.204-137.223-156.875-156.875-70.927-18.183-143.435-3.953-199.341 39.304-55.68 43.143-87.642 108.31-87.642 178.673H621.176c0-105.6 47.888-203.294 131.464-268.01 83.69-64.828 191.774-86.287 296.696-59.294 114.862 29.704 208.264 123.106 237.968 237.967 23.378 90.466 10.729 183.304-35.464 261.46zM960 1468.224c-62.23 0-112.941-50.71-112.941-112.941 0-62.23 50.71-112.941 112.941-112.941 62.23 0 112.941 50.71 112.941 112.94 0 62.231-50.71 112.942-112.941 112.942zM960-.011c-529.355 0-960 430.644-960 960 0 529.355 430.645 960 960 960 529.468 0 960-430.645 960-960 0-529.356-430.532-960-960-960', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconQuestionSolid;
}(_react.Component);

exports.default = IconQuestionSolid;