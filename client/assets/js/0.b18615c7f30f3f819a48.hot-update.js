webpackHotUpdate(0,{

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(39);

var _history = __webpack_require__(184);

var _reactRedux = __webpack_require__(52);

var _reactRedux2 = _interopRequireDefault(_reactRedux);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavigationBar = __webpack_require__(38);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _Home = __webpack_require__(283);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(282);

var _Details2 = _interopRequireDefault(_Details);

var _CreateDocument = __webpack_require__(281);

var _CreateDocument2 = _interopRequireDefault(_CreateDocument);

var _Login = __webpack_require__(284);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(286);

var _Register2 = _interopRequireDefault(_Register);

var _NotFound = __webpack_require__(285);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ApiCalls = __webpack_require__(51);

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
      _react2.default.createElement(_reactRouterDom.Route, { path: '/new', component: Re }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
    )
  );
};
exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbImhpc3RvcnkiLCJSb3V0ZXMiLCJSZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsb0NBQWhCOztBQUVBLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFNBQ0U7QUFBQTtBQUFBLE1BQVEsU0FBU0QsT0FBakI7QUFDRTtBQUFBO0FBQUE7QUFDRSw2REFBTyxNQUFLLFFBQVosRUFBcUIsMEJBQXJCLEdBREY7QUFFRSw2REFBTyxNQUFLLFdBQVosRUFBd0IsNkJBQXhCLEdBRkY7QUFHRSw2REFBTyxNQUFLLEdBQVosRUFBZ0IseUJBQWhCLEdBSEY7QUFJRSw2REFBTyxNQUFLLFNBQVosRUFBc0IsNEJBQXRCLEdBSkY7QUFLRSw2REFBTyxNQUFLLE1BQVosRUFBbUIsV0FBV0UsRUFBOUIsR0FMRjtBQU1FLDZEQUFPLE1BQUssR0FBWixFQUFnQiw2QkFBaEI7QUFORjtBQURGLEdBREY7QUFXRCxDQVpEO2tCQWFlRCxNIiwiZmlsZSI6IjAuYjE4NjE1YzdmMzBmM2Y4MTlhNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFJlZGlyZWN0LCBTd2l0Y2gsIGJyb3dzZXJIaXN0b3J5XG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCBQcm92aWRlciBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL2NvbXBvbmVudHMvRGV0YWlscyc7XG5pbXBvcnQgQ3JlYXRlRG9jdW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NyZWF0ZURvY3VtZW50JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4vdXRpbC9BcGlDYWxscyc7XG5cbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuXG5jb25zdCBSb3V0ZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBjb21wb25lbnQ9e1JlZ2lzdGVyfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RldGFpbFwiIGNvbXBvbmVudD17RGV0YWlsc30gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3XCIgY29tcG9uZW50PXtSZX0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvUm91dGVyPik7XG59O1xuZXhwb3J0IGRlZmF1bHQgUm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9Sb3V0ZXMuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==