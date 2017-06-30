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

var IconQuizLine = function (_Component) {
  _inherits(IconQuizLine, _Component);

  function IconQuizLine() {
    _classCallCheck(this, IconQuizLine);

    return _possibleConstructorReturn(this, (IconQuizLine.__proto__ || Object.getPrototypeOf(IconQuizLine)).apply(this, arguments));
  }

  _createClass(IconQuizLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconQuizLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1' },
            _react2.default.createElement('path', { d: 'M0 1549.71l414.504-414.503 80.598 80.598-414.504 414.504L0 1549.71zm580.351-248.782l80.598 80.598-331.626 331.626-80.598-80.598 331.626-331.626zm-82.844 414.584l248.748-248.748 80.484 80.712-248.748 248.634-80.484-80.598zm1376.38-1601.848c1.823 3.648 180.005 372.438-176.587 729.03l-146.604 146.604-2.622 665.874-222.642 222.642-331.626-331.512-30.552-30.552-9.804-9.804-537.738-537.738-331.626-331.74 222.642-222.642 665.874-2.508L1119.32 264.6c356.478-356.478 725.268-178.296 729.03-176.472l17.1 8.436 8.436 17.1zm-439.585 1494.084l1.938-503.994-361.836 361.95 251.028 250.914 108.87-108.87zm-1189.02-971.28L496.31 887.61l361.836-361.836-503.994 1.824-108.87 108.87zm1371.42 125.628c256.956-256.956 187.986-511.176 162.564-579.69-69.084-25.992-321.366-95.304-579.348 162.792l-623.01 623.01 416.898 416.898 622.896-623.01z' }),
            _react2.default.createElement('path', { d: 'M1534.987 372.558c-51.072-1.368-131.67 12.768-213.294 94.392l-40.47 40.356 173.394 173.28 40.356-40.242c82.194-82.308 96.9-161.31 94.848-213.18l-2.166-52.554-52.668-2.052z' })
          )
        )
      );
    }
  }]);

  return IconQuizLine;
}(_react.Component);

exports.default = IconQuizLine;