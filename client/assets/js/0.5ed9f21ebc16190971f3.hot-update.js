webpackHotUpdate(0,{

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(110);

var _reactRouterDom = __webpack_require__(26);

var _reactRedux = __webpack_require__(58);

var _configureStore = __webpack_require__(299);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _documentAction = __webpack_require__(57);

var documentActions = _interopRequireWildcard(_documentAction);

var _App = __webpack_require__(285);

var _App2 = _interopRequireDefault(_App);

var _Routes = __webpack_require__(284);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();
store.dispatch(documentActions.AllDocuments());
(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.Router,
    null,
    _react2.default.createElement(_Routes2.default, null)
  )
), document.getElementById('app'));

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguanN4PzkzMTkiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwic3RvcmUiLCJkaXNwYXRjaCIsIkFsbERvY3VtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7SUFBYUEsZTs7QUFFYjs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU1DLFFBQVEsK0JBQWQ7QUFDQUEsTUFBTUMsUUFBTixDQUFlRixnQkFBZ0JHLFlBQWhCLEVBQWY7QUFDQSxzQkFDRTtBQUFBO0FBQUEsSUFBVSxPQUFPRixLQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBREY7QUFERixDQURGLEVBTUVHLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FORixFIiwiZmlsZSI6IjAuNWVkOWYyMWViYzE2MTkwOTcxZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSdcbmltcG9ydCAqICBhcyBkb2N1bWVudEFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJ1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL1JvdXRlcyc7XG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5zdG9yZS5kaXNwYXRjaChkb2N1bWVudEFjdGlvbnMuQWxsRG9jdW1lbnRzKCkpO1xucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyPlxuICAgICAgPFJvdXRlcyAvPlxuICAgIDwvUm91dGVyPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvaW5kZXguanN4Il0sInNvdXJjZVJvb3QiOiIifQ==