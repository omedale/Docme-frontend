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
          mode: documentData.docContent,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJvbkNoYW5nZSIsImFjY2Vzc1R5cGUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJpZCIsInZhbHVlIiwiYWNjZXNzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJtYXRlcmlhbF9zZWxlY3QiLCJkb2NUaXRsZSIsImRvY0NvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUE0RTtBQUFBLE1BQXpFQyxZQUF5RSxRQUF6RUEsWUFBeUU7QUFBQSxNQUEzREMsY0FBMkQsUUFBM0RBLGNBQTJEO0FBQUEsTUFBM0NDLE1BQTJDLFFBQTNDQSxNQUEyQztBQUFBLE1BQW5DQyxrQkFBbUMsUUFBbkNBLGtCQUFtQztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDL0YsTUFBSUMsYUFBYSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBQWpCO0FBQ0EsTUFBTUMsVUFBVUQsV0FBV0UsR0FBWCxDQUFlLGtCQUFVO0FBQ3ZDLFFBQUlDLFFBQVEsQ0FBWjtBQUNBLFdBQU87QUFDTEMsVUFBSUQsS0FEQztBQUVMRSxhQUFPQztBQUZGLEtBQVA7QUFJQUg7QUFDRCxHQVBlLENBQWhCO0FBUUFJLElBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCRixNQUFFLFFBQUYsRUFBWUcsZUFBWjtBQUNELEdBRkQ7QUFHQSxTQUNFO0FBQUE7QUFBQSxNQUFNLFVBQVViLE1BQWhCLEVBQXdCLFdBQVUsU0FBbEM7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxxQkFBVyxNQURiO0FBRUUsaUJBQU8sT0FGVDtBQUdFLGNBQUksVUFITjtBQUlFLGdCQUFNLFVBSlI7QUFLRSx1QkFBYUUsUUFMZjtBQU1FLG1CQUFTSixhQUFhZ0IsUUFOeEI7QUFPRSx1QkFBYSxPQVBmO0FBREYsT0FERjtBQVdFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUNFLGdCQUFNLFFBRFI7QUFFRSxjQUFJLFFBRk47QUFHRSxpQkFBTyxRQUhUO0FBSUUsdUJBQWFaLFFBSmY7QUFLRSwwQkFBZ0JILGNBTGxCO0FBTUUscUJBQVdLO0FBTmI7QUFERjtBQVhGLEtBREY7QUF3QkU7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQ0Usd0JBQWNOLGFBQWFpQixVQUQ3QjtBQUVFLGNBQUksV0FGTjtBQUdFLGdCQUFRakIsYUFBYWlCLFVBSHZCO0FBSUUsOEJBQW9CZDtBQUp0QjtBQURGO0FBREYsS0F4QkY7QUFrQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUseUNBQWxCO0FBQUE7QUFBQTtBQURGO0FBREY7QUFsQ0YsR0FERjtBQTBDRCxDQXZERDs7QUF5REFKLGFBQWFtQixTQUFiLEdBQXlCO0FBQ3ZCbEIsZ0JBQWMsZ0JBQU1tQixTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEZDtBQUV2Qm5CLFVBQVEsZ0JBQU1pQixTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQsVUFGTjtBQUd2QmpCLFlBQVUsZ0JBQU1lLFNBQU4sQ0FBZ0JHLElBQWhCLENBQXFCRDtBQUhSLENBQXpCOztrQkFNZXRCLFkiLCJmaWxlIjoiMC5kODMxMGE1MTNlYmYxNjAzZDBmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0IFRpbnlNY2VFZGl0b3IgZnJvbSAnLi9UaW55TWNlRWRpdG9yJztcblxuY29uc3QgRG9jdW1lbnRGb3JtID0gKHsgZG9jdW1lbnREYXRhLCBzZWxlY3RlZE9wdGlvbiwgb25TYXZlLCBoYW5kbGVFZGl0b3JDaGFuZ2UsIG9uQ2hhbmdlIH0pID0+IHtcbiAgbGV0IGFjY2Vzc1R5cGUgPSBbJ1B1YmxpYycsICdQcml2YXRlJ107XG4gIGNvbnN0IG9wdGlvbnMgPSBhY2Nlc3NUeXBlLm1hcChhY2Nlc3MgPT4ge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGluZGV4LFxuICAgICAgdmFsdWU6IGFjY2Vzc1xuICAgIH1cbiAgICBpbmRleCsrXG4gIH0pXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCdzZWxlY3QnKS5tYXRlcmlhbF9zZWxlY3QoKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU2F2ZX0gY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICA8U2luZ2xlSW5wdXRcbiAgICAgICAgICAgIGlucHV0VHlwZT17J3RleHQnfVxuICAgICAgICAgICAgdGl0bGU9eydUaXRsZSd9XG4gICAgICAgICAgICBpZD17J2RvY1RpdGxlJ31cbiAgICAgICAgICAgIG5hbWU9eydkb2NUaXRsZSd9XG4gICAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgICBjb250ZW50PXtkb2N1bWVudERhdGEuZG9jVGl0bGV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17J1RpdGxlJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbmFtZT17J2FjY2Vzcyd9XG4gICAgICAgICAgICBpZD17J2FjY2Vzcyd9XG4gICAgICAgICAgICB0aXRsZT17J0FjY2Vzcyd9XG4gICAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICBkb2NBY2Nlc3M9e29wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgPFRpbnlNY2VFZGl0b3JcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZG9jdW1lbnREYXRhLmRvY0NvbnRlbnR9XG4gICAgICAgICAgICBpZD17J2NyZWF0ZURvYyd9XG4gICAgICAgICAgICBtb2RlID0ge2RvY3VtZW50RGF0YS5kb2NDb250ZW50fVxuICAgICAgICAgICAgaGFuZGxlRWRpdG9yQ2hhbmdlPXtoYW5kbGVFZGl0b3JDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5Eb2N1bWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25TYXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRGb3JtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRG9jdW1lbnRGb3JtLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=