webpackHotUpdate(0,{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDocument = createDocument;
exports.AllDocuments = AllDocuments;

var _actionTypes = __webpack_require__(115);

var types = _interopRequireWildcard(_actionTypes);

var _ApiCalls = __webpack_require__(51);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createDocument(document) {
  return { type: types.CREATE_DOCUMENT, document: document };
}

function AllDocuments() {
  return function (dispatch) {
    return _ApiCalls2.default.getAllDocuments().then(function (documents) {
      dispatch(loadDocSuccess(documents.data));
    }).catch(function (error) {
      throw error;
    });
  };
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentAction.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsIkFsbERvY3VtZW50cyIsInR5cGVzIiwiZG9jdW1lbnQiLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiZGlzcGF0Y2giLCJnZXRBbGxEb2N1bWVudHMiLCJ0aGVuIiwibG9hZERvY1N1Y2Nlc3MiLCJkb2N1bWVudHMiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1FBR2dCQSxjLEdBQUFBLGM7UUFJQUMsWSxHQUFBQSxZOztBQVBoQjs7SUFBWUMsSzs7QUFDWjs7Ozs7Ozs7QUFFTyxTQUFTRixjQUFULENBQXdCRyxRQUF4QixFQUFrQztBQUN2QyxTQUFPLEVBQUVDLE1BQU1GLE1BQU1HLGVBQWQsRUFBK0JGLGtCQUEvQixFQUFQO0FBQ0Q7O0FBRU0sU0FBU0YsWUFBVCxHQUF3QjtBQUM3QixTQUFPLFVBQVNLLFFBQVQsRUFBbUI7QUFDeEIsV0FBTyxtQkFBUUMsZUFBUixHQUEwQkMsSUFBMUIsQ0FBK0IscUJBQWE7QUFDakRGLGVBQVNHLGVBQWVDLFVBQVVDLElBQXpCLENBQVQ7QUFDRCxLQUZNLEVBRUpDLEtBRkksQ0FFRSxpQkFBUztBQUNoQixZQUFNQyxLQUFOO0FBQ0QsS0FKTSxDQUFQO0FBS0QsR0FORDtBQU9ELEMiLCJmaWxlIjoiMC4xMzQ4YjAyM2I5MTExMmVlYTg4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9hY3Rpb25UeXBlcydcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4uL3V0aWwvQXBpQ2FsbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEb2N1bWVudChkb2N1bWVudCkge1xuICByZXR1cm4geyB0eXBlOiB0eXBlcy5DUkVBVEVfRE9DVU1FTlQsIGRvY3VtZW50IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFsbERvY3VtZW50cygpIHsgXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIHJldHVybiBBcGlDYWxsLmdldEFsbERvY3VtZW50cygpLnRoZW4oZG9jdW1lbnRzID0+IHtcbiAgICAgIGRpc3BhdGNoKGxvYWREb2NTdWNjZXNzKGRvY3VtZW50cy5kYXRhKSk7XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgdGhyb3coZXJyb3IpO1xuICAgIH0pO1xuICB9O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3giXSwic291cmNlUm9vdCI6IiJ9