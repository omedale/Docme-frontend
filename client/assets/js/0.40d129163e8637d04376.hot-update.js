webpackHotUpdate(0,{

/***/ 76:
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
  return { type: types.CREATE_DOCUMENT_SUCCESS, document: document };
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
      throw error;
    });
  };
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentAction.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsImxvYWREb2NTdWNjZXNzIiwiY3JlYXRlRG9jdW1lbnRTdWNjZXNzIiwidXBkYXRlRG9jdW1lbnRTdWNjZXNzIiwiQWxsRG9jdW1lbnRzIiwic2F2ZURvY3VtZW50cyIsInR5cGVzIiwiZG9jdW1lbnQiLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUyIsIkNSRUFURV9ET0NVTUVOVF9TVUNDRVNTIiwiZGlzcGF0Y2giLCJnZXRBbGxEb2N1bWVudHMiLCJ0aGVuIiwiZG9jdW1lbnRzIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJpZCIsInNhdmVkRG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQUdnQkEsYyxHQUFBQSxjO1FBSUFDLGMsR0FBQUEsYztRQUlBQyxxQixHQUFBQSxxQjtRQUlBQyxxQixHQUFBQSxxQjtRQUtBQyxZLEdBQUFBLFk7UUFVQUMsYSxHQUFBQSxhOztBQTlCaEI7O0lBQVlDLEs7O0FBQ1o7Ozs7Ozs7O0FBRU8sU0FBU04sY0FBVCxDQUF3Qk8sUUFBeEIsRUFBa0M7QUFDdkMsU0FBTyxFQUFFQyxNQUFNRixNQUFNRyxlQUFkLEVBQStCRixrQkFBL0IsRUFBUDtBQUNEOztBQUVNLFNBQVNOLGNBQVQsQ0FBd0JNLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTUksc0JBQWIsRUFBcUNILGtCQUFyQyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU0wscUJBQVQsQ0FBK0JLLFFBQS9CLEVBQXlDO0FBQzlDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTUssdUJBQWIsRUFBc0NKLGtCQUF0QyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU0oscUJBQVQsQ0FBK0JJLFFBQS9CLEVBQXlDO0FBQzlDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTUssdUJBQWIsRUFBc0NKLGtCQUF0QyxFQUFQO0FBQ0Q7O0FBR00sU0FBU0gsWUFBVCxHQUF3QjtBQUM3QixTQUFPLFVBQVNRLFFBQVQsRUFBbUI7QUFDeEIsV0FBTyxtQkFBUUMsZUFBUixHQUEwQkMsSUFBMUIsQ0FBK0IscUJBQWE7QUFDakRGLGVBQVNYLGVBQWVjLFVBQVVDLElBQXpCLENBQVQ7QUFDRCxLQUZNLEVBRUpDLEtBRkksQ0FFRSxpQkFBUztBQUNoQixZQUFNQyxLQUFOO0FBQ0QsS0FKTSxDQUFQO0FBS0QsR0FORDtBQU9EOztBQUVNLFNBQVNiLGFBQVQsQ0FBdUJFLFFBQXZCLEVBQWlDO0FBQ3RDLFNBQU8sVUFBU0ssUUFBVCxFQUFtQjtBQUN4QixXQUFPLG1CQUFRUCxhQUFSLENBQXNCRSxRQUF0QixFQUFnQ08sSUFBaEMsQ0FBcUMseUJBQWlCO0FBQzNEUCxlQUFTWSxFQUFULEdBQWNQLFNBQVNULHNCQUFzQmlCLGFBQXRCLENBQVQsQ0FBZCxHQUErRFIsU0FBU1Ysc0JBQXNCa0IsYUFBdEIsQ0FBVCxDQUEvRDtBQUNELEtBRk0sRUFFSkgsS0FGSSxDQUVFLGlCQUFTO0FBQ2hCLFlBQU1DLEtBQU47QUFDRCxLQUpNLENBQVA7QUFLRCxHQU5EO0FBT0QsQyIsImZpbGUiOiIwLjQwZDEyOTE2M2U4NjM3ZDA0Mzc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJ1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi4vdXRpbC9BcGlDYWxscydcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50KGRvY3VtZW50KSB7XG4gIHJldHVybiB7IHR5cGU6IHR5cGVzLkNSRUFURV9ET0NVTUVOVCwgZG9jdW1lbnQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERvY1N1Y2Nlc3MoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHt0eXBlOiB0eXBlcy5MT0FEX0RPQ1VNRU5UU19TVUNDRVNTLCBkb2N1bWVudH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEb2N1bWVudFN1Y2Nlc3MoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHt0eXBlOiB0eXBlcy5DUkVBVEVfRE9DVU1FTlRfU1VDQ0VTUywgZG9jdW1lbnR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRG9jdW1lbnRTdWNjZXNzKGRvY3VtZW50KSB7XG4gIHJldHVybiB7dHlwZTogdHlwZXMuQ1JFQVRFX0RPQ1VNRU5UX1NVQ0NFU1MsIGRvY3VtZW50fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gQWxsRG9jdW1lbnRzKCkgeyBcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIEFwaUNhbGwuZ2V0QWxsRG9jdW1lbnRzKCkudGhlbihkb2N1bWVudHMgPT4ge1xuICAgICAgZGlzcGF0Y2gobG9hZERvY1N1Y2Nlc3MoZG9jdW1lbnRzLmRhdGEpKTtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICB0aHJvdyhlcnJvcik7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRG9jdW1lbnRzKGRvY3VtZW50KSB7IFxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gQXBpQ2FsbC5zYXZlRG9jdW1lbnRzKGRvY3VtZW50KS50aGVuKHNhdmVkRG9jdW1lbnQgPT4ge1xuICAgICAgZG9jdW1lbnQuaWQgPyBkaXNwYXRjaCh1cGRhdGVEb2N1bWVudFN1Y2Nlc3Moc2F2ZWREb2N1bWVudCkpIDogZGlzcGF0Y2goY3JlYXRlRG9jdW1lbnRTdWNjZXNzKHNhdmVkRG9jdW1lbnQpKVxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHRocm93KGVycm9yKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==