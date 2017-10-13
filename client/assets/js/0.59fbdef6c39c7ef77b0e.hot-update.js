webpackHotUpdate(0,Array(287).concat([
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(52);

var _redux = __webpack_require__(41);

var _NavigationBar = __webpack_require__(31);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _DocumentForm = __webpack_require__(282);

var _DocumentForm2 = _interopRequireDefault(_DocumentForm);

var _SingleInput = __webpack_require__(78);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(79);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(77);

var _Select2 = _interopRequireDefault(_Select);

var _MenuSelect = __webpack_require__(521);

var _MenuSelect2 = _interopRequireDefault(_MenuSelect);

var _documentAction = __webpack_require__(76);

var documentActions = _interopRequireWildcard(_documentAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateDocument = function (_React$Component) {
  _inherits(CreateDocument, _React$Component);

  function CreateDocument(props) {
    _classCallCheck(this, CreateDocument);

    var _this = _possibleConstructorReturn(this, (CreateDocument.__proto__ || Object.getPrototypeOf(CreateDocument)).call(this, props));

    _this.state = {
      email: '',
      docTitle: '',
      docContent: '',
      access: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);
    return _this;
  }

  _createClass(CreateDocument, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        docTitle: event.target.value.docTitle,
        docContent: event.target.value.docContent,
        access: event.target.value.access
      });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave(event) {
      event.preventDefault();
      var doc = {
        title: event.target.docTitle.value,
        content: event.target.docContent.value
        // this.props.actions.createDocument(doc);
      };
    }
  }, {
    key: 'render',
    value: function render() {

      var documentData = {
        docTitle: this.state.docTitle,
        docContent: this.state.docContent,
        access: this.state.access
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_NavigationBar2.default, { history: this.props.history })
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'h3',
              null,
              'Add Document'
            ),
            _react2.default.createElement(_DocumentForm2.default, {
              selectedOption: this.state.access,
              documentData: documentData,
              onSave: this.onClickSave,
              onChange: this.handleChange
            })
          )
        )
      );
    }
  }]);

  return CreateDocument;
}(_react2.default.Component);

CreateDocument.propTypes = {
  actions: _react2.default.PropTypes.object.isRequired,
  documents: _react2.default.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    documents: state.documents
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(documentActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreateDocument);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ManageDocument.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ }),
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(403);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(438), __esModule: true };

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(429);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(427);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(382);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(382);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 356 */
/***/ (function(module, exports) {

module.exports = function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(402);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 359 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut: function easeOut(duration, property, delay, easeFunction) {
    easeFunction = easeFunction || this.easeOutFunction;

    if (property && Object.prototype.toString.call(property) === '[object Array]') {
      var transitions = '';
      for (var i = 0; i < property.length; i++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[i], delay, easeFunction);
      }

      return transitions;
    } else {
      return this.create(duration, property, delay, easeFunction);
    }
  },
  create: function create(duration, property, delay, easeFunction) {
    duration = duration || '450ms';
    property = property || 'all';
    delay = delay || '0ms';
    easeFunction = easeFunction || 'linear';

    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
  }
};

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(392)('wks');
var uid = __webpack_require__(379);
var Symbol = __webpack_require__(363).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(363);
var core = __webpack_require__(359);
var ctx = __webpack_require__(384);
var hide = __webpack_require__(371);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 363 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(369);
var IE8_DOM_DEFINE = __webpack_require__(406);
var toPrimitive = __webpack_require__(394);
var dP = Object.defineProperty;

exports.f = __webpack_require__(366) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var horizontal = _propTypes2.default.oneOf(['left', 'middle', 'right']);
var vertical = _propTypes2.default.oneOf(['top', 'center', 'bottom']);

exports.default = {

  corners: _propTypes2.default.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

  horizontal: horizontal,

  vertical: vertical,

  origin: _propTypes2.default.shape({
    horizontal: horizontal,
    vertical: vertical
  }),

  cornersAndCenter: _propTypes2.default.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

  stringOrNumber: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5])

};

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(370)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 367 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(407);
var defined = __webpack_require__(385);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(374);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 370 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(364);
var createDesc = __webpack_require__(376);
module.exports = __webpack_require__(366) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(412);
var enumBugKeys = __webpack_require__(386);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shallowEqual = __webpack_require__(55);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 375 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(385);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 378 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 379 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SvgIcon = __webpack_require__(493);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SvgIcon2.default;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _shouldUpdate = __webpack_require__(519);

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__(373);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _setDisplayName = __webpack_require__(425);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(426);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
    return !(0, _shallowEqual2.default)(props, nextProps);
  });

  if (process.env.NODE_ENV !== 'production') {
    return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

exports.default = pure;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(431);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(430);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 383 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(443);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 385 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 386 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 387 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(369);
var dPs = __webpack_require__(459);
var enumBugKeys = __webpack_require__(386);
var IE_PROTO = __webpack_require__(391)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(405)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(449).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 389 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(364).f;
var has = __webpack_require__(367);
var TAG = __webpack_require__(361)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(392)('keys');
var uid = __webpack_require__(379);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(363);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 393 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(374);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(363);
var core = __webpack_require__(359);
var LIBRARY = __webpack_require__(387);
var wksExt = __webpack_require__(396);
var defineProperty = __webpack_require__(364).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(361);


/***/ }),
/* 397 */
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Paper = __webpack_require__(488);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Paper2.default;

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  set: function set(style, key, value) {
    style[key] = value;
  }
};

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  once: function once(el, type, callback) {
    var typeArray = type ? type.split(' ') : [];
    var recursiveFunction = function recursiveFunction(event) {
      event.target.removeEventListener(event.type, recursiveFunction);
      return callback(event);
    };

    for (var i = typeArray.length - 1; i >= 0; i--) {
      this.on(el, typeArray[i], recursiveFunction);
    }
  },
  on: function on(el, type, callback) {
    if (el.addEventListener) {
      el.addEventListener(type, callback);
    } else {
      // IE8+ Support
      el.attachEvent('on' + type, function () {
        callback.call(el);
      });
    }
  },
  off: function off(el, type, callback) {
    if (el.removeEventListener) {
      el.removeEventListener(type, callback);
    } else {
      // IE8+ Support
      el.detachEvent('on' + type, callback);
    }
  },
  isKeyboard: function isKeyboard(event) {
    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
  }
};

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(434), __esModule: true };

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(435), __esModule: true };

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(437), __esModule: true };

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(401);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(374);
var document = __webpack_require__(363).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(366) && !__webpack_require__(370)(function () {
  return Object.defineProperty(__webpack_require__(405)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(383);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(387);
var $export = __webpack_require__(362);
var redefine = __webpack_require__(414);
var hide = __webpack_require__(371);
var has = __webpack_require__(367);
var Iterators = __webpack_require__(375);
var $iterCreate = __webpack_require__(453);
var setToStringTag = __webpack_require__(390);
var getPrototypeOf = __webpack_require__(411);
var ITERATOR = __webpack_require__(361)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(378);
var createDesc = __webpack_require__(376);
var toIObject = __webpack_require__(368);
var toPrimitive = __webpack_require__(394);
var has = __webpack_require__(367);
var IE8_DOM_DEFINE = __webpack_require__(406);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(366) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(412);
var hiddenKeys = __webpack_require__(386).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(367);
var toObject = __webpack_require__(377);
var IE_PROTO = __webpack_require__(391)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(367);
var toIObject = __webpack_require__(368);
var arrayIndexOf = __webpack_require__(445)(false);
var IE_PROTO = __webpack_require__(391)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(362);
var core = __webpack_require__(359);
var fails = __webpack_require__(370);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(371);


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(393);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(462)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(408)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _IconButton = __webpack_require__(483);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _IconButton2.default;

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Subheader = __webpack_require__(492);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var hasSubheader = false;

      var firstChild = _react.Children.toArray(children)[0];
      if ((0, _react.isValidElement)(firstChild) && firstChild.type === _Subheader2.default) {
        hasSubheader = true;
      }

      var styles = {
        root: {
          padding: (hasSubheader ? 0 : 8) + 'px 0px 8px 0px'
        }
      };

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        children
      );
    }
  }]);
  return List;
}(_react.Component);

List.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
List.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * These are usually `ListItem`s that are passed to
   * be part of the list.
   */
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = List;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toArray2 = __webpack_require__(404);

var _toArray3 = _interopRequireDefault(_toArray2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(373);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _ClickAwayListener = __webpack_require__(497);

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _keycode = __webpack_require__(397);

var _keycode2 = _interopRequireDefault(_keycode);

var _propTypes3 = __webpack_require__(365);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _List = __webpack_require__(418);

var _List2 = _interopRequireDefault(_List);

var _menuUtils = __webpack_require__(486);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var desktop = props.desktop,
      maxHeight = props.maxHeight,
      width = props.width;
  var muiTheme = context.muiTheme;


  var styles = {
    root: {
      // Nested div because the List scales x faster than it scales y
      zIndex: muiTheme.zIndex.menu,
      maxHeight: maxHeight,
      overflowY: maxHeight ? 'auto' : null
    },
    divider: {
      marginTop: 7,
      marginBottom: 8
    },
    list: {
      display: 'table-cell',
      paddingBottom: desktop ? 16 : 8,
      paddingTop: desktop ? 16 : 8,
      userSelect: 'none',
      width: width
    },
    selectedMenuItem: {
      color: muiTheme.menuItem.selectedTextColor
    }
  };

  return styles;
}

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu(props, context) {
    (0, _classCallCheck3.default)(this, Menu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props, context));

    _initialiseProps.call(_this);

    var filteredChildren = _this.getFilteredChildren(props.children);
    var selectedIndex = _this.getLastSelectedIndex(props, filteredChildren);

    var newFocusIndex = props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
    if (newFocusIndex !== -1 && props.onMenuItemFocusChange) {
      props.onMenuItemFocusChange(null, newFocusIndex);
    }
    _this.state = {
      focusIndex: newFocusIndex,
      isKeyboardFocused: props.initiallyKeyboardFocused,
      keyWidth: props.desktop ? 64 : 56
    };

    _this.hotKeyHolder = new _menuUtils.HotKeyHolder();
    return _this;
  }

  (0, _createClass3.default)(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoWidth) {
        this.setWidth();
      }
      this.setScollPosition();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var selectedIndex = void 0;
      var filteredChildren = this.getFilteredChildren(nextProps.children);

      if (this.props.multiple !== true) {
        selectedIndex = this.getLastSelectedIndex(nextProps, filteredChildren);
      } else {
        selectedIndex = this.state.focusIndex;
      }

      var newFocusIndex = nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
      if (newFocusIndex !== this.state.focusIndex && this.props.onMenuItemFocusChange) {
        this.props.onMenuItemFocusChange(null, newFocusIndex);
      }
      this.setState({
        focusIndex: newFocusIndex,
        keyWidth: nextProps.desktop ? 64 : 56
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoWidth) this.setWidth();
    }
  }, {
    key: 'getValueLink',


    // Do not use outside of this component, it will be removed once valueLink is deprecated
    value: function getValueLink(props) {
      return props.valueLink || {
        value: props.value,
        requestChange: props.onChange
      };
    }
  }, {
    key: 'setKeyboardFocused',
    value: function setKeyboardFocused(keyboardFocused) {
      this.setState({
        isKeyboardFocused: keyboardFocused
      });
    }
  }, {
    key: 'getFilteredChildren',
    value: function getFilteredChildren(children) {
      var filteredChildren = [];
      _react2.default.Children.forEach(children, function (child) {
        if (child) {
          filteredChildren.push(child);
        }
      });
      return filteredChildren;
    }
  }, {
    key: 'cloneMenuItem',
    value: function cloneMenuItem(child, childIndex, styles, index) {
      var _this2 = this;

      var childIsDisabled = child.props.disabled;

      var selectedChildStyles = {};
      if (!childIsDisabled) {
        var selected = this.isChildSelected(child, this.props);

        if (selected) {
          (0, _simpleAssign2.default)(selectedChildStyles, styles.selectedMenuItem, this.props.selectedMenuItemStyle);
        }
      }
      var mergedChildStyles = (0, _simpleAssign2.default)({}, child.props.style, this.props.menuItemStyle, selectedChildStyles);

      var extraProps = {
        desktop: this.props.desktop,
        style: mergedChildStyles
      };
      if (!childIsDisabled) {
        var isFocused = childIndex === this.state.focusIndex;
        var focusState = 'none';
        if (isFocused) {
          focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
        }

        (0, _simpleAssign2.default)(extraProps, {
          focusState: focusState,
          onClick: function onClick(event) {
            _this2.handleMenuItemTouchTap(event, child, index);
            if (child.props.onClick) child.props.onClick(event);
          },
          ref: isFocused ? 'focusedMenuItem' : null
        });
      }
      return _react2.default.cloneElement(child, extraProps);
    }
  }, {
    key: 'decrementKeyboardFocusIndex',
    value: function decrementKeyboardFocusIndex(event) {
      var index = this.state.focusIndex;

      index--;
      if (index < 0) index = 0;

      this.setFocusIndex(event, index, true);
    }
  }, {
    key: 'getMenuItemCount',
    value: function getMenuItemCount(filteredChildren) {
      var menuItemCount = 0;
      filteredChildren.forEach(function (child) {
        var childIsADivider = child.type && child.type.muiName === 'Divider';
        var childIsDisabled = child.props.disabled;
        if (!childIsADivider && !childIsDisabled) menuItemCount++;
      });
      return menuItemCount;
    }
  }, {
    key: 'getLastSelectedIndex',
    value: function getLastSelectedIndex(props, filteredChildren) {
      var _this3 = this;

      var selectedIndex = -1;
      var menuItemIndex = 0;

      filteredChildren.forEach(function (child) {
        var childIsADivider = child.type && child.type.muiName === 'Divider';

        if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
        if (!childIsADivider) menuItemIndex++;
      });

      return selectedIndex;
    }
  }, {
    key: 'setFocusIndexStartsWith',
    value: function setFocusIndexStartsWith(event, keys) {
      var foundIndex = -1;
      _react2.default.Children.forEach(this.props.children, function (child, index) {
        if (foundIndex >= 0) {
          return;
        }
        var primaryText = child.props.primaryText;

        if (typeof primaryText === 'string' && primaryText.substr(0, keys.length).toLowerCase() === keys.toLowerCase()) {
          foundIndex = index;
        }
      });
      if (foundIndex >= 0) {
        this.setFocusIndex(event, foundIndex, true);
        return true;
      }
      return false;
    }
  }, {
    key: 'handleMenuItemTouchTap',
    value: function handleMenuItemTouchTap(event, item, index) {
      var children = this.props.children;
      var multiple = this.props.multiple;
      var valueLink = this.getValueLink(this.props);
      var menuValue = valueLink.value;
      var itemValue = item.props.value;
      var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);

      this.setFocusIndex(event, focusIndex, false);

      if (multiple) {
        menuValue = menuValue || [];

        var itemIndex = menuValue.indexOf(itemValue);

        var _menuValue = menuValue,
            _menuValue2 = (0, _toArray3.default)(_menuValue),
            newMenuValue = _menuValue2.slice(0);

        if (itemIndex === -1) {
          newMenuValue.push(itemValue);
        } else {
          newMenuValue.splice(itemIndex, 1);
        }

        valueLink.requestChange(event, newMenuValue);
      } else if (!multiple && itemValue !== menuValue) {
        valueLink.requestChange(event, itemValue);
      }

      this.props.onItemTouchTap(event, item, index);
    }
  }, {
    key: 'incrementKeyboardFocusIndex',
    value: function incrementKeyboardFocusIndex(event, filteredChildren) {
      var index = this.state.focusIndex;
      var maxIndex = this.getMenuItemCount(filteredChildren) - 1;

      index++;
      if (index > maxIndex) index = maxIndex;

      this.setFocusIndex(event, index, true);
    }
  }, {
    key: 'isChildSelected',
    value: function isChildSelected(child, props) {
      var menuValue = this.getValueLink(props).value;
      var childValue = child.props.value;

      if (props.multiple) {
        return menuValue && menuValue.length && menuValue.indexOf(childValue) !== -1;
      } else {
        return child.props.hasOwnProperty('value') && menuValue === childValue;
      }
    }
  }, {
    key: 'setFocusIndex',
    value: function setFocusIndex(event, newIndex, isKeyboardFocused) {
      if (this.props.onMenuItemFocusChange) {
        // Do this even if `newIndex === this.state.focusIndex` to allow users
        // to detect up-arrow on the first MenuItem or down-arrow on the last.
        this.props.onMenuItemFocusChange(event, newIndex);
      }
      this.setState({
        focusIndex: newIndex,
        isKeyboardFocused: isKeyboardFocused
      });
    }
  }, {
    key: 'setScollPosition',
    value: function setScollPosition() {
      var desktop = this.props.desktop;
      var focusedMenuItem = this.refs.focusedMenuItem;
      var menuItemHeight = desktop ? 32 : 48;

      if (focusedMenuItem) {
        var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;

        // Make the focused item be the 2nd item in the list the user sees
        var scrollTop = selectedOffSet - menuItemHeight;
        if (scrollTop < menuItemHeight) scrollTop = 0;

        _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
      }
    }
  }, {
    key: 'cancelScrollEvent',
    value: function cancelScrollEvent(event) {
      event.stopPropagation();
      event.preventDefault();
      return false;
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var el = _reactDom2.default.findDOMNode(this);
      var listEl = _reactDom2.default.findDOMNode(this.refs.list);
      var elWidth = el.offsetWidth;
      var keyWidth = this.state.keyWidth;
      var minWidth = keyWidth * 1.5;
      var keyIncrements = elWidth / keyWidth;
      var newWidth = void 0;

      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
      newWidth = keyIncrements * keyWidth;

      if (newWidth < minWidth) newWidth = minWidth;

      el.style.width = newWidth + 'px';
      listEl.style.width = newWidth + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          autoWidth = _props.autoWidth,
          children = _props.children,
          desktop = _props.desktop,
          disableAutoFocus = _props.disableAutoFocus,
          initiallyKeyboardFocused = _props.initiallyKeyboardFocused,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          multiple = _props.multiple,
          onItemTouchTap = _props.onItemTouchTap,
          onEscKeyDown = _props.onEscKeyDown,
          onMenuItemFocusChange = _props.onMenuItemFocusChange,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          menuItemStyle = _props.menuItemStyle,
          style = _props.style,
          value = _props.value,
          valueLink = _props.valueLink,
          width = _props.width,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'children', 'desktop', 'disableAutoFocus', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'onItemTouchTap', 'onEscKeyDown', 'onMenuItemFocusChange', 'selectedMenuItemStyle', 'menuItemStyle', 'style', 'value', 'valueLink', 'width']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var mergedListStyles = (0, _simpleAssign2.default)(styles.list, listStyle);

      var filteredChildren = this.getFilteredChildren(children);

      var menuItemIndex = 0;
      var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
        var childIsDisabled = child.props.disabled;
        var childName = child.type ? child.type.muiName : '';
        var newChild = child;

        switch (childName) {
          case 'MenuItem':
            newChild = _this4.cloneMenuItem(child, menuItemIndex, styles, index);
            break;

          case 'Divider':
            newChild = _react2.default.cloneElement(child, {
              style: (0, _simpleAssign2.default)({}, styles.divider, child.props.style)
            });
            break;
        }

        if (childName === 'MenuItem' && !childIsDisabled) {
          menuItemIndex++;
        }

        return newChild;
      });

      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClickAway },
        _react2.default.createElement(
          'div',
          {
            onKeyDown: this.handleKeyDown,
            onWheel: this.handleOnWheel,
            style: prepareStyles(mergedRootStyles),
            ref: 'scrollContainer',
            role: 'presentation'
          },
          _react2.default.createElement(
            _List2.default,
            (0, _extends3.default)({}, other, {
              ref: 'list',
              style: mergedListStyles,
              role: 'menu'
            }),
            newChildren
          )
        )
      );
    }
  }]);
  return Menu;
}(_react.Component);

Menu.defaultProps = {
  autoWidth: true,
  desktop: false,
  disableAutoFocus: false,
  initiallyKeyboardFocused: false,
  maxHeight: null,
  multiple: false,
  onChange: function onChange() {},
  onEscKeyDown: function onEscKeyDown() {},
  onItemTouchTap: function onItemTouchTap() {},
  onKeyDown: function onKeyDown() {}
};
Menu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.handleClickAway = function (event) {
    if (event.defaultPrevented) {
      return;
    }

    var focusIndex = _this5.state.focusIndex;

    if (focusIndex < 0) {
      return;
    }

    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
    var focusedItem = filteredChildren[focusIndex];
    if (focusedItem.props.menuItems && focusedItem.props.menuItems.length > 0) {
      return;
    }

    _this5.setFocusIndex(event, -1, false);
  };

  this.handleKeyDown = function (event) {
    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
    var key = (0, _keycode2.default)(event);
    switch (key) {
      case 'down':
        event.preventDefault();
        _this5.incrementKeyboardFocusIndex(event, filteredChildren);
        break;
      case 'esc':
        _this5.props.onEscKeyDown(event);
        break;
      case 'tab':
        event.preventDefault();
        if (event.shiftKey) {
          _this5.decrementKeyboardFocusIndex(event);
        } else {
          _this5.incrementKeyboardFocusIndex(event, filteredChildren);
        }
        break;
      case 'up':
        event.preventDefault();
        _this5.decrementKeyboardFocusIndex(event);
        break;
      default:
        if (key && key.length === 1) {
          var hotKeys = _this5.hotKeyHolder.append(key);
          if (_this5.setFocusIndexStartsWith(event, hotKeys)) {
            event.preventDefault();
          }
        }
    }
    _this5.props.onKeyDown(event);
  };

  this.handleOnWheel = function (event) {
    var scrollContainer = _this5.refs.scrollContainer;
    // Only scroll lock if the the Menu is scrollable.
    if (scrollContainer.scrollHeight <= scrollContainer.clientHeight) return;

    var scrollTop = scrollContainer.scrollTop,
        scrollHeight = scrollContainer.scrollHeight,
        clientHeight = scrollContainer.clientHeight;

    var wheelDelta = event.deltaY;
    var isDeltaPositive = wheelDelta > 0;

    if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
      scrollContainer.scrollTop = scrollHeight;
      return _this5.cancelScrollEvent(event);
    } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
      scrollContainer.scrollTop = 0;
      return _this5.cancelScrollEvent(event);
    }
  };
};

Menu.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If true, the width of the menu will be set automatically
   * according to the widths of its children,
   * using proper keyline increments (64px for desktop,
   * 56px otherwise).
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The content of the menu. This is usually used to pass `MenuItem`
   * elements.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the menu item will render with compact desktop styles.
   */
  desktop: _propTypes2.default.bool,
  /**
   * If true, the menu will not be auto-focused.
   */
  disableAutoFocus: _propTypes2.default.bool,
  /**
   * If true, the menu will be keyboard-focused initially.
   */
  initiallyKeyboardFocused: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The maximum height of the menu in pixels. If specified,
   * the menu will be scrollable if it is taller than the provided
   * height.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item with `value` not
   * equal to the current `value` of the menu is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   * @param {any}  value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is focused and the *Esc* key
   * is pressed.
   *
   * @param {object} event `keydown` event targeting the menu.
   */
  onEscKeyDown: _propTypes2.default.func,
  /**
   * Callback function fired when a menu item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   * @param {object} menuItem The menu item.
   * @param {number} index The index of the menu item.
   */
  onItemTouchTap: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function fired when the focus on a `MenuItem` is changed.
   * There will be some "duplicate" changes reported if two different
   * focusing event happen, for example if a `MenuItem` is focused via
   * the keyboard and then it is clicked on.
   *
   * @param {object} event The event that triggered the focus change.
   * The event can be null since the focus can be changed for non-event
   * reasons such as prop changes.
   * @param {number} newFocusIndex The index of the newly focused
   * `MenuItem` or `-1` if focus was lost.
   */
  onMenuItemFocusChange: _propTypes2.default.func,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   * This component also supports valueLink.
   */
  value: _propTypes2.default.any,
  /**
   * ValueLink for the menu's `value`.
   */
  valueLink: _propTypes2.default.object,
  /**
   * The width of the menu. If not specified, the menu's width
   * will be set according to the widths of its children, using
   * proper keyline increments (64px for desktop, 56px otherwise).
   */
  width: _propTypes4.default.stringOrNumber
} : {};
exports.default = Menu;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(373);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Popover = __webpack_require__(421);

var _Popover2 = _interopRequireDefault(_Popover);

var _check = __webpack_require__(505);

var _check2 = _interopRequireDefault(_check);

var _ListItem = __webpack_require__(484);

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Menu = __webpack_require__(419);

var _Menu2 = _interopRequireDefault(_Menu);

var _propTypes3 = __webpack_require__(365);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nestedMenuStyle = {
  position: 'relative'
};

function getStyles(props, context) {
  var disabledColor = context.muiTheme.baseTheme.palette.disabledColor;
  var textColor = context.muiTheme.baseTheme.palette.textColor;
  var indent = props.desktop ? 64 : 72;
  var sidePadding = props.desktop ? 24 : 16;

  var styles = {
    root: {
      color: props.disabled ? disabledColor : textColor,
      cursor: props.disabled ? 'default' : 'pointer',
      minHeight: props.desktop ? '32px' : '48px',
      lineHeight: props.desktop ? '32px' : '48px',
      fontSize: props.desktop ? 15 : 16,
      whiteSpace: 'nowrap'
    },

    innerDivStyle: {
      paddingLeft: props.leftIcon || props.insetChildren || props.checked ? indent : sidePadding,
      paddingRight: props.rightIcon ? indent : sidePadding,
      paddingBottom: 0,
      paddingTop: 0
    },

    secondaryText: {
      float: 'right'
    },

    leftIconDesktop: {
      margin: 0,
      left: 24,
      top: 4
    },

    rightIconDesktop: {
      margin: 0,
      right: 24,
      top: 4,
      fill: context.muiTheme.menuItem.rightIconDesktopFill
    }
  };

  return styles;
}

var MenuItem = function (_Component) {
  (0, _inherits3.default)(MenuItem, _Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.cloneMenuItem = function (item) {
      return _react2.default.cloneElement(item, {
        onClick: function onClick(event) {
          if (!item.props.menuItems) {
            _this.handleRequestClose();
          }

          if (item.props.onClick) {
            item.props.onClick(event);
          }
        }
      });
    }, _this.handleTouchTap = function (event) {
      event.preventDefault();

      _this.setState({
        open: true,
        anchorEl: _reactDom2.default.findDOMNode(_this)
      });

      if (_this.props.onClick) {
        _this.props.onClick(event);
      }
    }, _this.handleRequestClose = function () {
      _this.setState({
        open: false,
        anchorEl: null
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MenuItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.applyFocusState();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.open && nextProps.focusState === 'none') {
        this.handleRequestClose();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.applyFocusState();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.state.open) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: 'applyFocusState',
    value: function applyFocusState() {
      this.refs.listItem.applyFocusState(this.props.focusState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          children = _props.children,
          desktop = _props.desktop,
          disabled = _props.disabled,
          focusState = _props.focusState,
          innerDivStyle = _props.innerDivStyle,
          insetChildren = _props.insetChildren,
          leftIcon = _props.leftIcon,
          menuItems = _props.menuItems,
          rightIcon = _props.rightIcon,
          secondaryText = _props.secondaryText,
          style = _props.style,
          animation = _props.animation,
          anchorOrigin = _props.anchorOrigin,
          targetOrigin = _props.targetOrigin,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'animation', 'anchorOrigin', 'targetOrigin', 'value']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var mergedInnerDivStyles = (0, _simpleAssign2.default)(styles.innerDivStyle, innerDivStyle);

      // Left Icon
      var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
      if (leftIconElement) {
        var mergedLeftIconStyles = desktop ? (0, _simpleAssign2.default)(styles.leftIconDesktop, leftIconElement.props.style) : leftIconElement.props.style;
        leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
      }

      // Right Icon
      var rightIconElement = void 0;
      if (rightIcon) {
        var mergedRightIconStyles = desktop ? (0, _simpleAssign2.default)(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
        rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
      }

      // Secondary Text
      var secondaryTextElement = void 0;
      if (secondaryText) {
        var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
        var mergedSecondaryTextStyles = secondaryTextIsAnElement ? (0, _simpleAssign2.default)(styles.secondaryText, secondaryText.props.style) : null;

        secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.secondaryText) },
          secondaryText
        );
      }
      var childMenuPopover = void 0;
      if (menuItems) {
        childMenuPopover = _react2.default.createElement(
          _Popover2.default,
          {
            animation: animation,
            anchorOrigin: anchorOrigin,
            anchorEl: this.state.anchorEl,
            open: this.state.open,
            targetOrigin: targetOrigin,
            useLayerForClickAway: false,
            onRequestClose: this.handleRequestClose
          },
          _react2.default.createElement(
            _Menu2.default,
            { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
            _react2.default.Children.map(menuItems, this.cloneMenuItem)
          )
        );
        other.onClick = this.handleTouchTap;
      }

      return _react2.default.createElement(
        _ListItem2.default,
        (0, _extends3.default)({}, other, {
          disabled: disabled,
          hoverColor: this.context.muiTheme.menuItem.hoverColor,
          innerDivStyle: mergedInnerDivStyles,
          insetChildren: insetChildren,
          leftIcon: leftIconElement,
          ref: 'listItem',
          rightIcon: rightIconElement,
          role: 'menuitem',
          style: mergedRootStyles
        }),
        children,
        secondaryTextElement,
        childMenuPopover
      );
    }
  }]);
  return MenuItem;
}(_react.Component);

MenuItem.muiName = 'MenuItem';
MenuItem.defaultProps = {
  anchorOrigin: { horizontal: 'right', vertical: 'top' },
  checked: false,
  desktop: false,
  disabled: false,
  focusState: 'none',
  insetChildren: false,
  targetOrigin: { horizontal: 'left', vertical: 'top' }
};
MenuItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
MenuItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Location of the anchor for the popover of nested `MenuItem`
   * elements.
   * Options:
   * horizontal: [left, middle, right]
   * vertical: [top, center, bottom].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * If true, a left check mark will be rendered.
   */
  checked: _propTypes2.default.bool,
  /**
   * Elements passed as children to the underlying `ListItem`.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   * If true, the menu item will render with compact desktop
   * styles.
   */
  desktop: _propTypes2.default.bool,
  /**
   * If true, the menu item will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The focus state of the menu item. This prop is used to set the focus
   * state of the underlying `ListItem`.
   */
  focusState: _propTypes2.default.oneOf(['none', 'focused', 'keyboard-focused']),
  /**
   * Override the inline-styles of the inner div.
   */
  innerDivStyle: _propTypes2.default.object,
  /**
   * If true, the children will be indented.
   * This is only needed when there is no `leftIcon`.
   */
  insetChildren: _propTypes2.default.bool,
  /**
   * The `SvgIcon` or `FontIcon` to be displayed on the left side.
   */
  leftIcon: _propTypes2.default.element,
  /**
   * `MenuItem` elements to nest within the menu item.
   */
  menuItems: _propTypes2.default.node,
  /**
   * Callback function fired when the menu item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   */
  onClick: _propTypes2.default.func,
  /**
   * Can be used to render primary text within the menu item.
   */
  primaryText: _propTypes2.default.node,
  /**
   * The `SvgIcon` or `FontIcon` to be displayed on the right side.
   */
  rightIcon: _propTypes2.default.element,
  /**
   * Can be used to render secondary text within the menu item.
   */
  secondaryText: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Location on the popover of nested `MenuItem` elements that will attach
   * to the anchor's origin.
   * Options:
   * horizontal: [left, middle, right]
   * vertical: [top, center, bottom].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * The value of the menu item.
   */
  value: _propTypes2.default.any
} : {};
exports.default = MenuItem;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = __webpack_require__(511);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _RenderToLayer = __webpack_require__(499);

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _propTypes3 = __webpack_require__(365);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = __webpack_require__(398);

var _Paper2 = _interopRequireDefault(_Paper);

var _lodash = __webpack_require__(478);

var _lodash2 = _interopRequireDefault(_lodash);

var _PopoverAnimationDefault = __webpack_require__(489);

var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    display: 'none'
  }
};

var Popover = function (_Component) {
  (0, _inherits3.default)(Popover, _Component);

  function Popover(props, context) {
    (0, _classCallCheck3.default)(this, Popover);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call(this, props, context));

    _this.timeout = null;

    _this.renderLayer = function () {
      var _this$props = _this.props,
          animated = _this$props.animated,
          animation = _this$props.animation,
          anchorEl = _this$props.anchorEl,
          anchorOrigin = _this$props.anchorOrigin,
          autoCloseWhenOffScreen = _this$props.autoCloseWhenOffScreen,
          canAutoPosition = _this$props.canAutoPosition,
          children = _this$props.children,
          onRequestClose = _this$props.onRequestClose,
          style = _this$props.style,
          targetOrigin = _this$props.targetOrigin,
          useLayerForClickAway = _this$props.useLayerForClickAway,
          scrollableContainer = _this$props.scrollableContainer,
          other = (0, _objectWithoutProperties3.default)(_this$props, ['animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway', 'scrollableContainer']);


      var styleRoot = style;

      if (!animated) {
        styleRoot = {
          position: 'fixed',
          zIndex: _this.context.muiTheme.zIndex.popover
        };

        if (!_this.state.open) {
          return null;
        }

        return _react2.default.createElement(
          _Paper2.default,
          (0, _extends3.default)({ style: (0, _simpleAssign2.default)(styleRoot, style) }, other),
          children
        );
      }

      var Animation = animation || _PopoverAnimationDefault2.default;

      return _react2.default.createElement(
        Animation,
        (0, _extends3.default)({
          targetOrigin: targetOrigin,
          style: styleRoot
        }, other, {
          open: _this.state.open && !_this.state.closing
        }),
        children
      );
    };

    _this.componentClickAway = function () {
      _this.requestClose('clickAway');
    };

    _this.setPlacement = function (scrolling) {
      if (!_this.state.open) {
        return;
      }

      if (!_this.popoverRefs.layer.getLayer()) {
        return;
      }

      var targetEl = _this.popoverRefs.layer.getLayer().children[0];
      if (!targetEl) {
        return;
      }

      var _this$props2 = _this.props,
          targetOrigin = _this$props2.targetOrigin,
          anchorOrigin = _this$props2.anchorOrigin;

      var anchorEl = _this.props.anchorEl || _this.anchorEl;

      var anchor = _this.getAnchorPosition(anchorEl);
      var target = _this.getTargetPosition(targetEl);

      var targetPosition = {
        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
      };

      if (scrolling && _this.props.autoCloseWhenOffScreen) {
        _this.autoCloseWhenOffScreen(anchor);
      }

      if (_this.props.canAutoPosition) {
        target = _this.getTargetPosition(targetEl); // update as height may have changed
        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
      }

      targetEl.style.top = targetPosition.top + 'px';
      targetEl.style.left = targetPosition.left + 'px';
      targetEl.style.maxHeight = window.innerHeight + 'px';
    };

    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 50);

    _this.popoverRefs = {};

    _this.state = {
      open: props.open,
      closing: false
    };
    return _this;
  }

  (0, _createClass3.default)(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.placementTimeout = setTimeout(this.setPlacement);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.open === this.props.open) {
        return;
      }

      if (nextProps.open) {
        clearTimeout(this.timeout);
        this.timeout = null;
        this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
        this.setState({
          open: true,
          closing: false
        });
      } else {
        if (nextProps.animated) {
          if (this.timeout !== null) return;
          this.setState({ closing: true });
          this.timeout = setTimeout(function () {
            _this2.setState({
              open: false
            }, function () {
              _this2.timeout = null;
            });
          }, 500);
        } else {
          this.setState({
            open: false
          });
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      clearTimeout(this.placementTimeout);
      this.placementTimeout = setTimeout(this.setPlacement);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
      this.handleScroll.cancel();

      if (this.placementTimeout) {
        clearTimeout(this.placementTimeout);
        this.placementTimeout = null;
      }

      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    }
  }, {
    key: 'requestClose',
    value: function requestClose(reason) {
      if (this.props.onRequestClose) {
        this.props.onRequestClose(reason);
      }
    }
  }, {
    key: 'getAnchorPosition',
    value: function getAnchorPosition(el) {
      if (!el) {
        el = _reactDom2.default.findDOMNode(this);
      }

      var rect = el.getBoundingClientRect();
      var a = {
        top: rect.top,
        left: rect.left,
        width: el.offsetWidth,
        height: el.offsetHeight
      };

      a.right = rect.right || a.left + a.width;
      a.bottom = rect.bottom || a.top + a.height;
      a.middle = a.left + (a.right - a.left) / 2;
      a.center = a.top + (a.bottom - a.top) / 2;

      return a;
    }
  }, {
    key: 'getTargetPosition',
    value: function getTargetPosition(targetEl) {
      return {
        top: 0,
        center: targetEl.offsetHeight / 2,
        bottom: targetEl.offsetHeight,
        left: 0,
        middle: targetEl.offsetWidth / 2,
        right: targetEl.offsetWidth
      };
    }
  }, {
    key: 'autoCloseWhenOffScreen',
    value: function autoCloseWhenOffScreen(anchorPosition) {
      if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
        this.requestClose('offScreen');
      }
    }
  }, {
    key: 'getOverlapMode',
    value: function getOverlapMode(anchor, target, median) {
      if ([anchor, target].indexOf(median) >= 0) return 'auto';
      if (anchor === target) return 'inclusive';
      return 'exclusive';
    }
  }, {
    key: 'getPositions',
    value: function getPositions(anchor, target) {
      var a = (0, _extends3.default)({}, anchor);
      var t = (0, _extends3.default)({}, target);

      var positions = {
        x: ['left', 'right'].filter(function (p) {
          return p !== t.horizontal;
        }),
        y: ['top', 'bottom'].filter(function (p) {
          return p !== t.vertical;
        })
      };

      var overlap = {
        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
      };

      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

      if (overlap.y !== 'auto') {
        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
        if (overlap.y === 'inclusive') {
          t.vertical = t.vertical;
        }
      }

      if (overlap.x !== 'auto') {
        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
        if (overlap.y === 'inclusive') {
          t.horizontal = t.horizontal;
        }
      }

      return {
        positions: positions,
        anchorPos: a
      };
    }
  }, {
    key: 'applyAutoPositionIfNeeded',
    value: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
      var _getPositions = this.getPositions(anchorOrigin, targetOrigin),
          positions = _getPositions.positions,
          anchorPos = _getPositions.anchorPos;

      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
        var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
        if (newTop + target.bottom <= window.innerHeight) {
          targetPosition.top = Math.max(0, newTop);
        } else {
          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
          if (newTop + target.bottom <= window.innerHeight) {
            targetPosition.top = Math.max(0, newTop);
          }
        }
      }

      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
        var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
        if (newLeft + target.right <= window.innerWidth) {
          targetPosition.left = Math.max(0, newLeft);
        } else {
          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
          if (newLeft + target.right <= window.innerWidth) {
            targetPosition.left = Math.max(0, newLeft);
          }
        }
      }

      return targetPosition;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(_reactEventListener2.default, {
          target: this.props.scrollableContainer,
          onScroll: this.handleScroll,
          onResize: this.handleResize
        }),
        _react2.default.createElement(_RenderToLayer2.default, {
          ref: function ref(_ref) {
            return _this3.popoverRefs.layer = _ref;
          },
          open: this.state.open,
          componentClickAway: this.componentClickAway,
          useLayerForClickAway: this.props.useLayerForClickAway,
          render: this.renderLayer
        })
      );
    }
  }]);
  return Popover;
}(_react.Component);

Popover.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  animated: true,
  autoCloseWhenOffScreen: true,
  canAutoPosition: true,
  onRequestClose: function onRequestClose() {},
  open: false,
  scrollableContainer: 'window',
  style: {
    overflowY: 'auto'
  },
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  useLayerForClickAway: true,
  zDepth: 1
};
Popover.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Popover.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * This is the DOM element that will be used to set the position of the
   * popover.
   */
  anchorEl: _propTypes2.default.object,
  /**
   * This is the point on the anchor where the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it is added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * If true, the popover will hide when the anchor is scrolled off the screen.
   */
  autoCloseWhenOffScreen: _propTypes2.default.bool,
  /**
   * If true, the popover (potentially) ignores `targetOrigin`
   * and `anchorOrigin` to make itself fit on screen,
   * which is useful for mobile devices.
   */
  canAutoPosition: _propTypes2.default.bool,
  /**
   * The content of the popover.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Callback function fired when the popover is requested to be closed.
   *
   * @param {string} reason The reason for the close request. Possibles values
   * are 'clickAway' and 'offScreen'.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * If true, the popover is visible.
   */
  open: _propTypes2.default.bool,
  /**
   * Represents the parent scrollable container.
   * It can be an element or a string like `window`.
   */
  scrollableContainer: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will render on top of an invisible
   * layer, which will prevent clicks to the underlying
   * elements, and trigger an `onRequestClose('clickAway')` call.
   */
  useLayerForClickAway: _propTypes2.default.bool,
  /**
   * The zDepth of the popover.
   */
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = Popover;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _events = __webpack_require__(400);

var _events2 = _interopRequireDefault(_events);

var _keycode = __webpack_require__(397);

var _keycode2 = _interopRequireDefault(_keycode);

var _FocusRipple = __webpack_require__(498);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__(503);

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleInjected = false;
var listening = false;
var tabPressed = false;

function injectStyle() {
  if (!styleInjected) {
    // Remove inner padding and border in Firefox 4+.
    var style = document.createElement('style');
    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';

    document.body.appendChild(style);
    styleInjected = true;
  }
}

function listenForTabPresses() {
  if (!listening) {
    _events2.default.on(window, 'keydown', function (event) {
      tabPressed = (0, _keycode2.default)(event) === 'tab';
    });
    listening = true;
  }
}

var EnhancedButton = function (_Component) {
  (0, _inherits3.default)(EnhancedButton, _Component);

  function EnhancedButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedButton.__proto__ || (0, _getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleKeyDown = function (event) {
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
          _this.handleTouchTap(event);
        }
        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
          _this.removeKeyboardFocus(event);
        }
      }
      _this.props.onKeyDown(event);
    }, _this.handleKeyUp = function (event) {
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
          _this.handleTouchTap(event);
        }
      }
      _this.props.onKeyUp(event);
    }, _this.handleBlur = function (event) {
      _this.cancelFocusTimeout();
      _this.removeKeyboardFocus(event);
      _this.props.onBlur(event);
    }, _this.handleFocus = function (event) {
      if (event) event.persist();
      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
        // setTimeout is needed because the focus event fires first
        // Wait so that we can capture if this was a keyboard focus
        // or touch focus
        _this.focusTimeout = setTimeout(function () {
          if (tabPressed) {
            _this.setKeyboardFocus(event);
            tabPressed = false;
          }
        }, 150);

        _this.props.onFocus(event);
      }
    }, _this.handleTouchTap = function (event) {
      _this.cancelFocusTimeout();
      if (!_this.props.disabled) {
        tabPressed = false;
        _this.removeKeyboardFocus(event);
        _this.props.onClick(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          disabled = _props.disabled,
          disableKeyboardFocus = _props.disableKeyboardFocus,
          keyboardFocused = _props.keyboardFocused;

      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
        this.setState({ isKeyboardFocused: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      injectStyle();
      listenForTabPresses();
      if (this.state.isKeyboardFocused) {
        this.button.focus();
        this.props.onKeyboardFocus(null, true);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
        this.setState({ isKeyboardFocused: false });
        if (nextProps.onKeyboardFocus) {
          nextProps.onKeyboardFocus(null, false);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
      }
    }
  }, {
    key: 'isKeyboardFocused',
    value: function isKeyboardFocused() {
      return this.state.isKeyboardFocused;
    }
  }, {
    key: 'removeKeyboardFocus',
    value: function removeKeyboardFocus(event) {
      if (this.state.isKeyboardFocused) {
        this.setState({ isKeyboardFocused: false });
        this.props.onKeyboardFocus(event, false);
      }
    }
  }, {
    key: 'setKeyboardFocus',
    value: function setKeyboardFocus(event) {
      if (!this.state.isKeyboardFocused) {
        this.setState({ isKeyboardFocused: true });
        this.props.onKeyboardFocus(event, true);
      }
    }
  }, {
    key: 'cancelFocusTimeout',
    value: function cancelFocusTimeout() {
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
        this.focusTimeout = null;
      }
    }
  }, {
    key: 'createButtonChildren',
    value: function createButtonChildren() {
      var _props2 = this.props,
          centerRipple = _props2.centerRipple,
          children = _props2.children,
          disabled = _props2.disabled,
          disableFocusRipple = _props2.disableFocusRipple,
          disableKeyboardFocus = _props2.disableKeyboardFocus,
          disableTouchRipple = _props2.disableTouchRipple,
          focusRippleColor = _props2.focusRippleColor,
          focusRippleOpacity = _props2.focusRippleOpacity,
          touchRippleColor = _props2.touchRippleColor,
          touchRippleOpacity = _props2.touchRippleOpacity;
      var isKeyboardFocused = this.state.isKeyboardFocused;

      // Focus Ripple

      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
        color: focusRippleColor,
        opacity: focusRippleOpacity,
        show: isKeyboardFocused,
        style: {
          overflow: 'hidden'
        },
        key: 'focusRipple'
      }) : undefined;

      // Touch Ripple
      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
        _TouchRipple2.default,
        {
          centerRipple: centerRipple,
          color: touchRippleColor,
          opacity: touchRippleOpacity,
          key: 'touchRipple'
        },
        children
      ) : undefined;

      return [focusRipple, touchRipple, touchRipple ? undefined : children];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          centerRipple = _props3.centerRipple,
          children = _props3.children,
          containerElement = _props3.containerElement,
          disabled = _props3.disabled,
          disableFocusRipple = _props3.disableFocusRipple,
          disableKeyboardFocus = _props3.disableKeyboardFocus,
          disableTouchRipple = _props3.disableTouchRipple,
          focusRippleColor = _props3.focusRippleColor,
          focusRippleOpacity = _props3.focusRippleOpacity,
          href = _props3.href,
          keyboardFocused = _props3.keyboardFocused,
          touchRippleColor = _props3.touchRippleColor,
          touchRippleOpacity = _props3.touchRippleOpacity,
          onBlur = _props3.onBlur,
          onClick = _props3.onClick,
          onFocus = _props3.onFocus,
          onKeyUp = _props3.onKeyUp,
          onKeyDown = _props3.onKeyDown,
          onKeyboardFocus = _props3.onKeyboardFocus,
          style = _props3.style,
          tabIndex = _props3.tabIndex,
          type = _props3.type,
          other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'style', 'tabIndex', 'type']);
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          enhancedButton = _context$muiTheme.enhancedButton;


      var mergedStyles = (0, _simpleAssign2.default)({
        border: 10,
        boxSizing: 'border-box',
        display: 'inline-block',
        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
        cursor: disabled ? 'default' : 'pointer',
        textDecoration: 'none',
        margin: 0,
        padding: 0,
        outline: 'none',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        position: 'relative', // This is needed so that ripples do not bleed past border radius.
        verticalAlign: href ? 'middle' : null
      }, style);

      // Passing both background:none & backgroundColor can break due to object iteration order
      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
        mergedStyles.background = 'none';
      }

      if (disabled && href) {
        return _react2.default.createElement(
          'span',
          (0, _extends3.default)({}, other, {
            style: mergedStyles
          }),
          children
        );
      }

      var buttonProps = (0, _extends3.default)({}, other, {
        style: prepareStyles(mergedStyles),
        ref: function ref(node) {
          return _this2.button = node;
        },
        disabled: disabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyUp: this.handleKeyUp,
        onKeyDown: this.handleKeyDown,
        onClick: this.handleTouchTap,
        tabIndex: disabled || disableKeyboardFocus ? -1 : tabIndex
      });

      if (href) buttonProps.href = href;

      var buttonChildren = this.createButtonChildren();

      if (_react2.default.isValidElement(containerElement)) {
        return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
      }

      if (!href && containerElement === 'button') {
        buttonProps.type = type;
      }

      return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
    }
  }]);
  return EnhancedButton;
}(_react.Component);

EnhancedButton.defaultProps = {
  containerElement: 'button',
  onBlur: function onBlur() {},
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onKeyUp: function onKeyUp() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  tabIndex: 0,
  type: 'button'
};
EnhancedButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
EnhancedButton.propTypes = process.env.NODE_ENV !== "production" ? {
  centerRipple: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  disableFocusRipple: _propTypes2.default.bool,
  disableKeyboardFocus: _propTypes2.default.bool,
  disableTouchRipple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  focusRippleColor: _propTypes2.default.string,
  focusRippleOpacity: _propTypes2.default.number,
  href: _propTypes2.default.string,
  keyboardFocused: _propTypes2.default.bool,
  onBlur: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyboardFocus: _propTypes2.default.func,
  style: _propTypes2.default.object,
  tabIndex: _propTypes2.default.number,
  touchRippleColor: _propTypes2.default.string,
  touchRippleOpacity: _propTypes2.default.number,
  type: _propTypes2.default.string
} : {};
exports.default = EnhancedButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isDescendant: function isDescendant(parent, child) {
    var node = child.parentNode;

    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }

    return false;
  },
  offset: function offset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    };
  }
};

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(433);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(20);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(513);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setStatic = __webpack_require__(518);

var _setStatic2 = _interopRequireDefault(_setStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getDisplayName = __webpack_require__(515);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(436), __esModule: true };

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(439), __esModule: true };

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(440), __esModule: true };

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(441), __esModule: true };

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(442), __esModule: true };

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(401);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 433 */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(416);
__webpack_require__(465);
module.exports = __webpack_require__(359).Array.from;


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(467);
module.exports = __webpack_require__(359).Object.assign;


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(468);
var $Object = __webpack_require__(359).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(469);
var $Object = __webpack_require__(359).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(470);
module.exports = __webpack_require__(359).Object.getPrototypeOf;


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(471);
module.exports = __webpack_require__(359).Object.keys;


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(472);
module.exports = __webpack_require__(359).Object.setPrototypeOf;


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(474);
__webpack_require__(473);
__webpack_require__(475);
__webpack_require__(476);
module.exports = __webpack_require__(359).Symbol;


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(416);
__webpack_require__(477);
module.exports = __webpack_require__(396).f('iterator');


/***/ }),
/* 443 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 444 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(368);
var toLength = __webpack_require__(415);
var toAbsoluteIndex = __webpack_require__(463);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(383);
var TAG = __webpack_require__(361)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(364);
var createDesc = __webpack_require__(376);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(372);
var gOPS = __webpack_require__(389);
var pIE = __webpack_require__(378);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(363).document;
module.exports = document && document.documentElement;


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(375);
var ITERATOR = __webpack_require__(361)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(383);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(369);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(388);
var descriptor = __webpack_require__(376);
var setToStringTag = __webpack_require__(390);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(371)(IteratorPrototype, __webpack_require__(361)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(361)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 455 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(372);
var toIObject = __webpack_require__(368);
module.exports = function (object, el) {
  var O = toIObject(object);
  var keys = getKeys(O);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) if (O[key = keys[index++]] === el) return key;
};


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(379)('meta');
var isObject = __webpack_require__(374);
var has = __webpack_require__(367);
var setDesc = __webpack_require__(364).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(370)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(372);
var gOPS = __webpack_require__(389);
var pIE = __webpack_require__(378);
var toObject = __webpack_require__(377);
var IObject = __webpack_require__(407);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(370)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(364);
var anObject = __webpack_require__(369);
var getKeys = __webpack_require__(372);

module.exports = __webpack_require__(366) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(368);
var gOPN = __webpack_require__(410).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(374);
var anObject = __webpack_require__(369);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(384)(Function.call, __webpack_require__(409).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(393);
var defined = __webpack_require__(385);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(393);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(446);
var ITERATOR = __webpack_require__(361)('iterator');
var Iterators = __webpack_require__(375);
module.exports = __webpack_require__(359).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(384);
var $export = __webpack_require__(362);
var toObject = __webpack_require__(377);
var call = __webpack_require__(452);
var isArrayIter = __webpack_require__(450);
var toLength = __webpack_require__(415);
var createProperty = __webpack_require__(447);
var getIterFn = __webpack_require__(464);

$export($export.S + $export.F * !__webpack_require__(454)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(444);
var step = __webpack_require__(455);
var Iterators = __webpack_require__(375);
var toIObject = __webpack_require__(368);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(408)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(362);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(458) });


/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(362);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(388) });


/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(362);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(366), 'Object', { defineProperty: __webpack_require__(364).f });


/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(377);
var $getPrototypeOf = __webpack_require__(411);

__webpack_require__(413)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(377);
var $keys = __webpack_require__(372);

__webpack_require__(413)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(362);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(461).set });


/***/ }),
/* 473 */
/***/ (function(module, exports) {



/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(363);
var has = __webpack_require__(367);
var DESCRIPTORS = __webpack_require__(366);
var $export = __webpack_require__(362);
var redefine = __webpack_require__(414);
var META = __webpack_require__(457).KEY;
var $fails = __webpack_require__(370);
var shared = __webpack_require__(392);
var setToStringTag = __webpack_require__(390);
var uid = __webpack_require__(379);
var wks = __webpack_require__(361);
var wksExt = __webpack_require__(396);
var wksDefine = __webpack_require__(395);
var keyOf = __webpack_require__(456);
var enumKeys = __webpack_require__(448);
var isArray = __webpack_require__(451);
var anObject = __webpack_require__(369);
var toIObject = __webpack_require__(368);
var toPrimitive = __webpack_require__(394);
var createDesc = __webpack_require__(376);
var _create = __webpack_require__(388);
var gOPNExt = __webpack_require__(460);
var $GOPD = __webpack_require__(409);
var $DP = __webpack_require__(364);
var $keys = __webpack_require__(372);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(410).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(378).f = $propertyIsEnumerable;
  __webpack_require__(389).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(387)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(371)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(395)('asyncIterator');


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(395)('observable');


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(466);
var global = __webpack_require__(363);
var hide = __webpack_require__(371);
var Iterators = __webpack_require__(375);
var TO_STRING_TAG = __webpack_require__(361)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

var _arrowDropDown = __webpack_require__(504);

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _Menu = __webpack_require__(419);

var _Menu2 = _interopRequireDefault(_Menu);

var _ClearFix = __webpack_require__(496);

var _ClearFix2 = _interopRequireDefault(_ClearFix);

var _Popover = __webpack_require__(421);

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationVertical = __webpack_require__(490);

var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);

var _keycode = __webpack_require__(397);

var _keycode2 = _interopRequireDefault(_keycode);

var _events = __webpack_require__(400);

var _events2 = _interopRequireDefault(_events);

var _IconButton = __webpack_require__(417);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _propTypes3 = __webpack_require__(365);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var disabled = props.disabled;

  var spacing = context.muiTheme.baseTheme.spacing;
  var palette = context.muiTheme.baseTheme.palette;
  var accentColor = context.muiTheme.dropDownMenu.accentColor;
  return {
    control: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      height: '100%',
      position: 'relative',
      width: '100%'
    },
    icon: {
      fill: accentColor,
      position: 'absolute',
      right: spacing.desktopGutterLess,
      top: (spacing.iconSize - 24) / 2 + spacing.desktopGutterMini / 2
    },
    iconChildren: {
      fill: 'inherit'
    },
    label: {
      color: disabled ? palette.disabledColor : palette.textColor,
      height: spacing.desktopToolbarHeight + 'px',
      lineHeight: spacing.desktopToolbarHeight + 'px',
      overflow: 'hidden',
      opacity: 1,
      position: 'relative',
      paddingLeft: spacing.desktopGutter,
      paddingRight: spacing.iconSize * 2 + spacing.desktopGutterMini,
      textOverflow: 'ellipsis',
      top: 0,
      whiteSpace: 'nowrap'
    },
    labelWhenOpen: {
      opacity: 0,
      top: spacing.desktopToolbarHeight / 8
    },
    root: {
      display: 'inline-block',
      fontSize: spacing.desktopDropDownMenuFontSize,
      height: spacing.desktopSubheaderHeight,
      fontFamily: context.muiTheme.baseTheme.fontFamily,
      outline: 'none',
      position: 'relative',
      transition: _transitions2.default.easeOut()
    },
    rootWhenOpen: {
      opacity: 1
    },
    underline: {
      borderTop: 'solid 1px ' + accentColor,
      bottom: 1,
      left: 0,
      margin: '-1px ' + spacing.desktopGutter + 'px',
      right: 0,
      position: 'absolute'
    }
  };
}

var DropDownMenu = function (_Component) {
  (0, _inherits3.default)(DropDownMenu, _Component);

  function DropDownMenu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DropDownMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DropDownMenu.__proto__ || (0, _getPrototypeOf2.default)(DropDownMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.rootNode = undefined, _this.arrowNode = undefined, _this.handleTouchTapControl = function (event) {
      event.preventDefault();
      if (!_this.props.disabled) {
        _this.setState({
          open: !_this.state.open,
          anchorEl: _this.rootNode
        });
      }
    }, _this.handleRequestCloseMenu = function () {
      _this.close(false);
    }, _this.handleEscKeyDownMenu = function () {
      _this.close(true);
    }, _this.handleKeyDown = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'up':
        case 'down':
        case 'space':
        case 'enter':
          event.preventDefault();
          _this.setState({
            open: true,
            anchorEl: _this.rootNode
          });
          break;
      }
    }, _this.handleItemTouchTap = function (event, child, index) {
      if (_this.props.multiple) {
        if (!_this.state.open) {
          _this.setState({ open: true });
        }
      } else {
        event.persist();
        _this.setState({
          open: false
        }, function () {
          if (_this.props.onChange) {
            _this.props.onChange(event, index, child.props.value);
          }

          _this.close(_events2.default.isKeyboard(event));
        });
      }
    }, _this.handleChange = function (event, value) {
      if (_this.props.multiple && _this.props.onChange) {
        _this.props.onChange(event, undefined, value);
      }
    }, _this.close = function (isKeyboard) {
      _this.setState({
        open: false
      }, function () {
        if (_this.props.onClose) {
          _this.props.onClose();
        }

        if (isKeyboard) {
          var dropArrow = _this.arrowNode;
          var dropNode = _reactDom2.default.findDOMNode(dropArrow);
          dropNode.focus();
          dropArrow.setKeyboardFocus(true);
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // The nested styles for drop-down-menu are modified by toolbar and possibly
  // other user components, so it will give full access to its js styles rather
  // than just the parent.


  (0, _createClass3.default)(DropDownMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoWidth) {
        this.setWidth();
      }
      if (this.props.openImmediately) {
        // TODO: Temporary fix to make openImmediately work with popover.
        /* eslint-disable react/no-did-mount-set-state */
        setTimeout(function () {
          return _this2.setState({
            open: true,
            anchorEl: _this2.rootNode
          });
        }, 0);
        /* eslint-enable react/no-did-mount-set-state */
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      if (this.props.autoWidth) {
        this.setWidth();
      }
    }
  }, {
    key: 'getInputNode',


    /**
     * This method is deprecated but still here because the TextField
     * need it in order to work. TODO: That will be addressed later.
     */
    value: function getInputNode() {
      var _this3 = this;

      var rootNode = this.rootNode;

      rootNode.focus = function () {
        if (!_this3.props.disabled) {
          _this3.setState({
            open: !_this3.state.open,
            anchorEl: _this3.rootNode
          });
        }
      };

      return rootNode;
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var el = this.rootNode;
      if (!this.props.style || !this.props.style.hasOwnProperty('width')) {
        el.style.width = 'auto';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          animated = _props.animated,
          animation = _props.animation,
          autoWidth = _props.autoWidth,
          multiple = _props.multiple,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          iconStyle = _props.iconStyle,
          labelStyle = _props.labelStyle,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          menuStyleProp = _props.menuStyle,
          selectionRenderer = _props.selectionRenderer,
          onClose = _props.onClose,
          openImmediately = _props.openImmediately,
          menuItemStyle = _props.menuItemStyle,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          style = _props.style,
          underlineStyle = _props.underlineStyle,
          value = _props.value,
          iconButton = _props.iconButton,
          anchorOrigin = _props.anchorOrigin,
          targetOrigin = _props.targetOrigin,
          other = (0, _objectWithoutProperties3.default)(_props, ['animated', 'animation', 'autoWidth', 'multiple', 'children', 'className', 'disabled', 'iconStyle', 'labelStyle', 'listStyle', 'maxHeight', 'menuStyle', 'selectionRenderer', 'onClose', 'openImmediately', 'menuItemStyle', 'selectedMenuItemStyle', 'style', 'underlineStyle', 'value', 'iconButton', 'anchorOrigin', 'targetOrigin']);
      var _state = this.state,
          anchorEl = _state.anchorEl,
          open = _state.open;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var displayValue = '';
      if (!multiple) {
        _react2.default.Children.forEach(children, function (child) {
          if (child && value === child.props.value) {
            if (selectionRenderer) {
              displayValue = selectionRenderer(value, child);
            } else {
              // This will need to be improved (in case primaryText is a node)
              displayValue = child.props.label || child.props.primaryText;
            }
          }
        });
      } else {
        var values = [];
        var selectionRendererChildren = [];
        _react2.default.Children.forEach(children, function (child) {
          if (child && value && value.indexOf(child.props.value) > -1) {
            if (selectionRenderer) {
              values.push(child.props.value);
              selectionRendererChildren.push(child);
            } else {
              values.push(child.props.label || child.props.primaryText);
            }
          }
        });

        displayValue = [];
        if (selectionRenderer) {
          displayValue = selectionRenderer(values, selectionRendererChildren);
        } else {
          displayValue = values.join(', ');
        }
      }

      var menuStyle = void 0;
      if (anchorEl && !autoWidth) {
        menuStyle = (0, _simpleAssign2.default)({
          width: anchorEl.clientWidth
        }, menuStyleProp);
      } else {
        menuStyle = menuStyleProp;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, {
          ref: function ref(node) {
            _this4.rootNode = node;
          },
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, open && styles.rootWhenOpen, style))
        }),
        _react2.default.createElement(
          _ClearFix2.default,
          { style: styles.control, onClick: this.handleTouchTapControl },
          _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)({}, styles.label, open && styles.labelWhenOpen, labelStyle)) },
            displayValue
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              disabled: disabled,
              onKeyDown: this.handleKeyDown,
              ref: function ref(node) {
                _this4.arrowNode = node;
              },
              style: (0, _simpleAssign2.default)({}, styles.icon, iconStyle),
              iconStyle: styles.iconChildren
            },
            iconButton
          ),
          _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.underline, underlineStyle)) })
        ),
        _react2.default.createElement(
          _Popover2.default,
          {
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            anchorEl: anchorEl,
            animation: animation || _PopoverAnimationVertical2.default,
            open: open,
            animated: animated,
            onRequestClose: this.handleRequestCloseMenu
          },
          _react2.default.createElement(
            _Menu2.default,
            {
              multiple: multiple,
              maxHeight: maxHeight,
              desktop: true,
              value: value,
              onEscKeyDown: this.handleEscKeyDownMenu,
              style: menuStyle,
              listStyle: listStyle,
              onItemTouchTap: this.handleItemTouchTap,
              onChange: this.handleChange,
              menuItemStyle: menuItemStyle,
              selectedMenuItemStyle: selectedMenuItemStyle,
              autoWidth: autoWidth,
              width: !autoWidth && menuStyle ? menuStyle.width : null
            },
            children
          )
        )
      );
    }
  }]);
  return DropDownMenu;
}(_react.Component);

DropDownMenu.muiName = 'DropDownMenu';
DropDownMenu.defaultProps = {
  animated: true,
  autoWidth: true,
  disabled: false,
  iconButton: _react2.default.createElement(_arrowDropDown2.default, null),
  openImmediately: false,
  maxHeight: 500,
  multiple: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
DropDownMenu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
DropDownMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * This is the point on the anchor that the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it gets added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * The width will automatically be set according to the items inside the menu.
   * To control this width in css instead, set this prop to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The `MenuItem`s to populate the `Menu` with. If the `MenuItems` have the
   * prop `label` that value will be used to render the representation of that
   * item within the field.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the menu.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides default `SvgIcon` dropdown arrow component.
   */
  iconButton: _propTypes2.default.node,
  /**
   * Overrides the styles of icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the styles of label when the `DropDownMenu` is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * The style object to use to override underlying list style.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The maximum height of the `Menu` when it is displayed.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * Overrides the styles of `Menu` when the `DropDownMenu` is displayed.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {object} event TouchTap event targeting the menu item that was clicked.
   * @param {number} key The index of the clicked menu item in the `children` collection.
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is closed.
   */
  onClose: _propTypes2.default.func,
  /**
   * Set to true to have the `DropDownMenu` automatically open on mount.
   */
  openImmediately: _propTypes2.default.bool,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   * @param {any} menuItem The selected `MenuItem`.
   * If `multiple` is true, this will be an array with the `MenuItem`s matching the `value`s parameter.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Overrides the inline-styles of the underline.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
} : {};
exports.default = DropDownMenu;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.DropDownMenu = undefined;

var _DropDownMenu2 = __webpack_require__(479);

var _DropDownMenu3 = _interopRequireDefault(_DropDownMenu2);

var _MenuItem2 = __webpack_require__(420);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DropDownMenu = _DropDownMenu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _DropDownMenu3.default;

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var color = props.color,
      hoverColor = props.hoverColor;
  var baseTheme = context.muiTheme.baseTheme;

  var offColor = color || baseTheme.palette.textColor;
  var onColor = hoverColor || offColor;

  return {
    root: {
      color: state.hovered ? onColor : offColor,
      position: 'relative',
      fontSize: baseTheme.spacing.iconSize,
      display: 'inline-block',
      userSelect: 'none',
      transition: _transitions2.default.easeOut()
    }
  };
}

var FontIcon = function (_Component) {
  (0, _inherits3.default)(FontIcon, _Component);

  function FontIcon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FontIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: false });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FontIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hoverColor = _props.hoverColor,
          onMouseLeave = _props.onMouseLeave,
          onMouseEnter = _props.onMouseEnter,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
      }));
    }
  }]);
  return FontIcon;
}(_react.Component);

FontIcon.muiName = 'FontIcon';
FontIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
};
FontIcon.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
FontIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * This is the font color of the font icon. If not specified,
   * this component will default to muiTheme.palette.textColor.
   */
  color: _propTypes2.default.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _propTypes2.default.string,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = FontIcon;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FontIcon = __webpack_require__(481);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FontIcon2.default;

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = __webpack_require__(365);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _EnhancedButton = __webpack_require__(422);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FontIcon = __webpack_require__(482);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Tooltip = __webpack_require__(502);

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _childUtils = __webpack_require__(508);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      boxSizing: 'border-box',
      overflow: 'visible',
      transition: _transitions2.default.easeOut(),
      padding: baseTheme.spacing.iconSize / 2,
      width: baseTheme.spacing.iconSize * 2,
      height: baseTheme.spacing.iconSize * 2,
      fontSize: 0
    },
    tooltip: {
      boxSizing: 'border-box'
    },
    disabled: {
      color: baseTheme.palette.disabledColor,
      fill: baseTheme.palette.disabledColor,
      cursor: 'default'
    }
  };
}

var IconButton = function (_Component) {
  (0, _inherits3.default)(IconButton, _Component);

  function IconButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IconButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      // Not to be confonded with the touch property.
      // This state is to determined if it's a mobile device.
      touch: false,
      tooltipShown: false
    }, _this.handleBlur = function (event) {
      _this.hideTooltip();
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      _this.showTooltip();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.button.isKeyboardFocused()) {
        _this.hideTooltip();
      }
      _this.setState({ hovered: false });
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseOut = function (event) {
      if (_this.props.disabled) _this.hideTooltip();
      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
    }, _this.handleMouseEnter = function (event) {
      _this.showTooltip();

      // Cancel hover styles for touch devices
      if (!_this.state.touch) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onKeyboardFocus = _this$props.onKeyboardFocus;

      if (isKeyboardFocused && !disabled) {
        _this.showTooltip();
        if (onFocus) {
          onFocus(event);
        }
      } else {
        _this.hideTooltip();
        if (onBlur) {
          onBlur(event);
        }
      }

      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      if (onKeyboardFocus) {
        onKeyboardFocus(event, isKeyboardFocused);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IconButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled) {
        this.setState({ hovered: false });
      }
    }
  }, {
    key: 'setKeyboardFocus',
    value: function setKeyboardFocus() {
      this.button.setKeyboardFocus();
    }
  }, {
    key: 'showTooltip',
    value: function showTooltip() {
      if (this.props.tooltip) {
        this.setState({ tooltipShown: true });
      }
    }
  }, {
    key: 'hideTooltip',
    value: function hideTooltip() {
      if (this.props.tooltip) this.setState({ tooltipShown: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          hoveredStyle = _props.hoveredStyle,
          disableTouchRipple = _props.disableTouchRipple,
          children = _props.children,
          iconClassName = _props.iconClassName,
          style = _props.style,
          tooltip = _props.tooltip,
          tooltipPositionProp = _props.tooltipPosition,
          tooltipStyles = _props.tooltipStyles,
          touch = _props.touch,
          iconStyle = _props.iconStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);

      var fonticon = void 0;

      var styles = getStyles(this.props, this.context);
      var tooltipPosition = tooltipPositionProp.split('-');

      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

      var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style, hovered ? hoveredStyle : {});

      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
        label: tooltip,
        show: this.state.tooltipShown,
        touch: touch,
        style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
        verticalPosition: tooltipPosition[0],
        horizontalPosition: tooltipPosition[1]
      }) : null;

      if (iconClassName) {
        var iconHoverColor = iconStyle.iconHoverColor,
            iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);


        fonticon = _react2.default.createElement(
          _FontIcon2.default,
          {
            className: iconClassName,
            hoverColor: disabled ? null : iconHoverColor,
            style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
            color: this.context.muiTheme.baseTheme.palette.textColor
          },
          children
        );
      }

      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({
          ref: function ref(_ref2) {
            return _this2.button = _ref2;
          }
        }, other, {
          centerRipple: true,
          disabled: disabled,
          onTouchStart: this.handleTouchStart,
          style: mergedRootStyles,
          disableTouchRipple: disableTouchRipple,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          onMouseOut: this.handleMouseOut,
          onKeyboardFocus: this.handleKeyboardFocus
        }),
        tooltipElement,
        fonticon,
        (0, _childUtils.extendChildren)(children, {
          style: childrenStyle
        })
      );
    }
  }]);
  return IconButton;
}(_react.Component);

IconButton.muiName = 'IconButton';
IconButton.defaultProps = {
  disabled: false,
  disableTouchRipple: false,
  iconStyle: {},
  tooltipPosition: 'bottom-center',
  touch: false
};
IconButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
IconButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Can be used to pass a `FontIcon` element as the icon for the button.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * If true, the element will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element when the component is hovered.
   */
  hoveredStyle: _propTypes2.default.object,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
   */
  iconClassName: _propTypes2.default.string,
  /**
   * Override the inline-styles of the icon element.
   * Note: you can specify iconHoverColor as a String inside this object.
   */
  iconStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onClick: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} keyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseOut: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The text to supply to the element's tooltip.
   */
  tooltip: _propTypes2.default.node,
  /**
   * The vertical and horizontal positions, respectively, of the element's tooltip.
   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
   * "bottom-left", and "top-left".
   */
  tooltipPosition: _propTypes4.default.cornersAndCenter,
  /**
   * Override the inline-styles of the tooltip element.
   */
  tooltipStyles: _propTypes2.default.object,
  /**
   * If true, increase the tooltip element's size. Useful for increasing tooltip
   * readability on mobile devices.
   */
  touch: _propTypes2.default.bool
} : {};
exports.default = IconButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(373);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _colorManipulator = __webpack_require__(509);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedButton = __webpack_require__(422);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _IconButton = __webpack_require__(417);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _expandLess = __webpack_require__(506);

var _expandLess2 = _interopRequireDefault(_expandLess);

var _expandMore = __webpack_require__(507);

var _expandMore2 = _interopRequireDefault(_expandMore);

var _NestedList = __webpack_require__(485);

var _NestedList2 = _interopRequireDefault(_NestedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var autoGenerateNestedIndicator = props.autoGenerateNestedIndicator,
      insetChildren = props.insetChildren,
      leftAvatar = props.leftAvatar,
      leftCheckbox = props.leftCheckbox,
      leftIcon = props.leftIcon,
      nestedItems = props.nestedItems,
      nestedLevel = props.nestedLevel,
      rightAvatar = props.rightAvatar,
      rightIcon = props.rightIcon,
      rightIconButton = props.rightIconButton,
      rightToggle = props.rightToggle,
      secondaryText = props.secondaryText,
      secondaryTextLines = props.secondaryTextLines;
  var muiTheme = context.muiTheme;
  var listItem = muiTheme.listItem;


  var textColor = muiTheme.baseTheme.palette.textColor;
  var hoverColor = props.hoverColor || (0, _colorManipulator.fade)(textColor, 0.1);
  var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
  var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
  var twoLine = secondaryText && secondaryTextLines === 1;
  var threeLine = secondaryText && secondaryTextLines > 1;

  var isKeyboardFocused = (props.isKeyboardFocused !== undefined ? props : state).isKeyboardFocused;

  var styles = {
    root: {
      backgroundColor: (isKeyboardFocused || state.hovered) && !state.rightIconButtonHovered && !state.rightIconButtonKeyboardFocused ? hoverColor : null,
      color: textColor,
      display: 'block',
      fontSize: 16,
      lineHeight: '16px',
      position: 'relative',
      transition: _transitions2.default.easeOut()
    },

    // This inner div is needed so that ripples will span the entire container
    innerDiv: {
      marginLeft: nestedLevel * listItem.nestedLevelDepth,
      paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
      paddingRight: rightIcon || rightAvatar || rightIconButton || nestedItems.length && autoGenerateNestedIndicator ? 56 : rightToggle ? 72 : 16,
      paddingBottom: singleAvatar ? 20 : 16,
      paddingTop: singleNoAvatar || threeLine ? 16 : 20,
      position: 'relative'
    },

    icons: {
      height: 24,
      width: 24,
      display: 'block',
      position: 'absolute',
      top: twoLine ? 12 : singleAvatar ? 4 : 0,
      margin: 12
    },

    leftIcon: {
      left: 4
    },

    rightIcon: {
      right: 4
    },

    avatars: {
      position: 'absolute',
      top: singleAvatar ? 8 : 16
    },

    label: {
      cursor: 'pointer'
    },

    leftAvatar: {
      left: 16
    },

    rightAvatar: {
      right: 16
    },

    leftCheckbox: {
      position: 'absolute',
      display: 'block',
      width: 24,
      top: twoLine ? 24 : singleAvatar ? 16 : 12,
      left: 16
    },

    primaryText: {},

    rightIconButton: {
      position: 'absolute',
      display: 'block',
      top: twoLine ? 12 : singleAvatar ? 4 : 0,
      right: 4
    },

    rightToggle: {
      position: 'absolute',
      display: 'block',
      width: 54,
      top: twoLine ? 25 : singleAvatar ? 17 : 13,
      right: 8
    },

    secondaryText: {
      fontSize: 14,
      lineHeight: threeLine ? '18px' : '16px',
      height: threeLine ? 36 : 16,
      margin: 0,
      marginTop: 4,
      color: listItem.secondaryTextColor,

      // needed for 2 and 3 line ellipsis
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: threeLine ? null : 'nowrap',
      display: threeLine ? '-webkit-box' : null,
      WebkitLineClamp: threeLine ? 2 : null,
      WebkitBoxOrient: threeLine ? 'vertical' : null
    }
  };

  return styles;
}

var ListItem = function (_Component) {
  (0, _inherits3.default)(ListItem, _Component);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      open: false,
      rightIconButtonHovered: false,
      rightIconButtonKeyboardFocused: false,
      touch: false
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      _this.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.touch) _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleTouchTap = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (_this.props.primaryTogglesNestedList) {
        _this.handleNestedListToggle(event);
      }
    }, _this.handleNestedListToggle = function (event) {
      if (_this.props.leftCheckbox) {
        event.preventDefault();
      }
      event.stopPropagation();

      if (_this.props.open === null) {
        _this.setState({ open: !_this.state.open }, function () {
          _this.props.onNestedListToggle(_this);
        });
      } else {
        // Exposing `this` in the callback is quite a bad API.
        // I'm doing a one level deep clone to expose a fake state.open.
        _this.props.onNestedListToggle((0, _extends3.default)({}, _this, {
          state: {
            open: !_this.state.open
          }
        }));
      }
    }, _this.handleRightIconButtonKeyboardFocus = function (event, isKeyboardFocused) {
      if (isKeyboardFocused) {
        _this.setState({
          isKeyboardFocused: false,
          rightIconButtonKeyboardFocused: isKeyboardFocused
        });
      }

      var iconButton = _this.props.rightIconButton;

      if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleRightIconButtonMouseLeave = function (event) {
      var iconButton = _this.props.rightIconButton;
      _this.setState({ rightIconButtonHovered: false });
      if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(event);
    }, _this.handleRightIconButtonMouseEnter = function (event) {
      var iconButton = _this.props.rightIconButton;
      _this.setState({ rightIconButtonHovered: true });
      if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(event);
    }, _this.handleRightIconButtonMouseUp = function (event) {
      var iconButton = _this.props.rightIconButton;
      event.stopPropagation();
      if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(event);
    }, _this.handleRightIconButtonTouchTap = function (event) {
      var iconButton = _this.props.rightIconButton;

      // Stop the event from bubbling up to the list-item
      event.stopPropagation();
      if (iconButton && iconButton.props.onClick) iconButton.props.onClick(event);
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchStart(event);
    }, _this.handleTouchEnd = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchEnd(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ListItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        open: this.props.open === null ? this.props.initiallyOpen === true : this.props.open
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // update the state when the component is controlled.
      if (nextProps.open !== null) this.setState({ open: nextProps.open });
      if (nextProps.disabled && this.state.hovered) this.setState({ hovered: false });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }

    // This method is needed by the `MenuItem` component.

  }, {
    key: 'applyFocusState',
    value: function applyFocusState(focusState) {
      if (this.button) {
        var buttonEl = _reactDom2.default.findDOMNode(this.button);

        switch (focusState) {
          case 'none':
            buttonEl.blur();
            break;
          case 'focused':
            buttonEl.focus();
            break;
          case 'keyboard-focused':
            this.button.setKeyboardFocus();
            buttonEl.focus();
            break;
        }
      }
    }
  }, {
    key: 'createDisabledElement',
    value: function createDisabledElement(styles, contentChildren, additionalProps) {
      var _props = this.props,
          innerDivStyle = _props.innerDivStyle,
          style = _props.style;


      var mergedDivStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, additionalProps, {
          style: this.context.muiTheme.prepareStyles(mergedDivStyles)
        }),
        contentChildren
      );
    }
  }, {
    key: 'createLabelElement',
    value: function createLabelElement(styles, contentChildren, additionalProps) {
      var _props2 = this.props,
          innerDivStyle = _props2.innerDivStyle,
          style = _props2.style;


      var mergedLabelStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, styles.label, style);

      return _react2.default.createElement(
        'label',
        (0, _extends3.default)({}, additionalProps, {
          style: this.context.muiTheme.prepareStyles(mergedLabelStyles)
        }),
        contentChildren
      );
    }
  }, {
    key: 'createTextElement',
    value: function createTextElement(styles, data, key) {
      var prepareStyles = this.context.muiTheme.prepareStyles;

      if (_react2.default.isValidElement(data)) {
        var style = (0, _simpleAssign2.default)({}, styles, data.props.style);
        if (typeof data.type === 'string') {
          // if element is a native dom node
          style = prepareStyles(style);
        }
        return _react2.default.cloneElement(data, {
          key: key,
          style: style
        });
      }

      return _react2.default.createElement(
        'div',
        { key: key, style: prepareStyles(styles) },
        data
      );
    }
  }, {
    key: 'pushElement',
    value: function pushElement(children, element, baseStyles, additionalProps) {
      if (element) {
        var styles = (0, _simpleAssign2.default)({}, baseStyles, element.props.style);
        children.push(_react2.default.cloneElement(element, (0, _extends3.default)({
          key: children.length,
          style: styles
        }, additionalProps)));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator,
          children = _props3.children,
          containerElement = _props3.containerElement,
          disabled = _props3.disabled,
          disableKeyboardFocus = _props3.disableKeyboardFocus,
          hoverColor = _props3.hoverColor,
          initiallyOpen = _props3.initiallyOpen,
          innerDivStyle = _props3.innerDivStyle,
          insetChildren = _props3.insetChildren,
          leftAvatar = _props3.leftAvatar,
          leftCheckbox = _props3.leftCheckbox,
          leftIcon = _props3.leftIcon,
          nestedItems = _props3.nestedItems,
          nestedLevel = _props3.nestedLevel,
          nestedListStyle = _props3.nestedListStyle,
          onKeyboardFocus = _props3.onKeyboardFocus,
          isKeyboardFocused = _props3.isKeyboardFocused,
          onMouseEnter = _props3.onMouseEnter,
          onMouseLeave = _props3.onMouseLeave,
          onNestedListToggle = _props3.onNestedListToggle,
          onTouchStart = _props3.onTouchStart,
          onClick = _props3.onClick,
          rightAvatar = _props3.rightAvatar,
          rightIcon = _props3.rightIcon,
          rightIconButton = _props3.rightIconButton,
          rightToggle = _props3.rightToggle,
          primaryText = _props3.primaryText,
          primaryTogglesNestedList = _props3.primaryTogglesNestedList,
          secondaryText = _props3.secondaryText,
          secondaryTextLines = _props3.secondaryTextLines,
          style = _props3.style,
          other = (0, _objectWithoutProperties3.default)(_props3, ['autoGenerateNestedIndicator', 'children', 'containerElement', 'disabled', 'disableKeyboardFocus', 'hoverColor', 'initiallyOpen', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'isKeyboardFocused', 'onMouseEnter', 'onMouseLeave', 'onNestedListToggle', 'onTouchStart', 'onClick', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var contentChildren = [children];

      if (leftIcon) {
        var additionalProps = {
          color: leftIcon.props.color || this.context.muiTheme.listItem.leftIconColor
        };
        this.pushElement(contentChildren, leftIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.leftIcon), additionalProps);
      }

      if (rightIcon) {
        var _additionalProps = {
          color: rightIcon.props.color || this.context.muiTheme.listItem.rightIconColor
        };
        this.pushElement(contentChildren, rightIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.rightIcon), _additionalProps);
      }

      if (leftAvatar) {
        this.pushElement(contentChildren, leftAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.leftAvatar));
      }

      if (rightAvatar) {
        this.pushElement(contentChildren, rightAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.rightAvatar));
      }

      if (leftCheckbox) {
        this.pushElement(contentChildren, leftCheckbox, (0, _simpleAssign2.default)({}, styles.leftCheckbox));
      }

      // RightIconButtonElement
      var hasNestListItems = nestedItems.length;
      var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
      var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;

      if (rightIconButton || needsNestedIndicator) {
        var rightIconButtonElement = rightIconButton;
        var rightIconButtonHandlers = {
          onKeyboardFocus: this.handleRightIconButtonKeyboardFocus,
          onMouseEnter: this.handleRightIconButtonMouseEnter,
          onMouseLeave: this.handleRightIconButtonMouseLeave,
          onClick: this.handleRightIconButtonTouchTap,
          onMouseDown: this.handleRightIconButtonMouseUp,
          onMouseUp: this.handleRightIconButtonMouseUp
        };

        // Create a nested list indicator icon if we don't have an icon on the right
        if (needsNestedIndicator) {
          rightIconButtonElement = this.state.open ? _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(_expandLess2.default, null)
          ) : _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(_expandMore2.default, null)
          );
          rightIconButtonHandlers.onClick = this.handleNestedListToggle;
        }

        this.pushElement(contentChildren, rightIconButtonElement, (0, _simpleAssign2.default)({}, styles.rightIconButton), rightIconButtonHandlers);
      }

      if (rightToggle) {
        this.pushElement(contentChildren, rightToggle, (0, _simpleAssign2.default)({}, styles.rightToggle));
      }

      if (primaryText) {
        var primaryTextElement = this.createTextElement(styles.primaryText, primaryText, 'primaryText');
        contentChildren.push(primaryTextElement);
      }

      if (secondaryText) {
        var secondaryTextElement = this.createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
        contentChildren.push(secondaryTextElement);
      }

      var nestedList = nestedItems.length ? _react2.default.createElement(
        _NestedList2.default,
        { nestedLevel: nestedLevel, open: this.state.open, style: nestedListStyle },
        nestedItems
      ) : undefined;

      var simpleLabel = !primaryTogglesNestedList && (leftCheckbox || rightToggle);

      return _react2.default.createElement(
        'div',
        null,
        simpleLabel ? this.createLabelElement(styles, contentChildren, other) : disabled ? this.createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({
            containerElement: containerElement
          }, other, {
            disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
            onKeyboardFocus: this.handleKeyboardFocus,
            onMouseLeave: this.handleMouseLeave,
            onMouseEnter: this.handleMouseEnter,
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd,
            onClick: this.handleTouchTap,
            disabled: disabled,
            ref: function ref(node) {
              return _this2.button = node;
            },
            style: (0, _simpleAssign2.default)({}, styles.root, style)
          }),
          _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)(styles.innerDiv, innerDivStyle)) },
            contentChildren
          )
        ),
        nestedList
      );
    }
  }]);
  return ListItem;
}(_react.Component);

ListItem.muiName = 'ListItem';
ListItem.defaultProps = {
  autoGenerateNestedIndicator: true,
  containerElement: 'span',
  disableKeyboardFocus: false,
  disabled: false,
  initiallyOpen: false,
  insetChildren: false,
  nestedItems: [],
  nestedLevel: 0,
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onNestedListToggle: function onNestedListToggle() {},
  onTouchEnd: function onTouchEnd() {},
  onTouchStart: function onTouchStart() {},
  open: null,
  primaryTogglesNestedList: false,
  secondaryTextLines: 1
};
ListItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If true, generate a nested-list-indicator icon when nested list
   * items are detected. Note that an indicator will not be created
   * if a `rightIcon` or `rightIconButton` has been provided to
   * the element.
   */
  autoGenerateNestedIndicator: _propTypes2.default.bool,
  /**
   * Children passed into the `ListItem`.
   */
  children: _propTypes2.default.node,
  /**
   * The element to use as the container for the ListItem. Either a string to
   * use a DOM element or a ReactElement. This is useful for wrapping the
   * ListItem in a custom Link component. If a ReactElement is given, ensure
   * that it passes all of its given props through to the underlying DOM
   * element and renders its children prop for proper integration.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element will not be able to be focused by the keyboard.
   */
  disableKeyboardFocus: _propTypes2.default.bool,
  /**
   * If true, the element will not be clickable
   * and will not display hover effects.
   * This is automatically disabled if either `leftCheckbox`
   * or `rightToggle` is set.
   */
  disabled: _propTypes2.default.bool,
  /**
  * Override the hover background color.
  */
  hoverColor: _propTypes2.default.string,
  /**
   * If true, the nested `ListItem`s are initially displayed.
   */
  initiallyOpen: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the inner div element.
   */
  innerDivStyle: _propTypes2.default.object,
  /**
   * If true, the children will be indented by 72px.
   * This is useful if there is no left avatar or left icon.
   */
  insetChildren: _propTypes2.default.bool,
  /**
   * Use to control if the list item should render as keyboard focused.  If
   * undefined (default), this will be automatically managed.  If provided,
   * it will change the components style.  Note that this will not change the
   * actual focus - and should only be used when you want to simulate
   * keyboard focus (eg. in a rich text input autocomplete).
   */
  isKeyboardFocused: _propTypes2.default.bool,
  /**
   * This is the `Avatar` element to be displayed on the left side.
   */
  leftAvatar: _propTypes2.default.element,
  /**
   * This is the `Checkbox` element to be displayed on the left side.
   */
  leftCheckbox: _propTypes2.default.element,
  /**
   * This is the `SvgIcon` or `FontIcon` to be displayed on the left side.
   */
  leftIcon: _propTypes2.default.element,
  /**
   * An array of `ListItem`s to nest underneath the current `ListItem`.
   */
  nestedItems: _propTypes2.default.arrayOf(_propTypes2.default.element),
  /**
   * Controls how deep a `ListItem` appears.
   * This property is automatically managed, so modify at your own risk.
   */
  nestedLevel: _propTypes2.default.number,
  /**
   * Override the inline-styles of the nested items' `NestedList`.
   */
  nestedListStyle: _propTypes2.default.object,
  /**
   * Callback function fired when the list item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the list item.
   */
  onClick: _propTypes2.default.func,
  /**
   * Callback function fired when the `ListItem` is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the `ListItem`.
   * @param {boolean} isKeyboardFocused If true, the `ListItem` is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Callback function fired when the `ListItem` toggles its nested list.
   *
   * @param {object} listItem The `ListItem`.
   */
  onNestedListToggle: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Control toggle state of nested list.
   */
  open: _propTypes2.default.bool,
  /**
   * This is the block element that contains the primary text.
   * If a string is passed in, a div tag will be rendered.
   */
  primaryText: _propTypes2.default.node,
  /**
   * If true, clicking or tapping the primary text of the `ListItem`
   * toggles the nested list.
   */
  primaryTogglesNestedList: _propTypes2.default.bool,
  /**
   * This is the `Avatar` element to be displayed on the right side.
   */
  rightAvatar: _propTypes2.default.element,
  /**
   * This is the `SvgIcon` or `FontIcon` to be displayed on the right side.
   */
  rightIcon: _propTypes2.default.element,
  /**
   * This is the `IconButton` to be displayed on the right side.
   * Hovering over this button will remove the `ListItem` hover.
   * Also, clicking on this button will not trigger a
   * ripple on the `ListItem`; the event will be stopped and prevented
   * from bubbling up to cause a `ListItem` click.
   */
  rightIconButton: _propTypes2.default.element,
  /**
   * This is the `Toggle` element to display on the right side.
   */
  rightToggle: _propTypes2.default.element,
  /**
   * This is the block element that contains the secondary text.
   * If a string is passed in, a div tag will be rendered.
   */
  secondaryText: _propTypes2.default.node,
  /**
   * Can be 1 or 2. This is the number of secondary
   * text lines before ellipsis will show.
   */
  secondaryTextLines: _propTypes2.default.oneOf([1, 2]),
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = ListItem;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(418);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NestedList = function NestedList(props) {
  var children = props.children,
      open = props.open,
      nestedLevel = props.nestedLevel,
      style = props.style;


  if (!open) {
    return null;
  }

  return _react2.default.createElement(
    _List2.default,
    { style: style },
    _react.Children.map(children, function (child) {
      return (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
        nestedLevel: nestedLevel + 1
      }) : child;
    })
  );
};

NestedList.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  nestedLevel: _propTypes2.default.number.isRequired,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

exports.default = NestedList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HotKeyHolder = undefined;

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HotKeyHolder = exports.HotKeyHolder = function () {
  function HotKeyHolder() {
    var _this = this;

    (0, _classCallCheck3.default)(this, HotKeyHolder);

    this.clear = function () {
      _this.timerId = null;
      _this.lastKeys = null;
    };
  }

  (0, _createClass3.default)(HotKeyHolder, [{
    key: 'append',
    value: function append(key) {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(this.clear, 500);
      return this.lastKeys = (this.lastKeys || '') + key;
    }
  }]);
  return HotKeyHolder;
}();

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _MenuItem = __webpack_require__(420);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MenuItem2.default;

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = __webpack_require__(365);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var rounded = props.rounded,
      circle = props.circle,
      transitionEnabled = props.transitionEnabled,
      zDepth = props.zDepth;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      paper = _context$muiTheme.paper,
      borderRadius = _context$muiTheme.borderRadius;


  return {
    root: {
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && _transitions2.default.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
      borderRadius: circle ? '50%' : rounded ? borderRadius : '0px'
    }
  };
}

var Paper = function (_Component) {
  (0, _inherits3.default)(Paper, _Component);

  function Paper() {
    (0, _classCallCheck3.default)(this, Paper);
    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
  }

  (0, _createClass3.default)(Paper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          circle = _props.circle,
          rounded = _props.rounded,
          style = _props.style,
          transitionEnabled = _props.transitionEnabled,
          zDepth = _props.zDepth,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        children
      );
    }
  }]);
  return Paper;
}(_react.Component);

Paper.defaultProps = {
  circle: false,
  rounded: true,
  transitionEnabled: true,
  zDepth: 1
};
Paper.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Paper.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Children passed into the paper element.
   */
  children: _propTypes2.default.node,
  /**
   * Set to true to generate a circular paper container.
   */
  circle: _propTypes2.default.bool,
  /**
   * By default, the paper container will have a border radius.
   * Set this to false to generate a container with sharp corners.
   */
  rounded: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Set to false to disable CSS transitions for the paper element.
   */
  transitionEnabled: _propTypes2.default.bool,
  /**
   * This number represents the zDepth of the paper shadow.
   */
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = Paper;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = __webpack_require__(365);

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = __webpack_require__(398);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var targetOrigin = props.targetOrigin;
  var open = state.open;
  var muiTheme = context.muiTheme;

  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

  return {
    root: {
      position: 'fixed',
      zIndex: muiTheme.zIndex.popover,
      opacity: open ? 1 : 0,
      transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
      maxHeight: '100%'
    },
    horizontal: {
      maxHeight: '100%',
      overflowY: 'auto',
      transform: open ? 'scaleX(1)' : 'scaleX(0)',
      opacity: open ? 1 : 0,
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
    },
    vertical: {
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
    }
  };
}

var PopoverAnimationDefault = function (_Component) {
  (0, _inherits3.default)(PopoverAnimationDefault, _Component);

  function PopoverAnimationDefault() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverAnimationDefault);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationDefault.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationDefault)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PopoverAnimationDefault, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        open: nextProps.open
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          zDepth = _props.zDepth;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _Paper2.default,
        {
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: zDepth,
          className: className
        },
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.horizontal) },
          _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.vertical) },
            this.props.children
          )
        )
      );
    }
  }]);
  return PopoverAnimationDefault;
}(_react.Component);

PopoverAnimationDefault.defaultProps = {
  style: {},
  zDepth: 1
};
PopoverAnimationDefault.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
PopoverAnimationDefault.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  targetOrigin: _propTypes4.default.origin.isRequired,
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = PopoverAnimationDefault;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__(398);

var _Paper2 = _interopRequireDefault(_Paper);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = __webpack_require__(365);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var targetOrigin = props.targetOrigin;
  var open = state.open;
  var muiTheme = context.muiTheme;

  var horizontal = targetOrigin.horizontal.replace('middle', 'center');

  return {
    root: {
      position: 'fixed',
      zIndex: muiTheme.zIndex.popover,
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('450ms', ['transform', 'opacity']),
      maxHeight: '100%'
    }
  };
}

var PopoverAnimationVertical = function (_Component) {
  (0, _inherits3.default)(PopoverAnimationVertical, _Component);

  function PopoverAnimationVertical() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverAnimationVertical);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationVertical.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationVertical)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PopoverAnimationVertical, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        open: nextProps.open
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          zDepth = _props.zDepth;


      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _Paper2.default,
        {
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: zDepth,
          className: className
        },
        this.props.children
      );
    }
  }]);
  return PopoverAnimationVertical;
}(_react.Component);

PopoverAnimationVertical.defaultProps = {
  style: {},
  zDepth: 1
};
PopoverAnimationVertical.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
PopoverAnimationVertical.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  targetOrigin: _propTypes4.default.origin.isRequired,
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = PopoverAnimationVertical;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subheader = function Subheader(props, context) {
  var children = props.children,
      inset = props.inset,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'inset', 'style']);
  var _context$muiTheme = context.muiTheme,
      prepareStyles = _context$muiTheme.prepareStyles,
      subheader = _context$muiTheme.subheader;


  var styles = {
    root: {
      boxSizing: 'border-box',
      color: subheader.color,
      fontSize: 14,
      fontWeight: subheader.fontWeight,
      lineHeight: '48px',
      paddingLeft: inset ? 72 : 16,
      width: '100%'
    }
  };

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
    children
  );
};

Subheader.muiName = 'Subheader';

Subheader.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Node that will be placed inside the `Subheader`.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the `Subheader` will be indented.
   */
  inset: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

Subheader.defaultProps = {
  inset: false
};

Subheader.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = Subheader;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Subheader = __webpack_require__(491);

var _Subheader2 = _interopRequireDefault(_Subheader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Subheader2.default;

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = function (_Component) {
  (0, _inherits3.default)(SvgIcon, _Component);

  function SvgIcon() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SvgIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          hoverColor = _props.hoverColor,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          style = _props.style,
          viewBox = _props.viewBox,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
      var _context$muiTheme = this.context.muiTheme,
          svgIcon = _context$muiTheme.svgIcon,
          prepareStyles = _context$muiTheme.prepareStyles;


      var offColor = color ? color : 'currentColor';
      var onColor = hoverColor ? hoverColor : offColor;

      var mergedStyles = (0, _simpleAssign2.default)({
        display: 'inline-block',
        color: svgIcon.color,
        fill: this.state.hovered ? onColor : offColor,
        height: 24,
        width: 24,
        userSelect: 'none',
        transition: _transitions2.default.easeOut()
      }, style);

      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, other, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          style: prepareStyles(mergedStyles),
          viewBox: viewBox
        }),
        children
      );
    }
  }]);
  return SvgIcon;
}(_react.Component);

SvgIcon.muiName = 'SvgIcon';
SvgIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  viewBox: '0 0 24 24'
};
SvgIcon.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
SvgIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Elements passed into the SVG Icon.
   */
  children: _propTypes2.default.node,
  /**
   * This is the fill color of the svg icon.
   * If not specified, this component will default
   * to muiTheme.palette.textColor.
   */
  color: _propTypes2.default.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _propTypes2.default.string,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Allows you to redefine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: _propTypes2.default.string
} : {};
exports.default = SvgIcon;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  BeforeAfterWrapper
 *    An alternative for the ::before and ::after css pseudo-elements for
 *    components whose styles are defined in javascript instead of css.
 *
 *  Usage: For the element that we want to apply before and after elements to,
 *    wrap its children with BeforeAfterWrapper. For example:
 *
 *                                            <Paper>
 *  <Paper>                                     <div> // See notice
 *    <BeforeAfterWrapper>        renders         <div/> // before element
 *      [children of paper]       ------>         [children of paper]
 *    </BeforeAfterWrapper>                       <div/> // after element
 *  </Paper>                                    </div>
 *                                            </Paper>
 *
 *  Notice: Notice that this div bundles together our elements. If the element
 *    that we want to apply before and after elements is a HTML tag (i.e. a
 *    div, p, or button tag), we can avoid this extra nesting by passing using
 *    the BeforeAfterWrapper in place of said tag like so:
 *
 *  <p>
 *    <BeforeAfterWrapper>   do this instead   <BeforeAfterWrapper elementType='p'>
 *      [children of p]          ------>         [children of p]
 *    </BeforeAfterWrapper>                    </BeforeAfterWrapper>
 *  </p>
 *
 *  BeforeAfterWrapper features spread functionality. This means that we can
 *  pass HTML tag properties directly into the BeforeAfterWrapper tag.
 *
 *  When using BeforeAfterWrapper, ensure that the parent of the beforeElement
 *  and afterElement have a defined style position.
 */

var styles = {
  box: {
    boxSizing: 'border-box'
  }
};

var BeforeAfterWrapper = function (_Component) {
  (0, _inherits3.default)(BeforeAfterWrapper, _Component);

  function BeforeAfterWrapper() {
    (0, _classCallCheck3.default)(this, BeforeAfterWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (BeforeAfterWrapper.__proto__ || (0, _getPrototypeOf2.default)(BeforeAfterWrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(BeforeAfterWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          beforeStyle = _props.beforeStyle,
          afterStyle = _props.afterStyle,
          beforeElementType = _props.beforeElementType,
          afterElementType = _props.afterElementType,
          elementType = _props.elementType,
          other = (0, _objectWithoutProperties3.default)(_props, ['beforeStyle', 'afterStyle', 'beforeElementType', 'afterElementType', 'elementType']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var beforeElement = void 0;
      var afterElement = void 0;

      if (beforeStyle) {
        beforeElement = _react2.default.createElement(this.props.beforeElementType, {
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, beforeStyle)),
          key: '::before'
        });
      }

      if (afterStyle) {
        afterElement = _react2.default.createElement(this.props.afterElementType, {
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, afterStyle)),
          key: '::after'
        });
      }

      var children = [beforeElement, this.props.children, afterElement];

      var props = other;
      props.style = prepareStyles((0, _simpleAssign2.default)({}, this.props.style));

      return _react2.default.createElement(this.props.elementType, props, children);
    }
  }]);
  return BeforeAfterWrapper;
}(_react.Component);

BeforeAfterWrapper.defaultProps = {
  beforeElementType: 'div',
  afterElementType: 'div',
  elementType: 'div'
};
BeforeAfterWrapper.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
BeforeAfterWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  afterElementType: _propTypes2.default.string,
  afterStyle: _propTypes2.default.object,
  beforeElementType: _propTypes2.default.string,
  beforeStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  elementType: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = BeforeAfterWrapper;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(373);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = __webpack_require__(399);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleRipple = function (_Component) {
  (0, _inherits3.default)(CircleRipple, _Component);

  function CircleRipple() {
    (0, _classCallCheck3.default)(this, CircleRipple);
    return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
  }

  (0, _createClass3.default)(CircleRipple, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.animate();
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.animate();
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      style.opacity = 0;
      // If the animation is aborted, remove from the DOM immediately
      var removeAfter = this.props.aborted ? 0 : 2000;
      this.enterTimer = setTimeout(callback, removeAfter);
    }
  }, {
    key: 'animate',
    value: function animate() {
      var style = _reactDom2.default.findDOMNode(this).style;
      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
      _autoPrefix2.default.set(style, 'transition', transitionValue);
      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
    }
  }, {
    key: 'initializeAnimation',
    value: function initializeAnimation(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      style.opacity = this.props.opacity;
      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
      this.leaveTimer = setTimeout(callback, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          aborted = _props.aborted,
          color = _props.color,
          opacity = _props.opacity,
          style = _props.style,
          touchGenerated = _props.touchGenerated,
          other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedStyles = (0, _simpleAssign2.default)({
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        backgroundColor: color
      }, style);

      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
    }
  }]);
  return CircleRipple;
}(_react.Component);

CircleRipple.defaultProps = {
  opacity: 0.1,
  aborted: false
};
CircleRipple.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
CircleRipple.propTypes = process.env.NODE_ENV !== "production" ? {
  aborted: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  opacity: _propTypes2.default.number,
  style: _propTypes2.default.object,
  touchGenerated: _propTypes2.default.bool
} : {};
exports.default = CircleRipple;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BeforeAfterWrapper = __webpack_require__(494);

var _BeforeAfterWrapper2 = _interopRequireDefault(_BeforeAfterWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  before: {
    content: "' '",
    display: 'table'
  },
  after: {
    content: "' '",
    clear: 'both',
    display: 'table'
  }
};

var ClearFix = function ClearFix(_ref) {
  var style = _ref.style,
      children = _ref.children,
      other = (0, _objectWithoutProperties3.default)(_ref, ['style', 'children']);
  return _react2.default.createElement(
    _BeforeAfterWrapper2.default,
    (0, _extends3.default)({}, other, {
      beforeStyle: styles.before,
      afterStyle: styles.after,
      style: style
    }),
    children
  );
};

ClearFix.muiName = 'ClearFix';

ClearFix.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

exports.default = ClearFix;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _events = __webpack_require__(400);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDescendant = function isDescendant(el, target) {
  if (target !== null) {
    return el === target || isDescendant(el, target.parentNode);
  }
  return false;
};

var clickAwayEvents = ['mouseup', 'touchend'];
var bind = function bind(callback) {
  return clickAwayEvents.forEach(function (event) {
    return _events2.default.on(document, event, callback);
  });
};
var unbind = function unbind(callback) {
  return clickAwayEvents.forEach(function (event) {
    return _events2.default.off(document, event, callback);
  });
};

var ClickAwayListener = function (_Component) {
  (0, _inherits3.default)(ClickAwayListener, _Component);

  function ClickAwayListener() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClickAwayListener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      // IE11 support, which trigger the handleClickAway even after the unbind
      if (_this.isCurrentlyMounted) {
        var el = _reactDom2.default.findDOMNode(_this);

        if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
          _this.props.onClickAway(event);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClickAwayListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isCurrentlyMounted = true;
      if (this.props.onClickAway) {
        bind(this.handleClickAway);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.onClickAway !== this.props.onClickAway) {
        unbind(this.handleClickAway);
        if (this.props.onClickAway) {
          bind(this.handleClickAway);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isCurrentlyMounted = false;
      unbind(this.handleClickAway);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ClickAwayListener;
}(_react.Component);

ClickAwayListener.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.element,
  onClickAway: _propTypes2.default.func
} : {};
exports.default = ClickAwayListener;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(373);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _autoPrefix = __webpack_require__(399);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

var _ScaleIn = __webpack_require__(500);

var _ScaleIn2 = _interopRequireDefault(_ScaleIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pulsateDuration = 750;

var FocusRipple = function (_Component) {
  (0, _inherits3.default)(FocusRipple, _Component);

  function FocusRipple() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FocusRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
      if (!innerCircle) return;

      var startScale = 'scale(1)';
      var endScale = 'scale(0.85)';
      var currentScale = innerCircle.style.transform || startScale;
      var nextScale = currentScale === startScale ? endScale : startScale;

      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FocusRipple, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.show) {
        this.setRippleSize();
        this.pulsate();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.show) {
        this.setRippleSize();
        this.pulsate();
      } else {
        if (this.timeout) clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'getRippleElement',
    value: function getRippleElement(props) {
      var color = props.color,
          innerStyle = props.innerStyle,
          opacity = props.opacity;
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          ripple = _context$muiTheme.ripple;


      var innerStyles = (0, _simpleAssign2.default)({
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        opacity: opacity ? opacity : 0.16,
        backgroundColor: color || ripple.color,
        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
      }, innerStyle);

      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
    }
  }, {
    key: 'setRippleSize',
    value: function setRippleSize() {
      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
      var height = el.offsetHeight;
      var width = el.offsetWidth;
      var size = Math.max(height, width);

      var oldTop = 0;
      // For browsers that don't support endsWith()
      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
        oldTop = parseInt(el.style.top);
      }
      el.style.height = size + 'px';
      el.style.top = height / 2 - size / 2 + oldTop + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          show = _props.show,
          style = _props.style;


      var mergedRootStyles = (0, _simpleAssign2.default)({
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }, style);

      var ripple = show ? this.getRippleElement(this.props) : null;

      return _react2.default.createElement(
        _ScaleIn2.default,
        {
          maxScale: 0.85,
          style: mergedRootStyles
        },
        ripple
      );
    }
  }]);
  return FocusRipple;
}(_react.Component);

FocusRipple.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
FocusRipple.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes2.default.string,
  innerStyle: _propTypes2.default.object,
  opacity: _propTypes2.default.number,
  show: _propTypes2.default.bool,
  style: _propTypes2.default.object
} : {};
exports.default = FocusRipple;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(1);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _dom = __webpack_require__(423);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
var RenderToLayer = function (_Component) {
  (0, _inherits3.default)(RenderToLayer, _Component);

  function RenderToLayer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RenderToLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RenderToLayer.__proto__ || (0, _getPrototypeOf2.default)(RenderToLayer)).call.apply(_ref, [this].concat(args))), _this), _this.onClickAway = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      if (!_this.props.componentClickAway) {
        return;
      }

      if (!_this.props.open) {
        return;
      }

      var el = _this.layer;
      if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
        _this.props.componentClickAway(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RenderToLayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderLayer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderLayer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unrenderLayer();
    }
  }, {
    key: 'getLayer',
    value: function getLayer() {
      return this.layer;
    }
  }, {
    key: 'unrenderLayer',
    value: function unrenderLayer() {
      if (!this.layer) {
        return;
      }

      if (this.props.useLayerForClickAway) {
        this.layer.style.position = 'relative';
        this.layer.removeEventListener('touchstart', this.onClickAway);
        this.layer.removeEventListener('click', this.onClickAway);
      } else {
        window.removeEventListener('touchstart', this.onClickAway);
        window.removeEventListener('click', this.onClickAway);
      }

      (0, _reactDom.unmountComponentAtNode)(this.layer);
      document.body.removeChild(this.layer);
      this.layer = null;
    }

    /**
     * By calling this method in componentDidMount() and
     * componentDidUpdate(), you're effectively creating a "wormhole" that
     * funnels React's hierarchical updates through to a DOM node on an
     * entirely different part of the page.
     */

  }, {
    key: 'renderLayer',
    value: function renderLayer() {
      var _this2 = this;

      var _props = this.props,
          open = _props.open,
          render = _props.render;


      if (open) {
        if (!this.layer) {
          this.layer = document.createElement('div');
          document.body.appendChild(this.layer);

          if (this.props.useLayerForClickAway) {
            this.layer.addEventListener('touchstart', this.onClickAway);
            this.layer.addEventListener('click', this.onClickAway);
            this.layer.style.position = 'fixed';
            this.layer.style.top = 0;
            this.layer.style.bottom = 0;
            this.layer.style.left = 0;
            this.layer.style.right = 0;
            this.layer.style.zIndex = this.context.muiTheme.zIndex.layer;
          } else {
            setTimeout(function () {
              window.addEventListener('touchstart', _this2.onClickAway);
              window.addEventListener('click', _this2.onClickAway);
            }, 0);
          }
        }

        var layerElement = render();
        this.layerElement = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, layerElement, this.layer);
      } else {
        this.unrenderLayer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return RenderToLayer;
}(_react.Component);

RenderToLayer.defaultProps = {
  useLayerForClickAway: true
};
RenderToLayer.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
RenderToLayer.propTypes = process.env.NODE_ENV !== "production" ? {
  componentClickAway: _propTypes2.default.func,
  open: _propTypes2.default.bool.isRequired,
  render: _propTypes2.default.func.isRequired,
  useLayerForClickAway: _propTypes2.default.bool
} : {};
exports.default = RenderToLayer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(424);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _ScaleInChild = __webpack_require__(501);

var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaleIn = function (_Component) {
  (0, _inherits3.default)(ScaleIn, _Component);

  function ScaleIn() {
    (0, _classCallCheck3.default)(this, ScaleIn);
    return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScaleIn, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          childStyle = _props.childStyle,
          enterDelay = _props.enterDelay,
          maxScale = _props.maxScale,
          minScale = _props.minScale,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'relative',
        height: '100%'
      }, style);

      var newChildren = _react2.default.Children.map(children, function (child) {
        return _react2.default.createElement(
          _ScaleInChild2.default,
          {
            key: child.key,
            enterDelay: enterDelay,
            maxScale: maxScale,
            minScale: minScale,
            style: childStyle
          },
          child
        );
      });

      return _react2.default.createElement(
        _TransitionGroup2.default,
        (0, _extends3.default)({}, other, {
          style: prepareStyles(mergedRootStyles),
          component: 'div'
        }),
        newChildren
      );
    }
  }]);
  return ScaleIn;
}(_react.Component);

ScaleIn.defaultProps = {
  enterDelay: 0
};
ScaleIn.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
ScaleIn.propTypes = process.env.NODE_ENV !== "production" ? {
  childStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  maxScale: _propTypes2.default.number,
  minScale: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = ScaleIn;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _autoPrefix = __webpack_require__(399);

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScaleInChild = function (_Component) {
  (0, _inherits3.default)(ScaleInChild, _Component);

  function ScaleInChild() {
    (0, _classCallCheck3.default)(this, ScaleInChild);
    return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScaleInChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.initializeAnimation(callback);
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.animate();
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.animate();
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');

      this.leaveTimer = setTimeout(callback, 450);
    }
  }, {
    key: 'animate',
    value: function animate() {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '1';
      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
    }
  }, {
    key: 'initializeAnimation',
    value: function initializeAnimation(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'scale(0)');

      this.enterTimer = setTimeout(callback, this.props.enterDelay);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          enterDelay = _props.enterDelay,
          maxScale = _props.maxScale,
          minScale = _props.minScale,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
      }, style);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
        children
      );
    }
  }]);
  return ScaleInChild;
}(_react.Component);

ScaleInChild.defaultProps = {
  enterDelay: 0,
  maxScale: 1,
  minScale: 0
};
ScaleInChild.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
ScaleInChild.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  enterDelay: _propTypes2.default.number,
  maxScale: _propTypes2.default.number,
  minScale: _propTypes2.default.number,
  style: _propTypes2.default.object
} : {};
exports.default = ScaleInChild;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(358);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(360);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var verticalPosition = props.verticalPosition;
  var horizontalPosition = props.horizontalPosition;
  var touchMarginOffset = props.touch ? 10 : 0;
  var touchOffsetTop = props.touch ? -20 : -10;
  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      zIndex = _context$muiTheme.zIndex,
      tooltip = _context$muiTheme.tooltip,
      borderRadius = _context$muiTheme.borderRadius;


  var styles = {
    root: {
      position: 'absolute',
      fontFamily: baseTheme.fontFamily,
      fontSize: '10px',
      lineHeight: '22px',
      padding: '0 8px',
      zIndex: zIndex.tooltip,
      color: tooltip.color,
      overflow: 'hidden',
      top: -10000,
      borderRadius: borderRadius,
      userSelect: 'none',
      opacity: 0,
      right: horizontalPosition === 'left' ? 12 : null,
      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : horizontalPosition === 'right' ? 12 : null,
      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    label: {
      position: 'relative',
      whiteSpace: 'nowrap'
    },
    ripple: {
      position: 'absolute',
      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
      top: verticalPosition === 'bottom' ? 0 : '100%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    },
    rootWhenShown: {
      top: verticalPosition === 'top' ? touchOffsetTop : 36,
      opacity: tooltip.opacity,
      transform: 'translate(0px, ' + offset + 'px)',
      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
    },
    rootWhenTouched: {
      fontSize: '14px',
      lineHeight: '32px',
      padding: '0 16px'
    },
    rippleWhenShown: {
      backgroundColor: tooltip.rippleBackgroundColor,
      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
    }
  };

  return styles;
}

var Tooltip = function (_Component) {
  (0, _inherits3.default)(Tooltip, _Component);

  function Tooltip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offsetWidth: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setRippleSize();
      this.setTooltipPosition();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setTooltipPosition();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setRippleSize();
    }
  }, {
    key: 'setRippleSize',
    value: function setRippleSize() {
      var ripple = this.refs.ripple;
      var tooltip = this.refs.tooltip;
      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);

      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
      if (this.props.show) {
        ripple.style.height = rippleDiameter + 'px';
        ripple.style.width = rippleDiameter + 'px';
      } else {
        ripple.style.width = '0px';
        ripple.style.height = '0px';
      }
    }
  }, {
    key: 'setTooltipPosition',
    value: function setTooltipPosition() {
      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          horizontalPosition = _props.horizontalPosition,
          label = _props.label,
          show = _props.show,
          touch = _props.touch,
          verticalPosition = _props.verticalPosition,
          other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, {
          ref: 'tooltip',
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
        }),
        _react2.default.createElement('div', {
          ref: 'ripple',
          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
        }),
        _react2.default.createElement(
          'span',
          { style: prepareStyles(styles.label) },
          label
        )
      );
    }
  }]);
  return Tooltip;
}(_react.Component);

Tooltip.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  horizontalPosition: _propTypes2.default.oneOf(['left', 'right', 'center']),
  label: _propTypes2.default.node.isRequired,
  show: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  touch: _propTypes2.default.bool,
  verticalPosition: _propTypes2.default.oneOf(['top', 'bottom'])
} : {};
exports.default = Tooltip;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(432);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _toArray2 = __webpack_require__(404);

var _toArray3 = _interopRequireDefault(_toArray2);

var _simpleAssign = __webpack_require__(356);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(200);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TransitionGroup = __webpack_require__(424);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _dom = __webpack_require__(423);

var _dom2 = _interopRequireDefault(_dom);

var _CircleRipple = __webpack_require__(495);

var _CircleRipple2 = _interopRequireDefault(_CircleRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Remove the first element of the array
var shift = function shift(_ref) {
  var _ref2 = (0, _toArray3.default)(_ref),
      newArray = _ref2.slice(1);

  return newArray;
};

var TouchRipple = function (_Component) {
  (0, _inherits3.default)(TouchRipple, _Component);

  function TouchRipple(props, context) {
    (0, _classCallCheck3.default)(this, TouchRipple);

    // Touch start produces a mouse down event for compat reasons. To avoid
    // showing ripples twice we skip showing a ripple for the first mouse down
    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
    // to avoid re-rendering when we change it.
    var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));

    _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.start(event, false);
      }
    };

    _this.handleMouseUp = function () {
      _this.end();
    };

    _this.handleMouseLeave = function () {
      _this.end();
    };

    _this.handleTouchStart = function (event) {
      event.stopPropagation();
      // If the user is swiping (not just tapping), save the position so we can
      // abort ripples if the user appears to be scrolling.
      if (_this.props.abortOnScroll && event.touches) {
        _this.startListeningForScrollAbort(event);
        _this.startTime = Date.now();
      }
      _this.start(event, true);
    };

    _this.handleTouchEnd = function () {
      _this.end();
    };

    _this.handleTouchMove = function (event) {
      // Stop trying to abort if we're already 300ms into the animation
      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
      if (timeSinceStart > 300) {
        _this.stopListeningForScrollAbort();
        return;
      }

      // If the user is scrolling...
      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
      if (deltaY > 6 || deltaX > 6) {
        var currentRipples = _this.state.ripples;
        var ripple = currentRipples[0];
        // This clone will replace the ripple in ReactTransitionGroup with a
        // version that will disappear immediately when removed from the DOM
        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
        // Remove the old ripple and replace it with the new updated one
        currentRipples = shift(currentRipples);
        currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
        _this.setState({ ripples: currentRipples }, function () {
          // Call end after we've set the ripple to abort otherwise the setState
          // in end() merges with this and the ripple abort fails
          _this.end();
        });
      }
    };

    _this.ignoreNextMouseDown = false;

    _this.state = {
      // This prop allows us to only render the ReactTransitionGroup
      // on the first click of the component, making the inital render faster.
      hasRipples: false,
      nextKey: 0,
      ripples: []
    };
    return _this;
  }

  (0, _createClass3.default)(TouchRipple, [{
    key: 'start',
    value: function start(event, isRippleTouchGenerated) {
      var theme = this.context.muiTheme.ripple;

      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
        this.ignoreNextMouseDown = false;
        return;
      }

      var ripples = this.state.ripples;

      // Add a ripple to the ripples array
      ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
        key: this.state.nextKey,
        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
        color: this.props.color || theme.color,
        opacity: this.props.opacity,
        touchGenerated: isRippleTouchGenerated
      })]);

      this.ignoreNextMouseDown = isRippleTouchGenerated;
      this.setState({
        hasRipples: true,
        nextKey: this.state.nextKey + 1,
        ripples: ripples
      });
    }
  }, {
    key: 'end',
    value: function end() {
      var currentRipples = this.state.ripples;
      this.setState({
        ripples: shift(currentRipples)
      });
      if (this.props.abortOnScroll) {
        this.stopListeningForScrollAbort();
      }
    }

    // Check if the user seems to be scrolling and abort the animation if so

  }, {
    key: 'startListeningForScrollAbort',
    value: function startListeningForScrollAbort(event) {
      this.firstTouchY = event.touches[0].clientY;
      this.firstTouchX = event.touches[0].clientX;
      // Note that when scolling Chrome throttles this event to every 200ms
      // Also note we don't listen for scroll events directly as there's no general
      // way to cover cases like scrolling within containers on the page
      document.body.addEventListener('touchmove', this.handleTouchMove);
    }
  }, {
    key: 'stopListeningForScrollAbort',
    value: function stopListeningForScrollAbort() {
      document.body.removeEventListener('touchmove', this.handleTouchMove);
    }
  }, {
    key: 'getRippleStyle',
    value: function getRippleStyle(event) {
      var el = _reactDom2.default.findDOMNode(this);
      var elHeight = el.offsetHeight;
      var elWidth = el.offsetWidth;
      var offset = _dom2.default.offset(el);
      var isTouchEvent = event.touches && event.touches.length;
      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
      var pointerX = pageX - offset.left;
      var pointerY = pageY - offset.top;
      var topLeftDiag = this.calcDiag(pointerX, pointerY);
      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
      var rippleSize = rippleRadius * 2;
      var left = pointerX - rippleRadius;
      var top = pointerY - rippleRadius;

      return {
        directionInvariant: true,
        height: rippleSize,
        width: rippleSize,
        top: top,
        left: left
      };
    }
  }, {
    key: 'calcDiag',
    value: function calcDiag(a, b) {
      return Math.sqrt(a * a + b * b);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style;
      var _state = this.state,
          hasRipples = _state.hasRipples,
          ripples = _state.ripples;
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var rippleGroup = void 0;

      if (hasRipples) {
        var mergedStyles = (0, _simpleAssign2.default)({
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 1 // This is also needed so that ripples do not bleed past a parent border radius.
        }, style);

        rippleGroup = _react2.default.createElement(
          _TransitionGroup2.default,
          { style: prepareStyles(mergedStyles) },
          ripples
        );
      }

      return _react2.default.createElement(
        'div',
        {
          onMouseUp: this.handleMouseUp,
          onMouseDown: this.handleMouseDown,
          onMouseLeave: this.handleMouseLeave,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        },
        rippleGroup,
        children
      );
    }
  }]);
  return TouchRipple;
}(_react.Component);

TouchRipple.defaultProps = {
  abortOnScroll: true
};
TouchRipple.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TouchRipple.propTypes = process.env.NODE_ENV !== "production" ? {
  abortOnScroll: _propTypes2.default.bool,
  centerRipple: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  color: _propTypes2.default.string,
  opacity: _propTypes2.default.number,
  style: _propTypes2.default.object
} : {};
exports.default = TouchRipple;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(381);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(380);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationArrowDropDown = function NavigationArrowDropDown(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
  );
};
NavigationArrowDropDown = (0, _pure2.default)(NavigationArrowDropDown);
NavigationArrowDropDown.displayName = 'NavigationArrowDropDown';
NavigationArrowDropDown.muiName = 'SvgIcon';

exports.default = NavigationArrowDropDown;

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(381);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(380);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationCheck = function NavigationCheck(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
  );
};
NavigationCheck = (0, _pure2.default)(NavigationCheck);
NavigationCheck.displayName = 'NavigationCheck';
NavigationCheck.muiName = 'SvgIcon';

exports.default = NavigationCheck;

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(381);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(380);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationExpandLess = function NavigationExpandLess(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' })
  );
};
NavigationExpandLess = (0, _pure2.default)(NavigationExpandLess);
NavigationExpandLess.displayName = 'NavigationExpandLess';
NavigationExpandLess.muiName = 'SvgIcon';

exports.default = NavigationExpandLess;

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(381);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(380);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationExpandMore = function NavigationExpandMore(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
  );
};
NavigationExpandMore = (0, _pure2.default)(NavigationExpandMore);
NavigationExpandMore.displayName = 'NavigationExpandMore';
NavigationExpandMore.muiName = 'SvgIcon';

exports.default = NavigationExpandMore;

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendChildren = extendChildren;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extendChildren(children, extendedProps, extendedChildren) {
  return _react2.default.Children.map(children, function (child) {
    if (!_react2.default.isValidElement(child)) {
      return child;
    }

    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;

    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;

    return _react2.default.cloneElement(child, newProps, newChildren);
  });
}

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertColorToString = convertColorToString;
exports.convertHexToRGB = convertHexToRGB;
exports.decomposeColor = decomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;

var _warning = __webpack_require__(20);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function convertColorToString(color) {
  var type = color.type,
      values = color.values;


  if (type.indexOf('rgb') > -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    for (var i = 0; i < 3; i++) {
      values[i] = parseInt(values[i]);
    }
  }

  var colorString = void 0;

  if (type.indexOf('hsl') > -1) {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
  } else {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
  }

  if (values.length === 4) {
    colorString += ', ' + color.values[3] + ')';
  } else {
    colorString += ')';
  }

  return colorString;
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */
function convertHexToRGB(color) {
  if (color.length === 4) {
    var extendedColor = '#';
    for (var i = 1; i < color.length; i++) {
      extendedColor += color.charAt(i) + color.charAt(i);
    }
    color = extendedColor;
  }

  var values = {
    r: parseInt(color.substr(1, 2), 16),
    g: parseInt(color.substr(3, 2), 16),
    b: parseInt(color.substr(5, 2), 16)
  };

  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values and color names.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */
function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');

  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(marker !== -1, 'Material-UI: The ' + color + ' color was not parsed correctly,\n  because it has an unsupported format (color name or RGB %). This may cause issues in component rendering.') : void 0;

  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  return { type: type, values: values };
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
 */
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);

  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);

  if (color.type.indexOf('rgb') > -1) {
    var rgb = color.values.map(function (val) {
      val /= 255; // normalized
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
  } else if (color.type.indexOf('hsl') > -1) {
    return color.values[2] / 100;
  }
}

/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value, 0, 1);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  color.values[3] = value;

  return convertColorToString(color);
}

/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return convertColorToString(color);
}

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return convertColorToString(color);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(403);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

exports.default = defineProperty;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function defineProperty(o, p, attr) {
  return (0, _defineProperty2.default)(o, p, attr);
}

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(353);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(351);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(352);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(355);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(354);

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = __webpack_require__(382);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(428);

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__(357);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(402);

var _assign2 = _interopRequireDefault(_assign);

exports.withOptions = withOptions;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowEqual = __webpack_require__(55);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _warning = __webpack_require__(20);

var _warning2 = _interopRequireDefault(_warning);

var _supports = __webpack_require__(512);

var supports = _interopRequireWildcard(_supports);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEventOptions = {
  capture: false,
  passive: false
};
/* eslint-disable prefer-spread */

function mergeDefaultEventOptions(options) {
  return (0, _assign2.default)({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(supports.passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  if (supports.addEventListener) {
    target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  } else if (supports.attachEvent) {
    // IE8+ Support
    target.attachEvent('on' + eventName, function () {
      callback.call(target);
    });
  }
}

function off(target, eventName, callback, options) {
  if (supports.removeEventListener) {
    target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  } else if (supports.detachEvent) {
    // IE8+ Support
    target.detachEvent('on' + eventName, callback);
  }
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = (0, _objectWithoutProperties3.default)(props, ['children', 'target']);


  (0, _keys2.default)(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];
    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
    }
  });
}

function withOptions(handler, options) {
  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(options, 'react-event-listener: Should be specified options in withOptions.') : void 0;

  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener = function (_Component) {
  (0, _inherits3.default)(EventListener, _Component);

  function EventListener() {
    (0, _classCallCheck3.default)(this, EventListener);
    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.removeListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.applyListeners(on);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      this.applyListeners(off);
    }
  }, {
    key: 'applyListeners',
    value: function applyListeners(onOrOff) {
      var target = this.props.target;


      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(this.props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return EventListener;
}(_react.Component);

process.env.NODE_ENV !== "production" ? EventListener.propTypes = {
  /**
   * You can provide a single child too.
   */
  children: _propTypes2.default.element,
  /**
   * The DOM target to listen to.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired
} : void 0;
exports.default = EventListener;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passiveOption = exports.detachEvent = exports.attachEvent = exports.removeEventListener = exports.addEventListener = exports.canUseDOM = undefined;

var _defineProperty = __webpack_require__(510);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = canUseDOM && 'addEventListener' in window;
var removeEventListener = exports.removeEventListener = canUseDOM && 'removeEventListener' in window;

// IE8+ Support
var attachEvent = exports.attachEvent = canUseDOM && 'attachEvent' in window;
var detachEvent = exports.detachEvent = canUseDOM && 'detachEvent' in window;

// Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOption = exports.passiveOption = function () {
  var cache = null;

  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, (0, _defineProperty2.default)({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (e) {} // eslint-disable-line no-empty

    cache = supportsPassiveOption;

    return supportsPassiveOption;
  }();
}();

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(1);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createEagerElementUtil = __webpack_require__(520);

var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

var _isReferentiallyTransparentFunctionComponent = __webpack_require__(517);

var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (p, c) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
  };
};

exports.default = createFactory;

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
};

exports.default = isClassComponent;

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _isClassComponent = __webpack_require__(516);

var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (process.env.NODE_ENV === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _react = __webpack_require__(1);

var _setDisplayName = __webpack_require__(425);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(426);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _createEagerFactory = __webpack_require__(514);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);

    var ShouldUpdate = function (_Component) {
      _inherits(ShouldUpdate, _Component);

      function ShouldUpdate() {
        _classCallCheck(this, ShouldUpdate);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (process.env.NODE_ENV !== 'production') {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

exports.default = shouldUpdate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  }

  return _react2.default.createElement(Component, props);
};

exports.default = createEagerElementUtil;

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _DropDownMenu = __webpack_require__(480);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _MenuItem = __webpack_require__(487);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuSelect = function MenuSelect(_ref) {
  var id = _ref.id,
      name = _ref.name,
      title = _ref.title,
      selectedOption = _ref.selectedOption,
      controlFunc = _ref.controlFunc,
      _ref$docAccess = _ref.docAccess,
      docAccess = _ref$docAccess === undefined ? [] : _ref$docAccess;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _DropDownMenu2.default,
      { value: undefined.state.value, onChange: undefined.handleChange, openImmediately: true },
      _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Never' }),
      _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Every Night' }),
      _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'Weeknights' }),
      _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Weekends' }),
      _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Weekly' })
    ),
    _react2.default.createElement(
      'label',
      null,
      title
    )
  );
};

Select.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  docAccess: _react2.default.PropTypes.arrayOf(_react.PropTypes.object),
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = MenuSelect;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MenuSelect.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })
]))
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcz8yMWFmIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzPzFkZmUiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanM/YjI2NSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcz8wNTc4Iiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanM/YWFkOSIsIndlYnBhY2s6Ly8vLi9+L3NpbXBsZS1hc3NpZ24vaW5kZXguanM/ZmEyNiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcz8zZWRmIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanM/Yjg4OSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzPzFiNjIiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9zdHlsZXMvdHJhbnNpdGlvbnMuanM/ZTU4YyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanM/MzAyNyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanM/ZWNlMiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanM/NzdhYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanM/NDExNiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL3V0aWxzL3Byb3BUeXBlcy5qcz82MjUwIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzcwNTEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzP2Q4NTAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcz82OTQ2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz8wZGEzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzPzkzNWQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWNvbXBvc2Uvc2hhbGxvd0VxdWFsLmpzP2RhYmIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzPzI0YzgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzP2FmZjciLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcz8xZTg2Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcz9iNWMwIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanM/ZDBkMiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanM/ZThjZCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1N2Z0ljb24vaW5kZXguanM/MDcyOSIsIndlYnBhY2s6Ly8vLi9+L3JlY29tcG9zZS9wdXJlLmpzPzQwNWIiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzP2Y0YmQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzPzQ4ZWEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzP2NlMDAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcz80NWQzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanM/NzU5OCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzPzJjODAiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcz9kOGNmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzP2E1ZmIiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanM/Yzk0NSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzPzJhNmMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcz9mNjVmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz80OWE0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanM/YjZlMCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzPzZlZTIiLCJ3ZWJwYWNrOi8vLy4vfi9rZXljb2RlL2luZGV4LmpzP2M0ZTMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9QYXBlci9pbmRleC5qcz9lMTNhIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvdXRpbHMvYXV0b1ByZWZpeC5qcz81MDU0Iiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvdXRpbHMvZXZlbnRzLmpzPzQzMzgiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qcz9lZmMyIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanM/ZTZjYSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzPzVmNzAiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheS5qcz9hYTJkIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanM/YWI0NCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcz9iZDFmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanM/NWNmOSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcz85YTk0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzP2Q3ZDgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanM/MWUwNyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzP2Q0N2QiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzP2EwM2UiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanM/MTQ1NSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanM/NjJhNyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanM/ZmUxOCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0ljb25CdXR0b24vaW5kZXguanM/ODNkNSIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0xpc3QvTGlzdC5qcz9lNmNjIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvTWVudS9NZW51LmpzPzkyODYiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9NZW51SXRlbS9NZW51SXRlbS5qcz8xYjJhIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvUG9wb3Zlci9Qb3BvdmVyLmpzP2M4ZmIiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbi5qcz83MzE1Iiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvdXRpbHMvZG9tLmpzP2FiYzAiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qcz81MTIxIiwid2VicGFjazovLy8uL34vcmVjb21wb3NlL3NldERpc3BsYXlOYW1lLmpzPzYzMzUiLCJ3ZWJwYWNrOi8vLy4vfi9yZWNvbXBvc2Uvd3JhcERpc3BsYXlOYW1lLmpzPzljNTkiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcz9hYTRiIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzP2ZlMDYiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanM/YmIwMCIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanM/YTcwZCIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanM/ZDE2YiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcz8xODI1Iiwid2VicGFjazovLy8uL34vY2hhaW4tZnVuY3Rpb24vaW5kZXguanM/NzAyZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzPzY2OWQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcz84MGU0Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanM/NzM4YyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzP2I3ZDgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanM/NTE5MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcz9jYzNmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzP2Y5MDkiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzP2YwN2EiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzPzIzOGQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcz9kNWU4Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzPzYxOTkiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcz9iNGIzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcz8xYWQxIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcz83MjdhIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanM/ZTVhZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzP2E0YjMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanM/MTg0MyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanM/NTE4OSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcz8wMTI3Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzPzBhOTEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2UyMDkiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanM/MGQzYiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzPzU1M2QiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcz81YzBjIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanM/NDdmZCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanM/ZDIzOCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanM/OTY2NSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanM/NDEzYSIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcz8yOTAwIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzPzljODgiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcz9jZTdkIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzPzFlMDkiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcz85MDA3Iiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanM/OTAzNCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzP2M4MmMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanM/ZWFhMyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcz9jOThmIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzP2IxOTUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzPzY3MGEiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzP2I4YzUiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanM/ZGFhNCIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanM/YmYwZSIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC50aHJvdHRsZS9pbmRleC5qcz9lMWNlIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRHJvcERvd25NZW51L0Ryb3BEb3duTWVudS5qcz83MjAyIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRHJvcERvd25NZW51L2luZGV4LmpzP2NlNTEiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9Gb250SWNvbi9Gb250SWNvbi5qcz80MmZiIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRm9udEljb24vaW5kZXguanM/ZjBjNyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0ljb25CdXR0b24vSWNvbkJ1dHRvbi5qcz83N2QzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvTGlzdC9MaXN0SXRlbS5qcz9iMTIxIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvTGlzdC9OZXN0ZWRMaXN0LmpzP2VmZTMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9NZW51L21lbnVVdGlscy5qcz9mN2YxIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvTWVudUl0ZW0vaW5kZXguanM/MjllOCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1BhcGVyL1BhcGVyLmpzPzIxOTYiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9Qb3BvdmVyL1BvcG92ZXJBbmltYXRpb25EZWZhdWx0LmpzP2M5YmIiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9Qb3BvdmVyL1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5qcz83OTQ4Iiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvU3ViaGVhZGVyL1N1YmhlYWRlci5qcz81MDk5Iiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvU3ViaGVhZGVyL2luZGV4LmpzP2ZhMGIiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9TdmdJY29uL1N2Z0ljb24uanM/ZjcxNyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL0JlZm9yZUFmdGVyV3JhcHBlci5qcz8zNDk5Iiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvaW50ZXJuYWwvQ2lyY2xlUmlwcGxlLmpzPzBhYmUiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9DbGVhckZpeC5qcz9kMjM4Iiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvaW50ZXJuYWwvQ2xpY2tBd2F5TGlzdGVuZXIuanM/YjgzZCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL0ZvY3VzUmlwcGxlLmpzPzJkM2EiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9SZW5kZXJUb0xheWVyLmpzPzFlZjgiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9TY2FsZUluLmpzPzk0NzIiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9TY2FsZUluQ2hpbGQuanM/MzU2OCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL1Rvb2x0aXAuanM/NTg1NCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL1RvdWNoUmlwcGxlLmpzP2JkY2EiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9hcnJvdy1kcm9wLWRvd24uanM/ZmFhNyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2NoZWNrLmpzPzNmNzUiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9leHBhbmQtbGVzcy5qcz9lZTc2Iiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vZXhwYW5kLW1vcmUuanM/NTFlZiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL3V0aWxzL2NoaWxkVXRpbHMuanM/MGNlMiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3IuanM/NjM5YiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWV2ZW50LWxpc3RlbmVyL2xpYi9kZWZpbmUtcHJvcGVydHkuanM/N2MxZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWV2ZW50LWxpc3RlbmVyL2xpYi9pbmRleC5qcz83NWE5Iiwid2VicGFjazovLy8uL34vcmVhY3QtZXZlbnQtbGlzdGVuZXIvbGliL3N1cHBvcnRzLmpzP2NmMTQiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qcz80OGEzIiwid2VicGFjazovLy8uL34vcmVjb21wb3NlL2NyZWF0ZUVhZ2VyRmFjdG9yeS5qcz83M2FmIiwid2VicGFjazovLy8uL34vcmVjb21wb3NlL2dldERpc3BsYXlOYW1lLmpzP2IxZTEiLCJ3ZWJwYWNrOi8vLy4vfi9yZWNvbXBvc2UvaXNDbGFzc0NvbXBvbmVudC5qcz8yY2YwIiwid2VicGFjazovLy8uL34vcmVjb21wb3NlL2lzUmVmZXJlbnRpYWxseVRyYW5zcGFyZW50RnVuY3Rpb25Db21wb25lbnQuanM/MzVkZSIsIndlYnBhY2s6Ly8vLi9+L3JlY29tcG9zZS9zZXRTdGF0aWMuanM/Y2M2MiIsIndlYnBhY2s6Ly8vLi9+L3JlY29tcG9zZS9zaG91bGRVcGRhdGUuanM/Mzg1OSIsIndlYnBhY2s6Ly8vLi9+L3JlY29tcG9zZS91dGlscy9jcmVhdGVFYWdlckVsZW1lbnRVdGlsLmpzPzc3MTMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRm9ybXNDb21wb25lbnQvTWVudVNlbGVjdC5qc3g/NWYyYSJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJDcmVhdGVEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwidGl0bGUiLCJjb250ZW50IiwiZG9jdW1lbnREYXRhIiwiaGlzdG9yeSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFjdGlvbnMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRzIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiTWVudVNlbGVjdCIsImlkIiwibmFtZSIsInNlbGVjdGVkT3B0aW9uIiwiY29udHJvbEZ1bmMiLCJkb2NBY2Nlc3MiLCJTZWxlY3QiLCJzdHJpbmciLCJhcnJheU9mIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FB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RUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsU0FBUyxvQ0FBb0M7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQywwQ0FBMEM7QUFDMUMsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHVCOzs7Ozs7OzsrQ0Nwc0JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxxQkFBcUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwwQjs7Ozs7Ozs7K0NDNWdCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OytDQ3RiQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsNkRBQTZEO0FBQzdELFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVyw2REFBNkQ7QUFDeEU7QUFDQTtBQUNBLGFBQWEsb0RBQW9ELDREQUE0RDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsbURBQW1EO0FBQ25EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnREFBZ0Qsb0RBQW9ELHNDQUFzQztBQUMxSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELCtCOzs7Ozs7OztBQy9rQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLHlDOzs7Ozs7OytDQ25CQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDJCOzs7Ozs7OztBQzdKQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixxQzs7Ozs7OzsrQ0NiQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0IsY0FBYzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix1Q0FBdUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkNBQTZDLHNCQUFzQjtBQUNuRTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3R0FBd0c7O0FBRXhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsNkI7Ozs7Ozs7OytDQy9YQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Qyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxnQzs7Ozs7Ozs7K0NDdExBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztB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OztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQTZDO0FBQ2xFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVcscUNBQXFDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDBCOzs7Ozs7OzsrQ0NuT0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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LGFBQVksUUFBaEM7QUFMRixLQURGO0FBUUU7QUFBQTtBQUFBO0FBQVFTO0FBQVI7QUFSRixHQURpQjtBQUFBLENBQW5COztBQWFBc0IsT0FBT2pCLFNBQVAsR0FBbUI7QUFDakJhLFFBQU0sZ0JBQU1YLFNBQU4sQ0FBZ0JnQixNQUFoQixDQUF1QmQsVUFEWjtBQUVqQlQsU0FBTyxnQkFBTU8sU0FBTixDQUFnQmdCLE1BQWhCLENBQXVCZCxVQUZiO0FBR2pCUSxNQUFJLGdCQUFNVixTQUFOLENBQWdCZ0IsTUFBaEIsQ0FBdUJkLFVBSFY7QUFJakJZLGFBQVcsZ0JBQU1kLFNBQU4sQ0FBZ0JpQixPQUFoQixDQUF3QixpQkFBVWhCLE1BQWxDLENBSk07QUFLakJXLGtCQUFnQixnQkFBTVosU0FBTixDQUFnQmdCLE1BTGY7QUFNakJILGVBQWEsZ0JBQU1iLFNBQU4sQ0FBZ0JrQixJQUFoQixDQUFxQmhCO0FBTmpCLENBQW5COztrQkFTZU8sVSIsImZpbGUiOiIwLjU5ZmJkZWY2YzM5YzdlZjc3YjBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBEb2N1bWVudEZvcm0gZnJvbSAnLi9Eb2N1bWVudEZvcm0nO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgTWVudVNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L01lbnVTZWxlY3QnO1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJztcblxuY2xhc3MgQ3JlYXRlRG9jdW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgZG9jVGl0bGU6ICcnLFxuICAgICAgZG9jQ29udGVudDogJycsXG4gICAgICBhY2Nlc3M6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrU2F2ZSA9IHRoaXMub25DbGlja1NhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9jVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQudmFsdWUuYWNjZXNzXG4gICAgfSk7XG4gIH1cblxuXG4gIG9uQ2xpY2tTYXZlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkb2MgPSB7XG4gICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LmRvY1RpdGxlLnZhbHVlLFxuICAgICAgY29udGVudDogZXZlbnQudGFyZ2V0LmRvY0NvbnRlbnQudmFsdWVcbiAgICB9XG4gICAgLy8gdGhpcy5wcm9wcy5hY3Rpb25zLmNyZWF0ZURvY3VtZW50KGRvYyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgY29uc3QgZG9jdW1lbnREYXRhID0ge1xuICAgICAgZG9jVGl0bGU6IHRoaXMuc3RhdGUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiB0aGlzLnN0YXRlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IHRoaXMuc3RhdGUuYWNjZXNzLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDM+QWRkIERvY3VtZW50PC9oMz5cbiAgICAgICAgICAgIDxEb2N1bWVudEZvcm1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLmFjY2Vzc31cbiAgICAgICAgICAgIGRvY3VtZW50RGF0YT17ZG9jdW1lbnREYXRhfVxuICAgICAgICAgICAgb25TYXZlPXt0aGlzLm9uQ2xpY2tTYXZlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5DcmVhdGVEb2N1bWVudC5wcm9wVHlwZXMgPSB7XG4gIGFjdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKXtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50cyBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGRvY3VtZW50QWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ3JlYXRlRG9jdW1lbnQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01hbmFnZURvY3VtZW50LmpzeCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMzUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDM1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcbi8vIG1vZHVsZSBpZCA9IDM1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3NpbXBsZS1hc3NpZ24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDM1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjAnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gIGVhc2VPdXRGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsXG4gIGVhc2VJbk91dEZ1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1LCAwLjU1LCAwLjk1KScsXG5cbiAgZWFzZU91dDogZnVuY3Rpb24gZWFzZU91dChkdXJhdGlvbiwgcHJvcGVydHksIGRlbGF5LCBlYXNlRnVuY3Rpb24pIHtcbiAgICBlYXNlRnVuY3Rpb24gPSBlYXNlRnVuY3Rpb24gfHwgdGhpcy5lYXNlT3V0RnVuY3Rpb247XG5cbiAgICBpZiAocHJvcGVydHkgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb3BlcnR5KSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgdmFyIHRyYW5zaXRpb25zID0gJyc7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0cmFuc2l0aW9ucykgdHJhbnNpdGlvbnMgKz0gJywnO1xuICAgICAgICB0cmFuc2l0aW9ucyArPSB0aGlzLmNyZWF0ZShkdXJhdGlvbiwgcHJvcGVydHlbaV0sIGRlbGF5LCBlYXNlRnVuY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNpdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShkdXJhdGlvbiwgcHJvcGVydHksIGRlbGF5LCBlYXNlRnVuY3Rpb24pO1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoZHVyYXRpb24sIHByb3BlcnR5LCBkZWxheSwgZWFzZUZ1bmN0aW9uKSB7XG4gICAgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAnNDUwbXMnO1xuICAgIHByb3BlcnR5ID0gcHJvcGVydHkgfHwgJ2FsbCc7XG4gICAgZGVsYXkgPSBkZWxheSB8fCAnMG1zJztcbiAgICBlYXNlRnVuY3Rpb24gPSBlYXNlRnVuY3Rpb24gfHwgJ2xpbmVhcic7XG5cbiAgICByZXR1cm4gcHJvcGVydHkgKyAnICcgKyBkdXJhdGlvbiArICcgJyArIGVhc2VGdW5jdGlvbiArICcgJyArIGRlbGF5O1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9zdHlsZXMvdHJhbnNpdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDM2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMzYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDM2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gMzY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBob3Jpem9udGFsID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2xlZnQnLCAnbWlkZGxlJywgJ3JpZ2h0J10pO1xudmFyIHZlcnRpY2FsID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJ10pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgY29ybmVyczogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnXSksXG5cbiAgaG9yaXpvbnRhbDogaG9yaXpvbnRhbCxcblxuICB2ZXJ0aWNhbDogdmVydGljYWwsXG5cbiAgb3JpZ2luOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKHtcbiAgICBob3Jpem9udGFsOiBob3Jpem9udGFsLFxuICAgIHZlcnRpY2FsOiB2ZXJ0aWNhbFxuICB9KSxcblxuICBjb3JuZXJzQW5kQ2VudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnYm90dG9tLWNlbnRlcicsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAndG9wLWNlbnRlcicsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnXSksXG5cbiAgc3RyaW5nT3JOdW1iZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcblxuICB6RGVwdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWzAsIDEsIDIsIDMsIDQsIDVdKVxuXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS91dGlscy9wcm9wVHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDM2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDM2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDM2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnZmJqcy9saWIvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9zaGFsbG93RXF1YWwyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlY29tcG9zZS9zaGFsbG93RXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDM3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMzc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMzc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDM3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9TdmdJY29uMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9TdmdJY29uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Nob3VsZFVwZGF0ZSA9IHJlcXVpcmUoJy4vc2hvdWxkVXBkYXRlJyk7XG5cbnZhciBfc2hvdWxkVXBkYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Nob3VsZFVwZGF0ZSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnLi9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxudmFyIF9zZXREaXNwbGF5TmFtZSA9IHJlcXVpcmUoJy4vc2V0RGlzcGxheU5hbWUnKTtcblxudmFyIF9zZXREaXNwbGF5TmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXREaXNwbGF5TmFtZSk7XG5cbnZhciBfd3JhcERpc3BsYXlOYW1lID0gcmVxdWlyZSgnLi93cmFwRGlzcGxheU5hbWUnKTtcblxudmFyIF93cmFwRGlzcGxheU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd3JhcERpc3BsYXlOYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHB1cmUgPSBmdW5jdGlvbiBwdXJlKEJhc2VDb21wb25lbnQpIHtcbiAgdmFyIGhvYyA9ICgwLCBfc2hvdWxkVXBkYXRlMi5kZWZhdWx0KShmdW5jdGlvbiAocHJvcHMsIG5leHRQcm9wcykge1xuICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHByb3BzLCBuZXh0UHJvcHMpO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiAoMCwgX3NldERpc3BsYXlOYW1lMi5kZWZhdWx0KSgoMCwgX3dyYXBEaXNwbGF5TmFtZTIuZGVmYXVsdCkoQmFzZUNvbXBvbmVudCwgJ3B1cmUnKSkoaG9jKEJhc2VDb21wb25lbnQpKTtcbiAgfVxuXG4gIHJldHVybiBob2MoQmFzZUNvbXBvbmVudCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBwdXJlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWNvbXBvc2UvcHVyZS5qc1xuLy8gbW9kdWxlIGlkID0gMzgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAzODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDM4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMzg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMzg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSAzODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDM5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDM5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBTb3VyY2U6IGh0dHA6Ly9qc2ZpZGRsZS5uZXQvdld4OFYvXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2MDMxOTUvZnVsbC1saXN0LW9mLWphdmFzY3JpcHQta2V5Y29kZXNcblxuLyoqXG4gKiBDb25lbmllbmNlIG1ldGhvZCByZXR1cm5zIGNvcnJlc3BvbmRpbmcgdmFsdWUgZm9yIGdpdmVuIGtleU5hbWUgb3Iga2V5Q29kZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBrZXlDb2RlIHtOdW1iZXJ9IG9yIGtleU5hbWUge1N0cmluZ31cbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZWFyY2hJbnB1dCkge1xuICAvLyBLZXlib2FyZCBFdmVudHNcbiAgaWYgKHNlYXJjaElucHV0ICYmICdvYmplY3QnID09PSB0eXBlb2Ygc2VhcmNoSW5wdXQpIHtcbiAgICB2YXIgaGFzS2V5Q29kZSA9IHNlYXJjaElucHV0LndoaWNoIHx8IHNlYXJjaElucHV0LmtleUNvZGUgfHwgc2VhcmNoSW5wdXQuY2hhckNvZGVcbiAgICBpZiAoaGFzS2V5Q29kZSkgc2VhcmNoSW5wdXQgPSBoYXNLZXlDb2RlXG4gIH1cblxuICAvLyBOdW1iZXJzXG4gIGlmICgnbnVtYmVyJyA9PT0gdHlwZW9mIHNlYXJjaElucHV0KSByZXR1cm4gbmFtZXNbc2VhcmNoSW5wdXRdXG5cbiAgLy8gRXZlcnl0aGluZyBlbHNlIChjYXN0IHRvIHN0cmluZylcbiAgdmFyIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hJbnB1dClcblxuICAvLyBjaGVjayBjb2Rlc1xuICB2YXIgZm91bmROYW1lZEtleSA9IGNvZGVzW3NlYXJjaC50b0xvd2VyQ2FzZSgpXVxuICBpZiAoZm91bmROYW1lZEtleSkgcmV0dXJuIGZvdW5kTmFtZWRLZXlcblxuICAvLyBjaGVjayBhbGlhc2VzXG4gIHZhciBmb3VuZE5hbWVkS2V5ID0gYWxpYXNlc1tzZWFyY2gudG9Mb3dlckNhc2UoKV1cbiAgaWYgKGZvdW5kTmFtZWRLZXkpIHJldHVybiBmb3VuZE5hbWVkS2V5XG5cbiAgLy8gd2VpcmQgY2hhcmFjdGVyP1xuICBpZiAoc2VhcmNoLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHNlYXJjaC5jaGFyQ29kZUF0KDApXG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIEdldCBieSBuYW1lXG4gKlxuICogICBleHBvcnRzLmNvZGVbJ2VudGVyJ10gLy8gPT4gMTNcbiAqL1xuXG52YXIgY29kZXMgPSBleHBvcnRzLmNvZGUgPSBleHBvcnRzLmNvZGVzID0ge1xuICAnYmFja3NwYWNlJzogOCxcbiAgJ3RhYic6IDksXG4gICdlbnRlcic6IDEzLFxuICAnc2hpZnQnOiAxNixcbiAgJ2N0cmwnOiAxNyxcbiAgJ2FsdCc6IDE4LFxuICAncGF1c2UvYnJlYWsnOiAxOSxcbiAgJ2NhcHMgbG9jayc6IDIwLFxuICAnZXNjJzogMjcsXG4gICdzcGFjZSc6IDMyLFxuICAncGFnZSB1cCc6IDMzLFxuICAncGFnZSBkb3duJzogMzQsXG4gICdlbmQnOiAzNSxcbiAgJ2hvbWUnOiAzNixcbiAgJ2xlZnQnOiAzNyxcbiAgJ3VwJzogMzgsXG4gICdyaWdodCc6IDM5LFxuICAnZG93bic6IDQwLFxuICAnaW5zZXJ0JzogNDUsXG4gICdkZWxldGUnOiA0NixcbiAgJ2NvbW1hbmQnOiA5MSxcbiAgJ2xlZnQgY29tbWFuZCc6IDkxLFxuICAncmlnaHQgY29tbWFuZCc6IDkzLFxuICAnbnVtcGFkIConOiAxMDYsXG4gICdudW1wYWQgKyc6IDEwNyxcbiAgJ251bXBhZCAtJzogMTA5LFxuICAnbnVtcGFkIC4nOiAxMTAsXG4gICdudW1wYWQgLyc6IDExMSxcbiAgJ251bSBsb2NrJzogMTQ0LFxuICAnc2Nyb2xsIGxvY2snOiAxNDUsXG4gICdteSBjb21wdXRlcic6IDE4MixcbiAgJ215IGNhbGN1bGF0b3InOiAxODMsXG4gICc7JzogMTg2LFxuICAnPSc6IDE4NyxcbiAgJywnOiAxODgsXG4gICctJzogMTg5LFxuICAnLic6IDE5MCxcbiAgJy8nOiAxOTEsXG4gICdgJzogMTkyLFxuICAnWyc6IDIxOSxcbiAgJ1xcXFwnOiAyMjAsXG4gICddJzogMjIxLFxuICBcIidcIjogMjIyXG59XG5cbi8vIEhlbHBlciBhbGlhc2VzXG5cbnZhciBhbGlhc2VzID0gZXhwb3J0cy5hbGlhc2VzID0ge1xuICAnd2luZG93cyc6IDkxLFxuICAn4oenJzogMTYsXG4gICfijKUnOiAxOCxcbiAgJ+KMgyc6IDE3LFxuICAn4oyYJzogOTEsXG4gICdjdGwnOiAxNyxcbiAgJ2NvbnRyb2wnOiAxNyxcbiAgJ29wdGlvbic6IDE4LFxuICAncGF1c2UnOiAxOSxcbiAgJ2JyZWFrJzogMTksXG4gICdjYXBzJzogMjAsXG4gICdyZXR1cm4nOiAxMyxcbiAgJ2VzY2FwZSc6IDI3LFxuICAnc3BjJzogMzIsXG4gICdwZ3VwJzogMzMsXG4gICdwZ2RuJzogMzQsXG4gICdpbnMnOiA0NSxcbiAgJ2RlbCc6IDQ2LFxuICAnY21kJzogOTFcbn1cblxuXG4vKiFcbiAqIFByb2dyYW1hdGljYWxseSBhZGQgdGhlIGZvbGxvd2luZ1xuICovXG5cbi8vIGxvd2VyIGNhc2UgY2hhcnNcbmZvciAoaSA9IDk3OyBpIDwgMTIzOyBpKyspIGNvZGVzW1N0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaSAtIDMyXG5cbi8vIG51bWJlcnNcbmZvciAodmFyIGkgPSA0ODsgaSA8IDU4OyBpKyspIGNvZGVzW2kgLSA0OF0gPSBpXG5cbi8vIGZ1bmN0aW9uIGtleXNcbmZvciAoaSA9IDE7IGkgPCAxMzsgaSsrKSBjb2Rlc1snZicraV0gPSBpICsgMTExXG5cbi8vIG51bXBhZCBrZXlzXG5mb3IgKGkgPSAwOyBpIDwgMTA7IGkrKykgY29kZXNbJ251bXBhZCAnK2ldID0gaSArIDk2XG5cbi8qKlxuICogR2V0IGJ5IGNvZGVcbiAqXG4gKiAgIGV4cG9ydHMubmFtZVsxM10gLy8gPT4gJ0VudGVyJ1xuICovXG5cbnZhciBuYW1lcyA9IGV4cG9ydHMubmFtZXMgPSBleHBvcnRzLnRpdGxlID0ge30gLy8gdGl0bGUgZm9yIGJhY2t3YXJkIGNvbXBhdFxuXG4vLyBDcmVhdGUgcmV2ZXJzZSBtYXBwaW5nXG5mb3IgKGkgaW4gY29kZXMpIG5hbWVzW2NvZGVzW2ldXSA9IGlcblxuLy8gQWRkIGFsaWFzZXNcbmZvciAodmFyIGFsaWFzIGluIGFsaWFzZXMpIHtcbiAgY29kZXNbYWxpYXNdID0gYWxpYXNlc1thbGlhc11cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9rZXljb2RlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1BhcGVyMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9QYXBlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBzZXQ6IGZ1bmN0aW9uIHNldChzdHlsZSwga2V5LCB2YWx1ZSkge1xuICAgIHN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvdXRpbHMvYXV0b1ByZWZpeC5qc1xuLy8gbW9kdWxlIGlkID0gMzk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgb25jZTogZnVuY3Rpb24gb25jZShlbCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgdHlwZUFycmF5ID0gdHlwZSA/IHR5cGUuc3BsaXQoJyAnKSA6IFtdO1xuICAgIHZhciByZWN1cnNpdmVGdW5jdGlvbiA9IGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC50eXBlLCByZWN1cnNpdmVGdW5jdGlvbik7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXZlbnQpO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gdHlwZUFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0aGlzLm9uKGVsLCB0eXBlQXJyYXlbaV0sIHJlY3Vyc2l2ZUZ1bmN0aW9uKTtcbiAgICB9XG4gIH0sXG4gIG9uOiBmdW5jdGlvbiBvbihlbCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFOCsgU3VwcG9ydFxuICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChlbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIG9mZjogZnVuY3Rpb24gb2ZmKGVsLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUU4KyBTdXBwb3J0XG4gICAgICBlbC5kZXRhY2hFdmVudCgnb24nICsgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSxcbiAgaXNLZXlib2FyZDogZnVuY3Rpb24gaXNLZXlib2FyZChldmVudCkge1xuICAgIHJldHVybiBbJ2tleWRvd24nLCAna2V5cHJlc3MnLCAna2V5dXAnXS5pbmRleE9mKGV2ZW50LnR5cGUpICE9PSAtMTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvdXRpbHMvZXZlbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb21cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDQwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0MDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyIDogKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA0MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDQxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0MTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfSWNvbkJ1dHRvbiA9IHJlcXVpcmUoJy4vSWNvbkJ1dHRvbicpO1xuXG52YXIgX0ljb25CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSWNvbkJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9JY29uQnV0dG9uMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9JY29uQnV0dG9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfU3ViaGVhZGVyID0gcmVxdWlyZSgnLi4vU3ViaGVhZGVyJyk7XG5cbnZhciBfU3ViaGVhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N1YmhlYWRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBMaXN0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoTGlzdCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlzdCgpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBMaXN0KTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoTGlzdC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoTGlzdCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoTGlzdCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGlsZHJlbicsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIGhhc1N1YmhlYWRlciA9IGZhbHNlO1xuXG4gICAgICB2YXIgZmlyc3RDaGlsZCA9IF9yZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVswXTtcbiAgICAgIGlmICgoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShmaXJzdENoaWxkKSAmJiBmaXJzdENoaWxkLnR5cGUgPT09IF9TdWJoZWFkZXIyLmRlZmF1bHQpIHtcbiAgICAgICAgaGFzU3ViaGVhZGVyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlcyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHBhZGRpbmc6IChoYXNTdWJoZWFkZXIgPyAwIDogOCkgKyAncHggMHB4IDhweCAwcHgnXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMaXN0O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuTGlzdC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuTGlzdC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUaGVzZSBhcmUgdXN1YWxseSBgTGlzdEl0ZW1gcyB0aGF0IGFyZSBwYXNzZWQgdG9cbiAgICogYmUgcGFydCBvZiB0aGUgbGlzdC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBMaXN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9MaXN0L0xpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDQxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfdG9BcnJheTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheScpO1xuXG52YXIgX3RvQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9BcnJheTIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX0NsaWNrQXdheUxpc3RlbmVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvQ2xpY2tBd2F5TGlzdGVuZXInKTtcblxudmFyIF9DbGlja0F3YXlMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DbGlja0F3YXlMaXN0ZW5lcik7XG5cbnZhciBfa2V5Y29kZSA9IHJlcXVpcmUoJ2tleWNvZGUnKTtcblxudmFyIF9rZXljb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWNvZGUpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbnZhciBfTGlzdCA9IHJlcXVpcmUoJy4uL0xpc3QvTGlzdCcpO1xuXG52YXIgX0xpc3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdCk7XG5cbnZhciBfbWVudVV0aWxzID0gcmVxdWlyZSgnLi9tZW51VXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBkZXNrdG9wID0gcHJvcHMuZGVza3RvcCxcbiAgICAgIG1heEhlaWdodCA9IHByb3BzLm1heEhlaWdodCxcbiAgICAgIHdpZHRoID0gcHJvcHMud2lkdGg7XG4gIHZhciBtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWU7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIC8vIE5lc3RlZCBkaXYgYmVjYXVzZSB0aGUgTGlzdCBzY2FsZXMgeCBmYXN0ZXIgdGhhbiBpdCBzY2FsZXMgeVxuICAgICAgekluZGV4OiBtdWlUaGVtZS56SW5kZXgubWVudSxcbiAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgICAgb3ZlcmZsb3dZOiBtYXhIZWlnaHQgPyAnYXV0bycgOiBudWxsXG4gICAgfSxcbiAgICBkaXZpZGVyOiB7XG4gICAgICBtYXJnaW5Ub3A6IDcsXG4gICAgICBtYXJnaW5Cb3R0b206IDhcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcbiAgICAgIHBhZGRpbmdCb3R0b206IGRlc2t0b3AgPyAxNiA6IDgsXG4gICAgICBwYWRkaW5nVG9wOiBkZXNrdG9wID8gMTYgOiA4LFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgd2lkdGg6IHdpZHRoXG4gICAgfSxcbiAgICBzZWxlY3RlZE1lbnVJdGVtOiB7XG4gICAgICBjb2xvcjogbXVpVGhlbWUubWVudUl0ZW0uc2VsZWN0ZWRUZXh0Q29sb3JcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIE1lbnUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShNZW51LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZW51KHByb3BzLCBjb250ZXh0KSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgTWVudSk7XG5cbiAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChNZW51Ll9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShNZW51KSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gX3RoaXMuZ2V0RmlsdGVyZWRDaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIHNlbGVjdGVkSW5kZXggPSBfdGhpcy5nZXRMYXN0U2VsZWN0ZWRJbmRleChwcm9wcywgZmlsdGVyZWRDaGlsZHJlbik7XG5cbiAgICB2YXIgbmV3Rm9jdXNJbmRleCA9IHByb3BzLmRpc2FibGVBdXRvRm9jdXMgPyAtMSA6IHNlbGVjdGVkSW5kZXggPj0gMCA/IHNlbGVjdGVkSW5kZXggOiAwO1xuICAgIGlmIChuZXdGb2N1c0luZGV4ICE9PSAtMSAmJiBwcm9wcy5vbk1lbnVJdGVtRm9jdXNDaGFuZ2UpIHtcbiAgICAgIHByb3BzLm9uTWVudUl0ZW1Gb2N1c0NoYW5nZShudWxsLCBuZXdGb2N1c0luZGV4KTtcbiAgICB9XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c0luZGV4OiBuZXdGb2N1c0luZGV4LFxuICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IHByb3BzLmluaXRpYWxseUtleWJvYXJkRm9jdXNlZCxcbiAgICAgIGtleVdpZHRoOiBwcm9wcy5kZXNrdG9wID8gNjQgOiA1NlxuICAgIH07XG5cbiAgICBfdGhpcy5ob3RLZXlIb2xkZXIgPSBuZXcgX21lbnVVdGlscy5Ib3RLZXlIb2xkZXIoKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShNZW51LCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvV2lkdGgpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTY29sbFBvc2l0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IHZvaWQgMDtcbiAgICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gdGhpcy5nZXRGaWx0ZXJlZENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm11bHRpcGxlICE9PSB0cnVlKSB7XG4gICAgICAgIHNlbGVjdGVkSW5kZXggPSB0aGlzLmdldExhc3RTZWxlY3RlZEluZGV4KG5leHRQcm9wcywgZmlsdGVyZWRDaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZEluZGV4ID0gdGhpcy5zdGF0ZS5mb2N1c0luZGV4O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3Rm9jdXNJbmRleCA9IG5leHRQcm9wcy5kaXNhYmxlQXV0b0ZvY3VzID8gLTEgOiBzZWxlY3RlZEluZGV4ID49IDAgPyBzZWxlY3RlZEluZGV4IDogMDtcbiAgICAgIGlmIChuZXdGb2N1c0luZGV4ICE9PSB0aGlzLnN0YXRlLmZvY3VzSW5kZXggJiYgdGhpcy5wcm9wcy5vbk1lbnVJdGVtRm9jdXNDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1lbnVJdGVtRm9jdXNDaGFuZ2UobnVsbCwgbmV3Rm9jdXNJbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNJbmRleDogbmV3Rm9jdXNJbmRleCxcbiAgICAgICAga2V5V2lkdGg6IG5leHRQcm9wcy5kZXNrdG9wID8gNjQgOiA1NlxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSkgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIG5leHRDb250ZXh0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvV2lkdGgpIHRoaXMuc2V0V2lkdGgoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZUxpbmsnLFxuXG5cbiAgICAvLyBEbyBub3QgdXNlIG91dHNpZGUgb2YgdGhpcyBjb21wb25lbnQsIGl0IHdpbGwgYmUgcmVtb3ZlZCBvbmNlIHZhbHVlTGluayBpcyBkZXByZWNhdGVkXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlTGluayhwcm9wcykge1xuICAgICAgcmV0dXJuIHByb3BzLnZhbHVlTGluayB8fCB7XG4gICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgcmVxdWVzdENoYW5nZTogcHJvcHMub25DaGFuZ2VcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0S2V5Ym9hcmRGb2N1c2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0S2V5Ym9hcmRGb2N1c2VkKGtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBrZXlib2FyZEZvY3VzZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEZpbHRlcmVkQ2hpbGRyZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWx0ZXJlZENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IFtdO1xuICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBmaWx0ZXJlZENoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmaWx0ZXJlZENoaWxkcmVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb25lTWVudUl0ZW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZU1lbnVJdGVtKGNoaWxkLCBjaGlsZEluZGV4LCBzdHlsZXMsIGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGNoaWxkSXNEaXNhYmxlZCA9IGNoaWxkLnByb3BzLmRpc2FibGVkO1xuXG4gICAgICB2YXIgc2VsZWN0ZWRDaGlsZFN0eWxlcyA9IHt9O1xuICAgICAgaWYgKCFjaGlsZElzRGlzYWJsZWQpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gdGhpcy5pc0NoaWxkU2VsZWN0ZWQoY2hpbGQsIHRoaXMucHJvcHMpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzZWxlY3RlZENoaWxkU3R5bGVzLCBzdHlsZXMuc2VsZWN0ZWRNZW51SXRlbSwgdGhpcy5wcm9wcy5zZWxlY3RlZE1lbnVJdGVtU3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbWVyZ2VkQ2hpbGRTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGNoaWxkLnByb3BzLnN0eWxlLCB0aGlzLnByb3BzLm1lbnVJdGVtU3R5bGUsIHNlbGVjdGVkQ2hpbGRTdHlsZXMpO1xuXG4gICAgICB2YXIgZXh0cmFQcm9wcyA9IHtcbiAgICAgICAgZGVza3RvcDogdGhpcy5wcm9wcy5kZXNrdG9wLFxuICAgICAgICBzdHlsZTogbWVyZ2VkQ2hpbGRTdHlsZXNcbiAgICAgIH07XG4gICAgICBpZiAoIWNoaWxkSXNEaXNhYmxlZCkge1xuICAgICAgICB2YXIgaXNGb2N1c2VkID0gY2hpbGRJbmRleCA9PT0gdGhpcy5zdGF0ZS5mb2N1c0luZGV4O1xuICAgICAgICB2YXIgZm9jdXNTdGF0ZSA9ICdub25lJztcbiAgICAgICAgaWYgKGlzRm9jdXNlZCkge1xuICAgICAgICAgIGZvY3VzU3RhdGUgPSB0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkID8gJ2tleWJvYXJkLWZvY3VzZWQnIDogJ2ZvY3VzZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKGV4dHJhUHJvcHMsIHtcbiAgICAgICAgICBmb2N1c1N0YXRlOiBmb2N1c1N0YXRlLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzMi5oYW5kbGVNZW51SXRlbVRvdWNoVGFwKGV2ZW50LCBjaGlsZCwgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzLm9uQ2xpY2spIGNoaWxkLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVmOiBpc0ZvY3VzZWQgPyAnZm9jdXNlZE1lbnVJdGVtJyA6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgZXh0cmFQcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVjcmVtZW50S2V5Ym9hcmRGb2N1c0luZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVjcmVtZW50S2V5Ym9hcmRGb2N1c0luZGV4KGV2ZW50KSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLnN0YXRlLmZvY3VzSW5kZXg7XG5cbiAgICAgIGluZGV4LS07XG4gICAgICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IDA7XG5cbiAgICAgIHRoaXMuc2V0Rm9jdXNJbmRleChldmVudCwgaW5kZXgsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE1lbnVJdGVtQ291bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNZW51SXRlbUNvdW50KGZpbHRlcmVkQ2hpbGRyZW4pIHtcbiAgICAgIHZhciBtZW51SXRlbUNvdW50ID0gMDtcbiAgICAgIGZpbHRlcmVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGNoaWxkSXNBRGl2aWRlciA9IGNoaWxkLnR5cGUgJiYgY2hpbGQudHlwZS5tdWlOYW1lID09PSAnRGl2aWRlcic7XG4gICAgICAgIHZhciBjaGlsZElzRGlzYWJsZWQgPSBjaGlsZC5wcm9wcy5kaXNhYmxlZDtcbiAgICAgICAgaWYgKCFjaGlsZElzQURpdmlkZXIgJiYgIWNoaWxkSXNEaXNhYmxlZCkgbWVudUl0ZW1Db3VudCsrO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVudUl0ZW1Db3VudDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRMYXN0U2VsZWN0ZWRJbmRleCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExhc3RTZWxlY3RlZEluZGV4KHByb3BzLCBmaWx0ZXJlZENoaWxkcmVuKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgIHZhciBtZW51SXRlbUluZGV4ID0gMDtcblxuICAgICAgZmlsdGVyZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIgY2hpbGRJc0FEaXZpZGVyID0gY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlLm11aU5hbWUgPT09ICdEaXZpZGVyJztcblxuICAgICAgICBpZiAoX3RoaXMzLmlzQ2hpbGRTZWxlY3RlZChjaGlsZCwgcHJvcHMpKSBzZWxlY3RlZEluZGV4ID0gbWVudUl0ZW1JbmRleDtcbiAgICAgICAgaWYgKCFjaGlsZElzQURpdmlkZXIpIG1lbnVJdGVtSW5kZXgrKztcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRGb2N1c0luZGV4U3RhcnRzV2l0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZvY3VzSW5kZXhTdGFydHNXaXRoKGV2ZW50LCBrZXlzKSB7XG4gICAgICB2YXIgZm91bmRJbmRleCA9IC0xO1xuICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA+PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmltYXJ5VGV4dCA9IGNoaWxkLnByb3BzLnByaW1hcnlUZXh0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJpbWFyeVRleHQgPT09ICdzdHJpbmcnICYmIHByaW1hcnlUZXh0LnN1YnN0cigwLCBrZXlzLmxlbmd0aCkudG9Mb3dlckNhc2UoKSA9PT0ga2V5cy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgZm91bmRJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChmb3VuZEluZGV4ID49IDApIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1c0luZGV4KGV2ZW50LCBmb3VuZEluZGV4LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlTWVudUl0ZW1Ub3VjaFRhcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1lbnVJdGVtVG91Y2hUYXAoZXZlbnQsIGl0ZW0sIGluZGV4KSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIG11bHRpcGxlID0gdGhpcy5wcm9wcy5tdWx0aXBsZTtcbiAgICAgIHZhciB2YWx1ZUxpbmsgPSB0aGlzLmdldFZhbHVlTGluayh0aGlzLnByb3BzKTtcbiAgICAgIHZhciBtZW51VmFsdWUgPSB2YWx1ZUxpbmsudmFsdWU7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gaXRlbS5wcm9wcy52YWx1ZTtcbiAgICAgIHZhciBmb2N1c0luZGV4ID0gX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSA/IDAgOiBjaGlsZHJlbi5pbmRleE9mKGl0ZW0pO1xuXG4gICAgICB0aGlzLnNldEZvY3VzSW5kZXgoZXZlbnQsIGZvY3VzSW5kZXgsIGZhbHNlKTtcblxuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIG1lbnVWYWx1ZSA9IG1lbnVWYWx1ZSB8fCBbXTtcblxuICAgICAgICB2YXIgaXRlbUluZGV4ID0gbWVudVZhbHVlLmluZGV4T2YoaXRlbVZhbHVlKTtcblxuICAgICAgICB2YXIgX21lbnVWYWx1ZSA9IG1lbnVWYWx1ZSxcbiAgICAgICAgICAgIF9tZW51VmFsdWUyID0gKDAsIF90b0FycmF5My5kZWZhdWx0KShfbWVudVZhbHVlKSxcbiAgICAgICAgICAgIG5ld01lbnVWYWx1ZSA9IF9tZW51VmFsdWUyLnNsaWNlKDApO1xuXG4gICAgICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgbmV3TWVudVZhbHVlLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdNZW51VmFsdWUuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZUxpbmsucmVxdWVzdENoYW5nZShldmVudCwgbmV3TWVudVZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoIW11bHRpcGxlICYmIGl0ZW1WYWx1ZSAhPT0gbWVudVZhbHVlKSB7XG4gICAgICAgIHZhbHVlTGluay5yZXF1ZXN0Q2hhbmdlKGV2ZW50LCBpdGVtVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLm9uSXRlbVRvdWNoVGFwKGV2ZW50LCBpdGVtLCBpbmRleCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5jcmVtZW50S2V5Ym9hcmRGb2N1c0luZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5jcmVtZW50S2V5Ym9hcmRGb2N1c0luZGV4KGV2ZW50LCBmaWx0ZXJlZENoaWxkcmVuKSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLnN0YXRlLmZvY3VzSW5kZXg7XG4gICAgICB2YXIgbWF4SW5kZXggPSB0aGlzLmdldE1lbnVJdGVtQ291bnQoZmlsdGVyZWRDaGlsZHJlbikgLSAxO1xuXG4gICAgICBpbmRleCsrO1xuICAgICAgaWYgKGluZGV4ID4gbWF4SW5kZXgpIGluZGV4ID0gbWF4SW5kZXg7XG5cbiAgICAgIHRoaXMuc2V0Rm9jdXNJbmRleChldmVudCwgaW5kZXgsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzQ2hpbGRTZWxlY3RlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2hpbGRTZWxlY3RlZChjaGlsZCwgcHJvcHMpIHtcbiAgICAgIHZhciBtZW51VmFsdWUgPSB0aGlzLmdldFZhbHVlTGluayhwcm9wcykudmFsdWU7XG4gICAgICB2YXIgY2hpbGRWYWx1ZSA9IGNoaWxkLnByb3BzLnZhbHVlO1xuXG4gICAgICBpZiAocHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgcmV0dXJuIG1lbnVWYWx1ZSAmJiBtZW51VmFsdWUubGVuZ3RoICYmIG1lbnVWYWx1ZS5pbmRleE9mKGNoaWxkVmFsdWUpICE9PSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjaGlsZC5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiBtZW51VmFsdWUgPT09IGNoaWxkVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0Rm9jdXNJbmRleCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZvY3VzSW5kZXgoZXZlbnQsIG5ld0luZGV4LCBpc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25NZW51SXRlbUZvY3VzQ2hhbmdlKSB7XG4gICAgICAgIC8vIERvIHRoaXMgZXZlbiBpZiBgbmV3SW5kZXggPT09IHRoaXMuc3RhdGUuZm9jdXNJbmRleGAgdG8gYWxsb3cgdXNlcnNcbiAgICAgICAgLy8gdG8gZGV0ZWN0IHVwLWFycm93IG9uIHRoZSBmaXJzdCBNZW51SXRlbSBvciBkb3duLWFycm93IG9uIHRoZSBsYXN0LlxuICAgICAgICB0aGlzLnByb3BzLm9uTWVudUl0ZW1Gb2N1c0NoYW5nZShldmVudCwgbmV3SW5kZXgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzSW5kZXg6IG5ld0luZGV4LFxuICAgICAgICBpc0tleWJvYXJkRm9jdXNlZDogaXNLZXlib2FyZEZvY3VzZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFNjb2xsUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY29sbFBvc2l0aW9uKCkge1xuICAgICAgdmFyIGRlc2t0b3AgPSB0aGlzLnByb3BzLmRlc2t0b3A7XG4gICAgICB2YXIgZm9jdXNlZE1lbnVJdGVtID0gdGhpcy5yZWZzLmZvY3VzZWRNZW51SXRlbTtcbiAgICAgIHZhciBtZW51SXRlbUhlaWdodCA9IGRlc2t0b3AgPyAzMiA6IDQ4O1xuXG4gICAgICBpZiAoZm9jdXNlZE1lbnVJdGVtKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZE9mZlNldCA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShmb2N1c2VkTWVudUl0ZW0pLm9mZnNldFRvcDtcblxuICAgICAgICAvLyBNYWtlIHRoZSBmb2N1c2VkIGl0ZW0gYmUgdGhlIDJuZCBpdGVtIGluIHRoZSBsaXN0IHRoZSB1c2VyIHNlZXNcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHNlbGVjdGVkT2ZmU2V0IC0gbWVudUl0ZW1IZWlnaHQ7XG4gICAgICAgIGlmIChzY3JvbGxUb3AgPCBtZW51SXRlbUhlaWdodCkgc2Nyb2xsVG9wID0gMDtcblxuICAgICAgICBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLnNjcm9sbENvbnRhaW5lcikuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NhbmNlbFNjcm9sbEV2ZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuY2VsU2Nyb2xsRXZlbnQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRXaWR0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFdpZHRoKCkge1xuICAgICAgdmFyIGVsID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdmFyIGxpc3RFbCA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMubGlzdCk7XG4gICAgICB2YXIgZWxXaWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgdmFyIGtleVdpZHRoID0gdGhpcy5zdGF0ZS5rZXlXaWR0aDtcbiAgICAgIHZhciBtaW5XaWR0aCA9IGtleVdpZHRoICogMS41O1xuICAgICAgdmFyIGtleUluY3JlbWVudHMgPSBlbFdpZHRoIC8ga2V5V2lkdGg7XG4gICAgICB2YXIgbmV3V2lkdGggPSB2b2lkIDA7XG5cbiAgICAgIGtleUluY3JlbWVudHMgPSBrZXlJbmNyZW1lbnRzIDw9IDEuNSA/IDEuNSA6IE1hdGguY2VpbChrZXlJbmNyZW1lbnRzKTtcbiAgICAgIG5ld1dpZHRoID0ga2V5SW5jcmVtZW50cyAqIGtleVdpZHRoO1xuXG4gICAgICBpZiAobmV3V2lkdGggPCBtaW5XaWR0aCkgbmV3V2lkdGggPSBtaW5XaWR0aDtcblxuICAgICAgZWwuc3R5bGUud2lkdGggPSBuZXdXaWR0aCArICdweCc7XG4gICAgICBsaXN0RWwuc3R5bGUud2lkdGggPSBuZXdXaWR0aCArICdweCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGF1dG9XaWR0aCA9IF9wcm9wcy5hdXRvV2lkdGgsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZGVza3RvcCA9IF9wcm9wcy5kZXNrdG9wLFxuICAgICAgICAgIGRpc2FibGVBdXRvRm9jdXMgPSBfcHJvcHMuZGlzYWJsZUF1dG9Gb2N1cyxcbiAgICAgICAgICBpbml0aWFsbHlLZXlib2FyZEZvY3VzZWQgPSBfcHJvcHMuaW5pdGlhbGx5S2V5Ym9hcmRGb2N1c2VkLFxuICAgICAgICAgIGxpc3RTdHlsZSA9IF9wcm9wcy5saXN0U3R5bGUsXG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX3Byb3BzLm1heEhlaWdodCxcbiAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgICBvbkl0ZW1Ub3VjaFRhcCA9IF9wcm9wcy5vbkl0ZW1Ub3VjaFRhcCxcbiAgICAgICAgICBvbkVzY0tleURvd24gPSBfcHJvcHMub25Fc2NLZXlEb3duLFxuICAgICAgICAgIG9uTWVudUl0ZW1Gb2N1c0NoYW5nZSA9IF9wcm9wcy5vbk1lbnVJdGVtRm9jdXNDaGFuZ2UsXG4gICAgICAgICAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlID0gX3Byb3BzLnNlbGVjdGVkTWVudUl0ZW1TdHlsZSxcbiAgICAgICAgICBtZW51SXRlbVN0eWxlID0gX3Byb3BzLm1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgdmFsdWVMaW5rID0gX3Byb3BzLnZhbHVlTGluayxcbiAgICAgICAgICB3aWR0aCA9IF9wcm9wcy53aWR0aCxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydhdXRvV2lkdGgnLCAnY2hpbGRyZW4nLCAnZGVza3RvcCcsICdkaXNhYmxlQXV0b0ZvY3VzJywgJ2luaXRpYWxseUtleWJvYXJkRm9jdXNlZCcsICdsaXN0U3R5bGUnLCAnbWF4SGVpZ2h0JywgJ211bHRpcGxlJywgJ29uSXRlbVRvdWNoVGFwJywgJ29uRXNjS2V5RG93bicsICdvbk1lbnVJdGVtRm9jdXNDaGFuZ2UnLCAnc2VsZWN0ZWRNZW51SXRlbVN0eWxlJywgJ21lbnVJdGVtU3R5bGUnLCAnc3R5bGUnLCAndmFsdWUnLCAndmFsdWVMaW5rJywgJ3dpZHRoJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICB2YXIgbWVyZ2VkUm9vdFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpO1xuICAgICAgdmFyIG1lcmdlZExpc3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxpc3QsIGxpc3RTdHlsZSk7XG5cbiAgICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gdGhpcy5nZXRGaWx0ZXJlZENoaWxkcmVuKGNoaWxkcmVuKTtcblxuICAgICAgdmFyIG1lbnVJdGVtSW5kZXggPSAwO1xuICAgICAgdmFyIG5ld0NoaWxkcmVuID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm1hcChmaWx0ZXJlZENoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgIHZhciBjaGlsZElzRGlzYWJsZWQgPSBjaGlsZC5wcm9wcy5kaXNhYmxlZDtcbiAgICAgICAgdmFyIGNoaWxkTmFtZSA9IGNoaWxkLnR5cGUgPyBjaGlsZC50eXBlLm11aU5hbWUgOiAnJztcbiAgICAgICAgdmFyIG5ld0NoaWxkID0gY2hpbGQ7XG5cbiAgICAgICAgc3dpdGNoIChjaGlsZE5hbWUpIHtcbiAgICAgICAgICBjYXNlICdNZW51SXRlbSc6XG4gICAgICAgICAgICBuZXdDaGlsZCA9IF90aGlzNC5jbG9uZU1lbnVJdGVtKGNoaWxkLCBtZW51SXRlbUluZGV4LCBzdHlsZXMsIGluZGV4KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnRGl2aWRlcic6XG4gICAgICAgICAgICBuZXdDaGlsZCA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmRpdmlkZXIsIGNoaWxkLnByb3BzLnN0eWxlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZE5hbWUgPT09ICdNZW51SXRlbScgJiYgIWNoaWxkSXNEaXNhYmxlZCkge1xuICAgICAgICAgIG1lbnVJdGVtSW5kZXgrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9DbGlja0F3YXlMaXN0ZW5lcjIuZGVmYXVsdCxcbiAgICAgICAgeyBvbkNsaWNrQXdheTogdGhpcy5oYW5kbGVDbGlja0F3YXkgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgICBvbldoZWVsOiB0aGlzLmhhbmRsZU9uV2hlZWwsXG4gICAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhtZXJnZWRSb290U3R5bGVzKSxcbiAgICAgICAgICAgIHJlZjogJ3Njcm9sbENvbnRhaW5lcicsXG4gICAgICAgICAgICByb2xlOiAncHJlc2VudGF0aW9uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfTGlzdDIuZGVmYXVsdCxcbiAgICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgICAgIHJlZjogJ2xpc3QnLFxuICAgICAgICAgICAgICBzdHlsZTogbWVyZ2VkTGlzdFN0eWxlcyxcbiAgICAgICAgICAgICAgcm9sZTogJ21lbnUnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ld0NoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTWVudTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvV2lkdGg6IHRydWUsXG4gIGRlc2t0b3A6IGZhbHNlLFxuICBkaXNhYmxlQXV0b0ZvY3VzOiBmYWxzZSxcbiAgaW5pdGlhbGx5S2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgbWF4SGVpZ2h0OiBudWxsLFxuICBtdWx0aXBsZTogZmFsc2UsXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHt9LFxuICBvbkVzY0tleURvd246IGZ1bmN0aW9uIG9uRXNjS2V5RG93bigpIHt9LFxuICBvbkl0ZW1Ub3VjaFRhcDogZnVuY3Rpb24gb25JdGVtVG91Y2hUYXAoKSB7fSxcbiAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oKSB7fVxufTtcbk1lbnUuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICB0aGlzLmhhbmRsZUNsaWNrQXdheSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGZvY3VzSW5kZXggPSBfdGhpczUuc3RhdGUuZm9jdXNJbmRleDtcblxuICAgIGlmIChmb2N1c0luZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBmaWx0ZXJlZENoaWxkcmVuID0gX3RoaXM1LmdldEZpbHRlcmVkQ2hpbGRyZW4oX3RoaXM1LnByb3BzLmNoaWxkcmVuKTtcbiAgICB2YXIgZm9jdXNlZEl0ZW0gPSBmaWx0ZXJlZENoaWxkcmVuW2ZvY3VzSW5kZXhdO1xuICAgIGlmIChmb2N1c2VkSXRlbS5wcm9wcy5tZW51SXRlbXMgJiYgZm9jdXNlZEl0ZW0ucHJvcHMubWVudUl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfdGhpczUuc2V0Rm9jdXNJbmRleChldmVudCwgLTEsIGZhbHNlKTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IF90aGlzNS5nZXRGaWx0ZXJlZENoaWxkcmVuKF90aGlzNS5wcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIGtleSA9ICgwLCBfa2V5Y29kZTIuZGVmYXVsdCkoZXZlbnQpO1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3RoaXM1LmluY3JlbWVudEtleWJvYXJkRm9jdXNJbmRleChldmVudCwgZmlsdGVyZWRDaGlsZHJlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXNjJzpcbiAgICAgICAgX3RoaXM1LnByb3BzLm9uRXNjS2V5RG93bihldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGFiJzpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgX3RoaXM1LmRlY3JlbWVudEtleWJvYXJkRm9jdXNJbmRleChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM1LmluY3JlbWVudEtleWJvYXJkRm9jdXNJbmRleChldmVudCwgZmlsdGVyZWRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1cCc6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF90aGlzNS5kZWNyZW1lbnRLZXlib2FyZEZvY3VzSW5kZXgoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChrZXkgJiYga2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHZhciBob3RLZXlzID0gX3RoaXM1LmhvdEtleUhvbGRlci5hcHBlbmQoa2V5KTtcbiAgICAgICAgICBpZiAoX3RoaXM1LnNldEZvY3VzSW5kZXhTdGFydHNXaXRoKGV2ZW50LCBob3RLZXlzKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3RoaXM1LnByb3BzLm9uS2V5RG93bihldmVudCk7XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVPbldoZWVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHNjcm9sbENvbnRhaW5lciA9IF90aGlzNS5yZWZzLnNjcm9sbENvbnRhaW5lcjtcbiAgICAvLyBPbmx5IHNjcm9sbCBsb2NrIGlmIHRoZSB0aGUgTWVudSBpcyBzY3JvbGxhYmxlLlxuICAgIGlmIChzY3JvbGxDb250YWluZXIuc2Nyb2xsSGVpZ2h0IDw9IHNjcm9sbENvbnRhaW5lci5jbGllbnRIZWlnaHQpIHJldHVybjtcblxuICAgIHZhciBzY3JvbGxUb3AgPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wLFxuICAgICAgICBzY3JvbGxIZWlnaHQgPSBzY3JvbGxDb250YWluZXIuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBjbGllbnRIZWlnaHQgPSBzY3JvbGxDb250YWluZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgdmFyIHdoZWVsRGVsdGEgPSBldmVudC5kZWx0YVk7XG4gICAgdmFyIGlzRGVsdGFQb3NpdGl2ZSA9IHdoZWVsRGVsdGEgPiAwO1xuXG4gICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiB3aGVlbERlbHRhID4gc2Nyb2xsSGVpZ2h0IC0gY2xpZW50SGVpZ2h0IC0gc2Nyb2xsVG9wKSB7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgcmV0dXJuIF90aGlzNS5jYW5jZWxTY3JvbGxFdmVudChldmVudCk7XG4gICAgfSBlbHNlIGlmICghaXNEZWx0YVBvc2l0aXZlICYmIC13aGVlbERlbHRhID4gc2Nyb2xsVG9wKSB7XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgIHJldHVybiBfdGhpczUuY2FuY2VsU2Nyb2xsRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcbn07XG5cbk1lbnUucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHdpZHRoIG9mIHRoZSBtZW51IHdpbGwgYmUgc2V0IGF1dG9tYXRpY2FsbHlcbiAgICogYWNjb3JkaW5nIHRvIHRoZSB3aWR0aHMgb2YgaXRzIGNoaWxkcmVuLFxuICAgKiB1c2luZyBwcm9wZXIga2V5bGluZSBpbmNyZW1lbnRzICg2NHB4IGZvciBkZXNrdG9wLFxuICAgKiA1NnB4IG90aGVyd2lzZSkuXG4gICAqL1xuICBhdXRvV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBtZW51LiBUaGlzIGlzIHVzdWFsbHkgdXNlZCB0byBwYXNzIGBNZW51SXRlbWBcbiAgICogZWxlbWVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG1lbnUgaXRlbSB3aWxsIHJlbmRlciB3aXRoIGNvbXBhY3QgZGVza3RvcCBzdHlsZXMuXG4gICAqL1xuICBkZXNrdG9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgbWVudSB3aWxsIG5vdCBiZSBhdXRvLWZvY3VzZWQuXG4gICAqL1xuICBkaXNhYmxlQXV0b0ZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgbWVudSB3aWxsIGJlIGtleWJvYXJkLWZvY3VzZWQgaW5pdGlhbGx5LlxuICAgKi9cbiAgaW5pdGlhbGx5S2V5Ym9hcmRGb2N1c2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJseWluZyBgTGlzdGAgZWxlbWVudC5cbiAgICovXG4gIGxpc3RTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBoZWlnaHQgb2YgdGhlIG1lbnUgaW4gcGl4ZWxzLiBJZiBzcGVjaWZpZWQsXG4gICAqIHRoZSBtZW51IHdpbGwgYmUgc2Nyb2xsYWJsZSBpZiBpdCBpcyB0YWxsZXIgdGhhbiB0aGUgcHJvdmlkZWRcbiAgICogaGVpZ2h0LlxuICAgKi9cbiAgbWF4SGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIG1lbnUgaXRlbXMuXG4gICAqL1xuICBtZW51SXRlbVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0XG4gICAqIG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSB3aXRoIGB2YWx1ZWAgbm90XG4gICAqIGVxdWFsIHRvIHRoZSBjdXJyZW50IGB2YWx1ZWAgb2YgdGhlIG1lbnUgaXMgdG91Y2gtdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBtZW51IGl0ZW0uXG4gICAqIEBwYXJhbSB7YW55fSAgdmFsdWUgSWYgYG11bHRpcGxlYCBpcyB0cnVlLCB0aGUgbWVudSdzIGB2YWx1ZWBcbiAgICogYXJyYXkgd2l0aCBlaXRoZXIgdGhlIG1lbnUgaXRlbSdzIGB2YWx1ZWAgYWRkZWQgKGlmXG4gICAqIGl0IHdhc24ndCBhbHJlYWR5IHNlbGVjdGVkKSBvciBvbWl0dGVkIChpZiBpdCB3YXMgYWxyZWFkeSBzZWxlY3RlZCkuXG4gICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBtZW51IGlzIGZvY3VzZWQgYW5kIHRoZSAqRXNjKiBrZXlcbiAgICogaXMgcHJlc3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IGBrZXlkb3duYCBldmVudCB0YXJnZXRpbmcgdGhlIG1lbnUuXG4gICAqL1xuICBvbkVzY0tleURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgdG91Y2gtdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBtZW51IGl0ZW0uXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBtZW51SXRlbSBUaGUgbWVudSBpdGVtLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBtZW51IGl0ZW0uXG4gICAqL1xuICBvbkl0ZW1Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbktleURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGZvY3VzIG9uIGEgYE1lbnVJdGVtYCBpcyBjaGFuZ2VkLlxuICAgKiBUaGVyZSB3aWxsIGJlIHNvbWUgXCJkdXBsaWNhdGVcIiBjaGFuZ2VzIHJlcG9ydGVkIGlmIHR3byBkaWZmZXJlbnRcbiAgICogZm9jdXNpbmcgZXZlbnQgaGFwcGVuLCBmb3IgZXhhbXBsZSBpZiBhIGBNZW51SXRlbWAgaXMgZm9jdXNlZCB2aWFcbiAgICogdGhlIGtleWJvYXJkIGFuZCB0aGVuIGl0IGlzIGNsaWNrZWQgb24uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIGZvY3VzIGNoYW5nZS5cbiAgICogVGhlIGV2ZW50IGNhbiBiZSBudWxsIHNpbmNlIHRoZSBmb2N1cyBjYW4gYmUgY2hhbmdlZCBmb3Igbm9uLWV2ZW50XG4gICAqIHJlYXNvbnMgc3VjaCBhcyBwcm9wIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdGb2N1c0luZGV4IFRoZSBpbmRleCBvZiB0aGUgbmV3bHkgZm9jdXNlZFxuICAgKiBgTWVudUl0ZW1gIG9yIGAtMWAgaWYgZm9jdXMgd2FzIGxvc3QuXG4gICAqL1xuICBvbk1lbnVJdGVtRm9jdXNDaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHNlbGVjdGVkIG1lbnUgaXRlbXMuXG4gICAqL1xuICBzZWxlY3RlZE1lbnVJdGVtU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgYW4gYXJyYXkgb2YgdGhlIGB2YWx1ZWBzIG9mIHRoZSBzZWxlY3RlZFxuICAgKiBtZW51IGl0ZW1zLiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIG9mIHRoZSBzZWxlY3RlZCBtZW51IGl0ZW0uXG4gICAqIElmIHByb3ZpZGVkLCB0aGUgbWVudSB3aWxsIGJlIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqIFRoaXMgY29tcG9uZW50IGFsc28gc3VwcG9ydHMgdmFsdWVMaW5rLlxuICAgKi9cbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICAvKipcbiAgICogVmFsdWVMaW5rIGZvciB0aGUgbWVudSdzIGB2YWx1ZWAuXG4gICAqL1xuICB2YWx1ZUxpbms6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBtZW51LiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgbWVudSdzIHdpZHRoXG4gICAqIHdpbGwgYmUgc2V0IGFjY29yZGluZyB0byB0aGUgd2lkdGhzIG9mIGl0cyBjaGlsZHJlbiwgdXNpbmdcbiAgICogcHJvcGVyIGtleWxpbmUgaW5jcmVtZW50cyAoNjRweCBmb3IgZGVza3RvcCwgNTZweCBvdGhlcndpc2UpLlxuICAgKi9cbiAgd2lkdGg6IF9wcm9wVHlwZXM0LmRlZmF1bHQuc3RyaW5nT3JOdW1iZXJcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1lbnU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL01lbnUvTWVudS5qc1xuLy8gbW9kdWxlIGlkID0gNDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3NoYWxsb3dFcXVhbCA9IHJlcXVpcmUoJ3JlY29tcG9zZS9zaGFsbG93RXF1YWwnKTtcblxudmFyIF9zaGFsbG93RXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhbGxvd0VxdWFsKTtcblxudmFyIF9Qb3BvdmVyID0gcmVxdWlyZSgnLi4vUG9wb3Zlci9Qb3BvdmVyJyk7XG5cbnZhciBfUG9wb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3BvdmVyKTtcblxudmFyIF9jaGVjayA9IHJlcXVpcmUoJy4uL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2NoZWNrJyk7XG5cbnZhciBfY2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2spO1xuXG52YXIgX0xpc3RJdGVtID0gcmVxdWlyZSgnLi4vTGlzdC9MaXN0SXRlbScpO1xuXG52YXIgX0xpc3RJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3RJdGVtKTtcblxudmFyIF9NZW51ID0gcmVxdWlyZSgnLi4vTWVudS9NZW51Jyk7XG5cbnZhciBfTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51KTtcblxudmFyIF9wcm9wVHlwZXMzID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJvcFR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlczMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbmVzdGVkTWVudVN0eWxlID0ge1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBkaXNhYmxlZENvbG9yID0gY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWUucGFsZXR0ZS5kaXNhYmxlZENvbG9yO1xuICB2YXIgdGV4dENvbG9yID0gY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWUucGFsZXR0ZS50ZXh0Q29sb3I7XG4gIHZhciBpbmRlbnQgPSBwcm9wcy5kZXNrdG9wID8gNjQgOiA3MjtcbiAgdmFyIHNpZGVQYWRkaW5nID0gcHJvcHMuZGVza3RvcCA/IDI0IDogMTY7XG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyBkaXNhYmxlZENvbG9yIDogdGV4dENvbG9yLFxuICAgICAgY3Vyc29yOiBwcm9wcy5kaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJyxcbiAgICAgIG1pbkhlaWdodDogcHJvcHMuZGVza3RvcCA/ICczMnB4JyA6ICc0OHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6IHByb3BzLmRlc2t0b3AgPyAnMzJweCcgOiAnNDhweCcsXG4gICAgICBmb250U2l6ZTogcHJvcHMuZGVza3RvcCA/IDE1IDogMTYsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgIH0sXG5cbiAgICBpbm5lckRpdlN0eWxlOiB7XG4gICAgICBwYWRkaW5nTGVmdDogcHJvcHMubGVmdEljb24gfHwgcHJvcHMuaW5zZXRDaGlsZHJlbiB8fCBwcm9wcy5jaGVja2VkID8gaW5kZW50IDogc2lkZVBhZGRpbmcsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHByb3BzLnJpZ2h0SWNvbiA/IGluZGVudCA6IHNpZGVQYWRkaW5nLFxuICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgIHBhZGRpbmdUb3A6IDBcbiAgICB9LFxuXG4gICAgc2Vjb25kYXJ5VGV4dDoge1xuICAgICAgZmxvYXQ6ICdyaWdodCdcbiAgICB9LFxuXG4gICAgbGVmdEljb25EZXNrdG9wOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBsZWZ0OiAyNCxcbiAgICAgIHRvcDogNFxuICAgIH0sXG5cbiAgICByaWdodEljb25EZXNrdG9wOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICByaWdodDogMjQsXG4gICAgICB0b3A6IDQsXG4gICAgICBmaWxsOiBjb250ZXh0Lm11aVRoZW1lLm1lbnVJdGVtLnJpZ2h0SWNvbkRlc2t0b3BGaWxsXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBNZW51SXRlbSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKE1lbnVJdGVtLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZW51SXRlbSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBNZW51SXRlbSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBNZW51SXRlbS5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoTWVudUl0ZW0pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfSwgX3RoaXMuY2xvbmVNZW51SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChpdGVtLCB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICBpZiAoIWl0ZW0ucHJvcHMubWVudUl0ZW1zKSB7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXRlbS5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgICBpdGVtLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgYW5jaG9yRWw6IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShfdGhpcylcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICBhbmNob3JFbDogbnVsbFxuICAgICAgfSk7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKE1lbnVJdGVtLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmFwcGx5Rm9jdXNTdGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUub3BlbiAmJiBuZXh0UHJvcHMuZm9jdXNTdGF0ZSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSkgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIG5leHRDb250ZXh0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLmFwcGx5Rm9jdXNTdGF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FwcGx5Rm9jdXNTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGx5Rm9jdXNTdGF0ZSgpIHtcbiAgICAgIHRoaXMucmVmcy5saXN0SXRlbS5hcHBseUZvY3VzU3RhdGUodGhpcy5wcm9wcy5mb2N1c1N0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGVja2VkID0gX3Byb3BzLmNoZWNrZWQsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZGVza3RvcCA9IF9wcm9wcy5kZXNrdG9wLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGZvY3VzU3RhdGUgPSBfcHJvcHMuZm9jdXNTdGF0ZSxcbiAgICAgICAgICBpbm5lckRpdlN0eWxlID0gX3Byb3BzLmlubmVyRGl2U3R5bGUsXG4gICAgICAgICAgaW5zZXRDaGlsZHJlbiA9IF9wcm9wcy5pbnNldENoaWxkcmVuLFxuICAgICAgICAgIGxlZnRJY29uID0gX3Byb3BzLmxlZnRJY29uLFxuICAgICAgICAgIG1lbnVJdGVtcyA9IF9wcm9wcy5tZW51SXRlbXMsXG4gICAgICAgICAgcmlnaHRJY29uID0gX3Byb3BzLnJpZ2h0SWNvbixcbiAgICAgICAgICBzZWNvbmRhcnlUZXh0ID0gX3Byb3BzLnNlY29uZGFyeVRleHQsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgYW5pbWF0aW9uID0gX3Byb3BzLmFuaW1hdGlvbixcbiAgICAgICAgICBhbmNob3JPcmlnaW4gPSBfcHJvcHMuYW5jaG9yT3JpZ2luLFxuICAgICAgICAgIHRhcmdldE9yaWdpbiA9IF9wcm9wcy50YXJnZXRPcmlnaW4sXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnY2hlY2tlZCcsICdjaGlsZHJlbicsICdkZXNrdG9wJywgJ2Rpc2FibGVkJywgJ2ZvY3VzU3RhdGUnLCAnaW5uZXJEaXZTdHlsZScsICdpbnNldENoaWxkcmVuJywgJ2xlZnRJY29uJywgJ21lbnVJdGVtcycsICdyaWdodEljb24nLCAnc2Vjb25kYXJ5VGV4dCcsICdzdHlsZScsICdhbmltYXRpb24nLCAnYW5jaG9yT3JpZ2luJywgJ3RhcmdldE9yaWdpbicsICd2YWx1ZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHZhciBtZXJnZWRSb290U3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSk7XG4gICAgICB2YXIgbWVyZ2VkSW5uZXJEaXZTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlubmVyRGl2U3R5bGUsIGlubmVyRGl2U3R5bGUpO1xuXG4gICAgICAvLyBMZWZ0IEljb25cbiAgICAgIHZhciBsZWZ0SWNvbkVsZW1lbnQgPSBsZWZ0SWNvbiA/IGxlZnRJY29uIDogY2hlY2tlZCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9jaGVjazIuZGVmYXVsdCwgbnVsbCkgOiBudWxsO1xuICAgICAgaWYgKGxlZnRJY29uRWxlbWVudCkge1xuICAgICAgICB2YXIgbWVyZ2VkTGVmdEljb25TdHlsZXMgPSBkZXNrdG9wID8gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5sZWZ0SWNvbkRlc2t0b3AsIGxlZnRJY29uRWxlbWVudC5wcm9wcy5zdHlsZSkgOiBsZWZ0SWNvbkVsZW1lbnQucHJvcHMuc3R5bGU7XG4gICAgICAgIGxlZnRJY29uRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQobGVmdEljb25FbGVtZW50LCB7IHN0eWxlOiBtZXJnZWRMZWZ0SWNvblN0eWxlcyB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gUmlnaHQgSWNvblxuICAgICAgdmFyIHJpZ2h0SWNvbkVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAocmlnaHRJY29uKSB7XG4gICAgICAgIHZhciBtZXJnZWRSaWdodEljb25TdHlsZXMgPSBkZXNrdG9wID8gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yaWdodEljb25EZXNrdG9wLCByaWdodEljb24ucHJvcHMuc3R5bGUpIDogcmlnaHRJY29uLnByb3BzLnN0eWxlO1xuICAgICAgICByaWdodEljb25FbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChyaWdodEljb24sIHsgc3R5bGU6IG1lcmdlZFJpZ2h0SWNvblN0eWxlcyB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gU2Vjb25kYXJ5IFRleHRcbiAgICAgIHZhciBzZWNvbmRhcnlUZXh0RWxlbWVudCA9IHZvaWQgMDtcbiAgICAgIGlmIChzZWNvbmRhcnlUZXh0KSB7XG4gICAgICAgIHZhciBzZWNvbmRhcnlUZXh0SXNBbkVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQoc2Vjb25kYXJ5VGV4dCk7XG4gICAgICAgIHZhciBtZXJnZWRTZWNvbmRhcnlUZXh0U3R5bGVzID0gc2Vjb25kYXJ5VGV4dElzQW5FbGVtZW50ID8gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5zZWNvbmRhcnlUZXh0LCBzZWNvbmRhcnlUZXh0LnByb3BzLnN0eWxlKSA6IG51bGw7XG5cbiAgICAgICAgc2Vjb25kYXJ5VGV4dEVsZW1lbnQgPSBzZWNvbmRhcnlUZXh0SXNBbkVsZW1lbnQgPyBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHNlY29uZGFyeVRleHQsIHsgc3R5bGU6IG1lcmdlZFNlY29uZGFyeVRleHRTdHlsZXMgfSkgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKHN0eWxlcy5zZWNvbmRhcnlUZXh0KSB9LFxuICAgICAgICAgIHNlY29uZGFyeVRleHRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZE1lbnVQb3BvdmVyID0gdm9pZCAwO1xuICAgICAgaWYgKG1lbnVJdGVtcykge1xuICAgICAgICBjaGlsZE1lbnVQb3BvdmVyID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX1BvcG92ZXIyLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgICAgICAgICBhbmNob3JPcmlnaW46IGFuY2hvck9yaWdpbixcbiAgICAgICAgICAgIGFuY2hvckVsOiB0aGlzLnN0YXRlLmFuY2hvckVsLFxuICAgICAgICAgICAgb3BlbjogdGhpcy5zdGF0ZS5vcGVuLFxuICAgICAgICAgICAgdGFyZ2V0T3JpZ2luOiB0YXJnZXRPcmlnaW4sXG4gICAgICAgICAgICB1c2VMYXllckZvckNsaWNrQXdheTogZmFsc2UsXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZTogdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX01lbnUyLmRlZmF1bHQsXG4gICAgICAgICAgICB7IGRlc2t0b3A6IGRlc2t0b3AsIGRpc2FibGVkOiBkaXNhYmxlZCwgc3R5bGU6IG5lc3RlZE1lbnVTdHlsZSB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm1hcChtZW51SXRlbXMsIHRoaXMuY2xvbmVNZW51SXRlbSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIG90aGVyLm9uQ2xpY2sgPSB0aGlzLmhhbmRsZVRvdWNoVGFwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9MaXN0SXRlbTIuZGVmYXVsdCxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgaG92ZXJDb2xvcjogdGhpcy5jb250ZXh0Lm11aVRoZW1lLm1lbnVJdGVtLmhvdmVyQ29sb3IsXG4gICAgICAgICAgaW5uZXJEaXZTdHlsZTogbWVyZ2VkSW5uZXJEaXZTdHlsZXMsXG4gICAgICAgICAgaW5zZXRDaGlsZHJlbjogaW5zZXRDaGlsZHJlbixcbiAgICAgICAgICBsZWZ0SWNvbjogbGVmdEljb25FbGVtZW50LFxuICAgICAgICAgIHJlZjogJ2xpc3RJdGVtJyxcbiAgICAgICAgICByaWdodEljb246IHJpZ2h0SWNvbkVsZW1lbnQsXG4gICAgICAgICAgcm9sZTogJ21lbnVpdGVtJyxcbiAgICAgICAgICBzdHlsZTogbWVyZ2VkUm9vdFN0eWxlc1xuICAgICAgICB9KSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHNlY29uZGFyeVRleHRFbGVtZW50LFxuICAgICAgICBjaGlsZE1lbnVQb3BvdmVyXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTWVudUl0ZW07XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5NZW51SXRlbS5tdWlOYW1lID0gJ01lbnVJdGVtJztcbk1lbnVJdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgYW5jaG9yT3JpZ2luOiB7IGhvcml6b250YWw6ICdyaWdodCcsIHZlcnRpY2FsOiAndG9wJyB9LFxuICBjaGVja2VkOiBmYWxzZSxcbiAgZGVza3RvcDogZmFsc2UsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZm9jdXNTdGF0ZTogJ25vbmUnLFxuICBpbnNldENoaWxkcmVuOiBmYWxzZSxcbiAgdGFyZ2V0T3JpZ2luOiB7IGhvcml6b250YWw6ICdsZWZ0JywgdmVydGljYWw6ICd0b3AnIH1cbn07XG5NZW51SXRlbS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuTWVudUl0ZW0ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogTG9jYXRpb24gb2YgdGhlIGFuY2hvciBmb3IgdGhlIHBvcG92ZXIgb2YgbmVzdGVkIGBNZW51SXRlbWBcbiAgICogZWxlbWVudHMuXG4gICAqIE9wdGlvbnM6XG4gICAqIGhvcml6b250YWw6IFtsZWZ0LCBtaWRkbGUsIHJpZ2h0XVxuICAgKiB2ZXJ0aWNhbDogW3RvcCwgY2VudGVyLCBib3R0b21dLlxuICAgKi9cbiAgYW5jaG9yT3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGFuaW1hdGlvbiBjb21wb25lbnQgdXNlZC5cbiAgICovXG4gIGFuaW1hdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgYSBsZWZ0IGNoZWNrIG1hcmsgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIGNoZWNrZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIEVsZW1lbnRzIHBhc3NlZCBhcyBjaGlsZHJlbiB0byB0aGUgdW5kZXJseWluZyBgTGlzdEl0ZW1gLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogSWYgdHJ1ZSwgdGhlIG1lbnUgaXRlbSB3aWxsIHJlbmRlciB3aXRoIGNvbXBhY3QgZGVza3RvcFxuICAgKiBzdHlsZXMuXG4gICAqL1xuICBkZXNrdG9wOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgbWVudSBpdGVtIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGZvY3VzIHN0YXRlIG9mIHRoZSBtZW51IGl0ZW0uIFRoaXMgcHJvcCBpcyB1c2VkIHRvIHNldCB0aGUgZm9jdXNcbiAgICogc3RhdGUgb2YgdGhlIHVuZGVybHlpbmcgYExpc3RJdGVtYC5cbiAgICovXG4gIGZvY3VzU3RhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydub25lJywgJ2ZvY3VzZWQnLCAna2V5Ym9hcmQtZm9jdXNlZCddKSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBpbm5lciBkaXYuXG4gICAqL1xuICBpbm5lckRpdlN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBjaGlsZHJlbiB3aWxsIGJlIGluZGVudGVkLlxuICAgKiBUaGlzIGlzIG9ubHkgbmVlZGVkIHdoZW4gdGhlcmUgaXMgbm8gYGxlZnRJY29uYC5cbiAgICovXG4gIGluc2V0Q2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBgU3ZnSWNvbmAgb3IgYEZvbnRJY29uYCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIGxlZnQgc2lkZS5cbiAgICovXG4gIGxlZnRJY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBgTWVudUl0ZW1gIGVsZW1lbnRzIHRvIG5lc3Qgd2l0aGluIHRoZSBtZW51IGl0ZW0uXG4gICAqL1xuICBtZW51SXRlbXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIG1lbnUgaXRlbSBpcyB0b3VjaC10YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUb3VjaFRhcCBldmVudCB0YXJnZXRpbmcgdGhlIG1lbnUgaXRlbS5cbiAgICovXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbiBiZSB1c2VkIHRvIHJlbmRlciBwcmltYXJ5IHRleHQgd2l0aGluIHRoZSBtZW51IGl0ZW0uXG4gICAqL1xuICBwcmltYXJ5VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGBTdmdJY29uYCBvciBgRm9udEljb25gIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgcmlnaHQgc2lkZS5cbiAgICovXG4gIHJpZ2h0SWNvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gcmVuZGVyIHNlY29uZGFyeSB0ZXh0IHdpdGhpbiB0aGUgbWVudSBpdGVtLlxuICAgKi9cbiAgc2Vjb25kYXJ5VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIExvY2F0aW9uIG9uIHRoZSBwb3BvdmVyIG9mIG5lc3RlZCBgTWVudUl0ZW1gIGVsZW1lbnRzIHRoYXQgd2lsbCBhdHRhY2hcbiAgICogdG8gdGhlIGFuY2hvcidzIG9yaWdpbi5cbiAgICogT3B0aW9uczpcbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIG1pZGRsZSwgcmlnaHRdXG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbV0uXG4gICAqL1xuICB0YXJnZXRPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLFxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAqL1xuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnlcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IE1lbnVJdGVtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9NZW51SXRlbS9NZW51SXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gNDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ3JlYWN0LWV2ZW50LWxpc3RlbmVyJyk7XG5cbnZhciBfcmVhY3RFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RXZlbnRMaXN0ZW5lcik7XG5cbnZhciBfUmVuZGVyVG9MYXllciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL1JlbmRlclRvTGF5ZXInKTtcblxudmFyIF9SZW5kZXJUb0xheWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlclRvTGF5ZXIpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxudmFyIF9sb2Rhc2ggPSByZXF1aXJlKCdsb2Rhc2gudGhyb3R0bGUnKTtcblxudmFyIF9sb2Rhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoKTtcblxudmFyIF9Qb3BvdmVyQW5pbWF0aW9uRGVmYXVsdCA9IHJlcXVpcmUoJy4vUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQnKTtcblxudmFyIF9Qb3BvdmVyQW5pbWF0aW9uRGVmYXVsdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb3BvdmVyQW5pbWF0aW9uRGVmYXVsdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnbm9uZSdcbiAgfVxufTtcblxudmFyIFBvcG92ZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShQb3BvdmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3BvdmVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgUG9wb3Zlcik7XG5cbiAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChQb3BvdmVyLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShQb3BvdmVyKSkuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMudGltZW91dCA9IG51bGw7XG5cbiAgICBfdGhpcy5yZW5kZXJMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFuaW1hdGVkID0gX3RoaXMkcHJvcHMuYW5pbWF0ZWQsXG4gICAgICAgICAgYW5pbWF0aW9uID0gX3RoaXMkcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgICAgIGFuY2hvckVsID0gX3RoaXMkcHJvcHMuYW5jaG9yRWwsXG4gICAgICAgICAgYW5jaG9yT3JpZ2luID0gX3RoaXMkcHJvcHMuYW5jaG9yT3JpZ2luLFxuICAgICAgICAgIGF1dG9DbG9zZVdoZW5PZmZTY3JlZW4gPSBfdGhpcyRwcm9wcy5hdXRvQ2xvc2VXaGVuT2ZmU2NyZWVuLFxuICAgICAgICAgIGNhbkF1dG9Qb3NpdGlvbiA9IF90aGlzJHByb3BzLmNhbkF1dG9Qb3NpdGlvbixcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlID0gX3RoaXMkcHJvcHMub25SZXF1ZXN0Q2xvc2UsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wcy5zdHlsZSxcbiAgICAgICAgICB0YXJnZXRPcmlnaW4gPSBfdGhpcyRwcm9wcy50YXJnZXRPcmlnaW4sXG4gICAgICAgICAgdXNlTGF5ZXJGb3JDbGlja0F3YXkgPSBfdGhpcyRwcm9wcy51c2VMYXllckZvckNsaWNrQXdheSxcbiAgICAgICAgICBzY3JvbGxhYmxlQ29udGFpbmVyID0gX3RoaXMkcHJvcHMuc2Nyb2xsYWJsZUNvbnRhaW5lcixcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF90aGlzJHByb3BzLCBbJ2FuaW1hdGVkJywgJ2FuaW1hdGlvbicsICdhbmNob3JFbCcsICdhbmNob3JPcmlnaW4nLCAnYXV0b0Nsb3NlV2hlbk9mZlNjcmVlbicsICdjYW5BdXRvUG9zaXRpb24nLCAnY2hpbGRyZW4nLCAnb25SZXF1ZXN0Q2xvc2UnLCAnc3R5bGUnLCAndGFyZ2V0T3JpZ2luJywgJ3VzZUxheWVyRm9yQ2xpY2tBd2F5JywgJ3Njcm9sbGFibGVDb250YWluZXInXSk7XG5cblxuICAgICAgdmFyIHN0eWxlUm9vdCA9IHN0eWxlO1xuXG4gICAgICBpZiAoIWFuaW1hdGVkKSB7XG4gICAgICAgIHN0eWxlUm9vdCA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB6SW5kZXg6IF90aGlzLmNvbnRleHQubXVpVGhlbWUuekluZGV4LnBvcG92ZXJcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIV90aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfUGFwZXIyLmRlZmF1bHQsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7IHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVSb290LCBzdHlsZSkgfSwgb3RoZXIpLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHZhciBBbmltYXRpb24gPSBhbmltYXRpb24gfHwgX1BvcG92ZXJBbmltYXRpb25EZWZhdWx0Mi5kZWZhdWx0O1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEFuaW1hdGlvbixcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgdGFyZ2V0T3JpZ2luOiB0YXJnZXRPcmlnaW4sXG4gICAgICAgICAgc3R5bGU6IHN0eWxlUm9vdFxuICAgICAgICB9LCBvdGhlciwge1xuICAgICAgICAgIG9wZW46IF90aGlzLnN0YXRlLm9wZW4gJiYgIV90aGlzLnN0YXRlLmNsb3NpbmdcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH07XG5cbiAgICBfdGhpcy5jb21wb25lbnRDbGlja0F3YXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5yZXF1ZXN0Q2xvc2UoJ2NsaWNrQXdheScpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRQbGFjZW1lbnQgPSBmdW5jdGlvbiAoc2Nyb2xsaW5nKSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIV90aGlzLnBvcG92ZXJSZWZzLmxheWVyLmdldExheWVyKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0RWwgPSBfdGhpcy5wb3BvdmVyUmVmcy5sYXllci5nZXRMYXllcigpLmNoaWxkcmVuWzBdO1xuICAgICAgaWYgKCF0YXJnZXRFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB0YXJnZXRPcmlnaW4gPSBfdGhpcyRwcm9wczIudGFyZ2V0T3JpZ2luLFxuICAgICAgICAgIGFuY2hvck9yaWdpbiA9IF90aGlzJHByb3BzMi5hbmNob3JPcmlnaW47XG5cbiAgICAgIHZhciBhbmNob3JFbCA9IF90aGlzLnByb3BzLmFuY2hvckVsIHx8IF90aGlzLmFuY2hvckVsO1xuXG4gICAgICB2YXIgYW5jaG9yID0gX3RoaXMuZ2V0QW5jaG9yUG9zaXRpb24oYW5jaG9yRWwpO1xuICAgICAgdmFyIHRhcmdldCA9IF90aGlzLmdldFRhcmdldFBvc2l0aW9uKHRhcmdldEVsKTtcblxuICAgICAgdmFyIHRhcmdldFBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IGFuY2hvclthbmNob3JPcmlnaW4udmVydGljYWxdIC0gdGFyZ2V0W3RhcmdldE9yaWdpbi52ZXJ0aWNhbF0sXG4gICAgICAgIGxlZnQ6IGFuY2hvclthbmNob3JPcmlnaW4uaG9yaXpvbnRhbF0gLSB0YXJnZXRbdGFyZ2V0T3JpZ2luLmhvcml6b250YWxdXG4gICAgICB9O1xuXG4gICAgICBpZiAoc2Nyb2xsaW5nICYmIF90aGlzLnByb3BzLmF1dG9DbG9zZVdoZW5PZmZTY3JlZW4pIHtcbiAgICAgICAgX3RoaXMuYXV0b0Nsb3NlV2hlbk9mZlNjcmVlbihhbmNob3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuY2FuQXV0b1Bvc2l0aW9uKSB7XG4gICAgICAgIHRhcmdldCA9IF90aGlzLmdldFRhcmdldFBvc2l0aW9uKHRhcmdldEVsKTsgLy8gdXBkYXRlIGFzIGhlaWdodCBtYXkgaGF2ZSBjaGFuZ2VkXG4gICAgICAgIHRhcmdldFBvc2l0aW9uID0gX3RoaXMuYXBwbHlBdXRvUG9zaXRpb25JZk5lZWRlZChhbmNob3IsIHRhcmdldCwgdGFyZ2V0T3JpZ2luLCBhbmNob3JPcmlnaW4sIHRhcmdldFBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0RWwuc3R5bGUudG9wID0gdGFyZ2V0UG9zaXRpb24udG9wICsgJ3B4JztcbiAgICAgIHRhcmdldEVsLnN0eWxlLmxlZnQgPSB0YXJnZXRQb3NpdGlvbi5sZWZ0ICsgJ3B4JztcbiAgICAgIHRhcmdldEVsLnN0eWxlLm1heEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArICdweCc7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVJlc2l6ZSA9ICgwLCBfbG9kYXNoMi5kZWZhdWx0KShfdGhpcy5zZXRQbGFjZW1lbnQsIDEwMCk7XG4gICAgX3RoaXMuaGFuZGxlU2Nyb2xsID0gKDAsIF9sb2Rhc2gyLmRlZmF1bHQpKF90aGlzLnNldFBsYWNlbWVudC5iaW5kKF90aGlzLCB0cnVlKSwgNTApO1xuXG4gICAgX3RoaXMucG9wb3ZlclJlZnMgPSB7fTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbixcbiAgICAgIGNsb3Npbmc6IGZhbHNlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShQb3BvdmVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnBsYWNlbWVudFRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuc2V0UGxhY2VtZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAobmV4dFByb3BzLm9wZW4gPT09IHRoaXMucHJvcHMub3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0UHJvcHMub3Blbikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hbmNob3JFbCA9IG5leHRQcm9wcy5hbmNob3JFbCB8fCB0aGlzLnByb3BzLmFuY2hvckVsO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgIGNsb3Npbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5leHRQcm9wcy5hbmltYXRlZCkge1xuICAgICAgICAgIGlmICh0aGlzLnRpbWVvdXQgIT09IG51bGwpIHJldHVybjtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2xvc2luZzogdHJ1ZSB9KTtcbiAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzMi50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGxhY2VtZW50VGltZW91dCk7XG4gICAgICB0aGlzLnBsYWNlbWVudFRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuc2V0UGxhY2VtZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5oYW5kbGVSZXNpemUuY2FuY2VsKCk7XG4gICAgICB0aGlzLmhhbmRsZVNjcm9sbC5jYW5jZWwoKTtcblxuICAgICAgaWYgKHRoaXMucGxhY2VtZW50VGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5wbGFjZW1lbnRUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnRUaW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXF1ZXN0Q2xvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXF1ZXN0Q2xvc2UocmVhc29uKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKHJlYXNvbik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QW5jaG9yUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbmNob3JQb3NpdGlvbihlbCkge1xuICAgICAgaWYgKCFlbCkge1xuICAgICAgICBlbCA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBhID0ge1xuICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgIHdpZHRoOiBlbC5vZmZzZXRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBlbC5vZmZzZXRIZWlnaHRcbiAgICAgIH07XG5cbiAgICAgIGEucmlnaHQgPSByZWN0LnJpZ2h0IHx8IGEubGVmdCArIGEud2lkdGg7XG4gICAgICBhLmJvdHRvbSA9IHJlY3QuYm90dG9tIHx8IGEudG9wICsgYS5oZWlnaHQ7XG4gICAgICBhLm1pZGRsZSA9IGEubGVmdCArIChhLnJpZ2h0IC0gYS5sZWZ0KSAvIDI7XG4gICAgICBhLmNlbnRlciA9IGEudG9wICsgKGEuYm90dG9tIC0gYS50b3ApIC8gMjtcblxuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VGFyZ2V0UG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUYXJnZXRQb3NpdGlvbih0YXJnZXRFbCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBjZW50ZXI6IHRhcmdldEVsLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICAgIGJvdHRvbTogdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBtaWRkbGU6IHRhcmdldEVsLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgcmlnaHQ6IHRhcmdldEVsLm9mZnNldFdpZHRoXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2F1dG9DbG9zZVdoZW5PZmZTY3JlZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhdXRvQ2xvc2VXaGVuT2ZmU2NyZWVuKGFuY2hvclBvc2l0aW9uKSB7XG4gICAgICBpZiAoYW5jaG9yUG9zaXRpb24udG9wIDwgMCB8fCBhbmNob3JQb3NpdGlvbi50b3AgPiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgYW5jaG9yUG9zaXRpb24ubGVmdCA8IDAgfHwgYW5jaG9yUG9zaXRpb24ubGVmdCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdENsb3NlKCdvZmZTY3JlZW4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRPdmVybGFwTW9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE92ZXJsYXBNb2RlKGFuY2hvciwgdGFyZ2V0LCBtZWRpYW4pIHtcbiAgICAgIGlmIChbYW5jaG9yLCB0YXJnZXRdLmluZGV4T2YobWVkaWFuKSA+PSAwKSByZXR1cm4gJ2F1dG8nO1xuICAgICAgaWYgKGFuY2hvciA9PT0gdGFyZ2V0KSByZXR1cm4gJ2luY2x1c2l2ZSc7XG4gICAgICByZXR1cm4gJ2V4Y2x1c2l2ZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0UG9zaXRpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9zaXRpb25zKGFuY2hvciwgdGFyZ2V0KSB7XG4gICAgICB2YXIgYSA9ICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIGFuY2hvcik7XG4gICAgICB2YXIgdCA9ICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHRhcmdldCk7XG5cbiAgICAgIHZhciBwb3NpdGlvbnMgPSB7XG4gICAgICAgIHg6IFsnbGVmdCcsICdyaWdodCddLmZpbHRlcihmdW5jdGlvbiAocCkge1xuICAgICAgICAgIHJldHVybiBwICE9PSB0Lmhvcml6b250YWw7XG4gICAgICAgIH0pLFxuICAgICAgICB5OiBbJ3RvcCcsICdib3R0b20nXS5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICByZXR1cm4gcCAhPT0gdC52ZXJ0aWNhbDtcbiAgICAgICAgfSlcbiAgICAgIH07XG5cbiAgICAgIHZhciBvdmVybGFwID0ge1xuICAgICAgICB4OiB0aGlzLmdldE92ZXJsYXBNb2RlKGEuaG9yaXpvbnRhbCwgdC5ob3Jpem9udGFsLCAnbWlkZGxlJyksXG4gICAgICAgIHk6IHRoaXMuZ2V0T3ZlcmxhcE1vZGUoYS52ZXJ0aWNhbCwgdC52ZXJ0aWNhbCwgJ2NlbnRlcicpXG4gICAgICB9O1xuXG4gICAgICBwb3NpdGlvbnMueC5zcGxpY2Uob3ZlcmxhcC54ID09PSAnYXV0bycgPyAwIDogMSwgMCwgJ21pZGRsZScpO1xuICAgICAgcG9zaXRpb25zLnkuc3BsaWNlKG92ZXJsYXAueSA9PT0gJ2F1dG8nID8gMCA6IDEsIDAsICdjZW50ZXInKTtcblxuICAgICAgaWYgKG92ZXJsYXAueSAhPT0gJ2F1dG8nKSB7XG4gICAgICAgIGEudmVydGljYWwgPSBhLnZlcnRpY2FsID09PSAndG9wJyA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgICAgIGlmIChvdmVybGFwLnkgPT09ICdpbmNsdXNpdmUnKSB7XG4gICAgICAgICAgdC52ZXJ0aWNhbCA9IHQudmVydGljYWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG92ZXJsYXAueCAhPT0gJ2F1dG8nKSB7XG4gICAgICAgIGEuaG9yaXpvbnRhbCA9IGEuaG9yaXpvbnRhbCA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgaWYgKG92ZXJsYXAueSA9PT0gJ2luY2x1c2l2ZScpIHtcbiAgICAgICAgICB0Lmhvcml6b250YWwgPSB0Lmhvcml6b250YWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb25zOiBwb3NpdGlvbnMsXG4gICAgICAgIGFuY2hvclBvczogYVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhcHBseUF1dG9Qb3NpdGlvbklmTmVlZGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwbHlBdXRvUG9zaXRpb25JZk5lZWRlZChhbmNob3IsIHRhcmdldCwgdGFyZ2V0T3JpZ2luLCBhbmNob3JPcmlnaW4sIHRhcmdldFBvc2l0aW9uKSB7XG4gICAgICB2YXIgX2dldFBvc2l0aW9ucyA9IHRoaXMuZ2V0UG9zaXRpb25zKGFuY2hvck9yaWdpbiwgdGFyZ2V0T3JpZ2luKSxcbiAgICAgICAgICBwb3NpdGlvbnMgPSBfZ2V0UG9zaXRpb25zLnBvc2l0aW9ucyxcbiAgICAgICAgICBhbmNob3JQb3MgPSBfZ2V0UG9zaXRpb25zLmFuY2hvclBvcztcblxuICAgICAgaWYgKHRhcmdldFBvc2l0aW9uLnRvcCA8IDAgfHwgdGFyZ2V0UG9zaXRpb24udG9wICsgdGFyZ2V0LmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICB2YXIgbmV3VG9wID0gYW5jaG9yW2FuY2hvclBvcy52ZXJ0aWNhbF0gLSB0YXJnZXRbcG9zaXRpb25zLnlbMF1dO1xuICAgICAgICBpZiAobmV3VG9wICsgdGFyZ2V0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICB0YXJnZXRQb3NpdGlvbi50b3AgPSBNYXRoLm1heCgwLCBuZXdUb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1RvcCA9IGFuY2hvclthbmNob3JQb3MudmVydGljYWxdIC0gdGFyZ2V0W3Bvc2l0aW9ucy55WzFdXTtcbiAgICAgICAgICBpZiAobmV3VG9wICsgdGFyZ2V0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRhcmdldFBvc2l0aW9uLnRvcCA9IE1hdGgubWF4KDAsIG5ld1RvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXRQb3NpdGlvbi5sZWZ0IDwgMCB8fCB0YXJnZXRQb3NpdGlvbi5sZWZ0ICsgdGFyZ2V0LnJpZ2h0ID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgdmFyIG5ld0xlZnQgPSBhbmNob3JbYW5jaG9yUG9zLmhvcml6b250YWxdIC0gdGFyZ2V0W3Bvc2l0aW9ucy54WzBdXTtcbiAgICAgICAgaWYgKG5ld0xlZnQgKyB0YXJnZXQucmlnaHQgPD0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICB0YXJnZXRQb3NpdGlvbi5sZWZ0ID0gTWF0aC5tYXgoMCwgbmV3TGVmdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3TGVmdCA9IGFuY2hvclthbmNob3JQb3MuaG9yaXpvbnRhbF0gLSB0YXJnZXRbcG9zaXRpb25zLnhbMV1dO1xuICAgICAgICAgIGlmIChuZXdMZWZ0ICsgdGFyZ2V0LnJpZ2h0IDw9IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICB0YXJnZXRQb3NpdGlvbi5sZWZ0ID0gTWF0aC5tYXgoMCwgbmV3TGVmdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXRQb3NpdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogc3R5bGVzLnJvb3QgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCwge1xuICAgICAgICAgIHRhcmdldDogdGhpcy5wcm9wcy5zY3JvbGxhYmxlQ29udGFpbmVyLFxuICAgICAgICAgIG9uU2Nyb2xsOiB0aGlzLmhhbmRsZVNjcm9sbCxcbiAgICAgICAgICBvblJlc2l6ZTogdGhpcy5oYW5kbGVSZXNpemVcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9SZW5kZXJUb0xheWVyMi5kZWZhdWx0LCB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5wb3BvdmVyUmVmcy5sYXllciA9IF9yZWY7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcGVuOiB0aGlzLnN0YXRlLm9wZW4sXG4gICAgICAgICAgY29tcG9uZW50Q2xpY2tBd2F5OiB0aGlzLmNvbXBvbmVudENsaWNrQXdheSxcbiAgICAgICAgICB1c2VMYXllckZvckNsaWNrQXdheTogdGhpcy5wcm9wcy51c2VMYXllckZvckNsaWNrQXdheSxcbiAgICAgICAgICByZW5kZXI6IHRoaXMucmVuZGVyTGF5ZXJcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQb3BvdmVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFuY2hvck9yaWdpbjoge1xuICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICBob3Jpem9udGFsOiAnbGVmdCdcbiAgfSxcbiAgYW5pbWF0ZWQ6IHRydWUsXG4gIGF1dG9DbG9zZVdoZW5PZmZTY3JlZW46IHRydWUsXG4gIGNhbkF1dG9Qb3NpdGlvbjogdHJ1ZSxcbiAgb25SZXF1ZXN0Q2xvc2U6IGZ1bmN0aW9uIG9uUmVxdWVzdENsb3NlKCkge30sXG4gIG9wZW46IGZhbHNlLFxuICBzY3JvbGxhYmxlQ29udGFpbmVyOiAnd2luZG93JyxcbiAgc3R5bGU6IHtcbiAgICBvdmVyZmxvd1k6ICdhdXRvJ1xuICB9LFxuICB0YXJnZXRPcmlnaW46IHtcbiAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnXG4gIH0sXG4gIHVzZUxheWVyRm9yQ2xpY2tBd2F5OiB0cnVlLFxuICB6RGVwdGg6IDFcbn07XG5Qb3BvdmVyLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Qb3BvdmVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIERPTSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIHRvIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlXG4gICAqIHBvcG92ZXIuXG4gICAqL1xuICBhbmNob3JFbDogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb2ludCBvbiB0aGUgYW5jaG9yIHdoZXJlIHRoZSBwb3BvdmVyJ3NcbiAgICogYHRhcmdldE9yaWdpbmAgd2lsbCBhdHRhY2ggdG8uXG4gICAqIE9wdGlvbnM6XG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbV1cbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIG1pZGRsZSwgcmlnaHRdLlxuICAgKi9cbiAgYW5jaG9yT3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbixcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBwb3BvdmVyIHdpbGwgYXBwbHkgdHJhbnNpdGlvbnMgd2hlblxuICAgKiBpdCBpcyBhZGRlZCB0byB0aGUgRE9NLlxuICAgKi9cbiAgYW5pbWF0ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGFuaW1hdGlvbiBjb21wb25lbnQgdXNlZC5cbiAgICovXG4gIGFuaW1hdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHBvcG92ZXIgd2lsbCBoaWRlIHdoZW4gdGhlIGFuY2hvciBpcyBzY3JvbGxlZCBvZmYgdGhlIHNjcmVlbi5cbiAgICovXG4gIGF1dG9DbG9zZVdoZW5PZmZTY3JlZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBwb3BvdmVyIChwb3RlbnRpYWxseSkgaWdub3JlcyBgdGFyZ2V0T3JpZ2luYFxuICAgKiBhbmQgYGFuY2hvck9yaWdpbmAgdG8gbWFrZSBpdHNlbGYgZml0IG9uIHNjcmVlbixcbiAgICogd2hpY2ggaXMgdXNlZnVsIGZvciBtb2JpbGUgZGV2aWNlcy5cbiAgICovXG4gIGNhbkF1dG9Qb3NpdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgcG9wb3ZlciBpcyByZXF1ZXN0ZWQgdG8gYmUgY2xvc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIFRoZSByZWFzb24gZm9yIHRoZSBjbG9zZSByZXF1ZXN0LiBQb3NzaWJsZXMgdmFsdWVzXG4gICAqIGFyZSAnY2xpY2tBd2F5JyBhbmQgJ29mZlNjcmVlbicuXG4gICAqL1xuICBvblJlcXVlc3RDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHBvcG92ZXIgaXMgdmlzaWJsZS5cbiAgICovXG4gIG9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIHBhcmVudCBzY3JvbGxhYmxlIGNvbnRhaW5lci5cbiAgICogSXQgY2FuIGJlIGFuIGVsZW1lbnQgb3IgYSBzdHJpbmcgbGlrZSBgd2luZG93YC5cbiAgICovXG4gIHNjcm9sbGFibGVDb250YWluZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb2ludCBvbiB0aGUgcG9wb3ZlciB3aGljaCB3aWxsIGF0dGFjaCB0b1xuICAgKiB0aGUgYW5jaG9yJ3Mgb3JpZ2luLlxuICAgKiBPcHRpb25zOlxuICAgKiB2ZXJ0aWNhbDogW3RvcCwgY2VudGVyLCBib3R0b21dXG4gICAqIGhvcml6b250YWw6IFtsZWZ0LCBtaWRkbGUsIHJpZ2h0XS5cbiAgICovXG4gIHRhcmdldE9yaWdpbjogX3Byb3BUeXBlczQuZGVmYXVsdC5vcmlnaW4sXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgcG9wb3ZlciB3aWxsIHJlbmRlciBvbiB0b3Agb2YgYW4gaW52aXNpYmxlXG4gICAqIGxheWVyLCB3aGljaCB3aWxsIHByZXZlbnQgY2xpY2tzIHRvIHRoZSB1bmRlcmx5aW5nXG4gICAqIGVsZW1lbnRzLCBhbmQgdHJpZ2dlciBhbiBgb25SZXF1ZXN0Q2xvc2UoJ2NsaWNrQXdheScpYCBjYWxsLlxuICAgKi9cbiAgdXNlTGF5ZXJGb3JDbGlja0F3YXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSB6RGVwdGggb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICB6RGVwdGg6IF9wcm9wVHlwZXM0LmRlZmF1bHQuekRlcHRoXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBQb3BvdmVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9Qb3BvdmVyL1BvcG92ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9ldmVudHMgPSByZXF1aXJlKCcuLi91dGlscy9ldmVudHMnKTtcblxudmFyIF9ldmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXZlbnRzKTtcblxudmFyIF9rZXljb2RlID0gcmVxdWlyZSgna2V5Y29kZScpO1xuXG52YXIgX2tleWNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Y29kZSk7XG5cbnZhciBfRm9jdXNSaXBwbGUgPSByZXF1aXJlKCcuL0ZvY3VzUmlwcGxlJyk7XG5cbnZhciBfRm9jdXNSaXBwbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9jdXNSaXBwbGUpO1xuXG52YXIgX1RvdWNoUmlwcGxlID0gcmVxdWlyZSgnLi9Ub3VjaFJpcHBsZScpO1xuXG52YXIgX1RvdWNoUmlwcGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvdWNoUmlwcGxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHN0eWxlSW5qZWN0ZWQgPSBmYWxzZTtcbnZhciBsaXN0ZW5pbmcgPSBmYWxzZTtcbnZhciB0YWJQcmVzc2VkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluamVjdFN0eWxlKCkge1xuICBpZiAoIXN0eWxlSW5qZWN0ZWQpIHtcbiAgICAvLyBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pbm5lckhUTUwgPSAnXFxuICAgICAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbiAgICAgIGlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgfVxcbiAgICAnO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgc3R5bGVJbmplY3RlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlzdGVuRm9yVGFiUHJlc3NlcygpIHtcbiAgaWYgKCFsaXN0ZW5pbmcpIHtcbiAgICBfZXZlbnRzMi5kZWZhdWx0Lm9uKHdpbmRvdywgJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHRhYlByZXNzZWQgPSAoMCwgX2tleWNvZGUyLmRlZmF1bHQpKGV2ZW50KSA9PT0gJ3RhYic7XG4gICAgfSk7XG4gICAgbGlzdGVuaW5nID0gdHJ1ZTtcbiAgfVxufVxuXG52YXIgRW5oYW5jZWRCdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShFbmhhbmNlZEJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRW5oYW5jZWRCdXR0b24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRW5oYW5jZWRCdXR0b24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gRW5oYW5jZWRCdXR0b24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEVuaGFuY2VkQnV0dG9uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkICYmICFfdGhpcy5wcm9wcy5kaXNhYmxlS2V5Ym9hcmRGb2N1cykge1xuICAgICAgICBpZiAoKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCkgPT09ICdlbnRlcicgJiYgX3RoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVUb3VjaFRhcChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfa2V5Y29kZTIuZGVmYXVsdCkoZXZlbnQpID09PSAnZXNjJyAmJiBfdGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgICAgIF90aGlzLnJlbW92ZUtleWJvYXJkRm9jdXMoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkICYmICFfdGhpcy5wcm9wcy5kaXNhYmxlS2V5Ym9hcmRGb2N1cykge1xuICAgICAgICBpZiAoKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCkgPT09ICdzcGFjZScgJiYgX3RoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVUb3VjaFRhcChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF90aGlzLnByb3BzLm9uS2V5VXAoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmNhbmNlbEZvY3VzVGltZW91dCgpO1xuICAgICAgX3RoaXMucmVtb3ZlS2V5Ym9hcmRGb2N1cyhldmVudCk7XG4gICAgICBfdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQpIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQgJiYgIV90aGlzLnByb3BzLmRpc2FibGVLZXlib2FyZEZvY3VzKSB7XG4gICAgICAgIC8vIHNldFRpbWVvdXQgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGZvY3VzIGV2ZW50IGZpcmVzIGZpcnN0XG4gICAgICAgIC8vIFdhaXQgc28gdGhhdCB3ZSBjYW4gY2FwdHVyZSBpZiB0aGlzIHdhcyBhIGtleWJvYXJkIGZvY3VzXG4gICAgICAgIC8vIG9yIHRvdWNoIGZvY3VzXG4gICAgICAgIF90aGlzLmZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0YWJQcmVzc2VkKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRLZXlib2FyZEZvY3VzKGV2ZW50KTtcbiAgICAgICAgICAgIHRhYlByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDE1MCk7XG5cbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmNhbmNlbEZvY3VzVGltZW91dCgpO1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0YWJQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnJlbW92ZUtleWJvYXJkRm9jdXMoZXZlbnQpO1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRW5oYW5jZWRCdXR0b24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZUtleWJvYXJkRm9jdXMgPSBfcHJvcHMuZGlzYWJsZUtleWJvYXJkRm9jdXMsXG4gICAgICAgICAga2V5Ym9hcmRGb2N1c2VkID0gX3Byb3BzLmtleWJvYXJkRm9jdXNlZDtcblxuICAgICAgaWYgKCFkaXNhYmxlZCAmJiBrZXlib2FyZEZvY3VzZWQgJiYgIWRpc2FibGVLZXlib2FyZEZvY3VzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0tleWJvYXJkRm9jdXNlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaW5qZWN0U3R5bGUoKTtcbiAgICAgIGxpc3RlbkZvclRhYlByZXNzZXMoKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25LZXlib2FyZEZvY3VzKG51bGwsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKChuZXh0UHJvcHMuZGlzYWJsZWQgfHwgbmV4dFByb3BzLmRpc2FibGVLZXlib2FyZEZvY3VzKSAmJiB0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2UgfSk7XG4gICAgICAgIGlmIChuZXh0UHJvcHMub25LZXlib2FyZEZvY3VzKSB7XG4gICAgICAgICAgbmV4dFByb3BzLm9uS2V5Ym9hcmRGb2N1cyhudWxsLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuZm9jdXNUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzVGltZW91dCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNLZXlib2FyZEZvY3VzZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0tleWJvYXJkRm9jdXNlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUtleWJvYXJkRm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVLZXlib2FyZEZvY3VzKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNLZXlib2FyZEZvY3VzZWQ6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uS2V5Ym9hcmRGb2N1cyhldmVudCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldEtleWJvYXJkRm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRLZXlib2FyZEZvY3VzKGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzS2V5Ym9hcmRGb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uS2V5Ym9hcmRGb2N1cyhldmVudCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FuY2VsRm9jdXNUaW1lb3V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FuY2VsRm9jdXNUaW1lb3V0KCkge1xuICAgICAgaWYgKHRoaXMuZm9jdXNUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZvY3VzVGltZW91dCk7XG4gICAgICAgIHRoaXMuZm9jdXNUaW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVCdXR0b25DaGlsZHJlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkNoaWxkcmVuKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNlbnRlclJpcHBsZSA9IF9wcm9wczIuY2VudGVyUmlwcGxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wczIuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlID0gX3Byb3BzMi5kaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgICAgICAgZGlzYWJsZUtleWJvYXJkRm9jdXMgPSBfcHJvcHMyLmRpc2FibGVLZXlib2FyZEZvY3VzLFxuICAgICAgICAgIGRpc2FibGVUb3VjaFJpcHBsZSA9IF9wcm9wczIuZGlzYWJsZVRvdWNoUmlwcGxlLFxuICAgICAgICAgIGZvY3VzUmlwcGxlQ29sb3IgPSBfcHJvcHMyLmZvY3VzUmlwcGxlQ29sb3IsXG4gICAgICAgICAgZm9jdXNSaXBwbGVPcGFjaXR5ID0gX3Byb3BzMi5mb2N1c1JpcHBsZU9wYWNpdHksXG4gICAgICAgICAgdG91Y2hSaXBwbGVDb2xvciA9IF9wcm9wczIudG91Y2hSaXBwbGVDb2xvcixcbiAgICAgICAgICB0b3VjaFJpcHBsZU9wYWNpdHkgPSBfcHJvcHMyLnRvdWNoUmlwcGxlT3BhY2l0eTtcbiAgICAgIHZhciBpc0tleWJvYXJkRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQ7XG5cbiAgICAgIC8vIEZvY3VzIFJpcHBsZVxuXG4gICAgICB2YXIgZm9jdXNSaXBwbGUgPSBpc0tleWJvYXJkRm9jdXNlZCAmJiAhZGlzYWJsZWQgJiYgIWRpc2FibGVGb2N1c1JpcHBsZSAmJiAhZGlzYWJsZUtleWJvYXJkRm9jdXMgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRm9jdXNSaXBwbGUyLmRlZmF1bHQsIHtcbiAgICAgICAgY29sb3I6IGZvY3VzUmlwcGxlQ29sb3IsXG4gICAgICAgIG9wYWNpdHk6IGZvY3VzUmlwcGxlT3BhY2l0eSxcbiAgICAgICAgc2hvdzogaXNLZXlib2FyZEZvY3VzZWQsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGtleTogJ2ZvY3VzUmlwcGxlJ1xuICAgICAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIFRvdWNoIFJpcHBsZVxuICAgICAgdmFyIHRvdWNoUmlwcGxlID0gIWRpc2FibGVkICYmICFkaXNhYmxlVG91Y2hSaXBwbGUgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1RvdWNoUmlwcGxlMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgY2VudGVyUmlwcGxlOiBjZW50ZXJSaXBwbGUsXG4gICAgICAgICAgY29sb3I6IHRvdWNoUmlwcGxlQ29sb3IsXG4gICAgICAgICAgb3BhY2l0eTogdG91Y2hSaXBwbGVPcGFjaXR5LFxuICAgICAgICAgIGtleTogJ3RvdWNoUmlwcGxlJ1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIFtmb2N1c1JpcHBsZSwgdG91Y2hSaXBwbGUsIHRvdWNoUmlwcGxlID8gdW5kZWZpbmVkIDogY2hpbGRyZW5dO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2VudGVyUmlwcGxlID0gX3Byb3BzMy5jZW50ZXJSaXBwbGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMzLmNoaWxkcmVuLFxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQgPSBfcHJvcHMzLmNvbnRhaW5lckVsZW1lbnQsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMzLmRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVGb2N1c1JpcHBsZSA9IF9wcm9wczMuZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgICAgICAgIGRpc2FibGVLZXlib2FyZEZvY3VzID0gX3Byb3BzMy5kaXNhYmxlS2V5Ym9hcmRGb2N1cyxcbiAgICAgICAgICBkaXNhYmxlVG91Y2hSaXBwbGUgPSBfcHJvcHMzLmRpc2FibGVUb3VjaFJpcHBsZSxcbiAgICAgICAgICBmb2N1c1JpcHBsZUNvbG9yID0gX3Byb3BzMy5mb2N1c1JpcHBsZUNvbG9yLFxuICAgICAgICAgIGZvY3VzUmlwcGxlT3BhY2l0eSA9IF9wcm9wczMuZm9jdXNSaXBwbGVPcGFjaXR5LFxuICAgICAgICAgIGhyZWYgPSBfcHJvcHMzLmhyZWYsXG4gICAgICAgICAga2V5Ym9hcmRGb2N1c2VkID0gX3Byb3BzMy5rZXlib2FyZEZvY3VzZWQsXG4gICAgICAgICAgdG91Y2hSaXBwbGVDb2xvciA9IF9wcm9wczMudG91Y2hSaXBwbGVDb2xvcixcbiAgICAgICAgICB0b3VjaFJpcHBsZU9wYWNpdHkgPSBfcHJvcHMzLnRvdWNoUmlwcGxlT3BhY2l0eSxcbiAgICAgICAgICBvbkJsdXIgPSBfcHJvcHMzLm9uQmx1cixcbiAgICAgICAgICBvbkNsaWNrID0gX3Byb3BzMy5vbkNsaWNrLFxuICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMzLm9uRm9jdXMsXG4gICAgICAgICAgb25LZXlVcCA9IF9wcm9wczMub25LZXlVcCxcbiAgICAgICAgICBvbktleURvd24gPSBfcHJvcHMzLm9uS2V5RG93bixcbiAgICAgICAgICBvbktleWJvYXJkRm9jdXMgPSBfcHJvcHMzLm9uS2V5Ym9hcmRGb2N1cyxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wczMuc3R5bGUsXG4gICAgICAgICAgdGFiSW5kZXggPSBfcHJvcHMzLnRhYkluZGV4LFxuICAgICAgICAgIHR5cGUgPSBfcHJvcHMzLnR5cGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMzLCBbJ2NlbnRlclJpcHBsZScsICdjaGlsZHJlbicsICdjb250YWluZXJFbGVtZW50JywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVGb2N1c1JpcHBsZScsICdkaXNhYmxlS2V5Ym9hcmRGb2N1cycsICdkaXNhYmxlVG91Y2hSaXBwbGUnLCAnZm9jdXNSaXBwbGVDb2xvcicsICdmb2N1c1JpcHBsZU9wYWNpdHknLCAnaHJlZicsICdrZXlib2FyZEZvY3VzZWQnLCAndG91Y2hSaXBwbGVDb2xvcicsICd0b3VjaFJpcHBsZU9wYWNpdHknLCAnb25CbHVyJywgJ29uQ2xpY2snLCAnb25Gb2N1cycsICdvbktleVVwJywgJ29uS2V5RG93bicsICdvbktleWJvYXJkRm9jdXMnLCAnc3R5bGUnLCAndGFiSW5kZXgnLCAndHlwZSddKTtcbiAgICAgIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBwcmVwYXJlU3R5bGVzID0gX2NvbnRleHQkbXVpVGhlbWUucHJlcGFyZVN0eWxlcyxcbiAgICAgICAgICBlbmhhbmNlZEJ1dHRvbiA9IF9jb250ZXh0JG11aVRoZW1lLmVuaGFuY2VkQnV0dG9uO1xuXG5cbiAgICAgIHZhciBtZXJnZWRTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICBib3JkZXI6IDEwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWUuZm9udEZhbWlseSxcbiAgICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6IGVuaGFuY2VkQnV0dG9uLnRhcEhpZ2hsaWdodENvbG9yLCAvLyBSZW1vdmUgbW9iaWxlIGNvbG9yIGZsYXNoaW5nIChkZXByZWNhdGVkKVxuICAgICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgICAgZm9udFdlaWdodDogJ2luaGVyaXQnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJywgLy8gVGhpcyBpcyBuZWVkZWQgc28gdGhhdCByaXBwbGVzIGRvIG5vdCBibGVlZCBwYXN0IGJvcmRlciByYWRpdXMuXG4gICAgICAgIHZlcnRpY2FsQWxpZ246IGhyZWYgPyAnbWlkZGxlJyA6IG51bGxcbiAgICAgIH0sIHN0eWxlKTtcblxuICAgICAgLy8gUGFzc2luZyBib3RoIGJhY2tncm91bmQ6bm9uZSAmIGJhY2tncm91bmRDb2xvciBjYW4gYnJlYWsgZHVlIHRvIG9iamVjdCBpdGVyYXRpb24gb3JkZXJcbiAgICAgIGlmICghbWVyZ2VkU3R5bGVzLmJhY2tncm91bmRDb2xvciAmJiAhbWVyZ2VkU3R5bGVzLmJhY2tncm91bmQpIHtcbiAgICAgICAgbWVyZ2VkU3R5bGVzLmJhY2tncm91bmQgPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXNhYmxlZCAmJiBocmVmKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBtZXJnZWRTdHlsZXNcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB2YXIgYnV0dG9uUHJvcHMgPSAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhtZXJnZWRTdHlsZXMpLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5idXR0b24gPSBub2RlO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUtleVVwLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVUb3VjaFRhcCxcbiAgICAgICAgdGFiSW5kZXg6IGRpc2FibGVkIHx8IGRpc2FibGVLZXlib2FyZEZvY3VzID8gLTEgOiB0YWJJbmRleFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChocmVmKSBidXR0b25Qcm9wcy5ocmVmID0gaHJlZjtcblxuICAgICAgdmFyIGJ1dHRvbkNoaWxkcmVuID0gdGhpcy5jcmVhdGVCdXR0b25DaGlsZHJlbigpO1xuXG4gICAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNvbnRhaW5lckVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNvbnRhaW5lckVsZW1lbnQsIGJ1dHRvblByb3BzLCBidXR0b25DaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgIGlmICghaHJlZiAmJiBjb250YWluZXJFbGVtZW50ID09PSAnYnV0dG9uJykge1xuICAgICAgICBidXR0b25Qcm9wcy50eXBlID0gdHlwZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KGhyZWYgPyAnYScgOiBjb250YWluZXJFbGVtZW50LCBidXR0b25Qcm9wcywgYnV0dG9uQ2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRW5oYW5jZWRCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5FbmhhbmNlZEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lckVsZW1lbnQ6ICdidXR0b24nLFxuICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cigpIHt9LFxuICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge30sXG4gIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7fSxcbiAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oKSB7fSxcbiAgb25LZXlVcDogZnVuY3Rpb24gb25LZXlVcCgpIHt9LFxuICBvbktleWJvYXJkRm9jdXM6IGZ1bmN0aW9uIG9uS2V5Ym9hcmRGb2N1cygpIHt9LFxuICB0YWJJbmRleDogMCxcbiAgdHlwZTogJ2J1dHRvbidcbn07XG5FbmhhbmNlZEJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRW5oYW5jZWRCdXR0b24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjZW50ZXJSaXBwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgY29udGFpbmVyRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnRdKSxcbiAgZGlzYWJsZUZvY3VzUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRpc2FibGVLZXlib2FyZEZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBmb2N1c1JpcHBsZUNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZm9jdXNSaXBwbGVPcGFjaXR5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGtleWJvYXJkRm9jdXNlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBvbkJsdXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uS2V5RG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbktleVVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uS2V5Ym9hcmRGb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRhYkluZGV4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgdG91Y2hSaXBwbGVDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRvdWNoUmlwcGxlT3BhY2l0eTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBFbmhhbmNlZEJ1dHRvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDQyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgaXNEZXNjZW5kYW50OiBmdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICAgIHZhciBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcblxuICAgIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSByZXR1cm4gdHJ1ZTtcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChlbCkge1xuICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdFxuICAgIH07XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL3V0aWxzL2RvbS5qc1xuLy8gbW9kdWxlIGlkID0gNDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jaGFpbkZ1bmN0aW9uID0gcmVxdWlyZSgnY2hhaW4tZnVuY3Rpb24nKTtcblxudmFyIF9jaGFpbkZ1bmN0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluRnVuY3Rpb24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9DaGlsZE1hcHBpbmcgPSByZXF1aXJlKCcuL3V0aWxzL0NoaWxkTWFwcGluZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIGNoaWxkRmFjdG9yeTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgY2hpbGRGYWN0b3J5OiBmdW5jdGlvbiBjaGlsZEZhY3RvcnkoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbn07XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhbnNpdGlvbkdyb3VwKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgX3RoaXMucGVyZm9ybUFwcGVhciA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbEFwcGVhcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbEFwcGVhcihfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZy5iaW5kKF90aGlzLCBrZXksIGNvbXBvbmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVBcHBlYXJpbmcoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZyA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRBcHBlYXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZEFwcGVhcigpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblxuICAgICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKF90aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKCFjdXJyZW50Q2hpbGRNYXBwaW5nIHx8ICFjdXJyZW50Q2hpbGRNYXBwaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgLy8gVGhpcyB3YXMgcmVtb3ZlZCBiZWZvcmUgaXQgaGFkIGZ1bGx5IGFwcGVhcmVkLiBSZW1vdmUgaXQuXG4gICAgICAgIF90aGlzLnBlcmZvcm1MZWF2ZShrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIChrZXksIGNvbXBvbmVudCkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbEVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIoX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZy5iaW5kKF90aGlzLCBrZXksIGNvbXBvbmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZyhrZXksIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLl9oYW5kbGVEb25lRW50ZXJpbmcgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZEVudGVyKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoIWN1cnJlbnRDaGlsZE1hcHBpbmcgfHwgIWN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIHdhcyByZW1vdmVkIGJlZm9yZSBpdCBoYWQgZnVsbHkgZW50ZXJlZC4gUmVtb3ZlIGl0LlxuICAgICAgICBfdGhpcy5wZXJmb3JtTGVhdmUoa2V5LCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5wZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoa2V5LCBjb21wb25lbnQpIHtcbiAgICAgIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudFdpbGxMZWF2ZSkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbExlYXZlKF90aGlzLl9oYW5kbGVEb25lTGVhdmluZy5iaW5kKF90aGlzLCBrZXksIGNvbXBvbmVudCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgc29tZXdoYXQgZGFuZ2Vyb3VzIGIvYyBpdCBjYWxscyBzZXRTdGF0ZSgpXG4gICAgICAgIC8vIGFnYWluLCBlZmZlY3RpdmVseSBtdXRhdGluZyB0aGUgY29tcG9uZW50IGJlZm9yZSBhbGwgdGhlIHdvcmtcbiAgICAgICAgLy8gaXMgZG9uZS5cbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nKGtleSwgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nID0gZnVuY3Rpb24gKGtleSwgY29tcG9uZW50KSB7XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZExlYXZlKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnREaWRMZWF2ZSgpO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XTtcblxuICAgICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKF90aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKGN1cnJlbnRDaGlsZE1hcHBpbmcgJiYgY3VycmVudENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIC8vIFRoaXMgZW50ZXJlZCBhZ2FpbiBiZWZvcmUgaXQgZnVsbHkgbGVmdC4gQWRkIGl0IGFnYWluLlxuICAgICAgICBfdGhpcy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuICAgICAgICAgIGRlbGV0ZSBuZXdDaGlsZHJlbltrZXldO1xuICAgICAgICAgIHJldHVybiB7IGNoaWxkcmVuOiBuZXdDaGlsZHJlbiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuY2hpbGRSZWZzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2hpbGRyZW46ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykocHJvcHMuY2hpbGRyZW4pXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzID0ge307XG4gICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgIHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGluaXRpYWxDaGlsZE1hcHBpbmcgPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgIGZvciAodmFyIGtleSBpbiBpbml0aWFsQ2hpbGRNYXBwaW5nKSB7XG4gICAgICBpZiAoaW5pdGlhbENoaWxkTWFwcGluZ1trZXldKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUFwcGVhcihrZXksIHRoaXMuY2hpbGRSZWZzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBuZXh0Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKShuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hpbGRyZW46ICgwLCBfQ2hpbGRNYXBwaW5nLm1lcmdlQ2hpbGRNYXBwaW5ncykocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZylcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nKSB7XG4gICAgICB2YXIgaGFzUHJldiA9IHByZXZDaGlsZE1hcHBpbmcgJiYgcHJldkNoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgICAgaWYgKG5leHRDaGlsZE1hcHBpbmdba2V5XSAmJiAhaGFzUHJldiAmJiAhdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldKSB7XG4gICAgICAgIHRoaXMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rZXkgaW4gcHJldkNoaWxkTWFwcGluZykge1xuICAgICAgdmFyIGhhc05leHQgPSBuZXh0Q2hpbGRNYXBwaW5nICYmIG5leHRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoX2tleSk7XG4gICAgICBpZiAocHJldkNoaWxkTWFwcGluZ1tfa2V5XSAmJiAhaGFzTmV4dCAmJiAhdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1tfa2V5XSkge1xuICAgICAgICB0aGlzLmtleXNUb0xlYXZlLnB1c2goX2tleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgd2Ugd2FudCB0byBzb21lZGF5IGNoZWNrIGZvciByZW9yZGVyaW5nLCB3ZSBjb3VsZCBkbyBpdCBoZXJlLlxuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGtleXNUb0VudGVyID0gdGhpcy5rZXlzVG9FbnRlcjtcbiAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAga2V5c1RvRW50ZXIuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMyLnBlcmZvcm1FbnRlcihrZXksIF90aGlzMi5jaGlsZFJlZnNba2V5XSk7XG4gICAgfSk7XG5cbiAgICB2YXIga2V5c1RvTGVhdmUgPSB0aGlzLmtleXNUb0xlYXZlO1xuICAgIHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcbiAgICBrZXlzVG9MZWF2ZS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczIucGVyZm9ybUxlYXZlKGtleSwgX3RoaXMyLmNoaWxkUmVmc1trZXldKTtcbiAgICB9KTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIC8vIFRPRE86IHdlIGNvdWxkIGdldCByaWQgb2YgdGhlIG5lZWQgZm9yIHRoZSB3cmFwcGVyIG5vZGVcbiAgICAvLyBieSBjbG9uaW5nIGEgc2luZ2xlIGNoaWxkXG4gICAgdmFyIGNoaWxkcmVuVG9SZW5kZXIgPSBbXTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGtleSkge1xuICAgICAgdmFyIGNoaWxkID0gX3RoaXMzLnN0YXRlLmNoaWxkcmVuW2tleV07XG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGlzQ2FsbGJhY2tSZWYgPSB0eXBlb2YgY2hpbGQucmVmICE9PSAnc3RyaW5nJztcbiAgICAgICAgdmFyIGZhY3RvcnlDaGlsZCA9IF90aGlzMy5wcm9wcy5jaGlsZEZhY3RvcnkoY2hpbGQpO1xuICAgICAgICB2YXIgcmVmID0gZnVuY3Rpb24gcmVmKHIpIHtcbiAgICAgICAgICBfdGhpczMuY2hpbGRSZWZzW2tleV0gPSByO1xuICAgICAgICB9O1xuXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGlzQ2FsbGJhY2tSZWYsICdzdHJpbmcgcmVmcyBhcmUgbm90IHN1cHBvcnRlZCBvbiBjaGlsZHJlbiBvZiBUcmFuc2l0aW9uR3JvdXAgYW5kIHdpbGwgYmUgaWdub3JlZC4gJyArICdQbGVhc2UgdXNlIGEgY2FsbGJhY2sgcmVmIGluc3RlYWQ6IGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvcmVmcy1hbmQtdGhlLWRvbS5odG1sI3RoZS1yZWYtY2FsbGJhY2stYXR0cmlidXRlJykgOiB2b2lkIDA7XG5cbiAgICAgICAgLy8gQWx3YXlzIGNoYWluaW5nIHRoZSByZWZzIGxlYWRzIHRvIHByb2JsZW1zIHdoZW4gdGhlIGNoaWxkRmFjdG9yeVxuICAgICAgICAvLyB3cmFwcyB0aGUgY2hpbGQuIFRoZSBjaGlsZCByZWYgY2FsbGJhY2sgZ2V0cyBjYWxsZWQgdHdpY2Ugd2l0aCB0aGVcbiAgICAgICAgLy8gd3JhcHBlciBhbmQgdGhlIGNoaWxkLiBTbyB3ZSBvbmx5IG5lZWQgdG8gY2hhaW4gdGhlIHJlZiBpZiB0aGVcbiAgICAgICAgLy8gZmFjdG9yeUNoaWxkIGlzIG5vdCBkaWZmZXJlbnQgZnJvbSBjaGlsZC5cbiAgICAgICAgaWYgKGZhY3RvcnlDaGlsZCA9PT0gY2hpbGQgJiYgaXNDYWxsYmFja1JlZikge1xuICAgICAgICAgIHJlZiA9ICgwLCBfY2hhaW5GdW5jdGlvbjIuZGVmYXVsdCkoY2hpbGQucmVmLCByZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gWW91IG1heSBuZWVkIHRvIGFwcGx5IHJlYWN0aXZlIHVwZGF0ZXMgdG8gYSBjaGlsZCBhcyBpdCBpcyBsZWF2aW5nLlxuICAgICAgICAvLyBUaGUgbm9ybWFsIFJlYWN0IHdheSB0byBkbyBpdCB3b24ndCB3b3JrIHNpbmNlIHRoZSBjaGlsZCB3aWxsIGhhdmVcbiAgICAgICAgLy8gYWxyZWFkeSBiZWVuIHJlbW92ZWQuIEluIGNhc2UgeW91IG5lZWQgdGhpcyBiZWhhdmlvciB5b3UgY2FuIHByb3ZpZGVcbiAgICAgICAgLy8gYSBjaGlsZEZhY3RvcnkgZnVuY3Rpb24gdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZVxuICAgICAgICAvLyBsZWF2aW5nLlxuICAgICAgICBjaGlsZHJlblRvUmVuZGVyLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChmYWN0b3J5Q2hpbGQsIHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICByZWY6IHJlZlxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnN0YXRlLmNoaWxkcmVuKSB7XG4gICAgICBfbG9vcChrZXkpO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCBmb3J3YXJkIFRyYW5zaXRpb25Hcm91cCBwcm9wcyB0byBwcmltaXRpdmUgRE9NIG5vZGVzXG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTGVhdmU7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmNoaWxkRmFjdG9yeTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkxlYXZlVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkVudGVyVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLmNvbXBvbmVudDtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmNvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuVG9SZW5kZXIpO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAuZGlzcGxheU5hbWUgPSAnVHJhbnNpdGlvbkdyb3VwJztcblxuXG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gcHJvcFR5cGVzIDoge307XG5UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFuc2l0aW9uR3JvdXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDQyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0U3RhdGljID0gcmVxdWlyZSgnLi9zZXRTdGF0aWMnKTtcblxudmFyIF9zZXRTdGF0aWMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0U3RhdGljKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gc2V0RGlzcGxheU5hbWUoZGlzcGxheU5hbWUpIHtcbiAgcmV0dXJuICgwLCBfc2V0U3RhdGljMi5kZWZhdWx0KSgnZGlzcGxheU5hbWUnLCBkaXNwbGF5TmFtZSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzZXREaXNwbGF5TmFtZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVjb21wb3NlL3NldERpc3BsYXlOYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA0MjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dldERpc3BsYXlOYW1lID0gcmVxdWlyZSgnLi9nZXREaXNwbGF5TmFtZScpO1xuXG52YXIgX2dldERpc3BsYXlOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldERpc3BsYXlOYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHdyYXBEaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIHdyYXBEaXNwbGF5TmFtZShCYXNlQ29tcG9uZW50LCBob2NOYW1lKSB7XG4gIHJldHVybiBob2NOYW1lICsgJygnICsgKDAsIF9nZXREaXNwbGF5TmFtZTIuZGVmYXVsdCkoQmFzZUNvbXBvbmVudCkgKyAnKSc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB3cmFwRGlzcGxheU5hbWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlY29tcG9zZS93cmFwRGlzcGxheU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDQyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA0Mjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA0MzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA0MzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjaGFpbigpe1xyXG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgdmFyIGFyZ3MgPSBbXTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cclxuXHJcbiAgYXJncyA9IGFyZ3MuZmlsdGVyKGZ1bmN0aW9uKGZuKXsgcmV0dXJuIGZuICE9IG51bGwgfSlcclxuXHJcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkXHJcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSByZXR1cm4gYXJnc1swXVxyXG5cclxuICByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24oY3VycmVudCwgbmV4dCl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xyXG4gICAgICBjdXJyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIG5leHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbiAgfSlcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hhaW4tZnVuY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDQzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCkge1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA0Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQ0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQ0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDQ0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA0NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA0NTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA0NTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgZWwpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKE8pO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgaWYgKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKSByZXR1cm4ga2V5O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanNcbi8vIG1vZHVsZSBpZCA9IDQ1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDQ1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDQ2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gNDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICAgIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihPKTtcbiAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmIChtYXBwaW5nKSBtYXBmbiA9IGN0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSkge1xuICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDQ2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQ2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0Njlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gNDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGtleU9mID0gcmVxdWlyZSgnLi9fa2V5b2YnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSkge1xuICAgIGlmIChpc1N5bWJvbChrZXkpKSByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIGlmIChpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICh0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYgKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICgkcmVwbGFjZXIpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA0NzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9hcnJvd0Ryb3BEb3duID0gcmVxdWlyZSgnLi4vc3ZnLWljb25zL25hdmlnYXRpb24vYXJyb3ctZHJvcC1kb3duJyk7XG5cbnZhciBfYXJyb3dEcm9wRG93bjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJvd0Ryb3BEb3duKTtcblxudmFyIF9NZW51ID0gcmVxdWlyZSgnLi4vTWVudS9NZW51Jyk7XG5cbnZhciBfTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51KTtcblxudmFyIF9DbGVhckZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0NsZWFyRml4Jyk7XG5cbnZhciBfQ2xlYXJGaXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2xlYXJGaXgpO1xuXG52YXIgX1BvcG92ZXIgPSByZXF1aXJlKCcuLi9Qb3BvdmVyL1BvcG92ZXInKTtcblxudmFyIF9Qb3BvdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXIpO1xuXG52YXIgX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCA9IHJlcXVpcmUoJy4uL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsJyk7XG5cbnZhciBfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCk7XG5cbnZhciBfa2V5Y29kZSA9IHJlcXVpcmUoJ2tleWNvZGUnKTtcblxudmFyIF9rZXljb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWNvZGUpO1xuXG52YXIgX2V2ZW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2V2ZW50cycpO1xuXG52YXIgX2V2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudHMpO1xuXG52YXIgX0ljb25CdXR0b24gPSByZXF1aXJlKCcuLi9JY29uQnV0dG9uJyk7XG5cbnZhciBfSWNvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JY29uQnV0dG9uKTtcblxudmFyIF9wcm9wVHlwZXMzID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJvcFR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlczMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQ7XG5cbiAgdmFyIHNwYWNpbmcgPSBjb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZS5zcGFjaW5nO1xuICB2YXIgcGFsZXR0ZSA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLnBhbGV0dGU7XG4gIHZhciBhY2NlbnRDb2xvciA9IGNvbnRleHQubXVpVGhlbWUuZHJvcERvd25NZW51LmFjY2VudENvbG9yO1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2w6IHtcbiAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIGZpbGw6IGFjY2VudENvbG9yLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIHRvcDogKHNwYWNpbmcuaWNvblNpemUgLSAyNCkgLyAyICsgc3BhY2luZy5kZXNrdG9wR3V0dGVyTWluaSAvIDJcbiAgICB9LFxuICAgIGljb25DaGlsZHJlbjoge1xuICAgICAgZmlsbDogJ2luaGVyaXQnXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgY29sb3I6IGRpc2FibGVkID8gcGFsZXR0ZS5kaXNhYmxlZENvbG9yIDogcGFsZXR0ZS50ZXh0Q29sb3IsXG4gICAgICBoZWlnaHQ6IHNwYWNpbmcuZGVza3RvcFRvb2xiYXJIZWlnaHQgKyAncHgnLFxuICAgICAgbGluZUhlaWdodDogc3BhY2luZy5kZXNrdG9wVG9vbGJhckhlaWdodCArICdweCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwYWRkaW5nTGVmdDogc3BhY2luZy5kZXNrdG9wR3V0dGVyLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmljb25TaXplICogMiArIHNwYWNpbmcuZGVza3RvcEd1dHRlck1pbmksXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICB0b3A6IDAsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgIH0sXG4gICAgbGFiZWxXaGVuT3Blbjoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRvcDogc3BhY2luZy5kZXNrdG9wVG9vbGJhckhlaWdodCAvIDhcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZm9udFNpemU6IHNwYWNpbmcuZGVza3RvcERyb3BEb3duTWVudUZvbnRTaXplLFxuICAgICAgaGVpZ2h0OiBzcGFjaW5nLmRlc2t0b3BTdWJoZWFkZXJIZWlnaHQsXG4gICAgICBmb250RmFtaWx5OiBjb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZS5mb250RmFtaWx5LFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfSxcbiAgICByb290V2hlbk9wZW46IHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LFxuICAgIHVuZGVybGluZToge1xuICAgICAgYm9yZGVyVG9wOiAnc29saWQgMXB4ICcgKyBhY2NlbnRDb2xvcixcbiAgICAgIGJvdHRvbTogMSxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBtYXJnaW46ICctMXB4ICcgKyBzcGFjaW5nLmRlc2t0b3BHdXR0ZXIgKyAncHgnLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH1cbiAgfTtcbn1cblxudmFyIERyb3BEb3duTWVudSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKERyb3BEb3duTWVudSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcERvd25NZW51KCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIERyb3BEb3duTWVudSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBEcm9wRG93bk1lbnUuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKERyb3BEb3duTWVudSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9LCBfdGhpcy5yb290Tm9kZSA9IHVuZGVmaW5lZCwgX3RoaXMuYXJyb3dOb2RlID0gdW5kZWZpbmVkLCBfdGhpcy5oYW5kbGVUb3VjaFRhcENvbnRyb2wgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcGVuOiAhX3RoaXMuc3RhdGUub3BlbixcbiAgICAgICAgICBhbmNob3JFbDogX3RoaXMucm9vdE5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNsb3NlKGZhbHNlKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVFc2NLZXlEb3duTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNsb3NlKHRydWUpO1xuICAgIH0sIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCkpIHtcbiAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgY2FzZSAnc3BhY2UnOlxuICAgICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgYW5jaG9yRWw6IF90aGlzLnJvb3ROb2RlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSXRlbVRvdWNoVGFwID0gZnVuY3Rpb24gKGV2ZW50LCBjaGlsZCwgaW5kZXgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5tdWx0aXBsZSkge1xuICAgICAgICBpZiAoIV90aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbmRleCwgY2hpbGQucHJvcHMudmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLmNsb3NlKF9ldmVudHMyLmRlZmF1bHQuaXNLZXlib2FyZChldmVudCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIHZhbHVlKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMubXVsdGlwbGUgJiYgX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHVuZGVmaW5lZCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmNsb3NlID0gZnVuY3Rpb24gKGlzS2V5Ym9hcmQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNLZXlib2FyZCkge1xuICAgICAgICAgIHZhciBkcm9wQXJyb3cgPSBfdGhpcy5hcnJvd05vZGU7XG4gICAgICAgICAgdmFyIGRyb3BOb2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKGRyb3BBcnJvdyk7XG4gICAgICAgICAgZHJvcE5vZGUuZm9jdXMoKTtcbiAgICAgICAgICBkcm9wQXJyb3cuc2V0S2V5Ym9hcmRGb2N1cyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIC8vIFRoZSBuZXN0ZWQgc3R5bGVzIGZvciBkcm9wLWRvd24tbWVudSBhcmUgbW9kaWZpZWQgYnkgdG9vbGJhciBhbmQgcG9zc2libHlcbiAgLy8gb3RoZXIgdXNlciBjb21wb25lbnRzLCBzbyBpdCB3aWxsIGdpdmUgZnVsbCBhY2Nlc3MgdG8gaXRzIGpzIHN0eWxlcyByYXRoZXJcbiAgLy8gdGhhbiBqdXN0IHRoZSBwYXJlbnQuXG5cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShEcm9wRG93bk1lbnUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvV2lkdGgpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub3BlbkltbWVkaWF0ZWx5KSB7XG4gICAgICAgIC8vIFRPRE86IFRlbXBvcmFyeSBmaXggdG8gbWFrZSBvcGVuSW1tZWRpYXRlbHkgd29yayB3aXRoIHBvcG92ZXIuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGUgKi9cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgYW5jaG9yRWw6IF90aGlzMi5yb290Tm9kZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlICovXG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvV2lkdGgpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldElucHV0Tm9kZScsXG5cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGRlcHJlY2F0ZWQgYnV0IHN0aWxsIGhlcmUgYmVjYXVzZSB0aGUgVGV4dEZpZWxkXG4gICAgICogbmVlZCBpdCBpbiBvcmRlciB0byB3b3JrLiBUT0RPOiBUaGF0IHdpbGwgYmUgYWRkcmVzc2VkIGxhdGVyLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dE5vZGUoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHJvb3ROb2RlID0gdGhpcy5yb290Tm9kZTtcblxuICAgICAgcm9vdE5vZGUuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgX3RoaXMzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46ICFfdGhpczMuc3RhdGUub3BlbixcbiAgICAgICAgICAgIGFuY2hvckVsOiBfdGhpczMucm9vdE5vZGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHJvb3ROb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFdpZHRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0V2lkdGgoKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzLnJvb3ROb2RlO1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnN0eWxlIHx8ICF0aGlzLnByb3BzLnN0eWxlLmhhc093blByb3BlcnR5KCd3aWR0aCcpKSB7XG4gICAgICAgIGVsLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhbmltYXRlZCA9IF9wcm9wcy5hbmltYXRlZCxcbiAgICAgICAgICBhbmltYXRpb24gPSBfcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgICAgIGF1dG9XaWR0aCA9IF9wcm9wcy5hdXRvV2lkdGgsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfcHJvcHMubXVsdGlwbGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBpY29uU3R5bGUgPSBfcHJvcHMuaWNvblN0eWxlLFxuICAgICAgICAgIGxhYmVsU3R5bGUgPSBfcHJvcHMubGFiZWxTdHlsZSxcbiAgICAgICAgICBsaXN0U3R5bGUgPSBfcHJvcHMubGlzdFN0eWxlLFxuICAgICAgICAgIG1heEhlaWdodCA9IF9wcm9wcy5tYXhIZWlnaHQsXG4gICAgICAgICAgbWVudVN0eWxlUHJvcCA9IF9wcm9wcy5tZW51U3R5bGUsXG4gICAgICAgICAgc2VsZWN0aW9uUmVuZGVyZXIgPSBfcHJvcHMuc2VsZWN0aW9uUmVuZGVyZXIsXG4gICAgICAgICAgb25DbG9zZSA9IF9wcm9wcy5vbkNsb3NlLFxuICAgICAgICAgIG9wZW5JbW1lZGlhdGVseSA9IF9wcm9wcy5vcGVuSW1tZWRpYXRlbHksXG4gICAgICAgICAgbWVudUl0ZW1TdHlsZSA9IF9wcm9wcy5tZW51SXRlbVN0eWxlLFxuICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW1TdHlsZSA9IF9wcm9wcy5zZWxlY3RlZE1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lU3R5bGUgPSBfcHJvcHMudW5kZXJsaW5lU3R5bGUsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgaWNvbkJ1dHRvbiA9IF9wcm9wcy5pY29uQnV0dG9uLFxuICAgICAgICAgIGFuY2hvck9yaWdpbiA9IF9wcm9wcy5hbmNob3JPcmlnaW4sXG4gICAgICAgICAgdGFyZ2V0T3JpZ2luID0gX3Byb3BzLnRhcmdldE9yaWdpbixcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydhbmltYXRlZCcsICdhbmltYXRpb24nLCAnYXV0b1dpZHRoJywgJ211bHRpcGxlJywgJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICdkaXNhYmxlZCcsICdpY29uU3R5bGUnLCAnbGFiZWxTdHlsZScsICdsaXN0U3R5bGUnLCAnbWF4SGVpZ2h0JywgJ21lbnVTdHlsZScsICdzZWxlY3Rpb25SZW5kZXJlcicsICdvbkNsb3NlJywgJ29wZW5JbW1lZGlhdGVseScsICdtZW51SXRlbVN0eWxlJywgJ3NlbGVjdGVkTWVudUl0ZW1TdHlsZScsICdzdHlsZScsICd1bmRlcmxpbmVTdHlsZScsICd2YWx1ZScsICdpY29uQnV0dG9uJywgJ2FuY2hvck9yaWdpbicsICd0YXJnZXRPcmlnaW4nXSk7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBhbmNob3JFbCA9IF9zdGF0ZS5hbmNob3JFbCxcbiAgICAgICAgICBvcGVuID0gX3N0YXRlLm9wZW47XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSAnJztcbiAgICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIGlmIChjaGlsZCAmJiB2YWx1ZSA9PT0gY2hpbGQucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25SZW5kZXJlcikge1xuICAgICAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBzZWxlY3Rpb25SZW5kZXJlcih2YWx1ZSwgY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIG5lZWQgdG8gYmUgaW1wcm92ZWQgKGluIGNhc2UgcHJpbWFyeVRleHQgaXMgYSBub2RlKVxuICAgICAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBjaGlsZC5wcm9wcy5sYWJlbCB8fCBjaGlsZC5wcm9wcy5wcmltYXJ5VGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgc2VsZWN0aW9uUmVuZGVyZXJDaGlsZHJlbiA9IFtdO1xuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkICYmIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoY2hpbGQucHJvcHMudmFsdWUpID4gLTEpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25SZW5kZXJlcikge1xuICAgICAgICAgICAgICB2YWx1ZXMucHVzaChjaGlsZC5wcm9wcy52YWx1ZSk7XG4gICAgICAgICAgICAgIHNlbGVjdGlvblJlbmRlcmVyQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWx1ZXMucHVzaChjaGlsZC5wcm9wcy5sYWJlbCB8fCBjaGlsZC5wcm9wcy5wcmltYXJ5VGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkaXNwbGF5VmFsdWUgPSBbXTtcbiAgICAgICAgaWYgKHNlbGVjdGlvblJlbmRlcmVyKSB7XG4gICAgICAgICAgZGlzcGxheVZhbHVlID0gc2VsZWN0aW9uUmVuZGVyZXIodmFsdWVzLCBzZWxlY3Rpb25SZW5kZXJlckNoaWxkcmVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZXMuam9pbignLCAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbWVudVN0eWxlID0gdm9pZCAwO1xuICAgICAgaWYgKGFuY2hvckVsICYmICFhdXRvV2lkdGgpIHtcbiAgICAgICAgbWVudVN0eWxlID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICAgICAgICB3aWR0aDogYW5jaG9yRWwuY2xpZW50V2lkdGhcbiAgICAgICAgfSwgbWVudVN0eWxlUHJvcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW51U3R5bGUgPSBtZW51U3R5bGVQcm9wO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzNC5yb290Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yb290LCBvcGVuICYmIHN0eWxlcy5yb290V2hlbk9wZW4sIHN0eWxlKSlcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9DbGVhckZpeDIuZGVmYXVsdCxcbiAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuY29udHJvbCwgb25DbGljazogdGhpcy5oYW5kbGVUb3VjaFRhcENvbnRyb2wgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5sYWJlbCwgb3BlbiAmJiBzdHlsZXMubGFiZWxXaGVuT3BlbiwgbGFiZWxTdHlsZSkpIH0sXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWVcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX0ljb25CdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpczQuYXJyb3dOb2RlID0gbm9kZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmljb24sIGljb25TdHlsZSksXG4gICAgICAgICAgICAgIGljb25TdHlsZTogc3R5bGVzLmljb25DaGlsZHJlblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb25CdXR0b25cbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnVuZGVybGluZSwgdW5kZXJsaW5lU3R5bGUpKSB9KVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfUG9wb3ZlcjIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhbmNob3JPcmlnaW46IGFuY2hvck9yaWdpbixcbiAgICAgICAgICAgIHRhcmdldE9yaWdpbjogdGFyZ2V0T3JpZ2luLFxuICAgICAgICAgICAgYW5jaG9yRWw6IGFuY2hvckVsLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24gfHwgX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbDIuZGVmYXVsdCxcbiAgICAgICAgICAgIG9wZW46IG9wZW4sXG4gICAgICAgICAgICBhbmltYXRlZDogYW5pbWF0ZWQsXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZTogdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2VNZW51XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9NZW51Mi5kZWZhdWx0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGUsXG4gICAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgICAgICAgICAgICBkZXNrdG9wOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgIG9uRXNjS2V5RG93bjogdGhpcy5oYW5kbGVFc2NLZXlEb3duTWVudSxcbiAgICAgICAgICAgICAgc3R5bGU6IG1lbnVTdHlsZSxcbiAgICAgICAgICAgICAgbGlzdFN0eWxlOiBsaXN0U3R5bGUsXG4gICAgICAgICAgICAgIG9uSXRlbVRvdWNoVGFwOiB0aGlzLmhhbmRsZUl0ZW1Ub3VjaFRhcCxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICBtZW51SXRlbVN0eWxlOiBtZW51SXRlbVN0eWxlLFxuICAgICAgICAgICAgICBzZWxlY3RlZE1lbnVJdGVtU3R5bGU6IHNlbGVjdGVkTWVudUl0ZW1TdHlsZSxcbiAgICAgICAgICAgICAgYXV0b1dpZHRoOiBhdXRvV2lkdGgsXG4gICAgICAgICAgICAgIHdpZHRoOiAhYXV0b1dpZHRoICYmIG1lbnVTdHlsZSA/IG1lbnVTdHlsZS53aWR0aCA6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIERyb3BEb3duTWVudTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkRyb3BEb3duTWVudS5tdWlOYW1lID0gJ0Ryb3BEb3duTWVudSc7XG5Ecm9wRG93bk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICBhbmltYXRlZDogdHJ1ZSxcbiAgYXV0b1dpZHRoOiB0cnVlLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGljb25CdXR0b246IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9hcnJvd0Ryb3BEb3duMi5kZWZhdWx0LCBudWxsKSxcbiAgb3BlbkltbWVkaWF0ZWx5OiBmYWxzZSxcbiAgbWF4SGVpZ2h0OiA1MDAsXG4gIG11bHRpcGxlOiBmYWxzZSxcbiAgYW5jaG9yT3JpZ2luOiB7XG4gICAgdmVydGljYWw6ICd0b3AnLFxuICAgIGhvcml6b250YWw6ICdsZWZ0J1xuICB9XG59O1xuRHJvcERvd25NZW51LmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Ecm9wRG93bk1lbnUucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9pbnQgb24gdGhlIGFuY2hvciB0aGF0IHRoZSBwb3BvdmVyJ3NcbiAgICogYHRhcmdldE9yaWdpbmAgd2lsbCBhdHRhY2ggdG8uXG4gICAqIE9wdGlvbnM6XG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbV1cbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIG1pZGRsZSwgcmlnaHRdLlxuICAgKi9cbiAgYW5jaG9yT3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbixcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBwb3BvdmVyIHdpbGwgYXBwbHkgdHJhbnNpdGlvbnMgd2hlblxuICAgKiBpdCBnZXRzIGFkZGVkIHRvIHRoZSBET00uXG4gICAqL1xuICBhbmltYXRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYW5pbWF0aW9uIGNvbXBvbmVudCB1c2VkLlxuICAgKi9cbiAgYW5pbWF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHNldCBhY2NvcmRpbmcgdG8gdGhlIGl0ZW1zIGluc2lkZSB0aGUgbWVudS5cbiAgICogVG8gY29udHJvbCB0aGlzIHdpZHRoIGluIGNzcyBpbnN0ZWFkLCBzZXQgdGhpcyBwcm9wIHRvIGBmYWxzZWAuXG4gICAqL1xuICBhdXRvV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBgTWVudUl0ZW1gcyB0byBwb3B1bGF0ZSB0aGUgYE1lbnVgIHdpdGguIElmIHRoZSBgTWVudUl0ZW1zYCBoYXZlIHRoZVxuICAgKiBwcm9wIGBsYWJlbGAgdGhhdCB2YWx1ZSB3aWxsIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSByZXByZXNlbnRhdGlvbiBvZiB0aGF0XG4gICAqIGl0ZW0gd2l0aGluIHRoZSBmaWVsZC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgbWVudS5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgZGVmYXVsdCBgU3ZnSWNvbmAgZHJvcGRvd24gYXJyb3cgY29tcG9uZW50LlxuICAgKi9cbiAgaWNvbkJ1dHRvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBzdHlsZXMgb2YgaWNvbiBlbGVtZW50LlxuICAgKi9cbiAgaWNvblN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgc3R5bGVzIG9mIGxhYmVsIHdoZW4gdGhlIGBEcm9wRG93bk1lbnVgIGlzIGluYWN0aXZlLlxuICAgKi9cbiAgbGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSB1bmRlcmx5aW5nIGxpc3Qgc3R5bGUuXG4gICAqL1xuICBsaXN0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIG1heGltdW0gaGVpZ2h0IG9mIHRoZSBgTWVudWAgd2hlbiBpdCBpcyBkaXNwbGF5ZWQuXG4gICAqL1xuICBtYXhIZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgbWVudSBpdGVtcy5cbiAgICovXG4gIG1lbnVJdGVtU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBzdHlsZXMgb2YgYE1lbnVgIHdoZW4gdGhlIGBEcm9wRG93bk1lbnVgIGlzIGRpc3BsYXllZC5cbiAgICovXG4gIG1lbnVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBgdmFsdWVgIG11c3QgYmUgYW4gYXJyYXkgYW5kIHRoZSBtZW51IHdpbGwgc3VwcG9ydFxuICAgKiBtdWx0aXBsZSBzZWxlY3Rpb25zLlxuICAgKi9cbiAgbXVsdGlwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgY2xpY2tlZCwgb3RoZXIgdGhhbiB0aGUgb25lIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgbWVudSBpdGVtIHRoYXQgd2FzIGNsaWNrZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBrZXkgVGhlIGluZGV4IG9mIHRoZSBjbGlja2VkIG1lbnUgaXRlbSBpbiB0aGUgYGNoaWxkcmVuYCBjb2xsZWN0aW9uLlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgSWYgYG11bHRpcGxlYCBpcyB0cnVlLCB0aGUgbWVudSdzIGB2YWx1ZWBcbiAgICogYXJyYXkgd2l0aCBlaXRoZXIgdGhlIG1lbnUgaXRlbSdzIGB2YWx1ZWAgYWRkZWQgKGlmXG4gICAqIGl0IHdhc24ndCBhbHJlYWR5IHNlbGVjdGVkKSBvciBvbWl0dGVkIChpZiBpdCB3YXMgYWxyZWFkeSBzZWxlY3RlZCkuXG4gICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBtZW51IGlzIGNsb3NlZC5cbiAgICovXG4gIG9uQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGhhdmUgdGhlIGBEcm9wRG93bk1lbnVgIGF1dG9tYXRpY2FsbHkgb3BlbiBvbiBtb3VudC5cbiAgICovXG4gIG9wZW5JbW1lZGlhdGVseTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2Ygc2VsZWN0ZWQgbWVudSBpdGVtcy5cbiAgICovXG4gIHNlbGVjdGVkTWVudUl0ZW1TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIGNsaWNrZWQsIG90aGVyIHRoYW4gdGhlIG9uZSBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIHRoZSBtZW51J3MgYHZhbHVlYFxuICAgKiBhcnJheSB3aXRoIGVpdGhlciB0aGUgbWVudSBpdGVtJ3MgYHZhbHVlYCBhZGRlZCAoaWZcbiAgICogaXQgd2Fzbid0IGFscmVhZHkgc2VsZWN0ZWQpIG9yIG9taXR0ZWQgKGlmIGl0IHdhcyBhbHJlYWR5IHNlbGVjdGVkKS5cbiAgICogT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBvZiB0aGUgbWVudSBpdGVtLlxuICAgKiBAcGFyYW0ge2FueX0gbWVudUl0ZW0gVGhlIHNlbGVjdGVkIGBNZW51SXRlbWAuXG4gICAqIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgdGhpcyB3aWxsIGJlIGFuIGFycmF5IHdpdGggdGhlIGBNZW51SXRlbWBzIG1hdGNoaW5nIHRoZSBgdmFsdWVgcyBwYXJhbWV0ZXIuXG4gICAqL1xuICBzZWxlY3Rpb25SZW5kZXJlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHBvaW50IG9uIHRoZSBwb3BvdmVyIHdoaWNoIHdpbGwgYXR0YWNoIHRvXG4gICAqIHRoZSBhbmNob3IncyBvcmlnaW4uXG4gICAqIE9wdGlvbnM6XG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbV1cbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIG1pZGRsZSwgcmlnaHRdLlxuICAgKi9cbiAgdGFyZ2V0T3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbixcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lLlxuICAgKi9cbiAgdW5kZXJsaW5lU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgYG11bHRpcGxlYCBpcyB0cnVlLCBhbiBhcnJheSBvZiB0aGUgYHZhbHVlYHMgb2YgdGhlIHNlbGVjdGVkXG4gICAqIG1lbnUgaXRlbXMuIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgb2YgdGhlIHNlbGVjdGVkIG1lbnUgaXRlbS5cbiAgICogSWYgcHJvdmlkZWQsIHRoZSBtZW51IHdpbGwgYmUgYSBjb250cm9sbGVkIGNvbXBvbmVudC5cbiAgICovXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRHJvcERvd25NZW51O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9Ecm9wRG93bk1lbnUvRHJvcERvd25NZW51LmpzXG4vLyBtb2R1bGUgaWQgPSA0Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5NZW51SXRlbSA9IGV4cG9ydHMuRHJvcERvd25NZW51ID0gdW5kZWZpbmVkO1xuXG52YXIgX0Ryb3BEb3duTWVudTIgPSByZXF1aXJlKCcuL0Ryb3BEb3duTWVudScpO1xuXG52YXIgX0Ryb3BEb3duTWVudTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wRG93bk1lbnUyKTtcblxudmFyIF9NZW51SXRlbTIgPSByZXF1aXJlKCcuLi9NZW51SXRlbS9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuRHJvcERvd25NZW51ID0gX0Ryb3BEb3duTWVudTMuZGVmYXVsdDtcbmV4cG9ydHMuTWVudUl0ZW0gPSBfTWVudUl0ZW0zLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfRHJvcERvd25NZW51My5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9Ecm9wRG93bk1lbnUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGhvdmVyQ29sb3IgPSBwcm9wcy5ob3ZlckNvbG9yO1xuICB2YXIgYmFzZVRoZW1lID0gY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWU7XG5cbiAgdmFyIG9mZkNvbG9yID0gY29sb3IgfHwgYmFzZVRoZW1lLnBhbGV0dGUudGV4dENvbG9yO1xuICB2YXIgb25Db2xvciA9IGhvdmVyQ29sb3IgfHwgb2ZmQ29sb3I7XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBjb2xvcjogc3RhdGUuaG92ZXJlZCA/IG9uQ29sb3IgOiBvZmZDb2xvcixcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZm9udFNpemU6IGJhc2VUaGVtZS5zcGFjaW5nLmljb25TaXplLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfVxuICB9O1xufVxuXG52YXIgRm9udEljb24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShGb250SWNvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRm9udEljb24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRm9udEljb24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gRm9udEljb24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEZvbnRJY29uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcmVkOiBmYWxzZVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIGhvdmVyIGlzIG5lZWRlZCBvbmx5IHdoZW4gYSBob3ZlckNvbG9yIGlzIGRlZmluZWRcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5ob3ZlckNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBob3ZlciBpcyBuZWVkZWQgb25seSB3aGVuIGEgaG92ZXJDb2xvciBpcyBkZWZpbmVkXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaG92ZXJDb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRm9udEljb24sIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaG92ZXJDb2xvciA9IF9wcm9wcy5ob3ZlckNvbG9yLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IF9wcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyID0gX3Byb3BzLm9uTW91c2VFbnRlcixcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydob3ZlckNvbG9yJywgJ29uTW91c2VMZWF2ZScsICdvbk1vdXNlRW50ZXInLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3BhbicsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSkpXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGb250SWNvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkZvbnRJY29uLm11aU5hbWUgPSAnRm9udEljb24nO1xuRm9udEljb24uZGVmYXVsdFByb3BzID0ge1xuICBvbk1vdXNlRW50ZXI6IGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHt9LFxuICBvbk1vdXNlTGVhdmU6IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHt9XG59O1xuRm9udEljb24uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkZvbnRJY29uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGZvbnQgY29sb3Igb2YgdGhlIGZvbnQgaWNvbi4gSWYgbm90IHNwZWNpZmllZCxcbiAgICogdGhpcyBjb21wb25lbnQgd2lsbCBkZWZhdWx0IHRvIG11aVRoZW1lLnBhbGV0dGUudGV4dENvbG9yLlxuICAgKi9cbiAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgaWNvbiBjb2xvciB3aGVuIHRoZSBtb3VzZSBob3ZlcnMgb3ZlciB0aGUgaWNvbi5cbiAgICovXG4gIGhvdmVyQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBGb250SWNvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvRm9udEljb24vRm9udEljb24uanNcbi8vIG1vZHVsZSBpZCA9IDQ4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfRm9udEljb24gPSByZXF1aXJlKCcuL0ZvbnRJY29uJyk7XG5cbnZhciBfRm9udEljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9udEljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfRm9udEljb24yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL0ZvbnRJY29uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0ODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfcHJvcFR5cGVzMyA9IHJlcXVpcmUoJy4uL3V0aWxzL3Byb3BUeXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMzKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0VuaGFuY2VkQnV0dG9uJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRCdXR0b24pO1xuXG52YXIgX0ZvbnRJY29uID0gcmVxdWlyZSgnLi4vRm9udEljb24nKTtcblxudmFyIF9Gb250SWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb250SWNvbik7XG5cbnZhciBfVG9vbHRpcCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL1Rvb2x0aXAnKTtcblxudmFyIF9Ub29sdGlwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rvb2x0aXApO1xuXG52YXIgX2NoaWxkVXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy9jaGlsZFV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgYmFzZVRoZW1lID0gY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWU7XG5cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBwYWRkaW5nOiBiYXNlVGhlbWUuc3BhY2luZy5pY29uU2l6ZSAvIDIsXG4gICAgICB3aWR0aDogYmFzZVRoZW1lLnNwYWNpbmcuaWNvblNpemUgKiAyLFxuICAgICAgaGVpZ2h0OiBiYXNlVGhlbWUuc3BhY2luZy5pY29uU2l6ZSAqIDIsXG4gICAgICBmb250U2l6ZTogMFxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCdcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICBjb2xvcjogYmFzZVRoZW1lLnBhbGV0dGUuZGlzYWJsZWRDb2xvcixcbiAgICAgIGZpbGw6IGJhc2VUaGVtZS5wYWxldHRlLmRpc2FibGVkQ29sb3IsXG4gICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgIH1cbiAgfTtcbn1cblxudmFyIEljb25CdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShJY29uQnV0dG9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJY29uQnV0dG9uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEljb25CdXR0b24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gSWNvbkJ1dHRvbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoSWNvbkJ1dHRvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgICBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2UsXG4gICAgICAvLyBOb3QgdG8gYmUgY29uZm9uZGVkIHdpdGggdGhlIHRvdWNoIHByb3BlcnR5LlxuICAgICAgLy8gVGhpcyBzdGF0ZSBpcyB0byBkZXRlcm1pbmVkIGlmIGl0J3MgYSBtb2JpbGUgZGV2aWNlLlxuICAgICAgdG91Y2g6IGZhbHNlLFxuICAgICAgdG9vbHRpcFNob3duOiBmYWxzZVxuICAgIH0sIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNob3dUb29sdGlwKCk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLmJ1dHRvbi5pc0tleWJvYXJkRm9jdXNlZCgpKSB7XG4gICAgICAgIF90aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlT3V0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZGlzYWJsZWQpIF90aGlzLmhpZGVUb29sdGlwKCk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZU91dCkgX3RoaXMucHJvcHMub25Nb3VzZU91dChldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2hvd1Rvb2x0aXAoKTtcblxuICAgICAgLy8gQ2FuY2VsIGhvdmVyIHN0eWxlcyBmb3IgdG91Y2ggZGV2aWNlc1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS50b3VjaCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0b3VjaDogdHJ1ZSB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hTdGFydCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgIG9uRm9jdXMgPSBfdGhpcyRwcm9wcy5vbkZvY3VzLFxuICAgICAgICAgIG9uQmx1ciA9IF90aGlzJHByb3BzLm9uQmx1cixcbiAgICAgICAgICBvbktleWJvYXJkRm9jdXMgPSBfdGhpcyRwcm9wcy5vbktleWJvYXJkRm9jdXM7XG5cbiAgICAgIGlmIChpc0tleWJvYXJkRm9jdXNlZCAmJiAhZGlzYWJsZWQpIHtcbiAgICAgICAgX3RoaXMuc2hvd1Rvb2x0aXAoKTtcbiAgICAgICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgICAgICBvbkZvY3VzKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuaGlkZVRvb2x0aXAoKTtcbiAgICAgICAgaWYgKG9uQmx1cikge1xuICAgICAgICAgIG9uQmx1cihldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc0tleWJvYXJkRm9jdXNlZDogaXNLZXlib2FyZEZvY3VzZWQgfSk7XG4gICAgICBpZiAob25LZXlib2FyZEZvY3VzKSB7XG4gICAgICAgIG9uS2V5Ym9hcmRGb2N1cyhldmVudCwgaXNLZXlib2FyZEZvY3VzZWQpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShJY29uQnV0dG9uLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0S2V5Ym9hcmRGb2N1cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEtleWJvYXJkRm9jdXMoKSB7XG4gICAgICB0aGlzLmJ1dHRvbi5zZXRLZXlib2FyZEZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvd1Rvb2x0aXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93VG9vbHRpcCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnRvb2x0aXApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvb2x0aXBTaG93bjogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdoaWRlVG9vbHRpcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGVUb29sdGlwKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudG9vbHRpcCkgdGhpcy5zZXRTdGF0ZSh7IHRvb2x0aXBTaG93bjogZmFsc2UgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGhvdmVyZWRTdHlsZSA9IF9wcm9wcy5ob3ZlcmVkU3R5bGUsXG4gICAgICAgICAgZGlzYWJsZVRvdWNoUmlwcGxlID0gX3Byb3BzLmRpc2FibGVUb3VjaFJpcHBsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBpY29uQ2xhc3NOYW1lID0gX3Byb3BzLmljb25DbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdG9vbHRpcCA9IF9wcm9wcy50b29sdGlwLFxuICAgICAgICAgIHRvb2x0aXBQb3NpdGlvblByb3AgPSBfcHJvcHMudG9vbHRpcFBvc2l0aW9uLFxuICAgICAgICAgIHRvb2x0aXBTdHlsZXMgPSBfcHJvcHMudG9vbHRpcFN0eWxlcyxcbiAgICAgICAgICB0b3VjaCA9IF9wcm9wcy50b3VjaCxcbiAgICAgICAgICBpY29uU3R5bGUgPSBfcHJvcHMuaWNvblN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2Rpc2FibGVkJywgJ2hvdmVyZWRTdHlsZScsICdkaXNhYmxlVG91Y2hSaXBwbGUnLCAnY2hpbGRyZW4nLCAnaWNvbkNsYXNzTmFtZScsICdzdHlsZScsICd0b29sdGlwJywgJ3Rvb2x0aXBQb3NpdGlvbicsICd0b29sdGlwU3R5bGVzJywgJ3RvdWNoJywgJ2ljb25TdHlsZSddKTtcblxuICAgICAgdmFyIGZvbnRpY29uID0gdm9pZCAwO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICB2YXIgdG9vbHRpcFBvc2l0aW9uID0gdG9vbHRpcFBvc2l0aW9uUHJvcC5zcGxpdCgnLScpO1xuXG4gICAgICB2YXIgaG92ZXJlZCA9ICh0aGlzLnN0YXRlLmhvdmVyZWQgfHwgdGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCkgJiYgIWRpc2FibGVkO1xuXG4gICAgICB2YXIgbWVyZ2VkUm9vdFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUsIGhvdmVyZWQgPyBob3ZlcmVkU3R5bGUgOiB7fSk7XG5cbiAgICAgIHZhciB0b29sdGlwRWxlbWVudCA9IHRvb2x0aXAgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVG9vbHRpcDIuZGVmYXVsdCwge1xuICAgICAgICBsYWJlbDogdG9vbHRpcCxcbiAgICAgICAgc2hvdzogdGhpcy5zdGF0ZS50b29sdGlwU2hvd24sXG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMudG9vbHRpcCwgdG9vbHRpcFN0eWxlcyksXG4gICAgICAgIHZlcnRpY2FsUG9zaXRpb246IHRvb2x0aXBQb3NpdGlvblswXSxcbiAgICAgICAgaG9yaXpvbnRhbFBvc2l0aW9uOiB0b29sdGlwUG9zaXRpb25bMV1cbiAgICAgIH0pIDogbnVsbDtcblxuICAgICAgaWYgKGljb25DbGFzc05hbWUpIHtcbiAgICAgICAgdmFyIGljb25Ib3ZlckNvbG9yID0gaWNvblN0eWxlLmljb25Ib3ZlckNvbG9yLFxuICAgICAgICAgICAgaWNvblN0eWxlRm9udEljb24gPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShpY29uU3R5bGUsIFsnaWNvbkhvdmVyQ29sb3InXSk7XG5cblxuICAgICAgICBmb250aWNvbiA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9Gb250SWNvbjIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGljb25DbGFzc05hbWUsXG4gICAgICAgICAgICBob3ZlckNvbG9yOiBkaXNhYmxlZCA/IG51bGwgOiBpY29uSG92ZXJDb2xvcixcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGRpc2FibGVkICYmIHN0eWxlcy5kaXNhYmxlZCwgaWNvblN0eWxlRm9udEljb24pLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWUucGFsZXR0ZS50ZXh0Q29sb3JcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0eWxlID0gZGlzYWJsZWQgPyAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGljb25TdHlsZSwgc3R5bGVzLmRpc2FibGVkKSA6IGljb25TdHlsZTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfRW5oYW5jZWRCdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKF9yZWYyKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmJ1dHRvbiA9IF9yZWYyO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgb3RoZXIsIHtcbiAgICAgICAgICBjZW50ZXJSaXBwbGU6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICAgIHN0eWxlOiBtZXJnZWRSb290U3R5bGVzLFxuICAgICAgICAgIGRpc2FibGVUb3VjaFJpcHBsZTogZGlzYWJsZVRvdWNoUmlwcGxlLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlRm9jdXMsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZU91dDogdGhpcy5oYW5kbGVNb3VzZU91dCxcbiAgICAgICAgICBvbktleWJvYXJkRm9jdXM6IHRoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1c1xuICAgICAgICB9KSxcbiAgICAgICAgdG9vbHRpcEVsZW1lbnQsXG4gICAgICAgIGZvbnRpY29uLFxuICAgICAgICAoMCwgX2NoaWxkVXRpbHMuZXh0ZW5kQ2hpbGRyZW4pKGNoaWxkcmVuLCB7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkcmVuU3R5bGVcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBJY29uQnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuSWNvbkJ1dHRvbi5tdWlOYW1lID0gJ0ljb25CdXR0b24nO1xuSWNvbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZVRvdWNoUmlwcGxlOiBmYWxzZSxcbiAgaWNvblN0eWxlOiB7fSxcbiAgdG9vbHRpcFBvc2l0aW9uOiAnYm90dG9tLWNlbnRlcicsXG4gIHRvdWNoOiBmYWxzZVxufTtcbkljb25CdXR0b24uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkljb25CdXR0b24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQ2FuIGJlIHVzZWQgdG8gcGFzcyBhIGBGb250SWNvbmAgZWxlbWVudCBhcyB0aGUgaWNvbiBmb3IgdGhlIGJ1dHRvbi5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCdzIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBob3ZlcmVkLlxuICAgKi9cbiAgaG92ZXJlZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIGhyZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBuYW1lIG9mIHRoZSBpY29uLiBVc2VkIGZvciBzZXR0aW5nIHRoZSBpY29uIHdpdGggYSBzdHlsZXNoZWV0LlxuICAgKi9cbiAgaWNvbkNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgaWNvbiBlbGVtZW50LlxuICAgKiBOb3RlOiB5b3UgY2FuIHNwZWNpZnkgaWNvbkhvdmVyQ29sb3IgYXMgYSBTdHJpbmcgaW5zaWRlIHRoaXMgb2JqZWN0LlxuICAgKi9cbiAgaWNvblN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBidXR0b24gaXMgdG91Y2gtdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBidXR0b24uXG4gICAqL1xuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZm9jdXNlZCBvciBibHVycmVkIGJ5IHRoZSBrZXlib2FyZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IGBmb2N1c2Agb3IgYGJsdXJgIGV2ZW50IHRhcmdldGluZyB0aGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBrZXlib2FyZEZvY3VzZWQgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZm9jdXNlZC5cbiAgICovXG4gIG9uS2V5Ym9hcmRGb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VPdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaFN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc3VwcGx5IHRvIHRoZSBlbGVtZW50J3MgdG9vbHRpcC5cbiAgICovXG4gIHRvb2x0aXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBwb3NpdGlvbnMsIHJlc3BlY3RpdmVseSwgb2YgdGhlIGVsZW1lbnQncyB0b29sdGlwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiBcImJvdHRvbS1jZW50ZXJcIiwgXCJ0b3AtY2VudGVyXCIsIFwiYm90dG9tLXJpZ2h0XCIsIFwidG9wLXJpZ2h0XCIsXG4gICAqIFwiYm90dG9tLWxlZnRcIiwgYW5kIFwidG9wLWxlZnRcIi5cbiAgICovXG4gIHRvb2x0aXBQb3NpdGlvbjogX3Byb3BUeXBlczQuZGVmYXVsdC5jb3JuZXJzQW5kQ2VudGVyLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHRvb2x0aXAgZWxlbWVudC5cbiAgICovXG4gIHRvb2x0aXBTdHlsZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgaW5jcmVhc2UgdGhlIHRvb2x0aXAgZWxlbWVudCdzIHNpemUuIFVzZWZ1bCBmb3IgaW5jcmVhc2luZyB0b29sdGlwXG4gICAqIHJlYWRhYmlsaXR5IG9uIG1vYmlsZSBkZXZpY2VzLlxuICAgKi9cbiAgdG91Y2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gSWNvbkJ1dHRvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0ODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX2NvbG9yTWFuaXB1bGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy9jb2xvck1hbmlwdWxhdG9yJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuaGFuY2VkQnV0dG9uKTtcblxudmFyIF9JY29uQnV0dG9uID0gcmVxdWlyZSgnLi4vSWNvbkJ1dHRvbicpO1xuXG52YXIgX0ljb25CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSWNvbkJ1dHRvbik7XG5cbnZhciBfZXhwYW5kTGVzcyA9IHJlcXVpcmUoJy4uL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2V4cGFuZC1sZXNzJyk7XG5cbnZhciBfZXhwYW5kTGVzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHBhbmRMZXNzKTtcblxudmFyIF9leHBhbmRNb3JlID0gcmVxdWlyZSgnLi4vc3ZnLWljb25zL25hdmlnYXRpb24vZXhwYW5kLW1vcmUnKTtcblxudmFyIF9leHBhbmRNb3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4cGFuZE1vcmUpO1xuXG52YXIgX05lc3RlZExpc3QgPSByZXF1aXJlKCcuL05lc3RlZExpc3QnKTtcblxudmFyIF9OZXN0ZWRMaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX05lc3RlZExpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciBhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3IgPSBwcm9wcy5hdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3IsXG4gICAgICBpbnNldENoaWxkcmVuID0gcHJvcHMuaW5zZXRDaGlsZHJlbixcbiAgICAgIGxlZnRBdmF0YXIgPSBwcm9wcy5sZWZ0QXZhdGFyLFxuICAgICAgbGVmdENoZWNrYm94ID0gcHJvcHMubGVmdENoZWNrYm94LFxuICAgICAgbGVmdEljb24gPSBwcm9wcy5sZWZ0SWNvbixcbiAgICAgIG5lc3RlZEl0ZW1zID0gcHJvcHMubmVzdGVkSXRlbXMsXG4gICAgICBuZXN0ZWRMZXZlbCA9IHByb3BzLm5lc3RlZExldmVsLFxuICAgICAgcmlnaHRBdmF0YXIgPSBwcm9wcy5yaWdodEF2YXRhcixcbiAgICAgIHJpZ2h0SWNvbiA9IHByb3BzLnJpZ2h0SWNvbixcbiAgICAgIHJpZ2h0SWNvbkJ1dHRvbiA9IHByb3BzLnJpZ2h0SWNvbkJ1dHRvbixcbiAgICAgIHJpZ2h0VG9nZ2xlID0gcHJvcHMucmlnaHRUb2dnbGUsXG4gICAgICBzZWNvbmRhcnlUZXh0ID0gcHJvcHMuc2Vjb25kYXJ5VGV4dCxcbiAgICAgIHNlY29uZGFyeVRleHRMaW5lcyA9IHByb3BzLnNlY29uZGFyeVRleHRMaW5lcztcbiAgdmFyIG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZTtcbiAgdmFyIGxpc3RJdGVtID0gbXVpVGhlbWUubGlzdEl0ZW07XG5cblxuICB2YXIgdGV4dENvbG9yID0gbXVpVGhlbWUuYmFzZVRoZW1lLnBhbGV0dGUudGV4dENvbG9yO1xuICB2YXIgaG92ZXJDb2xvciA9IHByb3BzLmhvdmVyQ29sb3IgfHwgKDAsIF9jb2xvck1hbmlwdWxhdG9yLmZhZGUpKHRleHRDb2xvciwgMC4xKTtcbiAgdmFyIHNpbmdsZUF2YXRhciA9ICFzZWNvbmRhcnlUZXh0ICYmIChsZWZ0QXZhdGFyIHx8IHJpZ2h0QXZhdGFyKTtcbiAgdmFyIHNpbmdsZU5vQXZhdGFyID0gIXNlY29uZGFyeVRleHQgJiYgIShsZWZ0QXZhdGFyIHx8IHJpZ2h0QXZhdGFyKTtcbiAgdmFyIHR3b0xpbmUgPSBzZWNvbmRhcnlUZXh0ICYmIHNlY29uZGFyeVRleHRMaW5lcyA9PT0gMTtcbiAgdmFyIHRocmVlTGluZSA9IHNlY29uZGFyeVRleHQgJiYgc2Vjb25kYXJ5VGV4dExpbmVzID4gMTtcblxuICB2YXIgaXNLZXlib2FyZEZvY3VzZWQgPSAocHJvcHMuaXNLZXlib2FyZEZvY3VzZWQgIT09IHVuZGVmaW5lZCA/IHByb3BzIDogc3RhdGUpLmlzS2V5Ym9hcmRGb2N1c2VkO1xuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAoaXNLZXlib2FyZEZvY3VzZWQgfHwgc3RhdGUuaG92ZXJlZCkgJiYgIXN0YXRlLnJpZ2h0SWNvbkJ1dHRvbkhvdmVyZWQgJiYgIXN0YXRlLnJpZ2h0SWNvbkJ1dHRvbktleWJvYXJkRm9jdXNlZCA/IGhvdmVyQ29sb3IgOiBudWxsLFxuICAgICAgY29sb3I6IHRleHRDb2xvcixcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICB9LFxuXG4gICAgLy8gVGhpcyBpbm5lciBkaXYgaXMgbmVlZGVkIHNvIHRoYXQgcmlwcGxlcyB3aWxsIHNwYW4gdGhlIGVudGlyZSBjb250YWluZXJcbiAgICBpbm5lckRpdjoge1xuICAgICAgbWFyZ2luTGVmdDogbmVzdGVkTGV2ZWwgKiBsaXN0SXRlbS5uZXN0ZWRMZXZlbERlcHRoLFxuICAgICAgcGFkZGluZ0xlZnQ6IGxlZnRJY29uIHx8IGxlZnRBdmF0YXIgfHwgbGVmdENoZWNrYm94IHx8IGluc2V0Q2hpbGRyZW4gPyA3MiA6IDE2LFxuICAgICAgcGFkZGluZ1JpZ2h0OiByaWdodEljb24gfHwgcmlnaHRBdmF0YXIgfHwgcmlnaHRJY29uQnV0dG9uIHx8IG5lc3RlZEl0ZW1zLmxlbmd0aCAmJiBhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3IgPyA1NiA6IHJpZ2h0VG9nZ2xlID8gNzIgOiAxNixcbiAgICAgIHBhZGRpbmdCb3R0b206IHNpbmdsZUF2YXRhciA/IDIwIDogMTYsXG4gICAgICBwYWRkaW5nVG9wOiBzaW5nbGVOb0F2YXRhciB8fCB0aHJlZUxpbmUgPyAxNiA6IDIwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuXG4gICAgaWNvbnM6IHtcbiAgICAgIGhlaWdodDogMjQsXG4gICAgICB3aWR0aDogMjQsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IHR3b0xpbmUgPyAxMiA6IHNpbmdsZUF2YXRhciA/IDQgOiAwLFxuICAgICAgbWFyZ2luOiAxMlxuICAgIH0sXG5cbiAgICBsZWZ0SWNvbjoge1xuICAgICAgbGVmdDogNFxuICAgIH0sXG5cbiAgICByaWdodEljb246IHtcbiAgICAgIHJpZ2h0OiA0XG4gICAgfSxcblxuICAgIGF2YXRhcnM6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiBzaW5nbGVBdmF0YXIgPyA4IDogMTZcbiAgICB9LFxuXG4gICAgbGFiZWw6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gICAgfSxcblxuICAgIGxlZnRBdmF0YXI6IHtcbiAgICAgIGxlZnQ6IDE2XG4gICAgfSxcblxuICAgIHJpZ2h0QXZhdGFyOiB7XG4gICAgICByaWdodDogMTZcbiAgICB9LFxuXG4gICAgbGVmdENoZWNrYm94OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogMjQsXG4gICAgICB0b3A6IHR3b0xpbmUgPyAyNCA6IHNpbmdsZUF2YXRhciA/IDE2IDogMTIsXG4gICAgICBsZWZ0OiAxNlxuICAgIH0sXG5cbiAgICBwcmltYXJ5VGV4dDoge30sXG5cbiAgICByaWdodEljb25CdXR0b246IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHRvcDogdHdvTGluZSA/IDEyIDogc2luZ2xlQXZhdGFyID8gNCA6IDAsXG4gICAgICByaWdodDogNFxuICAgIH0sXG5cbiAgICByaWdodFRvZ2dsZToge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6IDU0LFxuICAgICAgdG9wOiB0d29MaW5lID8gMjUgOiBzaW5nbGVBdmF0YXIgPyAxNyA6IDEzLFxuICAgICAgcmlnaHQ6IDhcbiAgICB9LFxuXG4gICAgc2Vjb25kYXJ5VGV4dDoge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgbGluZUhlaWdodDogdGhyZWVMaW5lID8gJzE4cHgnIDogJzE2cHgnLFxuICAgICAgaGVpZ2h0OiB0aHJlZUxpbmUgPyAzNiA6IDE2LFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgbWFyZ2luVG9wOiA0LFxuICAgICAgY29sb3I6IGxpc3RJdGVtLnNlY29uZGFyeVRleHRDb2xvcixcblxuICAgICAgLy8gbmVlZGVkIGZvciAyIGFuZCAzIGxpbmUgZWxsaXBzaXNcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHdoaXRlU3BhY2U6IHRocmVlTGluZSA/IG51bGwgOiAnbm93cmFwJyxcbiAgICAgIGRpc3BsYXk6IHRocmVlTGluZSA/ICctd2Via2l0LWJveCcgOiBudWxsLFxuICAgICAgV2Via2l0TGluZUNsYW1wOiB0aHJlZUxpbmUgPyAyIDogbnVsbCxcbiAgICAgIFdlYmtpdEJveE9yaWVudDogdGhyZWVMaW5lID8gJ3ZlcnRpY2FsJyA6IG51bGxcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIExpc3RJdGVtID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoTGlzdEl0ZW0sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpc3RJdGVtKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIExpc3RJdGVtKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IExpc3RJdGVtLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShMaXN0SXRlbSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgICBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2UsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIHJpZ2h0SWNvbkJ1dHRvbkhvdmVyZWQ6IGZhbHNlLFxuICAgICAgcmlnaHRJY29uQnV0dG9uS2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgICAgIHRvdWNoOiBmYWxzZVxuICAgIH0sIF90aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzS2V5Ym9hcmRGb2N1c2VkOiBpc0tleWJvYXJkRm9jdXNlZCB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uS2V5Ym9hcmRGb2N1cyhldmVudCwgaXNLZXlib2FyZEZvY3VzZWQpO1xuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUudG91Y2gpIF90aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMucHJpbWFyeVRvZ2dsZXNOZXN0ZWRMaXN0KSB7XG4gICAgICAgIF90aGlzLmhhbmRsZU5lc3RlZExpc3RUb2dnbGUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU5lc3RlZExpc3RUb2dnbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5sZWZ0Q2hlY2tib3gpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub3BlbiA9PT0gbnVsbCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IG9wZW46ICFfdGhpcy5zdGF0ZS5vcGVuIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbk5lc3RlZExpc3RUb2dnbGUoX3RoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEV4cG9zaW5nIGB0aGlzYCBpbiB0aGUgY2FsbGJhY2sgaXMgcXVpdGUgYSBiYWQgQVBJLlxuICAgICAgICAvLyBJJ20gZG9pbmcgYSBvbmUgbGV2ZWwgZGVlcCBjbG9uZSB0byBleHBvc2UgYSBmYWtlIHN0YXRlLm9wZW4uXG4gICAgICAgIF90aGlzLnByb3BzLm9uTmVzdGVkTGlzdFRvZ2dsZSgoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBfdGhpcywge1xuICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICBvcGVuOiAhX3RoaXMuc3RhdGUub3BlblxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVJpZ2h0SWNvbkJ1dHRvbktleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGlzS2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICBpZiAoaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgICAgICAgICByaWdodEljb25CdXR0b25LZXlib2FyZEZvY3VzZWQ6IGlzS2V5Ym9hcmRGb2N1c2VkXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWNvbkJ1dHRvbiA9IF90aGlzLnByb3BzLnJpZ2h0SWNvbkJ1dHRvbjtcblxuICAgICAgaWYgKGljb25CdXR0b24gJiYgaWNvbkJ1dHRvbi5wcm9wcy5vbktleWJvYXJkRm9jdXMpIGljb25CdXR0b24ucHJvcHMub25LZXlib2FyZEZvY3VzKGV2ZW50LCBpc0tleWJvYXJkRm9jdXNlZCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGljb25CdXR0b24gPSBfdGhpcy5wcm9wcy5yaWdodEljb25CdXR0b247XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHJpZ2h0SWNvbkJ1dHRvbkhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKGljb25CdXR0b24gJiYgaWNvbkJ1dHRvbi5wcm9wcy5vbk1vdXNlTGVhdmUpIGljb25CdXR0b24ucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgaWNvbkJ1dHRvbiA9IF90aGlzLnByb3BzLnJpZ2h0SWNvbkJ1dHRvbjtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgcmlnaHRJY29uQnV0dG9uSG92ZXJlZDogdHJ1ZSB9KTtcbiAgICAgIGlmIChpY29uQnV0dG9uICYmIGljb25CdXR0b24ucHJvcHMub25Nb3VzZUVudGVyKSBpY29uQnV0dG9uLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGljb25CdXR0b24gPSBfdGhpcy5wcm9wcy5yaWdodEljb25CdXR0b247XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChpY29uQnV0dG9uICYmIGljb25CdXR0b24ucHJvcHMub25Nb3VzZVVwKSBpY29uQnV0dG9uLnByb3BzLm9uTW91c2VVcChldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBpY29uQnV0dG9uID0gX3RoaXMucHJvcHMucmlnaHRJY29uQnV0dG9uO1xuXG4gICAgICAvLyBTdG9wIHRoZSBldmVudCBmcm9tIGJ1YmJsaW5nIHVwIHRvIHRoZSBsaXN0LWl0ZW1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGljb25CdXR0b24gJiYgaWNvbkJ1dHRvbi5wcm9wcy5vbkNsaWNrKSBpY29uQnV0dG9uLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgdG91Y2g6IHRydWUgfSk7XG4gICAgICBfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHRvdWNoOiB0cnVlIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25Ub3VjaEVuZChldmVudCk7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKExpc3RJdGVtLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiB0aGlzLnByb3BzLm9wZW4gPT09IG51bGwgPyB0aGlzLnByb3BzLmluaXRpYWxseU9wZW4gPT09IHRydWUgOiB0aGlzLnByb3BzLm9wZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29udHJvbGxlZC5cbiAgICAgIGlmIChuZXh0UHJvcHMub3BlbiAhPT0gbnVsbCkgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IG5leHRQcm9wcy5vcGVuIH0pO1xuICAgICAgaWYgKG5leHRQcm9wcy5kaXNhYmxlZCAmJiB0aGlzLnN0YXRlLmhvdmVyZWQpIHRoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiBmYWxzZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuY29udGV4dCwgbmV4dENvbnRleHQpO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIG5lZWRlZCBieSB0aGUgYE1lbnVJdGVtYCBjb21wb25lbnQuXG5cbiAgfSwge1xuICAgIGtleTogJ2FwcGx5Rm9jdXNTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGx5Rm9jdXNTdGF0ZShmb2N1c1N0YXRlKSB7XG4gICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgdmFyIGJ1dHRvbkVsID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMuYnV0dG9uKTtcblxuICAgICAgICBzd2l0Y2ggKGZvY3VzU3RhdGUpIHtcbiAgICAgICAgICBjYXNlICdub25lJzpcbiAgICAgICAgICAgIGJ1dHRvbkVsLmJsdXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2ZvY3VzZWQnOlxuICAgICAgICAgICAgYnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2tleWJvYXJkLWZvY3VzZWQnOlxuICAgICAgICAgICAgdGhpcy5idXR0b24uc2V0S2V5Ym9hcmRGb2N1cygpO1xuICAgICAgICAgICAgYnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlRGlzYWJsZWRFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlRGlzYWJsZWRFbGVtZW50KHN0eWxlcywgY29udGVudENoaWxkcmVuLCBhZGRpdGlvbmFsUHJvcHMpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlubmVyRGl2U3R5bGUgPSBfcHJvcHMuaW5uZXJEaXZTdHlsZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcblxuXG4gICAgICB2YXIgbWVyZ2VkRGl2U3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMucm9vdCwgc3R5bGVzLmlubmVyRGl2LCBpbm5lckRpdlN0eWxlLCBzdHlsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIGFkZGl0aW9uYWxQcm9wcywge1xuICAgICAgICAgIHN0eWxlOiB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcyhtZXJnZWREaXZTdHlsZXMpXG4gICAgICAgIH0pLFxuICAgICAgICBjb250ZW50Q2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlTGFiZWxFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTGFiZWxFbGVtZW50KHN0eWxlcywgY29udGVudENoaWxkcmVuLCBhZGRpdGlvbmFsUHJvcHMpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpbm5lckRpdlN0eWxlID0gX3Byb3BzMi5pbm5lckRpdlN0eWxlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzMi5zdHlsZTtcblxuXG4gICAgICB2YXIgbWVyZ2VkTGFiZWxTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yb290LCBzdHlsZXMuaW5uZXJEaXYsIGlubmVyRGl2U3R5bGUsIHN0eWxlcy5sYWJlbCwgc3R5bGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIGFkZGl0aW9uYWxQcm9wcywge1xuICAgICAgICAgIHN0eWxlOiB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcyhtZXJnZWRMYWJlbFN0eWxlcylcbiAgICAgICAgfSksXG4gICAgICAgIGNvbnRlbnRDaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjcmVhdGVUZXh0RWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVRleHRFbGVtZW50KHN0eWxlcywgZGF0YSwga2V5KSB7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGRhdGEpKSB7XG4gICAgICAgIHZhciBzdHlsZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLCBkYXRhLnByb3BzLnN0eWxlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gaWYgZWxlbWVudCBpcyBhIG5hdGl2ZSBkb20gbm9kZVxuICAgICAgICAgIHN0eWxlID0gcHJlcGFyZVN0eWxlcyhzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoZGF0YSwge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBrZXk6IGtleSwgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzKSB9LFxuICAgICAgICBkYXRhXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3B1c2hFbGVtZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHVzaEVsZW1lbnQoY2hpbGRyZW4sIGVsZW1lbnQsIGJhc2VTdHlsZXMsIGFkZGl0aW9uYWxQcm9wcykge1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgYmFzZVN0eWxlcywgZWxlbWVudC5wcm9wcy5zdHlsZSk7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChlbGVtZW50LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICBrZXk6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICBzdHlsZTogc3R5bGVzXG4gICAgICAgIH0sIGFkZGl0aW9uYWxQcm9wcykpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGF1dG9HZW5lcmF0ZU5lc3RlZEluZGljYXRvciA9IF9wcm9wczMuYXV0b0dlbmVyYXRlTmVzdGVkSW5kaWNhdG9yLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMy5jaGlsZHJlbixcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50ID0gX3Byb3BzMy5jb250YWluZXJFbGVtZW50LFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMy5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlS2V5Ym9hcmRGb2N1cyA9IF9wcm9wczMuZGlzYWJsZUtleWJvYXJkRm9jdXMsXG4gICAgICAgICAgaG92ZXJDb2xvciA9IF9wcm9wczMuaG92ZXJDb2xvcixcbiAgICAgICAgICBpbml0aWFsbHlPcGVuID0gX3Byb3BzMy5pbml0aWFsbHlPcGVuLFxuICAgICAgICAgIGlubmVyRGl2U3R5bGUgPSBfcHJvcHMzLmlubmVyRGl2U3R5bGUsXG4gICAgICAgICAgaW5zZXRDaGlsZHJlbiA9IF9wcm9wczMuaW5zZXRDaGlsZHJlbixcbiAgICAgICAgICBsZWZ0QXZhdGFyID0gX3Byb3BzMy5sZWZ0QXZhdGFyLFxuICAgICAgICAgIGxlZnRDaGVja2JveCA9IF9wcm9wczMubGVmdENoZWNrYm94LFxuICAgICAgICAgIGxlZnRJY29uID0gX3Byb3BzMy5sZWZ0SWNvbixcbiAgICAgICAgICBuZXN0ZWRJdGVtcyA9IF9wcm9wczMubmVzdGVkSXRlbXMsXG4gICAgICAgICAgbmVzdGVkTGV2ZWwgPSBfcHJvcHMzLm5lc3RlZExldmVsLFxuICAgICAgICAgIG5lc3RlZExpc3RTdHlsZSA9IF9wcm9wczMubmVzdGVkTGlzdFN0eWxlLFxuICAgICAgICAgIG9uS2V5Ym9hcmRGb2N1cyA9IF9wcm9wczMub25LZXlib2FyZEZvY3VzLFxuICAgICAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkID0gX3Byb3BzMy5pc0tleWJvYXJkRm9jdXNlZCxcbiAgICAgICAgICBvbk1vdXNlRW50ZXIgPSBfcHJvcHMzLm9uTW91c2VFbnRlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcHJvcHMzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICBvbk5lc3RlZExpc3RUb2dnbGUgPSBfcHJvcHMzLm9uTmVzdGVkTGlzdFRvZ2dsZSxcbiAgICAgICAgICBvblRvdWNoU3RhcnQgPSBfcHJvcHMzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgICBvbkNsaWNrID0gX3Byb3BzMy5vbkNsaWNrLFxuICAgICAgICAgIHJpZ2h0QXZhdGFyID0gX3Byb3BzMy5yaWdodEF2YXRhcixcbiAgICAgICAgICByaWdodEljb24gPSBfcHJvcHMzLnJpZ2h0SWNvbixcbiAgICAgICAgICByaWdodEljb25CdXR0b24gPSBfcHJvcHMzLnJpZ2h0SWNvbkJ1dHRvbixcbiAgICAgICAgICByaWdodFRvZ2dsZSA9IF9wcm9wczMucmlnaHRUb2dnbGUsXG4gICAgICAgICAgcHJpbWFyeVRleHQgPSBfcHJvcHMzLnByaW1hcnlUZXh0LFxuICAgICAgICAgIHByaW1hcnlUb2dnbGVzTmVzdGVkTGlzdCA9IF9wcm9wczMucHJpbWFyeVRvZ2dsZXNOZXN0ZWRMaXN0LFxuICAgICAgICAgIHNlY29uZGFyeVRleHQgPSBfcHJvcHMzLnNlY29uZGFyeVRleHQsXG4gICAgICAgICAgc2Vjb25kYXJ5VGV4dExpbmVzID0gX3Byb3BzMy5zZWNvbmRhcnlUZXh0TGluZXMsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzMywgWydhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3InLCAnY2hpbGRyZW4nLCAnY29udGFpbmVyRWxlbWVudCcsICdkaXNhYmxlZCcsICdkaXNhYmxlS2V5Ym9hcmRGb2N1cycsICdob3ZlckNvbG9yJywgJ2luaXRpYWxseU9wZW4nLCAnaW5uZXJEaXZTdHlsZScsICdpbnNldENoaWxkcmVuJywgJ2xlZnRBdmF0YXInLCAnbGVmdENoZWNrYm94JywgJ2xlZnRJY29uJywgJ25lc3RlZEl0ZW1zJywgJ25lc3RlZExldmVsJywgJ25lc3RlZExpc3RTdHlsZScsICdvbktleWJvYXJkRm9jdXMnLCAnaXNLZXlib2FyZEZvY3VzZWQnLCAnb25Nb3VzZUVudGVyJywgJ29uTW91c2VMZWF2ZScsICdvbk5lc3RlZExpc3RUb2dnbGUnLCAnb25Ub3VjaFN0YXJ0JywgJ29uQ2xpY2snLCAncmlnaHRBdmF0YXInLCAncmlnaHRJY29uJywgJ3JpZ2h0SWNvbkJ1dHRvbicsICdyaWdodFRvZ2dsZScsICdwcmltYXJ5VGV4dCcsICdwcmltYXJ5VG9nZ2xlc05lc3RlZExpc3QnLCAnc2Vjb25kYXJ5VGV4dCcsICdzZWNvbmRhcnlUZXh0TGluZXMnLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG4gICAgICB2YXIgY29udGVudENoaWxkcmVuID0gW2NoaWxkcmVuXTtcblxuICAgICAgaWYgKGxlZnRJY29uKSB7XG4gICAgICAgIHZhciBhZGRpdGlvbmFsUHJvcHMgPSB7XG4gICAgICAgICAgY29sb3I6IGxlZnRJY29uLnByb3BzLmNvbG9yIHx8IHRoaXMuY29udGV4dC5tdWlUaGVtZS5saXN0SXRlbS5sZWZ0SWNvbkNvbG9yXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHVzaEVsZW1lbnQoY29udGVudENoaWxkcmVuLCBsZWZ0SWNvbiwgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaWNvbnMsIHN0eWxlcy5sZWZ0SWNvbiksIGFkZGl0aW9uYWxQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyaWdodEljb24pIHtcbiAgICAgICAgdmFyIF9hZGRpdGlvbmFsUHJvcHMgPSB7XG4gICAgICAgICAgY29sb3I6IHJpZ2h0SWNvbi5wcm9wcy5jb2xvciB8fCB0aGlzLmNvbnRleHQubXVpVGhlbWUubGlzdEl0ZW0ucmlnaHRJY29uQ29sb3JcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wdXNoRWxlbWVudChjb250ZW50Q2hpbGRyZW4sIHJpZ2h0SWNvbiwgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaWNvbnMsIHN0eWxlcy5yaWdodEljb24pLCBfYWRkaXRpb25hbFByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnRBdmF0YXIpIHtcbiAgICAgICAgdGhpcy5wdXNoRWxlbWVudChjb250ZW50Q2hpbGRyZW4sIGxlZnRBdmF0YXIsICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmF2YXRhcnMsIHN0eWxlcy5sZWZ0QXZhdGFyKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyaWdodEF2YXRhcikge1xuICAgICAgICB0aGlzLnB1c2hFbGVtZW50KGNvbnRlbnRDaGlsZHJlbiwgcmlnaHRBdmF0YXIsICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmF2YXRhcnMsIHN0eWxlcy5yaWdodEF2YXRhcikpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGVmdENoZWNrYm94KSB7XG4gICAgICAgIHRoaXMucHVzaEVsZW1lbnQoY29udGVudENoaWxkcmVuLCBsZWZ0Q2hlY2tib3gsICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmxlZnRDaGVja2JveCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBSaWdodEljb25CdXR0b25FbGVtZW50XG4gICAgICB2YXIgaGFzTmVzdExpc3RJdGVtcyA9IG5lc3RlZEl0ZW1zLmxlbmd0aDtcbiAgICAgIHZhciBoYXNSaWdodEVsZW1lbnQgPSByaWdodEF2YXRhciB8fCByaWdodEljb24gfHwgcmlnaHRJY29uQnV0dG9uIHx8IHJpZ2h0VG9nZ2xlO1xuICAgICAgdmFyIG5lZWRzTmVzdGVkSW5kaWNhdG9yID0gaGFzTmVzdExpc3RJdGVtcyAmJiBhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3IgJiYgIWhhc1JpZ2h0RWxlbWVudDtcblxuICAgICAgaWYgKHJpZ2h0SWNvbkJ1dHRvbiB8fCBuZWVkc05lc3RlZEluZGljYXRvcikge1xuICAgICAgICB2YXIgcmlnaHRJY29uQnV0dG9uRWxlbWVudCA9IHJpZ2h0SWNvbkJ1dHRvbjtcbiAgICAgICAgdmFyIHJpZ2h0SWNvbkJ1dHRvbkhhbmRsZXJzID0ge1xuICAgICAgICAgIG9uS2V5Ym9hcmRGb2N1czogdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25LZXlib2FyZEZvY3VzLFxuICAgICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Nb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVSaWdodEljb25CdXR0b25Nb3VzZUxlYXZlLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uVG91Y2hUYXAsXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uTW91c2VVcCxcbiAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlUmlnaHRJY29uQnV0dG9uTW91c2VVcFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIG5lc3RlZCBsaXN0IGluZGljYXRvciBpY29uIGlmIHdlIGRvbid0IGhhdmUgYW4gaWNvbiBvbiB0aGUgcmlnaHRcbiAgICAgICAgaWYgKG5lZWRzTmVzdGVkSW5kaWNhdG9yKSB7XG4gICAgICAgICAgcmlnaHRJY29uQnV0dG9uRWxlbWVudCA9IHRoaXMuc3RhdGUub3BlbiA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX0ljb25CdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2V4cGFuZExlc3MyLmRlZmF1bHQsIG51bGwpXG4gICAgICAgICAgKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX0ljb25CdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2V4cGFuZE1vcmUyLmRlZmF1bHQsIG51bGwpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByaWdodEljb25CdXR0b25IYW5kbGVycy5vbkNsaWNrID0gdGhpcy5oYW5kbGVOZXN0ZWRMaXN0VG9nZ2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wdXNoRWxlbWVudChjb250ZW50Q2hpbGRyZW4sIHJpZ2h0SWNvbkJ1dHRvbkVsZW1lbnQsICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJpZ2h0SWNvbkJ1dHRvbiksIHJpZ2h0SWNvbkJ1dHRvbkhhbmRsZXJzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0VG9nZ2xlKSB7XG4gICAgICAgIHRoaXMucHVzaEVsZW1lbnQoY29udGVudENoaWxkcmVuLCByaWdodFRvZ2dsZSwgKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMucmlnaHRUb2dnbGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByaW1hcnlUZXh0KSB7XG4gICAgICAgIHZhciBwcmltYXJ5VGV4dEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVRleHRFbGVtZW50KHN0eWxlcy5wcmltYXJ5VGV4dCwgcHJpbWFyeVRleHQsICdwcmltYXJ5VGV4dCcpO1xuICAgICAgICBjb250ZW50Q2hpbGRyZW4ucHVzaChwcmltYXJ5VGV4dEVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2Vjb25kYXJ5VGV4dCkge1xuICAgICAgICB2YXIgc2Vjb25kYXJ5VGV4dEVsZW1lbnQgPSB0aGlzLmNyZWF0ZVRleHRFbGVtZW50KHN0eWxlcy5zZWNvbmRhcnlUZXh0LCBzZWNvbmRhcnlUZXh0LCAnc2Vjb25kYXJ5VGV4dCcpO1xuICAgICAgICBjb250ZW50Q2hpbGRyZW4ucHVzaChzZWNvbmRhcnlUZXh0RWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXN0ZWRMaXN0ID0gbmVzdGVkSXRlbXMubGVuZ3RoID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9OZXN0ZWRMaXN0Mi5kZWZhdWx0LFxuICAgICAgICB7IG5lc3RlZExldmVsOiBuZXN0ZWRMZXZlbCwgb3BlbjogdGhpcy5zdGF0ZS5vcGVuLCBzdHlsZTogbmVzdGVkTGlzdFN0eWxlIH0sXG4gICAgICAgIG5lc3RlZEl0ZW1zXG4gICAgICApIDogdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgc2ltcGxlTGFiZWwgPSAhcHJpbWFyeVRvZ2dsZXNOZXN0ZWRMaXN0ICYmIChsZWZ0Q2hlY2tib3ggfHwgcmlnaHRUb2dnbGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBudWxsLFxuICAgICAgICBzaW1wbGVMYWJlbCA/IHRoaXMuY3JlYXRlTGFiZWxFbGVtZW50KHN0eWxlcywgY29udGVudENoaWxkcmVuLCBvdGhlcikgOiBkaXNhYmxlZCA/IHRoaXMuY3JlYXRlRGlzYWJsZWRFbGVtZW50KHN0eWxlcywgY29udGVudENoaWxkcmVuLCBvdGhlcikgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfRW5oYW5jZWRCdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgICBjb250YWluZXJFbGVtZW50OiBjb250YWluZXJFbGVtZW50XG4gICAgICAgICAgfSwgb3RoZXIsIHtcbiAgICAgICAgICAgIGRpc2FibGVLZXlib2FyZEZvY3VzOiBkaXNhYmxlS2V5Ym9hcmRGb2N1cyB8fCB0aGlzLnN0YXRlLnJpZ2h0SWNvbkJ1dHRvbktleWJvYXJkRm9jdXNlZCxcbiAgICAgICAgICAgIG9uS2V5Ym9hcmRGb2N1czogdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzLFxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVG91Y2hUYXAsXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczIuYnV0dG9uID0gbm9kZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMucm9vdCwgc3R5bGUpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbm5lckRpdiwgaW5uZXJEaXZTdHlsZSkpIH0sXG4gICAgICAgICAgICBjb250ZW50Q2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIG5lc3RlZExpc3RcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMaXN0SXRlbTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkxpc3RJdGVtLm11aU5hbWUgPSAnTGlzdEl0ZW0nO1xuTGlzdEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3I6IHRydWUsXG4gIGNvbnRhaW5lckVsZW1lbnQ6ICdzcGFuJyxcbiAgZGlzYWJsZUtleWJvYXJkRm9jdXM6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGluaXRpYWxseU9wZW46IGZhbHNlLFxuICBpbnNldENoaWxkcmVuOiBmYWxzZSxcbiAgbmVzdGVkSXRlbXM6IFtdLFxuICBuZXN0ZWRMZXZlbDogMCxcbiAgb25LZXlib2FyZEZvY3VzOiBmdW5jdGlvbiBvbktleWJvYXJkRm9jdXMoKSB7fSxcbiAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7fSxcbiAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7fSxcbiAgb25OZXN0ZWRMaXN0VG9nZ2xlOiBmdW5jdGlvbiBvbk5lc3RlZExpc3RUb2dnbGUoKSB7fSxcbiAgb25Ub3VjaEVuZDogZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHt9LFxuICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIG9uVG91Y2hTdGFydCgpIHt9LFxuICBvcGVuOiBudWxsLFxuICBwcmltYXJ5VG9nZ2xlc05lc3RlZExpc3Q6IGZhbHNlLFxuICBzZWNvbmRhcnlUZXh0TGluZXM6IDFcbn07XG5MaXN0SXRlbS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuTGlzdEl0ZW0ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogSWYgdHJ1ZSwgZ2VuZXJhdGUgYSBuZXN0ZWQtbGlzdC1pbmRpY2F0b3IgaWNvbiB3aGVuIG5lc3RlZCBsaXN0XG4gICAqIGl0ZW1zIGFyZSBkZXRlY3RlZC4gTm90ZSB0aGF0IGFuIGluZGljYXRvciB3aWxsIG5vdCBiZSBjcmVhdGVkXG4gICAqIGlmIGEgYHJpZ2h0SWNvbmAgb3IgYHJpZ2h0SWNvbkJ1dHRvbmAgaGFzIGJlZW4gcHJvdmlkZWQgdG9cbiAgICogdGhlIGVsZW1lbnQuXG4gICAqL1xuICBhdXRvR2VuZXJhdGVOZXN0ZWRJbmRpY2F0b3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIENoaWxkcmVuIHBhc3NlZCBpbnRvIHRoZSBgTGlzdEl0ZW1gLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBlbGVtZW50IHRvIHVzZSBhcyB0aGUgY29udGFpbmVyIGZvciB0aGUgTGlzdEl0ZW0uIEVpdGhlciBhIHN0cmluZyB0b1xuICAgKiB1c2UgYSBET00gZWxlbWVudCBvciBhIFJlYWN0RWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgZm9yIHdyYXBwaW5nIHRoZVxuICAgKiBMaXN0SXRlbSBpbiBhIGN1c3RvbSBMaW5rIGNvbXBvbmVudC4gSWYgYSBSZWFjdEVsZW1lbnQgaXMgZ2l2ZW4sIGVuc3VyZVxuICAgKiB0aGF0IGl0IHBhc3NlcyBhbGwgb2YgaXRzIGdpdmVuIHByb3BzIHRocm91Z2ggdG8gdGhlIHVuZGVybHlpbmcgRE9NXG4gICAqIGVsZW1lbnQgYW5kIHJlbmRlcnMgaXRzIGNoaWxkcmVuIHByb3AgZm9yIHByb3BlciBpbnRlZ3JhdGlvbi5cbiAgICovXG4gIGNvbnRhaW5lckVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50XSksXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCB3aWxsIG5vdCBiZSBhYmxlIHRvIGJlIGZvY3VzZWQgYnkgdGhlIGtleWJvYXJkLlxuICAgKi9cbiAgZGlzYWJsZUtleWJvYXJkRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgbm90IGJlIGNsaWNrYWJsZVxuICAgKiBhbmQgd2lsbCBub3QgZGlzcGxheSBob3ZlciBlZmZlY3RzLlxuICAgKiBUaGlzIGlzIGF1dG9tYXRpY2FsbHkgZGlzYWJsZWQgaWYgZWl0aGVyIGBsZWZ0Q2hlY2tib3hgXG4gICAqIG9yIGByaWdodFRvZ2dsZWAgaXMgc2V0LlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICogT3ZlcnJpZGUgdGhlIGhvdmVyIGJhY2tncm91bmQgY29sb3IuXG4gICovXG4gIGhvdmVyQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIG5lc3RlZCBgTGlzdEl0ZW1gcyBhcmUgaW5pdGlhbGx5IGRpc3BsYXllZC5cbiAgICovXG4gIGluaXRpYWxseU9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBpbm5lciBkaXYgZWxlbWVudC5cbiAgICovXG4gIGlubmVyRGl2U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGNoaWxkcmVuIHdpbGwgYmUgaW5kZW50ZWQgYnkgNzJweC5cbiAgICogVGhpcyBpcyB1c2VmdWwgaWYgdGhlcmUgaXMgbm8gbGVmdCBhdmF0YXIgb3IgbGVmdCBpY29uLlxuICAgKi9cbiAgaW5zZXRDaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVXNlIHRvIGNvbnRyb2wgaWYgdGhlIGxpc3QgaXRlbSBzaG91bGQgcmVuZGVyIGFzIGtleWJvYXJkIGZvY3VzZWQuICBJZlxuICAgKiB1bmRlZmluZWQgKGRlZmF1bHQpLCB0aGlzIHdpbGwgYmUgYXV0b21hdGljYWxseSBtYW5hZ2VkLiAgSWYgcHJvdmlkZWQsXG4gICAqIGl0IHdpbGwgY2hhbmdlIHRoZSBjb21wb25lbnRzIHN0eWxlLiAgTm90ZSB0aGF0IHRoaXMgd2lsbCBub3QgY2hhbmdlIHRoZVxuICAgKiBhY3R1YWwgZm9jdXMgLSBhbmQgc2hvdWxkIG9ubHkgYmUgdXNlZCB3aGVuIHlvdSB3YW50IHRvIHNpbXVsYXRlXG4gICAqIGtleWJvYXJkIGZvY3VzIChlZy4gaW4gYSByaWNoIHRleHQgaW5wdXQgYXV0b2NvbXBsZXRlKS5cbiAgICovXG4gIGlzS2V5Ym9hcmRGb2N1c2VkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBgQXZhdGFyYCBlbGVtZW50IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbGVmdCBzaWRlLlxuICAgKi9cbiAgbGVmdEF2YXRhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgYENoZWNrYm94YCBlbGVtZW50IHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbGVmdCBzaWRlLlxuICAgKi9cbiAgbGVmdENoZWNrYm94OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBgU3ZnSWNvbmAgb3IgYEZvbnRJY29uYCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIGxlZnQgc2lkZS5cbiAgICovXG4gIGxlZnRJY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBgTGlzdEl0ZW1gcyB0byBuZXN0IHVuZGVybmVhdGggdGhlIGN1cnJlbnQgYExpc3RJdGVtYC5cbiAgICovXG4gIG5lc3RlZEl0ZW1zOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50KSxcbiAgLyoqXG4gICAqIENvbnRyb2xzIGhvdyBkZWVwIGEgYExpc3RJdGVtYCBhcHBlYXJzLlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIGF1dG9tYXRpY2FsbHkgbWFuYWdlZCwgc28gbW9kaWZ5IGF0IHlvdXIgb3duIHJpc2suXG4gICAqL1xuICBuZXN0ZWRMZXZlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgbmVzdGVkIGl0ZW1zJyBgTmVzdGVkTGlzdGAuXG4gICAqL1xuICBuZXN0ZWRMaXN0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgbGlzdCBpdGVtIGlzIHRvdWNoLXRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgbGlzdCBpdGVtLlxuICAgKi9cbiAgb25DbGljazogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgYExpc3RJdGVtYCBpcyBmb2N1c2VkIG9yIGJsdXJyZWQgYnkgdGhlIGtleWJvYXJkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgYGZvY3VzYCBvciBgYmx1cmAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBgTGlzdEl0ZW1gLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzS2V5Ym9hcmRGb2N1c2VkIElmIHRydWUsIHRoZSBgTGlzdEl0ZW1gIGlzIGZvY3VzZWQuXG4gICAqL1xuICBvbktleWJvYXJkRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgYExpc3RJdGVtYCB0b2dnbGVzIGl0cyBuZXN0ZWQgbGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGxpc3RJdGVtIFRoZSBgTGlzdEl0ZW1gLlxuICAgKi9cbiAgb25OZXN0ZWRMaXN0VG9nZ2xlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uVG91Y2hFbmQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaFN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDb250cm9sIHRvZ2dsZSBzdGF0ZSBvZiBuZXN0ZWQgbGlzdC5cbiAgICovXG4gIG9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGJsb2NrIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgcHJpbWFyeSB0ZXh0LlxuICAgKiBJZiBhIHN0cmluZyBpcyBwYXNzZWQgaW4sIGEgZGl2IHRhZyB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgcHJpbWFyeVRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIGNsaWNraW5nIG9yIHRhcHBpbmcgdGhlIHByaW1hcnkgdGV4dCBvZiB0aGUgYExpc3RJdGVtYFxuICAgKiB0b2dnbGVzIHRoZSBuZXN0ZWQgbGlzdC5cbiAgICovXG4gIHByaW1hcnlUb2dnbGVzTmVzdGVkTGlzdDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgYEF2YXRhcmAgZWxlbWVudCB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIHJpZ2h0IHNpZGUuXG4gICAqL1xuICByaWdodEF2YXRhcjogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgYFN2Z0ljb25gIG9yIGBGb250SWNvbmAgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSByaWdodCBzaWRlLlxuICAgKi9cbiAgcmlnaHRJY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBgSWNvbkJ1dHRvbmAgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSByaWdodCBzaWRlLlxuICAgKiBIb3ZlcmluZyBvdmVyIHRoaXMgYnV0dG9uIHdpbGwgcmVtb3ZlIHRoZSBgTGlzdEl0ZW1gIGhvdmVyLlxuICAgKiBBbHNvLCBjbGlja2luZyBvbiB0aGlzIGJ1dHRvbiB3aWxsIG5vdCB0cmlnZ2VyIGFcbiAgICogcmlwcGxlIG9uIHRoZSBgTGlzdEl0ZW1gOyB0aGUgZXZlbnQgd2lsbCBiZSBzdG9wcGVkIGFuZCBwcmV2ZW50ZWRcbiAgICogZnJvbSBidWJibGluZyB1cCB0byBjYXVzZSBhIGBMaXN0SXRlbWAgY2xpY2suXG4gICAqL1xuICByaWdodEljb25CdXR0b246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGBUb2dnbGVgIGVsZW1lbnQgdG8gZGlzcGxheSBvbiB0aGUgcmlnaHQgc2lkZS5cbiAgICovXG4gIHJpZ2h0VG9nZ2xlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBibG9jayBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIHNlY29uZGFyeSB0ZXh0LlxuICAgKiBJZiBhIHN0cmluZyBpcyBwYXNzZWQgaW4sIGEgZGl2IHRhZyB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgc2Vjb25kYXJ5VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogQ2FuIGJlIDEgb3IgMi4gVGhpcyBpcyB0aGUgbnVtYmVyIG9mIHNlY29uZGFyeVxuICAgKiB0ZXh0IGxpbmVzIGJlZm9yZSBlbGxpcHNpcyB3aWxsIHNob3cuXG4gICAqL1xuICBzZWNvbmRhcnlUZXh0TGluZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWzEsIDJdKSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IExpc3RJdGVtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9MaXN0L0xpc3RJdGVtLmpzXG4vLyBtb2R1bGUgaWQgPSA0ODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX0xpc3QgPSByZXF1aXJlKCcuL0xpc3QnKTtcblxudmFyIF9MaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTmVzdGVkTGlzdCA9IGZ1bmN0aW9uIE5lc3RlZExpc3QocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIG5lc3RlZExldmVsID0gcHJvcHMubmVzdGVkTGV2ZWwsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlO1xuXG5cbiAgaWYgKCFvcGVuKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX0xpc3QyLmRlZmF1bHQsXG4gICAgeyBzdHlsZTogc3R5bGUgfSxcbiAgICBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkgPyAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgbmVzdGVkTGV2ZWw6IG5lc3RlZExldmVsICsgMVxuICAgICAgfSkgOiBjaGlsZDtcbiAgICB9KVxuICApO1xufTtcblxuTmVzdGVkTGlzdC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIG5lc3RlZExldmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkLFxuICBvcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmVzdGVkTGlzdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvTGlzdC9OZXN0ZWRMaXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Ib3RLZXlIb2xkZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSG90S2V5SG9sZGVyID0gZXhwb3J0cy5Ib3RLZXlIb2xkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEhvdEtleUhvbGRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgSG90S2V5SG9sZGVyKTtcblxuICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy50aW1lcklkID0gbnVsbDtcbiAgICAgIF90aGlzLmxhc3RLZXlzID0gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoSG90S2V5SG9sZGVyLCBbe1xuICAgIGtleTogJ2FwcGVuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChrZXkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySWQpO1xuICAgICAgdGhpcy50aW1lcklkID0gc2V0VGltZW91dCh0aGlzLmNsZWFyLCA1MDApO1xuICAgICAgcmV0dXJuIHRoaXMubGFzdEtleXMgPSAodGhpcy5sYXN0S2V5cyB8fCAnJykgKyBrZXk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBIb3RLZXlIb2xkZXI7XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL01lbnUvbWVudVV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA0ODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX01lbnVJdGVtID0gcmVxdWlyZSgnLi9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX01lbnVJdGVtMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9NZW51SXRlbS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgcm91bmRlZCA9IHByb3BzLnJvdW5kZWQsXG4gICAgICBjaXJjbGUgPSBwcm9wcy5jaXJjbGUsXG4gICAgICB0cmFuc2l0aW9uRW5hYmxlZCA9IHByb3BzLnRyYW5zaXRpb25FbmFibGVkLFxuICAgICAgekRlcHRoID0gcHJvcHMuekRlcHRoO1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgcGFwZXIgPSBfY29udGV4dCRtdWlUaGVtZS5wYXBlcixcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9jb250ZXh0JG11aVRoZW1lLmJvcmRlclJhZGl1cztcblxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgY29sb3I6IHBhcGVyLmNvbG9yLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBwYXBlci5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uRW5hYmxlZCAmJiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBmb250RmFtaWx5OiBiYXNlVGhlbWUuZm9udEZhbWlseSxcbiAgICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLDAsMCwwKScsIC8vIFJlbW92ZSBtb2JpbGUgY29sb3IgZmxhc2hpbmcgKGRlcHJlY2F0ZWQpXG4gICAgICBib3hTaGFkb3c6IHBhcGVyLnpEZXB0aFNoYWRvd3NbekRlcHRoIC0gMV0sIC8vIE5vIHNoYWRvdyBmb3IgMCBkZXB0aCBwYXBlcnNcbiAgICAgIGJvcmRlclJhZGl1czogY2lyY2xlID8gJzUwJScgOiByb3VuZGVkID8gYm9yZGVyUmFkaXVzIDogJzBweCdcbiAgICB9XG4gIH07XG59XG5cbnZhciBQYXBlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFBhcGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQYXBlcigpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBQYXBlcik7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKFBhcGVyLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShQYXBlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUGFwZXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2lyY2xlID0gX3Byb3BzLmNpcmNsZSxcbiAgICAgICAgICByb3VuZGVkID0gX3Byb3BzLnJvdW5kZWQsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdHJhbnNpdGlvbkVuYWJsZWQgPSBfcHJvcHMudHJhbnNpdGlvbkVuYWJsZWQsXG4gICAgICAgICAgekRlcHRoID0gX3Byb3BzLnpEZXB0aCxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGlsZHJlbicsICdjaXJjbGUnLCAncm91bmRlZCcsICdzdHlsZScsICd0cmFuc2l0aW9uRW5hYmxlZCcsICd6RGVwdGgnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQYXBlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblBhcGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2lyY2xlOiBmYWxzZSxcbiAgcm91bmRlZDogdHJ1ZSxcbiAgdHJhbnNpdGlvbkVuYWJsZWQ6IHRydWUsXG4gIHpEZXB0aDogMVxufTtcblBhcGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5QYXBlci5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBDaGlsZHJlbiBwYXNzZWQgaW50byB0aGUgcGFwZXIgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSB0byBnZW5lcmF0ZSBhIGNpcmN1bGFyIHBhcGVyIGNvbnRhaW5lci5cbiAgICovXG4gIGNpcmNsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQnkgZGVmYXVsdCwgdGhlIHBhcGVyIGNvbnRhaW5lciB3aWxsIGhhdmUgYSBib3JkZXIgcmFkaXVzLlxuICAgKiBTZXQgdGhpcyB0byBmYWxzZSB0byBnZW5lcmF0ZSBhIGNvbnRhaW5lciB3aXRoIHNoYXJwIGNvcm5lcnMuXG4gICAqL1xuICByb3VuZGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgQ1NTIHRyYW5zaXRpb25zIGZvciB0aGUgcGFwZXIgZWxlbWVudC5cbiAgICovXG4gIHRyYW5zaXRpb25FbmFibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGlzIG51bWJlciByZXByZXNlbnRzIHRoZSB6RGVwdGggb2YgdGhlIHBhcGVyIHNoYWRvdy5cbiAgICovXG4gIHpEZXB0aDogX3Byb3BUeXBlczQuZGVmYXVsdC56RGVwdGhcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBhcGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9QYXBlci9QYXBlci5qc1xuLy8gbW9kdWxlIGlkID0gNDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgdGFyZ2V0T3JpZ2luID0gcHJvcHMudGFyZ2V0T3JpZ2luO1xuICB2YXIgb3BlbiA9IHN0YXRlLm9wZW47XG4gIHZhciBtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWU7XG5cbiAgdmFyIGhvcml6b250YWwgPSB0YXJnZXRPcmlnaW4uaG9yaXpvbnRhbC5yZXBsYWNlKCdtaWRkbGUnLCAndmVydGljYWwnKTtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgekluZGV4OiBtdWlUaGVtZS56SW5kZXgucG9wb3ZlcixcbiAgICAgIG9wYWNpdHk6IG9wZW4gPyAxIDogMCxcbiAgICAgIHRyYW5zZm9ybTogb3BlbiA/ICdzY2FsZSgxLCAxKScgOiAnc2NhbGUoMCwgMCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBob3Jpem9udGFsICsgJyAnICsgdGFyZ2V0T3JpZ2luLnZlcnRpY2FsLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzI1MG1zJywgWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddKSxcbiAgICAgIG1heEhlaWdodDogJzEwMCUnXG4gICAgfSxcbiAgICBob3Jpem9udGFsOiB7XG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgdHJhbnNmb3JtOiBvcGVuID8gJ3NjYWxlWCgxKScgOiAnc2NhbGVYKDApJyxcbiAgICAgIG9wYWNpdHk6IG9wZW4gPyAxIDogMCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogaG9yaXpvbnRhbCArICcgJyArIHRhcmdldE9yaWdpbi52ZXJ0aWNhbCxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcyNTBtcycsIFsndHJhbnNmb3JtJywgJ29wYWNpdHknXSlcbiAgICB9LFxuICAgIHZlcnRpY2FsOiB7XG4gICAgICBvcGFjaXR5OiBvcGVuID8gMSA6IDAsXG4gICAgICB0cmFuc2Zvcm06IG9wZW4gPyAnc2NhbGVZKDEpJyA6ICdzY2FsZVkoMCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBob3Jpem9udGFsICsgJyAnICsgdGFyZ2V0T3JpZ2luLnZlcnRpY2FsLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzUwMG1zJywgWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddKVxuICAgIH1cbiAgfTtcbn1cblxudmFyIFBvcG92ZXJBbmltYXRpb25EZWZhdWx0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcG92ZXJBbmltYXRpb25EZWZhdWx0KCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFBvcG92ZXJBbmltYXRpb25EZWZhdWx0KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFBvcG92ZXJBbmltYXRpb25EZWZhdWx0Ll9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShQb3BvdmVyQW5pbWF0aW9uRGVmYXVsdCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGVcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBuZXh0UHJvcHMub3BlblxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB6RGVwdGggPSBfcHJvcHMuekRlcHRoO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYXBlcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSxcbiAgICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKHN0eWxlcy5ob3Jpem9udGFsKSB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKHN0eWxlcy52ZXJ0aWNhbCkgfSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQb3BvdmVyQW5pbWF0aW9uRGVmYXVsdDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblBvcG92ZXJBbmltYXRpb25EZWZhdWx0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHt9LFxuICB6RGVwdGg6IDFcbn07XG5Qb3BvdmVyQW5pbWF0aW9uRGVmYXVsdC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGNzcyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBvcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRhcmdldE9yaWdpbjogX3Byb3BUeXBlczQuZGVmYXVsdC5vcmlnaW4uaXNSZXF1aXJlZCxcbiAgekRlcHRoOiBfcHJvcFR5cGVzNC5kZWZhdWx0LnpEZXB0aFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvbkRlZmF1bHQuanNcbi8vIG1vZHVsZSBpZCA9IDQ4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4uL1BhcGVyJyk7XG5cbnZhciBfUGFwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFwZXIpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIHRhcmdldE9yaWdpbiA9IHByb3BzLnRhcmdldE9yaWdpbjtcbiAgdmFyIG9wZW4gPSBzdGF0ZS5vcGVuO1xuICB2YXIgbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lO1xuXG4gIHZhciBob3Jpem9udGFsID0gdGFyZ2V0T3JpZ2luLmhvcml6b250YWwucmVwbGFjZSgnbWlkZGxlJywgJ2NlbnRlcicpO1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB6SW5kZXg6IG11aVRoZW1lLnpJbmRleC5wb3BvdmVyLFxuICAgICAgb3BhY2l0eTogb3BlbiA/IDEgOiAwLFxuICAgICAgdHJhbnNmb3JtOiBvcGVuID8gJ3NjYWxlWSgxKScgOiAnc2NhbGVZKDApJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogaG9yaXpvbnRhbCArICcgJyArIHRhcmdldE9yaWdpbi52ZXJ0aWNhbCxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsIFsndHJhbnNmb3JtJywgJ29wYWNpdHknXSksXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogbmV4dFByb3BzLm9wZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgekRlcHRoID0gX3Byb3BzLnpEZXB0aDtcblxuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpLFxuICAgICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge30sXG4gIHpEZXB0aDogMVxufTtcblBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB0YXJnZXRPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLmlzUmVxdWlyZWQsXG4gIHpEZXB0aDogX3Byb3BUeXBlczQuZGVmYXVsdC56RGVwdGhcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvUG9wb3Zlci9Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU3ViaGVhZGVyID0gZnVuY3Rpb24gU3ViaGVhZGVyKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgaW5zZXQgPSBwcm9wcy5pbnNldCxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKHByb3BzLCBbJ2NoaWxkcmVuJywgJ2luc2V0JywgJ3N0eWxlJ10pO1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgcHJlcGFyZVN0eWxlcyA9IF9jb250ZXh0JG11aVRoZW1lLnByZXBhcmVTdHlsZXMsXG4gICAgICBzdWJoZWFkZXIgPSBfY29udGV4dCRtdWlUaGVtZS5zdWJoZWFkZXI7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgY29sb3I6IHN1YmhlYWRlci5jb2xvcixcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIGZvbnRXZWlnaHQ6IHN1YmhlYWRlci5mb250V2VpZ2h0LFxuICAgICAgbGluZUhlaWdodDogJzQ4cHgnLFxuICAgICAgcGFkZGluZ0xlZnQ6IGluc2V0ID8gNzIgOiAxNixcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9KSxcbiAgICBjaGlsZHJlblxuICApO1xufTtcblxuU3ViaGVhZGVyLm11aU5hbWUgPSAnU3ViaGVhZGVyJztcblxuU3ViaGVhZGVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIE5vZGUgdGhhdCB3aWxsIGJlIHBsYWNlZCBpbnNpZGUgdGhlIGBTdWJoZWFkZXJgLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBgU3ViaGVhZGVyYCB3aWxsIGJlIGluZGVudGVkLlxuICAgKi9cbiAgaW5zZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuU3ViaGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5zZXQ6IGZhbHNlXG59O1xuXG5TdWJoZWFkZXIuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3ViaGVhZGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9TdWJoZWFkZXIvU3ViaGVhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0OTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1N1YmhlYWRlciA9IHJlcXVpcmUoJy4vU3ViaGVhZGVyJyk7XG5cbnZhciBfU3ViaGVhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N1YmhlYWRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9TdWJoZWFkZXIyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1N1YmhlYWRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU3ZnSWNvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFN2Z0ljb24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN2Z0ljb24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgU3ZnSWNvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBTdmdJY29uLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShTdmdJY29uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcmVkOiBmYWxzZVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogZmFsc2UgfSk7XG4gICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogdHJ1ZSB9KTtcbiAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFN2Z0ljb24sIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY29sb3IgPSBfcHJvcHMuY29sb3IsXG4gICAgICAgICAgaG92ZXJDb2xvciA9IF9wcm9wcy5ob3ZlckNvbG9yLFxuICAgICAgICAgIG9uTW91c2VFbnRlciA9IF9wcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlID0gX3Byb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB2aWV3Qm94ID0gX3Byb3BzLnZpZXdCb3gsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnY2hpbGRyZW4nLCAnY29sb3InLCAnaG92ZXJDb2xvcicsICdvbk1vdXNlRW50ZXInLCAnb25Nb3VzZUxlYXZlJywgJ3N0eWxlJywgJ3ZpZXdCb3gnXSk7XG4gICAgICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgc3ZnSWNvbiA9IF9jb250ZXh0JG11aVRoZW1lLnN2Z0ljb24sXG4gICAgICAgICAgcHJlcGFyZVN0eWxlcyA9IF9jb250ZXh0JG11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIG9mZkNvbG9yID0gY29sb3IgPyBjb2xvciA6ICdjdXJyZW50Q29sb3InO1xuICAgICAgdmFyIG9uQ29sb3IgPSBob3ZlckNvbG9yID8gaG92ZXJDb2xvciA6IG9mZkNvbG9yO1xuXG4gICAgICB2YXIgbWVyZ2VkU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGNvbG9yOiBzdmdJY29uLmNvbG9yLFxuICAgICAgICBmaWxsOiB0aGlzLnN0YXRlLmhvdmVyZWQgPyBvbkNvbG9yIDogb2ZmQ29sb3IsXG4gICAgICAgIGhlaWdodDogMjQsXG4gICAgICAgIHdpZHRoOiAyNCxcbiAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3N2ZycsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMobWVyZ2VkU3R5bGVzKSxcbiAgICAgICAgICB2aWV3Qm94OiB2aWV3Qm94XG4gICAgICAgIH0pLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN2Z0ljb247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5TdmdJY29uLm11aU5hbWUgPSAnU3ZnSWNvbic7XG5TdmdJY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7fSxcbiAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7fSxcbiAgdmlld0JveDogJzAgMCAyNCAyNCdcbn07XG5TdmdJY29uLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5TdmdJY29uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEVsZW1lbnRzIHBhc3NlZCBpbnRvIHRoZSBTVkcgSWNvbi5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBmaWxsIGNvbG9yIG9mIHRoZSBzdmcgaWNvbi5cbiAgICogSWYgbm90IHNwZWNpZmllZCwgdGhpcyBjb21wb25lbnQgd2lsbCBkZWZhdWx0XG4gICAqIHRvIG11aVRoZW1lLnBhbGV0dGUudGV4dENvbG9yLlxuICAgKi9cbiAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgaWNvbiBjb2xvciB3aGVuIHRoZSBtb3VzZSBob3ZlcnMgb3ZlciB0aGUgaWNvbi5cbiAgICovXG4gIGhvdmVyQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byByZWRlZmluZSB3aGF0IHRoZSBjb29yZGluYXRlc1xuICAgKiB3aXRob3V0IHVuaXRzIG1lYW4gaW5zaWRlIGFuIHN2ZyBlbGVtZW50LiBGb3IgZXhhbXBsZSxcbiAgICogaWYgdGhlIFNWRyBlbGVtZW50IGlzIDUwMCAod2lkdGgpIGJ5IDIwMCAoaGVpZ2h0KSwgYW5kIHlvdVxuICAgKiBwYXNzIHZpZXdCb3g9XCIwIDAgNTAgMjBcIiwgdGhpcyBtZWFucyB0aGF0IHRoZSBjb29yZGluYXRlcyBpbnNpZGVcbiAgICogdGhlIHN2ZyB3aWxsIGdvIGZyb20gdGhlIHRvcCBsZWZ0IGNvcm5lciAoMCwwKSB0byBib3R0b20gcmlnaHQgKDUwLDIwKVxuICAgKiBhbmQgZWFjaCB1bml0IHdpbGwgYmUgd29ydGggMTBweC5cbiAgICovXG4gIHZpZXdCb3g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBTdmdJY29uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9TdmdJY29uL1N2Z0ljb24uanNcbi8vIG1vZHVsZSBpZCA9IDQ5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqICBCZWZvcmVBZnRlcldyYXBwZXJcbiAqICAgIEFuIGFsdGVybmF0aXZlIGZvciB0aGUgOjpiZWZvcmUgYW5kIDo6YWZ0ZXIgY3NzIHBzZXVkby1lbGVtZW50cyBmb3JcbiAqICAgIGNvbXBvbmVudHMgd2hvc2Ugc3R5bGVzIGFyZSBkZWZpbmVkIGluIGphdmFzY3JpcHQgaW5zdGVhZCBvZiBjc3MuXG4gKlxuICogIFVzYWdlOiBGb3IgdGhlIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFwcGx5IGJlZm9yZSBhbmQgYWZ0ZXIgZWxlbWVudHMgdG8sXG4gKiAgICB3cmFwIGl0cyBjaGlsZHJlbiB3aXRoIEJlZm9yZUFmdGVyV3JhcHBlci4gRm9yIGV4YW1wbGU6XG4gKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlcj5cbiAqICA8UGFwZXI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IC8vIFNlZSBub3RpY2VcbiAqICAgIDxCZWZvcmVBZnRlcldyYXBwZXI+ICAgICAgICByZW5kZXJzICAgICAgICAgPGRpdi8+IC8vIGJlZm9yZSBlbGVtZW50XG4gKiAgICAgIFtjaGlsZHJlbiBvZiBwYXBlcl0gICAgICAgLS0tLS0tPiAgICAgICAgIFtjaGlsZHJlbiBvZiBwYXBlcl1cbiAqICAgIDwvQmVmb3JlQWZ0ZXJXcmFwcGVyPiAgICAgICAgICAgICAgICAgICAgICAgPGRpdi8+IC8vIGFmdGVyIGVsZW1lbnRcbiAqICA8L1BhcGVyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gKlxuICogIE5vdGljZTogTm90aWNlIHRoYXQgdGhpcyBkaXYgYnVuZGxlcyB0b2dldGhlciBvdXIgZWxlbWVudHMuIElmIHRoZSBlbGVtZW50XG4gKiAgICB0aGF0IHdlIHdhbnQgdG8gYXBwbHkgYmVmb3JlIGFuZCBhZnRlciBlbGVtZW50cyBpcyBhIEhUTUwgdGFnIChpLmUuIGFcbiAqICAgIGRpdiwgcCwgb3IgYnV0dG9uIHRhZyksIHdlIGNhbiBhdm9pZCB0aGlzIGV4dHJhIG5lc3RpbmcgYnkgcGFzc2luZyB1c2luZ1xuICogICAgdGhlIEJlZm9yZUFmdGVyV3JhcHBlciBpbiBwbGFjZSBvZiBzYWlkIHRhZyBsaWtlIHNvOlxuICpcbiAqICA8cD5cbiAqICAgIDxCZWZvcmVBZnRlcldyYXBwZXI+ICAgZG8gdGhpcyBpbnN0ZWFkICAgPEJlZm9yZUFmdGVyV3JhcHBlciBlbGVtZW50VHlwZT0ncCc+XG4gKiAgICAgIFtjaGlsZHJlbiBvZiBwXSAgICAgICAgICAtLS0tLS0+ICAgICAgICAgW2NoaWxkcmVuIG9mIHBdXG4gKiAgICA8L0JlZm9yZUFmdGVyV3JhcHBlcj4gICAgICAgICAgICAgICAgICAgIDwvQmVmb3JlQWZ0ZXJXcmFwcGVyPlxuICogIDwvcD5cbiAqXG4gKiAgQmVmb3JlQWZ0ZXJXcmFwcGVyIGZlYXR1cmVzIHNwcmVhZCBmdW5jdGlvbmFsaXR5LiBUaGlzIG1lYW5zIHRoYXQgd2UgY2FuXG4gKiAgcGFzcyBIVE1MIHRhZyBwcm9wZXJ0aWVzIGRpcmVjdGx5IGludG8gdGhlIEJlZm9yZUFmdGVyV3JhcHBlciB0YWcuXG4gKlxuICogIFdoZW4gdXNpbmcgQmVmb3JlQWZ0ZXJXcmFwcGVyLCBlbnN1cmUgdGhhdCB0aGUgcGFyZW50IG9mIHRoZSBiZWZvcmVFbGVtZW50XG4gKiAgYW5kIGFmdGVyRWxlbWVudCBoYXZlIGEgZGVmaW5lZCBzdHlsZSBwb3NpdGlvbi5cbiAqL1xuXG52YXIgc3R5bGVzID0ge1xuICBib3g6IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG59O1xuXG52YXIgQmVmb3JlQWZ0ZXJXcmFwcGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoQmVmb3JlQWZ0ZXJXcmFwcGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCZWZvcmVBZnRlcldyYXBwZXIoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQmVmb3JlQWZ0ZXJXcmFwcGVyKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoQmVmb3JlQWZ0ZXJXcmFwcGVyLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShCZWZvcmVBZnRlcldyYXBwZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEJlZm9yZUFmdGVyV3JhcHBlciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBiZWZvcmVTdHlsZSA9IF9wcm9wcy5iZWZvcmVTdHlsZSxcbiAgICAgICAgICBhZnRlclN0eWxlID0gX3Byb3BzLmFmdGVyU3R5bGUsXG4gICAgICAgICAgYmVmb3JlRWxlbWVudFR5cGUgPSBfcHJvcHMuYmVmb3JlRWxlbWVudFR5cGUsXG4gICAgICAgICAgYWZ0ZXJFbGVtZW50VHlwZSA9IF9wcm9wcy5hZnRlckVsZW1lbnRUeXBlLFxuICAgICAgICAgIGVsZW1lbnRUeXBlID0gX3Byb3BzLmVsZW1lbnRUeXBlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2JlZm9yZVN0eWxlJywgJ2FmdGVyU3R5bGUnLCAnYmVmb3JlRWxlbWVudFR5cGUnLCAnYWZ0ZXJFbGVtZW50VHlwZScsICdlbGVtZW50VHlwZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIGJlZm9yZUVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICB2YXIgYWZ0ZXJFbGVtZW50ID0gdm9pZCAwO1xuXG4gICAgICBpZiAoYmVmb3JlU3R5bGUpIHtcbiAgICAgICAgYmVmb3JlRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuYmVmb3JlRWxlbWVudFR5cGUsIHtcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5ib3gsIGJlZm9yZVN0eWxlKSksXG4gICAgICAgICAga2V5OiAnOjpiZWZvcmUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWZ0ZXJTdHlsZSkge1xuICAgICAgICBhZnRlckVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmFmdGVyRWxlbWVudFR5cGUsIHtcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5ib3gsIGFmdGVyU3R5bGUpKSxcbiAgICAgICAgICBrZXk6ICc6OmFmdGVyJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkcmVuID0gW2JlZm9yZUVsZW1lbnQsIHRoaXMucHJvcHMuY2hpbGRyZW4sIGFmdGVyRWxlbWVudF07XG5cbiAgICAgIHZhciBwcm9wcyA9IG90aGVyO1xuICAgICAgcHJvcHMuc3R5bGUgPSBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdGhpcy5wcm9wcy5zdHlsZSkpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5lbGVtZW50VHlwZSwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEJlZm9yZUFmdGVyV3JhcHBlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkJlZm9yZUFmdGVyV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGJlZm9yZUVsZW1lbnRUeXBlOiAnZGl2JyxcbiAgYWZ0ZXJFbGVtZW50VHlwZTogJ2RpdicsXG4gIGVsZW1lbnRUeXBlOiAnZGl2J1xufTtcbkJlZm9yZUFmdGVyV3JhcHBlci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuQmVmb3JlQWZ0ZXJXcmFwcGVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgYWZ0ZXJFbGVtZW50VHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFmdGVyU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBiZWZvcmVFbGVtZW50VHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGJlZm9yZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgZWxlbWVudFR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gQmVmb3JlQWZ0ZXJXcmFwcGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9CZWZvcmVBZnRlcldyYXBwZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdyZWNvbXBvc2Uvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfYXV0b1ByZWZpeCA9IHJlcXVpcmUoJy4uL3V0aWxzL2F1dG9QcmVmaXgnKTtcblxudmFyIF9hdXRvUHJlZml4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9QcmVmaXgpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQ2lyY2xlUmlwcGxlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoQ2lyY2xlUmlwcGxlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDaXJjbGVSaXBwbGUoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQ2lyY2xlUmlwcGxlKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoQ2lyY2xlUmlwcGxlLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShDaXJjbGVSaXBwbGUpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKENpcmNsZVJpcHBsZSwgW3tcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5lbnRlclRpbWVyKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxlYXZlVGltZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsQXBwZWFyKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVBbmltYXRpb24oY2FsbGJhY2spO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxFbnRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxFbnRlcihjYWxsYmFjaykge1xuICAgICAgdGhpcy5pbml0aWFsaXplQW5pbWF0aW9uKGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRBcHBlYXIoKSB7XG4gICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRFbnRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZEVudGVyKCkge1xuICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbExlYXZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbExlYXZlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykuc3R5bGU7XG4gICAgICBzdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIC8vIElmIHRoZSBhbmltYXRpb24gaXMgYWJvcnRlZCwgcmVtb3ZlIGZyb20gdGhlIERPTSBpbW1lZGlhdGVseVxuICAgICAgdmFyIHJlbW92ZUFmdGVyID0gdGhpcy5wcm9wcy5hYm9ydGVkID8gMCA6IDIwMDA7XG4gICAgICB0aGlzLmVudGVyVGltZXIgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCByZW1vdmVBZnRlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYW5pbWF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykuc3R5bGU7XG4gICAgICB2YXIgdHJhbnNpdGlvblZhbHVlID0gX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzJzJywgJ29wYWNpdHknKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMXMnLCAndHJhbnNmb3JtJyk7XG4gICAgICBfYXV0b1ByZWZpeDIuZGVmYXVsdC5zZXQoc3R5bGUsICd0cmFuc2l0aW9uJywgdHJhbnNpdGlvblZhbHVlKTtcbiAgICAgIF9hdXRvUHJlZml4Mi5kZWZhdWx0LnNldChzdHlsZSwgJ3RyYW5zZm9ybScsICdzY2FsZSgxKScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2luaXRpYWxpemVBbmltYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsaXplQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3R5bGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcykuc3R5bGU7XG4gICAgICBzdHlsZS5vcGFjaXR5ID0gdGhpcy5wcm9wcy5vcGFjaXR5O1xuICAgICAgX2F1dG9QcmVmaXgyLmRlZmF1bHQuc2V0KHN0eWxlLCAndHJhbnNmb3JtJywgJ3NjYWxlKDApJyk7XG4gICAgICB0aGlzLmxlYXZlVGltZXIgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhYm9ydGVkID0gX3Byb3BzLmFib3J0ZWQsXG4gICAgICAgICAgY29sb3IgPSBfcHJvcHMuY29sb3IsXG4gICAgICAgICAgb3BhY2l0eSA9IF9wcm9wcy5vcGFjaXR5LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHRvdWNoR2VuZXJhdGVkID0gX3Byb3BzLnRvdWNoR2VuZXJhdGVkLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2Fib3J0ZWQnLCAnY29sb3InLCAnb3BhY2l0eScsICdzdHlsZScsICd0b3VjaEdlbmVyYXRlZCddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIG1lcmdlZFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMobWVyZ2VkU3R5bGVzKSB9KSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDaXJjbGVSaXBwbGU7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5DaXJjbGVSaXBwbGUuZGVmYXVsdFByb3BzID0ge1xuICBvcGFjaXR5OiAwLjEsXG4gIGFib3J0ZWQ6IGZhbHNlXG59O1xuQ2lyY2xlUmlwcGxlLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5DaXJjbGVSaXBwbGUucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBhYm9ydGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3BhY2l0eTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdG91Y2hHZW5lcmF0ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gQ2lyY2xlUmlwcGxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9DaXJjbGVSaXBwbGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfQmVmb3JlQWZ0ZXJXcmFwcGVyID0gcmVxdWlyZSgnLi9CZWZvcmVBZnRlcldyYXBwZXInKTtcblxudmFyIF9CZWZvcmVBZnRlcldyYXBwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmVmb3JlQWZ0ZXJXcmFwcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHN0eWxlcyA9IHtcbiAgYmVmb3JlOiB7XG4gICAgY29udGVudDogXCInICdcIixcbiAgICBkaXNwbGF5OiAndGFibGUnXG4gIH0sXG4gIGFmdGVyOiB7XG4gICAgY29udGVudDogXCInICdcIixcbiAgICBjbGVhcjogJ2JvdGgnLFxuICAgIGRpc3BsYXk6ICd0YWJsZSdcbiAgfVxufTtcblxudmFyIENsZWFyRml4ID0gZnVuY3Rpb24gQ2xlYXJGaXgoX3JlZikge1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcmVmLCBbJ3N0eWxlJywgJ2NoaWxkcmVuJ10pO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX0JlZm9yZUFmdGVyV3JhcHBlcjIuZGVmYXVsdCxcbiAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgYmVmb3JlU3R5bGU6IHN0eWxlcy5iZWZvcmUsXG4gICAgICBhZnRlclN0eWxlOiBzdHlsZXMuYWZ0ZXIsXG4gICAgICBzdHlsZTogc3R5bGVcbiAgICB9KSxcbiAgICBjaGlsZHJlblxuICApO1xufTtcblxuQ2xlYXJGaXgubXVpTmFtZSA9ICdDbGVhckZpeCc7XG5cbkNsZWFyRml4LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2xlYXJGaXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL0NsZWFyRml4LmpzXG4vLyBtb2R1bGUgaWQgPSA0OTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2V2ZW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2V2ZW50cycpO1xuXG52YXIgX2V2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXNEZXNjZW5kYW50ID0gZnVuY3Rpb24gaXNEZXNjZW5kYW50KGVsLCB0YXJnZXQpIHtcbiAgaWYgKHRhcmdldCAhPT0gbnVsbCkge1xuICAgIHJldHVybiBlbCA9PT0gdGFyZ2V0IHx8IGlzRGVzY2VuZGFudChlbCwgdGFyZ2V0LnBhcmVudE5vZGUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBjbGlja0F3YXlFdmVudHMgPSBbJ21vdXNldXAnLCAndG91Y2hlbmQnXTtcbnZhciBiaW5kID0gZnVuY3Rpb24gYmluZChjYWxsYmFjaykge1xuICByZXR1cm4gY2xpY2tBd2F5RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIF9ldmVudHMyLmRlZmF1bHQub24oZG9jdW1lbnQsIGV2ZW50LCBjYWxsYmFjayk7XG4gIH0pO1xufTtcbnZhciB1bmJpbmQgPSBmdW5jdGlvbiB1bmJpbmQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGNsaWNrQXdheUV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBfZXZlbnRzMi5kZWZhdWx0Lm9mZihkb2N1bWVudCwgZXZlbnQsIGNhbGxiYWNrKTtcbiAgfSk7XG59O1xuXG52YXIgQ2xpY2tBd2F5TGlzdGVuZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShDbGlja0F3YXlMaXN0ZW5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2xpY2tBd2F5TGlzdGVuZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQ2xpY2tBd2F5TGlzdGVuZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gQ2xpY2tBd2F5TGlzdGVuZXIuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKENsaWNrQXdheUxpc3RlbmVyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGFuZGxlQ2xpY2tBd2F5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElFMTEgc3VwcG9ydCwgd2hpY2ggdHJpZ2dlciB0aGUgaGFuZGxlQ2xpY2tBd2F5IGV2ZW4gYWZ0ZXIgdGhlIHVuYmluZFxuICAgICAgaWYgKF90aGlzLmlzQ3VycmVudGx5TW91bnRlZCkge1xuICAgICAgICB2YXIgZWwgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhaXNEZXNjZW5kYW50KGVsLCBldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25DbGlja0F3YXkoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKENsaWNrQXdheUxpc3RlbmVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmlzQ3VycmVudGx5TW91bnRlZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrQXdheSkge1xuICAgICAgICBiaW5kKHRoaXMuaGFuZGxlQ2xpY2tBd2F5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAocHJldlByb3BzLm9uQ2xpY2tBd2F5ICE9PSB0aGlzLnByb3BzLm9uQ2xpY2tBd2F5KSB7XG4gICAgICAgIHVuYmluZCh0aGlzLmhhbmRsZUNsaWNrQXdheSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tBd2F5KSB7XG4gICAgICAgICAgYmluZCh0aGlzLmhhbmRsZUNsaWNrQXdheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5pc0N1cnJlbnRseU1vdW50ZWQgPSBmYWxzZTtcbiAgICAgIHVuYmluZCh0aGlzLmhhbmRsZUNsaWNrQXdheSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDbGlja0F3YXlMaXN0ZW5lcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkNsaWNrQXdheUxpc3RlbmVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgb25DbGlja0F3YXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gQ2xpY2tBd2F5TGlzdGVuZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL0NsaWNrQXdheUxpc3RlbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0OTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX2F1dG9QcmVmaXggPSByZXF1aXJlKCcuLi91dGlscy9hdXRvUHJlZml4Jyk7XG5cbnZhciBfYXV0b1ByZWZpeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvUHJlZml4KTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9TY2FsZUluID0gcmVxdWlyZSgnLi9TY2FsZUluJyk7XG5cbnZhciBfU2NhbGVJbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TY2FsZUluKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHB1bHNhdGVEdXJhdGlvbiA9IDc1MDtcblxudmFyIEZvY3VzUmlwcGxlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRm9jdXNSaXBwbGUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZvY3VzUmlwcGxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEZvY3VzUmlwcGxlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEZvY3VzUmlwcGxlLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShGb2N1c1JpcHBsZSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnB1bHNhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5uZXJDaXJjbGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMucmVmcy5pbm5lckNpcmNsZSk7XG4gICAgICBpZiAoIWlubmVyQ2lyY2xlKSByZXR1cm47XG5cbiAgICAgIHZhciBzdGFydFNjYWxlID0gJ3NjYWxlKDEpJztcbiAgICAgIHZhciBlbmRTY2FsZSA9ICdzY2FsZSgwLjg1KSc7XG4gICAgICB2YXIgY3VycmVudFNjYWxlID0gaW5uZXJDaXJjbGUuc3R5bGUudHJhbnNmb3JtIHx8IHN0YXJ0U2NhbGU7XG4gICAgICB2YXIgbmV4dFNjYWxlID0gY3VycmVudFNjYWxlID09PSBzdGFydFNjYWxlID8gZW5kU2NhbGUgOiBzdGFydFNjYWxlO1xuXG4gICAgICBfYXV0b1ByZWZpeDIuZGVmYXVsdC5zZXQoaW5uZXJDaXJjbGUuc3R5bGUsICd0cmFuc2Zvcm0nLCBuZXh0U2NhbGUpO1xuICAgICAgX3RoaXMudGltZW91dCA9IHNldFRpbWVvdXQoX3RoaXMucHVsc2F0ZSwgcHVsc2F0ZUR1cmF0aW9uKTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRm9jdXNSaXBwbGUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcbiAgICAgICAgdGhpcy5zZXRSaXBwbGVTaXplKCk7XG4gICAgICAgIHRoaXMucHVsc2F0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvdykge1xuICAgICAgICB0aGlzLnNldFJpcHBsZVNpemUoKTtcbiAgICAgICAgdGhpcy5wdWxzYXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy50aW1lb3V0KSBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0UmlwcGxlRWxlbWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJpcHBsZUVsZW1lbnQocHJvcHMpIHtcbiAgICAgIHZhciBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgICAgIGlubmVyU3R5bGUgPSBwcm9wcy5pbm5lclN0eWxlLFxuICAgICAgICAgIG9wYWNpdHkgPSBwcm9wcy5vcGFjaXR5O1xuICAgICAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLFxuICAgICAgICAgIHByZXBhcmVTdHlsZXMgPSBfY29udGV4dCRtdWlUaGVtZS5wcmVwYXJlU3R5bGVzLFxuICAgICAgICAgIHJpcHBsZSA9IF9jb250ZXh0JG11aVRoZW1lLnJpcHBsZTtcblxuXG4gICAgICB2YXIgaW5uZXJTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgIG9wYWNpdHk6IG9wYWNpdHkgPyBvcGFjaXR5IDogMC4xNixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvciB8fCByaXBwbGUuY29sb3IsXG4gICAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KHB1bHNhdGVEdXJhdGlvbiArICdtcycsICd0cmFuc2Zvcm0nLCBudWxsLCBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZUluT3V0RnVuY3Rpb24pXG4gICAgICB9LCBpbm5lclN0eWxlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHJlZjogJ2lubmVyQ2lyY2xlJywgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBpbm5lclN0eWxlcykpIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFJpcHBsZVNpemUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSaXBwbGVTaXplKCkge1xuICAgICAgdmFyIGVsID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbm5lckNpcmNsZSk7XG4gICAgICB2YXIgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgdmFyIHdpZHRoID0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICB2YXIgc2l6ZSA9IE1hdGgubWF4KGhlaWdodCwgd2lkdGgpO1xuXG4gICAgICB2YXIgb2xkVG9wID0gMDtcbiAgICAgIC8vIEZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgZW5kc1dpdGgoKVxuICAgICAgaWYgKGVsLnN0eWxlLnRvcC5pbmRleE9mKCdweCcsIGVsLnN0eWxlLnRvcC5sZW5ndGggLSAyKSAhPT0gLTEpIHtcbiAgICAgICAgb2xkVG9wID0gcGFyc2VJbnQoZWwuc3R5bGUudG9wKTtcbiAgICAgIH1cbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnO1xuICAgICAgZWwuc3R5bGUudG9wID0gaGVpZ2h0IC8gMiAtIHNpemUgLyAyICsgb2xkVG9wICsgJ3B4JztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzaG93ID0gX3Byb3BzLnNob3csXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG5cblxuICAgICAgdmFyIG1lcmdlZFJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSwgc3R5bGUpO1xuXG4gICAgICB2YXIgcmlwcGxlID0gc2hvdyA/IHRoaXMuZ2V0UmlwcGxlRWxlbWVudCh0aGlzLnByb3BzKSA6IG51bGw7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1NjYWxlSW4yLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBtYXhTY2FsZTogMC44NSxcbiAgICAgICAgICBzdHlsZTogbWVyZ2VkUm9vdFN0eWxlc1xuICAgICAgICB9LFxuICAgICAgICByaXBwbGVcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGb2N1c1JpcHBsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkZvY3VzUmlwcGxlLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Gb2N1c1JpcHBsZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaW5uZXJTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIG9wYWNpdHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRm9jdXNSaXBwbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL0ZvY3VzUmlwcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfZG9tID0gcmVxdWlyZSgnLi4vdXRpbHMvZG9tJyk7XG5cbnZhciBfZG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIGhlYXZpbHkgaW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0toYW4vcmVhY3QtY29tcG9uZW50cy9ibG9iL21hc3Rlci9qcy9sYXllcmVkLWNvbXBvbmVudC1taXhpbi5qc3hcbnZhciBSZW5kZXJUb0xheWVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUmVuZGVyVG9MYXllciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVuZGVyVG9MYXllcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBSZW5kZXJUb0xheWVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFJlbmRlclRvTGF5ZXIuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFJlbmRlclRvTGF5ZXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5vbkNsaWNrQXdheSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIV90aGlzLnByb3BzLmNvbXBvbmVudENsaWNrQXdheSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghX3RoaXMucHJvcHMub3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBlbCA9IF90aGlzLmxheWVyO1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gZWwgJiYgZXZlbnQudGFyZ2V0ID09PSB3aW5kb3cgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIV9kb20yLmRlZmF1bHQuaXNEZXNjZW5kYW50KGVsLCBldmVudC50YXJnZXQpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLmNvbXBvbmVudENsaWNrQXdheShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFJlbmRlclRvTGF5ZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucmVuZGVyTGF5ZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLnJlbmRlckxheWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5yZW5kZXJMYXllcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldExheWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TGF5ZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXllcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bnJlbmRlckxheWVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5yZW5kZXJMYXllcigpIHtcbiAgICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnVzZUxheWVyRm9yQ2xpY2tBd2F5KSB7XG4gICAgICAgIHRoaXMubGF5ZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLmxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2tBd2F5KTtcbiAgICAgICAgdGhpcy5sYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0F3YXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2tBd2F5KTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrQXdheSk7XG4gICAgICB9XG5cbiAgICAgICgwLCBfcmVhY3REb20udW5tb3VudENvbXBvbmVudEF0Tm9kZSkodGhpcy5sYXllcik7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubGF5ZXIpO1xuICAgICAgdGhpcy5sYXllciA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnkgY2FsbGluZyB0aGlzIG1ldGhvZCBpbiBjb21wb25lbnREaWRNb3VudCgpIGFuZFxuICAgICAqIGNvbXBvbmVudERpZFVwZGF0ZSgpLCB5b3UncmUgZWZmZWN0aXZlbHkgY3JlYXRpbmcgYSBcIndvcm1ob2xlXCIgdGhhdFxuICAgICAqIGZ1bm5lbHMgUmVhY3QncyBoaWVyYXJjaGljYWwgdXBkYXRlcyB0aHJvdWdoIHRvIGEgRE9NIG5vZGUgb24gYW5cbiAgICAgKiBlbnRpcmVseSBkaWZmZXJlbnQgcGFydCBvZiB0aGUgcGFnZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyTGF5ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJMYXllcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBvcGVuID0gX3Byb3BzLm9wZW4sXG4gICAgICAgICAgcmVuZGVyID0gX3Byb3BzLnJlbmRlcjtcblxuXG4gICAgICBpZiAob3Blbikge1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICB0aGlzLmxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheWVyKTtcblxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnVzZUxheWVyRm9yQ2xpY2tBd2F5KSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2tBd2F5KTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tBd2F5KTtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgdGhpcy5sYXllci5zdHlsZS50b3AgPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXllci5zdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXllci5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIuc3R5bGUucmlnaHQgPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXllci5zdHlsZS56SW5kZXggPSB0aGlzLmNvbnRleHQubXVpVGhlbWUuekluZGV4LmxheWVyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBfdGhpczIub25DbGlja0F3YXkpO1xuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpczIub25DbGlja0F3YXkpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxheWVyRWxlbWVudCA9IHJlbmRlcigpO1xuICAgICAgICB0aGlzLmxheWVyRWxlbWVudCA9ICgwLCBfcmVhY3REb20udW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIpKHRoaXMsIGxheWVyRWxlbWVudCwgdGhpcy5sYXllcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVucmVuZGVyTGF5ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFJlbmRlclRvTGF5ZXI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SZW5kZXJUb0xheWVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdXNlTGF5ZXJGb3JDbGlja0F3YXk6IHRydWVcbn07XG5SZW5kZXJUb0xheWVyLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5SZW5kZXJUb0xheWVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY29tcG9uZW50Q2xpY2tBd2F5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICByZW5kZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICB1c2VMYXllckZvckNsaWNrQXdheTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJUb0xheWVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9SZW5kZXJUb0xheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0OTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAnKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbkdyb3VwKTtcblxudmFyIF9TY2FsZUluQ2hpbGQgPSByZXF1aXJlKCcuL1NjYWxlSW5DaGlsZCcpO1xuXG52YXIgX1NjYWxlSW5DaGlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TY2FsZUluQ2hpbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU2NhbGVJbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFNjYWxlSW4sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNjYWxlSW4oKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgU2NhbGVJbik7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKFNjYWxlSW4uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFNjYWxlSW4pKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFNjYWxlSW4sIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2hpbGRTdHlsZSA9IF9wcm9wcy5jaGlsZFN0eWxlLFxuICAgICAgICAgIGVudGVyRGVsYXkgPSBfcHJvcHMuZW50ZXJEZWxheSxcbiAgICAgICAgICBtYXhTY2FsZSA9IF9wcm9wcy5tYXhTY2FsZSxcbiAgICAgICAgICBtaW5TY2FsZSA9IF9wcm9wcy5taW5TY2FsZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGlsZHJlbicsICdjaGlsZFN0eWxlJywgJ2VudGVyRGVsYXknLCAnbWF4U2NhbGUnLCAnbWluU2NhbGUnLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG5cbiAgICAgIHZhciBtZXJnZWRSb290U3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgfSwgc3R5bGUpO1xuXG4gICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9TY2FsZUluQ2hpbGQyLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBjaGlsZC5rZXksXG4gICAgICAgICAgICBlbnRlckRlbGF5OiBlbnRlckRlbGF5LFxuICAgICAgICAgICAgbWF4U2NhbGU6IG1heFNjYWxlLFxuICAgICAgICAgICAgbWluU2NhbGU6IG1pblNjYWxlLFxuICAgICAgICAgICAgc3R5bGU6IGNoaWxkU3R5bGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfVHJhbnNpdGlvbkdyb3VwMi5kZWZhdWx0LFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKG1lcmdlZFJvb3RTdHlsZXMpLFxuICAgICAgICAgIGNvbXBvbmVudDogJ2RpdidcbiAgICAgICAgfSksXG4gICAgICAgIG5ld0NoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU2NhbGVJbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblNjYWxlSW4uZGVmYXVsdFByb3BzID0ge1xuICBlbnRlckRlbGF5OiAwXG59O1xuU2NhbGVJbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuU2NhbGVJbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBlbnRlckRlbGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbWF4U2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBtaW5TY2FsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBTY2FsZUluO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9TY2FsZUluLmpzXG4vLyBtb2R1bGUgaWQgPSA1MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfYXV0b1ByZWZpeCA9IHJlcXVpcmUoJy4uL3V0aWxzL2F1dG9QcmVmaXgnKTtcblxudmFyIF9hdXRvUHJlZml4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9QcmVmaXgpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU2NhbGVJbkNoaWxkID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoU2NhbGVJbkNoaWxkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTY2FsZUluQ2hpbGQoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgU2NhbGVJbkNoaWxkKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoU2NhbGVJbkNoaWxkLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShTY2FsZUluQ2hpbGQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFNjYWxlSW5DaGlsZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZW50ZXJUaW1lcik7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5sZWF2ZVRpbWVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsQXBwZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEFwcGVhcihjYWxsYmFjaykge1xuICAgICAgdGhpcy5pbml0aWFsaXplQW5pbWF0aW9uKGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsRW50ZXIoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZUFuaW1hdGlvbihjYWxsYmFjayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkQXBwZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkQXBwZWFyKCkge1xuICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRFbnRlcigpIHtcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxMZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShjYWxsYmFjaykge1xuICAgICAgdmFyIHN0eWxlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpLnN0eWxlO1xuXG4gICAgICBzdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgX2F1dG9QcmVmaXgyLmRlZmF1bHQuc2V0KHN0eWxlLCAndHJhbnNmb3JtJywgJ3NjYWxlKCcgKyB0aGlzLnByb3BzLm1pblNjYWxlICsgJyknKTtcblxuICAgICAgdGhpcy5sZWF2ZVRpbWVyID0gc2V0VGltZW91dChjYWxsYmFjaywgNDUwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhbmltYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgIHZhciBzdHlsZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKS5zdHlsZTtcblxuICAgICAgc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgIF9hdXRvUHJlZml4Mi5kZWZhdWx0LnNldChzdHlsZSwgJ3RyYW5zZm9ybScsICdzY2FsZSgnICsgdGhpcy5wcm9wcy5tYXhTY2FsZSArICcpJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5pdGlhbGl6ZUFuaW1hdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRpYWxpemVBbmltYXRpb24oY2FsbGJhY2spIHtcbiAgICAgIHZhciBzdHlsZSA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKS5zdHlsZTtcblxuICAgICAgc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgIF9hdXRvUHJlZml4Mi5kZWZhdWx0LnNldChzdHlsZSwgJ3RyYW5zZm9ybScsICdzY2FsZSgwKScpO1xuXG4gICAgICB0aGlzLmVudGVyVGltZXIgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCB0aGlzLnByb3BzLmVudGVyRGVsYXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGVudGVyRGVsYXkgPSBfcHJvcHMuZW50ZXJEZWxheSxcbiAgICAgICAgICBtYXhTY2FsZSA9IF9wcm9wcy5tYXhTY2FsZSxcbiAgICAgICAgICBtaW5TY2FsZSA9IF9wcm9wcy5taW5TY2FsZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGlsZHJlbicsICdlbnRlckRlbGF5JywgJ21heFNjYWxlJywgJ21pblNjYWxlJywgJ3N0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuXG4gICAgICB2YXIgbWVyZ2VkUm9vdFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQobnVsbCwgWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddKVxuICAgICAgfSwgc3R5bGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhtZXJnZWRSb290U3R5bGVzKSB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTY2FsZUluQ2hpbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5TY2FsZUluQ2hpbGQuZGVmYXVsdFByb3BzID0ge1xuICBlbnRlckRlbGF5OiAwLFxuICBtYXhTY2FsZTogMSxcbiAgbWluU2NhbGU6IDBcbn07XG5TY2FsZUluQ2hpbGQuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblNjYWxlSW5DaGlsZC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGVudGVyRGVsYXk6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBtYXhTY2FsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIG1pblNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBTY2FsZUluQ2hpbGQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL1NjYWxlSW5DaGlsZC5qc1xuLy8gbW9kdWxlIGlkID0gNTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciB2ZXJ0aWNhbFBvc2l0aW9uID0gcHJvcHMudmVydGljYWxQb3NpdGlvbjtcbiAgdmFyIGhvcml6b250YWxQb3NpdGlvbiA9IHByb3BzLmhvcml6b250YWxQb3NpdGlvbjtcbiAgdmFyIHRvdWNoTWFyZ2luT2Zmc2V0ID0gcHJvcHMudG91Y2ggPyAxMCA6IDA7XG4gIHZhciB0b3VjaE9mZnNldFRvcCA9IHByb3BzLnRvdWNoID8gLTIwIDogLTEwO1xuICB2YXIgb2Zmc2V0ID0gdmVydGljYWxQb3NpdGlvbiA9PT0gJ2JvdHRvbScgPyAxNCArIHRvdWNoTWFyZ2luT2Zmc2V0IDogLTE0IC0gdG91Y2hNYXJnaW5PZmZzZXQ7XG5cbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIGJhc2VUaGVtZSA9IF9jb250ZXh0JG11aVRoZW1lLmJhc2VUaGVtZSxcbiAgICAgIHpJbmRleCA9IF9jb250ZXh0JG11aVRoZW1lLnpJbmRleCxcbiAgICAgIHRvb2x0aXAgPSBfY29udGV4dCRtdWlUaGVtZS50b29sdGlwLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX2NvbnRleHQkbXVpVGhlbWUuYm9yZGVyUmFkaXVzO1xuXG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGZvbnRGYW1pbHk6IGJhc2VUaGVtZS5mb250RmFtaWx5LFxuICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgICB6SW5kZXg6IHpJbmRleC50b29sdGlwLFxuICAgICAgY29sb3I6IHRvb2x0aXAuY29sb3IsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0b3A6IC0xMDAwMCxcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHJpZ2h0OiBob3Jpem9udGFsUG9zaXRpb24gPT09ICdsZWZ0JyA/IDEyIDogbnVsbCxcbiAgICAgIGxlZnQ6IGhvcml6b250YWxQb3NpdGlvbiA9PT0gJ2NlbnRlcicgPyAoc3RhdGUub2Zmc2V0V2lkdGggLSA0OCkgLyAyICogLTEgOiBob3Jpem9udGFsUG9zaXRpb24gPT09ICdyaWdodCcgPyAxMiA6IG51bGwsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMG1zJywgJ3RvcCcsICc0NTBtcycpICsgJywgJyArIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsICd0cmFuc2Zvcm0nLCAnMG1zJykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQ1MG1zJywgJ29wYWNpdHknLCAnMG1zJylcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfSxcbiAgICByaXBwbGU6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogaG9yaXpvbnRhbFBvc2l0aW9uID09PSAnY2VudGVyJyA/ICc1MCUnIDogaG9yaXpvbnRhbFBvc2l0aW9uID09PSAnbGVmdCcgPyAnMTAwJScgOiAnMCUnLFxuICAgICAgdG9wOiB2ZXJ0aWNhbFBvc2l0aW9uID09PSAnYm90dG9tJyA/IDAgOiAnMTAwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcwbXMnLCAnd2lkdGgnLCAnNDUwbXMnKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMG1zJywgJ2hlaWdodCcsICc0NTBtcycpICsgJywgJyArIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsICdiYWNrZ3JvdW5kQ29sb3InLCAnMG1zJylcbiAgICB9LFxuICAgIHJvb3RXaGVuU2hvd246IHtcbiAgICAgIHRvcDogdmVydGljYWxQb3NpdGlvbiA9PT0gJ3RvcCcgPyB0b3VjaE9mZnNldFRvcCA6IDM2LFxuICAgICAgb3BhY2l0eTogdG9vbHRpcC5vcGFjaXR5LFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDBweCwgJyArIG9mZnNldCArICdweCknLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzBtcycsICd0b3AnLCAnMG1zJykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQ1MG1zJywgJ3RyYW5zZm9ybScsICcwbXMnKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDUwbXMnLCAnb3BhY2l0eScsICcwbXMnKVxuICAgIH0sXG4gICAgcm9vdFdoZW5Ub3VjaGVkOiB7XG4gICAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgICAgbGluZUhlaWdodDogJzMycHgnLFxuICAgICAgcGFkZGluZzogJzAgMTZweCdcbiAgICB9LFxuICAgIHJpcHBsZVdoZW5TaG93bjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0b29sdGlwLnJpcHBsZUJhY2tncm91bmRDb2xvcixcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsICd3aWR0aCcsICcwbXMnKSArICcsICcgKyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDUwbXMnLCAnaGVpZ2h0JywgJzBtcycpICsgJywgJyArIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsICdiYWNrZ3JvdW5kQ29sb3InLCAnMG1zJylcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIFRvb2x0aXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShUb29sdGlwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUb29sdGlwKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFRvb2x0aXApO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gVG9vbHRpcC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVG9vbHRpcCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgb2Zmc2V0V2lkdGg6IG51bGxcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoVG9vbHRpcCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRSaXBwbGVTaXplKCk7XG4gICAgICB0aGlzLnNldFRvb2x0aXBQb3NpdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xuICAgICAgdGhpcy5zZXRUb29sdGlwUG9zaXRpb24oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLnNldFJpcHBsZVNpemUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRSaXBwbGVTaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmlwcGxlU2l6ZSgpIHtcbiAgICAgIHZhciByaXBwbGUgPSB0aGlzLnJlZnMucmlwcGxlO1xuICAgICAgdmFyIHRvb2x0aXAgPSB0aGlzLnJlZnMudG9vbHRpcDtcbiAgICAgIHZhciB0b29sdGlwV2lkdGggPSBwYXJzZUludCh0b29sdGlwLm9mZnNldFdpZHRoLCAxMCkgLyAodGhpcy5wcm9wcy5ob3Jpem9udGFsUG9zaXRpb24gPT09ICdjZW50ZXInID8gMiA6IDEpO1xuICAgICAgdmFyIHRvb2x0aXBIZWlnaHQgPSBwYXJzZUludCh0b29sdGlwLm9mZnNldEhlaWdodCwgMTApO1xuXG4gICAgICB2YXIgcmlwcGxlRGlhbWV0ZXIgPSBNYXRoLmNlaWwoTWF0aC5zcXJ0KE1hdGgucG93KHRvb2x0aXBIZWlnaHQsIDIpICsgTWF0aC5wb3codG9vbHRpcFdpZHRoLCAyKSkgKiAyKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcbiAgICAgICAgcmlwcGxlLnN0eWxlLmhlaWdodCA9IHJpcHBsZURpYW1ldGVyICsgJ3B4JztcbiAgICAgICAgcmlwcGxlLnN0eWxlLndpZHRoID0gcmlwcGxlRGlhbWV0ZXIgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmlwcGxlLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgIHJpcHBsZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRUb29sdGlwUG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRUb29sdGlwUG9zaXRpb24oKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb2Zmc2V0V2lkdGg6IHRoaXMucmVmcy50b29sdGlwLm9mZnNldFdpZHRoIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGhvcml6b250YWxQb3NpdGlvbiA9IF9wcm9wcy5ob3Jpem9udGFsUG9zaXRpb24sXG4gICAgICAgICAgbGFiZWwgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgICAgc2hvdyA9IF9wcm9wcy5zaG93LFxuICAgICAgICAgIHRvdWNoID0gX3Byb3BzLnRvdWNoLFxuICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb24gPSBfcHJvcHMudmVydGljYWxQb3NpdGlvbixcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydob3Jpem9udGFsUG9zaXRpb24nLCAnbGFiZWwnLCAnc2hvdycsICd0b3VjaCcsICd2ZXJ0aWNhbFBvc2l0aW9uJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgIHJlZjogJ3Rvb2x0aXAnLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgdGhpcy5wcm9wcy5zaG93ICYmIHN0eWxlcy5yb290V2hlblNob3duLCB0aGlzLnByb3BzLnRvdWNoICYmIHN0eWxlcy5yb290V2hlblRvdWNoZWQsIHRoaXMucHJvcHMuc3R5bGUpKVxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICByZWY6ICdyaXBwbGUnLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucmlwcGxlLCB0aGlzLnByb3BzLnNob3cgJiYgc3R5bGVzLnJpcHBsZVdoZW5TaG93bikpXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMubGFiZWwpIH0sXG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFRvb2x0aXA7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Ub29sdGlwLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Ub29sdGlwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgaG9yaXpvbnRhbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnbGVmdCcsICdyaWdodCcsICdjZW50ZXInXSksXG4gIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUuaXNSZXF1aXJlZCxcbiAgc2hvdzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdG91Y2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgdmVydGljYWxQb3NpdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ3RvcCcsICdib3R0b20nXSlcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRvb2x0aXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL1Rvb2x0aXAuanNcbi8vIG1vZHVsZSBpZCA9IDUwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jyk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9Db25zdW1hYmxlQXJyYXkyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfdG9BcnJheTIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9BcnJheScpO1xuXG52YXIgX3RvQXJyYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9BcnJheTIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAgPSByZXF1aXJlKCdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cCcpO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFuc2l0aW9uR3JvdXApO1xuXG52YXIgX2RvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL2RvbScpO1xuXG52YXIgX2RvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kb20pO1xuXG52YXIgX0NpcmNsZVJpcHBsZSA9IHJlcXVpcmUoJy4vQ2lyY2xlUmlwcGxlJyk7XG5cbnZhciBfQ2lyY2xlUmlwcGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NpcmNsZVJpcHBsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFJlbW92ZSB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgYXJyYXlcbnZhciBzaGlmdCA9IGZ1bmN0aW9uIHNoaWZ0KF9yZWYpIHtcbiAgdmFyIF9yZWYyID0gKDAsIF90b0FycmF5My5kZWZhdWx0KShfcmVmKSxcbiAgICAgIG5ld0FycmF5ID0gX3JlZjIuc2xpY2UoMSk7XG5cbiAgcmV0dXJuIG5ld0FycmF5O1xufTtcblxudmFyIFRvdWNoUmlwcGxlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVG91Y2hSaXBwbGUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvdWNoUmlwcGxlKHByb3BzLCBjb250ZXh0KSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVG91Y2hSaXBwbGUpO1xuXG4gICAgLy8gVG91Y2ggc3RhcnQgcHJvZHVjZXMgYSBtb3VzZSBkb3duIGV2ZW50IGZvciBjb21wYXQgcmVhc29ucy4gVG8gYXZvaWRcbiAgICAvLyBzaG93aW5nIHJpcHBsZXMgdHdpY2Ugd2Ugc2tpcCBzaG93aW5nIGEgcmlwcGxlIGZvciB0aGUgZmlyc3QgbW91c2UgZG93blxuICAgIC8vIGFmdGVyIGEgdG91Y2ggc3RhcnQuIE5vdGUgd2UgZG9uJ3Qgc3RvcmUgaWdub3JlTmV4dE1vdXNlRG93biBpbiB0aGlzLnN0YXRlXG4gICAgLy8gdG8gYXZvaWQgcmUtcmVuZGVyaW5nIHdoZW4gd2UgY2hhbmdlIGl0LlxuICAgIHZhciBfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKFRvdWNoUmlwcGxlLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShUb3VjaFJpcHBsZSkpLmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gb25seSBsaXN0ZW4gdG8gbGVmdCBjbGlja3NcbiAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgICAgX3RoaXMuc3RhcnQoZXZlbnQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmVuZCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZW5kKCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gSWYgdGhlIHVzZXIgaXMgc3dpcGluZyAobm90IGp1c3QgdGFwcGluZyksIHNhdmUgdGhlIHBvc2l0aW9uIHNvIHdlIGNhblxuICAgICAgLy8gYWJvcnQgcmlwcGxlcyBpZiB0aGUgdXNlciBhcHBlYXJzIHRvIGJlIHNjcm9sbGluZy5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5hYm9ydE9uU2Nyb2xsICYmIGV2ZW50LnRvdWNoZXMpIHtcbiAgICAgICAgX3RoaXMuc3RhcnRMaXN0ZW5pbmdGb3JTY3JvbGxBYm9ydChldmVudCk7XG4gICAgICAgIF90aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5zdGFydChldmVudCwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZW5kKCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVRvdWNoTW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gU3RvcCB0cnlpbmcgdG8gYWJvcnQgaWYgd2UncmUgYWxyZWFkeSAzMDBtcyBpbnRvIHRoZSBhbmltYXRpb25cbiAgICAgIHZhciB0aW1lU2luY2VTdGFydCA9IE1hdGguYWJzKERhdGUubm93KCkgLSBfdGhpcy5zdGFydFRpbWUpO1xuICAgICAgaWYgKHRpbWVTaW5jZVN0YXJ0ID4gMzAwKSB7XG4gICAgICAgIF90aGlzLnN0b3BMaXN0ZW5pbmdGb3JTY3JvbGxBYm9ydCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSB1c2VyIGlzIHNjcm9sbGluZy4uLlxuICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSAtIF90aGlzLmZpcnN0VG91Y2hZKTtcbiAgICAgIHZhciBkZWx0YVggPSBNYXRoLmFicyhldmVudC50b3VjaGVzWzBdLmNsaWVudFggLSBfdGhpcy5maXJzdFRvdWNoWCk7XG4gICAgICAvLyBDYWxsIGl0IGEgc2Nyb2xsIGFmdGVyIGFuIGFyYml0cmFyeSA2cHggKGZlZWxzIHJlYXNvbmFibGUgaW4gdGVzdGluZylcbiAgICAgIGlmIChkZWx0YVkgPiA2IHx8IGRlbHRhWCA+IDYpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRSaXBwbGVzID0gX3RoaXMuc3RhdGUucmlwcGxlcztcbiAgICAgICAgdmFyIHJpcHBsZSA9IGN1cnJlbnRSaXBwbGVzWzBdO1xuICAgICAgICAvLyBUaGlzIGNsb25lIHdpbGwgcmVwbGFjZSB0aGUgcmlwcGxlIGluIFJlYWN0VHJhbnNpdGlvbkdyb3VwIHdpdGggYVxuICAgICAgICAvLyB2ZXJzaW9uIHRoYXQgd2lsbCBkaXNhcHBlYXIgaW1tZWRpYXRlbHkgd2hlbiByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgICAgICB2YXIgYWJvcnRlZFJpcHBsZSA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQocmlwcGxlLCB7IGFib3J0ZWQ6IHRydWUgfSk7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgb2xkIHJpcHBsZSBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgdXBkYXRlZCBvbmVcbiAgICAgICAgY3VycmVudFJpcHBsZXMgPSBzaGlmdChjdXJyZW50UmlwcGxlcyk7XG4gICAgICAgIGN1cnJlbnRSaXBwbGVzID0gW10uY29uY2F0KCgwLCBfdG9Db25zdW1hYmxlQXJyYXkzLmRlZmF1bHQpKGN1cnJlbnRSaXBwbGVzKSwgW2Fib3J0ZWRSaXBwbGVdKTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyByaXBwbGVzOiBjdXJyZW50UmlwcGxlcyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQ2FsbCBlbmQgYWZ0ZXIgd2UndmUgc2V0IHRoZSByaXBwbGUgdG8gYWJvcnQgb3RoZXJ3aXNlIHRoZSBzZXRTdGF0ZVxuICAgICAgICAgIC8vIGluIGVuZCgpIG1lcmdlcyB3aXRoIHRoaXMgYW5kIHRoZSByaXBwbGUgYWJvcnQgZmFpbHNcbiAgICAgICAgICBfdGhpcy5lbmQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmlnbm9yZU5leHRNb3VzZURvd24gPSBmYWxzZTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgLy8gVGhpcyBwcm9wIGFsbG93cyB1cyB0byBvbmx5IHJlbmRlciB0aGUgUmVhY3RUcmFuc2l0aW9uR3JvdXBcbiAgICAgIC8vIG9uIHRoZSBmaXJzdCBjbGljayBvZiB0aGUgY29tcG9uZW50LCBtYWtpbmcgdGhlIGluaXRhbCByZW5kZXIgZmFzdGVyLlxuICAgICAgaGFzUmlwcGxlczogZmFsc2UsXG4gICAgICBuZXh0S2V5OiAwLFxuICAgICAgcmlwcGxlczogW11cbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRvdWNoUmlwcGxlLCBbe1xuICAgIGtleTogJ3N0YXJ0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoZXZlbnQsIGlzUmlwcGxlVG91Y2hHZW5lcmF0ZWQpIHtcbiAgICAgIHZhciB0aGVtZSA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5yaXBwbGU7XG5cbiAgICAgIGlmICh0aGlzLmlnbm9yZU5leHRNb3VzZURvd24gJiYgIWlzUmlwcGxlVG91Y2hHZW5lcmF0ZWQpIHtcbiAgICAgICAgdGhpcy5pZ25vcmVOZXh0TW91c2VEb3duID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJpcHBsZXMgPSB0aGlzLnN0YXRlLnJpcHBsZXM7XG5cbiAgICAgIC8vIEFkZCBhIHJpcHBsZSB0byB0aGUgcmlwcGxlcyBhcnJheVxuICAgICAgcmlwcGxlcyA9IFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5My5kZWZhdWx0KShyaXBwbGVzKSwgW19yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9DaXJjbGVSaXBwbGUyLmRlZmF1bHQsIHtcbiAgICAgICAga2V5OiB0aGlzLnN0YXRlLm5leHRLZXksXG4gICAgICAgIHN0eWxlOiAhdGhpcy5wcm9wcy5jZW50ZXJSaXBwbGUgPyB0aGlzLmdldFJpcHBsZVN0eWxlKGV2ZW50KSA6IHt9LFxuICAgICAgICBjb2xvcjogdGhpcy5wcm9wcy5jb2xvciB8fCB0aGVtZS5jb2xvcixcbiAgICAgICAgb3BhY2l0eTogdGhpcy5wcm9wcy5vcGFjaXR5LFxuICAgICAgICB0b3VjaEdlbmVyYXRlZDogaXNSaXBwbGVUb3VjaEdlbmVyYXRlZFxuICAgICAgfSldKTtcblxuICAgICAgdGhpcy5pZ25vcmVOZXh0TW91c2VEb3duID0gaXNSaXBwbGVUb3VjaEdlbmVyYXRlZDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoYXNSaXBwbGVzOiB0cnVlLFxuICAgICAgICBuZXh0S2V5OiB0aGlzLnN0YXRlLm5leHRLZXkgKyAxLFxuICAgICAgICByaXBwbGVzOiByaXBwbGVzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICB2YXIgY3VycmVudFJpcHBsZXMgPSB0aGlzLnN0YXRlLnJpcHBsZXM7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmlwcGxlczogc2hpZnQoY3VycmVudFJpcHBsZXMpXG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFib3J0T25TY3JvbGwpIHtcbiAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBzZWVtcyB0byBiZSBzY3JvbGxpbmcgYW5kIGFib3J0IHRoZSBhbmltYXRpb24gaWYgc29cblxuICB9LCB7XG4gICAga2V5OiAnc3RhcnRMaXN0ZW5pbmdGb3JTY3JvbGxBYm9ydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQoZXZlbnQpIHtcbiAgICAgIHRoaXMuZmlyc3RUb3VjaFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICB0aGlzLmZpcnN0VG91Y2hYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgLy8gTm90ZSB0aGF0IHdoZW4gc2NvbGxpbmcgQ2hyb21lIHRocm90dGxlcyB0aGlzIGV2ZW50IHRvIGV2ZXJ5IDIwMG1zXG4gICAgICAvLyBBbHNvIG5vdGUgd2UgZG9uJ3QgbGlzdGVuIGZvciBzY3JvbGwgZXZlbnRzIGRpcmVjdGx5IGFzIHRoZXJlJ3Mgbm8gZ2VuZXJhbFxuICAgICAgLy8gd2F5IHRvIGNvdmVyIGNhc2VzIGxpa2Ugc2Nyb2xsaW5nIHdpdGhpbiBjb250YWluZXJzIG9uIHRoZSBwYWdlXG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdG9wTGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nRm9yU2Nyb2xsQWJvcnQoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSaXBwbGVTdHlsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJpcHBsZVN0eWxlKGV2ZW50KSB7XG4gICAgICB2YXIgZWwgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB2YXIgZWxIZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgZWxXaWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICAgICAgdmFyIG9mZnNldCA9IF9kb20yLmRlZmF1bHQub2Zmc2V0KGVsKTtcbiAgICAgIHZhciBpc1RvdWNoRXZlbnQgPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoO1xuICAgICAgdmFyIHBhZ2VYID0gaXNUb3VjaEV2ZW50ID8gZXZlbnQudG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LnBhZ2VYO1xuICAgICAgdmFyIHBhZ2VZID0gaXNUb3VjaEV2ZW50ID8gZXZlbnQudG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LnBhZ2VZO1xuICAgICAgdmFyIHBvaW50ZXJYID0gcGFnZVggLSBvZmZzZXQubGVmdDtcbiAgICAgIHZhciBwb2ludGVyWSA9IHBhZ2VZIC0gb2Zmc2V0LnRvcDtcbiAgICAgIHZhciB0b3BMZWZ0RGlhZyA9IHRoaXMuY2FsY0RpYWcocG9pbnRlclgsIHBvaW50ZXJZKTtcbiAgICAgIHZhciB0b3BSaWdodERpYWcgPSB0aGlzLmNhbGNEaWFnKGVsV2lkdGggLSBwb2ludGVyWCwgcG9pbnRlclkpO1xuICAgICAgdmFyIGJvdFJpZ2h0RGlhZyA9IHRoaXMuY2FsY0RpYWcoZWxXaWR0aCAtIHBvaW50ZXJYLCBlbEhlaWdodCAtIHBvaW50ZXJZKTtcbiAgICAgIHZhciBib3RMZWZ0RGlhZyA9IHRoaXMuY2FsY0RpYWcocG9pbnRlclgsIGVsSGVpZ2h0IC0gcG9pbnRlclkpO1xuICAgICAgdmFyIHJpcHBsZVJhZGl1cyA9IE1hdGgubWF4KHRvcExlZnREaWFnLCB0b3BSaWdodERpYWcsIGJvdFJpZ2h0RGlhZywgYm90TGVmdERpYWcpO1xuICAgICAgdmFyIHJpcHBsZVNpemUgPSByaXBwbGVSYWRpdXMgKiAyO1xuICAgICAgdmFyIGxlZnQgPSBwb2ludGVyWCAtIHJpcHBsZVJhZGl1cztcbiAgICAgIHZhciB0b3AgPSBwb2ludGVyWSAtIHJpcHBsZVJhZGl1cztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlyZWN0aW9uSW52YXJpYW50OiB0cnVlLFxuICAgICAgICBoZWlnaHQ6IHJpcHBsZVNpemUsXG4gICAgICAgIHdpZHRoOiByaXBwbGVTaXplLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgbGVmdDogbGVmdFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjYWxjRGlhZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGNEaWFnKGEsIGIpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBoYXNSaXBwbGVzID0gX3N0YXRlLmhhc1JpcHBsZXMsXG4gICAgICAgICAgcmlwcGxlcyA9IF9zdGF0ZS5yaXBwbGVzO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuXG4gICAgICB2YXIgcmlwcGxlR3JvdXAgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChoYXNSaXBwbGVzKSB7XG4gICAgICAgIHZhciBtZXJnZWRTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICB6SW5kZXg6IDEgLy8gVGhpcyBpcyBhbHNvIG5lZWRlZCBzbyB0aGF0IHJpcHBsZXMgZG8gbm90IGJsZWVkIHBhc3QgYSBwYXJlbnQgYm9yZGVyIHJhZGl1cy5cbiAgICAgICAgfSwgc3R5bGUpO1xuXG4gICAgICAgIHJpcHBsZUdyb3VwID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX1RyYW5zaXRpb25Hcm91cDIuZGVmYXVsdCxcbiAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKG1lcmdlZFN0eWxlcykgfSxcbiAgICAgICAgICByaXBwbGVzXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlTW91c2VVcCxcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgICAgICB9LFxuICAgICAgICByaXBwbGVHcm91cCxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUb3VjaFJpcHBsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblRvdWNoUmlwcGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWJvcnRPblNjcm9sbDogdHJ1ZVxufTtcblRvdWNoUmlwcGxlLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Ub3VjaFJpcHBsZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGFib3J0T25TY3JvbGw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgY2VudGVyUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3BhY2l0eTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gVG91Y2hSaXBwbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL1RvdWNoUmlwcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHVyZSA9IHJlcXVpcmUoJ3JlY29tcG9zZS9wdXJlJyk7XG5cbnZhciBfcHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdXJlKTtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi4vLi4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOYXZpZ2F0aW9uQXJyb3dEcm9wRG93biA9IGZ1bmN0aW9uIE5hdmlnYXRpb25BcnJvd0Ryb3BEb3duKHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfU3ZnSWNvbjIuZGVmYXVsdCxcbiAgICBwcm9wcyxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ003IDEwbDUgNSA1LTV6JyB9KVxuICApO1xufTtcbk5hdmlnYXRpb25BcnJvd0Ryb3BEb3duID0gKDAsIF9wdXJlMi5kZWZhdWx0KShOYXZpZ2F0aW9uQXJyb3dEcm9wRG93bik7XG5OYXZpZ2F0aW9uQXJyb3dEcm9wRG93bi5kaXNwbGF5TmFtZSA9ICdOYXZpZ2F0aW9uQXJyb3dEcm9wRG93bic7XG5OYXZpZ2F0aW9uQXJyb3dEcm9wRG93bi5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOYXZpZ2F0aW9uQXJyb3dEcm9wRG93bjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vYXJyb3ctZHJvcC1kb3duLmpzXG4vLyBtb2R1bGUgaWQgPSA1MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHVyZSA9IHJlcXVpcmUoJ3JlY29tcG9zZS9wdXJlJyk7XG5cbnZhciBfcHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdXJlKTtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi4vLi4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOYXZpZ2F0aW9uQ2hlY2sgPSBmdW5jdGlvbiBOYXZpZ2F0aW9uQ2hlY2socHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9TdmdJY29uMi5kZWZhdWx0LFxuICAgIHByb3BzLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxeicgfSlcbiAgKTtcbn07XG5OYXZpZ2F0aW9uQ2hlY2sgPSAoMCwgX3B1cmUyLmRlZmF1bHQpKE5hdmlnYXRpb25DaGVjayk7XG5OYXZpZ2F0aW9uQ2hlY2suZGlzcGxheU5hbWUgPSAnTmF2aWdhdGlvbkNoZWNrJztcbk5hdmlnYXRpb25DaGVjay5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOYXZpZ2F0aW9uQ2hlY2s7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2NoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA1MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHVyZSA9IHJlcXVpcmUoJ3JlY29tcG9zZS9wdXJlJyk7XG5cbnZhciBfcHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdXJlKTtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi4vLi4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOYXZpZ2F0aW9uRXhwYW5kTGVzcyA9IGZ1bmN0aW9uIE5hdmlnYXRpb25FeHBhbmRMZXNzKHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfU3ZnSWNvbjIuZGVmYXVsdCxcbiAgICBwcm9wcyxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xMiA4bC02IDYgMS40MSAxLjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNHonIH0pXG4gICk7XG59O1xuTmF2aWdhdGlvbkV4cGFuZExlc3MgPSAoMCwgX3B1cmUyLmRlZmF1bHQpKE5hdmlnYXRpb25FeHBhbmRMZXNzKTtcbk5hdmlnYXRpb25FeHBhbmRMZXNzLmRpc3BsYXlOYW1lID0gJ05hdmlnYXRpb25FeHBhbmRMZXNzJztcbk5hdmlnYXRpb25FeHBhbmRMZXNzLm11aU5hbWUgPSAnU3ZnSWNvbic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5hdmlnYXRpb25FeHBhbmRMZXNzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9leHBhbmQtbGVzcy5qc1xuLy8gbW9kdWxlIGlkID0gNTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTmF2aWdhdGlvbkV4cGFuZE1vcmUgPSBmdW5jdGlvbiBOYXZpZ2F0aW9uRXhwYW5kTW9yZShwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX1N2Z0ljb24yLmRlZmF1bHQsXG4gICAgcHJvcHMsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTYuNTkgOC41OUwxMiAxMy4xNyA3LjQxIDguNTkgNiAxMGw2IDYgNi02eicgfSlcbiAgKTtcbn07XG5OYXZpZ2F0aW9uRXhwYW5kTW9yZSA9ICgwLCBfcHVyZTIuZGVmYXVsdCkoTmF2aWdhdGlvbkV4cGFuZE1vcmUpO1xuTmF2aWdhdGlvbkV4cGFuZE1vcmUuZGlzcGxheU5hbWUgPSAnTmF2aWdhdGlvbkV4cGFuZE1vcmUnO1xuTmF2aWdhdGlvbkV4cGFuZE1vcmUubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2aWdhdGlvbkV4cGFuZE1vcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL2V4cGFuZC1tb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5leHRlbmRDaGlsZHJlbiA9IGV4dGVuZENoaWxkcmVuO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGV4dGVuZENoaWxkcmVuKGNoaWxkcmVuLCBleHRlbmRlZFByb3BzLCBleHRlbmRlZENoaWxkcmVuKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoIV9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICB2YXIgbmV3UHJvcHMgPSB0eXBlb2YgZXh0ZW5kZWRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IGV4dGVuZGVkUHJvcHMoY2hpbGQpIDogZXh0ZW5kZWRQcm9wcztcblxuICAgIHZhciBuZXdDaGlsZHJlbiA9IHR5cGVvZiBleHRlbmRlZENoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gZXh0ZW5kZWRDaGlsZHJlbihjaGlsZCkgOiBleHRlbmRlZENoaWxkcmVuID8gZXh0ZW5kZWRDaGlsZHJlbiA6IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld1Byb3BzLCBuZXdDaGlsZHJlbik7XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS91dGlscy9jaGlsZFV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb252ZXJ0Q29sb3JUb1N0cmluZyA9IGNvbnZlcnRDb2xvclRvU3RyaW5nO1xuZXhwb3J0cy5jb252ZXJ0SGV4VG9SR0IgPSBjb252ZXJ0SGV4VG9SR0I7XG5leHBvcnRzLmRlY29tcG9zZUNvbG9yID0gZGVjb21wb3NlQ29sb3I7XG5leHBvcnRzLmdldENvbnRyYXN0UmF0aW8gPSBnZXRDb250cmFzdFJhdGlvO1xuZXhwb3J0cy5nZXRMdW1pbmFuY2UgPSBnZXRMdW1pbmFuY2U7XG5leHBvcnRzLmVtcGhhc2l6ZSA9IGVtcGhhc2l6ZTtcbmV4cG9ydHMuZmFkZSA9IGZhZGU7XG5leHBvcnRzLmRhcmtlbiA9IGRhcmtlbjtcbmV4cG9ydHMubGlnaHRlbiA9IGxpZ2h0ZW47XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjbGFtcGVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBsb3dlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiB0aGUgcmFuZ2UgW21pbiwgbWF4XVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICByZXR1cm4gbWF4O1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB3aXRoIHR5cGUgYW5kIHZhbHVlcyB0byBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29sb3IgLSBEZWNvbXBvc2VkIGNvbG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IudHlwZSAtIE9uZSBvZiwgJ3JnYicsICdyZ2JhJywgJ2hzbCcsICdoc2xhJ1xuICogQHBhcmFtIHthcnJheX0gY29sb3IudmFsdWVzIC0gW24sbixuXSBvciBbbixuLG4sbl1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZ1xuICovXG5mdW5jdGlvbiBjb252ZXJ0Q29sb3JUb1N0cmluZyhjb2xvcikge1xuICB2YXIgdHlwZSA9IGNvbG9yLnR5cGUsXG4gICAgICB2YWx1ZXMgPSBjb2xvci52YWx1ZXM7XG5cblxuICBpZiAodHlwZS5pbmRleE9mKCdyZ2InKSA+IC0xKSB7XG4gICAgLy8gT25seSBjb252ZXJ0IHRoZSBmaXJzdCAzIHZhbHVlcyB0byBpbnQgKGkuZS4gbm90IGFscGhhKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICB2YWx1ZXNbaV0gPSBwYXJzZUludCh2YWx1ZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb2xvclN0cmluZyA9IHZvaWQgMDtcblxuICBpZiAodHlwZS5pbmRleE9mKCdoc2wnKSA+IC0xKSB7XG4gICAgY29sb3JTdHJpbmcgPSBjb2xvci50eXBlICsgJygnICsgdmFsdWVzWzBdICsgJywgJyArIHZhbHVlc1sxXSArICclLCAnICsgdmFsdWVzWzJdICsgJyUnO1xuICB9IGVsc2Uge1xuICAgIGNvbG9yU3RyaW5nID0gY29sb3IudHlwZSArICcoJyArIHZhbHVlc1swXSArICcsICcgKyB2YWx1ZXNbMV0gKyAnLCAnICsgdmFsdWVzWzJdO1xuICB9XG5cbiAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDQpIHtcbiAgICBjb2xvclN0cmluZyArPSAnLCAnICsgY29sb3IudmFsdWVzWzNdICsgJyknO1xuICB9IGVsc2Uge1xuICAgIGNvbG9yU3RyaW5nICs9ICcpJztcbiAgfVxuXG4gIHJldHVybiBjb2xvclN0cmluZztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIGhleCBmb3JtYXQgdG8gQ1NTIHJnYiBmb3JtYXQuXG4gKlxuICogIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIEhleCBjb2xvciwgaS5lLiAjbm5uIG9yICNubm5ubm5cbiAqICBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyByZ2IgY29sb3Igc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRIZXhUb1JHQihjb2xvcikge1xuICBpZiAoY29sb3IubGVuZ3RoID09PSA0KSB7XG4gICAgdmFyIGV4dGVuZGVkQ29sb3IgPSAnIyc7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjb2xvci5sZW5ndGg7IGkrKykge1xuICAgICAgZXh0ZW5kZWRDb2xvciArPSBjb2xvci5jaGFyQXQoaSkgKyBjb2xvci5jaGFyQXQoaSk7XG4gICAgfVxuICAgIGNvbG9yID0gZXh0ZW5kZWRDb2xvcjtcbiAgfVxuXG4gIHZhciB2YWx1ZXMgPSB7XG4gICAgcjogcGFyc2VJbnQoY29sb3Iuc3Vic3RyKDEsIDIpLCAxNiksXG4gICAgZzogcGFyc2VJbnQoY29sb3Iuc3Vic3RyKDMsIDIpLCAxNiksXG4gICAgYjogcGFyc2VJbnQoY29sb3Iuc3Vic3RyKDUsIDIpLCAxNilcbiAgfTtcblxuICByZXR1cm4gJ3JnYignICsgdmFsdWVzLnIgKyAnLCAnICsgdmFsdWVzLmcgKyAnLCAnICsgdmFsdWVzLmIgKyAnKSc7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBhbmQgdmFsdWVzIG9mIGEgY29sb3IuXG4gKlxuICogTm90ZTogRG9lcyBub3Qgc3VwcG9ydCByZ2IgJSB2YWx1ZXMgYW5kIGNvbG9yIG5hbWVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHt7dHlwZTogc3RyaW5nLCB2YWx1ZXM6IG51bWJlcltdfX0gQSBNVUkgY29sb3Igb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGRlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIGlmIChjb2xvci5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIHJldHVybiBkZWNvbXBvc2VDb2xvcihjb252ZXJ0SGV4VG9SR0IoY29sb3IpKTtcbiAgfVxuXG4gIHZhciBtYXJrZXIgPSBjb2xvci5pbmRleE9mKCcoJyk7XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShtYXJrZXIgIT09IC0xLCAnTWF0ZXJpYWwtVUk6IFRoZSAnICsgY29sb3IgKyAnIGNvbG9yIHdhcyBub3QgcGFyc2VkIGNvcnJlY3RseSxcXG4gIGJlY2F1c2UgaXQgaGFzIGFuIHVuc3VwcG9ydGVkIGZvcm1hdCAoY29sb3IgbmFtZSBvciBSR0IgJSkuIFRoaXMgbWF5IGNhdXNlIGlzc3VlcyBpbiBjb21wb25lbnQgcmVuZGVyaW5nLicpIDogdm9pZCAwO1xuXG4gIHZhciB0eXBlID0gY29sb3Iuc3Vic3RyaW5nKDAsIG1hcmtlcik7XG4gIHZhciB2YWx1ZXMgPSBjb2xvci5zdWJzdHJpbmcobWFya2VyICsgMSwgY29sb3IubGVuZ3RoIC0gMSkuc3BsaXQoJywnKTtcbiAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB7IHR5cGU6IHR5cGUsIHZhbHVlczogdmFsdWVzIH07XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY29udHJhc3QgcmF0aW8gYmV0d2VlbiB0d28gY29sb3JzLlxuICpcbiAqIEZvcm11bGE6IGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jY29udHJhc3QtcmF0aW9kZWZcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9yZWdyb3VuZCAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYWNrZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gQSBjb250cmFzdCByYXRpbyB2YWx1ZSBpbiB0aGUgcmFuZ2UgMCAtIDIxIHdpdGggMiBkaWdpdCBwcmVjaXNpb24uXG4gKi9cbmZ1bmN0aW9uIGdldENvbnRyYXN0UmF0aW8oZm9yZWdyb3VuZCwgYmFja2dyb3VuZCkge1xuICB2YXIgbHVtQSA9IGdldEx1bWluYW5jZShmb3JlZ3JvdW5kKTtcbiAgdmFyIGx1bUIgPSBnZXRMdW1pbmFuY2UoYmFja2dyb3VuZCk7XG4gIHZhciBjb250cmFzdFJhdGlvID0gKE1hdGgubWF4KGx1bUEsIGx1bUIpICsgMC4wNSkgLyAoTWF0aC5taW4obHVtQSwgbHVtQikgKyAwLjA1KTtcblxuICByZXR1cm4gTnVtYmVyKGNvbnRyYXN0UmF0aW8udG9GaXhlZCgyKSk7IC8vIFRydW5jYXRlIGF0IHR3byBkaWdpdHNcbn1cblxuLyoqXG4gKiBUaGUgcmVsYXRpdmUgYnJpZ2h0bmVzcyBvZiBhbnkgcG9pbnQgaW4gYSBjb2xvciBzcGFjZSxcbiAqIG5vcm1hbGl6ZWQgdG8gMCBmb3IgZGFya2VzdCBibGFjayBhbmQgMSBmb3IgbGlnaHRlc3Qgd2hpdGUuXG4gKlxuICogRm9ybXVsYTogaHR0cHM6Ly93d3cudzMub3JnL1dBSS9HTC93aWtpL1JlbGF0aXZlX2x1bWluYW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZWxhdGl2ZSBicmlnaHRuZXNzIG9mIHRoZSBjb2xvciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqL1xuZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuXG4gIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpID4gLTEpIHtcbiAgICB2YXIgcmdiID0gY29sb3IudmFsdWVzLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgICB2YWwgLz0gMjU1OyAvLyBub3JtYWxpemVkXG4gICAgICByZXR1cm4gdmFsIDw9IDAuMDM5MjggPyB2YWwgLyAxMi45MiA6IE1hdGgucG93KCh2YWwgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICB9KTtcbiAgICByZXR1cm4gTnVtYmVyKCgwLjIxMjYgKiByZ2JbMF0gKyAwLjcxNTIgKiByZ2JbMV0gKyAwLjA3MjIgKiByZ2JbMl0pLnRvRml4ZWQoMykpOyAvLyBUcnVuY2F0ZSBhdCAzIGRpZ2l0c1xuICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZignaHNsJykgPiAtMSkge1xuICAgIHJldHVybiBjb2xvci52YWx1ZXNbMl0gLyAxMDA7XG4gIH1cbn1cblxuLyoqXG4gKiBEYXJrZW4gb3IgbGlnaHRlbiBhIGNvbG91ciwgZGVwZW5kaW5nIG9uIGl0cyBsdW1pbmFuY2UuXG4gKiBMaWdodCBjb2xvcnMgYXJlIGRhcmtlbmVkLCBkYXJrIGNvbG9ycyBhcmUgbGlnaHRlbmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2VmZmljaWVudD0wLjE1IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cbmZ1bmN0aW9uIGVtcGhhc2l6ZShjb2xvcikge1xuICB2YXIgY29lZmZpY2llbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDAuMTU7XG5cbiAgcmV0dXJuIGdldEx1bWluYW5jZShjb2xvcikgPiAwLjUgPyBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSA6IGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlcyBhcmUgb3ZlcndyaXR0ZW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gdmFsdWUgdG8gc2V0IHRoZSBhbHBoYSBjaGFubmVsIHRvIGluIHRoZSByYW5nZSAwIC0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5mdW5jdGlvbiBmYWRlKGNvbG9yLCB2YWx1ZSkge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFsdWUgPSBjbGFtcCh2YWx1ZSwgMCwgMSk7XG5cbiAgaWYgKGNvbG9yLnR5cGUgPT09ICdyZ2InIHx8IGNvbG9yLnR5cGUgPT09ICdoc2wnKSB7XG4gICAgY29sb3IudHlwZSArPSAnYSc7XG4gIH1cbiAgY29sb3IudmFsdWVzWzNdID0gdmFsdWU7XG5cbiAgcmV0dXJuIGNvbnZlcnRDb2xvclRvU3RyaW5nKGNvbG9yKTtcbn1cblxuLyoqXG4gKiBEYXJrZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cbmZ1bmN0aW9uIGRhcmtlbihjb2xvciwgY29lZmZpY2llbnQpIHtcbiAgY29sb3IgPSBkZWNvbXBvc2VDb2xvcihjb2xvcik7XG4gIGNvZWZmaWNpZW50ID0gY2xhbXAoY29lZmZpY2llbnQsIDAsIDEpO1xuXG4gIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ2hzbCcpID4gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgPiAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29udmVydENvbG9yVG9TdHJpbmcoY29sb3IpO1xufVxuXG4vKipcbiAqIExpZ2h0ZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cbmZ1bmN0aW9uIGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50LCAwLCAxKTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSA+IC0xKSB7XG4gICAgY29sb3IudmFsdWVzWzJdICs9ICgxMDAgLSBjb2xvci52YWx1ZXNbMl0pICogY29lZmZpY2llbnQ7XG4gIH0gZWxzZSBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdyZ2InKSA+IC0xKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGNvbG9yLnZhbHVlc1tpXSArPSAoMjU1IC0gY29sb3IudmFsdWVzW2ldKSAqIGNvZWZmaWNpZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb252ZXJ0Q29sb3JUb1N0cmluZyhjb2xvcik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDUwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmluZVByb3BlcnR5O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyAgd2Vha1xuXG5mdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShvLCBwLCBhdHRyKSB7XG4gIHJldHVybiAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvLCBwLCBhdHRyKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZXZlbnQtbGlzdGVuZXIvbGliL2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbnZhciBfa2V5cyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cycpO1xuXG52YXIgX2tleXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5cyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbicpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5leHBvcnRzLndpdGhPcHRpb25zID0gd2l0aE9wdGlvbnM7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgnZmJqcy9saWIvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX3N1cHBvcnRzID0gcmVxdWlyZSgnLi9zdXBwb3J0cycpO1xuXG52YXIgc3VwcG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfc3VwcG9ydHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVmYXVsdEV2ZW50T3B0aW9ucyA9IHtcbiAgY2FwdHVyZTogZmFsc2UsXG4gIHBhc3NpdmU6IGZhbHNlXG59O1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXNwcmVhZCAqL1xuXG5mdW5jdGlvbiBtZXJnZURlZmF1bHRFdmVudE9wdGlvbnMob3B0aW9ucykge1xuICByZXR1cm4gKDAsIF9hc3NpZ24yLmRlZmF1bHQpKHt9LCBkZWZhdWx0RXZlbnRPcHRpb25zLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRMaXN0ZW5lckFyZ3MoZXZlbnROYW1lLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICB2YXIgYXJncyA9IFtldmVudE5hbWUsIGNhbGxiYWNrXTtcbiAgYXJncy5wdXNoKHN1cHBvcnRzLnBhc3NpdmVPcHRpb24gPyBvcHRpb25zIDogb3B0aW9ucy5jYXB0dXJlKTtcbiAgcmV0dXJuIGFyZ3M7XG59XG5cbmZ1bmN0aW9uIG9uKHRhcmdldCwgZXZlbnROYW1lLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBpZiAoc3VwcG9ydHMuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRhcmdldCwgZ2V0RXZlbnRMaXN0ZW5lckFyZ3MoZXZlbnROYW1lLCBjYWxsYmFjaywgb3B0aW9ucykpO1xuICB9IGVsc2UgaWYgKHN1cHBvcnRzLmF0dGFjaEV2ZW50KSB7XG4gICAgLy8gSUU4KyBTdXBwb3J0XG4gICAgdGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmYodGFyZ2V0LCBldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGlmIChzdXBwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBnZXRFdmVudExpc3RlbmVyQXJncyhldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRpb25zKSk7XG4gIH0gZWxzZSBpZiAoc3VwcG9ydHMuZGV0YWNoRXZlbnQpIHtcbiAgICAvLyBJRTgrIFN1cHBvcnRcbiAgICB0YXJnZXQuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hMaXN0ZW5lcihwcm9wcywgaXRlcmF0ZWUpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0YXJnZXQgPSBwcm9wcy50YXJnZXQsXG4gICAgICBldmVudFByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkocHJvcHMsIFsnY2hpbGRyZW4nLCAndGFyZ2V0J10pO1xuXG5cbiAgKDAsIF9rZXlzMi5kZWZhdWx0KShldmVudFByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUuc3Vic3RyaW5nKDAsIDIpICE9PSAnb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3AgPSBldmVudFByb3BzW25hbWVdO1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHByb3AgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkocHJvcCk7XG4gICAgdmFyIGlzT2JqZWN0ID0gdHlwZSA9PT0gJ29iamVjdCc7XG4gICAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlID09PSAnZnVuY3Rpb24nO1xuXG4gICAgaWYgKCFpc09iamVjdCAmJiAhaXNGdW5jdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYXB0dXJlID0gbmFtZS5zdWJzdHIoLTcpLnRvTG93ZXJDYXNlKCkgPT09ICdjYXB0dXJlJztcbiAgICB2YXIgZXZlbnROYW1lID0gbmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKTtcbiAgICBldmVudE5hbWUgPSBjYXB0dXJlID8gZXZlbnROYW1lLnN1YnN0cmluZygwLCBldmVudE5hbWUubGVuZ3RoIC0gNykgOiBldmVudE5hbWU7XG5cbiAgICBpZiAoaXNPYmplY3QpIHtcbiAgICAgIGl0ZXJhdGVlKGV2ZW50TmFtZSwgcHJvcC5oYW5kbGVyLCBwcm9wLm9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlZShldmVudE5hbWUsIHByb3AsIG1lcmdlRGVmYXVsdEV2ZW50T3B0aW9ucyh7IGNhcHR1cmU6IGNhcHR1cmUgfSkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdpdGhPcHRpb25zKGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShvcHRpb25zLCAncmVhY3QtZXZlbnQtbGlzdGVuZXI6IFNob3VsZCBiZSBzcGVjaWZpZWQgb3B0aW9ucyBpbiB3aXRoT3B0aW9ucy4nKSA6IHZvaWQgMDtcblxuICByZXR1cm4ge1xuICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgb3B0aW9uczogbWVyZ2VEZWZhdWx0RXZlbnRPcHRpb25zKG9wdGlvbnMpXG4gIH07XG59XG5cbnZhciBFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRXZlbnRMaXN0ZW5lciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBFdmVudExpc3RlbmVyKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoRXZlbnRMaXN0ZW5lci5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRXZlbnRMaXN0ZW5lcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRXZlbnRMaXN0ZW5lciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FkZExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuYXBwbHlMaXN0ZW5lcnMob24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUxpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuYXBwbHlMaXN0ZW5lcnMob2ZmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhcHBseUxpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGx5TGlzdGVuZXJzKG9uT3JPZmYpIHtcbiAgICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLnRhcmdldDtcblxuXG4gICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGFyZ2V0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGVsZW1lbnQgPSB3aW5kb3dbdGFyZ2V0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvckVhY2hMaXN0ZW5lcih0aGlzLnByb3BzLCBvbk9yT2ZmLmJpbmQobnVsbCwgZWxlbWVudCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IG51bGw7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFdmVudExpc3RlbmVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRXZlbnRMaXN0ZW5lci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBZb3UgY2FuIHByb3ZpZGUgYSBzaW5nbGUgY2hpbGQgdG9vLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIFRoZSBET00gdGFyZ2V0IHRvIGxpc3RlbiB0by5cbiAgICovXG4gIHRhcmdldDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ10pLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHQgPSBFdmVudExpc3RlbmVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDUxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnBhc3NpdmVPcHRpb24gPSBleHBvcnRzLmRldGFjaEV2ZW50ID0gZXhwb3J0cy5hdHRhY2hFdmVudCA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuY2FuVXNlRE9NID0gdW5kZWZpbmVkO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9kZWZpbmUtcHJvcGVydHknKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvRXhlY3V0aW9uRW52aXJvbm1lbnQuanNcbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbnZhciBhZGRFdmVudExpc3RlbmVyID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gY2FuVXNlRE9NICYmICdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3c7XG52YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGNhblVzZURPTSAmJiAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93O1xuXG4vLyBJRTgrIFN1cHBvcnRcbnZhciBhdHRhY2hFdmVudCA9IGV4cG9ydHMuYXR0YWNoRXZlbnQgPSBjYW5Vc2VET00gJiYgJ2F0dGFjaEV2ZW50JyBpbiB3aW5kb3c7XG52YXIgZGV0YWNoRXZlbnQgPSBleHBvcnRzLmRldGFjaEV2ZW50ID0gY2FuVXNlRE9NICYmICdkZXRhY2hFdmVudCcgaW4gd2luZG93O1xuXG4vLyBQYXNzaXZlIG9wdGlvbnNcbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9kb20vcGFzc2l2ZWV2ZW50bGlzdGVuZXJzLmpzXG52YXIgcGFzc2l2ZU9wdGlvbiA9IGV4cG9ydHMucGFzc2l2ZU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhY2hlID0gbnVsbDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWNoZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH1cblxuICAgIHZhciBzdXBwb3J0c1Bhc3NpdmVPcHRpb24gPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlT3B0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxuICAgIGNhY2hlID0gc3VwcG9ydHNQYXNzaXZlT3B0aW9uO1xuXG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbjtcbiAgfSgpO1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1ldmVudC1saXN0ZW5lci9saWIvc3VwcG9ydHMuanNcbi8vIG1vZHVsZSBpZCA9IDUxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZztcbmV4cG9ydHMubWVyZ2VDaGlsZE1hcHBpbmdzID0gbWVyZ2VDaGlsZE1hcHBpbmdzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLyoqXG4gKiBHaXZlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmAsIHJldHVybiBhbiBvYmplY3QgbWFwcGluZyBrZXkgdG8gY2hpbGQuXG4gKlxuICogQHBhcmFtIHsqfSBjaGlsZHJlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmBcbiAqIEByZXR1cm4ge29iamVjdH0gTWFwcGluZyBvZiBrZXkgdG8gY2hpbGRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRNYXBwaW5nKGNoaWxkcmVuKSB7XG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIGlmIChuZXh0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBuZXh0W2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZXZba2V5XTtcbiAgfVxuXG4gIC8vIEZvciBlYWNoIGtleSBvZiBgbmV4dGAsIHRoZSBsaXN0IG9mIGtleXMgdG8gaW5zZXJ0IGJlZm9yZSB0aGF0IGtleSBpblxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxuICB2YXIgbmV4dEtleXNQZW5kaW5nID0ge307XG5cbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgIGlmIChuZXh0Lmhhc093blByb3BlcnR5KHByZXZLZXkpKSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpID0gdm9pZCAwO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmcuaGFzT3duUHJvcGVydHkobmV4dEtleSkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2hpbGRNYXBwaW5nW25leHRLZXldID0gZ2V0VmFsdWVGb3JLZXkobmV4dEtleSk7XG4gIH1cblxuICAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvQ2hpbGRNYXBwaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA1MTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NyZWF0ZUVhZ2VyRWxlbWVudFV0aWwgPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUVhZ2VyRWxlbWVudFV0aWwnKTtcblxudmFyIF9jcmVhdGVFYWdlckVsZW1lbnRVdGlsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUVhZ2VyRWxlbWVudFV0aWwpO1xuXG52YXIgX2lzUmVmZXJlbnRpYWxseVRyYW5zcGFyZW50RnVuY3Rpb25Db21wb25lbnQgPSByZXF1aXJlKCcuL2lzUmVmZXJlbnRpYWxseVRyYW5zcGFyZW50RnVuY3Rpb25Db21wb25lbnQnKTtcblxudmFyIF9pc1JlZmVyZW50aWFsbHlUcmFuc3BhcmVudEZ1bmN0aW9uQ29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUmVmZXJlbnRpYWxseVRyYW5zcGFyZW50RnVuY3Rpb25Db21wb25lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlRmFjdG9yeSA9IGZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnkodHlwZSkge1xuICB2YXIgaXNSZWZlcmVudGlhbGx5VHJhbnNwYXJlbnQgPSAoMCwgX2lzUmVmZXJlbnRpYWxseVRyYW5zcGFyZW50RnVuY3Rpb25Db21wb25lbnQyLmRlZmF1bHQpKHR5cGUpO1xuICByZXR1cm4gZnVuY3Rpb24gKHAsIGMpIHtcbiAgICByZXR1cm4gKDAsIF9jcmVhdGVFYWdlckVsZW1lbnRVdGlsMi5kZWZhdWx0KShmYWxzZSwgaXNSZWZlcmVudGlhbGx5VHJhbnNwYXJlbnQsIHR5cGUsIHAsIGMpO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRmFjdG9yeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVjb21wb3NlL2NyZWF0ZUVhZ2VyRmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gNTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBnZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG5cbiAgaWYgKCFDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50Jztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldERpc3BsYXlOYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWNvbXBvc2UvZ2V0RGlzcGxheU5hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDUxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGlzQ2xhc3NDb21wb25lbnQgPSBmdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KENvbXBvbmVudCkge1xuICByZXR1cm4gQm9vbGVhbihDb21wb25lbnQgJiYgQ29tcG9uZW50LnByb3RvdHlwZSAmJiBfdHlwZW9mKENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkgPT09ICdvYmplY3QnKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzQ2xhc3NDb21wb25lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlY29tcG9zZS9pc0NsYXNzQ29tcG9uZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA1MTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzQ2xhc3NDb21wb25lbnQgPSByZXF1aXJlKCcuL2lzQ2xhc3NDb21wb25lbnQnKTtcblxudmFyIF9pc0NsYXNzQ29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQ2xhc3NDb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXNSZWZlcmVudGlhbGx5VHJhbnNwYXJlbnRGdW5jdGlvbkNvbXBvbmVudCA9IGZ1bmN0aW9uIGlzUmVmZXJlbnRpYWxseVRyYW5zcGFyZW50RnVuY3Rpb25Db21wb25lbnQoQ29tcG9uZW50KSB7XG4gIHJldHVybiBCb29sZWFuKHR5cGVvZiBDb21wb25lbnQgPT09ICdmdW5jdGlvbicgJiYgISgwLCBfaXNDbGFzc0NvbXBvbmVudDIuZGVmYXVsdCkoQ29tcG9uZW50KSAmJiAhQ29tcG9uZW50LmRlZmF1bHRQcm9wcyAmJiAhQ29tcG9uZW50LmNvbnRleHRUeXBlcyAmJiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCAhQ29tcG9uZW50LnByb3BUeXBlcykpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNSZWZlcmVudGlhbGx5VHJhbnNwYXJlbnRGdW5jdGlvbkNvbXBvbmVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVjb21wb3NlL2lzUmVmZXJlbnRpYWxseVRyYW5zcGFyZW50RnVuY3Rpb25Db21wb25lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDUxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBzZXRTdGF0aWMgPSBmdW5jdGlvbiBzZXRTdGF0aWMoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2VDb21wb25lbnQpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIEJhc2VDb21wb25lbnRba2V5XSA9IHZhbHVlO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICByZXR1cm4gQmFzZUNvbXBvbmVudDtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNldFN0YXRpYztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVjb21wb3NlL3NldFN0YXRpYy5qc1xuLy8gbW9kdWxlIGlkID0gNTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfc2V0RGlzcGxheU5hbWUgPSByZXF1aXJlKCcuL3NldERpc3BsYXlOYW1lJyk7XG5cbnZhciBfc2V0RGlzcGxheU5hbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0RGlzcGxheU5hbWUpO1xuXG52YXIgX3dyYXBEaXNwbGF5TmFtZSA9IHJlcXVpcmUoJy4vd3JhcERpc3BsYXlOYW1lJyk7XG5cbnZhciBfd3JhcERpc3BsYXlOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXBEaXNwbGF5TmFtZSk7XG5cbnZhciBfY3JlYXRlRWFnZXJGYWN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVFYWdlckZhY3RvcnknKTtcblxudmFyIF9jcmVhdGVFYWdlckZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFnZXJGYWN0b3J5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc2hvdWxkVXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkVXBkYXRlKHRlc3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChCYXNlQ29tcG9uZW50KSB7XG4gICAgdmFyIGZhY3RvcnkgPSAoMCwgX2NyZWF0ZUVhZ2VyRmFjdG9yeTIuZGVmYXVsdCkoQmFzZUNvbXBvbmVudCk7XG5cbiAgICB2YXIgU2hvdWxkVXBkYXRlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhTaG91bGRVcGRhdGUsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBTaG91bGRVcGRhdGUoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaG91bGRVcGRhdGUpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuXG4gICAgICBTaG91bGRVcGRhdGUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRlc3QodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIFNob3VsZFVwZGF0ZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeSh0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBTaG91bGRVcGRhdGU7XG4gICAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm4gKDAsIF9zZXREaXNwbGF5TmFtZTIuZGVmYXVsdCkoKDAsIF93cmFwRGlzcGxheU5hbWUyLmRlZmF1bHQpKEJhc2VDb21wb25lbnQsICdzaG91bGRVcGRhdGUnKSkoU2hvdWxkVXBkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIFNob3VsZFVwZGF0ZTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHNob3VsZFVwZGF0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVjb21wb3NlL3Nob3VsZFVwZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlRWFnZXJFbGVtZW50VXRpbCA9IGZ1bmN0aW9uIGNyZWF0ZUVhZ2VyRWxlbWVudFV0aWwoaGFzS2V5LCBpc1JlZmVyZW50aWFsbHlUcmFuc3BhcmVudCwgdHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIGlmICghaGFzS2V5ICYmIGlzUmVmZXJlbnRpYWxseVRyYW5zcGFyZW50KSB7XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gdHlwZShfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGUocHJvcHMpO1xuICB9XG5cbiAgdmFyIENvbXBvbmVudCA9IHR5cGU7XG5cbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcHJvcHMsXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH1cblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcyk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYWdlckVsZW1lbnRVdGlsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWNvbXBvc2UvdXRpbHMvY3JlYXRlRWFnZXJFbGVtZW50VXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gNTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcERvd25NZW51IGZyb20gJ21hdGVyaWFsLXVpL0Ryb3BEb3duTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xuXG5jb25zdCBNZW51U2VsZWN0ID0gKHsgaWQsIG5hbWUsIHRpdGxlLCBzZWxlY3RlZE9wdGlvbiwgY29udHJvbEZ1bmMsIGRvY0FjY2VzcyA9IFtdIH0pID0+IChcbiAgPGRpdj5cbiAgICA8RHJvcERvd25NZW51IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9wZW5JbW1lZGlhdGVseT17dHJ1ZX0+XG4gICAgICA8TWVudUl0ZW0gdmFsdWU9ezF9IHByaW1hcnlUZXh0PVwiTmV2ZXJcIiAvPlxuICAgICAgPE1lbnVJdGVtIHZhbHVlPXsyfSBwcmltYXJ5VGV4dD1cIkV2ZXJ5IE5pZ2h0XCIgLz5cbiAgICAgIDxNZW51SXRlbSB2YWx1ZT17M30gcHJpbWFyeVRleHQ9XCJXZWVrbmlnaHRzXCIgLz5cbiAgICAgIDxNZW51SXRlbSB2YWx1ZT17NH0gcHJpbWFyeVRleHQ9XCJXZWVrZW5kc1wiIC8+XG4gICAgICA8TWVudUl0ZW0gdmFsdWU9ezV9IHByaW1hcnlUZXh0PVwiV2Vla2x5XCIgLz5cbiAgICA8L0Ryb3BEb3duTWVudT5cbiAgICA8bGFiZWw+e3RpdGxlfTwvbGFiZWw+XG4gIDwvZGl2PlxuKTtcblxuU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkb2NBY2Nlc3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICBzZWxlY3RlZE9wdGlvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udHJvbEZ1bmM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51U2VsZWN0OyAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybXNDb21wb25lbnQvTWVudVNlbGVjdC5qc3giXSwic291cmNlUm9vdCI6IiJ9