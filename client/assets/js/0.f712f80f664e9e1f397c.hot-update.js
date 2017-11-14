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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZGVsZXRlRG9jdW1lbnQiLCJkb2N1bWVudHMiLCJuZXdEb2N1bWVudHMiLCJyZXZlcnNlIiwiTGlzdCIsIm1hcCIsImRvY3VtZW50IiwidGl0bGUiLCJzIiwiaWQiLCJzdWJzdHJpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLE9BQW1DO0FBQUEsTUFBaENDLGNBQWdDLFFBQWhDQSxjQUFnQztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQ3RELE1BQU1DLGVBQWVELFVBQVVFLE9BQVYsRUFBckI7QUFDQSxNQUFNQyxPQUFPRixhQUFhRyxHQUFiLENBQWlCLG9CQUFZOztBQUV4QyxRQUFJQyxTQUFTQyxLQUFiLEVBQW9CO0FBQ2xCLFVBQU1DLElBQUksQ0FBVjtBQUNEO0FBQ0Q7QUFBQTtBQUFBLFFBQU0sS0FBS0YsU0FBU0csRUFBVCxHQUFjSCxTQUFTQyxLQUFsQztBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsU0FBUztBQUFBLHlCQUFNUCxlQUFlTSxTQUFTRyxFQUF4QixDQUFOO0FBQUEsaUJBQVosRUFBZ0QsV0FBVSxlQUExRDtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLCtCQUFmO0FBQ0UscURBQUssV0FBVSxhQUFmLEVBQTZCLEtBQUksY0FBakM7QUFERixhQUZGO0FBS0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsdUNBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRSx1QkFBS0gsU0FBU0csRUFBVCxHQUFjSCxTQUFTQyxLQUQ5QjtBQUVFLHFDQUFpQkQsU0FBU0c7QUFGNUI7QUFJRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxTQUFmLEVBQXlCLEtBQUtILFNBQVNHLEVBQXZDO0FBQTRDSCwyQkFBU0MsS0FBVCxDQUFlRyxTQUFmLENBQXlCLENBQXpCLEVBQTRCLEVBQTVCO0FBQTVDO0FBSkY7QUFERjtBQUxGO0FBREY7QUFERjtBQURGO0FBb0JELEdBekJZLENBQWI7QUEwQkEsU0FDRTtBQUFBO0FBQUE7QUFDR047QUFESCxHQURGO0FBS0QsQ0FqQ0Q7O0FBbUNBTCxhQUFhWSxTQUFiLEdBQXlCO0FBQ3ZCVixhQUFXLGdCQUFNVyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEVixDQUF6Qjs7a0JBSWVmLFkiLCJmaWxlIjoiMC5mNzEyZjgwZjY2NGU5ZTFmMzk3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgRG9jdW1lbnRMaXN0ID0gKHsgZGVsZXRlRG9jdW1lbnQsIGRvY3VtZW50cyB9KSA9PiB7XG4gIGNvbnN0IG5ld0RvY3VtZW50cyA9IGRvY3VtZW50cy5yZXZlcnNlKCk7XG4gIGNvbnN0IExpc3QgPSBuZXdEb2N1bWVudHMubWFwKGRvY3VtZW50ID0+IHtcbiAgICBcbiAgICBpZiAoZG9jdW1lbnQudGl0bGUpIHtcbiAgICAgIGNvbnN0IHMgPSAxO1xuICAgIH1cbiAgICA8ZGl2ICBrZXk9e2RvY3VtZW50LmlkICsgZG9jdW1lbnQudGl0bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEgbTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvcml6b250YWwgY2FyZERvY1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zdGFja2VkXCI+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBkZWxldGVEb2N1bWVudChkb2N1bWVudC5pZCl9ICBjbGFzc05hbWU9XCJidXR0b24gcmVtb3ZlXCI+eDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50IGNhcmRDb250ZW50SW1hZ2VcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ0aHVtYi1pbWFnZVwiIHNyYz1cImltZy90aHVtLnBuZ1wiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uIGNhcmQtZm9vdGVyIGNhcmREb2NBY3Rpb25cIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2RvY3VtZW50LmlkICsgZG9jdW1lbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgdG89e2AvZG9jdW1lbnQvJHtkb2N1bWVudC5pZH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NUZXh0XCIga2V5PXtkb2N1bWVudC5pZH0+e2RvY3VtZW50LnRpdGxlLnN1YnN0cmluZygwLCAxMCl9PC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge0xpc3R9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Eb2N1bWVudExpc3QucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudExpc3QgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRG9jdW1lbnRMaXN0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=