webpackHotUpdate(0,{

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDocument = createDocument;
exports.loadDocSuccess = loadDocSuccess;
exports.createDocumentSuccess = createDocumentSuccess;
exports.updateDocumentSuccess = updateDocumentSuccess;
exports.sendErrorMessage = sendErrorMessage;
exports.AllDocuments = AllDocuments;
exports.saveDocuments = saveDocuments;

var _actionTypes = __webpack_require__(87);

var types = _interopRequireWildcard(_actionTypes);

var _ApiCalls = __webpack_require__(34);

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

function sendErrorMessage(errors) {
  return { type: types.ERROR_MESSAGE, errors: errors };
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
      dispatch(sendErrorMessage(error));
      throw error;
    });
  };
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentAction.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsImxvYWREb2NTdWNjZXNzIiwiY3JlYXRlRG9jdW1lbnRTdWNjZXNzIiwidXBkYXRlRG9jdW1lbnRTdWNjZXNzIiwic2VuZEVycm9yTWVzc2FnZSIsIkFsbERvY3VtZW50cyIsInNhdmVEb2N1bWVudHMiLCJ0eXBlcyIsImRvY3VtZW50IiwidHlwZSIsIkNSRUFURV9ET0NVTUVOVCIsIkxPQURfRE9DVU1FTlRTX1NVQ0NFU1MiLCJDUkVBVEVfRE9DVU1FTlRfU1VDQ0VTUyIsIlVQREFURV9ET0NVTUVOVF9TVUNDRVNTIiwiZXJyb3JzIiwiRVJST1JfTUVTU0FHRSIsImRpc3BhdGNoIiwiZ2V0QWxsRG9jdW1lbnRzIiwidGhlbiIsImRvY3VtZW50cyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiaWQiLCJzYXZlZERvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUFHZ0JBLGMsR0FBQUEsYztRQUlBQyxjLEdBQUFBLGM7UUFJQUMscUIsR0FBQUEscUI7UUFJQUMscUIsR0FBQUEscUI7UUFJQUMsZ0IsR0FBQUEsZ0I7UUFLQUMsWSxHQUFBQSxZO1FBVUFDLGEsR0FBQUEsYTs7QUFsQ2hCOztJQUFZQyxLOztBQUNaOzs7Ozs7OztBQUVPLFNBQVNQLGNBQVQsQ0FBd0JRLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU8sRUFBRUMsTUFBTUYsTUFBTUcsZUFBZCxFQUErQkYsa0JBQS9CLEVBQVA7QUFDRDs7QUFFTSxTQUFTUCxjQUFULENBQXdCTyxRQUF4QixFQUFrQztBQUN2QyxTQUFPLEVBQUNDLE1BQU1GLE1BQU1JLHNCQUFiLEVBQXFDSCxrQkFBckMsRUFBUDtBQUNEOztBQUVNLFNBQVNOLHFCQUFULENBQStCTSxRQUEvQixFQUF5QztBQUM5QyxTQUFPLEVBQUNDLE1BQU1GLE1BQU1LLHVCQUFiLEVBQXNDSixrQkFBdEMsRUFBUDtBQUNEOztBQUVNLFNBQVNMLHFCQUFULENBQStCSyxRQUEvQixFQUF5QztBQUM5QyxTQUFPLEVBQUNDLE1BQU1GLE1BQU1NLHVCQUFiLEVBQXNDTCxrQkFBdEMsRUFBUDtBQUNEOztBQUVNLFNBQVNKLGdCQUFULENBQTBCVSxNQUExQixFQUFrQztBQUN2QyxTQUFPLEVBQUNMLE1BQU1GLE1BQU1RLGFBQWIsRUFBNEJELGNBQTVCLEVBQVA7QUFDRDs7QUFHTSxTQUFTVCxZQUFULEdBQXdCO0FBQzdCLFNBQU8sVUFBU1csUUFBVCxFQUFtQjtBQUN4QixXQUFPLG1CQUFRQyxlQUFSLEdBQTBCQyxJQUExQixDQUErQixxQkFBYTtBQUNqREYsZUFBU2YsZUFBZWtCLFVBQVVDLElBQXpCLENBQVQ7QUFDRCxLQUZNLEVBRUpDLEtBRkksQ0FFRSxpQkFBUztBQUNoQixZQUFNQyxLQUFOO0FBQ0QsS0FKTSxDQUFQO0FBS0QsR0FORDtBQU9EOztBQUVNLFNBQVNoQixhQUFULENBQXVCRSxRQUF2QixFQUFpQzs7QUFFdEMsU0FBTyxVQUFTUSxRQUFULEVBQW1CO0FBQ3hCLFdBQU8sbUJBQVFWLGFBQVIsQ0FBc0JFLFFBQXRCLEVBQWdDVSxJQUFoQyxDQUFxQyx5QkFBaUI7QUFDM0RWLGVBQVNlLEVBQVQsR0FBY1AsU0FBU2Isc0JBQXNCcUIsYUFBdEIsQ0FBVCxDQUFkLEdBQStEUixTQUFTZCxzQkFBc0JzQixhQUF0QixDQUFULENBQS9EO0FBQ0QsS0FGTSxFQUVKSCxLQUZJLENBRUUsaUJBQVM7QUFDaEJMLGVBQVNaLGlCQUFpQmtCLEtBQWpCLENBQVQ7QUFDQSxZQUFNQSxLQUFOO0FBQ0QsS0FMTSxDQUFQO0FBTUQsR0FQRDtBQVFELEMiLCJmaWxlIjoiMC41YmQyZGY3YjdhZDEzYjlkNWY3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9hY3Rpb25UeXBlcydcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4uL3V0aWwvQXBpQ2FsbHMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEb2N1bWVudChkb2N1bWVudCkge1xuICByZXR1cm4geyB0eXBlOiB0eXBlcy5DUkVBVEVfRE9DVU1FTlQsIGRvY3VtZW50IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREb2NTdWNjZXNzKGRvY3VtZW50KSB7XG4gIHJldHVybiB7dHlwZTogdHlwZXMuTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUywgZG9jdW1lbnR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnRTdWNjZXNzKGRvY3VtZW50KSB7XG4gIHJldHVybiB7dHlwZTogdHlwZXMuQ1JFQVRFX0RPQ1VNRU5UX1NVQ0NFU1MsIGRvY3VtZW50fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURvY3VtZW50U3VjY2Vzcyhkb2N1bWVudCkge1xuICByZXR1cm4ge3R5cGU6IHR5cGVzLlVQREFURV9ET0NVTUVOVF9TVUNDRVNTLCBkb2N1bWVudH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kRXJyb3JNZXNzYWdlKGVycm9ycykge1xuICByZXR1cm4ge3R5cGU6IHR5cGVzLkVSUk9SX01FU1NBR0UsIGVycm9yc307XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEFsbERvY3VtZW50cygpIHsgXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIHJldHVybiBBcGlDYWxsLmdldEFsbERvY3VtZW50cygpLnRoZW4oZG9jdW1lbnRzID0+IHtcbiAgICAgIGRpc3BhdGNoKGxvYWREb2NTdWNjZXNzKGRvY3VtZW50cy5kYXRhKSk7XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgdGhyb3coZXJyb3IpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZURvY3VtZW50cyhkb2N1bWVudCkge1xuICBcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIEFwaUNhbGwuc2F2ZURvY3VtZW50cyhkb2N1bWVudCkudGhlbihzYXZlZERvY3VtZW50ID0+IHtcbiAgICAgIGRvY3VtZW50LmlkID8gZGlzcGF0Y2godXBkYXRlRG9jdW1lbnRTdWNjZXNzKHNhdmVkRG9jdW1lbnQpKSA6IGRpc3BhdGNoKGNyZWF0ZURvY3VtZW50U3VjY2VzcyhzYXZlZERvY3VtZW50KSlcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBkaXNwYXRjaChzZW5kRXJyb3JNZXNzYWdlKGVycm9yKSlcbiAgICAgIHRocm93KGVycm9yKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==