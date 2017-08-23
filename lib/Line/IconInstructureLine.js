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

var IconInstructureLine = function (_Component) {
  _inherits(IconInstructureLine, _Component);

  function IconInstructureLine() {
    _classCallCheck(this, IconInstructureLine);

    return _possibleConstructorReturn(this, (IconInstructureLine.__proto__ || Object.getPrototypeOf(IconInstructureLine)).apply(this, arguments));
  }

  _createClass(IconInstructureLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconInstructureLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M277.736 960c0 138.868-108.68 259.623-241.51 271.698C12.076 1141.132 0 1050.566 0 960c0-90.566 12.075-187.17 36.226-271.698 138.868 12.075 241.51 132.83 241.51 271.698zm163.019-84.528c46.671 0 84.528 37.856 84.528 84.528 0 46.672-37.857 84.528-84.528 84.528-46.672 0-84.529-37.856-84.529-84.528 0-46.672 37.857-84.528 84.529-84.528zm90.566 386.415c30.188-30.189 90.566-30.189 120.754 0 36.227 30.188 36.227 84.528 0 120.755-30.188 36.226-84.528 30.188-120.754 0-36.227-30.19-36.227-84.529 0-120.755zm-54.34 175.094c96.604 102.642 108.68 259.623 18.113 362.264-156.98-90.566-289.811-223.396-386.415-386.415 114.717-84.528 271.698-72.453 368.302 24.151zm54.34-911.698c30.188-30.189 84.528-30.189 120.754 0 30.19 30.189 36.227 84.528 0 120.755-30.188 36.226-84.528 30.188-120.754 0-36.227-30.189-36.227-84.529 0-120.755zm724.528 742.642c36.226-30.19 84.528-30.19 114.717 0 36.226 30.188 36.226 84.528 6.038 120.754 0 6.038-6.038 6.038-6.038 6.038-36.226 30.189-90.566 30.189-120.755-6.038-30.188-36.226-30.188-90.566 6.038-120.754zm132.83-615.85c-36.226 30.19-84.528 30.19-114.717 0-36.226-30.188-36.226-84.528-6.037-120.754 30.188-30.189 84.528-30.189 114.717 0 36.226 30.188 36.226 84.528 6.037 120.754zm48.302-175.094c-96.604-96.604-108.68-253.585-18.113-362.264 156.981 90.566 289.811 223.396 386.415 386.415-114.717 84.528-271.698 72.453-368.302-24.15zm-960 0c-96.604 96.604-253.585 108.68-362.264 24.151 90.566-163.019 223.396-295.849 386.415-386.415 84.528 108.68 78.49 265.66-24.15 362.264zm960 960c102.642-96.604 259.623-108.68 362.264-18.113-90.566 156.981-223.396 289.811-386.415 386.415-84.528-114.717-72.453-271.698 24.151-368.302zM960 356.226c42.264 0 84.528 36.227 84.528 78.491 0 48.302-36.226 90.566-84.528 90.566-48.302 0-84.528-36.226-84.528-84.528 0-48.302 36.226-84.529 84.528-84.529zm0-78.49c-138.868 0-259.623-102.642-277.736-241.51C772.83 12.076 863.396 0 960 0c96.604 0 187.17 12.075 277.736 36.226-18.113 132.83-138.868 241.51-277.736 241.51zm0 1116.981c42.264 0 78.49 36.226 84.528 84.528 0 48.302-36.226 90.566-84.528 90.566h-6.038c-48.302 0-84.528-42.264-84.528-90.566s42.264-84.528 90.566-84.528zm0 247.547c138.868 0 253.585 102.642 271.698 241.51C1147.17 1907.924 1050.566 1920 960 1920c-90.566 0-181.132-12.075-271.698-36.226 12.075-138.868 132.83-241.51 271.698-241.51zm519.245-772.83c48.302 0 84.529 42.264 84.529 84.528 0 48.302-36.227 84.529-84.529 84.529s-84.528-36.227-84.528-84.529 36.226-84.528 84.528-84.528zM1642.265 960c0-138.868 102.64-259.623 241.509-271.698C1907.924 772.83 1920 869.434 1920 960c0 90.566-12.075 181.132-36.226 271.698-132.83-12.075-241.51-132.83-241.51-271.698z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconInstructureLine;
}(_react.Component);

exports.default = IconInstructureLine;