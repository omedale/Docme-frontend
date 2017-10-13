webpackHotUpdate(0,{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDocument = createDocument;
exports.loadDocSuccess = loadDocSuccess;
exports.createDocumentSuccess = createDocumentSuccess;
exports.updateDocumentSuccess = updateDocumentSuccess;
exports.AllDocuments = AllDocuments;
exports.saveDocuments = saveDocuments;

var _actionTypes = __webpack_require__(119);

var types = _interopRequireWildcard(_actionTypes);

var _ApiCalls = __webpack_require__(40);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createDocument(document) {
  return { type: types.CREATE_DOCUMENT, document: document };
}

function loadDocSuccess(document) {
  return { type: types.LOAD_DOCUMENTS_SUCCESS, document: document };
}

function createDocumentSuccess(document) {
  return { type: types.CREATE_DOCUMENT_SUCCESS, document: document };
}

function updateDocumentSuccess(document) {
  return { type: types.UPDATE_DOCUMENT_SUCCESS, document: document };
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

function saveDocuments(document) {
  return function (dispatch) {
    return _ApiCalls2.default.saveDocuments(document).then(function (savedDocument) {
      document.id ? dispatch(updateDocumentSuccess(savedDocument)) : dispatch(createDocumentSuccess(savedDocument));
    }).catch(function (error) {
      console.log();
      throw error;
    });
  };
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentAction.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsImxvYWREb2NTdWNjZXNzIiwiY3JlYXRlRG9jdW1lbnRTdWNjZXNzIiwidXBkYXRlRG9jdW1lbnRTdWNjZXNzIiwiQWxsRG9jdW1lbnRzIiwic2F2ZURvY3VtZW50cyIsInR5cGVzIiwiZG9jdW1lbnQiLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUyIsIkNSRUFURV9ET0NVTUVOVF9TVUNDRVNTIiwiVVBEQVRFX0RPQ1VNRU5UX1NVQ0NFU1MiLCJkaXNwYXRjaCIsImdldEFsbERvY3VtZW50cyIsInRoZW4iLCJkb2N1bWVudHMiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImlkIiwic2F2ZWREb2N1bWVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQUdnQkEsYyxHQUFBQSxjO1FBSUFDLGMsR0FBQUEsYztRQUlBQyxxQixHQUFBQSxxQjtRQUlBQyxxQixHQUFBQSxxQjtRQUtBQyxZLEdBQUFBLFk7UUFVQUMsYSxHQUFBQSxhOztBQTlCaEI7O0lBQVlDLEs7O0FBQ1o7Ozs7Ozs7O0FBRU8sU0FBU04sY0FBVCxDQUF3Qk8sUUFBeEIsRUFBa0M7QUFDdkMsU0FBTyxFQUFFQyxNQUFNRixNQUFNRyxlQUFkLEVBQStCRixrQkFBL0IsRUFBUDtBQUNEOztBQUVNLFNBQVNOLGNBQVQsQ0FBd0JNLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTUksc0JBQWIsRUFBcUNILGtCQUFyQyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU0wscUJBQVQsQ0FBK0JLLFFBQS9CLEVBQXlDO0FBQzlDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTUssdUJBQWIsRUFBc0NKLGtCQUF0QyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU0oscUJBQVQsQ0FBK0JJLFFBQS9CLEVBQXlDO0FBQzlDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTU0sdUJBQWIsRUFBc0NMLGtCQUF0QyxFQUFQO0FBQ0Q7O0FBR00sU0FBU0gsWUFBVCxHQUF3QjtBQUM3QixTQUFPLFVBQVNTLFFBQVQsRUFBbUI7QUFDeEIsV0FBTyxtQkFBUUMsZUFBUixHQUEwQkMsSUFBMUIsQ0FBK0IscUJBQWE7QUFDakRGLGVBQVNaLGVBQWVlLFVBQVVDLElBQXpCLENBQVQ7QUFDRCxLQUZNLEVBRUpDLEtBRkksQ0FFRSxpQkFBUztBQUNoQixZQUFNQyxLQUFOO0FBQ0QsS0FKTSxDQUFQO0FBS0QsR0FORDtBQU9EOztBQUVNLFNBQVNkLGFBQVQsQ0FBdUJFLFFBQXZCLEVBQWlDO0FBQ3RDLFNBQU8sVUFBU00sUUFBVCxFQUFtQjtBQUN4QixXQUFPLG1CQUFRUixhQUFSLENBQXNCRSxRQUF0QixFQUFnQ1EsSUFBaEMsQ0FBcUMseUJBQWlCO0FBQzNEUixlQUFTYSxFQUFULEdBQWNQLFNBQVNWLHNCQUFzQmtCLGFBQXRCLENBQVQsQ0FBZCxHQUErRFIsU0FBU1gsc0JBQXNCbUIsYUFBdEIsQ0FBVCxDQUEvRDtBQUNELEtBRk0sRUFFSkgsS0FGSSxDQUVFLGlCQUFTO0FBQ2hCSSxjQUFRQyxHQUFSO0FBQ0EsWUFBTUosS0FBTjtBQUNELEtBTE0sQ0FBUDtBQU1ELEdBUEQ7QUFRRCxDIiwiZmlsZSI6IjAuMGU3ODg4NTczNmFjMWYxYWVjNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYWN0aW9uVHlwZXMnXG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuLi91dGlsL0FwaUNhbGxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHsgdHlwZTogdHlwZXMuQ1JFQVRFX0RPQ1VNRU5ULCBkb2N1bWVudCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRG9jU3VjY2Vzcyhkb2N1bWVudCkge1xuICByZXR1cm4ge3R5cGU6IHR5cGVzLkxPQURfRE9DVU1FTlRTX1NVQ0NFU1MsIGRvY3VtZW50fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50U3VjY2Vzcyhkb2N1bWVudCkge1xuICByZXR1cm4ge3R5cGU6IHR5cGVzLkNSRUFURV9ET0NVTUVOVF9TVUNDRVNTLCBkb2N1bWVudH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEb2N1bWVudFN1Y2Nlc3MoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHt0eXBlOiB0eXBlcy5VUERBVEVfRE9DVU1FTlRfU1VDQ0VTUywgZG9jdW1lbnR9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBBbGxEb2N1bWVudHMoKSB7IFxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gQXBpQ2FsbC5nZXRBbGxEb2N1bWVudHMoKS50aGVuKGRvY3VtZW50cyA9PiB7XG4gICAgICBkaXNwYXRjaChsb2FkRG9jU3VjY2Vzcyhkb2N1bWVudHMuZGF0YSkpO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHRocm93KGVycm9yKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEb2N1bWVudHMoZG9jdW1lbnQpIHsgXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIHJldHVybiBBcGlDYWxsLnNhdmVEb2N1bWVudHMoZG9jdW1lbnQpLnRoZW4oc2F2ZWREb2N1bWVudCA9PiB7XG4gICAgICBkb2N1bWVudC5pZCA/IGRpc3BhdGNoKHVwZGF0ZURvY3VtZW50U3VjY2VzcyhzYXZlZERvY3VtZW50KSkgOiBkaXNwYXRjaChjcmVhdGVEb2N1bWVudFN1Y2Nlc3Moc2F2ZWREb2N1bWVudCkpXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coKVxuICAgICAgdGhyb3coZXJyb3IpO1xuICAgIH0pO1xuICB9O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3giXSwic291cmNlUm9vdCI6IiJ9