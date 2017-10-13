webpackHotUpdate(0,{

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.documentRow = documentRow;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function documentRow(document, index) {
  return _react2.default.createElement(
    'div',
    { key: index },
    document.title
  );
}

var DocumentList = function DocumentList(_ref) {
  var documents = _ref.documents;

  return _react2.default.createElement(
    'div',
    null,
    documents.map()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiZG9jdW1lbnRSb3ciLCJkb2N1bWVudCIsImluZGV4IiwidGl0bGUiLCJEb2N1bWVudExpc3QiLCJkb2N1bWVudHMiLCJtYXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztRQUVnQkEsVyxHQUFBQSxXOztBQUZoQjs7Ozs7O0FBRU8sU0FBU0EsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0JDLEtBQS9CLEVBQXNDO0FBQzNDLFNBQU87QUFBQTtBQUFBLE1BQUssS0FBS0EsS0FBVjtBQUFrQkQsYUFBU0U7QUFBM0IsR0FBUDtBQUNEOztBQUVELElBQU1DLGVBQWUsU0FBZkEsWUFBZSxPQUFpQjtBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTs7QUFDcEMsU0FDRTtBQUFBO0FBQUE7QUFDR0EsY0FBVUMsR0FBVjtBQURILEdBREY7QUFLRCxDQU5EOztBQVFBRixhQUFhRyxTQUFiLEdBQXlCO0FBQ3ZCRixhQUFXLGdCQUFNRyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEVixDQUF6Qjs7a0JBSWVOLFkiLCJmaWxlIjoiMC4yMGYwMTYxM2ZjOTRmNTQ2YmQ5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkb2N1bWVudFJvdyhkb2N1bWVudCwgaW5kZXgpIHtcbiAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0+e2RvY3VtZW50LnRpdGxlfTwvZGl2PlxufVxuXG5jb25zdCBEb2N1bWVudExpc3QgPSAoe2RvY3VtZW50c30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2RvY3VtZW50cy5tYXAoKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRvY3VtZW50TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50TGlzdCBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==