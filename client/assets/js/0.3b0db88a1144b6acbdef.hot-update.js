webpackHotUpdate(0,{

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = documentReducer;

var _actionTypes = __webpack_require__(115);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function documentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case types.CREATE_DOCUMENT:
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.document)]);
    case types.LOAD_DOCUMENTS_SUCCESS:

    default:
      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInR5cGVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiT2JqZWN0IiwiYXNzaWduIiwiZG9jdW1lbnQiLCJMT0FEX0RPQ1VNRU5UU19TVUNDRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7a0JBQ3dCQSxlOztBQUR4Qjs7SUFBWUMsSzs7Ozs7O0FBQ0csU0FBU0QsZUFBVCxHQUE2QztBQUFBLE1BQXBCRSxLQUFvQix1RUFBWixFQUFZO0FBQUEsTUFBUkMsTUFBUTs7QUFDMUQsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUtILE1BQU1JLGVBQVg7QUFDRSwwQ0FBV0gsS0FBWCxJQUNFSSxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosT0FBT0ssUUFBekIsQ0FERjtBQUdGLFNBQUtQLE1BQU1RLHNCQUFYOztBQUVBO0FBQ0UsYUFBT1AsS0FBUDtBQVJKO0FBVUQsQyIsImZpbGUiOiIwLjNiMGRiODhhMTE0NGI2YWNiZGVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9jdW1lbnRSZWR1Y2VyKHN0YXRlID0gW10sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5DUkVBVEVfRE9DVU1FTlQ6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlLFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24uZG9jdW1lbnQpXG4gICAgICBdO1xuICAgIGNhc2UgdHlwZXMuTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUzpcbiAgICBcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3JlZHVjZXJzL2RvY3VtZW50UmVkdWNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9