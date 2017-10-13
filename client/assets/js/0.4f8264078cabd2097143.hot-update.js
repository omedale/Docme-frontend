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
          options: options,
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
  options: _react2.default.PropTypes.array,
  onSave: _react2.default.PropTypes.func.isRequired,
  onChange: _react2.default.PropTypes.func.isRequired
};

exports.default = DocumentForm;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvcHRpb25zIiwib25TYXZlIiwib25DaGFuZ2UiLCJkb2NUaXRsZSIsImRvY0NvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUErRDtBQUFBLE1BQTdEQyxZQUE2RCxRQUE3REEsWUFBNkQ7QUFBQSxNQUEvQ0MsY0FBK0MsUUFBL0NBLGNBQStDO0FBQUEsTUFBL0JDLE9BQStCLFFBQS9CQSxPQUErQjtBQUFBLE1BQXRCQyxNQUFzQixRQUF0QkEsTUFBc0I7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQ2xGLFNBQ0U7QUFBQTtBQUFBLE1BQU0sVUFBVUQsTUFBaEIsRUFBd0IsV0FBVSxTQUFsQztBQUNBO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUNFLHFCQUFXLE1BRGI7QUFFRSxpQkFBTyxPQUZUO0FBR0UsY0FBSSxVQUhOO0FBSUUsZ0JBQU0sVUFKUjtBQUtFLHVCQUFhQyxRQUxmO0FBTUUsbUJBQVNKLGFBQWFLLFFBTnhCO0FBT0UsdUJBQWEsT0FQZjtBQURGLE9BREY7QUFXRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxnQkFBTSxVQURSO0FBRUUsY0FBSSxRQUZOO0FBR0UsaUJBQU8sUUFIVDtBQUlFLHVCQUFhLHVCQUpmO0FBS0UsdUJBQWFELFFBTGY7QUFNRSxtQkFBU0YsT0FOWDtBQU9FLDBCQUFnQkQsY0FQbEI7QUFERjtBQVhGLEtBREE7QUF1QkE7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQ0UsaUJBQU8sa0JBRFQ7QUFFRSxnQkFBTSxDQUZSO0FBR0Usa0JBQVEsS0FIVjtBQUlFLG1CQUFTRCxhQUFhTSxVQUp4QjtBQUtFLGdCQUFNLFlBTFI7QUFNRSxjQUFJLFlBTk47QUFPRSx1QkFBYUYsUUFQZjtBQVFFLHVCQUFhLGdDQVJmO0FBREY7QUFERixLQXZCQTtBQW9DQTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEI7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBRyxXQUFVLDhCQUFiO0FBQTRDO0FBQUE7QUFBQSxjQUFHLFdBQVUscUJBQWI7QUFBQTtBQUFBLFdBQTVDO0FBQUE7QUFBQTtBQUZGO0FBREY7QUFwQ0EsR0FERjtBQTZDRCxDQTlDRDs7QUFnREFMLGFBQWFRLFNBQWIsR0FBeUI7QUFDdkJQLGdCQUFjLGdCQUFNUSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEZDtBQUV2QlIsV0FBUyxnQkFBTU0sU0FBTixDQUFnQkcsS0FGRjtBQUd2QlIsVUFBUSxnQkFBTUssU0FBTixDQUFnQkksSUFBaEIsQ0FBcUJGLFVBSE47QUFJdkJOLFlBQVUsZ0JBQU1JLFNBQU4sQ0FBZ0JJLElBQWhCLENBQXFCRjtBQUpSLENBQXpCOztrQkFPZVgsWSIsImZpbGUiOiIwLjRmODI2NDA3OGNhYmQyMDk3MTQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5cbmNvbnN0IERvY3VtZW50Rm9ybSA9ICh7ZG9jdW1lbnREYXRhLCBzZWxlY3RlZE9wdGlvbiwgb3B0aW9ucywgb25TYXZlLCBvbkNoYW5nZX0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TYXZlfSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgIDxTaW5nbGVJbnB1dFxuICAgICAgICAgIGlucHV0VHlwZT17J3RleHQnfVxuICAgICAgICAgIHRpdGxlPXsnVGl0bGUnfVxuICAgICAgICAgIGlkPXsnZG9jVGl0bGUnfVxuICAgICAgICAgIG5hbWU9eydkb2NUaXRsZSd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgIGNvbnRlbnQ9e2RvY3VtZW50RGF0YS5kb2NUaXRsZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J1RpdGxlJ30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hbWU9eydhZ2VSYW5nZSd9XG4gICAgICAgICAgaWQ9eydhY2Nlc3MnfVxuICAgICAgICAgIHRpdGxlPXsnQWNjZXNzJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J0Nob29zZSB5b3VyIGFnZSByYW5nZSd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3NlbGVjdGVkT3B0aW9ufSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICB0aXRsZT17J0RvY3VtZW50IENvbnRlbnQnfVxuICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgcmVzaXplPXtmYWxzZX1cbiAgICAgICAgICBjb250ZW50PXtkb2N1bWVudERhdGEuZG9jQ29udGVudH1cbiAgICAgICAgICBuYW1lPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgaWQ9eydkb2NDb250ZW50J31cbiAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydQbGVhc2UgdHlwZSB5b3VyIGRvY3VtZW50IGhlcmUnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbiAgKVxufVxuXG5Eb2N1bWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICBvblNhdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==