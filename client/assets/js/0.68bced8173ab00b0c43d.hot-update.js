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
  console.log();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJvbkNoYW5nZSIsImFjY2Vzc1R5cGUiLCJjb25zb2xlIiwibG9nIiwiZG9jVGl0bGUiLCJkb2NDb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLE9BQXNEO0FBQUEsTUFBcERDLFlBQW9ELFFBQXBEQSxZQUFvRDtBQUFBLE1BQXRDQyxjQUFzQyxRQUF0Q0EsY0FBc0M7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUN6RSxNQUFJQyxhQUFhLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FBakI7QUFDQUMsVUFBUUMsR0FBUjtBQUNBLFNBQ0U7QUFBQTtBQUFBLE1BQU0sVUFBVUosTUFBaEIsRUFBd0IsV0FBVSxTQUFsQztBQUNBO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUNFLHFCQUFXLE1BRGI7QUFFRSxpQkFBTyxPQUZUO0FBR0UsY0FBSSxVQUhOO0FBSUUsZ0JBQU0sVUFKUjtBQUtFLHVCQUFhQyxRQUxmO0FBTUUsbUJBQVNILGFBQWFPLFFBTnhCO0FBT0UsdUJBQWEsT0FQZjtBQURGLE9BREY7QUFXRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxnQkFBTSxRQURSO0FBRUUsY0FBSSxRQUZOO0FBR0UsaUJBQU8sUUFIVDtBQUlFLHVCQUFhLGVBSmY7QUFLRSx1QkFBYUosUUFMZjtBQU1FLHFCQUFXQyxVQU5iO0FBT0UsMEJBQWdCSCxjQVBsQjtBQURGO0FBWEYsS0FEQTtBQXVCQTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFDRSxpQkFBTyxrQkFEVDtBQUVFLGdCQUFNLENBRlI7QUFHRSxrQkFBUSxLQUhWO0FBSUUsbUJBQVNELGFBQWFRLFVBSnhCO0FBS0UsZ0JBQU0sWUFMUjtBQU1FLGNBQUksWUFOTjtBQU9FLHVCQUFhTCxRQVBmO0FBUUUsdUJBQWEsZ0NBUmY7QUFERjtBQURGLEtBdkJBO0FBb0NBO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsWUFBUSxXQUFVLHlDQUFsQjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFHLFdBQVUsOEJBQWI7QUFBNEM7QUFBQTtBQUFBLGNBQUcsV0FBVSxxQkFBYjtBQUFBO0FBQUEsV0FBNUM7QUFBQTtBQUFBO0FBRkY7QUFERjtBQXBDQSxHQURGO0FBNkNELENBaEREOztBQWtEQUosYUFBYVUsU0FBYixHQUF5QjtBQUN2QlQsZ0JBQWMsZ0JBQU1VLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURkO0FBRXZCVixVQUFRLGdCQUFNUSxTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQsVUFGTjtBQUd2QlQsWUFBVSxnQkFBTU8sU0FBTixDQUFnQkcsSUFBaEIsQ0FBcUJEO0FBSFIsQ0FBekI7O2tCQU1lYixZIiwiZmlsZSI6IjAuNjhiY2VkODE3M2FiMDBiMGM0M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcblxuY29uc3QgRG9jdW1lbnRGb3JtID0gKHtkb2N1bWVudERhdGEsIHNlbGVjdGVkT3B0aW9uLCBvblNhdmUsIG9uQ2hhbmdlfSkgPT4ge1xuICBsZXQgYWNjZXNzVHlwZSA9IFsnUHVibGljJywgJ1ByaXZhdGUnXTtcbiAgY29uc29sZS5sb2coKVxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtvblNhdmV9IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgPFNpbmdsZUlucHV0XG4gICAgICAgICAgaW5wdXRUeXBlPXsndGV4dCd9XG4gICAgICAgICAgdGl0bGU9eydUaXRsZSd9XG4gICAgICAgICAgaWQ9eydkb2NUaXRsZSd9XG4gICAgICAgICAgbmFtZT17J2RvY1RpdGxlJ31cbiAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgY29udGVudD17ZG9jdW1lbnREYXRhLmRvY1RpdGxlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVGl0bGUnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgbmFtZT17J2FjY2Vzcyd9XG4gICAgICAgICAgaWQ9eydhY2Nlc3MnfVxuICAgICAgICAgIHRpdGxlPXsnQWNjZXNzJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J0Nob29zZSBhY2Nlc3MnfVxuICAgICAgICAgIGNvbnRyb2xGdW5jPXtvbkNoYW5nZX1cbiAgICAgICAgICBkb2NBY2Nlc3M9e2FjY2Vzc1R5cGV9XG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3NlbGVjdGVkT3B0aW9ufSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICB0aXRsZT17J0RvY3VtZW50IENvbnRlbnQnfVxuICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgcmVzaXplPXtmYWxzZX1cbiAgICAgICAgICBjb250ZW50PXtkb2N1bWVudERhdGEuZG9jQ29udGVudH1cbiAgICAgICAgICBuYW1lPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgaWQ9eydkb2NDb250ZW50J31cbiAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydQbGVhc2UgdHlwZSB5b3VyIGRvY3VtZW50IGhlcmUnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbiAgKVxufVxuXG5Eb2N1bWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25TYXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRGb3JtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRG9jdW1lbnRGb3JtLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=