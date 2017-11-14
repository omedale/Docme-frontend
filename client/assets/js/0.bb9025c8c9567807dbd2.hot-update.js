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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsImxvYWREb2NTdWNjZXNzIiwiY3JlYXRlRG9jdW1lbnRTdWNjZXNzIiwidXBkYXRlRG9jdW1lbnRTdWNjZXNzIiwic2VuZEVycm9yTWVzc2FnZSIsIkFsbERvY3VtZW50cyIsInNhdmVEb2N1bWVudHMiLCJ0eXBlcyIsImRvY3VtZW50IiwidHlwZSIsIkNSRUFURV9ET0NVTUVOVCIsIkxPQURfRE9DVU1FTlRTX1NVQ0NFU1MiLCJDUkVBVEVfRE9DVU1FTlRfU1VDQ0VTUyIsIlVQREFURV9ET0NVTUVOVF9TVUNDRVNTIiwiZXJyb3JzIiwiRVJST1JfTUVTU0FHRSIsImRpc3BhdGNoIiwiZ2V0QWxsRG9jdW1lbnRzIiwidGhlbiIsImRvY3VtZW50cyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiaWQiLCJzYXZlZERvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUFHZ0JBLGMsR0FBQUEsYztRQUlBQyxjLEdBQUFBLGM7UUFJQUMscUIsR0FBQUEscUI7UUFJQUMscUIsR0FBQUEscUI7UUFJQUMsZ0IsR0FBQUEsZ0I7UUFLQUMsWSxHQUFBQSxZO1FBVUFDLGEsR0FBQUEsYTs7QUFsQ2hCOztJQUFZQyxLOztBQUNaOzs7Ozs7OztBQUVPLFNBQVNQLGNBQVQsQ0FBd0JRLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU8sRUFBRUMsTUFBTUYsTUFBTUcsZUFBZCxFQUErQkYsa0JBQS9CLEVBQVA7QUFDRDs7QUFFTSxTQUFTUCxjQUFULENBQXdCTyxRQUF4QixFQUFrQztBQUN2QyxTQUFPLEVBQUNDLE1BQU1GLE1BQU1JLHNCQUFiLEVBQXFDSCxrQkFBckMsRUFBUDtBQUNEOztBQUVNLFNBQVNOLHFCQUFULENBQStCTSxRQUEvQixFQUF5QztBQUM5QyxTQUFPLEVBQUNDLE1BQU1GLE1BQU1LLHVCQUFiLEVBQXNDSixrQkFBdEMsRUFBUDtBQUNEOztBQUVNLFNBQVNMLHFCQUFULENBQStCSyxRQUEvQixFQUF5QztBQUM5QyxTQUFPLEVBQUNDLE1BQU1GLE1BQU1NLHVCQUFiLEVBQXNDTCxrQkFBdEMsRUFBUDtBQUNEOztBQUVNLFNBQVNKLGdCQUFULENBQTBCVSxNQUExQixFQUFrQztBQUN2QyxTQUFPLEVBQUNMLE1BQU1GLE1BQU1RLGFBQWIsRUFBNEJELGNBQTVCLEVBQVA7QUFDRDs7QUFHTSxTQUFTVCxZQUFULEdBQXdCO0FBQzdCLFNBQU8sVUFBU1csUUFBVCxFQUFtQjtBQUN4QixXQUFPLG1CQUFRQyxlQUFSLEdBQTBCQyxJQUExQixDQUErQixxQkFBYTtBQUNqREYsZUFBU2YsZUFBZWtCLFVBQVVDLElBQXpCLENBQVQ7QUFDRCxLQUZNLEVBRUpDLEtBRkksQ0FFRSxpQkFBUztBQUNoQixZQUFNQyxLQUFOO0FBQ0QsS0FKTSxDQUFQO0FBS0QsR0FORDtBQU9EOztBQUVNLFNBQVNoQixhQUFULENBQXVCRSxRQUF2QixFQUFpQztBQUN0QyxTQUFPLFVBQVNRLFFBQVQsRUFBbUI7QUFDeEIsV0FBTyxtQkFBUVYsYUFBUixDQUFzQkUsUUFBdEIsRUFBZ0NVLElBQWhDLENBQXFDLHlCQUFpQjtBQUMzRFYsZUFBU2UsRUFBVCxHQUFjUCxTQUFTYixzQkFBc0JxQixhQUF0QixDQUFULENBQWQsR0FBK0RSLFNBQVNkLHNCQUFzQnNCLGFBQXRCLENBQVQsQ0FBL0Q7QUFDRCxLQUZNLEVBRUpILEtBRkksQ0FFRSxpQkFBUztBQUNoQkwsZUFBU1osaUJBQWlCa0IsS0FBakIsQ0FBVDtBQUNBLFlBQU1BLEtBQU47QUFDRCxLQUxNLENBQVA7QUFNRCxHQVBEO0FBUUQsQyIsImZpbGUiOiIwLmJiOTAyNWM4Yzk1Njc4MDdkYmQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJ1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi4vdXRpbC9BcGlDYWxscydcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50KGRvY3VtZW50KSB7XG4gIHJldHVybiB7IHR5cGU6IHR5cGVzLkNSRUFURV9ET0NVTUVOVCwgZG9jdW1lbnQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERvY1N1Y2Nlc3MoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHt0eXBlOiB0eXBlcy5MT0FEX0RPQ1VNRU5UU19TVUNDRVNTLCBkb2N1bWVudH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEb2N1bWVudFN1Y2Nlc3MoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHt0eXBlOiB0eXBlcy5DUkVBVEVfRE9DVU1FTlRfU1VDQ0VTUywgZG9jdW1lbnR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRG9jdW1lbnRTdWNjZXNzKGRvY3VtZW50KSB7XG4gIHJldHVybiB7dHlwZTogdHlwZXMuVVBEQVRFX0RPQ1VNRU5UX1NVQ0NFU1MsIGRvY3VtZW50fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRFcnJvck1lc3NhZ2UoZXJyb3JzKSB7XG4gIHJldHVybiB7dHlwZTogdHlwZXMuRVJST1JfTUVTU0FHRSwgZXJyb3JzfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gQWxsRG9jdW1lbnRzKCkgeyBcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIEFwaUNhbGwuZ2V0QWxsRG9jdW1lbnRzKCkudGhlbihkb2N1bWVudHMgPT4ge1xuICAgICAgZGlzcGF0Y2gobG9hZERvY1N1Y2Nlc3MoZG9jdW1lbnRzLmRhdGEpKTtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICB0aHJvdyhlcnJvcik7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRG9jdW1lbnRzKGRvY3VtZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIHJldHVybiBBcGlDYWxsLnNhdmVEb2N1bWVudHMoZG9jdW1lbnQpLnRoZW4oc2F2ZWREb2N1bWVudCA9PiB7XG4gICAgICBkb2N1bWVudC5pZCA/IGRpc3BhdGNoKHVwZGF0ZURvY3VtZW50U3VjY2VzcyhzYXZlZERvY3VtZW50KSkgOiBkaXNwYXRjaChjcmVhdGVEb2N1bWVudFN1Y2Nlc3Moc2F2ZWREb2N1bWVudCkpXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgZGlzcGF0Y2goc2VuZEVycm9yTWVzc2FnZShlcnJvcikpXG4gICAgICB0aHJvdyhlcnJvcik7XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hY3Rpb25zL2RvY3VtZW50QWN0aW9uLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=