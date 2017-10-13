webpackHotUpdate(0,{

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(47);

var _reactRedux = __webpack_require__(319);

var _reactRedux2 = _interopRequireDefault(_reactRedux);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavigationBar = __webpack_require__(45);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _Home = __webpack_require__(246);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(245);

var _Details2 = _interopRequireDefault(_Details);

var _Login = __webpack_require__(247);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(249);

var _Register2 = _interopRequireDefault(_Register);

var _NotFound = __webpack_require__(248);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ApiCalls = __webpack_require__(46);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRedux2.default,
    null,
    _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      { history: _reactRouterDom.browserHistory },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/detail', component: _Details2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
      )
    )
  );
};
exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(20); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxRQUFRLHVDQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsK0RBQU8sTUFBSyxRQUFaLEVBQXFCLDBCQUFyQixHQURGO0FBRUUsK0RBQU8sTUFBSyxXQUFaLEVBQXdCLDZCQUF4QixHQUZGO0FBR0UsK0RBQU8sTUFBSyxHQUFaLEVBQWdCLHlCQUFoQixHQUhGO0FBSUUsK0RBQU8sTUFBSyxTQUFaLEVBQXNCLDRCQUF0QixHQUpGO0FBS0UsK0RBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQUxGO0FBREY7QUFEQSxHQURGO0FBWUQsQ0FiRDtrQkFjZUEsTSIsImZpbGUiOiIwLjljZDg1NWI5MjY5MzQwMTg0NWEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoLCBicm93c2VySGlzdG9yeVxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQcm92aWRlciBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL2NvbXBvbmVudHMvRGV0YWlscyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0ZXInO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuL3V0aWwvQXBpQ2FsbHMnO1xuXG5jb25zdCBSb3V0ZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyPlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsXCIgY29tcG9uZW50PXtEZXRhaWxzfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Sb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj4pO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvUm91dGVzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=