webpackHotUpdate(0,{

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(128);

var _rootReducer = __webpack_require__(342);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

function configureStore(initialState) {
  return (0, _redux.createStore)(_rootReducer2.default, initialState, (0, _redux.applyMiddleware)(thunk));
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "configureStore.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmUvY29uZmlndXJlU3RvcmUuanN4PzI3MWUiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJ0aHVuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2tCQUl3QkEsYzs7QUFKeEI7O0FBQ0E7Ozs7OztBQUNBOztBQUVlLFNBQVNBLGNBQVQsQ0FBd0JDLFlBQXhCLEVBQXNDO0FBQ25ELFNBQU8sK0NBRUxBLFlBRkssRUFHTCw0QkFBZ0JDLEtBQWhCLENBSEssQ0FBUDtBQUtELEMiLCJmaWxlIjoiMC43NTJlNTQxNDc3NjU5OTcyOGQyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvcm9vdFJlZHVjZXInO1xuLy8gaW1wb3J0IHJlZHV4SW1tdXRhYmxlU3RhdGVJbnZhcmlhbnQgZnJvbSAncmVkdXgtaW1tdXRhYmxlLXN0YXRlLWludmFyaWFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcbiAgKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmUvY29uZmlndXJlU3RvcmUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==