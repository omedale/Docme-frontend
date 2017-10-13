webpackHotUpdate(0,{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(14), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(232);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavigationBar = __webpack_require__(95);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _Home = __webpack_require__(218);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(217);

var _Details2 = _interopRequireDefault(_Details);

var _Login = __webpack_require__(219);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(265);

var _Register2 = _interopRequireDefault(_Register);

var _NotFound = __webpack_require__(220);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ApiCalls = __webpack_require__(292);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: Sources, history: browserHistory }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: Regi }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/articles/:id/:name', component: Articles }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/favorite', component: FavoriteNews }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: NopageFound })
    )
  );
};
exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlJvdXRlcyIsIlNvdXJjZXMiLCJicm93c2VySGlzdG9yeSIsIlJlZ2kiLCJBcnRpY2xlcyIsIkZhdm9yaXRlTmV3cyIsIk5vcGFnZUZvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLDZEQUFPLFdBQVAsRUFBYSxNQUFLLEdBQWxCLEVBQXNCLFdBQVdDLE9BQWpDLEVBQTBDLFNBQVNDLGNBQW5ELEdBREY7QUFFRSw2REFBTyxNQUFLLFFBQVosRUFBcUIsMEJBQXJCLEdBRkY7QUFHRSw2REFBTyxNQUFLLFdBQVosRUFBd0IsV0FBV0MsSUFBbkMsR0FIRjtBQUlFLDZEQUFPLE1BQUsscUJBQVosRUFBa0MsV0FBV0MsUUFBN0MsR0FKRjtBQUtFLDZEQUFPLE1BQUssV0FBWixFQUF3QixXQUFXQyxZQUFuQyxHQUxGO0FBTUUsNkRBQU8sTUFBSyxHQUFaLEVBQWdCLFdBQVdDLFdBQTNCO0FBTkY7QUFERixHQURGO0FBV0QsQ0FaRDtrQkFhZU4sTSIsImZpbGUiOiIwLjYzNTE4MGFjMzkxMTkyYmMwMzg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdGVyJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi91dGlsL0FwaUNhbGxzJztcblxuY29uc3QgUm91dGVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXIgPlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtTb3VyY2VzfSBoaXN0b3J5PXticm93c2VySGlzdG9yeX0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGNvbXBvbmVudD17UmVnaX0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXJ0aWNsZXMvOmlkLzpuYW1lXCIgY29tcG9uZW50PXtBcnRpY2xlc30gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZmF2b3JpdGVcIiBjb21wb25lbnQ9e0Zhdm9yaXRlTmV3c30gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3BhZ2VGb3VuZH0gLz5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvUm91dGVyPik7XG59O1xuZXhwb3J0IGRlZmF1bHQgUm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9Sb3V0ZXMuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==