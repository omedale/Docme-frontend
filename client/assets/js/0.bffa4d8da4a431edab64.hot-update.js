webpackHotUpdate(0,{

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SingleInput = __webpack_require__(60);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(61);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(59);

var _Select2 = _interopRequireDefault(_Select);

var _TinyMceEditor = __webpack_require__(295);

var _TinyMceEditor2 = _interopRequireDefault(_TinyMceEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentForm = function DocumentForm(_ref) {
  var documentData = _ref.documentData,
      selectedOption = _ref.selectedOption,
      onSave = _ref.onSave,
      handleEditorChange = _ref.handleEditorChange,
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
  $(document).ready(function () {
    $('select').material_select();
  });
  tinymce.init({ selector: 'textarea' });
  _TinyMceEditor2.default.activeEditor.setContent('custom');
  console.log(documentData.docContent);
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
          controlFunc: onChange,
          selectedOption: selectedOption,
          docAccess: options
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'input-field col s12' },
        _react2.default.createElement(_TinyMceEditor2.default, {
          defaultValue: documentData.docContent,
          id: 'createDoc',
          handleEditorChange: handleEditorChange
        })
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
          'Save'
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJvbkNoYW5nZSIsImFjY2Vzc1R5cGUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJpZCIsInZhbHVlIiwiYWNjZXNzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJtYXRlcmlhbF9zZWxlY3QiLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwiYWN0aXZlRWRpdG9yIiwic2V0Q29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJkb2NDb250ZW50IiwiZG9jVGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUE0RTtBQUFBLE1BQXpFQyxZQUF5RSxRQUF6RUEsWUFBeUU7QUFBQSxNQUEzREMsY0FBMkQsUUFBM0RBLGNBQTJEO0FBQUEsTUFBM0NDLE1BQTJDLFFBQTNDQSxNQUEyQztBQUFBLE1BQW5DQyxrQkFBbUMsUUFBbkNBLGtCQUFtQztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDL0YsTUFBSUMsYUFBYSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBQWpCO0FBQ0EsTUFBTUMsVUFBVUQsV0FBV0UsR0FBWCxDQUFlLGtCQUFVO0FBQ3ZDLFFBQUlDLFFBQVEsQ0FBWjtBQUNBLFdBQU87QUFDTEMsVUFBSUQsS0FEQztBQUVMRSxhQUFPQztBQUZGLEtBQVA7QUFJQUg7QUFDRCxHQVBlLENBQWhCO0FBUUFJLElBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCRixNQUFFLFFBQUYsRUFBWUcsZUFBWjtBQUNELEdBRkQ7QUFHQUMsVUFBUUMsSUFBUixDQUFhLEVBQUNDLFVBQVMsVUFBVixFQUFiO0FBQ0EsMEJBQWNDLFlBQWQsQ0FBMkJDLFVBQTNCLENBQXNDLFFBQXRDO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWXRCLGFBQWF1QixVQUF6QjtBQUNBLFNBQ0U7QUFBQTtBQUFBLE1BQU0sVUFBVXJCLE1BQWhCLEVBQXdCLFdBQVUsU0FBbEM7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxxQkFBVyxNQURiO0FBRUUsaUJBQU8sT0FGVDtBQUdFLGNBQUksVUFITjtBQUlFLGdCQUFNLFVBSlI7QUFLRSx1QkFBYUUsUUFMZjtBQU1FLG1CQUFTSixhQUFhd0IsUUFOeEI7QUFPRSx1QkFBYSxPQVBmO0FBREYsT0FERjtBQVdFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUNFLGdCQUFNLFFBRFI7QUFFRSxjQUFJLFFBRk47QUFHRSxpQkFBTyxRQUhUO0FBSUUsdUJBQWFwQixRQUpmO0FBS0UsMEJBQWdCSCxjQUxsQjtBQU1FLHFCQUFXSztBQU5iO0FBREY7QUFYRixLQURGO0FBd0JFO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFDRTtBQUNFLHdCQUFjTixhQUFhdUIsVUFEN0I7QUFFRSxjQUFJLFdBRk47QUFHRSw4QkFBb0JwQjtBQUh0QjtBQURGO0FBREYsS0F4QkY7QUFpQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUseUNBQWxCO0FBQUE7QUFBQTtBQURGO0FBREY7QUFqQ0YsR0FERjtBQXlDRCxDQXpERDs7QUEyREFKLGFBQWEwQixTQUFiLEdBQXlCO0FBQ3ZCekIsZ0JBQWMsZ0JBQU0wQixTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEZDtBQUV2QjFCLFVBQVEsZ0JBQU13QixTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQsVUFGTjtBQUd2QnhCLFlBQVUsZ0JBQU1zQixTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQ7QUFIUixDQUF6Qjs7a0JBTWU3QixZIiwiZmlsZSI6IjAuYmZmYTRkOGRhNGE0MzFlZGFiNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCBUaW55TWNlRWRpdG9yIGZyb20gJy4vVGlueU1jZUVkaXRvcic7XG5cbmNvbnN0IERvY3VtZW50Rm9ybSA9ICh7IGRvY3VtZW50RGF0YSwgc2VsZWN0ZWRPcHRpb24sIG9uU2F2ZSwgaGFuZGxlRWRpdG9yQ2hhbmdlLCBvbkNoYW5nZSB9KSA9PiB7XG4gIGxldCBhY2Nlc3NUeXBlID0gWydQdWJsaWMnLCAnUHJpdmF0ZSddO1xuICBjb25zdCBvcHRpb25zID0gYWNjZXNzVHlwZS5tYXAoYWNjZXNzID0+IHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBpbmRleCxcbiAgICAgIHZhbHVlOiBhY2Nlc3NcbiAgICB9XG4gICAgaW5kZXgrK1xuICB9KVxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJCgnc2VsZWN0JykubWF0ZXJpYWxfc2VsZWN0KCk7XG4gIH0pO1xuICB0aW55bWNlLmluaXQoe3NlbGVjdG9yOid0ZXh0YXJlYSd9KTtcbiAgVGlueU1jZUVkaXRvci5hY3RpdmVFZGl0b3Iuc2V0Q29udGVudCgnY3VzdG9tJylcbiAgY29uc29sZS5sb2coZG9jdW1lbnREYXRhLmRvY0NvbnRlbnQpXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU2F2ZX0gY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICA8U2luZ2xlSW5wdXRcbiAgICAgICAgICAgIGlucHV0VHlwZT17J3RleHQnfVxuICAgICAgICAgICAgdGl0bGU9eydUaXRsZSd9XG4gICAgICAgICAgICBpZD17J2RvY1RpdGxlJ31cbiAgICAgICAgICAgIG5hbWU9eydkb2NUaXRsZSd9XG4gICAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgICBjb250ZW50PXtkb2N1bWVudERhdGEuZG9jVGl0bGV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17J1RpdGxlJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbmFtZT17J2FjY2Vzcyd9XG4gICAgICAgICAgICBpZD17J2FjY2Vzcyd9XG4gICAgICAgICAgICB0aXRsZT17J0FjY2Vzcyd9XG4gICAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICBkb2NBY2Nlc3M9e29wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgPFRpbnlNY2VFZGl0b3JcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZG9jdW1lbnREYXRhLmRvY0NvbnRlbnR9XG4gICAgICAgICAgICBpZD17J2NyZWF0ZURvYyd9XG4gICAgICAgICAgICBoYW5kbGVFZGl0b3JDaGFuZ2U9e2hhbmRsZUVkaXRvckNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj5TYXZlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbkRvY3VtZW50Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50RGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvblNhdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==