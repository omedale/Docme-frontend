webpackHotUpdate(0,{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentList = function DocumentList(_ref) {
  var documents = _ref.documents;

  var newDocuments = documents.reverse();
  var List = newDocuments.map(function (document) {
    return _react2.default.createElement(
      'div',
      { key: document.id + document.title },
      _react2.default.createElement(
        'div',
        { className: 'col s1 m2' },
        _react2.default.createElement(
          'div',
          { className: 'card horizontal cardDoc' },
          _react2.default.createElement(
            'div',
            { className: 'card-stacked' },
            _react2.default.createElement(
              'a',
              { 'ng-click': 'removeNote($index, note)', 'class': 'button remove' },
              'X'
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-content cardContentImage' },
              _react2.default.createElement('img', { className: 'thumb-image', src: 'img/thum.png' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-action cardDocAction' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  key: document.id + document.title,
                  to: '/document/' + document.id
                },
                _react2.default.createElement(
                  'div',
                  { className: 'docText', key: document.id },
                  document.title
                )
              )
            )
          )
        )
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentList.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZG9jdW1lbnRzIiwibmV3RG9jdW1lbnRzIiwicmV2ZXJzZSIsIkxpc3QiLCJtYXAiLCJkb2N1bWVudCIsImlkIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDdEMsTUFBTUMsZUFBZUQsVUFBVUUsT0FBVixFQUFyQjtBQUNBLE1BQU1DLE9BQU9GLGFBQWFHLEdBQWIsQ0FBaUI7QUFBQSxXQUM1QjtBQUFBO0FBQUEsUUFBTSxLQUFLQyxTQUFTQyxFQUFULEdBQWNELFNBQVNFLEtBQWxDO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSx5QkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUNBO0FBQUE7QUFBQSxnQkFBRyxZQUFTLDBCQUFaLEVBQXVDLFNBQU0sZUFBN0M7QUFBQTtBQUFBLGFBREE7QUFFRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSwrQkFBZjtBQUNFLHFEQUFLLFdBQVUsYUFBZixFQUE2QixLQUFJLGNBQWpDO0FBREYsYUFGRjtBQUtFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLDJCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsdUJBQUtGLFNBQVNDLEVBQVQsR0FBY0QsU0FBU0UsS0FEOUI7QUFFRSxxQ0FBaUJGLFNBQVNDO0FBRjVCO0FBSUU7QUFBQTtBQUFBLG9CQUFLLFdBQVUsU0FBZixFQUF5QixLQUFLRCxTQUFTQyxFQUF2QztBQUE0Q0QsMkJBQVNFO0FBQXJEO0FBSkY7QUFERjtBQUxGO0FBREY7QUFERjtBQURGLEtBRDRCO0FBQUEsR0FBakIsQ0FBYjtBQXNCQSxTQUNFO0FBQUE7QUFBQTtBQUNHSjtBQURILEdBREY7QUFLRCxDQTdCRDs7QUErQkFKLGFBQWFTLFNBQWIsR0FBeUI7QUFDdkJSLGFBQVcsZ0JBQU1TLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURWLENBQXpCOztrQkFJZVosWSIsImZpbGUiOiIwLjBjOGNmOGY0ODNlNGRmNjMyODVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBEb2N1bWVudExpc3QgPSAoeyBkb2N1bWVudHMgfSkgPT4ge1xuICBjb25zdCBuZXdEb2N1bWVudHMgPSBkb2N1bWVudHMucmV2ZXJzZSgpO1xuICBjb25zdCBMaXN0ID0gbmV3RG9jdW1lbnRzLm1hcChkb2N1bWVudCA9PlxuICAgIDxkaXYgIGtleT17ZG9jdW1lbnQuaWQgKyBkb2N1bWVudC50aXRsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMSBtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaG9yaXpvbnRhbCBjYXJkRG9jXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXN0YWNrZWRcIj5cbiAgICAgICAgICA8YSBuZy1jbGljaz1cInJlbW92ZU5vdGUoJGluZGV4LCBub3RlKVwiIGNsYXNzPVwiYnV0dG9uIHJlbW92ZVwiPlg8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBjYXJkQ29udGVudEltYWdlXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGh1bWItaW1hZ2VcIiBzcmM9XCJpbWcvdGh1bS5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbiBjYXJkRG9jQWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtkb2N1bWVudC5pZCArIGRvY3VtZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgIHRvPXtgL2RvY3VtZW50LyR7ZG9jdW1lbnQuaWR9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jVGV4dFwiIGtleT17ZG9jdW1lbnQuaWR9Pntkb2N1bWVudC50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtMaXN0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRG9jdW1lbnRMaXN0LnByb3BUeXBlcyA9IHtcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRMaXN0IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50TGlzdC5qc3giXSwic291cmNlUm9vdCI6IiJ9