webpackHotUpdate(0,{

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = documentReducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function documentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'CREATE_DOCUMENT':
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.documents)]);

    default:
      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk9iamVjdCIsImFzc2lnbiIsImRvY3VtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2tCQUF3QkEsZTs7OztBQUFULFNBQVNBLGVBQVQsR0FBNkM7QUFBQSxNQUFwQkMsS0FBb0IsdUVBQVosRUFBWTtBQUFBLE1BQVJDLE1BQVE7O0FBQzFELFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLLGlCQUFMO0FBQ0UsMENBQVdGLEtBQVgsSUFDQUcsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JILE9BQU9JLFNBQXpCLENBREE7O0FBSUY7QUFDRSxhQUFPTCxLQUFQO0FBUEo7QUFTRCxDIiwiZmlsZSI6IjAuZWFmYWZiNzYyMGZjOTJjMTdkM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvY3VtZW50UmVkdWNlcihzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0NSRUFURV9ET0NVTUVOVCc6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLmRvY3VtZW50cylcbiAgICAgIF07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3JlZHVjZXJzL2RvY3VtZW50UmVkdWNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9