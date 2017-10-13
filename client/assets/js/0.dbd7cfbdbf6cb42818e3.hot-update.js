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
      _react2.default.createElement(_reactRouterDom.Route, { path: '/details', component: _Details2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document', component: MDocument }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document/:id', component: _CreateDocument2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
    )
  );
};
exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbImhpc3RvcnkiLCJSb3V0ZXMiLCJNRG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUdBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLG9DQUFoQjs7QUFFQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQUE7QUFBQSxNQUFRLFNBQVNELE9BQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsNkRBQU8sTUFBSyxRQUFaLEVBQXFCLDBCQUFyQixHQURGO0FBRUUsNkRBQU8sTUFBSyxXQUFaLEVBQXdCLDZCQUF4QixHQUZGO0FBR0UsNkRBQU8sTUFBSyxVQUFaLEVBQXVCLDRCQUF2QixHQUhGO0FBSUUsNkRBQU8sTUFBSyxXQUFaLEVBQXdCLFdBQVdFLFNBQW5DLEdBSkY7QUFLRSw2REFBTyxNQUFLLGVBQVosRUFBNEIsbUNBQTVCLEdBTEY7QUFNRSw2REFBTyxNQUFLLEdBQVosRUFBZ0IseUJBQWhCLEdBTkY7QUFPRSw2REFBTyxNQUFLLEdBQVosRUFBZ0IsNkJBQWhCO0FBUEY7QUFERixHQURGO0FBWUQsQ0FiRDtrQkFjZUQsTSIsImZpbGUiOiIwLmRiZDdjZmJkYmY2Y2I0MjgxOGUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoLCBicm93c2VySGlzdG9yeVxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgUHJvdmlkZXIgZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHMnO1xuaW1wb3J0IENyZWF0ZURvY3VtZW50IGZyb20gJy4vY29tcG9uZW50cy9DcmVhdGVEb2N1bWVudCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0ZXInO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuL3V0aWwvQXBpQ2FsbHMnO1xuXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuY29uc3QgUm91dGVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlZ2lzdGVyXCIgY29tcG9uZW50PXtSZWdpc3Rlcn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsc1wiIGNvbXBvbmVudD17RGV0YWlsc30gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9jdW1lbnRcIiBjb21wb25lbnQ9e01Eb2N1bWVudH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9jdW1lbnQvOmlkXCIgY29tcG9uZW50PXtDcmVhdGVEb2N1bWVudH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Sb3V0ZXI+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L1JvdXRlcy5qc3giXSwic291cmNlUm9vdCI6IiJ9