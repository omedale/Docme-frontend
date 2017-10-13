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
      documents: {},
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
      var field = event.target.name;
      var document = this.state.documents;
      document[field] = event.target.value;
      console.log(document);
      // this.props.actions.createDocument(doc);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJDcmVhdGVEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJkb2N1bWVudHMiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwidGl0bGUiLCJjb250ZW50IiwiZmllbGQiLCJuYW1lIiwiZG9jdW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnREYXRhIiwiaGlzdG9yeSIsIm93bmVyQWdlUmFuZ2VTZWxlY3Rpb24iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJhY3Rpb25zIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5IiwibWFwU3RhdGVUb1Byb3BzIiwib3duUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxjOzs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsRUFEQTtBQUVYQyxhQUFPLEVBRkk7QUFHWEMsZ0JBQVUsRUFIQztBQUlYQyxrQkFBWSxFQUpEO0FBS1hDLGNBQVE7QUFMRyxLQUFiO0FBT0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FB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O0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQUcsV0FBVSw4QkFBYjtBQUE0QztBQUFBO0FBQUEsd0JBQUcsV0FBVSxxQkFBYjtBQUFBO0FBQUEscUJBQTVDO0FBQUE7QUFBQTtBQUZGO0FBREY7QUFwQ0Y7QUFSRjtBQURGO0FBSkYsT0FERjtBQTZERDs7OztFQXhHMEIsZ0JBQU1tQixTOztBQTBHbkMzQixlQUFlNEIsU0FBZixHQUEyQjtBQUN6QkMsV0FBUyxnQkFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFA7QUFFekI3QixhQUFXLGdCQUFNMkIsU0FBTixDQUFnQkcsS0FBaEIsQ0FBc0JEO0FBRlIsQ0FBM0I7O0FBS0EsU0FBU0UsZUFBVCxDQUF5QmhDLEtBQXpCLEVBQWdDaUMsUUFBaEMsRUFBeUM7QUFDdkMsU0FBTztBQUNMaEMsZUFBV0QsTUFBTUM7QUFEWixHQUFQO0FBR0Q7O0FBRUQsU0FBU2lDLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxTQUFPO0FBQ0xSLGFBQVMsK0JBQW1COUIsZUFBbkIsRUFBb0NzQyxRQUFwQztBQURKLEdBQVA7QUFHRDs7a0JBRWMseUJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q3BDLGNBQTdDLEMiLCJmaWxlIjoiMC40NTBiNGFjNmJjMjg2ZDI3MWM3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgRG9jdW1lbnRGb3JtIGZyb20gJy4vRG9jdW1lbnRGb3JtJztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJztcblxuY2xhc3MgQ3JlYXRlRG9jdW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZG9jdW1lbnRzOiB7fSxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGRvY1RpdGxlOiAnJyxcbiAgICAgIGRvY0NvbnRlbnQ6ICcnLFxuICAgICAgYWNjZXNzOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1NhdmUgPSB0aGlzLm9uQ2xpY2tTYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY1RpdGxlOiBldmVudC50YXJnZXQudmFsdWUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiBldmVudC50YXJnZXQudmFsdWUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LnZhbHVlLmFjY2Vzc1xuICAgIH0pO1xuICB9XG5cblxuICBvbkNsaWNrU2F2ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgdGl0bGU6IGV2ZW50LnRhcmdldC5kb2NUaXRsZS52YWx1ZSxcbiAgICAgIGNvbnRlbnQ6IGV2ZW50LnRhcmdldC5kb2NDb250ZW50LnZhbHVlXG4gICAgfVxuICAgIGNvbnN0IGZpZWxkID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgbGV0IGRvY3VtZW50ID0gdGhpcy5zdGF0ZS5kb2N1bWVudHNcbiAgICBkb2N1bWVudFtmaWVsZF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQpXG4gICAgLy8gdGhpcy5wcm9wcy5hY3Rpb25zLmNyZWF0ZURvY3VtZW50KGRvYyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgY29uc3QgZG9jdW1lbnREYXRhID0ge1xuICAgICAgZG9jVGl0bGU6IHRoaXMuc3RhdGUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiB0aGlzLnN0YXRlLmRvY0NvbnRlbnQsXG4gICAgICBhY2Nlc3M6IHRoaXMuc3RhdGUuYWNjZXNzLFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDM+QWRkIERvY3VtZW50PC9oMz5cbiAgICAgICAgICAgIDxEb2N1bWVudEZvcm1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLmFjY2Vzc31cbiAgICAgICAgICAgIGRvY3VtZW50RGF0YT17ZG9jdW1lbnREYXRhfVxuICAgICAgICAgICAgb25TYXZlPXt0aGlzLm9uQ2xpY2tTYXZlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uQ2xpY2tTYXZlfSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxTaW5nbGVJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU9eyd0ZXh0J31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydUaXRsZSd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnZG9jVGl0bGUnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsnZG9jVGl0bGUnfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZG9jVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydhZ2VSYW5nZSd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnYWNjZXNzJ31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydBY2Nlc3MnfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J0Nob29zZSB5b3VyIGFnZSByYW5nZSd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5hY2Nlc3N9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLm93bmVyQWdlUmFuZ2VTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnRG9jdW1lbnQgQ29udGVudCd9XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZG9jQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgICAgICAgICAgICBpZD17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnUGxlYXNlIHR5cGUgeW91ciBkb2N1bWVudCBoZXJlJ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbGVmdFwiPmNoZWNrPC9pPmJ1dHRvbjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuQ3JlYXRlRG9jdW1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpb25zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyl7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHMgXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhkb2N1bWVudEFjdGlvbnMsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENyZWF0ZURvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3giXSwic291cmNlUm9vdCI6IiJ9