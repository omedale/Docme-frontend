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
      //console.log(documents.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvYWN0aW9ucy9kb2N1bWVudEFjdGlvbi5qc3g/ZDJlMiJdLCJuYW1lcyI6WyJjcmVhdGVEb2N1bWVudCIsIkFsbERvY3VtZW50cyIsInR5cGVzIiwiQXBpQ2FsbCIsImRvY3VtZW50IiwidHlwZSIsIkNSRUFURV9ET0NVTUVOVCIsImRpc3BhdGNoIiwiQWxsRG9jcyIsImdldEFsbERvY3VtZW50cyIsInRoZW4iLCJsb2FkRG9jU3VjY2VzcyIsImRvY3VtZW50cyIsImRhdGEiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1FBR2dCQSxjLEdBQUFBLGM7UUFJQUMsWSxHQUFBQSxZOztBQVBoQjs7SUFBWUMsSzs7QUFDWjs7SUFBWUMsTzs7OztBQUVMLFNBQVNILGNBQVQsQ0FBd0JJLFFBQXhCLEVBQWtDO0FBQ3ZDLFNBQU8sRUFBRUMsTUFBTUgsTUFBTUksZUFBZCxFQUErQkYsa0JBQS9CLEVBQVA7QUFDRDs7QUFFTSxTQUFTSCxZQUFULEdBQXdCO0FBQzdCLFNBQU8sVUFBU00sUUFBVCxFQUFtQjtBQUN4QixXQUFPQyxRQUFRQyxlQUFSLEdBQTBCQyxJQUExQixDQUErQixxQkFBYTtBQUNqRDtBQUNBSCxlQUFTSSxlQUFlQyxVQUFVQyxJQUF6QixDQUFUO0FBQ0QsS0FITSxFQUdKQyxLQUhJLENBR0UsaUJBQVM7QUFDaEJDLGNBQVFDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBLFlBQU1BLEtBQU47QUFDRCxLQU5NLENBQVA7QUFPRCxHQVJEO0FBU0QsQyIsImZpbGUiOiIwLjJiYTdmYTA1MjIxYWZkMzcxYjZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2FjdGlvblR5cGVzJ1xuaW1wb3J0ICogYXMgQXBpQ2FsbCBmcm9tICcuLi91dGlsL0FwaUNhbGxzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgcmV0dXJuIHsgdHlwZTogdHlwZXMuQ1JFQVRFX0RPQ1VNRU5ULCBkb2N1bWVudCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBBbGxEb2N1bWVudHMoKSB7IFxuICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4gQWxsRG9jcy5nZXRBbGxEb2N1bWVudHMoKS50aGVuKGRvY3VtZW50cyA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKGRvY3VtZW50cy5kYXRhKTtcbiAgICAgIGRpc3BhdGNoKGxvYWREb2NTdWNjZXNzKGRvY3VtZW50cy5kYXRhKSk7XG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgdGhyb3coZXJyb3IpO1xuICAgIH0pO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==