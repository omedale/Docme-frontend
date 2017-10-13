webpackHotUpdate(0,{

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
      selectedOption = _ref.selectedOption,
      onSave = _ref.onSave,
      onChange = _ref.onChange;

  var accessType = ['Public', 'Private'];
  console.log(accessType);
  accessType.map;
  return _react2.default.createElement(
    'form',
    { onSubmit: onSave, className: 'col s12' },
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
          controlFunc: onChange,
          content: documentData.docTitle,
          placeholder: 'Title' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'input-field col s6' },
        _react2.default.createElement(_Select2.default, {
          name: 'access',
          id: 'access',
          title: 'Access',
          placeholder: 'Choose access',
          controlFunc: onChange,
          docAccess: accessType,
          selectedOption: selectedOption })
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
          content: documentData.docContent,
          name: 'docContent',
          id: 'docContent',
          controlFunc: onChange,
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

DocumentForm.propTypes = {
  documentData: _react2.default.PropTypes.object.isRequired,
  onSave: _react2.default.PropTypes.func.isRequired,
  onChange: _react2.default.PropTypes.func.isRequired
};

exports.default = DocumentForm;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJvbkNoYW5nZSIsImFjY2Vzc1R5cGUiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiZG9jVGl0bGUiLCJkb2NDb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLE9BQXNEO0FBQUEsTUFBcERDLFlBQW9ELFFBQXBEQSxZQUFvRDtBQUFBLE1BQXRDQyxjQUFzQyxRQUF0Q0EsY0FBc0M7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUN6RSxNQUFJQyxhQUFhLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FBakI7QUFDQUMsVUFBUUMsR0FBUixDQUFZRixVQUFaO0FBQ0FBLGFBQVdHLEdBQVg7QUFDQSxTQUNFO0FBQUE7QUFBQSxNQUFNLFVBQVVMLE1BQWhCLEVBQXdCLFdBQVUsU0FBbEM7QUFDQTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxxQkFBVyxNQURiO0FBRUUsaUJBQU8sT0FGVDtBQUdFLGNBQUksVUFITjtBQUlFLGdCQUFNLFVBSlI7QUFLRSx1QkFBYUMsUUFMZjtBQU1FLG1CQUFTSCxhQUFhUSxRQU54QjtBQU9FLHVCQUFhLE9BUGY7QUFERixPQURGO0FBV0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNFO0FBQ0UsZ0JBQU0sUUFEUjtBQUVFLGNBQUksUUFGTjtBQUdFLGlCQUFPLFFBSFQ7QUFJRSx1QkFBYSxlQUpmO0FBS0UsdUJBQWFMLFFBTGY7QUFNRSxxQkFBV0MsVUFOYjtBQU9FLDBCQUFnQkgsY0FQbEI7QUFERjtBQVhGLEtBREE7QUF1QkE7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQ0UsaUJBQU8sa0JBRFQ7QUFFRSxnQkFBTSxDQUZSO0FBR0Usa0JBQVEsS0FIVjtBQUlFLG1CQUFTRCxhQUFhUyxVQUp4QjtBQUtFLGdCQUFNLFlBTFI7QUFNRSxjQUFJLFlBTk47QUFPRSx1QkFBYU4sUUFQZjtBQVFFLHVCQUFhLGdDQVJmO0FBREY7QUFERixLQXZCQTtBQW9DQTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEI7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBRyxXQUFVLDhCQUFiO0FBQTRDO0FBQUE7QUFBQSxjQUFHLFdBQVUscUJBQWI7QUFBQTtBQUFBLFdBQTVDO0FBQUE7QUFBQTtBQUZGO0FBREY7QUFwQ0EsR0FERjtBQTZDRCxDQWpERDs7QUFtREFKLGFBQWFXLFNBQWIsR0FBeUI7QUFDdkJWLGdCQUFjLGdCQUFNVyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEZDtBQUV2QlgsVUFBUSxnQkFBTVMsU0FBTixDQUFnQkcsSUFBaEIsQ0FBcUJELFVBRk47QUFHdkJWLFlBQVUsZ0JBQU1RLFNBQU4sQ0FBZ0JHLElBQWhCLENBQXFCRDtBQUhSLENBQXpCOztrQkFNZWQsWSIsImZpbGUiOiIwLmE1N2M3OWIwZTA5MjViNmE4ODJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5cbmNvbnN0IERvY3VtZW50Rm9ybSA9ICh7ZG9jdW1lbnREYXRhLCBzZWxlY3RlZE9wdGlvbiwgb25TYXZlLCBvbkNoYW5nZX0pID0+IHtcbiAgbGV0IGFjY2Vzc1R5cGUgPSBbJ1B1YmxpYycsICdQcml2YXRlJ107XG4gIGNvbnNvbGUubG9nKGFjY2Vzc1R5cGUpXG4gIGFjY2Vzc1R5cGUubWFwXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU2F2ZX0gY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICA8U2luZ2xlSW5wdXRcbiAgICAgICAgICBpbnB1dFR5cGU9eyd0ZXh0J31cbiAgICAgICAgICB0aXRsZT17J1RpdGxlJ31cbiAgICAgICAgICBpZD17J2RvY1RpdGxlJ31cbiAgICAgICAgICBuYW1lPXsnZG9jVGl0bGUnfVxuICAgICAgICAgIGNvbnRyb2xGdW5jPXtvbkNoYW5nZX1cbiAgICAgICAgICBjb250ZW50PXtkb2N1bWVudERhdGEuZG9jVGl0bGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydUaXRsZSd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPXsnYWNjZXNzJ31cbiAgICAgICAgICBpZD17J2FjY2Vzcyd9XG4gICAgICAgICAgdGl0bGU9eydBY2Nlc3MnfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsnQ2hvb3NlIGFjY2Vzcyd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgIGRvY0FjY2Vzcz17YWNjZXNzVHlwZX1cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17c2VsZWN0ZWRPcHRpb259IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIHRpdGxlPXsnRG9jdW1lbnQgQ29udGVudCd9XG4gICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICByZXNpemU9e2ZhbHNlfVxuICAgICAgICAgIGNvbnRlbnQ9e2RvY3VtZW50RGF0YS5kb2NDb250ZW50fVxuICAgICAgICAgIG5hbWU9eydkb2NDb250ZW50J31cbiAgICAgICAgICBpZD17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgIGNvbnRyb2xGdW5jPXtvbkNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J1BsZWFzZSB0eXBlIHlvdXIgZG9jdW1lbnQgaGVyZSd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGxlZnRcIj5jaGVjazwvaT5idXR0b248L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuICApXG59XG5cbkRvY3VtZW50Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50RGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvblNhdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==