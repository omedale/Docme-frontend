webpackHotUpdate(0,{

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentList = function DocumentList(_ref) {
  var documents = _ref.documents;

  var List = documents.map(function (document) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col s2 m3' },
        _react2.default.createElement(
          'div',
          { className: 'card horizontal' },
          _react2.default.createElement(
            'div',
            { className: 'card-stacked' },
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              _react2.default.createElement(
                'p',
                null,
                'I am a very simple card. I am good at containing small bits of information.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-action' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                'This is a link'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudExpc3QuanN4P2UxYjIiXSwibmFtZXMiOlsiRG9jdW1lbnRMaXN0IiwiZG9jdW1lbnRzIiwiTGlzdCIsIm1hcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUN0QyxNQUFNQyxPQUFPRCxVQUFVRSxHQUFWLENBQWM7QUFBQSxXQUN6QjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGlCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQURGO0FBSUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQURGO0FBREY7QUFERixLQUR5QjtBQUFBLEdBQWQsQ0FBYjtBQWdCRixTQUNFO0FBQUE7QUFBQTtBQUNHRDtBQURILEdBREY7QUFLQyxDQXRCRDs7QUF3QkFGLGFBQWFJLFNBQWIsR0FBeUI7QUFDdkJILGFBQVcsZ0JBQU1JLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQztBQURWLENBQXpCOztrQkFJZVAsWSIsImZpbGUiOiIwLjY2YWVjMmQ5ODg0MmIwYjYxZjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBEb2N1bWVudExpc3QgPSAoeyBkb2N1bWVudHMgfSkgPT4ge1xuICBjb25zdCBMaXN0ID0gZG9jdW1lbnRzLm1hcChkb2N1bWVudCA9PlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMiBtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaG9yaXpvbnRhbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zdGFja2VkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD5JIGFtIGEgdmVyeSBzaW1wbGUgY2FyZC4gSSBhbSBnb29kIGF0IGNvbnRhaW5pbmcgc21hbGwgYml0cyBvZiBpbmZvcm1hdGlvbi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5UaGlzIGlzIGEgbGluazwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xucmV0dXJuIChcbiAgPGRpdj5cbiAgICB7TGlzdH1cbiAgPC9kaXY+XG4pO1xufTtcblxuRG9jdW1lbnRMaXN0LnByb3BUeXBlcyA9IHtcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRMaXN0IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50TGlzdC5qc3giXSwic291cmNlUm9vdCI6IiJ9