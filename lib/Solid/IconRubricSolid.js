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

var IconRubricSolid = function (_Component) {
  _inherits(IconRubricSolid, _Component);

  function IconRubricSolid() {
    _classCallCheck(this, IconRubricSolid);

    return _possibleConstructorReturn(this, (IconRubricSolid.__proto__ || Object.getPrototypeOf(IconRubricSolid)).apply(this, arguments));
  }

  _createClass(IconRubricSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconBase2.default,
        _extends({}, this.props, {
          name: 'IconRubricSolid',
          viewBox: '0 0 1920 1920' }),
        _react2.default.createElement('path', { d: 'M720.008 759.976h-320v320.007h320V759.976zm-320 800.017h320v-320.007h-320v320.007zM1360 1074.543v645.454H240V599.972h580.96C807.76 548.852 800 495.33 800 439.97H80V1880h1440v-805.458c-26.24 3.28-52.88 5.44-80 5.44-27.12 0-53.76-2.16-80-5.44zm-159.992 165.443h-320v320.007h320v-320.007zM1840 382.887h-342.88L1360 40l-137.2 342.887H880l296.64 250.406-159.52 366.728L1360 773.296l342.8 226.725-159.44-366.728L1840 382.887z', stroke: 'none', strokeWidth: '1', fillRule: 'evenodd' })
      );
    }
  }]);

  return IconRubricSolid;
}(_react.Component);

exports.default = IconRubricSolid;