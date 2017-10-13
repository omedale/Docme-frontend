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
      co;
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.document)]);

    default:
      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvIiwiT2JqZWN0IiwiYXNzaWduIiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztrQkFBd0JBLGU7Ozs7QUFBVCxTQUFTQSxlQUFULEdBQTZDO0FBQUEsTUFBcEJDLEtBQW9CLHVFQUFaLEVBQVk7QUFBQSxNQUFSQyxNQUFROztBQUMxRCxVQUFRQSxPQUFPQyxJQUFmO0FBQ0UsU0FBSyxpQkFBTDtBQUNFQztBQUNBLDBDQUFXSCxLQUFYLElBQ0VJLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSixPQUFPSyxRQUF6QixDQURGOztBQUlGO0FBQ0UsYUFBT04sS0FBUDtBQVJKO0FBVUQsQyIsImZpbGUiOiIwLjQ1ODRmMWMyYjAxZjY5MmY3ZThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkb2N1bWVudFJlZHVjZXIoc3RhdGUgPSBbXSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdDUkVBVEVfRE9DVU1FTlQnOlxuICAgICAgY29cbiAgICAgIHJldHVybiBbLi4uc3RhdGUsXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbi5kb2N1bWVudClcbiAgICAgIF07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3JlZHVjZXJzL2RvY3VtZW50UmVkdWNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9