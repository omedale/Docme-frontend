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
      console.log(content);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImVkaXRvciIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiY29uZmlnIiwidGlueW1jZSIsImluaXQiLCJzZWxlY3RvciIsInBsdWdpbnMiLCJ0b29sYmFyIiwic2V0dXAiLCJvbiIsImdldENvbnRlbnQiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImRvYyIsInRpdGxlIiwiYWN0aW9ucyIsInNhdmVEb2N1bWVudHMiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsImRvY3VtZW50RGF0YSIsImhpc3RvcnkiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRzIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFhQSxlOzs7Ozs7Ozs7Ozs7SUFFUEMsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGtCQUFZLEVBSEQ7QUFJWEMs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REY7QUFKRixPQURGO0FBcUJEOzs7O0VBbEcwQixnQkFBTStCLFM7O0FBb0duQ3ZDLGVBQWV3QyxTQUFmLEdBQTJCO0FBQ3pCVCxXQUFTLGdCQUFNVSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEUDtBQUV6QkMsYUFBVyxnQkFBTUgsU0FBTixDQUFnQkksS0FBaEIsQ0FBc0JGO0FBRlIsQ0FBM0I7O0FBS0EsU0FBU0csZUFBVCxDQUF5QjVDLEtBQXpCLEVBQWdDNkMsUUFBaEMsRUFBMEM7QUFDeEMsU0FBTztBQUNMSCxlQUFXMUMsTUFBTTBDO0FBRFosR0FBUDtBQUdEOztBQUVELFNBQVNJLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxTQUFPO0FBQ0xsQixhQUFTLCtCQUFtQmhDLGVBQW5CLEVBQW9Da0QsUUFBcEM7QUFESixHQUFQO0FBR0Q7O2tCQUVjLHlCQUFRSCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNoRCxjQUE3QyxDIiwiZmlsZSI6IjAuMGM3NmY1MGZiNjdmNTUxODgyZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFRpbnlNQ0UgZnJvbSAncmVhY3QtdGlueW1jZSc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IERvY3VtZW50Rm9ybSBmcm9tICcuL0RvY3VtZW50Rm9ybSc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCAqICBhcyBkb2N1bWVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9kb2N1bWVudEFjdGlvbic7XG5cbmNsYXNzIE1hbmFnZURvY3VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGRvY1RpdGxlOiAnJyxcbiAgICAgIGRvY0NvbnRlbnQ6ICcnLFxuICAgICAgYWNjZXNzOiAnJyxcbiAgICAgIGVkaXRvcjogbnVsbFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1NhdmUgPSB0aGlzLm9uQ2xpY2tTYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVFZGl0b3JDaGFuZ2UoY29udGVudCkge1xuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY1RpdGxlOiBldmVudC50YXJnZXQudmFsdWUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiBldmVudC50YXJnZXQudmFsdWUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LnZhbHVlLmFjY2Vzc1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIFwic2VsZWN0b3JcIjogXCIjZG9jLXRleHQtYXJlYVwiLFxuICAgICAgXCJwbHVnaW5zXCI6IFwiYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBwcmludCBwcmV2aWV3IHRleHRjb2xvciB0YWJsZSBlbW90aWNvbnMgY29kZXNhbXBsZVwiLFxuICAgICAgXCJ0b29sYmFyXCI6IFwidW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgfCBmb250c2l6ZXNlbGVjdCBmb250c2VsZWN0IHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBmb3JlY29sb3IgYmFja2NvbG9yIHwgdGFibGUgfCBudW1saXN0IGJ1bGxpc3QgfCBlbW90aWNvbnMgfCBjb2Rlc2FtcGxlXCIsXG4gICAgICBcInRhYmxlX3Rvb2xiYXJcIjogXCJ0YWJsZXByb3BzIHRhYmxlZGVsZXRlIHwgdGFibGVpbnNlcnRyb3diZWZvcmUgdGFibGVpbnNlcnRyb3dhZnRlciB0YWJsZWRlbGV0ZXJvdyB8IHRhYmxlaW5zZXJ0Y29sYmVmb3JlIHRhYmxlaW5zZXJ0Y29sYWZ0ZXIgdGFibGVkZWxldGVjb2xcIixcbiAgICAgIFwiZm9udHNpemVfZm9ybWF0c1wiOiBcIjhwdCAxMHB0IDEycHQgMTRwdCAxOHB0IDI0cHQgMzZwdFwiXG4gICAgfVxuICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICBzZWxlY3RvcjogXCIjZG9jLXRleHQtYXJlYVwiLCAgLy8gY2hhbmdlIHRoaXMgdmFsdWUgYWNjb3JkaW5nIHRvIHlvdXIgSFRNTFxuICAgICAgcGx1Z2luczogJ2F1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zJyxcbiAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgY29kZScsXG4gICAgICBzZXR1cDogKGVkaXRvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWRpdG9yIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2tleXVwIGNoYW5nZScsICgpID0+IHsgICAgIFxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgIHRoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlKGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cblxuICBvbkNsaWNrU2F2ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgdGl0bGU6IGV2ZW50LnRhcmdldC5kb2NUaXRsZS52YWx1ZSxcbiAgICAgIGNvbnRlbnQ6IGV2ZW50LnRhcmdldC5kb2NDb250ZW50LnZhbHVlLFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQuYWNjZXNzLnZhbHVlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRvYylcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuc2F2ZURvY3VtZW50cyhkb2MpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGVlZXJkc2RmZ2hqJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBkb2N1bWVudERhdGEgPSB7XG4gICAgICBkb2NUaXRsZTogdGhpcy5zdGF0ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IHRoaXMuc3RhdGUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogdGhpcy5zdGF0ZS5hY2Nlc3MsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMz5BZGQgRG9jdW1lbnQ8L2gzPlxuICAgICAgICAgICAgPERvY3VtZW50Rm9ybVxuICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17dGhpcy5zdGF0ZS5hY2Nlc3N9XG4gICAgICAgICAgICAgIGRvY3VtZW50RGF0YT17ZG9jdW1lbnREYXRhfVxuICAgICAgICAgICAgICBvblNhdmU9e3RoaXMub25DbGlja1NhdmV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZG9jLXRleHQtYXJlYVwiIGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5NYW5hZ2VEb2N1bWVudC5wcm9wVHlwZXMgPSB7XG4gIGFjdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGRvY3VtZW50QWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFuYWdlRG9jdW1lbnQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01hbmFnZURvY3VtZW50LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=