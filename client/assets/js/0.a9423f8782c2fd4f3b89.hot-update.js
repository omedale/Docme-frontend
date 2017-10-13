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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudFBhZ2UuanN4PzhkMWYiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwiRG9jdW1lbnRQYWdlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9ucyIsIkFsbERvY3VtZW50cyIsImRvY3VtZW50cyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVIQUNYQSxLQURXO0FBRWxCOzs7O3lDQUVvQjtBQUNuQkMsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxXQUFLRixLQUFMLENBQVdHLE9BQVgsQ0FBbUJDLFlBQW5CO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ0FDLFNBREEsR0FDYSxLQUFLTCxLQURsQixDQUNBSyxTQURBOztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURGO0FBREY7QUFERixPQURGO0FBV0Q7Ozs7RUF2QndCLGdCQUFNQyxTOztBQXlCakNQLGFBQWFRLFNBQWIsR0FBeUI7QUFDdkJKLFdBQVMsZ0JBQU1LLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURUO0FBRXZCTCxhQUFXLGdCQUFNRyxTQUFOLENBQWdCRyxLQUFoQixDQUFzQkQ7QUFGVixDQUF6Qjs7QUFLQSxTQUFTRSxlQUFULENBQXlCQyxLQUF6QixFQUFnQ0MsUUFBaEMsRUFBeUM7QUFDdkMsU0FBTztBQUNMVCxlQUFXUSxNQUFNUjtBQURaLEdBQVA7QUFHRDs7QUFFRCxTQUFTVSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMYixhQUFTLCtCQUFtQkwsZUFBbkIsRUFBb0NrQixRQUFwQztBQURKLEdBQVA7QUFHRDs7a0JBRWMseUJBQVFKLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q2hCLFlBQTdDLEMiLCJmaWxlIjoiMC5hOTQyM2Y4NzgyYzJmZDRmM2I4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgRG9jdW1lbnRMaXN0IGZyb20gJy4vRG9jdW1lbnRMaXN0JztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJztcblxuY2xhc3MgRG9jdW1lbnRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2tra2snKVxuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5BbGxEb2N1bWVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZG9jdW1lbnRzfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9keWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwPkkgYW0gYSB2ZXJ5IHNpbXBsZSBjYXJkLiBJIGFtIGdvb2QgYXQgY29udGFpbmluZyBzbWFsbCBiaXRzIG9mIGluZm9ybWF0aW9uLiBJIGFtIGNvbnZlbmllbnQgYmVjYXVzZSBJIHJlcXVpcmUgbGl0dGxlIG1hcmt1cCB0byB1c2UgZWZmZWN0aXZlbHkuPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuRG9jdW1lbnRQYWdlLnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpe1xuICByZXR1cm4ge1xuICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzIFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEb2N1bWVudFBhZ2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50UGFnZS5qc3giXSwic291cmNlUm9vdCI6IiJ9