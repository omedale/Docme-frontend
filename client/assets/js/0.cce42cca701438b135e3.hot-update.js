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

var ApiCall = _interopRequireWildcard(_ApiCalls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createDocument(document) {
  return { type: types.CREATE_DOCUMENT, document: document };
}

function AllDocuments() {
  return function (dispatch) {
    return ApiCall.getAllDocuments().then(function (documents) {
      dispatch(loadDocSuccess(documents.data));
    }).catch(function (error) {
      console.log(error);
      throw error;
    });
  };
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentAction.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsIkFsbERvY3VtZW50cyIsInR5cGVzIiwiQXBpQ2FsbCIsImRvY3VtZW50IiwidHlwZSIsIkNSRUFURV9ET0NVTUVOVCIsImRpc3BhdGNoIiwiZ2V0QWxsRG9jdW1lbnRzIiwidGhlbiIsImxvYWREb2NTdWNjZXNzIiwiZG9jdW1lbnRzIiwiZGF0YSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7UUFHZ0JBLGMsR0FBQUEsYztRQUlBQyxZLEdBQUFBLFk7O0FBUGhCOztJQUFZQyxLOztBQUNaOztJQUFZQyxPOzs7O0FBRUwsU0FBU0gsY0FBVCxDQUF3QkksUUFBeEIsRUFBa0M7QUFDdkMsU0FBTyxFQUFFQyxNQUFNSCxNQUFNSSxlQUFkLEVBQStCRixrQkFBL0IsRUFBUDtBQUNEOztBQUVNLFNBQVNILFlBQVQsR0FBd0I7QUFDN0IsU0FBTyxVQUFTTSxRQUFULEVBQW1CO0FBQ3hCLFdBQU9KLFFBQVFLLGVBQVIsR0FBMEJDLElBQTFCLENBQStCLHFCQUFhO0FBQ2pERixlQUFTRyxlQUFlQyxVQUFVQyxJQUF6QixDQUFUO0FBQ0QsS0FGTSxFQUVKQyxLQUZJLENBRUUsaUJBQVM7QUFDaEJDLGNBQVFDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBLFlBQU1BLEtBQU47QUFDRCxLQUxNLENBQVA7QUFNRCxHQVBEO0FBUUQsQyIsImZpbGUiOiIwLmNjZTQyY2NhNzAxNDM4YjEzNWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJ1xuaW1wb3J0ICogYXMgQXBpQ2FsbCBmcm9tICcuLi91dGlsL0FwaUNhbGxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHsgdHlwZTogdHlwZXMuQ1JFQVRFX0RPQ1VNRU5ULCBkb2N1bWVudCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBbGxEb2N1bWVudHMoKSB7IFxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gQXBpQ2FsbC5nZXRBbGxEb2N1bWVudHMoKS50aGVuKGRvY3VtZW50cyA9PiB7XG4gICAgICBkaXNwYXRjaChsb2FkRG9jU3VjY2Vzcyhkb2N1bWVudHMuZGF0YSkpO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHRocm93KGVycm9yKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hY3Rpb25zL2RvY3VtZW50QWN0aW9uLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=