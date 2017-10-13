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
store.dispatch(documentActions.AllDocuments());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguanN4PzkzMTkiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwic3RvcmUiLCJkaXNwYXRjaCIsIkFsbERvY3VtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7SUFBYUEsZTs7QUFFYjs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU1DLFFBQVEsK0JBQWQ7QUFDQUEsTUFBTUMsUUFBTixDQUFlRixnQkFBaUJHLFlBQWpCLEVBQWY7QUFDQSxzQkFDRTtBQUFBO0FBQUEsSUFBVSxPQUFPRixLQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBREY7QUFERixDQURGLEVBTUVHLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FORixFIiwiZmlsZSI6IjAuNGI3YWE1Y2M4N2ViYWU5NzAwNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnXG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4vYWN0aW9ucy9kb2N1bWVudEFjdGlvbidcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9Sb3V0ZXMnO1xuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuc3RvcmUuZGlzcGF0Y2goZG9jdW1lbnRBY3Rpb25zLiBBbGxEb2N1bWVudHMoKSk7XG5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXI+XG4gICAgICA8Um91dGVzIC8+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9pbmRleC5qc3giXSwic291cmNlUm9vdCI6IiJ9