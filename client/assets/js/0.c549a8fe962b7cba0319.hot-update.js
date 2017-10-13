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
    return AllDocs.getAllDocuments().then(function (documents) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsIkFsbERvY3VtZW50cyIsInR5cGVzIiwiQXBpQ2FsbCIsImRvY3VtZW50IiwidHlwZSIsIkNSRUFURV9ET0NVTUVOVCIsImRpc3BhdGNoIiwiQWxsRG9jcyIsImdldEFsbERvY3VtZW50cyIsInRoZW4iLCJsb2FkRG9jU3VjY2VzcyIsImRvY3VtZW50cyIsImRhdGEiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1FBR2dCQSxjLEdBQUFBLGM7UUFJQUMsWSxHQUFBQSxZOztBQVBoQjs7SUFBWUMsSzs7QUFDWjs7SUFBWUMsTzs7OztBQUVMLFNBQVNILGNBQVQsQ0FBd0JJLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU8sRUFBRUMsTUFBTUgsTUFBTUksZUFBZCxFQUErQkYsa0JBQS9CLEVBQVA7QUFDRDs7QUFFTSxTQUFTSCxZQUFULEdBQXdCO0FBQzdCLFNBQU8sVUFBU00sUUFBVCxFQUFtQjtBQUN4QixXQUFPQyxRQUFRQyxlQUFSLEdBQTBCQyxJQUExQixDQUErQixxQkFBYTtBQUNqREgsZUFBU0ksZUFBZUMsVUFBVUMsSUFBekIsQ0FBVDtBQUNELEtBRk0sRUFFSkMsS0FGSSxDQUVFLGlCQUFTO0FBQ2hCQyxjQUFRQyxHQUFSLENBQVlDLEtBQVo7QUFDQSxZQUFNQSxLQUFOO0FBQ0QsS0FMTSxDQUFQO0FBTUQsR0FQRDtBQVFELEMiLCJmaWxlIjoiMC5jNTQ5YThmZTk2MmI3Y2JhMDMxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9hY3Rpb25UeXBlcydcbmltcG9ydCAqIGFzIEFwaUNhbGwgZnJvbSAnLi4vdXRpbC9BcGlDYWxscydcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50KGRvY3VtZW50KSB7XG4gIHJldHVybiB7IHR5cGU6IHR5cGVzLkNSRUFURV9ET0NVTUVOVCwgZG9jdW1lbnQgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQWxsRG9jdW1lbnRzKCkgeyBcbiAgcmV0dXJuIGZ1bmN0aW9uKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIEFsbERvY3MuZ2V0QWxsRG9jdW1lbnRzKCkudGhlbihkb2N1bWVudHMgPT4ge1xuICAgICAgZGlzcGF0Y2gobG9hZERvY1N1Y2Nlc3MoZG9jdW1lbnRzLmRhdGEpKTtcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB0aHJvdyhlcnJvcik7XG4gICAgfSk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3giXSwic291cmNlUm9vdCI6IiJ9