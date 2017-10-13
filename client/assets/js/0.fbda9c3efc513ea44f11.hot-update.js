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
  console;
  return (0, _redux.createStore)(_rootReducer2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "configureStore.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RvcmUvY29uZmlndXJlU3RvcmUuanN4PzI3MWUiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7a0JBSXdCQSxjOztBQUp4Qjs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxjQUFULENBQXdCQyxZQUF4QixFQUFzQztBQUNuREM7QUFDQSxTQUFPLCtDQUVMRCxZQUZLLEVBR0wsaURBSEssQ0FBUDtBQUtELEMiLCJmaWxlIjoiMC5mYmRhOWMzZWZjNTEzZWE0NGYxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvcm9vdFJlZHVjZXInO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnNvbGVcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLCBcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxuICApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zdG9yZS9jb25maWd1cmVTdG9yZS5qc3giXSwic291cmNlUm9vdCI6IiJ9