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
      { id: '', value: selectedOption, onChange: controlFunc, openImmediately: true },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9NZW51U2VsZWN0LmpzeD81ZjJhIl0sIm5hbWVzIjpbIk1lbnVTZWxlY3QiLCJpZCIsIm5hbWUiLCJ0aXRsZSIsInNlbGVjdGVkT3B0aW9uIiwiY29udHJvbEZ1bmMiLCJkb2NBY2Nlc3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLE1BQU9DLElBQVAsUUFBT0EsSUFBUDtBQUFBLE1BQWFDLEtBQWIsUUFBYUEsS0FBYjtBQUFBLE1BQW9CQyxjQUFwQixRQUFvQkEsY0FBcEI7QUFBQSxNQUFvQ0MsV0FBcEMsUUFBb0NBLFdBQXBDO0FBQUEsNEJBQWlEQyxTQUFqRDtBQUFBLE1BQWlEQSxTQUFqRCxrQ0FBNkQsRUFBN0Q7QUFBQSxTQUNqQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBYyxJQUFJLEVBQWxCLEVBQXFCLE9BQU9GLGNBQTVCLEVBQTRDLFVBQVVDLFdBQXRELEVBQW1FLGlCQUFpQixJQUFwRjtBQUNFLDBEQUFVLE9BQU8sQ0FBakIsRUFBb0IsYUFBWSxPQUFoQyxHQURGO0FBRUUsMERBQVUsT0FBTyxDQUFqQixFQUFvQixhQUFZLGFBQWhDLEdBRkY7QUFHRSwwREFBVSxPQUFPLENBQWpCLEVBQW9CLGFBQVksWUFBaEMsR0FIRjtBQUlFLDBEQUFVLE9BQU8sQ0FBakIsRUFBb0IsYUFBWSxVQUFoQyxHQUpGO0FBS0UsMERBQVUsT0FBTyxDQUFqQixFQUFvQixhQUFZLFFBQWhDO0FBTEYsS0FERjtBQVFFO0FBQUE7QUFBQTtBQUFRRjtBQUFSO0FBUkYsR0FEaUI7QUFBQSxDQUFuQjs7QUFhQUgsV0FBV08sU0FBWCxHQUF1QjtBQUNyQkwsUUFBTSxnQkFBTU0sU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFI7QUFFckJQLFNBQU8sZ0JBQU1LLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUZUO0FBR3JCVCxNQUFJLGdCQUFNTyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFITjtBQUlyQkosYUFBVyxnQkFBTUUsU0FBTixDQUFnQkcsT0FBaEIsQ0FBd0IsaUJBQVVDLE1BQWxDLENBSlU7QUFLckJSLGtCQUFnQixnQkFBTUksU0FBTixDQUFnQkMsTUFMWDtBQU1yQkosZUFBYSxnQkFBTUcsU0FBTixDQUFnQkssSUFBaEIsQ0FBcUJIO0FBTmIsQ0FBdkI7O2tCQVNlVixVIiwiZmlsZSI6IjAuNWRjODRlZDJlZDRkYTVkYjc4M2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcERvd25NZW51IGZyb20gJ21hdGVyaWFsLXVpL0Ryb3BEb3duTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xuXG5jb25zdCBNZW51U2VsZWN0ID0gKHsgaWQsIG5hbWUsIHRpdGxlLCBzZWxlY3RlZE9wdGlvbiwgY29udHJvbEZ1bmMsIGRvY0FjY2VzcyA9IFtdIH0pID0+IChcbiAgPGRpdj5cbiAgICA8RHJvcERvd25NZW51IGlkID1cIlwiIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn0gb25DaGFuZ2U9e2NvbnRyb2xGdW5jfSBvcGVuSW1tZWRpYXRlbHk9e3RydWV9PlxuICAgICAgPE1lbnVJdGVtIHZhbHVlPXsxfSBwcmltYXJ5VGV4dD1cIk5ldmVyXCIgLz5cbiAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0gcHJpbWFyeVRleHQ9XCJFdmVyeSBOaWdodFwiIC8+XG4gICAgICA8TWVudUl0ZW0gdmFsdWU9ezN9IHByaW1hcnlUZXh0PVwiV2Vla25pZ2h0c1wiIC8+XG4gICAgICA8TWVudUl0ZW0gdmFsdWU9ezR9IHByaW1hcnlUZXh0PVwiV2Vla2VuZHNcIiAvPlxuICAgICAgPE1lbnVJdGVtIHZhbHVlPXs1fSBwcmltYXJ5VGV4dD1cIldlZWtseVwiIC8+XG4gICAgPC9Ecm9wRG93bk1lbnU+XG4gICAgPGxhYmVsPnt0aXRsZX08L2xhYmVsPlxuICA8L2Rpdj5cbik7XG5cbk1lbnVTZWxlY3QucHJvcFR5cGVzID0ge1xuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRvY0FjY2VzczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIHNlbGVjdGVkT3B0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjb250cm9sRnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVTZWxlY3Q7ICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9NZW51U2VsZWN0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=