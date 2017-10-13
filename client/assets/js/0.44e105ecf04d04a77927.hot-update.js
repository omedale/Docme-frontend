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
        content: this.state.con,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImVkaXRvciIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY29uZmlnIiwidGlueW1jZSIsImluaXQiLCJzZWxlY3RvciIsInBsdWdpbnMiLCJ0b29sYmFyIiwic2V0dXAiLCJvbiIsImdldENvbnRlbnQiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImRvYyIsInRpdGxlIiwiY29uIiwiYWN0aW9ucyIsInNhdmVEb2N1bWVudHMiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsImRvY3VtZW50RGF0YSIsImhpc3RvcnkiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRzIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFhQSxlOzs7Ozs7Ozs7Ozs7SUFFUEMsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGtCQUFZLEVBSEQ7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QztBQVJGO0FBREY7QUFKRixPQURGO0FBcUJEOzs7O0VBcEcwQixnQkFBTWdDLFM7O0FBc0duQ3hDLGVBQWV5QyxTQUFmLEdBQTJCO0FBQ3pCVCxXQUFTLGdCQUFNVSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEUDtBQUV6QkMsYUFBVyxnQkFBTUgsU0FBTixDQUFnQkksS0FBaEIsQ0FBc0JGO0FBRlIsQ0FBM0I7O0FBS0EsU0FBU0csZUFBVCxDQUF5QjdDLEtBQXpCLEVBQWdDOEMsUUFBaEMsRUFBMEM7QUFDeEMsU0FBTztBQUNMSCxlQUFXM0MsTUFBTTJDO0FBRFosR0FBUDtBQUdEOztBQUVELFNBQVNJLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxTQUFPO0FBQ0xsQixhQUFTLCtCQUFtQmpDLGVBQW5CLEVBQW9DbUQsUUFBcEM7QUFESixHQUFQO0FBR0Q7O2tCQUVjLHlCQUFRSCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNqRCxjQUE3QyxDIiwiZmlsZSI6IjAuNDRlMTA1ZWNmMDRkMDRhNzc5MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFRpbnlNQ0UgZnJvbSAncmVhY3QtdGlueW1jZSc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IERvY3VtZW50Rm9ybSBmcm9tICcuL0RvY3VtZW50Rm9ybSc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCAqICBhcyBkb2N1bWVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9kb2N1bWVudEFjdGlvbic7XG5cbmNsYXNzIE1hbmFnZURvY3VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGRvY1RpdGxlOiAnJyxcbiAgICAgIGRvY0NvbnRlbnQ6ICcnLFxuICAgICAgYWNjZXNzOiAnJyxcbiAgICAgIGVkaXRvcjogbnVsbFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1NhdmUgPSB0aGlzLm9uQ2xpY2tTYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVFZGl0b3JDaGFuZ2UoY29udGVudCkge1xuICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgIH0pXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9jVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQudmFsdWUuYWNjZXNzXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgXCJzZWxlY3RvclwiOiBcIiNkb2MtdGV4dC1hcmVhXCIsXG4gICAgICBcInBsdWdpbnNcIjogXCJhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIHByaW50IHByZXZpZXcgdGV4dGNvbG9yIHRhYmxlIGVtb3RpY29ucyBjb2Rlc2FtcGxlXCIsXG4gICAgICBcInRvb2xiYXJcIjogXCJ1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IGZvbnRzaXplc2VsZWN0IGZvbnRzZWxlY3QgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGZvcmVjb2xvciBiYWNrY29sb3IgfCB0YWJsZSB8IG51bWxpc3QgYnVsbGlzdCB8IGVtb3RpY29ucyB8IGNvZGVzYW1wbGVcIixcbiAgICAgIFwidGFibGVfdG9vbGJhclwiOiBcInRhYmxlcHJvcHMgdGFibGVkZWxldGUgfCB0YWJsZWluc2VydHJvd2JlZm9yZSB0YWJsZWluc2VydHJvd2FmdGVyIHRhYmxlZGVsZXRlcm93IHwgdGFibGVpbnNlcnRjb2xiZWZvcmUgdGFibGVpbnNlcnRjb2xhZnRlciB0YWJsZWRlbGV0ZWNvbFwiLFxuICAgICAgXCJmb250c2l6ZV9mb3JtYXRzXCI6IFwiOHB0IDEwcHQgMTJwdCAxNHB0IDE4cHQgMjRwdCAzNnB0XCJcbiAgICB9XG4gICAgdGlueW1jZS5pbml0KHtcbiAgICAgIHNlbGVjdG9yOiBcIiNkb2MtdGV4dC1hcmVhXCIsICAvLyBjaGFuZ2UgdGhpcyB2YWx1ZSBhY2NvcmRpbmcgdG8geW91ciBIVE1MXG4gICAgICBwbHVnaW5zOiAnYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBwcmludCBwcmV2aWV3IHRleHRjb2xvciB0YWJsZSBlbW90aWNvbnMnLFxuICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBjb2RlJyxcbiAgICAgIHNldHVwOiAoZWRpdG9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0b3IgfSk7XG4gICAgICAgIGVkaXRvci5vbigna2V5dXAgY2hhbmdlJywgKCkgPT4geyAgICAgXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2UoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG4gIG9uQ2xpY2tTYXZlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkb2MgPSB7XG4gICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LmRvY1RpdGxlLnZhbHVlLFxuICAgICAgY29udGVudDogdGhpcy5zdGF0ZS5jb24sXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC5hY2Nlc3MudmFsdWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZG9jKVxuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5zYXZlRG9jdW1lbnRzKGRvYylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWVlcmRzZGZnaGonKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGRvY3VtZW50RGF0YSA9IHtcbiAgICAgIGRvY1RpdGxlOiB0aGlzLnN0YXRlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogdGhpcy5zdGF0ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiB0aGlzLnN0YXRlLmFjY2VzcyxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb25CYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGgzPkFkZCBEb2N1bWVudDwvaDM+XG4gICAgICAgICAgICA8RG9jdW1lbnRGb3JtXG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLmFjY2Vzc31cbiAgICAgICAgICAgICAgZG9jdW1lbnREYXRhPXtkb2N1bWVudERhdGF9XG4gICAgICAgICAgICAgIG9uU2F2ZT17dGhpcy5vbkNsaWNrU2F2ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkb2MtdGV4dC1hcmVhXCIgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbk1hbmFnZURvY3VtZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50c1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYW5hZ2VEb2N1bWVudCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTWFuYWdlRG9jdW1lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==