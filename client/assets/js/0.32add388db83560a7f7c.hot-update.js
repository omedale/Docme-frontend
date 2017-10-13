webpackHotUpdate(0,{

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(52);

var _redux = __webpack_require__(40);

var _NavigationBar = __webpack_require__(38);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _DocumentForm = __webpack_require__(350);

var _DocumentForm2 = _interopRequireDefault(_DocumentForm);

var _SingleInput = __webpack_require__(118);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(119);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(117);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(116);

var documentActions = _interopRequireWildcard(_documentAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateDocument = function (_React$Component) {
  _inherits(CreateDocument, _React$Component);

  function CreateDocument(props) {
    _classCallCheck(this, CreateDocument);

    var _this = _possibleConstructorReturn(this, (CreateDocument.__proto__ || Object.getPrototypeOf(CreateDocument)).call(this, props));

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

  _createClass(CreateDocument, [{
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
        content: event.target.docContent.value
      };
      this.props.actions.createDocument(doc);
    }
  }, {
    key: 'render',
    value: function render() {
      var options = ['Public', 'Private'];
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
              'form',
              { onSubmit: this.onClickSave, className: 'col s12' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react2.default.createElement(_SingleInput2.default, {
                    inputType: 'text',
                    title: 'Title',
                    id: 'docTitle',
                    name: 'docTitle',
                    controlFunc: this.handleChange,
                    content: this.state.docTitle,
                    placeholder: 'Title' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react2.default.createElement(_Select2.default, {
                    name: 'ageRange',
                    id: 'access',
                    title: 'Access',
                    placeholder: 'Choose your age range',
                    controlFunc: this.handleChange,
                    options: this.state.access,
                    selectedOption: this.state.ownerAgeRangeSelection })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement(_TextArea2.default, {
                    title: 'Document Content',
                    rows: 5,
                    resize: false,
                    content: this.state.docContent,
                    name: 'docContent',
                    id: 'docContent',
                    controlFunc: this.handleChange,
                    placeholder: 'Please type your document here' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement(
                    'button',
                    { className: 'pull-right waves-effect waves-light btn' },
                    'Login'
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'waves-effect waves-light btn' },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons left' },
                      'check'
                    ),
                    'button'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CreateDocument;
}(_react2.default.Component);

CreateDocument.propTypes = {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreateDocument);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ManageDocument.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SingleInput = __webpack_require__(118);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(119);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(117);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentForm = function DocumentForm(_ref) {
  var documentData = _ref.documentData,
      options = _ref.options,
      onSave = _ref.onSave,
      loading = _ref.loading,
      onChange = _ref.onChange,
      errors = _ref.errors;

  return _react2.default.createElement(
    'form',
    { onSubmit: undefined.onClickSave, className: 'col s12' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'input-field col s6' },
        _react2.default.createElement(_SingleInput2.default, {
          inputType: 'text',
          title: 'Title',
          id: 'docTitle',
          name: 'docTitle',
          controlFunc: undefined.handleChange,
          content: undefined.state.docTitle,
          placeholder: 'Title' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'input-field col s6' },
        _react2.default.createElement(_Select2.default, {
          name: 'ageRange',
          id: 'access',
          title: 'Access',
          placeholder: 'Choose your age range',
          controlFunc: undefined.handleChange,
          options: undefined.state.access,
          selectedOption: undefined.state.ownerAgeRangeSelection })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'input-field col s12' },
        _react2.default.createElement(_TextArea2.default, {
          title: 'Document Content',
          rows: 5,
          resize: false,
          content: undefined.state.docContent,
          name: 'docContent',
          id: 'docContent',
          controlFunc: undefined.handleChange,
          placeholder: 'Please type your document here' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'input-field col s12' },
        _react2.default.createElement(
          'button',
          { className: 'pull-right waves-effect waves-light btn' },
          'Login'
        ),
        _react2.default.createElement(
          'a',
          { className: 'waves-effect waves-light btn' },
          _react2.default.createElement(
            'i',
            { className: 'material-icons left' },
            'check'
          ),
          'button'
        )
      )
    )
  );
};

DocumentForm.propTypes = {};

exports.default = DocumentForm;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwiQ3JlYXRlRG9jdW1lbnQiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJkb2NUaXRsZSIsImRvY0NvbnRlbnQiLCJhY2Nlc3MiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwib25DbGlja1NhdmUiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImRvYyIsInRpdGxlIiwiY29udGVudCIsImFjdGlvbnMiLCJjcmVhdGVEb2N1bWVudCIsIm9wdGlvbnMiLCJoaXN0b3J5Iiwib3duZXJBZ2VSYW5nZVNlbGVjdGlvbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJkb2N1bWVudHMiLCJhcnJheSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJEb2N1bWVudEZvcm0iLCJkb2N1bWVudERhdGEiLCJvblNhdmUiLCJsb2FkaW5nIiwib25DaGFuZ2UiLCJlcnJvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFhQSxlOzs7Ozs7Ozs7Ozs7SUFFUEMsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGtCQUFZLEVBSEQ7QUFJWEMsY0FBUTtBQUpHLEtBQWI7QUFNQSxV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RTtBQUNFLGdCQUFNLFVBRFI7QUFFRSxjQUFJLFFBRk47QUFHRSxpQkFBTyxRQUhUO0FBSUUsdUJBQWEsdUJBSmY7QUFLRSx1QkFBYSxVQUFLRyxZQUxwQjtBQU1FLG1CQUFTLFVBQUtMLEtBQUwsQ0FBV0ksTUFOdEI7QUFPRSwwQkFBZ0IsVUFBS0osS0FBTCxDQUFXb0Isc0JBUDdCO0FBREY7QUFYRixLQURBO0FBdUJBO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFDRTtBQUNFLGlCQUFPLGtCQURUO0FBRUUsZ0JBQU0sQ0FGUjtBQUdFLGtCQUFRLEtBSFY7QUFJRSxtQkFBUyxVQUFLcEIsS0FBTCxDQUFXRyxVQUp0QjtBQUtFLGdCQUFNLFlBTFI7QUFNRSxjQUFJLFlBTk47QUFPRSx1QkFBYSxVQUFLRSxZQVBwQjtBQVFFLHVCQUFhLGdDQVJmO0FBREY7QUFERixLQXZCQTtBQW9DQTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEI7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBRyxXQUFVLDhCQUFiO0FBQTRDO0FBQUE7QUFBQSxjQUFHLFdBQVUscUJBQWI7QUFBQTtBQUFBLFdBQTVDO0FBQUE7QUFBQTtBQUZGO0FBREY7QUFwQ0EsR0FERjtBQTZDRCxDQTlDRDs7QUFnREEyQixhQUFhVixTQUFiLEdBQXlCLEVBQXpCOztrQkFJZVUsWSIsImZpbGUiOiIwLjMyYWRkMzg4ZGI4MzU2MGE3ZjdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBEb2N1bWVudEZvcm0gZnJvbSAnLi9Eb2N1bWVudEZvcm0nO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBDcmVhdGVEb2N1bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBkb2NUaXRsZTogJycsXG4gICAgICBkb2NDb250ZW50OiAnJyxcbiAgICAgIGFjY2VzczogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tTYXZlID0gdGhpcy5vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NUaXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC52YWx1ZS5hY2Nlc3NcbiAgICB9KTtcbiAgfVxuXG5cbiAgb25DbGlja1NhdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRvYyA9IHtcbiAgICAgIHRpdGxlOiBldmVudC50YXJnZXQuZG9jVGl0bGUudmFsdWUsXG4gICAgICBjb250ZW50OiBldmVudC50YXJnZXQuZG9jQ29udGVudC52YWx1ZVxuICAgIH1cbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuY3JlYXRlRG9jdW1lbnQoZG9jKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBvcHRpb25zID0gWydQdWJsaWMnLCAnUHJpdmF0ZSddXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb25CYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGgzPkFkZCBEb2N1bWVudDwvaDM+XG5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uQ2xpY2tTYXZlfSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxTaW5nbGVJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU9eyd0ZXh0J31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydUaXRsZSd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnZG9jVGl0bGUnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsnZG9jVGl0bGUnfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZG9jVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydhZ2VSYW5nZSd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnYWNjZXNzJ31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydBY2Nlc3MnfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J0Nob29zZSB5b3VyIGFnZSByYW5nZSd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5hY2Nlc3N9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLm93bmVyQWdlUmFuZ2VTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnRG9jdW1lbnQgQ29udGVudCd9XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZG9jQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgICAgICAgICAgICBpZD17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnUGxlYXNlIHR5cGUgeW91ciBkb2N1bWVudCBoZXJlJ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbGVmdFwiPmNoZWNrPC9pPmJ1dHRvbjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuQ3JlYXRlRG9jdW1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpb25zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyl7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHMgXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhkb2N1bWVudEFjdGlvbnMsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENyZWF0ZURvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5cbmNvbnN0IERvY3VtZW50Rm9ybSA9ICh7ZG9jdW1lbnREYXRhLCBvcHRpb25zLCBvblNhdmUsIGxvYWRpbmcsIG9uQ2hhbmdlLCBlcnJvcnN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25DbGlja1NhdmV9IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgPFNpbmdsZUlucHV0XG4gICAgICAgICAgaW5wdXRUeXBlPXsndGV4dCd9XG4gICAgICAgICAgdGl0bGU9eydUaXRsZSd9XG4gICAgICAgICAgaWQ9eydkb2NUaXRsZSd9XG4gICAgICAgICAgbmFtZT17J2RvY1RpdGxlJ31cbiAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5kb2NUaXRsZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J1RpdGxlJ30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hbWU9eydhZ2VSYW5nZSd9XG4gICAgICAgICAgaWQ9eydhY2Nlc3MnfVxuICAgICAgICAgIHRpdGxlPXsnQWNjZXNzJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J0Nob29zZSB5b3VyIGFnZSByYW5nZSd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuYWNjZXNzfVxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLm93bmVyQWdlUmFuZ2VTZWxlY3Rpb259IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIHRpdGxlPXsnRG9jdW1lbnQgQ29udGVudCd9XG4gICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICByZXNpemU9e2ZhbHNlfVxuICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZG9jQ29udGVudH1cbiAgICAgICAgICBuYW1lPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgaWQ9eydkb2NDb250ZW50J31cbiAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydQbGVhc2UgdHlwZSB5b3VyIGRvY3VtZW50IGhlcmUnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbiAgKVxufVxuXG5Eb2N1bWVudEZvcm0ucHJvcFR5cGVzID0ge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50Rm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50Rm9ybS5qc3giXSwic291cmNlUm9vdCI6IiJ9