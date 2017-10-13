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

  var access = ['Public', 'Private'];
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
          name: 'ageRange',
          id: 'access',
          title: 'Access',
          placeholder: 'Choose your age range',
          controlFunc: onChange,
          options: access,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJvbkNoYW5nZSIsImFjY2VzcyIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUFzRDtBQUFBLE1BQXBEQyxZQUFvRCxRQUFwREEsWUFBb0Q7QUFBQSxNQUF0Q0MsY0FBc0MsUUFBdENBLGNBQXNDO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDekUsTUFBSUMsU0FBUyxDQUFDLFFBQUQsRUFBVyxTQUFYLENBQWI7QUFDQSxTQUNFO0FBQUE7QUFBQSxNQUFNLFVBQVVGLE1BQWhCLEVBQXdCLFdBQVUsU0FBbEM7QUFDQTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxxQkFBVyxNQURiO0FBRUUsaUJBQU8sT0FGVDtBQUdFLGNBQUksVUFITjtBQUlFLGdCQUFNLFVBSlI7QUFLRSx1QkFBYUMsUUFMZjtBQU1FLG1CQUFTSCxhQUFhSyxRQU54QjtBQU9FLHVCQUFhLE9BUGY7QUFERixPQURGO0FBV0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNFO0FBQ0UsZ0JBQU0sVUFEUjtBQUVFLGNBQUksUUFGTjtBQUdFLGlCQUFPLFFBSFQ7QUFJRSx1QkFBYSx1QkFKZjtBQUtFLHVCQUFhRixRQUxmO0FBTUUsbUJBQVNDLE1BTlg7QUFPRSwwQkFBZ0JILGNBUGxCO0FBREY7QUFYRixLQURBO0FBdUJBO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFDRTtBQUNFLGlCQUFPLGtCQURUO0FBRUUsZ0JBQU0sQ0FGUjtBQUdFLGtCQUFRLEtBSFY7QUFJRSxtQkFBU0QsYUFBYU0sVUFKeEI7QUFLRSxnQkFBTSxZQUxSO0FBTUUsY0FBSSxZQU5OO0FBT0UsdUJBQWFILFFBUGY7QUFRRSx1QkFBYSxnQ0FSZjtBQURGO0FBREYsS0F2QkE7QUFvQ0E7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUseUNBQWxCO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUcsV0FBVSw4QkFBYjtBQUE0QztBQUFBO0FBQUEsY0FBRyxXQUFVLHFCQUFiO0FBQUE7QUFBQSxXQUE1QztBQUFBO0FBQUE7QUFGRjtBQURGO0FBcENBLEdBREY7QUE2Q0QsQ0EvQ0Q7O0FBaURBSixhQUFhUSxTQUFiLEdBQXlCO0FBQ3ZCUCxnQkFBYyxnQkFBTVEsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRGQ7QUFFdkJSLFVBQVEsZ0JBQU1NLFNBQU4sQ0FBZ0JHLElBQWhCLENBQXFCRCxVQUZOO0FBR3ZCUCxZQUFVLGdCQUFNSyxTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQ7O0FBSFIsQ0FBekI7O2tCQU9lWCxZIiwiZmlsZSI6IjAuNjlkNjE5MjUyZDU0YjllYzUwYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcblxuY29uc3QgRG9jdW1lbnRGb3JtID0gKHtkb2N1bWVudERhdGEsIHNlbGVjdGVkT3B0aW9uLCBvblNhdmUsIG9uQ2hhbmdlfSkgPT4ge1xuICBsZXQgYWNjZXNzID0gWydQdWJsaWMnLCAnUHJpdmF0ZSddXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU2F2ZX0gY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICA8U2luZ2xlSW5wdXRcbiAgICAgICAgICBpbnB1dFR5cGU9eyd0ZXh0J31cbiAgICAgICAgICB0aXRsZT17J1RpdGxlJ31cbiAgICAgICAgICBpZD17J2RvY1RpdGxlJ31cbiAgICAgICAgICBuYW1lPXsnZG9jVGl0bGUnfVxuICAgICAgICAgIGNvbnRyb2xGdW5jPXtvbkNoYW5nZX1cbiAgICAgICAgICBjb250ZW50PXtkb2N1bWVudERhdGEuZG9jVGl0bGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydUaXRsZSd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBuYW1lPXsnYWdlUmFuZ2UnfVxuICAgICAgICAgIGlkPXsnYWNjZXNzJ31cbiAgICAgICAgICB0aXRsZT17J0FjY2Vzcyd9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydDaG9vc2UgeW91ciBhZ2UgcmFuZ2UnfVxuICAgICAgICAgIGNvbnRyb2xGdW5jPXtvbkNoYW5nZX1cbiAgICAgICAgICBvcHRpb25zPXthY2Nlc3N9XG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3NlbGVjdGVkT3B0aW9ufSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICB0aXRsZT17J0RvY3VtZW50IENvbnRlbnQnfVxuICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgcmVzaXplPXtmYWxzZX1cbiAgICAgICAgICBjb250ZW50PXtkb2N1bWVudERhdGEuZG9jQ29udGVudH1cbiAgICAgICAgICBuYW1lPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgaWQ9eydkb2NDb250ZW50J31cbiAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydQbGVhc2UgdHlwZSB5b3VyIGRvY3VtZW50IGhlcmUnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbiAgKVxufVxuXG5Eb2N1bWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25TYXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50Rm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY3VtZW50Rm9ybS5qc3giXSwic291cmNlUm9vdCI6IiJ9