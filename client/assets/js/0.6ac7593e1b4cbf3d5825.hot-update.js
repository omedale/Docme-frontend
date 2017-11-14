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
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document/edit/:id', component: _ManageDocument2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document/edit/:id', component: _ManageDocument2.default }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbImhpc3RvcnkiLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUdBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLG9DQUFoQjs7QUFFQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQUE7QUFBQSxNQUFRLFNBQVNELE9BQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsNkRBQU8sTUFBSyxRQUFaLEVBQXFCLDBCQUFyQixHQURGO0FBRUUsNkRBQU8sTUFBSyxXQUFaLEVBQXdCLDZCQUF4QixHQUZGO0FBR0UsNkRBQU8sTUFBSyxlQUFaLEVBQTRCLGlDQUE1QixHQUhGO0FBSUUsNkRBQU8sTUFBSyxvQkFBWixFQUFpQyxtQ0FBakMsR0FKRjtBQUtFLDZEQUFPLE1BQUssb0JBQVosRUFBaUMsbUNBQWpDLEdBTEY7QUFNRSw2REFBTyxNQUFLLFdBQVosRUFBd0IsbUNBQXhCLEdBTkY7QUFPRSw2REFBTyxNQUFLLEdBQVosRUFBZ0IseUJBQWhCLEdBUEY7QUFRRSw2REFBTyxNQUFLLEdBQVosRUFBZ0IsNkJBQWhCO0FBUkY7QUFERixHQURGO0FBYUQsQ0FkRDtrQkFlZUMsTSIsImZpbGUiOiIwLjZhYzc1OTNlMWI0Y2JmM2Q1ODI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgUm91dGVyLCBSb3V0ZSwgUmVkaXJlY3QsIFN3aXRjaCwgYnJvd3Nlckhpc3Rvcnlcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVmlld0RvY3VtZW50IGZyb20gJy4vY29tcG9uZW50cy9WaWV3RG9jdW1lbnQnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHMnO1xuaW1wb3J0IE1hbmFnZURvY3VtZW50IGZyb20gJy4vY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0ZXInO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuL3V0aWwvQXBpQ2FsbHMnO1xuXG5jb25zdCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuY29uc3QgUm91dGVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+XG4gICAgICA8U3dpdGNoPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlZ2lzdGVyXCIgY29tcG9uZW50PXtSZWdpc3Rlcn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9jdW1lbnQvOmlkXCIgY29tcG9uZW50PXtWaWV3RG9jdW1lbnR9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RvY3VtZW50L2VkaXQvOmlkXCIgY29tcG9uZW50PXtNYW5hZ2VEb2N1bWVudH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9jdW1lbnQvZWRpdC86aWRcIiBjb21wb25lbnQ9e01hbmFnZURvY3VtZW50fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9kb2N1bWVudFwiIGNvbXBvbmVudD17TWFuYWdlRG9jdW1lbnR9IC8+ICAgICAgXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvUm91dGVyPik7XG59O1xuZXhwb3J0IGRlZmF1bHQgUm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9Sb3V0ZXMuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==