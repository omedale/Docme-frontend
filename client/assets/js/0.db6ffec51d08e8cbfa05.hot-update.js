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
      return action.document;

    default:
      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInR5cGVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiT2JqZWN0IiwiYXNzaWduIiwiZG9jdW1lbnQiLCJMT0FEX0RPQ1VNRU5UU19TVUNDRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7a0JBQ3dCQSxlOztBQUR4Qjs7SUFBWUMsSzs7Ozs7O0FBQ0csU0FBU0QsZUFBVCxHQUE2QztBQUFBLE1BQXBCRSxLQUFvQix1RUFBWixFQUFZO0FBQUEsTUFBUkMsTUFBUTs7QUFDMUQsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUtILE1BQU1JLGVBQVg7QUFDRSwwQ0FBV0gsS0FBWCxJQUNFSSxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosT0FBT0ssUUFBekIsQ0FERjtBQUdGLFNBQUtQLE1BQU1RLHNCQUFYO0FBQ0UsYUFBT04sT0FBT0ssUUFBZDs7QUFFRjtBQUNFLGFBQU9OLEtBQVA7QUFUSjtBQVdELEMiLCJmaWxlIjoiMC5kYjZmZmVjNTFkMDhlOGNiZmEwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvY3VtZW50UmVkdWNlcihzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuQ1JFQVRFX0RPQ1VNRU5UOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSxcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLmRvY3VtZW50KVxuICAgICAgXTtcbiAgICBjYXNlIHR5cGVzLkxPQURfRE9DVU1FTlRTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4gYWN0aW9uLmRvY3VtZW50O1xuICAgICAgXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9yZWR1Y2Vycy9kb2N1bWVudFJlZHVjZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==