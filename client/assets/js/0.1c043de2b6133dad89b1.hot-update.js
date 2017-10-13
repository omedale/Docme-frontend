webpackHotUpdate(0,{

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SingleInput = __webpack_require__(86);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(87);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(85);

var _Select2 = _interopRequireDefault(_Select);

var _TinyMceEditor = __webpack_require__(422);

var _TinyMceEditor2 = _interopRequireDefault(_TinyMceEditor);

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
        _react2.default.createElement(_TinyMceEditor2.default, {
          content: documentData.docContent,
          name: 'docContent',
          id: 'createDoc',
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJvbkNoYW5nZSIsImFjY2Vzc1R5cGUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJpZCIsInZhbHVlIiwiYWNjZXNzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJtYXRlcmlhbF9zZWxlY3QiLCJkb2NUaXRsZSIsImRvY0NvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUF3RDtBQUFBLE1BQXJEQyxZQUFxRCxRQUFyREEsWUFBcUQ7QUFBQSxNQUF2Q0MsY0FBdUMsUUFBdkNBLGNBQXVDO0FBQUEsTUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDM0UsTUFBSUMsYUFBYSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBQWpCO0FBQ0EsTUFBTUMsVUFBVUQsV0FBV0UsR0FBWCxDQUFlLGtCQUFVO0FBQ3ZDLFFBQUlDLFFBQVEsQ0FBWjtBQUNBLFdBQU87QUFDTEMsVUFBSUQsS0FEQztBQUVMRSxhQUFPQztBQUZGLEtBQVA7QUFJQUg7QUFDRCxHQVBlLENBQWhCO0FBUUFJLElBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCRixNQUFFLFFBQUYsRUFBWUcsZUFBWjtBQUNELEdBRkQ7QUFHQSxTQUNFO0FBQUE7QUFBQSxNQUFNLFVBQVVaLE1BQWhCLEVBQXdCLFdBQVUsU0FBbEM7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxxQkFBVyxNQURiO0FBRUUsaUJBQU8sT0FGVDtBQUdFLGNBQUksVUFITjtBQUlFLGdCQUFNLFVBSlI7QUFLRSx1QkFBYUMsUUFMZjtBQU1FLG1CQUFTSCxhQUFhZSxRQU54QjtBQU9FLHVCQUFhLE9BUGY7QUFERixPQURGO0FBV0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNFO0FBQ0UsZ0JBQU0sUUFEUjtBQUVFLGNBQUksUUFGTjtBQUdFLGlCQUFPLFFBSFQ7QUFJRSx1QkFBYVosUUFKZjtBQUtFLDBCQUFnQkYsY0FMbEI7QUFNRSxxQkFBV0k7QUFOYjtBQURGO0FBWEYsS0FERjtBQXVCRTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFDRSxpQkFBTyxrQkFEVDtBQUVFLGdCQUFNLENBRlI7QUFHRSxrQkFBUSxLQUhWO0FBSUUsbUJBQVNMLGFBQWFnQixVQUp4QjtBQUtFLGdCQUFNLFlBTFI7QUFNRSxjQUFJLFlBTk47QUFPRSx1QkFBYWIsUUFQZjtBQVFFLHVCQUFhLGdDQVJmO0FBREY7QUFERixLQXZCRjtBQW9DRTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFDRSxtQkFBU0gsYUFBYWdCLFVBRHhCO0FBRUUsZ0JBQU0sWUFGUjtBQUdFLGNBQUksV0FITjtBQUlFLHVCQUFhYixRQUpmO0FBS0UsdUJBQWEsZ0NBTGY7QUFERjtBQURBLEtBcENGO0FBOENFO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsWUFBUSxXQUFVLHlDQUFsQjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFHLFdBQVUsOEJBQWI7QUFBNEM7QUFBQTtBQUFBLGNBQUcsV0FBVSxxQkFBYjtBQUFBO0FBQUEsV0FBNUM7QUFBQTtBQUFBO0FBRkY7QUFERjtBQTlDRixHQURGO0FBdURELENBcEVEOztBQXNFQUosYUFBYWtCLFNBQWIsR0FBeUI7QUFDdkJqQixnQkFBYyxnQkFBTWtCLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURkO0FBRXZCbEIsVUFBUSxnQkFBTWdCLFNBQU4sQ0FBZ0JHLElBQWhCLENBQXFCRCxVQUZOO0FBR3ZCakIsWUFBVSxnQkFBTWUsU0FBTixDQUFnQkcsSUFBaEIsQ0FBcUJEO0FBSFIsQ0FBekI7O2tCQU1lckIsWSIsImZpbGUiOiIwLjFjMDQzZGUyYjYxMzNkYWQ4OWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgVGlueU1jZUVkaXRvciBmcm9tICcuL1RpbnlNY2VFZGl0b3InO1xuXG5jb25zdCBEb2N1bWVudEZvcm0gPSAoeyBkb2N1bWVudERhdGEsIHNlbGVjdGVkT3B0aW9uLCBvblNhdmUsIG9uQ2hhbmdlIH0pID0+IHtcbiAgbGV0IGFjY2Vzc1R5cGUgPSBbJ1B1YmxpYycsICdQcml2YXRlJ107XG4gIGNvbnN0IG9wdGlvbnMgPSBhY2Nlc3NUeXBlLm1hcChhY2Nlc3MgPT4ge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGluZGV4LFxuICAgICAgdmFsdWU6IGFjY2Vzc1xuICAgIH1cbiAgICBpbmRleCsrXG4gIH0pXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCdzZWxlY3QnKS5tYXRlcmlhbF9zZWxlY3QoKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e29uU2F2ZX0gY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICA8U2luZ2xlSW5wdXRcbiAgICAgICAgICAgIGlucHV0VHlwZT17J3RleHQnfVxuICAgICAgICAgICAgdGl0bGU9eydUaXRsZSd9XG4gICAgICAgICAgICBpZD17J2RvY1RpdGxlJ31cbiAgICAgICAgICAgIG5hbWU9eydkb2NUaXRsZSd9XG4gICAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgICBjb250ZW50PXtkb2N1bWVudERhdGEuZG9jVGl0bGV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17J1RpdGxlJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgbmFtZT17J2FjY2Vzcyd9XG4gICAgICAgICAgICBpZD17J2FjY2Vzcyd9XG4gICAgICAgICAgICB0aXRsZT17J0FjY2Vzcyd9XG4gICAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICBkb2NBY2Nlc3M9e29wdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgdGl0bGU9eydEb2N1bWVudCBDb250ZW50J31cbiAgICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgICByZXNpemU9e2ZhbHNlfVxuICAgICAgICAgICAgY29udGVudD17ZG9jdW1lbnREYXRhLmRvY0NvbnRlbnR9XG4gICAgICAgICAgICBuYW1lPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgICBpZD17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydQbGVhc2UgdHlwZSB5b3VyIGRvY3VtZW50IGhlcmUnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICA8VGlueU1jZUVkaXRvclxuICAgICAgICAgIGNvbnRlbnQ9e2RvY3VtZW50RGF0YS5kb2NDb250ZW50fVxuICAgICAgICAgIG5hbWU9eydkb2NDb250ZW50J31cbiAgICAgICAgICBpZD17J2NyZWF0ZURvYyd9XG4gICAgICAgICAgY29udHJvbEZ1bmM9e29uQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXsnUGxlYXNlIHR5cGUgeW91ciBkb2N1bWVudCBoZXJlJ30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5Eb2N1bWVudEZvcm0ucHJvcFR5cGVzID0ge1xuICBkb2N1bWVudERhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25TYXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9jdW1lbnRGb3JtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRG9jdW1lbnRGb3JtLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=