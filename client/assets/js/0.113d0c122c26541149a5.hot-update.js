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
      editor: null,
      editMode: false
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
            access: document.data.access,
            editMode: true
          });
        });
      }
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave(event) {
      var _this3 = this;

      event.preventDefault();
      var doc = {
        title: event.target.docTitle.value,
        content: this.state.docContent,
        access: event.target.access.value
      };
      if (th) this.props.actions.saveDocuments(doc).then(function (res) {
        _this3.props.history.push('/');
      }).catch(function (error) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImVkaXRvciIsImVkaXRNb2RlIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIm9uQ2xpY2tTYXZlIiwiaGFuZGxlRWRpdG9yQ2hhbmdlIiwiY29udGVudCIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJnZXREb2N1bWVudCIsInRoZW4iLCJkb2N1bWVudCIsImRhdGEiLCJ0aXRsZSIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwidGgiLCJhY3Rpb25zIiwic2F2ZURvY3VtZW50cyIsImhpc3RvcnkiLCJwdXNoIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkb2N1bWVudERhdGEiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRzIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxjOzs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsa0JBQVksRUFIRDtBQUlYQyxjQUFR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LFNBQVNHLGVBQVQsQ0FBeUIzQyxLQUF6QixFQUFnQzRDLFFBQWhDLEVBQTBDO0FBQ3hDLFNBQU87QUFDTEgsZUFBV3pDLE1BQU15QztBQURaLEdBQVA7QUFHRDs7QUFFRCxTQUFTSSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMbkIsYUFBUywrQkFBbUI5QixlQUFuQixFQUFvQ2lELFFBQXBDO0FBREosR0FBUDtBQUdEOztrQkFFYyx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDL0MsY0FBN0MsQyIsImZpbGUiOiIwLjExM2QwYzEyMmMyNjU0MTE0OWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBUaW55TUNFIGZyb20gJ3JlYWN0LXRpbnltY2UnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBEb2N1bWVudEZvcm0gZnJvbSAnLi9Eb2N1bWVudEZvcm0nO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi4vdXRpbC9BcGlDYWxscydcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJztcblxuY2xhc3MgTWFuYWdlRG9jdW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgZG9jVGl0bGU6ICcnLFxuICAgICAgZG9jQ29udGVudDogJycsXG4gICAgICBhY2Nlc3M6ICcnLFxuICAgICAgZWRpdG9yOiBudWxsLFxuICAgICAgZWRpdE1vZGU6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrU2F2ZSA9IHRoaXMub25DbGlja1NhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUVkaXRvckNoYW5nZSA9IHRoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVFZGl0b3JDaGFuZ2UoY29udGVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9jQ29udGVudDogY29udGVudFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NUaXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY1RpdGxlLFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQudmFsdWUuYWNjZXNzXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICBBcGlDYWxsLmdldERvY3VtZW50KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKS50aGVuKGRvY3VtZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZG9jVGl0bGU6IGRvY3VtZW50LmRhdGEudGl0bGUsXG4gICAgICAgICAgZG9jQ29udGVudDogZG9jdW1lbnQuZGF0YS5jb250ZW50LFxuICAgICAgICAgIGFjY2VzczogZG9jdW1lbnQuZGF0YS5hY2Nlc3MsXG4gICAgICAgICAgZWRpdE1vZGU6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cblxuICBvbkNsaWNrU2F2ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgdGl0bGU6IGV2ZW50LnRhcmdldC5kb2NUaXRsZS52YWx1ZSxcbiAgICAgIGNvbnRlbnQ6IHRoaXMuc3RhdGUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LmFjY2Vzcy52YWx1ZVxuICAgIH1cbiAgICBpZiAodGgpXG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLnNhdmVEb2N1bWVudHMoZG9jKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRvY3VtZW50RGF0YSA9IHtcbiAgICAgIGRvY1RpdGxlOiB0aGlzLnN0YXRlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogdGhpcy5zdGF0ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiB0aGlzLnN0YXRlLmFjY2VzcyxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb25CYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NDb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgcm93XCI+XG4gICAgICAgICAgPERvY3VtZW50Rm9ybVxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLmFjY2Vzc31cbiAgICAgICAgICBkb2N1bWVudERhdGE9e2RvY3VtZW50RGF0YX1cbiAgICAgICAgICBvblNhdmU9e3RoaXMub25DbGlja1NhdmV9XG4gICAgICAgICAgaGFuZGxlRWRpdG9yQ2hhbmdlPXt0aGlzLmhhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuTWFuYWdlRG9jdW1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpb25zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhkb2N1bWVudEFjdGlvbnMsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1hbmFnZURvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3giXSwic291cmNlUm9vdCI6IiJ9