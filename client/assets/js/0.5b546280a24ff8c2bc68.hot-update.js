webpackHotUpdate(0,{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
  var id = _ref.id,
      name = _ref.name,
      title = _ref.title,
      selectedOption = _ref.selectedOption,
      controlFunc = _ref.controlFunc,
      docAccess = _ref.docAccess;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "select",
      {
        id: id,
        name: name,
        value: selectedOption,
        onChange: controlFunc },
      _react2.default.createElement(
        "option",
        { defaultValue: "", disabled: true },
        "  "
      ),
      _react2.default.createElement(
        "option",
        { value: "1" },
        "option 1"
      ),
      _react2.default.createElement(
        "option",
        { value: "2" },
        "Option 2"
      ),
      Object.keys(docAccess).map(function (option) {
        return _react2.default.createElement(
          "option",
          { key: option.id },
          " ",
          option.value,
          " "
        );
      })
    ),
    _react2.default.createElement(
      "label",
      null,
      title
    )
  );
};

Select.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  docAccess: _react2.default.PropTypes.arrayOf(_react.PropTypes.object),
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = Select;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Select.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwiaWQiLCJuYW1lIiwidGl0bGUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwiZG9jQWNjZXNzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm9wdGlvbiIsInZhbHVlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUztBQUFBLE1BQUVDLEVBQUYsUUFBRUEsRUFBRjtBQUFBLE1BQU1DLElBQU4sUUFBTUEsSUFBTjtBQUFBLE1BQVlDLEtBQVosUUFBWUEsS0FBWjtBQUFBLE1BQW1CQyxjQUFuQixRQUFtQkEsY0FBbkI7QUFBQSxNQUFtQ0MsV0FBbkMsUUFBbUNBLFdBQW5DO0FBQUEsTUFBZ0RDLFNBQWhELFFBQWdEQSxTQUFoRDtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsWUFBSUwsRUFETjtBQUVFLGNBQU1DLElBRlI7QUFHRSxlQUFPRSxjQUhUO0FBSUUsa0JBQVVDLFdBSlo7QUFLRTtBQUFBO0FBQUEsVUFBUSxjQUFhLEVBQXJCLEVBQXdCLGNBQXhCO0FBQUE7QUFBQSxPQUxGO0FBTUU7QUFBQTtBQUFBLFVBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxPQU5GO0FBT0U7QUFBQTtBQUFBLFVBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxPQVBGO0FBUUlFLGFBQU9DLElBQVAsQ0FBWUYsU0FBWixFQUF1QkcsR0FBdkIsQ0FBMkIsa0JBQVU7QUFDckMsZUFBTztBQUFBO0FBQUEsWUFBUSxLQUFLQyxPQUFPVCxFQUFwQjtBQUFBO0FBQTBCUyxpQkFBT0MsS0FBakM7QUFBQTtBQUFBLFNBQVA7QUFDRCxPQUZDO0FBUkosS0FERjtBQWNFO0FBQUE7QUFBQTtBQUFRUjtBQUFSO0FBZEYsR0FEYTtBQUFBLENBQWY7O0FBbUJBSCxPQUFPWSxTQUFQLEdBQW1CO0FBQ2pCVixRQUFNLGdCQUFNVyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEWjtBQUVqQlosU0FBTyxnQkFBTVUsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRmI7QUFHakJkLE1BQUksZ0JBQU1ZLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUhWO0FBSWpCVCxhQUFXLGdCQUFNTyxTQUFOLENBQWdCRyxPQUFoQixDQUF3QixpQkFBVUMsTUFBbEMsQ0FKTTtBQUtqQmIsa0JBQWdCLGdCQUFNUyxTQUFOLENBQWdCQyxNQUxmO0FBTWpCVCxlQUFhLGdCQUFNUSxTQUFOLENBQWdCSyxJQUFoQixDQUFxQkg7QUFOakIsQ0FBbkI7O2tCQVNlZixNIiwiZmlsZSI6IjAuNWI1NDYyODBhMjRmZjhjMmJjNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3QgPSAoe2lkLCBuYW1lLCB0aXRsZSwgc2VsZWN0ZWRPcHRpb24sIGNvbnRyb2xGdW5jLCBkb2NBY2Nlc3N9KSA9PiAoICBcbiAgPGRpdj5cbiAgICA8c2VsZWN0XG4gICAgICBpZD17aWR9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgb25DaGFuZ2U9e2NvbnRyb2xGdW5jfT5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCIgZGlzYWJsZWQ+ICA8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+b3B0aW9uIDE8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L29wdGlvbj5cbiAgICAgIHsgT2JqZWN0LmtleXMoZG9jQWNjZXNzKS5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtvcHRpb24uaWR9PiB7b3B0aW9uLnZhbHVlfSA8L29wdGlvbj47XG4gICAgICB9KVxuICAgIH1cbiAgICA8L3NlbGVjdD5cbiAgICA8bGFiZWw+e3RpdGxlfTwvbGFiZWw+XG4gIDwvZGl2PlxuKTtcblxuU2VsZWN0LnByb3BUeXBlcyA9IHsgIFxuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRvY0FjY2VzczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIHNlbGVjdGVkT3B0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjb250cm9sRnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1zQ29tcG9uZW50L1NlbGVjdC5qc3giXSwic291cmNlUm9vdCI6IiJ9