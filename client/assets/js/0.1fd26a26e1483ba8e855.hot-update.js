webpackHotUpdate(0,{

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = documentReducer;

var _actionTypes = __webpack_require__(119);

var types = _interopRequireWildcard(_actionTypes);

var _initialState = __webpack_require__(291);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function documentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.documents;
  var action = arguments[1];

  switch (action.type) {
    case types.CREATE_DOCUMENT_SUCCESS:
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.document)]);

    case types.UPDATE_DOCUMENT_SUCCESS:
      return [].concat(_toConsumableArray(state.filter(function (document) {
        return document.id !== action.document.id;
      })), [Object.assign({}, action.document)]);

    case types.LOAD_DOCUMENTS_SUCCESS:
      return action.document;

    default:
      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInR5cGVzIiwic3RhdGUiLCJkb2N1bWVudHMiLCJhY3Rpb24iLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UX1NVQ0NFU1MiLCJPYmplY3QiLCJhc3NpZ24iLCJkb2N1bWVudCIsIlVQREFURV9ET0NVTUVOVF9TVUNDRVNTIiwiZmlsdGVyIiwiaWQiLCJMT0FEX0RPQ1VNRU5UU19TVUNDRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7a0JBRXdCQSxlOztBQUZ4Qjs7SUFBWUMsSzs7QUFDWjs7Ozs7Ozs7OztBQUNlLFNBQVNELGVBQVQsR0FBaUU7QUFBQSxNQUF4Q0UsS0FBd0MsdUVBQWhDLHVCQUFhQyxTQUFtQjtBQUFBLE1BQVJDLE1BQVE7O0FBQzlFLFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLSixNQUFNSyx1QkFBWDtBQUNFLDBDQUFXSixLQUFYLElBQ0FLLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSixPQUFPSyxRQUF6QixDQURBOztBQUlGLFNBQUtSLE1BQU1TLHVCQUFYO0FBQ0UsMENBQ0tSLE1BQU1TLE1BQU4sQ0FBYTtBQUFBLGVBQVlGLFNBQVNHLEVBQVQsS0FBZ0JSLE9BQU9LLFFBQVAsQ0FBZ0JHLEVBQTVDO0FBQUEsT0FBYixDQURMLElBRUVMLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSixPQUFPSyxRQUF6QixDQUZGOztBQUtGLFNBQUtSLE1BQU1ZLHNCQUFYO0FBQ0UsYUFBT1QsT0FBT0ssUUFBZDs7QUFFRjtBQUNFLGFBQU9QLEtBQVA7QUFoQko7QUFrQkQsQyIsImZpbGUiOiIwLjFmZDI2YTI2ZTE0ODNiYThlODU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkb2N1bWVudFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUuZG9jdW1lbnRzLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuQ1JFQVRFX0RPQ1VNRU5UX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLmRvY3VtZW50KVxuICAgICAgXTtcbiAgICAgIFxuICAgIGNhc2UgdHlwZXMuVVBEQVRFX0RPQ1VNRU5UX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZS5maWx0ZXIoZG9jdW1lbnQgPT4gZG9jdW1lbnQuaWQgIT09IGFjdGlvbi5kb2N1bWVudC5pZCksXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbi5kb2N1bWVudClcbiAgICAgIF07XG5cbiAgICBjYXNlIHR5cGVzLkxPQURfRE9DVU1FTlRTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLmRvY3VtZW50O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9yZWR1Y2Vycy9kb2N1bWVudFJlZHVjZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==