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
  var deleteDocument = _ref.deleteDocument,
      documents = _ref.documents;

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
              { onClick: function onClick() {
                  return deleteDocument(document.id);
                }, className: 'button remove' },
              'x'
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-content cardContentImage' },
              _react2.default.createElement('img', { className: 'thumb-image', src: 'img/thum.png' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-action card-footer cardDocAction' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                {
                  key: document.id + document.title,
                  to: '/document/' + document.id
                },
                _react2.default.createElement(
                  'div',
                  { className: 'docText', key: document.id },
                  document.title.substr(0, 20)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZGVsZXRlRG9jdW1lbnQiLCJkb2N1bWVudHMiLCJuZXdEb2N1bWVudHMiLCJyZXZlcnNlIiwiTGlzdCIsIm1hcCIsImRvY3VtZW50IiwiaWQiLCJ0aXRsZSIsInN1YnN0ciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBbUM7QUFBQSxNQUFoQ0MsY0FBZ0MsUUFBaENBLGNBQWdDO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDdEQsTUFBTUMsZUFBZUQsVUFBVUUsT0FBVixFQUFyQjtBQUNBLE1BQU1DLE9BQU9GLGFBQWFHLEdBQWIsQ0FBaUI7QUFBQSxXQUM1QjtBQUFBO0FBQUEsUUFBTSxLQUFLQyxTQUFTQyxFQUFULEdBQWNELFNBQVNFLEtBQWxDO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSx5QkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxTQUFTO0FBQUEseUJBQU1SLGVBQWVNLFNBQVNDLEVBQXhCLENBQU47QUFBQSxpQkFBWixFQUFnRCxXQUFVLGVBQTFEO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsK0JBQWY7QUFDRSxxREFBSyxXQUFVLGFBQWYsRUFBNkIsS0FBSSxjQUFqQztBQURGLGFBRkY7QUFLRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSx1Q0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFLRCxTQUFTQyxFQUFULEdBQWNELFNBQVNFLEtBRDlCO0FBRUUscUNBQWlCRixTQUFTQztBQUY1QjtBQUlFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLFNBQWYsRUFBeUIsS0FBS0QsU0FBU0MsRUFBdkM7QUFBNENELDJCQUFTRSxLQUFULENBQWVDLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUIsRUFBekI7QUFBNUM7QUFKRjtBQURGO0FBTEY7QUFERjtBQURGO0FBREYsS0FENEI7QUFBQSxHQUFqQixDQUFiO0FBc0JBLFNBQ0U7QUFBQTtBQUFBO0FBQ0dMO0FBREgsR0FERjtBQUtELENBN0JEOztBQStCQUwsYUFBYVcsU0FBYixHQUF5QjtBQUN2QlQsYUFBVyxnQkFBTVUsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDO0FBRFYsQ0FBekI7O2tCQUllZCxZIiwiZmlsZSI6IjAuMjM2YjY1ODQ4N2UxNTI0NWNkM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IERvY3VtZW50TGlzdCA9ICh7IGRlbGV0ZURvY3VtZW50LCBkb2N1bWVudHMgfSkgPT4ge1xuICBjb25zdCBuZXdEb2N1bWVudHMgPSBkb2N1bWVudHMucmV2ZXJzZSgpO1xuICBjb25zdCBMaXN0ID0gbmV3RG9jdW1lbnRzLm1hcChkb2N1bWVudCA9PlxuICAgIDxkaXYgIGtleT17ZG9jdW1lbnQuaWQgKyBkb2N1bWVudC50aXRsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMSBtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaG9yaXpvbnRhbCBjYXJkRG9jXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXN0YWNrZWRcIj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGRlbGV0ZURvY3VtZW50KGRvY3VtZW50LmlkKX0gIGNsYXNzTmFtZT1cImJ1dHRvbiByZW1vdmVcIj54PC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQgY2FyZENvbnRlbnRJbWFnZVwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInRodW1iLWltYWdlXCIgc3JjPVwiaW1nL3RodW0ucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb24gY2FyZC1mb290ZXIgY2FyZERvY0FjdGlvblwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17ZG9jdW1lbnQuaWQgKyBkb2N1bWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICB0bz17YC9kb2N1bWVudC8ke2RvY3VtZW50LmlkfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY1RleHRcIiBrZXk9e2RvY3VtZW50LmlkfT57ZG9jdW1lbnQudGl0bGUuc3Vic3RyKDAsIDIwKX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtMaXN0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRG9jdW1lbnRMaXN0LnByb3BUeXBlcyA9IHtcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRMaXN0IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50TGlzdC5qc3giXSwic291cmNlUm9vdCI6IiJ9