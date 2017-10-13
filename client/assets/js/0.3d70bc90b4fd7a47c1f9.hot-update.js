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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJvbkNoYW5nZSIsImFjY2VzcyIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUFzRDtBQUFBLE1BQXBEQyxZQUFvRCxRQUFwREEsWUFBb0Q7QUFBQSxNQUF0Q0MsY0FBc0MsUUFBdENBLGNBQXNDO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDekUsTUFBSUMsU0FBUyxDQUFDLFFBQUQsRUFBVyxTQUFYLENBQWI7QUFDQSxTQUNFO0FBQUE7QUFBQSxNQUFNLFVBQVVGLE1BQWhCLEVBQXdCLFdBQVUsU0FBbEM7QUFDQTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxxQkFBVyxNQURiO0FBRUUsaUJBQU8sT0FGVDtBQUdFLGNBQUksVUFITjtBQUlFLGdCQUFNLFVBSlI7QUFLRSx1QkFBYUMsUUFMZjtBQU1FLG1CQUFTSCxhQUFhSyxRQU54QjtBQU9FLHVCQUFhLE9BUGY7QUFERixPQURGO0FBV0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNFO0FBQ0UsZ0JBQU0sVUFEUjtBQUVFLGNBQUksUUFGTjtBQUdFLGlCQUFPLFFBSFQ7QUFJRSx1QkFBYSx1QkFKZjtBQUtFLHVCQUFhRixRQUxmO0FBTUUsbUJBQVNDLE1BTlg7QUFPRSwwQkFBZ0JILGNBUGxCO0FBREY7QUFYRixLQURBO0FBdUJBO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFDRTtBQUNFLGlCQUFPLGtCQURUO0FBRUUsZ0JBQU0sQ0FGUjtBQUdFLGtCQUFRLEtBSFY7QUFJRSxtQkFBU0QsYUFBYU0sVUFKeEI7QUFLRSxnQkFBTSxZQUxSO0FBTUUsY0FBSSxZQU5OO0FBT0UsdUJBQWFILFFBUGY7QUFRRSx1QkFBYSxnQ0FSZjtBQURGO0FBREYsS0F2QkE7QUFvQ0E7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUseUNBQWxCO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUcsV0FBVSw4QkFBYjtBQUE0QztBQUFBO0FBQUEsY0FBRyxXQUFVLHFCQUFiO0FBQUE7QUFBQSxXQUE1QztBQUFBO0FBQUE7QUFGRjtBQURGO0FBcENBLEdBREY7QUE2Q0QsQ0EvQ0Q7O0FBaURBSixhQUFhUSxTQUFiLEdBQXlCO0FBQ3ZCUCxnQkFBYyxnQkFBTVEsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRGQ7QUFFdkJSLFVBQVEsZ0JBQU1NLFNBQU4sQ0FBZ0JHLElBQWhCLENBQXFCRCxVQUZOO0FBR3ZCUCxZQUFVLGdCQUFNSyxTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQ7QUFIUixDQUF6Qjs7a0JBTWVYLFkiLCJmaWxlIjoiMC4zZDcwYmM5MGI0ZmQ3YTQ3YzFmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuXG5jb25zdCBEb2N1bWVudEZvcm0gPSAoe2RvY3VtZW50RGF0YSwgc2VsZWN0ZWRPcHRpb24sIG9uU2F2ZSwgb25DaGFuZ2V9KSA9PiB7XG4gIGxldCBhY2Nlc3MgPSBbJ1B1YmxpYycsICdQcml2YXRlJ11cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TYXZlfSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgIDxTaW5nbGVJbnB1dFxuICAgICAgICAgIGlucHV0VHlwZT17J3RleHQnfVxuICAgICAgICAgIHRpdGxlPXsnVGl0bGUnfVxuICAgICAgICAgIGlkPXsnZG9jVGl0bGUnfVxuICAgICAgICAgIG5hbWU9eydkb2NUaXRsZSd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgIGNvbnRlbnQ9e2RvY3VtZW50RGF0YS5kb2NUaXRsZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J1RpdGxlJ30gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIG5hbWU9eydhZ2VSYW5nZSd9XG4gICAgICAgICAgaWQ9eydhY2Nlc3MnfVxuICAgICAgICAgIHRpdGxlPXsnQWNjZXNzJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J0Nob29zZSB5b3VyIGFnZSByYW5nZSd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgIG9wdGlvbnM9e2FjY2Vzc31cbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17c2VsZWN0ZWRPcHRpb259IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIHRpdGxlPXsnRG9jdW1lbnQgQ29udGVudCd9XG4gICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICByZXNpemU9e2ZhbHNlfVxuICAgICAgICAgIGNvbnRlbnQ9e2RvY3VtZW50RGF0YS5kb2NDb250ZW50fVxuICAgICAgICAgIG5hbWU9eydkb2NDb250ZW50J31cbiAgICAgICAgICBpZD17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgIGNvbnRyb2xGdW5jPXtvbkNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17J1BsZWFzZSB0eXBlIHlvdXIgZG9jdW1lbnQgaGVyZSd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGxlZnRcIj5jaGVjazwvaT5idXR0b248L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuICApXG59XG5cbkRvY3VtZW50Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50RGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvblNhdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==