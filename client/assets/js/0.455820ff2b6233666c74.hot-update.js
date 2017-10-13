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
exports.sendErrorMessage = sendErrorMessage;
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
      console.log(error);
      dispatch(sendErrorMessage(error));
      throw error;
    });
  };
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentAction.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsImxvYWREb2NTdWNjZXNzIiwiY3JlYXRlRG9jdW1lbnRTdWNjZXNzIiwidXBkYXRlRG9jdW1lbnRTdWNjZXNzIiwic2VuZEVycm9yTWVzc2FnZSIsIkFsbERvY3VtZW50cyIsInNhdmVEb2N1bWVudHMiLCJ0eXBlcyIsImRvY3VtZW50IiwidHlwZSIsIkNSRUFURV9ET0NVTUVOVCIsIkxPQURfRE9DVU1FTlRTX1NVQ0NFU1MiLCJDUkVBVEVfRE9DVU1FTlRfU1VDQ0VTUyIsIlVQREFURV9ET0NVTUVOVF9TVUNDRVNTIiwiZXJyb3JzIiwiRVJST1JfTUVTU0FHRSIsImRpc3BhdGNoIiwiZ2V0QWxsRG9jdW1lbnRzIiwidGhlbiIsImRvY3VtZW50cyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiaWQiLCJzYXZlZERvY3VtZW50IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1FBR2dCQSxjLEdBQUFBLGM7UUFJQUMsYyxHQUFBQSxjO1FBSUFDLHFCLEdBQUFBLHFCO1FBSUFDLHFCLEdBQUFBLHFCO1FBSUFDLGdCLEdBQUFBLGdCO1FBS0FDLFksR0FBQUEsWTtRQVVBQyxhLEdBQUFBLGE7O0FBbENoQjs7SUFBWUMsSzs7QUFDWjs7Ozs7Ozs7QUFFTyxTQUFTUCxjQUFULENBQXdCUSxRQUF4QixFQUFrQztBQUN2QyxTQUFPLEVBQUVDLE1BQU1GLE1BQU1HLGVBQWQsRUFBK0JGLGtCQUEvQixFQUFQO0FBQ0Q7O0FBRU0sU0FBU1AsY0FBVCxDQUF3Qk8sUUFBeEIsRUFBa0M7QUFDdkMsU0FBTyxFQUFDQyxNQUFNRixNQUFNSSxzQkFBYixFQUFxQ0gsa0JBQXJDLEVBQVA7QUFDRDs7QUFFTSxTQUFTTixxQkFBVCxDQUErQk0sUUFBL0IsRUFBeUM7QUFDOUMsU0FBTyxFQUFDQyxNQUFNRixNQUFNSyx1QkFBYixFQUFzQ0osa0JBQXRDLEVBQVA7QUFDRDs7QUFFTSxTQUFTTCxxQkFBVCxDQUErQkssUUFBL0IsRUFBeUM7QUFDOUMsU0FBTyxFQUFDQyxNQUFNRixNQUFNTSx1QkFBYixFQUFzQ0wsa0JBQXRDLEVBQVA7QUFDRDs7QUFFTSxTQUFTSixnQkFBVCxDQUEwQlUsTUFBMUIsRUFBa0M7QUFDdkMsU0FBTyxFQUFDTCxNQUFNRixNQUFNUSxhQUFiLEVBQTRCRCxjQUE1QixFQUFQO0FBQ0Q7O0FBR00sU0FBU1QsWUFBVCxHQUF3QjtBQUM3QixTQUFPLFVBQVNXLFFBQVQsRUFBbUI7QUFDeEIsV0FBTyxtQkFBUUMsZUFBUixHQUEwQkMsSUFBMUIsQ0FBK0IscUJBQWE7QUFDakRGLGVBQVNmLGVBQWVrQixVQUFVQyxJQUF6QixDQUFUO0FBQ0QsS0FGTSxFQUVKQyxLQUZJLENBRUUsaUJBQVM7QUFDaEIsWUFBTUMsS0FBTjtBQUNELEtBSk0sQ0FBUDtBQUtELEdBTkQ7QUFPRDs7QUFFTSxTQUFTaEIsYUFBVCxDQUF1QkUsUUFBdkIsRUFBaUM7QUFDdEMsU0FBTyxVQUFTUSxRQUFULEVBQW1CO0FBQ3hCLFdBQU8sbUJBQVFWLGFBQVIsQ0FBc0JFLFFBQXRCLEVBQWdDVSxJQUFoQyxDQUFxQyx5QkFBaUI7QUFDM0RWLGVBQVNlLEVBQVQsR0FBY1AsU0FBU2Isc0JBQXNCcUIsYUFBdEIsQ0FBVCxDQUFkLEdBQStEUixTQUFTZCxzQkFBc0JzQixhQUF0QixDQUFULENBQS9EO0FBQ0QsS0FGTSxFQUVKSCxLQUZJLENBRUUsaUJBQVM7QUFDaEJJLGNBQVFDLEdBQVIsQ0FBWUosS0FBWjtBQUNBTixlQUFTWixpQkFBaUJrQixLQUFqQixDQUFUO0FBQ0EsWUFBTUEsS0FBTjtBQUNELEtBTk0sQ0FBUDtBQU9ELEdBUkQ7QUFTRCxDIiwiZmlsZSI6IjAuNDU1ODIwZmYyYjYyMzM2NjZjNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vYWN0aW9uVHlwZXMnXG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuLi91dGlsL0FwaUNhbGxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHsgdHlwZTogdHlwZXMuQ1JFQVRFX0RPQ1VNRU5ULCBkb2N1bWVudCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRG9jU3VjY2Vzcyhkb2N1bWVudCkge1xuICByZXR1cm4ge3R5cGU6IHR5cGVzLkxPQURfRE9DVU1FTlRTX1NVQ0NFU1MsIGRvY3VtZW50fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50U3VjY2Vzcyhkb2N1bWVudCkge1xuICByZXR1cm4ge3R5cGU6IHR5cGVzLkNSRUFURV9ET0NVTUVOVF9TVUNDRVNTLCBkb2N1bWVudH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEb2N1bWVudFN1Y2Nlc3MoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHt0eXBlOiB0eXBlcy5VUERBVEVfRE9DVU1FTlRfU1VDQ0VTUywgZG9jdW1lbnR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZEVycm9yTWVzc2FnZShlcnJvcnMpIHtcbiAgcmV0dXJuIHt0eXBlOiB0eXBlcy5FUlJPUl9NRVNTQUdFLCBlcnJvcnN9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBBbGxEb2N1bWVudHMoKSB7IFxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gQXBpQ2FsbC5nZXRBbGxEb2N1bWVudHMoKS50aGVuKGRvY3VtZW50cyA9PiB7XG4gICAgICBkaXNwYXRjaChsb2FkRG9jU3VjY2Vzcyhkb2N1bWVudHMuZGF0YSkpO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHRocm93KGVycm9yKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVEb2N1bWVudHMoZG9jdW1lbnQpIHsgXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIHJldHVybiBBcGlDYWxsLnNhdmVEb2N1bWVudHMoZG9jdW1lbnQpLnRoZW4oc2F2ZWREb2N1bWVudCA9PiB7XG4gICAgICBkb2N1bWVudC5pZCA/IGRpc3BhdGNoKHVwZGF0ZURvY3VtZW50U3VjY2VzcyhzYXZlZERvY3VtZW50KSkgOiBkaXNwYXRjaChjcmVhdGVEb2N1bWVudFN1Y2Nlc3Moc2F2ZWREb2N1bWVudCkpXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICBkaXNwYXRjaChzZW5kRXJyb3JNZXNzYWdlKGVycm9yKSlcbiAgICAgIHRocm93KGVycm9yKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==