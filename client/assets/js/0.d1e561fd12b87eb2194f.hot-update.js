webpackHotUpdate(0,{

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _DropDownMenu = __webpack_require__(480);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _MenuItem = __webpack_require__(487);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuSelect = function MenuSelect(_ref) {
  var id = _ref.id,
      name = _ref.name,
      title = _ref.title,
      selectedOption = _ref.selectedOption,
      controlFunc = _ref.controlFunc,
      _ref$docAccess = _ref.docAccess,
      docAccess = _ref$docAccess === undefined ? [] : _ref$docAccess;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _DropDownMenu2.default,
      { value: selectedOption, onChange: controlFunc, openImmediately: true },
      _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Never' }),
      _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Every Night' }),
      _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'Weeknights' }),
      _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Weekends' }),
      _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Weekly' })
    ),
    _react2.default.createElement(
      'label',
      null,
      title
    )
  );
};

MenuSelect.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  docAccess: _react2.default.PropTypes.arrayOf(_react.PropTypes.object),
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = MenuSelect;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MenuSelect.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9NZW51U2VsZWN0LmpzeD81ZjJhIl0sIm5hbWVzIjpbIk1lbnVTZWxlY3QiLCJpZCIsIm5hbWUiLCJ0aXRsZSIsInNlbGVjdGVkT3B0aW9uIiwiY29udHJvbEZ1bmMiLCJkb2NBY2Nlc3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLE1BQU9DLElBQVAsUUFBT0EsSUFBUDtBQUFBLE1BQWFDLEtBQWIsUUFBYUEsS0FBYjtBQUFBLE1BQW9CQyxjQUFwQixRQUFvQkEsY0FBcEI7QUFBQSxNQUFvQ0MsV0FBcEMsUUFBb0NBLFdBQXBDO0FBQUEsNEJBQWlEQyxTQUFqRDtBQUFBLE1BQWlEQSxTQUFqRCxrQ0FBNkQsRUFBN0Q7QUFBQSxTQUNqQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBYyxPQUFPRixjQUFyQixFQUFxQyxVQUFVQyxXQUEvQyxFQUE0RCxpQkFBaUIsSUFBN0U7QUFDRSwwREFBVSxPQUFPLENBQWpCLEVBQW9CLGFBQVksT0FBaEMsR0FERjtBQUVFLDBEQUFVLE9BQU8sQ0FBakIsRUFBb0IsYUFBWSxhQUFoQyxHQUZGO0FBR0UsMERBQVUsT0FBTyxDQUFqQixFQUFvQixhQUFZLFlBQWhDLEdBSEY7QUFJRSwwREFBVSxPQUFPLENBQWpCLEVBQW9CLGFBQVksVUFBaEMsR0FKRjtBQUtFLDBEQUFVLE9BQU8sQ0FBakIsRUFBb0IsYUFBWSxRQUFoQztBQUxGLEtBREY7QUFRRTtBQUFBO0FBQUE7QUFBUUY7QUFBUjtBQVJGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBYUFILFdBQVdPLFNBQVgsR0FBdUI7QUFDckJMLFFBQU0sZ0JBQU1NLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURSO0FBRXJCUCxTQUFPLGdCQUFNSyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFGVDtBQUdyQlQsTUFBSSxnQkFBTU8sU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBSE47QUFJckJKLGFBQVcsZ0JBQU1FLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCLGlCQUFVQyxNQUFsQyxDQUpVO0FBS3JCUixrQkFBZ0IsZ0JBQU1JLFNBQU4sQ0FBZ0JDLE1BTFg7QUFNckJKLGVBQWEsZ0JBQU1HLFNBQU4sQ0FBZ0JLLElBQWhCLENBQXFCSDtBQU5iLENBQXZCOztrQkFTZVYsVSIsImZpbGUiOiIwLmQxZTU2MWZkMTJiODdlYjIxOTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyb3BEb3duTWVudSBmcm9tICdtYXRlcmlhbC11aS9Ecm9wRG93bk1lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcblxuY29uc3QgTWVudVNlbGVjdCA9ICh7IGlkLCBuYW1lLCB0aXRsZSwgc2VsZWN0ZWRPcHRpb24sIGNvbnRyb2xGdW5jLCBkb2NBY2Nlc3MgPSBbXSB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPERyb3BEb3duTWVudSB2YWx1ZT17c2VsZWN0ZWRPcHRpb259IG9uQ2hhbmdlPXtjb250cm9sRnVuY30gb3BlbkltbWVkaWF0ZWx5PXt0cnVlfT5cbiAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0gcHJpbWFyeVRleHQ9XCJOZXZlclwiIC8+XG4gICAgICA8TWVudUl0ZW0gdmFsdWU9ezJ9IHByaW1hcnlUZXh0PVwiRXZlcnkgTmlnaHRcIiAvPlxuICAgICAgPE1lbnVJdGVtIHZhbHVlPXszfSBwcmltYXJ5VGV4dD1cIldlZWtuaWdodHNcIiAvPlxuICAgICAgPE1lbnVJdGVtIHZhbHVlPXs0fSBwcmltYXJ5VGV4dD1cIldlZWtlbmRzXCIgLz5cbiAgICAgIDxNZW51SXRlbSB2YWx1ZT17NX0gcHJpbWFyeVRleHQ9XCJXZWVrbHlcIiAvPlxuICAgIDwvRHJvcERvd25NZW51PlxuICAgIDxsYWJlbD57dGl0bGV9PC9sYWJlbD5cbiAgPC9kaXY+XG4pO1xuXG5NZW51U2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkb2NBY2Nlc3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICBzZWxlY3RlZE9wdGlvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udHJvbEZ1bmM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51U2VsZWN0OyAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybXNDb21wb25lbnQvTWVudVNlbGVjdC5qc3giXSwic291cmNlUm9vdCI6IiJ9