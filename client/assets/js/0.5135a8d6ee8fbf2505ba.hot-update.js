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
      console.log(err);
      throw error;
    });
  };
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentAction.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsImxvYWREb2NTdWNjZXNzIiwiY3JlYXRlRG9jdW1lbnRTdWNjZXNzIiwidXBkYXRlRG9jdW1lbnRTdWNjZXNzIiwiQWxsRG9jdW1lbnRzIiwic2F2ZURvY3VtZW50cyIsInR5cGVzIiwiZG9jdW1lbnQiLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUyIsIkNSRUFURV9ET0NVTUVOVF9TVUNDRVNTIiwiVVBEQVRFX0RPQ1VNRU5UX1NVQ0NFU1MiLCJkaXNwYXRjaCIsImdldEFsbERvY3VtZW50cyIsInRoZW4iLCJkb2N1bWVudHMiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImlkIiwic2F2ZWREb2N1bWVudCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQUdnQkEsYyxHQUFBQSxjO1FBSUFDLGMsR0FBQUEsYztRQUlBQyxxQixHQUFBQSxxQjtRQUlBQyxxQixHQUFBQSxxQjtRQUtBQyxZLEdBQUFBLFk7UUFVQUMsYSxHQUFBQSxhOztBQTlCaEI7O0lBQVlDLEs7O0FBQ1o7Ozs7Ozs7O0FBRU8sU0FBU04sY0FBVCxDQUF3Qk8sUUFBeEIsRUFBa0M7QUFDdkMsU0FBTyxFQUFFQyxNQUFNRixNQUFNRyxlQUFkLEVBQStCRixrQkFBL0IsRUFBUDtBQUNEOztBQUVNLFNBQVNOLGNBQVQsQ0FBd0JNLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTUksc0JBQWIsRUFBcUNILGtCQUFyQyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU0wscUJBQVQsQ0FBK0JLLFFBQS9CLEVBQXlDO0FBQzlDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTUssdUJBQWIsRUFBc0NKLGtCQUF0QyxFQUFQO0FBQ0Q7O0FBRU0sU0FBU0oscUJBQVQsQ0FBK0JJLFFBQS9CLEVBQXlDO0FBQzlDLFNBQU8sRUFBQ0MsTUFBTUYsTUFBTU0sdUJBQWIsRUFBc0NMLGtCQUF0QyxFQUFQO0FBQ0Q7O0FBR00sU0FBU0gsWUFBVCxHQUF3QjtBQUM3QixTQUFPLFVBQVNTLFFBQVQsRUFBbUI7QUFDeEIsV0FBTyxtQkFBUUMsZUFBUixHQUEwQkMsSUFBMUIsQ0FBK0IscUJBQWE7QUFDakRGLGVBQVNaLGVBQWVlLFVBQVVDLElBQXpCLENBQVQ7QUFDRCxLQUZNLEVBRUpDLEtBRkksQ0FFRSxpQkFBUztBQUNoQixZQUFNQyxLQUFOO0FBQ0QsS0FKTSxDQUFQO0FBS0QsR0FORDtBQU9EOztBQUVNLFNBQVNkLGFBQVQsQ0FBdUJFLFFBQXZCLEVBQWlDO0FBQ3RDLFNBQU8sVUFBU00sUUFBVCxFQUFtQjtBQUN4QixXQUFPLG1CQUFRUixhQUFSLENBQXNCRSxRQUF0QixFQUFnQ1EsSUFBaEMsQ0FBcUMseUJBQWlCO0FBQzNEUixlQUFTYSxFQUFULEdBQWNQLFNBQVNWLHNCQUFzQmtCLGFBQXRCLENBQVQsQ0FBZCxHQUErRFIsU0FBU1gsc0JBQXNCbUIsYUFBdEIsQ0FBVCxDQUEvRDtBQUNELEtBRk0sRUFFSkgsS0FGSSxDQUVFLGlCQUFTO0FBQ2hCSSxjQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDQSxZQUFNTCxLQUFOO0FBQ0QsS0FMTSxDQUFQO0FBTUQsR0FQRDtBQVFELEMiLCJmaWxlIjoiMC41MTM1YThkNmVlOGZiZjI1MDViYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9hY3Rpb25UeXBlcydcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4uL3V0aWwvQXBpQ2FsbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEb2N1bWVudChkb2N1bWVudCkge1xuICByZXR1cm4geyB0eXBlOiB0eXBlcy5DUkVBVEVfRE9DVU1FTlQsIGRvY3VtZW50IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREb2NTdWNjZXNzKGRvY3VtZW50KSB7XG4gIHJldHVybiB7dHlwZTogdHlwZXMuTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUywgZG9jdW1lbnR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnRTdWNjZXNzKGRvY3VtZW50KSB7XG4gIHJldHVybiB7dHlwZTogdHlwZXMuQ1JFQVRFX0RPQ1VNRU5UX1NVQ0NFU1MsIGRvY3VtZW50fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURvY3VtZW50U3VjY2Vzcyhkb2N1bWVudCkge1xuICByZXR1cm4ge3R5cGU6IHR5cGVzLlVQREFURV9ET0NVTUVOVF9TVUNDRVNTLCBkb2N1bWVudH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEFsbERvY3VtZW50cygpIHsgXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIHJldHVybiBBcGlDYWxsLmdldEFsbERvY3VtZW50cygpLnRoZW4oZG9jdW1lbnRzID0+IHtcbiAgICAgIGRpc3BhdGNoKGxvYWREb2NTdWNjZXNzKGRvY3VtZW50cy5kYXRhKSk7XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgdGhyb3coZXJyb3IpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZURvY3VtZW50cyhkb2N1bWVudCkgeyBcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIEFwaUNhbGwuc2F2ZURvY3VtZW50cyhkb2N1bWVudCkudGhlbihzYXZlZERvY3VtZW50ID0+IHtcbiAgICAgIGRvY3VtZW50LmlkID8gZGlzcGF0Y2godXBkYXRlRG9jdW1lbnRTdWNjZXNzKHNhdmVkRG9jdW1lbnQpKSA6IGRpc3BhdGNoKGNyZWF0ZURvY3VtZW50U3VjY2VzcyhzYXZlZERvY3VtZW50KSlcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICB0aHJvdyhlcnJvcik7XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hY3Rpb25zL2RvY3VtZW50QWN0aW9uLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=