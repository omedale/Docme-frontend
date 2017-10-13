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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZG9jdW1lbnRzIiwiTGlzdCIsIm1hcCIsImRvY3VtZW50IiwiaWQiLCJ0aXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBaUI7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7O0FBQ3BDLE1BQU1DLE9BQU9ELFVBQVVFLEdBQVYsQ0FBYztBQUFBLFdBQ3pCO0FBQUE7QUFBQSxRQUFLLEtBQUtDLFNBQVNDLEVBQW5CO0FBQXdCRCxlQUFTRTtBQUFqQyxLQUR5QjtBQUFBLEdBQWQsQ0FBYjtBQUdBLFNBQ0U7QUFBQTtBQUFBO0FBQ0dKO0FBREgsR0FERjtBQUtELENBVEQ7O0FBV0FGLGFBQWFPLFNBQWIsR0FBeUI7QUFDdkJOLGFBQVcsZ0JBQU1PLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURWLENBQXpCOztrQkFJZVYsWSIsImZpbGUiOiIwLmNjN2JkOGMzMzQ0NGRlZThhMWY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRG9jdW1lbnRMaXN0ID0gKHtkb2N1bWVudHN9KSA9PiB7XG4gIGNvbnN0IExpc3QgPSBkb2N1bWVudHMubWFwKGRvY3VtZW50ID0+IFxuICAgIDxkaXYga2V5PXtkb2N1bWVudC5pZH0+e2RvY3VtZW50LnRpdGxlfTwvZGl2PlxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7TGlzdH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRvY3VtZW50TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50TGlzdCBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==