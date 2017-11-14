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

var _reactRedux = __webpack_require__(47);

var _redux = __webpack_require__(39);

var _reactTinymce = __webpack_require__(351);

var _reactTinymce2 = _interopRequireDefault(_reactTinymce);

var _NavigationBar = __webpack_require__(33);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _DocumentForm = __webpack_require__(288);

var _DocumentForm2 = _interopRequireDefault(_DocumentForm);

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
    _this.handleEditorChange = _this.handleEditorChange.bind(_this);
    return _this;
  }

  _createClass(ManageDocument, [{
    key: 'handleEditorChange',
    value: function handleEditorChange(content) {
      this.setState({
        docContent: content
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        docTitle: event.target.value.docTitle,
        access: event.target.value.access
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.match.params.id) {
        ApiCall.getDocument(this.props.match.params.id).then(function (document) {
          _this2.setState({
            docTitle: document.data.title,
            docContent: document.data.content,
            access: document.data.access
          });
        });
        console.log(this.props.match.params.id);
        this.setState({
          // docTitle: document,
          // docContent:
          // access:
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var config = {
        "selector": "#doc-text-area",
        "plugins": "autolink link image lists print preview textcolor table emoticons codesample",
        "toolbar": "undo redo | bold italic | fontsizeselect fontselect | alignleft aligncenter alignright | forecolor backcolor | table | bullist | emoticons | codesample",
        "table_toolbar": "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
        "fontsize_formats": "8pt 10pt 12pt 14pt 18pt 24pt 36pt"
      };
      tinymce.init({
        selector: "#doc-text-area",
        plugins: 'autolink link image lists \n      print preview textcolor table emoticons codesample',
        toolbar: 'undo redo | bold italic | \n      fontsizeselect fontselect | \n      alignleft aligncenter alignright | forecolor backcolor \n      | table | bullist | emoticons | codesample',
        table_toolbar: 'tableprops tabledelete  \n      | tableinsertrowbefore \n      tableinsertrowafter tabledeleterow | tableinsertcolbefore \n      tableinsertcolafter tabledeletecol',
        fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
        setup: function setup(editor) {
          _this3.setState({ editor: editor });
          editor.on('keyup change', function () {
            var content = editor.getContent({ format: 'raw' });
            _this3.handleEditorChange(content);
          });
        }
      });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave(event) {
      var _this4 = this;

      event.preventDefault();
      var doc = {
        title: event.target.docTitle.value,
        content: this.state.docContent,
        access: event.target.access.value
      };
      console.log(doc);
      this.props.actions.saveDocuments(doc).then(function (res) {
        _this4.props.history.push('/');
      }).catch(function (error) {
        console.log('error');
        console.log(error);
      });
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
          { className: '' },
          _react2.default.createElement(_NavigationBar2.default, { history: this.props.history })
        ),
        _react2.default.createElement(
          'div',
          { className: 'docContainer' },
          _react2.default.createElement(
            'div',
            { className: 'card row' },
            _react2.default.createElement(_DocumentForm2.default, {
              selectedOption: this.state.access,
              documentData: documentData,
              onSave: this.onClickSave,
              handleEditorChange: this.handleEditorChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImVkaXRvciIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImhhbmRsZUVkaXRvckNoYW5nZSIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXRjaCIsInBhcmFtcyIsImlkIiwiQXBpQ2FsbCIsImdldERvY3VtZW50IiwidGhlbiIsImRvY3VtZW50IiwiZGF0YSIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJwbHVnaW5zIiwidG9vbGJhciIsInRhYmxlX3Rvb2xiYXIiLCJmb250c2l6ZV9mb3JtYXRzIiwic2V0dXAiLCJvbiIsImdldENvbnRlbnQiLCJmb3JtYXQiLCJwcmV2ZW50RGVmYXVsdCIsImRvYyIsImFjdGlvbnMiLCJzYXZlRG9jdW1lbnRzIiwiaGlzdG9yeSIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiZG9jdW1lbnREYXRhIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImRvY3VtZW50cyIsImFycmF5IiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBYUEsZTs7Ozs7Ozs7Ozs7O0lBRVBDLGM7OztBQUNKLDBCQUFZQyxLQUFa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QkFFYyx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDMUQsY0FBN0MsQyIsImZpbGUiOiIwLmNiNWUzYWEzMGQ3NzcwMTlkYzEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBUaW55TUNFIGZyb20gJ3JlYWN0LXRpbnltY2UnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBEb2N1bWVudEZvcm0gZnJvbSAnLi9Eb2N1bWVudEZvcm0nO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBNYW5hZ2VEb2N1bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBkb2NUaXRsZTogJycsXG4gICAgICBkb2NDb250ZW50OiAnJyxcbiAgICAgIGFjY2VzczogJycsXG4gICAgICBlZGl0b3I6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tTYXZlID0gdGhpcy5vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlID0gdGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXRvckNoYW5nZShjb250ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NDb250ZW50OiBjb250ZW50XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY1RpdGxlOiBldmVudC50YXJnZXQudmFsdWUuZG9jVGl0bGUsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC52YWx1ZS5hY2Nlc3NcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgIEFwaUNhbGwuZ2V0RG9jdW1lbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpLnRoZW4oZG9jdW1lbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgIGRvY1RpdGxlOiBkb2N1bWVudC5kYXRhLnRpdGxlLFxuICAgICAgICBkb2NDb250ZW50OiBkb2N1bWVudC5kYXRhLmNvbnRlbnQsXG4gICAgICAgIGFjY2VzczogZG9jdW1lbnQuZGF0YS5hY2Nlc3NcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAvLyBkb2NUaXRsZTogZG9jdW1lbnQsXG4gICAgICAgIC8vIGRvY0NvbnRlbnQ6XG4gICAgICAgIC8vIGFjY2VzczpcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgXCJzZWxlY3RvclwiOiBcIiNkb2MtdGV4dC1hcmVhXCIsXG4gICAgICBcInBsdWdpbnNcIjogXCJhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIHByaW50IHByZXZpZXcgdGV4dGNvbG9yIHRhYmxlIGVtb3RpY29ucyBjb2Rlc2FtcGxlXCIsXG4gICAgICBcInRvb2xiYXJcIjogXCJ1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IGZvbnRzaXplc2VsZWN0IGZvbnRzZWxlY3QgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGZvcmVjb2xvciBiYWNrY29sb3IgfCB0YWJsZSB8IGJ1bGxpc3QgfCBlbW90aWNvbnMgfCBjb2Rlc2FtcGxlXCIsXG4gICAgICBcInRhYmxlX3Rvb2xiYXJcIjogXCJ0YWJsZXByb3BzIHRhYmxlZGVsZXRlIHwgdGFibGVpbnNlcnRyb3diZWZvcmUgdGFibGVpbnNlcnRyb3dhZnRlciB0YWJsZWRlbGV0ZXJvdyB8IHRhYmxlaW5zZXJ0Y29sYmVmb3JlIHRhYmxlaW5zZXJ0Y29sYWZ0ZXIgdGFibGVkZWxldGVjb2xcIixcbiAgICAgIFwiZm9udHNpemVfZm9ybWF0c1wiOiBcIjhwdCAxMHB0IDEycHQgMTRwdCAxOHB0IDI0cHQgMzZwdFwiXG4gICAgfVxuICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICBzZWxlY3RvcjogXCIjZG9jLXRleHQtYXJlYVwiLFxuICAgICAgcGx1Z2luczogYGF1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgXG4gICAgICBwcmludCBwcmV2aWV3IHRleHRjb2xvciB0YWJsZSBlbW90aWNvbnMgY29kZXNhbXBsZWAsXG4gICAgICB0b29sYmFyOiBgdW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgfCBcbiAgICAgIGZvbnRzaXplc2VsZWN0IGZvbnRzZWxlY3QgfCBcbiAgICAgIGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgZm9yZWNvbG9yIGJhY2tjb2xvciBcbiAgICAgIHwgdGFibGUgfCBidWxsaXN0IHwgZW1vdGljb25zIHwgY29kZXNhbXBsZWAsXG4gICAgICB0YWJsZV90b29sYmFyOiBgdGFibGVwcm9wcyB0YWJsZWRlbGV0ZSAgXG4gICAgICB8IHRhYmxlaW5zZXJ0cm93YmVmb3JlIFxuICAgICAgdGFibGVpbnNlcnRyb3dhZnRlciB0YWJsZWRlbGV0ZXJvdyB8IHRhYmxlaW5zZXJ0Y29sYmVmb3JlIFxuICAgICAgdGFibGVpbnNlcnRjb2xhZnRlciB0YWJsZWRlbGV0ZWNvbGAsXG4gICAgICBmb250c2l6ZV9mb3JtYXRzOiAnOHB0IDEwcHQgMTJwdCAxNHB0IDE4cHQgMjRwdCAzNnB0JyxcbiAgICAgIHNldHVwOiAoZWRpdG9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0b3IgfSk7XG4gICAgICAgIGVkaXRvci5vbigna2V5dXAgY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlZGl0b3IuZ2V0Q29udGVudCh7Zm9ybWF0IDogJ3Jhdyd9KTtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVkaXRvckNoYW5nZShjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgb25DbGlja1NhdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRvYyA9IHtcbiAgICAgIHRpdGxlOiBldmVudC50YXJnZXQuZG9jVGl0bGUudmFsdWUsXG4gICAgICBjb250ZW50OiB0aGlzLnN0YXRlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC5hY2Nlc3MudmFsdWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZG9jKVxuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5zYXZlRG9jdW1lbnRzKGRvYylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZG9jdW1lbnREYXRhID0ge1xuICAgICAgZG9jVGl0bGU6IHRoaXMuc3RhdGUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiB0aGlzLnN0YXRlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IHRoaXMuc3RhdGUuYWNjZXNzLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCByb3dcIj5cbiAgICAgICAgICAgIDxEb2N1bWVudEZvcm1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3RoaXMuc3RhdGUuYWNjZXNzfVxuICAgICAgICAgICAgICBkb2N1bWVudERhdGE9e2RvY3VtZW50RGF0YX1cbiAgICAgICAgICAgICAgb25TYXZlPXt0aGlzLm9uQ2xpY2tTYXZlfVxuICAgICAgICAgICAgICBoYW5kbGVFZGl0b3JDaGFuZ2UgPSB7dGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuTWFuYWdlRG9jdW1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpb25zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhkb2N1bWVudEFjdGlvbnMsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1hbmFnZURvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3giXSwic291cmNlUm9vdCI6IiJ9