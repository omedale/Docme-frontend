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
      console.log(event.target.value);
      this.setState({
        docTitle: event.target.value.docTitle,
        access: event.target.value.access
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var config = {
        "selector": "#doc-text-area",
        "plugins": "autolink link image lists print preview textcolor table emoticons codesample",
        "toolbar": "undo redo | bold italic | fontsizeselect fontselect | alignleft aligncenter alignright | forecolor backcolor | table | numlist bullist | emoticons | codesample",
        "table_toolbar": "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
        "fontsize_formats": "8pt 10pt 12pt 14pt 18pt 24pt 36pt"
      };
      tinymce.init({
        selector: "#doc-text-area",
        plugins: 'autolink link image lists \n      print preview textcolor table emoticons codesample',
        toolbar: 'undo redo | bold italic | \n      fontsizeselect fontselect | \n      alignleft aligncenter alignright | forecolor backcolor \n      | table | numlist bullist | emoticons | codesample',
        table_toolbar: 'tableprops tabledelete  \n      | tableinsertrowbefore \n      tableinsertrowafter tabledeleterow | tableinsertcolbefore \n      tableinsertcolafter tabledeletecol',
        fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImVkaXRvciIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImhhbmRsZUVkaXRvckNoYW5nZSIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY29uZmlnIiwidGlueW1jZSIsImluaXQiLCJzZWxlY3RvciIsInBsdWdpbnMiLCJ0b29sYmFyIiwidGFibGVfdG9vbGJhciIsImZvbnRzaXplX2Zvcm1hdHMiLCJzZXR1cCIsIm9uIiwiZ2V0Q29udGVudCIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwidGl0bGUiLCJkb2N1bWVudERhdGEiLCJoaXN0b3J5IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYWN0aW9ucyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJkb2N1bWVudHMiLCJhcnJheSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxjOzs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsa0JBQVksRUFIRDtBQUlYQyxjQUFRLEVBSkc7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S0FBekIsRUFBZ0MwQyxRQUFoQyxFQUEwQztBQUN4QyxTQUFPO0FBQ0xILGVBQVd2QyxNQUFNdUM7QUFEWixHQUFQO0FBR0Q7O0FBRUQsU0FBU0ksa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFNBQU87QUFDTFQsYUFBUywrQkFBbUJ0QyxlQUFuQixFQUFvQytDLFFBQXBDO0FBREosR0FBUDtBQUdEOztrQkFFYyx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDN0MsY0FBN0MsQyIsImZpbGUiOiIwLjUzZDhiNGIzNzNmYmIxNTA4NWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBUaW55TUNFIGZyb20gJ3JlYWN0LXRpbnltY2UnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBEb2N1bWVudEZvcm0gZnJvbSAnLi9Eb2N1bWVudEZvcm0nO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBNYW5hZ2VEb2N1bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBkb2NUaXRsZTogJycsXG4gICAgICBkb2NDb250ZW50OiAnJyxcbiAgICAgIGFjY2VzczogJycsXG4gICAgICBlZGl0b3I6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tTYXZlID0gdGhpcy5vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlID0gdGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXRvckNoYW5nZShjb250ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NDb250ZW50OiBjb250ZW50XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9jVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NUaXRsZSxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LnZhbHVlLmFjY2Vzc1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgXCJzZWxlY3RvclwiOiBcIiNkb2MtdGV4dC1hcmVhXCIsXG4gICAgICBcInBsdWdpbnNcIjogXCJhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIHByaW50IHByZXZpZXcgdGV4dGNvbG9yIHRhYmxlIGVtb3RpY29ucyBjb2Rlc2FtcGxlXCIsXG4gICAgICBcInRvb2xiYXJcIjogXCJ1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IGZvbnRzaXplc2VsZWN0IGZvbnRzZWxlY3QgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGZvcmVjb2xvciBiYWNrY29sb3IgfCB0YWJsZSB8IG51bWxpc3QgYnVsbGlzdCB8IGVtb3RpY29ucyB8IGNvZGVzYW1wbGVcIixcbiAgICAgIFwidGFibGVfdG9vbGJhclwiOiBcInRhYmxlcHJvcHMgdGFibGVkZWxldGUgfCB0YWJsZWluc2VydHJvd2JlZm9yZSB0YWJsZWluc2VydHJvd2FmdGVyIHRhYmxlZGVsZXRlcm93IHwgdGFibGVpbnNlcnRjb2xiZWZvcmUgdGFibGVpbnNlcnRjb2xhZnRlciB0YWJsZWRlbGV0ZWNvbFwiLFxuICAgICAgXCJmb250c2l6ZV9mb3JtYXRzXCI6IFwiOHB0IDEwcHQgMTJwdCAxNHB0IDE4cHQgMjRwdCAzNnB0XCJcbiAgICB9XG4gICAgdGlueW1jZS5pbml0KHtcbiAgICAgIHNlbGVjdG9yOiBcIiNkb2MtdGV4dC1hcmVhXCIsXG4gICAgICBwbHVnaW5zOiBgYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBcbiAgICAgIHByaW50IHByZXZpZXcgdGV4dGNvbG9yIHRhYmxlIGVtb3RpY29ucyBjb2Rlc2FtcGxlYCxcbiAgICAgIHRvb2xiYXI6IGB1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IFxuICAgICAgZm9udHNpemVzZWxlY3QgZm9udHNlbGVjdCB8IFxuICAgICAgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBmb3JlY29sb3IgYmFja2NvbG9yIFxuICAgICAgfCB0YWJsZSB8IG51bWxpc3QgYnVsbGlzdCB8IGVtb3RpY29ucyB8IGNvZGVzYW1wbGVgLFxuICAgICAgdGFibGVfdG9vbGJhcjogYHRhYmxlcHJvcHMgdGFibGVkZWxldGUgIFxuICAgICAgfCB0YWJsZWluc2VydHJvd2JlZm9yZSBcbiAgICAgIHRhYmxlaW5zZXJ0cm93YWZ0ZXIgdGFibGVkZWxldGVyb3cgfCB0YWJsZWluc2VydGNvbGJlZm9yZSBcbiAgICAgIHRhYmxlaW5zZXJ0Y29sYWZ0ZXIgdGFibGVkZWxldGVjb2xgLFxuICAgICAgZm9udHNpemVfZm9ybWF0czogJzhwdCAxMHB0IDEycHQgMTRwdCAxOHB0IDI0cHQgMzZwdCcsXG4gICAgICBzZXR1cDogKGVkaXRvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWRpdG9yIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2tleXVwIGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVkaXRvckNoYW5nZShjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgb25DbGlja1NhdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRvYyA9IHtcbiAgICAgIHRpdGxlOiBldmVudC50YXJnZXQuZG9jVGl0bGUudmFsdWUsXG4gICAgICBjb250ZW50OiB0aGlzLnN0YXRlLmNvbnRlbnQsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC5hY2Nlc3MudmFsdWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZG9jKVxuICAgIC8vIHRoaXMucHJvcHMuYWN0aW9ucy5zYXZlRG9jdW1lbnRzKGRvYylcbiAgICAvLyAgIC50aGVuKHJlcyA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdoZWVlcmRzZGZnaGonKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGRvY3VtZW50RGF0YSA9IHtcbiAgICAgIGRvY1RpdGxlOiB0aGlzLnN0YXRlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogdGhpcy5zdGF0ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiB0aGlzLnN0YXRlLmFjY2VzcyxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb25CYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGgzPkFkZCBEb2N1bWVudDwvaDM+XG4gICAgICAgICAgICA8RG9jdW1lbnRGb3JtXG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLmFjY2Vzc31cbiAgICAgICAgICAgICAgZG9jdW1lbnREYXRhPXtkb2N1bWVudERhdGF9XG4gICAgICAgICAgICAgIG9uU2F2ZT17dGhpcy5vbkNsaWNrU2F2ZX1cbiAgICAgICAgICAgICAgaGFuZGxlRWRpdG9yQ2hhbmdlID0ge3RoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbk1hbmFnZURvY3VtZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50c1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYW5hZ2VEb2N1bWVudCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTWFuYWdlRG9jdW1lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==