webpackHotUpdate(0,{

/***/ 292:
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

var _reactTinymce = __webpack_require__(349);

var _reactTinymce2 = _interopRequireDefault(_reactTinymce);

var _NavigationBar = __webpack_require__(33);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _DocumentForm = __webpack_require__(287);

var _DocumentForm2 = _interopRequireDefault(_DocumentForm);

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

var ManageDocument = function (_React$Component) {
  _inherits(ManageDocument, _React$Component);

  function ManageDocument(props) {
    _classCallCheck(this, ManageDocument);

    var _this = _possibleConstructorReturn(this, (ManageDocument.__proto__ || Object.getPrototypeOf(ManageDocument)).call(this, props));

    _this.state = {
      email: '',
      docTitle: '',
      docContent: '',
      access: '',
      editor: null
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);
    return _this;
  }

  _createClass(ManageDocument, [{
    key: 'handleEditorChange',
    value: function handleEditorChange(content) {
      this.setState({
        content: content
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      console.log(event.target.value);
      this.setState({
        docTitle: event.target.value.docTitle,
        docContent: event.target.value.docContent,
        access: event.target.value.access
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var config = {
        "selector": "#doc-text-area",
        "plugins": "autolink link image lists print preview textcolor table emoticons codesample",
        "toolbar": "undo redo | bold italic | fontsizeselect fontselect | alignleft aligncenter alignright | forecolor backcolor | table | numlist bullist | emoticons | codesample",
        "table_toolbar": "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
        "fontsize_formats": "8pt 10pt 12pt 14pt 18pt 24pt 36pt"
      };
      tinymce.init({
        selector: "#doc-text-area", // change this value according to your HTML
        plugins: 'autolink link image lists print preview textcolor table emoticons',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
        setup: function setup(editor) {
          _this2.setState({ editor: editor });
          editor.on('keyup change', function () {
            var content = editor.getContent();
            _this2.handleEditorChange(content);
          });
        }
      });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave(event) {
      event.preventDefault();
      var doc = {
        title: event.target.docTitle.value,
        content: this.state.content,
        access: event.target.access.value
      };
      console.log(doc);
      // this.props.actions.saveDocuments(doc)
      //   .then(res => {
      //     console.log('heeerdsdfghj');
      //     console.log(res);
      //   })
      //   .catch(error => {
      //     console.log('error');
      //     console.log(error);
      //   })
    }
  }, {
    key: 'render',
    value: function render() {

      var documentData = {
        docTitle: this.state.docTitle,
        docContent: this.state.docContent,
        access: this.state.access
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_NavigationBar2.default, { history: this.props.history })
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'h3',
              null,
              'Add Document'
            ),
            _react2.default.createElement('div', { id: 'doc-text-area', className: 'row' }),
            _react2.default.createElement(_DocumentForm2.default, {
              selectedOption: this.state.access,
              documentData: documentData,
              onSave: this.onClickSave,
              onChange: this.handleChange
            })
          )
        )
      );
    }
  }]);

  return ManageDocument;
}(_react2.default.Component);

ManageDocument.propTypes = {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManageDocument);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ManageDocument.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImVkaXRvciIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY29uZmlnIiwidGlueW1jZSIsImluaXQiLCJzZWxlY3RvciIsInBsdWdpbnMiLCJ0b29sYmFyIiwic2V0dXAiLCJvbiIsImdldENvbnRlbnQiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImRvYyIsInRpdGxlIiwiZG9jdW1lbnREYXRhIiwiaGlzdG9yeSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFjdGlvbnMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRzIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFhQSxlOzs7Ozs7Ozs7Ozs7SUFFUEMsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGtCQUFZLEVBSEQ7QUFJWEMsY0FBUSxFQUpHO0FBS1hDLGNBQVE7QUFMRyxLQUFiO0FBT0EsVUFBS0MsWUFB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Q0xILGVBQVdyQyxNQUFNcUM7QUFEWixHQUFQO0FBR0Q7O0FBRUQsU0FBU0ksa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFNBQU87QUFDTFQsYUFBUywrQkFBbUJwQyxlQUFuQixFQUFvQzZDLFFBQXBDO0FBREosR0FBUDtBQUdEOztrQkFFYyx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDM0MsY0FBN0MsQyIsImZpbGUiOiIwLjliNmFiMzJkODYxYWY0YmUxNTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBUaW55TUNFIGZyb20gJ3JlYWN0LXRpbnltY2UnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBEb2N1bWVudEZvcm0gZnJvbSAnLi9Eb2N1bWVudEZvcm0nO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBNYW5hZ2VEb2N1bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBkb2NUaXRsZTogJycsXG4gICAgICBkb2NDb250ZW50OiAnJyxcbiAgICAgIGFjY2VzczogJycsXG4gICAgICBlZGl0b3I6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tTYXZlID0gdGhpcy5vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlRWRpdG9yQ2hhbmdlKGNvbnRlbnQpIHtcbiAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICBjb250ZW50OiBjb250ZW50XG4gICB9KVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY1RpdGxlOiBldmVudC50YXJnZXQudmFsdWUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiBldmVudC50YXJnZXQudmFsdWUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LnZhbHVlLmFjY2Vzc1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIFwic2VsZWN0b3JcIjogXCIjZG9jLXRleHQtYXJlYVwiLFxuICAgICAgXCJwbHVnaW5zXCI6IFwiYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBwcmludCBwcmV2aWV3IHRleHRjb2xvciB0YWJsZSBlbW90aWNvbnMgY29kZXNhbXBsZVwiLFxuICAgICAgXCJ0b29sYmFyXCI6IFwidW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgfCBmb250c2l6ZXNlbGVjdCBmb250c2VsZWN0IHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBmb3JlY29sb3IgYmFja2NvbG9yIHwgdGFibGUgfCBudW1saXN0IGJ1bGxpc3QgfCBlbW90aWNvbnMgfCBjb2Rlc2FtcGxlXCIsXG4gICAgICBcInRhYmxlX3Rvb2xiYXJcIjogXCJ0YWJsZXByb3BzIHRhYmxlZGVsZXRlIHwgdGFibGVpbnNlcnRyb3diZWZvcmUgdGFibGVpbnNlcnRyb3dhZnRlciB0YWJsZWRlbGV0ZXJvdyB8IHRhYmxlaW5zZXJ0Y29sYmVmb3JlIHRhYmxlaW5zZXJ0Y29sYWZ0ZXIgdGFibGVkZWxldGVjb2xcIixcbiAgICAgIFwiZm9udHNpemVfZm9ybWF0c1wiOiBcIjhwdCAxMHB0IDEycHQgMTRwdCAxOHB0IDI0cHQgMzZwdFwiXG4gICAgfVxuICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICBzZWxlY3RvcjogXCIjZG9jLXRleHQtYXJlYVwiLCAgLy8gY2hhbmdlIHRoaXMgdmFsdWUgYWNjb3JkaW5nIHRvIHlvdXIgSFRNTFxuICAgICAgcGx1Z2luczogJ2F1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zJyxcbiAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgY29kZScsXG4gICAgICBzZXR1cDogKGVkaXRvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWRpdG9yIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2tleXVwIGNoYW5nZScsICgpID0+IHsgICAgIFxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlKGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cblxuICBvbkNsaWNrU2F2ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgdGl0bGU6IGV2ZW50LnRhcmdldC5kb2NUaXRsZS52YWx1ZSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMuc3RhdGUuY29udGVudCxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LmFjY2Vzcy52YWx1ZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkb2MpXG4gICAgLy8gdGhpcy5wcm9wcy5hY3Rpb25zLnNhdmVEb2N1bWVudHMoZG9jKVxuICAgIC8vICAgLnRoZW4ocmVzID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2hlZWVyZHNkZmdoaicpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgZG9jdW1lbnREYXRhID0ge1xuICAgICAgZG9jVGl0bGU6IHRoaXMuc3RhdGUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiB0aGlzLnN0YXRlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IHRoaXMuc3RhdGUuYWNjZXNzLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDM+QWRkIERvY3VtZW50PC9oMz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkb2MtdGV4dC1hcmVhXCIgY2xhc3NOYW1lPVwicm93XCI+PC9kaXY+XG4gICAgICAgICAgICA8RG9jdW1lbnRGb3JtXG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLmFjY2Vzc31cbiAgICAgICAgICAgICAgZG9jdW1lbnREYXRhPXtkb2N1bWVudERhdGF9XG4gICAgICAgICAgICAgIG9uU2F2ZT17dGhpcy5vbkNsaWNrU2F2ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbk1hbmFnZURvY3VtZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50c1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYW5hZ2VEb2N1bWVudCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTWFuYWdlRG9jdW1lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==