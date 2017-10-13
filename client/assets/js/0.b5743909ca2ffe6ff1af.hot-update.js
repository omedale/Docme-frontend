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
      return [].concat(_toConsumableArray(state), [Object.assign({}, action.document)]);

    default:
      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "documentReducer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvcmVkdWNlcnMvZG9jdW1lbnRSZWR1Y2VyLmpzeD8xYWQ0Il0sIm5hbWVzIjpbImRvY3VtZW50UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIk9iamVjdCIsImFzc2lnbiIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7a0JBQXdCQSxlOzs7O0FBQVQsU0FBU0EsZUFBVCxHQUE2QztBQUFBLE1BQXBCQyxLQUFvQix1RUFBWixFQUFZO0FBQUEsTUFBUkMsTUFBUTs7QUFDMUQsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssaUJBQUw7QUFDRSwwQ0FBV0YsS0FBWCxJQUNBRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkgsT0FBT0ksUUFBekIsQ0FEQTs7QUFJRjtBQUNFLGFBQU9MLEtBQVA7QUFQSjtBQVNELEMiLCJmaWxlIjoiMC5iNTc0MzkwOWNhMmZmZTZmZjFhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9jdW1lbnRSZWR1Y2VyKHN0YXRlID0gW10sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQ1JFQVRFX0RPQ1VNRU5UJzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24uZG9jdW1lbnQpXG4gICAgICBdO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9yZWR1Y2Vycy9kb2N1bWVudFJlZHVjZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==