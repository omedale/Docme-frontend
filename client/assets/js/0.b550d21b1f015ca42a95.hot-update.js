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

    case types.ERROR_MESSAGE:
      return action.errors;

    default:
      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInR5cGVzIiwic3RhdGUiLCJkb2N1bWVudHMiLCJhY3Rpb24iLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UX1NVQ0NFU1MiLCJPYmplY3QiLCJhc3NpZ24iLCJkb2N1bWVudCIsIlVQREFURV9ET0NVTUVOVF9TVUNDRVNTIiwiZmlsdGVyIiwiaWQiLCJMT0FEX0RPQ1VNRU5UU19TVUNDRVNTIiwiRVJST1JfTUVTU0FHRSIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2tCQUV3QkEsZTs7QUFGeEI7O0lBQVlDLEs7O0FBQ1o7Ozs7Ozs7Ozs7QUFDZSxTQUFTRCxlQUFULEdBQWlFO0FBQUEsTUFBeENFLEtBQXdDLHVFQUFoQyx1QkFBYUMsU0FBbUI7QUFBQSxNQUFSQyxNQUFROztBQUM5RSxVQUFRQSxPQUFPQyxJQUFmO0FBQ0UsU0FBS0osTUFBTUssdUJBQVg7QUFDRSwwQ0FBV0osS0FBWCxJQUNBSyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosT0FBT0ssUUFBekIsQ0FEQTs7QUFJRixTQUFLUixNQUFNUyx1QkFBWDtBQUNFLDBDQUNLUixNQUFNUyxNQUFOLENBQWE7QUFBQSxlQUFZRixTQUFTRyxFQUFULEtBQWdCUixPQUFPSyxRQUFQLENBQWdCRyxFQUE1QztBQUFBLE9BQWIsQ0FETCxJQUVFTCxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosT0FBT0ssUUFBekIsQ0FGRjs7QUFLRixTQUFLUixNQUFNWSxzQkFBWDtBQUNFLGFBQU9ULE9BQU9LLFFBQWQ7O0FBRUYsU0FBS1IsTUFBTWEsYUFBWDtBQUNFLGFBQU9WLE9BQU9XLE1BQWQ7O0FBRUY7QUFDRSxhQUFPYixLQUFQO0FBbkJKO0FBcUJELEMiLCJmaWxlIjoiMC5iNTUwZDIxYjFmMDE1Y2E0MmE5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9jdW1lbnRSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLmRvY3VtZW50cywgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkNSRUFURV9ET0NVTUVOVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbi5kb2N1bWVudClcbiAgICAgIF07XG4gICAgICBcbiAgICBjYXNlIHR5cGVzLlVQREFURV9ET0NVTUVOVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uc3RhdGUuZmlsdGVyKGRvY3VtZW50ID0+IGRvY3VtZW50LmlkICE9PSBhY3Rpb24uZG9jdW1lbnQuaWQpLFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24uZG9jdW1lbnQpXG4gICAgICBdO1xuXG4gICAgY2FzZSB0eXBlcy5MT0FEX0RPQ1VNRU5UU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5kb2N1bWVudDtcblxuICAgIGNhc2UgdHlwZXMuRVJST1JfTUVTU0FHRTpcbiAgICAgIHJldHVybiBhY3Rpb24uZXJyb3JzO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9yZWR1Y2Vycy9kb2N1bWVudFJlZHVjZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==