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
    _react2.default.createElement(
      'div',
      { key: document.id },
      document.title
    );
  });
  return _react2.default.createElement('div', null);
};

DocumentList.propTypes = {
  documents: _react2.default.PropTypes.array.isRequired
};

exports.default = DocumentList;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentList.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZG9jdW1lbnRzIiwiY29uc29sZSIsImxvZyIsIkxpc3QiLCJtYXAiLCJkb2N1bWVudCIsImlkIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLE9BQWlCO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlOztBQUNwQ0MsVUFBUUMsR0FBUixDQUFZRixTQUFaO0FBQ0EsTUFBTUcsT0FBT0gsVUFBVUksR0FBVixDQUFjLG9CQUFZO0FBQ3JDO0FBQUE7QUFBQSxRQUFLLEtBQUtDLFNBQVNDLEVBQW5CO0FBQXdCRCxlQUFTRTtBQUFqQztBQUNELEdBRlksQ0FBYjtBQUdBLFNBQ0UsMENBREY7QUFLRCxDQVZEOztBQVlBUixhQUFhUyxTQUFiLEdBQXlCO0FBQ3ZCUixhQUFXLGdCQUFNUyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEVixDQUF6Qjs7a0JBSWVaLFkiLCJmaWxlIjoiMC4wZTAxZWRjYjgzZmUyYzA3NjNhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IERvY3VtZW50TGlzdCA9ICh7ZG9jdW1lbnRzfSkgPT4ge1xuICBjb25zb2xlLmxvZyhkb2N1bWVudHMpXG4gIGNvbnN0IExpc3QgPSBkb2N1bWVudHMubWFwKGRvY3VtZW50ID0+IHtcbiAgICA8ZGl2IGtleT17ZG9jdW1lbnQuaWR9Pntkb2N1bWVudC50aXRsZX08L2Rpdj5cbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRvY3VtZW50TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50TGlzdCBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==