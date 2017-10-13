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
      _react2.default.createElement(_reactRouterDom.Route, { path: '/new', component: Create }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
    )
  );
};
exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbImhpc3RvcnkiLCJSb3V0ZXMiLCJDcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUdBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxvQ0FBaEI7O0FBRUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsU0FDRTtBQUFBO0FBQUEsTUFBUSxTQUFTRCxPQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFLDZEQUFPLE1BQUssUUFBWixFQUFxQiwwQkFBckIsR0FERjtBQUVFLDZEQUFPLE1BQUssV0FBWixFQUF3Qiw2QkFBeEIsR0FGRjtBQUdFLDZEQUFPLE1BQUssR0FBWixFQUFnQix5QkFBaEIsR0FIRjtBQUlFLDZEQUFPLE1BQUssU0FBWixFQUFzQiw0QkFBdEIsR0FKRjtBQUtFLDZEQUFPLE1BQUssTUFBWixFQUFtQixXQUFXRSxNQUE5QixHQUxGO0FBTUUsNkRBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQU5GO0FBREYsR0FERjtBQVdELENBWkQ7a0JBYWVELE0iLCJmaWxlIjoiMC42ZDg2MDc0MzkxOTVlNDY5YjY0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgUmVkaXJlY3QsIFN3aXRjaCwgYnJvd3Nlckhpc3Rvcnlcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vY29tcG9uZW50cy9EZXRhaWxzJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4vdXRpbC9BcGlDYWxscyc7XG5cbmNvbnN0IGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuXG5jb25zdCBSb3V0ZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBjb21wb25lbnQ9e1JlZ2lzdGVyfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RldGFpbFwiIGNvbXBvbmVudD17RGV0YWlsc30gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3XCIgY29tcG9uZW50PXtDcmVhdGV9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICA8L1N3aXRjaD5cbiAgICA8L1JvdXRlcj4pO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvUm91dGVzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=