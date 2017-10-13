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
        docAccess
      ),
      _react2.default.createElement(
        "option",
        { value: "1" },
        "Option 1"
      ),
      _react2.default.createElement(
        "option",
        { value: "2" },
        "Option 2"
      )
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

  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = Select;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Select.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwiaWQiLCJuYW1lIiwidGl0bGUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwiZG9jQWNjZXNzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBRUMsRUFBRixRQUFFQSxFQUFGO0FBQUEsTUFBTUMsSUFBTixRQUFNQSxJQUFOO0FBQUEsTUFBWUMsS0FBWixRQUFZQSxLQUFaO0FBQUEsTUFBbUJDLGNBQW5CLFFBQW1CQSxjQUFuQjtBQUFBLE1BQW1DQyxXQUFuQyxRQUFtQ0EsV0FBbkM7QUFBQSxNQUFnREMsU0FBaEQsUUFBZ0RBLFNBQWhEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxZQUFJTCxFQUROO0FBRUUsY0FBTUMsSUFGUjtBQUdFLGVBQU9FLGNBSFQ7QUFJRSxrQkFBVUMsV0FKWjtBQUtFO0FBQUE7QUFBQSxVQUFRLGNBQWEsRUFBckIsRUFBd0IsY0FBeEI7QUFBa0NDO0FBQWxDLE9BTEY7QUFNRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BTkY7QUFPRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBO0FBUEYsS0FERjtBQVdFO0FBQUE7QUFBQTtBQUFRSDtBQUFSO0FBWEYsR0FEYTtBQUFBLENBQWY7O0FBZ0JBSCxPQUFPTyxTQUFQLEdBQW1CO0FBQ2pCTCxRQUFNLGdCQUFNTSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEWjtBQUVqQlAsU0FBTyxnQkFBTUssU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRmI7QUFHakJULE1BQUksZ0JBQU1PLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUhWOztBQUtqQk4sa0JBQWdCLGdCQUFNSSxTQUFOLENBQWdCQyxNQUxmO0FBTWpCSixlQUFhLGdCQUFNRyxTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQ7QUFOakIsQ0FBbkI7O2tCQVNlVixNIiwiZmlsZSI6IjAuNTM1Y2EzMGFhNmU5YmFlM2E0MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3QgPSAoe2lkLCBuYW1lLCB0aXRsZSwgc2VsZWN0ZWRPcHRpb24sIGNvbnRyb2xGdW5jLCBkb2NBY2Nlc3N9KSA9PiAoICBcbiAgPGRpdj5cbiAgICA8c2VsZWN0XG4gICAgICBpZD17aWR9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgb25DaGFuZ2U9e2NvbnRyb2xGdW5jfT5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCIgZGlzYWJsZWQ+e2RvY0FjY2Vzc308L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L29wdGlvbj5cbiAgICAgXG4gICAgPC9zZWxlY3Q+XG4gICAgPGxhYmVsPnt0aXRsZX08L2xhYmVsPlxuICA8L2Rpdj5cbik7XG5cblNlbGVjdC5wcm9wVHlwZXMgPSB7ICBcbiAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBcbiAgc2VsZWN0ZWRPcHRpb246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRyb2xGdW5jOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0OyAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybXNDb21wb25lbnQvU2VsZWN0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=