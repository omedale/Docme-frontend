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

var _reduxThunk = __webpack_require__(325);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  console.log(_rootReducer2.default);
  return (0, _redux.createStore)(_rootReducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "configureStore.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmUvY29uZmlndXJlU3RvcmUuanN4PzI3MWUiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7a0JBSXdCQSxjOztBQUp4Qjs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxjQUFULENBQXdCQyxZQUF4QixFQUFzQztBQUNuREMsVUFBUUMsR0FBUjtBQUNBLFNBQU8sK0NBRUxGLFlBRkssRUFHTCxpREFISyxDQUFQO0FBS0QsQyIsImZpbGUiOiIwLmZhYWQ0OWVmMGE0Nzg2MmRhNmUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgY29uc29sZS5sb2cocm9vdFJlZHVjZXIpXG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlciwgXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcbiAgKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3RvcmUvY29uZmlndXJlU3RvcmUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==