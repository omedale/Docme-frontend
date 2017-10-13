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

      confi;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZ2V0Q29udGVudCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwidGl0bGUiLCJjb250ZW50IiwiYWN0aW9ucyIsInNhdmVEb2N1bWVudHMiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsImNvbmZpIiwiZG9jdW1lbnREYXRhIiwiaGlzdG9yeSIsInBsdWdpbnMiLCJ0b29sYmFyIiwiaGFuZGxlRWRpdG9yQ2hhbmdlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImRvY3VtZW50cyIsImFycmF5IiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBYUEsZTs7Ozs7Ozs7Ozs7O0lBRVBDLGM7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxrQkFBWSxFQUhEO0FBSVhDLGNBQVE7QUFKRyxLQUFiO0FBTUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFM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QUE2QzNDLGNBQTdDLEMiLCJmaWxlIjoiMC42YzY4NzBhYzliODk0ZTM3MjU1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBUaW55TUNFIGZyb20gJ3JlYWN0LXRpbnltY2UnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBEb2N1bWVudEZvcm0gZnJvbSAnLi9Eb2N1bWVudEZvcm0nO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBNYW5hZ2VEb2N1bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBkb2NUaXRsZTogJycsXG4gICAgICBkb2NDb250ZW50OiAnJyxcbiAgICAgIGFjY2VzczogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tTYXZlID0gdGhpcy5vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlRWRpdG9yQ2hhbmdlKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRDb250ZW50KCkpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NUaXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC52YWx1ZS5hY2Nlc3NcbiAgICB9KTtcbiAgfVxuXG5cblxuICBvbkNsaWNrU2F2ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgdGl0bGU6IGV2ZW50LnRhcmdldC5kb2NUaXRsZS52YWx1ZSxcbiAgICAgIGNvbnRlbnQ6IGV2ZW50LnRhcmdldC5kb2NDb250ZW50LnZhbHVlLFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQuYWNjZXNzLnZhbHVlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRvYylcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuc2F2ZURvY3VtZW50cyhkb2MpXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZWVlcmRzZGZnaGonKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbmZpXG4gICAgXG4gICAgY29uc3QgZG9jdW1lbnREYXRhID0ge1xuICAgICAgZG9jVGl0bGU6IHRoaXMuc3RhdGUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiB0aGlzLnN0YXRlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IHRoaXMuc3RhdGUuYWNjZXNzLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDM+QWRkIERvY3VtZW50PC9oMz5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPFRpbnlNQ0VcbiAgICAgICAgICAgIGNvbnRlbnQ9XCI8cD5UaGlzIGlzIHRoZSBpbml0aWFsIGNvbnRlbnQgb2YgdGhlIGVkaXRvcjwvcD5cIlxuICAgICAgICAgICAgY29uZmlnPXt7XG4gICAgICAgICAgICAgIHBsdWdpbnM6ICdhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIHByaW50IHByZXZpZXcnLFxuICAgICAgICAgICAgICB0b29sYmFyOiAndW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGNvZGUnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERvY3VtZW50Rm9ybVxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLmFjY2Vzc31cbiAgICAgICAgICBkb2N1bWVudERhdGE9e2RvY3VtZW50RGF0YX1cbiAgICAgICAgICBvblNhdmU9e3RoaXMub25DbGlja1NhdmV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuTWFuYWdlRG9jdW1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpb25zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyl7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHMgXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhkb2N1bWVudEFjdGlvbnMsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1hbmFnZURvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3giXSwic291cmNlUm9vdCI6IiJ9