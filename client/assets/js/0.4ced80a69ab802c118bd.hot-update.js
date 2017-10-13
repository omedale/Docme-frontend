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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsImxvYWREb2NTdWNjZXNzIiwiY3JlYXRlRG9jdW1lbnRTdWNjZXNzIiwiQWxsRG9jdW1lbnRzIiwic2F2ZURvY3VtZW50cyIsInR5cGVzIiwiZG9jdW1lbnQiLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUyIsIkNSRUFURV9ET0NVTUVOVF9TVUNDRVNTIiwiZGlzcGF0Y2giLCJnZXRBbGxEb2N1bWVudHMiLCJ0aGVuIiwiZG9jdW1lbnRzIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJpZCIsInVwZGF0ZURvY3VtZW50U3VjY2VzcyIsInNhdmVkRG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQUdnQkEsYyxHQUFBQSxjO1FBSUFDLGMsR0FBQUEsYztRQUlBQyxxQixHQUFBQSxxQjtRQUtBQyxZLEdBQUFBLFk7UUFXQUMsYSxHQUFBQSxhOztBQTNCaEI7O0lBQVlDLEs7O0FBQ1o7Ozs7Ozs7O0FBRU8sU0FBU0wsY0FBVCxDQUF3Qk0sUUFBeEIsRUFBa0M7QUFDdkMsU0FBTyxFQUFFQyxNQUFNRixNQUFNRyxlQUFkLEVBQStCRixrQkFBL0IsRUFBUDtBQUNEOztBQUVNLFNBQVNMLGNBQVQsQ0FBd0JLLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTUksc0JBQWIsRUFBcUNILGtCQUFyQyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU0oscUJBQVQsQ0FBK0JJLFFBQS9CLEVBQXlDO0FBQzlDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTUssdUJBQWIsRUFBc0NKLGtCQUF0QyxFQUFQO0FBQ0Q7O0FBR00sU0FBU0gsWUFBVCxHQUF3QjtBQUM3QixTQUFPLFVBQVNRLFFBQVQsRUFBbUI7QUFDeEIsV0FBTyxtQkFBUUMsZUFBUixHQUEwQkMsSUFBMUIsQ0FBK0IscUJBQWE7QUFDakRGLGVBQVNWLGVBQWVhLFVBQVVDLElBQXpCLENBQVQ7QUFDRCxLQUZNLEVBRUpDLEtBRkksQ0FFRSxpQkFBUztBQUNoQixZQUFNQyxLQUFOO0FBQ0QsS0FKTSxDQUFQO0FBS0QsR0FORDtBQU9EOztBQUdNLFNBQVNiLGFBQVQsQ0FBdUJFLFFBQXZCLEVBQWlDO0FBQ3RDLFNBQU8sVUFBU0ssUUFBVCxFQUFtQjtBQUN4QixXQUFPLG1CQUFRUCxhQUFSLENBQXNCRSxRQUF0QixFQUFnQ08sSUFBaEMsQ0FBcUMseUJBQWlCO0FBQzNEUCxlQUFTWSxFQUFULEdBQWNQLFNBQVNRLHNCQUFzQkMsYUFBdEIsQ0FBVCxDQUFkLEdBQStEVCxTQUFTVCxzQkFBc0JrQixhQUF0QixDQUFULENBQS9EO0FBQ0QsS0FGTSxFQUVKSixLQUZJLENBRUUsaUJBQVM7QUFDaEIsWUFBTUMsS0FBTjtBQUNELEtBSk0sQ0FBUDtBQUtELEdBTkQ7QUFPRCxDIiwiZmlsZSI6IjAuNGNlZDgwYTY5YWI4MDJjMTE4YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYWN0aW9uVHlwZXMnXG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuLi91dGlsL0FwaUNhbGxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHsgdHlwZTogdHlwZXMuQ1JFQVRFX0RPQ1VNRU5ULCBkb2N1bWVudCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRG9jU3VjY2Vzcyhkb2N1bWVudCkge1xuICByZXR1cm4ge3R5cGU6IHR5cGVzLkxPQURfRE9DVU1FTlRTX1NVQ0NFU1MsIGRvY3VtZW50fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50U3VjY2Vzcyhkb2N1bWVudCkge1xuICByZXR1cm4ge3R5cGU6IHR5cGVzLkNSRUFURV9ET0NVTUVOVF9TVUNDRVNTLCBkb2N1bWVudH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEFsbERvY3VtZW50cygpIHsgXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIHJldHVybiBBcGlDYWxsLmdldEFsbERvY3VtZW50cygpLnRoZW4oZG9jdW1lbnRzID0+IHtcbiAgICAgIGRpc3BhdGNoKGxvYWREb2NTdWNjZXNzKGRvY3VtZW50cy5kYXRhKSk7XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgdGhyb3coZXJyb3IpO1xuICAgIH0pO1xuICB9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRG9jdW1lbnRzKGRvY3VtZW50KSB7IFxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gQXBpQ2FsbC5zYXZlRG9jdW1lbnRzKGRvY3VtZW50KS50aGVuKHNhdmVkRG9jdW1lbnQgPT4ge1xuICAgICAgZG9jdW1lbnQuaWQgPyBkaXNwYXRjaCh1cGRhdGVEb2N1bWVudFN1Y2Nlc3Moc2F2ZWREb2N1bWVudCkpIDogZGlzcGF0Y2goY3JlYXRlRG9jdW1lbnRTdWNjZXNzKHNhdmVkRG9jdW1lbnQpKVxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHRocm93KGVycm9yKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==