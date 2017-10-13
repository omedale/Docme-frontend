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

      config;

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
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_reactTinymce2.default, {
                content: '<p>This is the initial content of the editor</p>',
                config: {
                  plugins: 'autolink link image lists print preview',
                  toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                },
                onChange: this.handleEditorChange
              })
            ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZ2V0Q29udGVudCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwidGl0bGUiLCJjb250ZW50IiwiYWN0aW9ucyIsInNhdmVEb2N1bWVudHMiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsImNvbmZpZyIsImRvY3VtZW50RGF0YSIsImhpc3RvcnkiLCJwbHVnaW5zIiwidG9vbGJhciIsImhhbmRsZUVkaXRvckNoYW5nZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJkb2N1bWVudHMiLCJhcnJheSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxjOzs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsa0JBQVksRUFIRDtBQUlYQyxjQUFRO0FBSkcsS0FBYjtBQU1BLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFB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RUFBNkMzQyxjQUE3QyxDIiwiZmlsZSI6IjAuOGI0Y2ZiN2ZjOWJkMTA2ZDc2NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgVGlueU1DRSBmcm9tICdyZWFjdC10aW55bWNlJztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgRG9jdW1lbnRGb3JtIGZyb20gJy4vRG9jdW1lbnRGb3JtJztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJztcblxuY2xhc3MgTWFuYWdlRG9jdW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgZG9jVGl0bGU6ICcnLFxuICAgICAgZG9jQ29udGVudDogJycsXG4gICAgICBhY2Nlc3M6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrU2F2ZSA9IHRoaXMub25DbGlja1NhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXRvckNoYW5nZShlKSB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0Q29udGVudCgpKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9jVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQudmFsdWUuYWNjZXNzXG4gICAgfSk7XG4gIH1cblxuXG5cbiAgb25DbGlja1NhdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRvYyA9IHtcbiAgICAgIHRpdGxlOiBldmVudC50YXJnZXQuZG9jVGl0bGUudmFsdWUsXG4gICAgICBjb250ZW50OiBldmVudC50YXJnZXQuZG9jQ29udGVudC52YWx1ZSxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LmFjY2Vzcy52YWx1ZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkb2MpXG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLnNhdmVEb2N1bWVudHMoZG9jKVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnaGVlZXJkc2RmZ2hqJyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25maWdcbiAgICBcbiAgICBjb25zdCBkb2N1bWVudERhdGEgPSB7XG4gICAgICBkb2NUaXRsZTogdGhpcy5zdGF0ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IHRoaXMuc3RhdGUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogdGhpcy5zdGF0ZS5hY2Nlc3MsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMz5BZGQgRG9jdW1lbnQ8L2gzPlxuICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8VGlueU1DRVxuICAgICAgICAgICAgY29udGVudD1cIjxwPlRoaXMgaXMgdGhlIGluaXRpYWwgY29udGVudCBvZiB0aGUgZWRpdG9yPC9wPlwiXG4gICAgICAgICAgICBjb25maWc9e3tcbiAgICAgICAgICAgICAgcGx1Z2luczogJ2F1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgcHJpbnQgcHJldmlldycsXG4gICAgICAgICAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgY29kZSdcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RG9jdW1lbnRGb3JtXG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3RoaXMuc3RhdGUuYWNjZXNzfVxuICAgICAgICAgIGRvY3VtZW50RGF0YT17ZG9jdW1lbnREYXRhfVxuICAgICAgICAgIG9uU2F2ZT17dGhpcy5vbkNsaWNrU2F2ZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5NYW5hZ2VEb2N1bWVudC5wcm9wVHlwZXMgPSB7XG4gIGFjdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZG9jdW1lbnRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKXtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50cyBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGRvY3VtZW50QWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFuYWdlRG9jdW1lbnQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01hbmFnZURvY3VtZW50LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=