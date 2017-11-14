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
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

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
          _this2.setState({ editor: editor });
          editor.on('keyup change', function () {
            var content = editor.getContent({ format: 'raw' });
            _this2.handleEditorChange(content);
          });
        }
      });
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
      console.log(doc);
      this.props.actions.saveDocuments(doc).then(function (res) {
        _this3.props.history.push('/');
      }).catch(function (error) {
        console.log('error');
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var documentData = {
        docTitle: 'hello',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImVkaXRvciIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImhhbmRsZUVkaXRvckNoYW5nZSIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjb25maWciLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwicGx1Z2lucyIsInRvb2xiYXIiLCJ0YWJsZV90b29sYmFyIiwiZm9udHNpemVfZm9ybWF0cyIsInNldHVwIiwib24iLCJnZXRDb250ZW50IiwiZm9ybWF0IiwicHJldmVudERlZmF1bHQiLCJkb2MiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJhY3Rpb25zIiwic2F2ZURvY3VtZW50cyIsInRoZW4iLCJoaXN0b3J5IiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJkb2N1bWVudERhdGEiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRzIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFhQSxlOzs7Ozs7Ozs7Ozs7SUFFUEMsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGtCQUFZLEVBSEQ7QUFJWEMsY0FBUSxFQUpHO0FBS1hDLGNBQVE7QUFMRyxLQUFiO0FBT0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFDQSxVQUFLRSxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkYsSUFBeEIsT0FBMUI7QUFYaUI7QUFZbEI7Ozs7dUNBRWtCRyxPLEVBQVM7QUFDMUIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pSLG9CQUFZTztBQURBLE9BQWQ7QUFHRDs7O2lDQUVZRSxLLEVBQU87QUFDbEIsV0FBS0QsUUFBTCxDQUFjO0FBQ1pULGtCQUFVVSxNQUFNQyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJaLFFBRGpCO0FBRVpFLGdCQUFRUSxNQUFNQyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJWO0FBRmYsT0FBZDtBQUlEOzs7d0NBRW1CO0FBQUE7O0FBQ2xCLFVBQU1XLFNBQVM7QUFDYixvQkFBWSxnQkFEQztBQUViLG1CQUFXLDhFQUZFO0FBR2IsbUJBQVcseUpBSEU7QUFJYix5QkFBaUIsNElBSko7QUFLYiw0QkFBb0I7QUFMUCxPQUFmO0FBT0FDLGNBQVFDLElBQVIsQ0FBYTtBQUNYQyxrQkFBVSxnQkFEQztBQUVYQyx1R0FGVztBQUlYQyxrTUFKVztBQVFYQyw0TEFSVztBQVlYQywwQkFBa0IsbUNBWlA7QUFhWEMsZUFBTyxlQUFDbEIsTUFBRCxFQUFZO0FBQ2pCLGlCQUFLTSxRQUFMLENBQWMsRUFBRU4sY0FBRixFQUFkO0FBQ0FBLGlCQUFPbUIsRUFBUCxDQUFVLGNBQVYsRUFBMEIsWUFBTTtBQUM5QixnQkFBTWQsVUFBVUwsT0FBT29CLFVBQVAsQ0FBa0IsRUFBQ0MsUUFBUyxLQUFWLEVBQWxCLENBQWhCO0FBQ0EsbUJBQUtqQixrQkFBTCxDQUF3QkMsT0FBeEI7QUFDRCxXQUhEO0FBSUQ7QUFuQlUsT0FBYjtBQXFCRDs7O2dDQUlXRSxLLEVBQU87QUFBQTs7QUFDakJBLFlBQU1lLGNBQU47QUFDQSxVQUFNQyxNQUFNO0FBQ1ZDLGVBQU9qQixNQUFNQyxNQUFOLENBQWFYLFFBQWIsQ0FBc0JZLEtBRG5CO0FBRVZKLGlCQUFTLEtBQUtWLEtBQUwsQ0FBV0csVUFGVjtBQUdWQyxnQkFBUVEsTUFBTUMsTUFBTixDQUFhVCxNQUFiLENBQW9CVTtBQUhsQixPQUFaO0FBS0FnQixjQUFRQyxHQUFSLENBQVlILEdBQVo7QUFDQSxXQUFLN0IsS0FBTCxDQUFXaUMsT0FBWCxDQUFtQkMsYUFBbkIsQ0FBaUNMLEdBQWpDLEVBQ0dNLElBREgsQ0FDUSxlQUFPO0FBQ1gsZUFBS25DLEtBQUwsQ0FBV29DLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLEdBQXhCO0FBQ0QsT0FISCxFQUlHQyxLQUpILENBSVMsaUJBQVM7QUFDZFAsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELGdCQUFRQyxHQUFSLENBQVlPLEtBQVo7QUFDRCxPQVBIO0FBUUQ7Ozs2QkFFUTs7QUFFUCxVQUFNQyxlQUFlO0FBQ25CckMsa0JBQVUsT0FEUztBQUVuQkMsb0JBQVksS0FBS0gsS0FBTCxDQUFXRyxVQUZKO0FBR25CQyxnQkFBUSxLQUFLSixLQUFMLENBQVdJO0FBSEEsT0FBckI7QUFLQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsRUFBZjtBQUNFLG1FQUFlLFNBQVMsS0FBS0wsS0FBTCxDQUFXb0MsT0FBbkM7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0U7QUFDRSw4QkFBZ0IsS0FBS25DLEtBQUwsQ0FBV0ksTUFEN0I7QUFFRSw0QkFBY21DLFlBRmhCO0FBR0Usc0JBQVEsS0FBSy9CLFdBSGY7QUFJRSxrQ0FBc0IsS0FBS0Msa0JBSjdCO0FBS0Usd0JBQVUsS0FBS0g7QUFMakI7QUFERjtBQURGO0FBSkYsT0FERjtBQWtCRDs7OztFQXhHMEIsZ0JBQU1rQyxTOztBQTBHbkMxQyxlQUFlMkMsU0FBZixHQUEyQjtBQUN6QlQsV0FBUyxnQkFBTVUsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFA7QUFFekJDLGFBQVcsZ0JBQU1ILFNBQU4sQ0FBZ0JJLEtBQWhCLENBQXNCRjtBQUZSLENBQTNCOztBQUtBLFNBQVNHLGVBQVQsQ0FBeUIvQyxLQUF6QixFQUFnQ2dELFFBQWhDLEVBQTBDO0FBQ3hDLFNBQU87QUFDTEgsZUFBVzdDLE1BQU02QztBQURaLEdBQVA7QUFHRDs7QUFFRCxTQUFTSSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMbEIsYUFBUywrQkFBbUJuQyxlQUFuQixFQUFvQ3FELFFBQXBDO0FBREosR0FBUDtBQUdEOztrQkFFYyx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDbkQsY0FBN0MsQyIsImZpbGUiOiIwLjIzZmQwMWU4MmEwZGUxOTkyYWJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBUaW55TUNFIGZyb20gJ3JlYWN0LXRpbnltY2UnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBEb2N1bWVudEZvcm0gZnJvbSAnLi9Eb2N1bWVudEZvcm0nO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBNYW5hZ2VEb2N1bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBkb2NUaXRsZTogJycsXG4gICAgICBkb2NDb250ZW50OiAnJyxcbiAgICAgIGFjY2VzczogJycsXG4gICAgICBlZGl0b3I6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tTYXZlID0gdGhpcy5vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRWRpdG9yQ2hhbmdlID0gdGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXRvckNoYW5nZShjb250ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NDb250ZW50OiBjb250ZW50XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY1RpdGxlOiBldmVudC50YXJnZXQudmFsdWUuZG9jVGl0bGUsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC52YWx1ZS5hY2Nlc3NcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIFwic2VsZWN0b3JcIjogXCIjZG9jLXRleHQtYXJlYVwiLFxuICAgICAgXCJwbHVnaW5zXCI6IFwiYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBwcmludCBwcmV2aWV3IHRleHRjb2xvciB0YWJsZSBlbW90aWNvbnMgY29kZXNhbXBsZVwiLFxuICAgICAgXCJ0b29sYmFyXCI6IFwidW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgfCBmb250c2l6ZXNlbGVjdCBmb250c2VsZWN0IHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBmb3JlY29sb3IgYmFja2NvbG9yIHwgdGFibGUgfCBidWxsaXN0IHwgZW1vdGljb25zIHwgY29kZXNhbXBsZVwiLFxuICAgICAgXCJ0YWJsZV90b29sYmFyXCI6IFwidGFibGVwcm9wcyB0YWJsZWRlbGV0ZSB8IHRhYmxlaW5zZXJ0cm93YmVmb3JlIHRhYmxlaW5zZXJ0cm93YWZ0ZXIgdGFibGVkZWxldGVyb3cgfCB0YWJsZWluc2VydGNvbGJlZm9yZSB0YWJsZWluc2VydGNvbGFmdGVyIHRhYmxlZGVsZXRlY29sXCIsXG4gICAgICBcImZvbnRzaXplX2Zvcm1hdHNcIjogXCI4cHQgMTBwdCAxMnB0IDE0cHQgMThwdCAyNHB0IDM2cHRcIlxuICAgIH1cbiAgICB0aW55bWNlLmluaXQoe1xuICAgICAgc2VsZWN0b3I6IFwiI2RvYy10ZXh0LWFyZWFcIixcbiAgICAgIHBsdWdpbnM6IGBhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIFxuICAgICAgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zIGNvZGVzYW1wbGVgLFxuICAgICAgdG9vbGJhcjogYHVuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHwgXG4gICAgICBmb250c2l6ZXNlbGVjdCBmb250c2VsZWN0IHwgXG4gICAgICBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGZvcmVjb2xvciBiYWNrY29sb3IgXG4gICAgICB8IHRhYmxlIHwgYnVsbGlzdCB8IGVtb3RpY29ucyB8IGNvZGVzYW1wbGVgLFxuICAgICAgdGFibGVfdG9vbGJhcjogYHRhYmxlcHJvcHMgdGFibGVkZWxldGUgIFxuICAgICAgfCB0YWJsZWluc2VydHJvd2JlZm9yZSBcbiAgICAgIHRhYmxlaW5zZXJ0cm93YWZ0ZXIgdGFibGVkZWxldGVyb3cgfCB0YWJsZWluc2VydGNvbGJlZm9yZSBcbiAgICAgIHRhYmxlaW5zZXJ0Y29sYWZ0ZXIgdGFibGVkZWxldGVjb2xgLFxuICAgICAgZm9udHNpemVfZm9ybWF0czogJzhwdCAxMHB0IDEycHQgMTRwdCAxOHB0IDI0cHQgMzZwdCcsXG4gICAgICBzZXR1cDogKGVkaXRvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZWRpdG9yIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2tleXVwIGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gZWRpdG9yLmdldENvbnRlbnQoe2Zvcm1hdCA6ICdyYXcnfSk7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2UoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG4gIG9uQ2xpY2tTYXZlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkb2MgPSB7XG4gICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LmRvY1RpdGxlLnZhbHVlLFxuICAgICAgY29udGVudDogdGhpcy5zdGF0ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQuYWNjZXNzLnZhbHVlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRvYylcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuc2F2ZURvY3VtZW50cyhkb2MpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgZG9jdW1lbnREYXRhID0ge1xuICAgICAgZG9jVGl0bGU6ICdoZWxsbycsXG4gICAgICBkb2NDb250ZW50OiB0aGlzLnN0YXRlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IHRoaXMuc3RhdGUuYWNjZXNzLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCByb3dcIj5cbiAgICAgICAgICAgIDxEb2N1bWVudEZvcm1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3RoaXMuc3RhdGUuYWNjZXNzfVxuICAgICAgICAgICAgICBkb2N1bWVudERhdGE9e2RvY3VtZW50RGF0YX1cbiAgICAgICAgICAgICAgb25TYXZlPXt0aGlzLm9uQ2xpY2tTYXZlfVxuICAgICAgICAgICAgICBoYW5kbGVFZGl0b3JDaGFuZ2UgPSB7dGhpcy5oYW5kbGVFZGl0b3JDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuTWFuYWdlRG9jdW1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpb25zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcykge1xuICByZXR1cm4ge1xuICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhkb2N1bWVudEFjdGlvbnMsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1hbmFnZURvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3giXSwic291cmNlUm9vdCI6IiJ9