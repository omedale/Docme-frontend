webpackHotUpdate(0,{

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = documentReducer;

var _actionTypes = __webpack_require__(115);

var types = _interopRequireWildcard(_actionTypes);

var _initialState = __webpack_require__(351);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function documentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : action;

  switch (action.type) {
    case types.CREATE_DOCUMENT:
      console.log(action.document);
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.document)]);
    case types.LOAD_DOCUMENTS_SUCCESS:
      return action.document;

    default:
      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  documentAccess: [],
  documents: []
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "initialState.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Iiwid2VicGFjazovLy8uL2NsaWVudC9yZWR1Y2Vycy9pbml0aWFsU3RhdGUuanN4Pzg2YmEiXSwibmFtZXMiOlsiZG9jdW1lbnRSZWR1Y2VyIiwidHlwZXMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJDUkVBVEVfRE9DVU1FTlQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJMT0FEX0RPQ1VNRU5UU19TVUNDRVNTIiwiZG9jdW1lbnRBY2Nlc3MiLCJkb2N1bWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztrQkFFd0JBLGU7O0FBRnhCOztJQUFZQyxLOztBQUNaOzs7Ozs7Ozs7O0FBQ2UsU0FBU0QsZUFBVCxHQUEwQztBQUFBLE1BQWpCRSxLQUFpQix1RUFBUkMsTUFBUTs7QUFDdkQsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUtILE1BQU1JLGVBQVg7QUFDQUMsY0FBUUMsR0FBUixDQUFZSixPQUFPSyxRQUFuQjtBQUNFLDBDQUFXTixLQUFYLElBQ0VPLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxPQUFPSyxRQUF6QixDQURGO0FBR0YsU0FBS1AsTUFBTVUsc0JBQVg7QUFDRSxhQUFPUixPQUFPSyxRQUFkOztBQUVGO0FBQ0UsYUFBT04sS0FBUDtBQVZKO0FBWUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDZmM7QUFDYlUsa0JBQWdCLEVBREg7QUFFYkMsYUFBVztBQUZFLEMiLCJmaWxlIjoiMC4zYWM2ZDRjOTgxZGVkNTE1NzllNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkb2N1bWVudFJlZHVjZXIoc3RhdGUgPSAgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkNSRUFURV9ET0NVTUVOVDpcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZG9jdW1lbnQpO1xuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSxcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLmRvY3VtZW50KVxuICAgICAgXTtcbiAgICBjYXNlIHR5cGVzLkxPQURfRE9DVU1FTlRTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLmRvY3VtZW50O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9yZWR1Y2Vycy9kb2N1bWVudFJlZHVjZXIuanN4IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkb2N1bWVudEFjY2VzczogW10sXG4gIGRvY3VtZW50czogW11cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcmVkdWNlcnMvaW5pdGlhbFN0YXRlLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=