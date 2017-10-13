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
      options = _ref.options,
      onSave = _ref.onSave,
      onChange = _ref.onChange;

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
          controlFunc: undefined.handleChange,
          content: documentData.docTitle,
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
          options: documentData.access,
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

DocumentForm.propTypes = {
  documentData: _react2.default.PropTypes.object.isRequired,
  options: _react2.default.PropTypes.array,
  onSave: _react2.default.PropTypes.func.isRequired,
  onChange: _react2.default.PropTypes.func.isRequired
};

exports.default = DocumentForm;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwib3B0aW9ucyIsIm9uU2F2ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwiZG9jVGl0bGUiLCJhY2Nlc3MiLCJzdGF0ZSIsIm93bmVyQWdlUmFuZ2VTZWxlY3Rpb24iLCJkb2NDb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBK0M7QUFBQSxNQUE3Q0MsWUFBNkMsUUFBN0NBLFlBQTZDO0FBQUEsTUFBL0JDLE9BQStCLFFBQS9CQSxPQUErQjtBQUFBLE1BQXRCQyxNQUFzQixRQUF0QkEsTUFBc0I7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQ2xFLFNBQ0U7QUFBQTtBQUFBLE1BQU0sVUFBVUQsTUFBaEIsRUFBd0IsV0FBVSxTQUFsQztBQUNBO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUNFLHFCQUFXLE1BRGI7QUFFRSxpQkFBTyxPQUZUO0FBR0UsY0FBSSxVQUhOO0FBSUUsZ0JBQU0sVUFKUjtBQUtFLHVCQUFhLFVBQUtFLFlBTHBCO0FBTUUsbUJBQVNKLGFBQWFLLFFBTnhCO0FBT0UsdUJBQWEsT0FQZjtBQURGLE9BREY7QUFXRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxnQkFBTSxVQURSO0FBRUUsY0FBSSxRQUZOO0FBR0UsaUJBQU8sUUFIVDtBQUlFLHVCQUFhLHVCQUpmO0FBS0UsdUJBQWEsVUFBS0QsWUFMcEI7QUFNRSxtQkFBU0osYUFBYU0sTUFOeEI7QUFPRSwwQkFBZ0IsVUFBS0MsS0FBTCxDQUFXQyxzQkFQN0I7QUFERjtBQVhGLEtBREE7QUF1QkE7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQ0UsaUJBQU8sa0JBRFQ7QUFFRSxnQkFBTSxDQUZSO0FBR0Usa0JBQVEsS0FIVjtBQUlFLG1CQUFTLFVBQUtELEtBQUwsQ0FBV0UsVUFKdEI7QUFLRSxnQkFBTSxZQUxSO0FBTUUsY0FBSSxZQU5OO0FBT0UsdUJBQWEsVUFBS0wsWUFQcEI7QUFRRSx1QkFBYSxnQ0FSZjtBQURGO0FBREYsS0F2QkE7QUFvQ0E7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUseUNBQWxCO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUcsV0FBVSw4QkFBYjtBQUE0QztBQUFBO0FBQUEsY0FBRyxXQUFVLHFCQUFiO0FBQUE7QUFBQSxXQUE1QztBQUFBO0FBQUE7QUFGRjtBQURGO0FBcENBLEdBREY7QUE2Q0QsQ0E5Q0Q7O0FBZ0RBTCxhQUFhVyxTQUFiLEdBQXlCO0FBQ3ZCVixnQkFBYyxnQkFBTVcsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRGQ7QUFFdkJaLFdBQVMsZ0JBQU1VLFNBQU4sQ0FBZ0JHLEtBRkY7QUFHdkJaLFVBQVEsZ0JBQU1TLFNBQU4sQ0FBZ0JJLElBQWhCLENBQXFCRixVQUhOO0FBSXZCVixZQUFVLGdCQUFNUSxTQUFOLENBQWdCSSxJQUFoQixDQUFxQkY7QUFKUixDQUF6Qjs7a0JBT2VkLFkiLCJmaWxlIjoiMC5kZTdiZTA1MDk3MzlhMmQxYTExMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuXG5jb25zdCBEb2N1bWVudEZvcm0gPSAoe2RvY3VtZW50RGF0YSwgb3B0aW9ucywgb25TYXZlLCBvbkNoYW5nZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TYXZlfSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgIDxTaW5nbGVJbnB1dFxuICAgICAgICAgIGlucHV0VHlwZT17J3RleHQnfVxuICAgICAgICAgIHRpdGxlPXsnVGl0bGUnfVxuICAgICAgICAgIGlkPXsnZG9jVGl0bGUnfVxuICAgICAgICAgIG5hbWU9eydkb2NUaXRsZSd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGNvbnRlbnQ9e2RvY3VtZW50RGF0YS5kb2NUaXRsZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J1RpdGxlJ30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hbWU9eydhZ2VSYW5nZSd9XG4gICAgICAgICAgaWQ9eydhY2Nlc3MnfVxuICAgICAgICAgIHRpdGxlPXsnQWNjZXNzJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J0Nob29zZSB5b3VyIGFnZSByYW5nZSd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9wdGlvbnM9e2RvY3VtZW50RGF0YS5hY2Nlc3N9XG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3RoaXMuc3RhdGUub3duZXJBZ2VSYW5nZVNlbGVjdGlvbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgdGl0bGU9eydEb2N1bWVudCBDb250ZW50J31cbiAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgIHJlc2l6ZT17ZmFsc2V9XG4gICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5kb2NDb250ZW50fVxuICAgICAgICAgIG5hbWU9eydkb2NDb250ZW50J31cbiAgICAgICAgICBpZD17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J1BsZWFzZSB0eXBlIHlvdXIgZG9jdW1lbnQgaGVyZSd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGxlZnRcIj5jaGVjazwvaT5idXR0b248L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuICApXG59XG5cbkRvY3VtZW50Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50RGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIG9uU2F2ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50Rm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50Rm9ybS5qc3giXSwic291cmNlUm9vdCI6IiJ9