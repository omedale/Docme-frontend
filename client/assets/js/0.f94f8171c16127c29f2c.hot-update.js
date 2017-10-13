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
    value: function handleEditorChange(e) {
      console.log(hlloo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImVkaXRvciIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImUiLCJjb25zb2xlIiwibG9nIiwiaGxsb28iLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25maWciLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwicGx1Z2lucyIsInRvb2xiYXIiLCJzZXR1cCIsIm9uIiwiY29udGVudCIsImdldENvbnRlbnQiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImRvYyIsInRpdGxlIiwiYWN0aW9ucyIsInNhdmVEb2N1bWVudHMiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsImRvY3VtZW50RGF0YSIsImhpc3RvcnkiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRzIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFhQSxlOzs7Ozs7Ozs7Ozs7SUFFUEMsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGtCQUFZ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aUMsUzs7QUFtR25DekMsZUFBZTBDLFNBQWYsR0FBMkI7QUFDekJULFdBQVMsZ0JBQU1VLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURQO0FBRXpCQyxhQUFXLGdCQUFNSCxTQUFOLENBQWdCSSxLQUFoQixDQUFzQkY7QUFGUixDQUEzQjs7QUFLQSxTQUFTRyxlQUFULENBQXlCOUMsS0FBekIsRUFBZ0MrQyxRQUFoQyxFQUEwQztBQUN4QyxTQUFPO0FBQ0xILGVBQVc1QyxNQUFNNEM7QUFEWixHQUFQO0FBR0Q7O0FBRUQsU0FBU0ksa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFNBQU87QUFDTGxCLGFBQVMsK0JBQW1CbEMsZUFBbkIsRUFBb0NvRCxRQUFwQztBQURKLEdBQVA7QUFHRDs7a0JBRWMseUJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q2xELGNBQTdDLEMiLCJmaWxlIjoiMC5mOTRmODE3MWMxNjEyN2MyOWYyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgVGlueU1DRSBmcm9tICdyZWFjdC10aW55bWNlJztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgRG9jdW1lbnRGb3JtIGZyb20gJy4vRG9jdW1lbnRGb3JtJztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJztcblxuY2xhc3MgTWFuYWdlRG9jdW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgZG9jVGl0bGU6ICcnLFxuICAgICAgZG9jQ29udGVudDogJycsXG4gICAgICBhY2Nlc3M6ICcnLFxuICAgICAgZWRpdG9yOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrU2F2ZSA9IHRoaXMub25DbGlja1NhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXRvckNoYW5nZShlKSB7XG4gICAgY29uc29sZS5sb2coaGxsb28pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NUaXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC52YWx1ZS5hY2Nlc3NcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBcInNlbGVjdG9yXCI6IFwiI2RvYy10ZXh0LWFyZWFcIixcbiAgICAgIFwicGx1Z2luc1wiOiBcImF1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zIGNvZGVzYW1wbGVcIixcbiAgICAgIFwidG9vbGJhclwiOiBcInVuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHwgZm9udHNpemVzZWxlY3QgZm9udHNlbGVjdCB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgZm9yZWNvbG9yIGJhY2tjb2xvciB8IHRhYmxlIHwgbnVtbGlzdCBidWxsaXN0IHwgZW1vdGljb25zIHwgY29kZXNhbXBsZVwiLFxuICAgICAgXCJ0YWJsZV90b29sYmFyXCI6IFwidGFibGVwcm9wcyB0YWJsZWRlbGV0ZSB8IHRhYmxlaW5zZXJ0cm93YmVmb3JlIHRhYmxlaW5zZXJ0cm93YWZ0ZXIgdGFibGVkZWxldGVyb3cgfCB0YWJsZWluc2VydGNvbGJlZm9yZSB0YWJsZWluc2VydGNvbGFmdGVyIHRhYmxlZGVsZXRlY29sXCIsXG4gICAgICBcImZvbnRzaXplX2Zvcm1hdHNcIjogXCI4cHQgMTBwdCAxMnB0IDE0cHQgMThwdCAyNHB0IDM2cHRcIlxuICAgIH1cbiAgICB0aW55bWNlLmluaXQoe1xuICAgICAgc2VsZWN0b3I6IFwiI2RvYy10ZXh0LWFyZWFcIiwgIC8vIGNoYW5nZSB0aGlzIHZhbHVlIGFjY29yZGluZyB0byB5b3VyIEhUTUxcbiAgICAgIHBsdWdpbnM6ICdhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIHByaW50IHByZXZpZXcgdGV4dGNvbG9yIHRhYmxlIGVtb3RpY29ucycsXG4gICAgICB0b29sYmFyOiAndW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGNvZGUnLFxuICAgICAgc2V0dXA6IChlZGl0b3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRvciB9KTtcbiAgICAgICAgZWRpdG9yLm9uKCdrZXl1cCBjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2UoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG4gIG9uQ2xpY2tTYXZlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkb2MgPSB7XG4gICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LmRvY1RpdGxlLnZhbHVlLFxuICAgICAgY29udGVudDogZXZlbnQudGFyZ2V0LmRvY0NvbnRlbnQudmFsdWUsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC5hY2Nlc3MudmFsdWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZG9jKVxuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5zYXZlRG9jdW1lbnRzKGRvYylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWVlcmRzZGZnaGonKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGRvY3VtZW50RGF0YSA9IHtcbiAgICAgIGRvY1RpdGxlOiB0aGlzLnN0YXRlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogdGhpcy5zdGF0ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiB0aGlzLnN0YXRlLmFjY2VzcyxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb25CYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGgzPkFkZCBEb2N1bWVudDwvaDM+XG4gICAgICAgICAgICA8RG9jdW1lbnRGb3JtXG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLmFjY2Vzc31cbiAgICAgICAgICAgICAgZG9jdW1lbnREYXRhPXtkb2N1bWVudERhdGF9XG4gICAgICAgICAgICAgIG9uU2F2ZT17dGhpcy5vbkNsaWNrU2F2ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkb2MtdGV4dC1hcmVhXCIgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbk1hbmFnZURvY3VtZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50c1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYW5hZ2VEb2N1bWVudCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTWFuYWdlRG9jdW1lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==