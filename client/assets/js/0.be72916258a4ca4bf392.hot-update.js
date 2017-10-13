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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.action;

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInR5cGVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2tCQUV3QkEsZTs7QUFGeEI7O0lBQVlDLEs7O0FBQ1o7Ozs7Ozs7Ozs7QUFDZSxTQUFTRCxlQUFULEdBQXdEO0FBQUEsTUFBL0JFLEtBQStCLHVFQUF2Qix1QkFBZUMsTUFBUTs7QUFDckUsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUtILE1BQU1JLGVBQVg7QUFDQUMsY0FBUUMsR0FBUixDQUFZSixPQUFPSyxRQUFuQjtBQUNFLDBDQUFXTixLQUFYLElBQ0VPLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxPQUFPSyxRQUF6QixDQURGO0FBR0YsU0FBS1AsTUFBTVUsc0JBQVg7QUFDRSxhQUFPUixPQUFPSyxRQUFkOztBQUVGO0FBQ0UsYUFBT04sS0FBUDtBQVZKO0FBWUQsQyIsImZpbGUiOiIwLmJlNzI5MTYyNThhNGNhNGJmMzkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkb2N1bWVudFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUuICBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuQ1JFQVRFX0RPQ1VNRU5UOlxuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kb2N1bWVudCk7XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24uZG9jdW1lbnQpXG4gICAgICBdO1xuICAgIGNhc2UgdHlwZXMuTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiBhY3Rpb24uZG9jdW1lbnQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3JlZHVjZXJzL2RvY3VtZW50UmVkdWNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9