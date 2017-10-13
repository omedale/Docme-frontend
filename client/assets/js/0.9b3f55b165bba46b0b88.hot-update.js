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
      console.log(action.document);
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.document)]);
    case types.LOAD_DOCUMENTS_SUCCESS:
      return action.document;

    default:
      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInR5cGVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2tCQUN3QkEsZTs7QUFEeEI7O0lBQVlDLEs7Ozs7OztBQUNHLFNBQVNELGVBQVQsR0FBNkM7QUFBQSxNQUFwQkUsS0FBb0IsdUVBQVosRUFBWTtBQUFBLE1BQVJDLE1BQVE7O0FBQzFELFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLSCxNQUFNSSxlQUFYO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUosT0FBT0ssUUFBbkI7QUFDRSwwQ0FBV04sS0FBWCxJQUNFTyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlAsT0FBT0ssUUFBekIsQ0FERjtBQUdGLFNBQUtQLE1BQU1VLHNCQUFYO0FBQ0UsYUFBT1IsT0FBT0ssUUFBZDs7QUFFRjtBQUNFLGFBQU9OLEtBQVA7QUFWSjtBQVlELEMiLCJmaWxlIjoiMC45YjNmNTViMTY1YmJhNDZiMGI4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvY3VtZW50UmVkdWNlcihzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuQ1JFQVRFX0RPQ1VNRU5UOlxuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kb2N1bWVudClcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbi5kb2N1bWVudClcbiAgICAgIF07XG4gICAgY2FzZSB0eXBlcy5MT0FEX0RPQ1VNRU5UU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5kb2N1bWVudDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=