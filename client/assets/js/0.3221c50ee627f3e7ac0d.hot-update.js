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

  var accessType = [{ access: 'P' }];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJvbkNoYW5nZSIsImFjY2Vzc1R5cGUiLCJhY2Nlc3MiLCJkb2NUaXRsZSIsImRvY0NvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBc0Q7QUFBQSxNQUFwREMsWUFBb0QsUUFBcERBLFlBQW9EO0FBQUEsTUFBdENDLGNBQXNDLFFBQXRDQSxjQUFzQztBQUFBLE1BQXRCQyxNQUFzQixRQUF0QkEsTUFBc0I7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQ3pFLE1BQUlDLGFBQWEsQ0FBQyxFQUFDQyxRQUFRLEdBQVQsRUFBRCxDQUFqQjtBQUNBLFNBQ0U7QUFBQTtBQUFBLE1BQU0sVUFBVUgsTUFBaEIsRUFBd0IsV0FBVSxTQUFsQztBQUNBO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUNFLHFCQUFXLE1BRGI7QUFFRSxpQkFBTyxPQUZUO0FBR0UsY0FBSSxVQUhOO0FBSUUsZ0JBQU0sVUFKUjtBQUtFLHVCQUFhQyxRQUxmO0FBTUUsbUJBQVNILGFBQWFNLFFBTnhCO0FBT0UsdUJBQWEsT0FQZjtBQURGLE9BREY7QUFXRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxnQkFBTSxRQURSO0FBRUUsY0FBSSxRQUZOO0FBR0UsaUJBQU8sUUFIVDtBQUlFLHVCQUFhLGVBSmY7QUFLRSx1QkFBYUgsUUFMZjtBQU1FLHFCQUFXQyxVQU5iO0FBT0UsMEJBQWdCSCxjQVBsQjtBQURGO0FBWEYsS0FEQTtBQXVCQTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFDRSxpQkFBTyxrQkFEVDtBQUVFLGdCQUFNLENBRlI7QUFHRSxrQkFBUSxLQUhWO0FBSUUsbUJBQVNELGFBQWFPLFVBSnhCO0FBS0UsZ0JBQU0sWUFMUjtBQU1FLGNBQUksWUFOTjtBQU9FLHVCQUFhSixRQVBmO0FBUUUsdUJBQWEsZ0NBUmY7QUFERjtBQURGLEtBdkJBO0FBb0NBO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsWUFBUSxXQUFVLHlDQUFsQjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFHLFdBQVUsOEJBQWI7QUFBNEM7QUFBQTtBQUFBLGNBQUcsV0FBVSxxQkFBYjtBQUFBO0FBQUEsV0FBNUM7QUFBQTtBQUFBO0FBRkY7QUFERjtBQXBDQSxHQURGO0FBNkNELENBL0NEOztBQWlEQUosYUFBYVMsU0FBYixHQUF5QjtBQUN2QlIsZ0JBQWMsZ0JBQU1TLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURkO0FBRXZCVCxVQUFRLGdCQUFNTyxTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQsVUFGTjtBQUd2QlIsWUFBVSxnQkFBTU0sU0FBTixDQUFnQkcsSUFBaEIsQ0FBcUJEO0FBSFIsQ0FBekI7O2tCQU1lWixZIiwiZmlsZSI6IjAuMzIyMWM1MGVlNjI3ZjNlN2FjMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcblxuY29uc3QgRG9jdW1lbnRGb3JtID0gKHtkb2N1bWVudERhdGEsIHNlbGVjdGVkT3B0aW9uLCBvblNhdmUsIG9uQ2hhbmdlfSkgPT4ge1xuICBsZXQgYWNjZXNzVHlwZSA9IFt7YWNjZXNzOiAnUCd9XVxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtvblNhdmV9IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgPFNpbmdsZUlucHV0XG4gICAgICAgICAgaW5wdXRUeXBlPXsndGV4dCd9XG4gICAgICAgICAgdGl0bGU9eydUaXRsZSd9XG4gICAgICAgICAgaWQ9eydkb2NUaXRsZSd9XG4gICAgICAgICAgbmFtZT17J2RvY1RpdGxlJ31cbiAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgY29udGVudD17ZG9jdW1lbnREYXRhLmRvY1RpdGxlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVGl0bGUnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbmFtZT17J2FjY2Vzcyd9XG4gICAgICAgICAgaWQ9eydhY2Nlc3MnfVxuICAgICAgICAgIHRpdGxlPXsnQWNjZXNzJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J0Nob29zZSBhY2Nlc3MnfVxuICAgICAgICAgIGNvbnRyb2xGdW5jPXtvbkNoYW5nZX1cbiAgICAgICAgICBkb2NBY2Nlc3M9e2FjY2Vzc1R5cGV9XG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3NlbGVjdGVkT3B0aW9ufSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICB0aXRsZT17J0RvY3VtZW50IENvbnRlbnQnfVxuICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgcmVzaXplPXtmYWxzZX1cbiAgICAgICAgICBjb250ZW50PXtkb2N1bWVudERhdGEuZG9jQ29udGVudH1cbiAgICAgICAgICBuYW1lPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgaWQ9eydkb2NDb250ZW50J31cbiAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydQbGVhc2UgdHlwZSB5b3VyIGRvY3VtZW50IGhlcmUnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbiAgKVxufVxuXG5Eb2N1bWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25TYXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRGb3JtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRG9jdW1lbnRGb3JtLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=