webpackHotUpdate(0,{

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(38);

var _history = __webpack_require__(179);

var _reactRedux = __webpack_require__(116);

var _reactRedux2 = _interopRequireDefault(_reactRedux);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavigationBar = __webpack_require__(49);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _Home = __webpack_require__(277);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(276);

var _Details2 = _interopRequireDefault(_Details);

var _Login = __webpack_require__(278);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(280);

var _Register2 = _interopRequireDefault(_Register);

var _NotFound = __webpack_require__(279);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ApiCalls = __webpack_require__(50);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _history.createBrowserHistory)();

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    { history: history },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/detail', component: _Details2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/new', component: _Details2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
    )
  );
};
exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbImhpc3RvcnkiLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUdBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxvQ0FBaEI7O0FBRUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsU0FDRTtBQUFBO0FBQUEsTUFBUSxTQUFTRCxPQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFLDZEQUFPLE1BQUssUUFBWixFQUFxQiwwQkFBckIsR0FERjtBQUVFLDZEQUFPLE1BQUssV0FBWixFQUF3Qiw2QkFBeEIsR0FGRjtBQUdFLDZEQUFPLE1BQUssR0FBWixFQUFnQix5QkFBaEIsR0FIRjtBQUlFLDZEQUFPLE1BQUssU0FBWixFQUFzQiw0QkFBdEIsR0FKRjtBQUtFLDZEQUFPLE1BQUssTUFBWixFQUFtQiw0QkFBbkIsR0FMRjtBQU1FLDZEQUFPLE1BQUssR0FBWixFQUFnQiw2QkFBaEI7QUFORjtBQURGLEdBREY7QUFXRCxDQVpEO2tCQWFlQyxNIiwiZmlsZSI6IjAuOTBkNzcwMGI3ZGY3M2ZlZjU4NDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFJlZGlyZWN0LCBTd2l0Y2gsIGJyb3dzZXJIaXN0b3J5XG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCBQcm92aWRlciBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL2NvbXBvbmVudHMvRGV0YWlscyc7XG5pbXBvcnQgQ3JlYXRlRG9jdW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdGVyJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi91dGlsL0FwaUNhbGxzJztcblxuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XG5cbmNvbnN0IFJvdXRlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsXCIgY29tcG9uZW50PXtEZXRhaWxzfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9uZXdcIiBjb21wb25lbnQ9e0NyZWF0ZURvY3VtZW50fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Sb3V0ZXI+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L1JvdXRlcy5qc3giXSwic291cmNlUm9vdCI6IiJ9