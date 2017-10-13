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

var _reactRouterDom = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentList = function DocumentList(_ref) {
  var documents = _ref.documents;

  var List = documents.map(function (document) {
    var url = '/document/' + document;
    _react2.default.createElement(
      _reactRouterDom.Link,
      {
        key: document.id,
        to: '/document/${document.id}'
      },
      _react2.default.createElement(
        'div',
        { key: document.id },
        document.title
      )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZG9jdW1lbnRzIiwiTGlzdCIsIm1hcCIsInVybCIsImRvY3VtZW50IiwiaWQiLCJ0aXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUN0QyxNQUFNQyxPQUFPRCxVQUFVRSxHQUFWLENBQWMsb0JBQVk7QUFDckMsUUFBTUMscUJBQW9CQyxRQUExQjtBQUNBO0FBQUE7QUFBQTtBQUNFLGFBQUtBLFNBQVNDLEVBRGhCO0FBRUUsWUFBRztBQUZMO0FBSUU7QUFBQTtBQUFBLFVBQUssS0FBS0QsU0FBU0MsRUFBbkI7QUFBd0JELGlCQUFTRTtBQUFqQztBQUpGO0FBTUQsR0FSWSxDQUFiO0FBU0EsU0FDRTtBQUFBO0FBQUE7QUFDR0w7QUFESCxHQURGO0FBS0QsQ0FmRDs7QUFpQkFGLGFBQWFRLFNBQWIsR0FBeUI7QUFDdkJQLGFBQVcsZ0JBQU1RLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURWLENBQXpCOztrQkFJZVgsWSIsImZpbGUiOiIwLjFmMDJhNGI1ZjBiMTgzMDBjNWI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBEb2N1bWVudExpc3QgPSAoeyBkb2N1bWVudHMgfSkgPT4ge1xuICBjb25zdCBMaXN0ID0gZG9jdW1lbnRzLm1hcChkb2N1bWVudCA9PiB7XG4gICAgY29uc3QgdXJsICA9IGAvZG9jdW1lbnQvJHtkb2N1bWVudH1gO1xuICAgIDxMaW5rXG4gICAgICBrZXk9e2RvY3VtZW50LmlkfVxuICAgICAgdG89XCIvZG9jdW1lbnQvJHtkb2N1bWVudC5pZH1cIlxuICAgID5cbiAgICAgIDxkaXYga2V5PXtkb2N1bWVudC5pZH0+e2RvY3VtZW50LnRpdGxlfTwvZGl2PlxuICAgIDwvTGluaz5cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtMaXN0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRG9jdW1lbnRMaXN0LnByb3BUeXBlcyA9IHtcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRMaXN0IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50TGlzdC5qc3giXSwic291cmNlUm9vdCI6IiJ9