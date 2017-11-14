webpackHotUpdate(0,{

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _history = __webpack_require__(104);

var _reactRedux = __webpack_require__(47);

var _reactRedux2 = _interopRequireDefault(_reactRedux);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ViewDocument = __webpack_require__(296);

var _ViewDocument2 = _interopRequireDefault(_ViewDocument);

var _Home = __webpack_require__(290);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(287);

var _Details2 = _interopRequireDefault(_Details);

var _ManageDocument = __webpack_require__(292);

var _ManageDocument2 = _interopRequireDefault(_ManageDocument);

var _Login = __webpack_require__(291);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(294);

var _Register2 = _interopRequireDefault(_Register);

var _NotFound = __webpack_require__(293);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ApiCalls = __webpack_require__(34);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _history.createBrowserHistory)();

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.Router,
    { history: history },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document/:id', component: _ViewDocument2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document/edit/:id', component: _ViewDocument2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document', component: _ManageDocument2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
    )
  );
};
exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbImhpc3RvcnkiLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUdBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLG9DQUFoQjs7QUFFQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQUE7QUFBQSxNQUFRLFNBQVNELE9BQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsNkRBQU8sTUFBSyxRQUFaLEVBQXFCLDBCQUFyQixHQURGO0FBRUUsNkRBQU8sTUFBSyxXQUFaLEVBQXdCLDZCQUF4QixHQUZGO0FBR0UsNkRBQU8sTUFBSyxlQUFaLEVBQTRCLGlDQUE1QixHQUhGO0FBSUUsNkRBQU8sTUFBSyxvQkFBWixFQUFpQyxpQ0FBakMsR0FKRjtBQUtFLDZEQUFPLE1BQUssV0FBWixFQUF3QixtQ0FBeEIsR0FMRjtBQU1FLDZEQUFPLE1BQUssR0FBWixFQUFnQix5QkFBaEIsR0FORjtBQU9FLDZEQUFPLE1BQUssR0FBWixFQUFnQiw2QkFBaEI7QUFQRjtBQURGLEdBREY7QUFZRCxDQWJEO2tCQWNlQyxNIiwiZmlsZSI6IjAuYTQ2OWMwMDJlNTc1N2Q5ODM0NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoLCBicm93c2VySGlzdG9yeVxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgUHJvdmlkZXIgZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBWaWV3RG9jdW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL1ZpZXdEb2N1bWVudCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL2NvbXBvbmVudHMvRGV0YWlscyc7XG5pbXBvcnQgTWFuYWdlRG9jdW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL01hbmFnZURvY3VtZW50JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4vdXRpbC9BcGlDYWxscyc7XG5cbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuXG5jb25zdCBSb3V0ZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBjb21wb25lbnQ9e1JlZ2lzdGVyfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9kb2N1bWVudC86aWRcIiBjb21wb25lbnQ9e1ZpZXdEb2N1bWVudH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9jdW1lbnQvZWRpdC86aWRcIiBjb21wb25lbnQ9e1ZpZXdEb2N1bWVudH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9jdW1lbnRcIiBjb21wb25lbnQ9e01hbmFnZURvY3VtZW50fSAvPiAgICAgIFxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L1JvdXRlcj4pO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvUm91dGVzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=