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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInR5cGVzIiwic3RhdGUiLCJkb2N1bWVudHMiLCJhY3Rpb24iLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UX1NVQ0NFU1MiLCJPYmplY3QiLCJhc3NpZ24iLCJkb2N1bWVudCIsIkxPQURfRE9DVU1FTlRTX1NVQ0NFU1MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztrQkFFd0JBLGU7O0FBRnhCOztJQUFZQyxLOztBQUNaOzs7Ozs7Ozs7O0FBQ2UsU0FBU0QsZUFBVCxHQUFrRTtBQUFBLE1BQXpDRSxLQUF5Qyx1RUFBakMsdUJBQWFDLFNBQW9CO0FBQUEsTUFBUkMsTUFBUTs7QUFDL0UsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUtKLE1BQU1LLHVCQUFYO0FBQ0UsMENBQVdKLEtBQVgsSUFDRUssT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JKLE9BQU9LLFFBQXpCLENBREY7QUFHRixTQUFLUixNQUFNUyxzQkFBWDtBQUNFLGFBQU9OLE9BQU9LLFFBQWQ7O0FBRUY7QUFDRSxhQUFPUCxLQUFQO0FBVEo7QUFXRCxDIiwiZmlsZSI6IjAuNTUxNjI1ZWJmNDljNzA5YzA5Y2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvY3VtZW50UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZS5kb2N1bWVudHMsICBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuQ1JFQVRFX0RPQ1VNRU5UX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24uZG9jdW1lbnQpXG4gICAgICBdO1xuICAgIGNhc2UgdHlwZXMuTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24uZG9jdW1lbnQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3JlZHVjZXJzL2RvY3VtZW50UmVkdWNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9