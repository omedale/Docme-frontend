webpackHotUpdate(0,{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(195);

var _reactRouterDom = __webpack_require__(38);

var _reactRedux = __webpack_require__(116);

var _configureStore = __webpack_require__(343);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _App = __webpack_require__(275);

var _App2 = _interopRequireDefault(_App);

var _Routes = __webpack_require__(274);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore2.default)();
// const store = createStore(
//   (state = {}) => state,
//   applyMiddleware(thunk)
// );

// import thunk from 'redux-thunk';
// import {createStore, applyMiddleware, compose} from 'redux';
(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_Routes2.default, null)
  )
), document.getElementById('app'));

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ }),

/***/ 325:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguanN4PzkzMTkiXSwibmFtZXMiOlsic3RvcmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUdBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSwrQkFBZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVZBO0FBQ0E7QUFXQSxzQkFDRTtBQUFBO0FBQUEsSUFBVSxPQUFPQSxLQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBREY7QUFERixDQURGLEVBTUVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FORixFIiwiZmlsZSI6IjAuYTVhZTE0Y2ZkOWU2NTcwNTkxOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbi8vIGltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vUm91dGVzJztcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcbi8vIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4vLyAgIChzdGF0ZSA9IHt9KSA9PiBzdGF0ZSxcbi8vICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKVxuLy8gKTtcblxucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyPlxuICAgICAgPFJvdXRlcyAvPlxuICAgIDwvUm91dGVyPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvaW5kZXguanN4Il0sInNvdXJjZVJvb3QiOiIifQ==