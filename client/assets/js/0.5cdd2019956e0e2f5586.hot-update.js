webpackHotUpdate(0,{

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(58);

var _redux = __webpack_require__(47);

var _NavigationBar = __webpack_require__(33);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _DocumentList = __webpack_require__(288);

var _DocumentList2 = _interopRequireDefault(_DocumentList);

var _SingleInput = __webpack_require__(86);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(87);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(85);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(57);

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
      this.props.actions.AllDocuments();
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
            { className: 'fixed-action-btn horizontal' },
            _react2.default.createElement(
              'a',
              { 'class': 'btn-floating btn-large red' },
              _react2.default.createElement(
                'i',
                { 'class': 'large material-icons' },
                'mode_edit'
              )
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { 'class': 'btn-floating red' },
                  _react2.default.createElement(
                    'i',
                    { 'class': 'material-icons' },
                    'insert_chart'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { 'class': 'btn-floating yellow darken-1' },
                  _react2.default.createElement(
                    'i',
                    { 'class': 'material-icons' },
                    'format_quote'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { 'class': 'btn-floating green' },
                  _react2.default.createElement(
                    'i',
                    { 'class': 'material-icons' },
                    'publish'
                  )
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { 'class': 'btn-floating blue' },
                  _react2.default.createElement(
                    'i',
                    { 'class': 'material-icons' },
                    'attach_file'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'card bodycard' },
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(_DocumentList2.default, { documents: documents })
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
  console.log(state);
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudFBhZ2UuanN4PzhkMWYiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwiRG9jdW1lbnRQYWdlIiwicHJvcHMiLCJhY3Rpb25zIiwiQWxsRG9jdW1lbnRzIiwiZG9jdW1lbnRzIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJvd25Qcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVIQUNYQSxLQURXO0FBRWxCOzs7O3lDQUVvQjtBQUNuQixXQUFLQSxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLFlBQW5CO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ0NDLFNBREQsR0FDZSxLQUFLSCxLQURwQixDQUNDRyxTQUREOztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSw2QkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxTQUFNLDRCQUFUO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLFNBQU0sc0JBQVQ7QUFBQTtBQUFBO0FBREYsYUFERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBRyxTQUFNLGtCQUFUO0FBQTRCO0FBQUE7QUFBQSxzQkFBRyxTQUFNLGdCQUFUO0FBQUE7QUFBQTtBQUE1QjtBQUFKLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQUcsU0FBTSw4QkFBVDtBQUF3QztBQUFBO0FBQUEsc0JBQUcsU0FBTSxnQkFBVDtBQUFBO0FBQUE7QUFBeEM7QUFBSixlQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFHLFNBQU0sb0JBQVQ7QUFBOEI7QUFBQTtBQUFBLHNCQUFHLFNBQU0sZ0JBQVQ7QUFBQTtBQUFBO0FBQTlCO0FBQUosZUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBRyxTQUFNLG1CQUFUO0FBQTZCO0FBQUE7QUFBQSxzQkFBRyxTQUFNLGdCQUFUO0FBQUE7QUFBQTtBQUE3QjtBQUFKO0FBSkY7QUFKRixXQURGO0FBWUU7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEtBQWY7QUFDRSx3RUFBYyxXQUFXQSxTQUF6QjtBQURGO0FBREY7QUFERjtBQVpGO0FBREYsT0FERjtBQXdCRDs7OztFQW5Dd0IsZ0JBQU1DLFM7O0FBcUNqQ0wsYUFBYU0sU0FBYixHQUF5QjtBQUN2QkosV0FBUyxnQkFBTUssU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFQ7QUFFdkJMLGFBQVcsZ0JBQU1HLFNBQU4sQ0FBZ0JHLEtBQWhCLENBQXNCRDtBQUZWLENBQXpCOztBQUtBLFNBQVNFLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUN4Q0MsVUFBUUMsR0FBUixDQUFZSCxLQUFaO0FBQ0EsU0FBTztBQUNMUixlQUFXUSxNQUFNUjtBQURaLEdBQVA7QUFHRDs7QUFFRCxTQUFTWSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMZixhQUFTLCtCQUFtQkgsZUFBbkIsRUFBb0NrQixRQUFwQztBQURKLEdBQVA7QUFHRDs7a0JBRWMseUJBQVFOLGVBQVIsRUFBeUJLLGtCQUF6QixFQUE2Q2hCLFlBQTdDLEMiLCJmaWxlIjoiMC41Y2RkMjAxOTk1NmUwZTJmNTU4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IERvY3VtZW50TGlzdCBmcm9tICcuL0RvY3VtZW50TGlzdCc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCAqICBhcyBkb2N1bWVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9kb2N1bWVudEFjdGlvbic7XG5cbmNsYXNzIERvY3VtZW50UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5BbGxEb2N1bWVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRvY3VtZW50cyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtYWN0aW9uLWJ0biBob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0bi1mbG9hdGluZyBidG4tbGFyZ2UgcmVkXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibGFyZ2UgbWF0ZXJpYWwtaWNvbnNcIj5tb2RlX2VkaXQ8L2k+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImJ0bi1mbG9hdGluZyByZWRcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+aW5zZXJ0X2NoYXJ0PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJidG4tZmxvYXRpbmcgeWVsbG93IGRhcmtlbi0xXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZvcm1hdF9xdW90ZTwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiYnRuLWZsb2F0aW5nIGdyZWVuXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnB1Ymxpc2g8L2k+PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImJ0bi1mbG9hdGluZyBibHVlXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmF0dGFjaF9maWxlPC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9keWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPERvY3VtZW50TGlzdCBkb2N1bWVudHM9e2RvY3VtZW50c30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5Eb2N1bWVudFBhZ2UucHJvcFR5cGVzID0ge1xuICBhY3Rpb25zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50c1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEb2N1bWVudFBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50UGFnZS5qc3giXSwic291cmNlUm9vdCI6IiJ9