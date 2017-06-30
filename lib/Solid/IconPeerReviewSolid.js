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

var IconPeerReviewSolid = function (_Component) {
  _inherits(IconPeerReviewSolid, _Component);

  function IconPeerReviewSolid() {
    _classCallCheck(this, IconPeerReviewSolid);

    return _possibleConstructorReturn(this, (IconPeerReviewSolid.__proto__ || Object.getPrototypeOf(IconPeerReviewSolid)).apply(this, arguments));
  }

  _createClass(IconPeerReviewSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconPeerReviewSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M1507.339 693h-120.64V572.36l225.386-225.493 120.747 120.64L1507.339 693zm389.013-341.44c28.48 28.48 28.48 74.773 0 103.253l-323.52 323.52c-14.08 13.867-32.213 21.334-51.52 21.334h-241.28v-241.28c0-19.307 7.467-37.547 21.013-51.307l323.84-323.84c28.48-28.373 74.774-28.48 103.147 0l168.32 168.32zM693.333 906.333c-146.986 0-266.666-119.68-266.666-266.666v-64c65.066-26.347 83.626-96 178.133-96 115.2 0 115.2 106.666 231.467 106.666 62.72 0 91.306-31.893 122.986-60.693.107 2.56.747 4.907.747 7.36v106.667c0 146.986-119.68 266.666-266.667 266.666zM1108.053 949c-57.066-11.947-114.666-20.693-172.48-27.627 79.574-68.586 131.094-168.746 131.094-281.706V533c0-205.867-167.467-373.333-373.334-373.333C487.467 159.667 320 327.133 320 533v106.667c0 112.746 51.2 212.693 130.56 281.173-57.6 7.04-114.987 16.213-171.733 28.053C117.333 982.92 0 1136.84 0 1314.973v204.907l21.653 16c128.64 94.933 340.587 210.667 619.947 223.787 17.173.746 34.133 1.173 50.987 1.173 317.013 0 555.413-138.987 672.32-224.853l21.76-16V1315.08c0-178.133-117.227-332.053-278.614-366.08', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconPeerReviewSolid;
}(_react.Component);

exports.default = IconPeerReviewSolid;