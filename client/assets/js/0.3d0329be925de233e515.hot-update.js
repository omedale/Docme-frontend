webpackHotUpdate(0,{

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(52);

var _redux = __webpack_require__(40);

var _NavigationBar = __webpack_require__(38);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _DocumentList = __webpack_require__(348);

var _DocumentList2 = _interopRequireDefault(_DocumentList);

var _SingleInput = __webpack_require__(118);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(119);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(117);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(116);

var documentActions = _interopRequireWildcard(_documentAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocumentPage = function (_React$Component) {
  _inherits(DocumentPage, _React$Component);

  function DocumentPage(props) {
    _classCallCheck(this, DocumentPage);

    return _possibleConstructorReturn(this, (DocumentPage.__proto__ || Object.getPrototypeOf(DocumentPage)).call(this, props));
  }

  _createClass(DocumentPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('kkkk');
      this.props.actions.AllDocuments();
    }
  }, {
    key: 'documentRow',
    value: function documentRow(document, index) {
      return _react2.default.createElement(
        'div',
        { key: index },
        document.title
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var documents = this.props.documents;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'card bodycard' },
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              _react2.default.createElement(
                'p',
                null,
                'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-tabs' },
              _react2.default.createElement(
                'ul',
                { className: 'tabs tabs-fixed-width' },
                _react2.default.createElement(
                  'li',
                  { className: 'tab' },
                  _react2.default.createElement(
                    'a',
                    { className: 'active', href: '#test4' },
                    'Test 1'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'tab' },
                  _react2.default.createElement(
                    'a',
                    { href: '#test5' },
                    'Test 2'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'tab' },
                  _react2.default.createElement(
                    'a',
                    { href: '#test6' },
                    'Test 3'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-content grey lighten-4' },
              _react2.default.createElement('div', { id: 'test4' }),
              _react2.default.createElement(
                'div',
                { id: 'test5' },
                'Test 2'
              ),
              _react2.default.createElement(
                'div',
                { id: 'test6' },
                'Test 3'
              )
            )
          )
        )
      );
    }
  }]);

  return DocumentPage;
}(_react2.default.Component);

DocumentPage.propTypes = {
  actions: _react2.default.PropTypes.object.isRequired,
  documents: _react2.default.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    documents: state.documents
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(documentActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DocumentPage);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudFBhZ2UuanN4PzhkMWYiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwiRG9jdW1lbnRQYWdlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9ucyIsIkFsbERvY3VtZW50cyIsImRvY3VtZW50IiwiaW5kZXgiLCJ0aXRsZSIsImRvY3VtZW50cyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVIQUNYQSxLQURXO0FBRWxCOzs7O3lDQUVvQjtBQUNuQkMsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxXQUFLRixLQUFMLENBQVdHLE9BQVgsQ0FBbUJDLFlBQW5CO0FBQ0Q7OztnQ0FFV0MsUSxFQUFVQyxLLEVBQU87QUFDM0IsYUFBTztBQUFBO0FBQUEsVUFBSyxLQUFLQSxLQUFWO0FBQWtCRCxpQkFBU0U7QUFBM0IsT0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxVQUNBQyxTQURBLEdBQ2EsS0FBS1IsS0FEbEIsQ0FDQVEsU0FEQTs7QUFFUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFERjtBQUlFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUksV0FBVSx1QkFBZDtBQUNFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLEtBQWQ7QUFBb0I7QUFBQTtBQUFBLHNCQUFHLFdBQVUsUUFBYixFQUFzQixNQUFLLFFBQTNCO0FBQUE7QUFBQTtBQUFwQixpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLEtBQWQ7QUFBb0I7QUFBQTtBQUFBLHNCQUFHLE1BQUssUUFBUjtBQUFBO0FBQUE7QUFBcEIsaUJBRkY7QUFHRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxLQUFkO0FBQW9CO0FBQUE7QUFBQSxzQkFBRyxNQUFLLFFBQVI7QUFBQTtBQUFBO0FBQXBCO0FBSEY7QUFERixhQUpGO0FBV0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsNkJBQWY7QUFDRSxxREFBSyxJQUFHLE9BQVIsR0FERjtBQUlFO0FBQUE7QUFBQSxrQkFBSyxJQUFHLE9BQVI7QUFBQTtBQUFBLGVBSkY7QUFLRTtBQUFBO0FBQUEsa0JBQUssSUFBRyxPQUFSO0FBQUE7QUFBQTtBQUxGO0FBWEY7QUFERjtBQURGLE9BREY7QUF5QkQ7Ozs7RUF6Q3dCLGdCQUFNQyxTOztBQTJDakNWLGFBQWFXLFNBQWIsR0FBeUI7QUFDdkJQLFdBQVMsZ0JBQU1RLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURUO0FBRXZCTCxhQUFXLGdCQUFNRyxTQUFOLENBQWdCRyxLQUFoQixDQUFzQkQ7QUFGVixDQUF6Qjs7QUFLQSxTQUFTRSxlQUFULENBQXlCQyxLQUF6QixFQUFnQ0MsUUFBaEMsRUFBeUM7QUFDdkMsU0FBTztBQUNMVCxlQUFXUSxNQUFNUjtBQURaLEdBQVA7QUFHRDs7QUFFRCxTQUFTVSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMaEIsYUFBUywrQkFBbUJMLGVBQW5CLEVBQW9DcUIsUUFBcEM7QUFESixHQUFQO0FBR0Q7O2tCQUVjLHlCQUFRSixlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkNuQixZQUE3QyxDIiwiZmlsZSI6IjAuM2QwMzI5YmU5MjVkZTIzM2U1MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IERvY3VtZW50TGlzdCBmcm9tICcuL0RvY3VtZW50TGlzdCc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCAqICBhcyBkb2N1bWVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9kb2N1bWVudEFjdGlvbic7XG5cbmNsYXNzIERvY3VtZW50UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKCdra2trJylcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuQWxsRG9jdW1lbnRzKCk7XG4gIH1cblxuICBkb2N1bWVudFJvdyhkb2N1bWVudCwgaW5kZXgpIHtcbiAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fT57ZG9jdW1lbnQudGl0bGV9PC9kaXY+XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2RvY3VtZW50c30gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvZHljYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD5JIGFtIGEgdmVyeSBzaW1wbGUgY2FyZC4gSSBhbSBnb29kIGF0IGNvbnRhaW5pbmcgc21hbGwgYml0cyBvZiBpbmZvcm1hdGlvbi4gSSBhbSBjb252ZW5pZW50IGJlY2F1c2UgSSByZXF1aXJlIGxpdHRsZSBtYXJrdXAgdG8gdXNlIGVmZmVjdGl2ZWx5LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRhYnNcIj4gXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJzIHRhYnMtZml4ZWQtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgY2xhc3NOYW1lPVwiYWN0aXZlXCIgaHJlZj1cIiN0ZXN0NFwiPlRlc3QgMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBocmVmPVwiI3Rlc3Q1XCI+VGVzdCAyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIGhyZWY9XCIjdGVzdDZcIj5UZXN0IDM8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQgZ3JleSBsaWdodGVuLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRlc3Q0XCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRlc3Q1XCI+VGVzdCAyPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXN0NlwiPlRlc3QgMzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuRG9jdW1lbnRQYWdlLnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpe1xuICByZXR1cm4ge1xuICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzIFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEb2N1bWVudFBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50UGFnZS5qc3giXSwic291cmNlUm9vdCI6IiJ9