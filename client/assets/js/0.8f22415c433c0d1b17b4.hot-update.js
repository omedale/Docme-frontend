webpackHotUpdate(0,{

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentList = function DocumentList(_ref) {
  var documents = _ref.documents;

  console.log(documents);
  var List = documents.map(function (document) {
    return _react2.default.createElement(
      'div',
      { key: document.id },
      document.title
    );
  });
  return _react2.default.createElement(
    'div',
    null,
    List
  );
};

DocumentList.propTypes = {
  documents: _react2.default.PropTypes.array.isRequired
};

exports.default = DocumentList;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentList.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZG9jdW1lbnRzIiwiY29uc29sZSIsImxvZyIsIkxpc3QiLCJtYXAiLCJkb2N1bWVudCIsImlkIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLE9BQWlCO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlOztBQUNwQ0MsVUFBUUMsR0FBUixDQUFZRixTQUFaO0FBQ0EsTUFBTUcsT0FBT0gsVUFBVUksR0FBVixDQUFjO0FBQUEsV0FDekI7QUFBQTtBQUFBLFFBQUssS0FBS0MsU0FBU0MsRUFBbkI7QUFBd0JELGVBQVNFO0FBQWpDLEtBRHlCO0FBQUEsR0FBZCxDQUFiO0FBR0EsU0FDRTtBQUFBO0FBQUE7QUFDR0o7QUFESCxHQURGO0FBS0QsQ0FWRDs7QUFZQUosYUFBYVMsU0FBYixHQUF5QjtBQUN2QlIsYUFBVyxnQkFBTVMsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDO0FBRFYsQ0FBekI7O2tCQUllWixZIiwiZmlsZSI6IjAuOGYyMjQxNWM0MzNjMGQxYjE3YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBEb2N1bWVudExpc3QgPSAoe2RvY3VtZW50c30pID0+IHtcbiAgY29uc29sZS5sb2coZG9jdW1lbnRzKVxuICBjb25zdCBMaXN0ID0gZG9jdW1lbnRzLm1hcChkb2N1bWVudCA9PiBcbiAgICA8ZGl2IGtleT17ZG9jdW1lbnQuaWR9Pntkb2N1bWVudC50aXRsZX08L2Rpdj5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge0xpc3R9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Eb2N1bWVudExpc3QucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudExpc3QgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRG9jdW1lbnRMaXN0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=