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

var _ApiCalls = __webpack_require__(34);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

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
        _ApiCalls2.default.getDocument(this.props.match.params.id).then(function (document) {
          _this2.setState({
            docTitle: document.data.title,
            docContent: document.data.content,
            access: document.data.access
          });
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
        // tinymce.get('#doc-text-area').setContent('...content here...');
      };tinymce.init({
        selector: "#doc-text-area",
        plugins: 'autolink link image lists \n      print preview textcolor table emoticons codesample',
        toolbar: 'undo redo | bold italic | \n      fontsizeselect fontselect | \n      alignleft aligncenter alignright | forecolor backcolor \n      | table | bullist | emoticons | codesample',
        table_toolbar: 'tableprops tabledelete  \n      | tableinsertrowbefore \n      tableinsertrowafter tabledeleterow | tableinsertcolbefore \n      tableinsertcolafter tabledeletecol',
        fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
        setup: function setup(editor) {
          _this3.setState({ editor: editor });
          editor.on('keyup change', function () {
            var content = editor.getContent({ format: 'raw' });
            console.log('helllo');
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
        // console.log(this.state.docContent);
      };return _react2.default.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImVkaXRvciIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImhhbmRsZUVkaXRvckNoYW5nZSIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXRjaCIsInBhcmFtcyIsImlkIiwiZ2V0RG9jdW1lbnQiLCJ0aGVuIiwiZG9jdW1lbnQiLCJkYXRhIiwidGl0bGUiLCJjb25maWciLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwicGx1Z2lucyIsInRvb2xiYXIiLCJ0YWJsZV90b29sYmFyIiwiZm9udHNpemVfZm9ybWF0cyIsInNldHVwIiwib24iLCJnZXRDb250ZW50IiwiZm9ybWF0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwiYWN0aW9ucyIsInNhdmVEb2N1bWVudHMiLCJoaXN0b3J5IiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJkb2N1bWVudERhdGEiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRzIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxjOzs7QUFDSiwwQkFBWUMsS0FBWixF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LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IFRpbnlNQ0UgZnJvbSAncmVhY3QtdGlueW1jZSc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IERvY3VtZW50Rm9ybSBmcm9tICcuL0RvY3VtZW50Rm9ybSc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuLi91dGlsL0FwaUNhbGxzJ1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBNYW5hZ2VEb2N1bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBkb2NUaXRsZTogJycsXG4gICAgICBkb2NDb250ZW50OiAnJyxcbiAgICAgIGFjY2VzczogJycsXG4gICAgICBlZGl0b3I6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tTYXZlID0gdGhpcy5vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlID0gdGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXRvckNoYW5nZShjb250ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NDb250ZW50OiBjb250ZW50XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY1RpdGxlOiBldmVudC50YXJnZXQudmFsdWUuZG9jVGl0bGUsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC52YWx1ZS5hY2Nlc3NcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAgIEFwaUNhbGwuZ2V0RG9jdW1lbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpLnRoZW4oZG9jdW1lbnQgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkb2NUaXRsZTogZG9jdW1lbnQuZGF0YS50aXRsZSxcbiAgICAgICAgICBkb2NDb250ZW50OiBkb2N1bWVudC5kYXRhLmNvbnRlbnQsXG4gICAgICAgICAgYWNjZXNzOiBkb2N1bWVudC5kYXRhLmFjY2Vzc1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIFwic2VsZWN0b3JcIjogXCIjZG9jLXRleHQtYXJlYVwiLFxuICAgICAgXCJwbHVnaW5zXCI6IFwiYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBwcmludCBwcmV2aWV3IHRleHRjb2xvciB0YWJsZSBlbW90aWNvbnMgY29kZXNhbXBsZVwiLFxuICAgICAgXCJ0b29sYmFyXCI6IFwidW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgfCBmb250c2l6ZXNlbGVjdCBmb250c2VsZWN0IHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBmb3JlY29sb3IgYmFja2NvbG9yIHwgdGFibGUgfCBidWxsaXN0IHwgZW1vdGljb25zIHwgY29kZXNhbXBsZVwiLFxuICAgICAgXCJ0YWJsZV90b29sYmFyXCI6IFwidGFibGVwcm9wcyB0YWJsZWRlbGV0ZSB8IHRhYmxlaW5zZXJ0cm93YmVmb3JlIHRhYmxlaW5zZXJ0cm93YWZ0ZXIgdGFibGVkZWxldGVyb3cgfCB0YWJsZWluc2VydGNvbGJlZm9yZSB0YWJsZWluc2VydGNvbGFmdGVyIHRhYmxlZGVsZXRlY29sXCIsXG4gICAgICBcImZvbnRzaXplX2Zvcm1hdHNcIjogXCI4cHQgMTBwdCAxMnB0IDE0cHQgMThwdCAyNHB0IDM2cHRcIlxuICAgIH1cbiAgICAvLyB0aW55bWNlLmdldCgnI2RvYy10ZXh0LWFyZWEnKS5zZXRDb250ZW50KCcuLi5jb250ZW50IGhlcmUuLi4nKTtcbiAgICB0aW55bWNlLmluaXQoe1xuICAgICAgc2VsZWN0b3I6IFwiI2RvYy10ZXh0LWFyZWFcIixcbiAgICAgIHBsdWdpbnM6IGBhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIFxuICAgICAgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zIGNvZGVzYW1wbGVgLFxuICAgICAgdG9vbGJhcjogYHVuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHwgXG4gICAgICBmb250c2l6ZXNlbGVjdCBmb250c2VsZWN0IHwgXG4gICAgICBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGZvcmVjb2xvciBiYWNrY29sb3IgXG4gICAgICB8IHRhYmxlIHwgYnVsbGlzdCB8IGVtb3RpY29ucyB8IGNvZGVzYW1wbGVgLFxuICAgICAgdGFibGVfdG9vbGJhcjogYHRhYmxlcHJvcHMgdGFibGVkZWxldGUgIFxuICAgICAgfCB0YWJsZWluc2VydHJvd2JlZm9yZSBcbiAgICAgIHRhYmxlaW5zZXJ0cm93YWZ0ZXIgdGFibGVkZWxldGVyb3cgfCB0YWJsZWluc2VydGNvbGJlZm9yZSBcbiAgICAgIHRhYmxlaW5zZXJ0Y29sYWZ0ZXIgdGFibGVkZWxldGVjb2xgLFxuICAgICAgZm9udHNpemVfZm9ybWF0czogJzhwdCAxMHB0IDEycHQgMTRwdCAxOHB0IDI0cHQgMzZwdCcsXG4gICAgICBzZXR1cDogKGVkaXRvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWRpdG9yIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2tleXVwIGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gZWRpdG9yLmdldENvbnRlbnQoeyBmb3JtYXQ6ICdyYXcnIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbG8nKVxuICAgICAgICAgIHRoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlKGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cblxuICBvbkNsaWNrU2F2ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgdGl0bGU6IGV2ZW50LnRhcmdldC5kb2NUaXRsZS52YWx1ZSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMuc3RhdGUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LmFjY2Vzcy52YWx1ZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkb2MpXG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLnNhdmVEb2N1bWVudHMoZG9jKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSlcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RGF0YSA9IHtcbiAgICAgIGRvY1RpdGxlOiB0aGlzLnN0YXRlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogdGhpcy5zdGF0ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiB0aGlzLnN0YXRlLmFjY2VzcyxcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5kb2NDb250ZW50KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCByb3dcIj5cbiAgICAgICAgICAgIDxEb2N1bWVudEZvcm1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3RoaXMuc3RhdGUuYWNjZXNzfVxuICAgICAgICAgICAgICBkb2N1bWVudERhdGE9e2RvY3VtZW50RGF0YX1cbiAgICAgICAgICAgICAgb25TYXZlPXt0aGlzLm9uQ2xpY2tTYXZlfVxuICAgICAgICAgICAgICBoYW5kbGVFZGl0b3JDaGFuZ2U9e3RoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbk1hbmFnZURvY3VtZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50c1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYW5hZ2VEb2N1bWVudCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTWFuYWdlRG9jdW1lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==