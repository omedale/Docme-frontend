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
  var options = accessType.map(function (access) {
    var index = 0;
    return {
      id: index,
      value: access
    };
    index++;
  });
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
          docAccess: options,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJvbkNoYW5nZSIsImFjY2Vzc1R5cGUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJpZCIsInZhbHVlIiwiYWNjZXNzIiwiZG9jVGl0bGUiLCJkb2NDb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLE9BQXNEO0FBQUEsTUFBcERDLFlBQW9ELFFBQXBEQSxZQUFvRDtBQUFBLE1BQXRDQyxjQUFzQyxRQUF0Q0EsY0FBc0M7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUN6RSxNQUFJQyxhQUFhLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FBakI7QUFDQSxNQUFNQyxVQUFVRCxXQUFXRSxHQUFYLENBQWUsa0JBQVU7QUFDdkMsUUFBSUMsUUFBUSxDQUFaO0FBQ0EsV0FBTztBQUNMQyxVQUFJRCxLQURDO0FBRUxFLGFBQU9DO0FBRkYsS0FBUDtBQUlBSDtBQUNELEdBUGUsQ0FBaEI7QUFRQSxTQUNFO0FBQUE7QUFBQSxNQUFNLFVBQVVMLE1BQWhCLEVBQXdCLFdBQVUsU0FBbEM7QUFDQTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxxQkFBVyxNQURiO0FBRUUsaUJBQU8sT0FGVDtBQUdFLGNBQUksVUFITjtBQUlFLGdCQUFNLFVBSlI7QUFLRSx1QkFBYUMsUUFMZjtBQU1FLG1CQUFTSCxhQUFhVyxRQU54QjtBQU9FLHVCQUFhLE9BUGY7QUFERixPQURGO0FBV0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNFO0FBQ0UsZ0JBQU0sUUFEUjtBQUVFLGNBQUksUUFGTjtBQUdFLGlCQUFPLFFBSFQ7QUFJRSx1QkFBYSxlQUpmO0FBS0UsdUJBQWFSLFFBTGY7QUFNRSxxQkFBV0UsT0FOYjtBQU9FLDBCQUFnQkosY0FQbEI7QUFERjtBQVhGLEtBREE7QUF1QkE7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQ0UsaUJBQU8sa0JBRFQ7QUFFRSxnQkFBTSxDQUZSO0FBR0Usa0JBQVEsS0FIVjtBQUlFLG1CQUFTRCxhQUFhWSxVQUp4QjtBQUtFLGdCQUFNLFlBTFI7QUFNRSxjQUFJLFlBTk47QUFPRSx1QkFBYVQsUUFQZjtBQVFFLHVCQUFhLGdDQVJmO0FBREY7QUFERixLQXZCQTtBQW9DQTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEI7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBRyxXQUFVLDhCQUFiO0FBQTRDO0FBQUE7QUFBQSxjQUFHLFdBQVUscUJBQWI7QUFBQTtBQUFBLFdBQTVDO0FBQUE7QUFBQTtBQUZGO0FBREY7QUFwQ0EsR0FERjtBQTZDRCxDQXZERDs7QUF5REFKLGFBQWFjLFNBQWIsR0FBeUI7QUFDdkJiLGdCQUFjLGdCQUFNYyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEZDtBQUV2QmQsVUFBUSxnQkFBTVksU0FBTixDQUFnQkcsSUFBaEIsQ0FBcUJELFVBRk47QUFHdkJiLFlBQVUsZ0JBQU1XLFNBQU4sQ0FBZ0JHLElBQWhCLENBQXFCRDtBQUhSLENBQXpCOztrQkFNZWpCLFkiLCJmaWxlIjoiMC4wZTY0N2M5ZTdiNjY2YTQ0OTM1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuXG5jb25zdCBEb2N1bWVudEZvcm0gPSAoe2RvY3VtZW50RGF0YSwgc2VsZWN0ZWRPcHRpb24sIG9uU2F2ZSwgb25DaGFuZ2V9KSA9PiB7XG4gIGxldCBhY2Nlc3NUeXBlID0gWydQdWJsaWMnLCAnUHJpdmF0ZSddO1xuICBjb25zdCBvcHRpb25zID0gYWNjZXNzVHlwZS5tYXAoYWNjZXNzID0+IHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpbmRleCxcbiAgICAgIHZhbHVlOiBhY2Nlc3NcbiAgICB9XG4gICAgaW5kZXggKytcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TYXZlfSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgIDxTaW5nbGVJbnB1dFxuICAgICAgICAgIGlucHV0VHlwZT17J3RleHQnfVxuICAgICAgICAgIHRpdGxlPXsnVGl0bGUnfVxuICAgICAgICAgIGlkPXsnZG9jVGl0bGUnfVxuICAgICAgICAgIG5hbWU9eydkb2NUaXRsZSd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgIGNvbnRlbnQ9e2RvY3VtZW50RGF0YS5kb2NUaXRsZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J1RpdGxlJ30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hbWU9eydhY2Nlc3MnfVxuICAgICAgICAgIGlkPXsnYWNjZXNzJ31cbiAgICAgICAgICB0aXRsZT17J0FjY2Vzcyd9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydDaG9vc2UgYWNjZXNzJ31cbiAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgZG9jQWNjZXNzPXtvcHRpb25zfVxuICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXtzZWxlY3RlZE9wdGlvbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgdGl0bGU9eydEb2N1bWVudCBDb250ZW50J31cbiAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgIHJlc2l6ZT17ZmFsc2V9XG4gICAgICAgICAgY29udGVudD17ZG9jdW1lbnREYXRhLmRvY0NvbnRlbnR9XG4gICAgICAgICAgbmFtZT17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgIGlkPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsnUGxlYXNlIHR5cGUgeW91ciBkb2N1bWVudCBoZXJlJ30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbGVmdFwiPmNoZWNrPC9pPmJ1dHRvbjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG4gIClcbn1cblxuRG9jdW1lbnRGb3JtLnByb3BUeXBlcyA9IHtcbiAgZG9jdW1lbnREYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9uU2F2ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50Rm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50Rm9ybS5qc3giXSwic291cmNlUm9vdCI6IiJ9