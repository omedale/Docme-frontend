webpackHotUpdate(0,{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(200);

var _reactRouterDom = __webpack_require__(27);

var _reactRedux = __webpack_require__(52);

var _configureStore = __webpack_require__(293);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _documentAction = __webpack_require__(76);

var documentActions = _interopRequireWildcard(_documentAction);

var _App = __webpack_require__(280);

var _App2 = _interopRequireDefault(_App);

var _Routes = __webpack_require__(279);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();
store.dispatch(AllDocuments());
(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_Routes2.default, null)
  )
), document.getElementById('app'));

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguanN4PzkzMTkiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwic3RvcmUiLCJkaXNwYXRjaCIsIkFsbERvY3VtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7SUFBYUEsZTs7QUFFYjs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU1DLFFBQVEsK0JBQWQ7QUFDQUEsTUFBTUMsUUFBTixDQUFlQyxjQUFmO0FBQ0Esc0JBQ0U7QUFBQTtBQUFBLElBQVUsT0FBT0YsS0FBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQURGO0FBREYsQ0FERixFQU1FRyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBTkYsRSIsImZpbGUiOiIwLjgxNzdmYzUzMTM3ODg0ZDNhMDcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vUm91dGVzJztcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcbnN0b3JlLmRpc3BhdGNoKEFsbERvY3VtZW50cygpKTtcbnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlcj5cbiAgICAgIDxSb3V0ZXMgLz5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2luZGV4LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=