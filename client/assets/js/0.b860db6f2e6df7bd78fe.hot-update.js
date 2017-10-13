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
exports.AllDocuments = AllDocuments;
exports.sDocuments = sDocuments;

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

function AllDocuments() {
  return function (dispatch) {
    return _ApiCalls2.default.getAllDocuments().then(function (documents) {
      dispatch(loadDocSuccess(documents.data));
    }).catch(function (error) {
      throw error;
    });
  };
}

function sDocuments() {
  return function (dispatch) {
    return _ApiCalls2.default.getAllDocuments().then(function (documents) {
      dispatch(loadDocSuccess(documents.data));
    }).catch(function (error) {
      throw error;
    });
  };
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentAction.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsImxvYWREb2NTdWNjZXNzIiwiQWxsRG9jdW1lbnRzIiwic0RvY3VtZW50cyIsInR5cGVzIiwiZG9jdW1lbnQiLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUyIsImRpc3BhdGNoIiwiZ2V0QWxsRG9jdW1lbnRzIiwidGhlbiIsImRvY3VtZW50cyIsImRhdGEiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUFHZ0JBLGMsR0FBQUEsYztRQUlBQyxjLEdBQUFBLGM7UUFJQUMsWSxHQUFBQSxZO1FBV0FDLFUsR0FBQUEsVTs7QUF0QmhCOztJQUFZQyxLOztBQUNaOzs7Ozs7OztBQUVPLFNBQVNKLGNBQVQsQ0FBd0JLLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU8sRUFBRUMsTUFBTUYsTUFBTUcsZUFBZCxFQUErQkYsa0JBQS9CLEVBQVA7QUFDRDs7QUFFTSxTQUFTSixjQUFULENBQXdCSSxRQUF4QixFQUFrQztBQUN2QyxTQUFPLEVBQUNDLE1BQU1GLE1BQU1JLHNCQUFiLEVBQXFDSCxrQkFBckMsRUFBUDtBQUNEOztBQUVNLFNBQVNILFlBQVQsR0FBd0I7QUFDN0IsU0FBTyxVQUFTTyxRQUFULEVBQW1CO0FBQ3hCLFdBQU8sbUJBQVFDLGVBQVIsR0FBMEJDLElBQTFCLENBQStCLHFCQUFhO0FBQ2pERixlQUFTUixlQUFlVyxVQUFVQyxJQUF6QixDQUFUO0FBQ0QsS0FGTSxFQUVKQyxLQUZJLENBRUUsaUJBQVM7QUFDaEIsWUFBTUMsS0FBTjtBQUNELEtBSk0sQ0FBUDtBQUtELEdBTkQ7QUFPRDs7QUFHTSxTQUFTWixVQUFULEdBQXNCO0FBQzNCLFNBQU8sVUFBU00sUUFBVCxFQUFtQjtBQUN4QixXQUFPLG1CQUFRQyxlQUFSLEdBQTBCQyxJQUExQixDQUErQixxQkFBYTtBQUNqREYsZUFBU1IsZUFBZVcsVUFBVUMsSUFBekIsQ0FBVDtBQUNELEtBRk0sRUFFSkMsS0FGSSxDQUVFLGlCQUFTO0FBQ2hCLFlBQU1DLEtBQU47QUFDRCxLQUpNLENBQVA7QUFLRCxHQU5EO0FBT0QsQyIsImZpbGUiOiIwLmI4NjBkYjZmMmU2ZGY3YmQ3OGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJ1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi4vdXRpbC9BcGlDYWxscydcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50KGRvY3VtZW50KSB7XG4gIHJldHVybiB7IHR5cGU6IHR5cGVzLkNSRUFURV9ET0NVTUVOVCwgZG9jdW1lbnQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERvY1N1Y2Nlc3MoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHt0eXBlOiB0eXBlcy5MT0FEX0RPQ1VNRU5UU19TVUNDRVNTLCBkb2N1bWVudH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBbGxEb2N1bWVudHMoKSB7IFxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gQXBpQ2FsbC5nZXRBbGxEb2N1bWVudHMoKS50aGVuKGRvY3VtZW50cyA9PiB7XG4gICAgICBkaXNwYXRjaChsb2FkRG9jU3VjY2Vzcyhkb2N1bWVudHMuZGF0YSkpO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHRocm93KGVycm9yKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc0RvY3VtZW50cygpIHsgXG4gIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xuICAgIHJldHVybiBBcGlDYWxsLmdldEFsbERvY3VtZW50cygpLnRoZW4oZG9jdW1lbnRzID0+IHtcbiAgICAgIGRpc3BhdGNoKGxvYWREb2NTdWNjZXNzKGRvY3VtZW50cy5kYXRhKSk7XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgdGhyb3coZXJyb3IpO1xuICAgIH0pO1xuICB9O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3giXSwic291cmNlUm9vdCI6IiJ9