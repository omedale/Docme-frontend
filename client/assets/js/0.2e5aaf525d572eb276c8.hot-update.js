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
      access: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);
    return _this;
  }

  _createClass(ManageDocument, [{
    key: 'handleEditorChange',
    value: function handleEditorChange(e) {
      console.log(e.target.getContent());
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        docTitle: event.target.value.docTitle,
        docContent: event.target.value.docContent,
        access: event.target.value.access
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var config = {
        "selector": "#doc-text-area",
        "plugins": "autolink link image lists print preview textcolor table emoticons codesample",
        "toolbar": "undo redo | bold italic | fontsizeselect fontselect | alignleft aligncenter alignright | forecolor backcolor | table | numlist bullist | emoticons | codesample",
        "table_toolbar": "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
        "fontsize_formats": "8pt 10pt 12pt 14pt 18pt 24pt 36pt"
      };
      tinymce.init({
        selector: "#doc-text-area", // change this value according to your HTML
        ontent: "<p>This is the initial content of the editor</p>",
        plugins: 'autolink link image lists print preview textcolor table emoticons',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
        onChange: this.handleEditorChange
      });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave(event) {
      event.preventDefault();
      var doc = {
        title: event.target.docTitle.value,
        content: event.target.docContent.value,
        access: event.target.access.value
      };
      console.log(doc);
      this.props.actions.saveDocuments(doc).then(function (res) {
        console.log('heeerdsdfghj');
        console.log(res);
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
              onChange: this.handleChange
            }),
            _react2.default.createElement('div', { id: 'doc-text-area', className: 'row' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZ2V0Q29udGVudCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ2YWx1ZSIsImNvbmZpZyIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJvbnRlbnQiLCJwbHVnaW5zIiwidG9vbGJhciIsIm9uQ2hhbmdlIiwiaGFuZGxlRWRpdG9yQ2hhbmdlIiwicHJldmVudERlZmF1bHQiLCJkb2MiLCJ0aXRsZSIsImNvbnRlbnQiLCJhY3Rpb25zIiwic2F2ZURvY3VtZW50cyIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVycm9yIiwiZG9jdW1lbnREYXRhIiwiaGlzdG9yeSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJkb2N1bWVudHMiLCJhcnJheSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxjOzs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsa0JBQVksRUFIRDtBQUlY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QixFQUFnQzZDLFFBQWhDLEVBQTBDO0FBQ3hDLFNBQU87QUFDTEgsZUFBVzFDLE1BQU0wQztBQURaLEdBQVA7QUFHRDs7QUFFRCxTQUFTSSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMbEIsYUFBUywrQkFBbUJoQyxlQUFuQixFQUFvQ2tELFFBQXBDO0FBREosR0FBUDtBQUdEOztrQkFFYyx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDaEQsY0FBN0MsQyIsImZpbGUiOiIwLjJlNWFhZjUyNWQ1NzJlYjI3NmM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBUaW55TUNFIGZyb20gJ3JlYWN0LXRpbnltY2UnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBEb2N1bWVudEZvcm0gZnJvbSAnLi9Eb2N1bWVudEZvcm0nO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBNYW5hZ2VEb2N1bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBkb2NUaXRsZTogJycsXG4gICAgICBkb2NDb250ZW50OiAnJyxcbiAgICAgIGFjY2VzczogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tTYXZlID0gdGhpcy5vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlRWRpdG9yQ2hhbmdlKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRDb250ZW50KCkpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NUaXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC52YWx1ZS5hY2Nlc3NcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBcInNlbGVjdG9yXCI6IFwiI2RvYy10ZXh0LWFyZWFcIixcbiAgICAgIFwicGx1Z2luc1wiOiBcImF1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zIGNvZGVzYW1wbGVcIixcbiAgICAgIFwidG9vbGJhclwiOiBcInVuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHwgZm9udHNpemVzZWxlY3QgZm9udHNlbGVjdCB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgZm9yZWNvbG9yIGJhY2tjb2xvciB8IHRhYmxlIHwgbnVtbGlzdCBidWxsaXN0IHwgZW1vdGljb25zIHwgY29kZXNhbXBsZVwiLFxuICAgICAgXCJ0YWJsZV90b29sYmFyXCI6IFwidGFibGVwcm9wcyB0YWJsZWRlbGV0ZSB8IHRhYmxlaW5zZXJ0cm93YmVmb3JlIHRhYmxlaW5zZXJ0cm93YWZ0ZXIgdGFibGVkZWxldGVyb3cgfCB0YWJsZWluc2VydGNvbGJlZm9yZSB0YWJsZWluc2VydGNvbGFmdGVyIHRhYmxlZGVsZXRlY29sXCIsXG4gICAgICBcImZvbnRzaXplX2Zvcm1hdHNcIjogXCI4cHQgMTBwdCAxMnB0IDE0cHQgMThwdCAyNHB0IDM2cHRcIlxuICAgIH1cbiAgICB0aW55bWNlLmluaXQoe1xuICAgICAgc2VsZWN0b3I6IFwiI2RvYy10ZXh0LWFyZWFcIiwgIC8vIGNoYW5nZSB0aGlzIHZhbHVlIGFjY29yZGluZyB0byB5b3VyIEhUTUxcbiAgICAgIG9udGVudDpcIjxwPlRoaXMgaXMgdGhlIGluaXRpYWwgY29udGVudCBvZiB0aGUgZWRpdG9yPC9wPlwiLFxuICAgICAgcGx1Z2luczogJ2F1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zJyxcbiAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgY29kZScsXG4gICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2VcbiAgICB9KTtcbiAgfVxuXG5cblxuICBvbkNsaWNrU2F2ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgdGl0bGU6IGV2ZW50LnRhcmdldC5kb2NUaXRsZS52YWx1ZSxcbiAgICAgIGNvbnRlbnQ6IGV2ZW50LnRhcmdldC5kb2NDb250ZW50LnZhbHVlLFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQuYWNjZXNzLnZhbHVlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRvYylcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuc2F2ZURvY3VtZW50cyhkb2MpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGVlZXJkc2RmZ2hqJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBkb2N1bWVudERhdGEgPSB7XG4gICAgICBkb2NUaXRsZTogdGhpcy5zdGF0ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IHRoaXMuc3RhdGUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogdGhpcy5zdGF0ZS5hY2Nlc3MsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMz5BZGQgRG9jdW1lbnQ8L2gzPlxuICAgICAgICAgICAgPERvY3VtZW50Rm9ybVxuICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17dGhpcy5zdGF0ZS5hY2Nlc3N9XG4gICAgICAgICAgICAgIGRvY3VtZW50RGF0YT17ZG9jdW1lbnREYXRhfVxuICAgICAgICAgICAgICBvblNhdmU9e3RoaXMub25DbGlja1NhdmV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZG9jLXRleHQtYXJlYVwiIGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5NYW5hZ2VEb2N1bWVudC5wcm9wVHlwZXMgPSB7XG4gIGFjdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGRvY3VtZW50QWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFuYWdlRG9jdW1lbnQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01hbmFnZURvY3VtZW50LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=