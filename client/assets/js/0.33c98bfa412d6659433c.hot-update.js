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

var _reactRedux = __webpack_require__(47);

var _redux = __webpack_require__(39);

var _reactRouterDom = __webpack_require__(22);

var _NavigationBar = __webpack_require__(33);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _DocumentList = __webpack_require__(136);

var _DocumentList2 = _interopRequireDefault(_DocumentList);

var _SingleInput = __webpack_require__(60);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(61);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(59);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(46);

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

    var _this = _possibleConstructorReturn(this, (DocumentPage.__proto__ || Object.getPrototypeOf(DocumentPage)).call(this, props));

    _this.deleteDocument = _this.deleteDocument.bind(_this);
    return _this;
  }

  _createClass(DocumentPage, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.actions.AllDocuments();
    }
  }, {
    key: 'deleteDocument',
    value: function deleteDocument(param) {
      console.log('do something: ', param);
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
          { className: 'docContainer' },
          _react2.default.createElement(
            'div',
            { className: 'fixed-action-btn horizontal' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              {
                to: '/document',
                className: 'btn-floating btn-large fabColor'
              },
              _react2.default.createElement(
                'i',
                { className: 'large material-icons' },
                'add'
              ),
              'Create Document'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: ' bodycard' },
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(_DocumentList2.default, { myFunction: this.myFunction, documents: documents })
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudFBhZ2UuanN4PzhkMWYiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwiRG9jdW1lbnRQYWdlIiwicHJvcHMiLCJkZWxldGVEb2N1bWVudCIsImJpbmQiLCJhY3Rpb25zIiwiQWxsRG9jdW1lbnRzIiwicGFyYW0iLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnRzIiwibXlGdW5jdGlvbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNYQSxLQURXOztBQUVqQixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBRmlCO0FBR2xCOzs7O3lDQUVvQjtBQUNuQixXQUFLRixLQUFMLENBQVdHLE9BQVgsQ0FBbUJDLFlBQW5CO0FBQ0Q7OzttQ0FFY0MsSyxFQUFNO0FBQ2pCQyxjQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEJGLEtBQTlCO0FBQ0g7Ozs2QkFFUTtBQUFBLFVBQ0NHLFNBREQsR0FDZSxLQUFLUixLQURwQixDQUNDUSxTQUREOztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSw2QkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNBLG9CQUFHLFdBREg7QUFFQSwyQkFBVTtBQUZWO0FBSUE7QUFBQTtBQUFBLGtCQUFHLFdBQVUsc0JBQWI7QUFBQTtBQUFBLGVBSkE7QUFBQTtBQUFBO0FBREYsV0FERjtBQVVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxLQUFmO0FBQ0Usd0VBQWMsWUFBWSxLQUFLQyxVQUEvQixFQUEyQyxXQUFXRCxTQUF0RDtBQURGO0FBREY7QUFERjtBQVZGO0FBREYsT0FERjtBQXNCRDs7OztFQXRDd0IsZ0JBQU1FLFM7O0FBd0NqQ1gsYUFBYVksU0FBYixHQUF5QjtBQUN2QlIsV0FBUyxnQkFBTVMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFQ7QUFFdkJOLGFBQVcsZ0JBQU1JLFNBQU4sQ0FBZ0JHLEtBQWhCLENBQXNCRDtBQUZWLENBQXpCOztBQUtBLFNBQVNFLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUN4QyxTQUFPO0FBQ0xWLGVBQVdTLE1BQU1UO0FBRFosR0FBUDtBQUdEOztBQUVELFNBQVNXLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxTQUFPO0FBQ0xqQixhQUFTLCtCQUFtQkwsZUFBbkIsRUFBb0NzQixRQUFwQztBQURKLEdBQVA7QUFHRDs7a0JBRWMseUJBQVFKLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q3BCLFlBQTdDLEMiLCJmaWxlIjoiMC4zM2M5OGJmYTQxMmQ2NjU5NDMzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBEb2N1bWVudExpc3QgZnJvbSAnLi9Eb2N1bWVudExpc3QnO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBEb2N1bWVudFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmRlbGV0ZURvY3VtZW50ID0gdGhpcy5kZWxldGVEb2N1bWVudC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5BbGxEb2N1bWVudHMoKTtcbiAgfVxuXG4gIGRlbGV0ZURvY3VtZW50KHBhcmFtKXtcbiAgICAgIGNvbnNvbGUubG9nKCdkbyBzb21ldGhpbmc6ICcsIHBhcmFtKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRvY3VtZW50cyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQtYWN0aW9uLWJ0biBob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89XCIvZG9jdW1lbnRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWZsb2F0aW5nIGJ0bi1sYXJnZSBmYWJDb2xvclwiICAgICAgICBcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImxhcmdlIG1hdGVyaWFsLWljb25zXCI+YWRkPC9pPlxuICAgICAgICAgICAgQ3JlYXRlIERvY3VtZW50XG4gICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBib2R5Y2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8RG9jdW1lbnRMaXN0IG15RnVuY3Rpb249e3RoaXMubXlGdW5jdGlvbn0gZG9jdW1lbnRzPXtkb2N1bWVudHN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuRG9jdW1lbnRQYWdlLnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50c1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEb2N1bWVudFBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50UGFnZS5qc3giXSwic291cmNlUm9vdCI6IiJ9