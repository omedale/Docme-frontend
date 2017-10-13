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

imp;
function documentReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : action;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInR5cGVzIiwiaW1wIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQ1JFQVRFX0RPQ1VNRU5UIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiTE9BRF9ET0NVTUVOVFNfU1VDQ0VTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2tCQUV3QkEsZTs7QUFGeEI7O0lBQVlDLEs7Ozs7OztBQUNaQztBQUNlLFNBQVNGLGVBQVQsR0FBMEM7QUFBQSxNQUFqQkcsS0FBaUIsdUVBQVJDLE1BQVE7O0FBQ3ZELFVBQVFBLE9BQU9DLElBQWY7QUFDRSxTQUFLSixNQUFNSyxlQUFYO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUosT0FBT0ssUUFBbkI7QUFDRSwwQ0FBV04sS0FBWCxJQUNFTyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlAsT0FBT0ssUUFBekIsQ0FERjtBQUdGLFNBQUtSLE1BQU1XLHNCQUFYO0FBQ0UsYUFBT1IsT0FBT0ssUUFBZDs7QUFFRjtBQUNFLGFBQU9OLEtBQVA7QUFWSjtBQVlELEMiLCJmaWxlIjoiMC42MGUyMmFmYTE4YjU1NWRhNWVjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcydcbmltcFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9jdW1lbnRSZWR1Y2VyKHN0YXRlID0gIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5DUkVBVEVfRE9DVU1FTlQ6XG4gICAgY29uc29sZS5sb2coYWN0aW9uLmRvY3VtZW50KTtcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbi5kb2N1bWVudClcbiAgICAgIF07XG4gICAgY2FzZSB0eXBlcy5MT0FEX0RPQ1VNRU5UU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIGFjdGlvbi5kb2N1bWVudDtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=