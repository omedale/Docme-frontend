webpackHotUpdate(0,{

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(41);

var _documentReducer = __webpack_require__(290);

var _documentReducer2 = _interopRequireDefault(_documentReducer);

var _errorReducer = __webpack_require__(351);

var _errorReducer2 = _interopRequireDefault(_errorReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  documents: _documentReducer2.default
});

exports.default = rootReducer;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "rootReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = errorReducer;

var _actionTypes = __webpack_require__(119);

var types = _interopRequireWildcard(_actionTypes);

var _initialState = __webpack_require__(291);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function errorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.errors;
  var action = arguments[1];

  switch (action.type) {
    case types.ERROR_MESSAGE:
      return action.errors;

    default:
      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "errorReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvcm9vdFJlZHVjZXIuanN4PzViNDUiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3JlZHVjZXJzL2Vycm9yUmVkdWNlci5qc3g/ZTUwZCJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImRvY3VtZW50cyIsImVycm9yUmVkdWNlciIsInR5cGVzIiwic3RhdGUiLCJlcnJvcnMiLCJhY3Rpb24iLCJ0eXBlIiwiRVJST1JfTUVTU0FHRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGNBQWMsNEJBQWdCO0FBQ2xDQztBQURrQyxDQUFoQixDQUFwQjs7a0JBSWVELFc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ05TRSxZOztBQUZ4Qjs7SUFBWUMsSzs7QUFDWjs7Ozs7Ozs7QUFDZSxTQUFTRCxZQUFULEdBQTJEO0FBQUEsTUFBckNFLEtBQXFDLHVFQUE3Qix1QkFBYUMsTUFBZ0I7QUFBQSxNQUFSQyxNQUFROztBQUN4RSxVQUFRQSxPQUFPQyxJQUFmO0FBQ0UsU0FBS0osTUFBTUssYUFBWDtBQUNFLGFBQU9GLE9BQU9ELE1BQWQ7O0FBRUY7QUFDRSxhQUFPRCxLQUFQO0FBTEo7QUFPRCxDIiwiZmlsZSI6IjAuZTVjNjYyNTQzOWVlNDE1NGE3MmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgZG9jdW1lbnRzIGZyb20gJy4vZG9jdW1lbnRSZWR1Y2VyJztcbmltcG9ydCBlcnJvcnMgZnJvbSAnLi9lcnJvclJlZHVjZXInO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7IFxuICBkb2N1bWVudHNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9yZWR1Y2Vycy9yb290UmVkdWNlci5qc3giLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlcnJvclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUuZXJyb3JzLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuRVJST1JfTUVTU0FHRTpcbiAgICAgIHJldHVybiBhY3Rpb24uZXJyb3JzO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9yZWR1Y2Vycy9lcnJvclJlZHVjZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==