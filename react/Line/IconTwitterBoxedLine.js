(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["InstructureIconsLine"] = factory(require("react"));
	else
		root["InstructureIconsLine"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 432);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(11);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

function randomByte() {
    if (!crypto || !crypto.getRandomValues) {
        return Math.floor(Math.random() * 256) & 0x30;
    }
    var dest = new Uint8Array(1);
    crypto.getRandomValues(dest);
    return dest[0] & 0x30;
}

module.exports = randomByte;


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(10);

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTwitterBoxedLine;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(3);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTwitterBoxedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTwitterBoxedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1663.965 1840H256c-97.046 0-176-82.353-176-183.59V263.59C80 162.353 158.954 80 256 80h1407.965C1761.046 80 1840 162.353 1840 263.59v1392.82c0 101.237-78.954 183.59-176.035 183.59zM256 226.667c-19.43 0-35.2 16.573-35.2 36.923v1392.82c0 20.35 15.77 36.923 35.2 36.923h1407.965c19.43 0 35.235-16.573 35.235-36.923V263.59c0-20.35-15.805-36.923-35.235-36.923H256zM1450.646 622.96c-9.962-3.923-37.735 21.927-39.847 20.827 3.485-12.907 27.95-45.43 30.413-59.95 3.415-20.24-12.883-38.757-30.694-47.52-17.811-8.764-38.861-6.674-54.736 5.536-21.507 16.5-47.098 26.914-73.533 30.14-41.958-36.3-95.568-56.686-150.938-56.686h-.035c-127.389 1.393-230.947 107.726-235.382 238.81-157.59-24.2-283.114-177.724-284.451-179.41-11.23-14.044-28.442-21.414-45.83-19.874-17.495 1.577-33.16 11.954-41.889 27.794-44.915 81.4-18.515 172.626 5.914 234.08 0 0-39.319-3.667-42.487 29.883-4.47 47.337 6.724 108.68 84.234 180.877 0 0-23.126 12.43-20.134 34.943 7.779 58.777 56.812 100.247 101.728 131.193-68.042 22.514-137.984 10.414-138.864 10.267-24.359-4.583-48.612 8.8-58.608 32.413-9.997 23.614-3.204 51.297 16.508 66.99 104.228 83.05 228.519 101.42 318.208 101.42 67.479 0 115.35-10.413 120.244-11.513 421.414-104.097 459.852-487.997 462.21-595.283 54.983-54.34 86.17-94.747 92.823-120.157 5.984-22.953 6.477-46.347-14.854-54.78zm-563.834 661.173c-1.232.294-77.651 16.537-169.382 3.594 34.883-15.804 68.957-39.124 98.032-73.114 13.869-16.206 17.459-39.343 9.187-59.29-8.237-19.946-26.822-33.11-47.66-33.77-27.774-.843-53.47-11.11-73.92-28.233 1.689-.697 3.378-1.43 5.033-2.237 20.733-9.973 33.158-32.56 30.905-56.283-2.252-23.687-18.69-43.303-40.902-48.803-34.18-8.544-62.374-30.727-79.904-60.06 2.851-.22 5.702-.55 8.554-.954 20.803-3.153 37.945-18.663 43.824-39.673 5.878-21.01-.528-43.67-16.439-57.97-2.78-2.493-50.547-46.347-55.616-109.12 75.786 68.347 206.448 159.207 359.674 150.223 15.98-.916 30.694-9.24 40.163-22.696 9.504-13.42 12.742-30.544 8.8-46.714-2.71-11.33-4.083-22.916-4.083-34.833-.493-74.8 57.517-136.327 128.797-137.133 34.496 0 67.09 15.766 91.907 40.663 34.707 34.87 40.656 94.747 41.606 109.743 1.091 16.61 21.86 407.77-378.576 506.66z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _InlineSVG = __webpack_require__(4);

var _InlineSVG2 = _interopRequireDefault(_InlineSVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGIcon = function (_Component) {
  _inherits(SVGIcon, _Component);

  function SVGIcon() {
    _classCallCheck(this, SVGIcon);

    return _possibleConstructorReturn(this, (SVGIcon.__proto__ || Object.getPrototypeOf(SVGIcon)).apply(this, arguments));
  }

  _createClass(SVGIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['width', 'height', 'style']);

      return _react2.default.createElement(_InlineSVG2.default, _extends({}, props, {
        style: _extends({}, style, { fill: 'currentColor', width: width, height: height }),
        width: width,
        height: height
      }));
    }
  }]);

  return SVGIcon;
}(_react.Component);

SVGIcon.propTypes = _extends({}, _InlineSVG2.default.propTypes, {
  width: _react.PropTypes.string,
  height: _react.PropTypes.string
});
SVGIcon.defaultProps = {
  width: '1em',
  height: '1em'
};
exports.default = SVGIcon;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _shortid = __webpack_require__(5);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InlineSVG = function (_React$Component) {
  _inherits(InlineSVG, _React$Component);

  function InlineSVG(props) {
    _classCallCheck(this, InlineSVG);

    var _this = _possibleConstructorReturn(this, (InlineSVG.__proto__ || Object.getPrototypeOf(InlineSVG)).call(this));

    _this.titleId = _shortid2.default.generate();
    _this.descId = _shortid2.default.generate();
    return _this;
  }

  _createClass(InlineSVG, [{
    key: 'renderTitle',
    value: function renderTitle() {
      var title = this.props.title;

      return title ? _react2.default.createElement(
        'title',
        { id: this.titleId },
        title
      ) : null;
    }
  }, {
    key: 'renderDesc',
    value: function renderDesc(desc) {
      return desc ? _react2.default.createElement(
        'desc',
        { id: this.descId },
        desc
      ) : null;
    }
  }, {
    key: 'renderContent',
    value: function renderContent(children, src) {
      if (src) {
        return _react2.default.createElement('g', { role: 'presentation', dangerouslySetInnerHTML: { __html: clean(src) } });
      } else {
        return _react2.default.createElement(
          'g',
          { role: 'presentation' },
          children
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          desc = _props.desc,
          focusable = _props.focusable,
          children = _props.children,
          src = _props.src,
          props = _objectWithoutProperties(_props, ['title', 'desc', 'focusable', 'children', 'src']);

      return _react2.default.createElement(
        'svg',
        _extends({}, parseAttributes(src), props, {
          'aria-hidden': title ? null : 'true',
          'aria-labelledby': this.labelledBy,
          role: this.role,
          focusable: focusable }),
        this.renderTitle(),
        this.renderDesc(desc),
        this.renderContent(children, src)
      );
    }
  }, {
    key: 'role',
    get: function get() {
      if (this.props.title) {
        return 'img';
      } else {
        return 'presentation';
      }
    }
  }, {
    key: 'labelledBy',
    get: function get() {
      var ids = [];

      if (this.props.title) {
        ids.push(this.titleId);
      }

      if (this.props.desc) {
        ids.push(this.descId);
      }

      return ids.length > 0 ? ids.join(' ') : null;
    }
  }]);

  return InlineSVG;
}(_react2.default.Component);

InlineSVG.propTypes = {
  children: _react.PropTypes.node,
  src: _react.PropTypes.string,
  title: _react.PropTypes.string,
  desc: _react.PropTypes.string,
  focusable: _react.PropTypes.bool
};
InlineSVG.defaultProps = {
  focusable: false
};
exports.default = InlineSVG;


function camelizeAttrs(svg) {
  /* eslint-disable max-len */
  var pattern = /(fill-rule|clip-path|fill-opacity|font-family|font-size|marker-end|marker-mid|marker-start|stop-color|stop-opacity|stroke-width|stroke-linecap|stroke-dasharray|stroke-opacity|text-anchor|xlink:href)=/g;
  /* eslint-enable max-len */

  return svg.replace(pattern, function (line, attr) {
    return toCamelCase(attr) + '=';
  });
}

// remove outer svg elements
function clean(src) {
  var pattern = /<svg[^>]*>((.|[\n\r])*)<\/svg>/;
  var matches = pattern.exec(src);

  return camelizeAttrs(matches[1]);
}

function parseAttributes(src) {
  var attributes = {};
  var SVGAttributesRegExp = /<svg\s+([^>]*)\s*>/;
  var namesAndValuesRegExp = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g;

  if (typeof src === 'string') {
    var attributesMatches = SVGAttributesRegExp.exec(src);
    var attributesString = attributesMatches ? attributesMatches[1] : '';

    var match = namesAndValuesRegExp.exec(attributesString);

    while (match != null) {
      if (['xmlns', 'xmlns:xlink', 'version'].indexOf(match[1]) === -1) {
        attributes[match[1]] = match[2] || (match[3] ? match[3] : match[4] ? match[4] : match[5]) || match[1];
      }
      match = namesAndValuesRegExp.exec(attributesString);
    }
  }

  return attributes;
}

function toCamelCase(string) {
  return string.replace(/([-:]\w)/g, function ($1) {
    return $1.toUpperCase().replace('-', '').replace(':', '');
  });
}

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(213);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(8);


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(2);
var alphabet = __webpack_require__(0);

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}

module.exports = build;


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(0);

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(0);
var encode = __webpack_require__(2);
var decode = __webpack_require__(7);
var build = __webpack_require__(6);
var isValid = __webpack_require__(9);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(12) || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(0);

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ })

/******/ });
});