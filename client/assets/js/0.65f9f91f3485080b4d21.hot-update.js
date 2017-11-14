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
    var documentTitle = '';
    if (document.title) {
      var s = 1;
    }
    _react2.default.createElement(
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
                  document.title.substring(0, 10)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZGVsZXRlRG9jdW1lbnQiLCJkb2N1bWVudHMiLCJuZXdEb2N1bWVudHMiLCJyZXZlcnNlIiwiTGlzdCIsIm1hcCIsImRvY3VtZW50VGl0bGUiLCJkb2N1bWVudCIsInRpdGxlIiwicyIsImlkIiwic3Vic3RyaW5nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUFtQztBQUFBLE1BQWhDQyxjQUFnQyxRQUFoQ0EsY0FBZ0M7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUN0RCxNQUFNQyxlQUFlRCxVQUFVRSxPQUFWLEVBQXJCO0FBQ0EsTUFBTUMsT0FBT0YsYUFBYUcsR0FBYixDQUFpQixvQkFBWTtBQUN4QyxRQUFNQyxnQkFBZ0IsRUFBdEI7QUFDQSxRQUFJQyxTQUFTQyxLQUFiLEVBQW9CO0FBQ2xCLFVBQU1DLElBQUksQ0FBVjtBQUNEO0FBQ0Q7QUFBQTtBQUFBLFFBQU0sS0FBS0YsU0FBU0csRUFBVCxHQUFjSCxTQUFTQyxLQUFsQztBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsU0FBUztBQUFBLHlCQUFNUixlQUFlTyxTQUFTRyxFQUF4QixDQUFOO0FBQUEsaUJBQVosRUFBZ0QsV0FBVSxlQUExRDtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLCtCQUFmO0FBQ0UscURBQUssV0FBVSxhQUFmLEVBQTZCLEtBQUksY0FBakM7QUFERixhQUZGO0FBS0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsdUNBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRSx1QkFBS0gsU0FBU0csRUFBVCxHQUFjSCxTQUFTQyxLQUQ5QjtBQUVFLHFDQUFpQkQsU0FBU0c7QUFGNUI7QUFJRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxTQUFmLEVBQXlCLEtBQUtILFNBQVNHLEVBQXZDO0FBQTRDSCwyQkFBU0MsS0FBVCxDQUFlRyxTQUFmLENBQXlCLENBQXpCLEVBQTRCLEVBQTVCO0FBQTVDO0FBSkY7QUFERjtBQUxGO0FBREY7QUFERjtBQURGO0FBb0JELEdBekJZLENBQWI7QUEwQkEsU0FDRTtBQUFBO0FBQUE7QUFDR1A7QUFESCxHQURGO0FBS0QsQ0FqQ0Q7O0FBbUNBTCxhQUFhYSxTQUFiLEdBQXlCO0FBQ3ZCWCxhQUFXLGdCQUFNWSxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEVixDQUF6Qjs7a0JBSWVoQixZIiwiZmlsZSI6IjAuNjVmOWY5MWYzNDg1MDgwYjRkMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IERvY3VtZW50TGlzdCA9ICh7IGRlbGV0ZURvY3VtZW50LCBkb2N1bWVudHMgfSkgPT4ge1xuICBjb25zdCBuZXdEb2N1bWVudHMgPSBkb2N1bWVudHMucmV2ZXJzZSgpO1xuICBjb25zdCBMaXN0ID0gbmV3RG9jdW1lbnRzLm1hcChkb2N1bWVudCA9PiB7XG4gICAgY29uc3QgZG9jdW1lbnRUaXRsZSA9ICcnXG4gICAgaWYgKGRvY3VtZW50LnRpdGxlKSB7XG4gICAgICBjb25zdCBzID0gMTtcbiAgICB9XG4gICAgPGRpdiAga2V5PXtkb2N1bWVudC5pZCArIGRvY3VtZW50LnRpdGxlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxIG0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBob3Jpem9udGFsIGNhcmREb2NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtc3RhY2tlZFwiPlxuICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gZGVsZXRlRG9jdW1lbnQoZG9jdW1lbnQuaWQpfSAgY2xhc3NOYW1lPVwiYnV0dG9uIHJlbW92ZVwiPng8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBjYXJkQ29udGVudEltYWdlXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidGh1bWItaW1hZ2VcIiBzcmM9XCJpbWcvdGh1bS5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbiBjYXJkLWZvb3RlciBjYXJkRG9jQWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtkb2N1bWVudC5pZCArIGRvY3VtZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgIHRvPXtgL2RvY3VtZW50LyR7ZG9jdW1lbnQuaWR9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jVGV4dFwiIGtleT17ZG9jdW1lbnQuaWR9Pntkb2N1bWVudC50aXRsZS5zdWJzdHJpbmcoMCwgMTApfTwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtMaXN0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRG9jdW1lbnRMaXN0LnByb3BUeXBlcyA9IHtcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRMaXN0IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50TGlzdC5qc3giXSwic291cmNlUm9vdCI6IiJ9