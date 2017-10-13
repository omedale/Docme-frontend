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

var Select = function Select(props) {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "select",
      {
        id: props.id,
        name: props.name,
        value: props.selectedOption,
        onChange: props.controlFunc },
      _react2.default.createElement(
        "option",
        { defaultValue: "", disabled: true },
        props.docAccess
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
      props.title
    )
  );
};

Select.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  docAccess: _react2.default.PropTypes.array,
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = Select;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Select.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwiZG9jQWNjZXNzIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxZQUFJQSxNQUFNQyxFQURaO0FBRUUsY0FBTUQsTUFBTUUsSUFGZDtBQUdFLGVBQU9GLE1BQU1HLGNBSGY7QUFJRSxrQkFBVUgsTUFBTUksV0FKbEI7QUFLRTtBQUFBO0FBQUEsVUFBUSxjQUFhLEVBQXJCLEVBQXdCLGNBQXhCO0FBQWtDSixjQUFNSztBQUF4QyxPQUxGO0FBTUU7QUFBQTtBQUFBLFVBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxPQU5GO0FBT0U7QUFBQTtBQUFBLFVBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQTtBQVBGLEtBREY7QUFXRTtBQUFBO0FBQUE7QUFBUUwsWUFBTU07QUFBZDtBQVhGLEdBRGE7QUFBQSxDQUFmOztBQWdCQVAsT0FBT1EsU0FBUCxHQUFtQjtBQUNqQkwsUUFBTSxnQkFBTU0sU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFo7QUFFakJKLFNBQU8sZ0JBQU1FLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUZiO0FBR2pCVCxNQUFJLGdCQUFNTyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFIVjtBQUlqQkwsYUFBVyxnQkFBTUcsU0FBTixDQUFnQkcsS0FKVjtBQUtqQlIsa0JBQWdCLGdCQUFNSyxTQUFOLENBQWdCQyxNQUxmO0FBTWpCTCxlQUFhLGdCQUFNSSxTQUFOLENBQWdCSSxJQUFoQixDQUFxQkY7QUFOakIsQ0FBbkI7O2tCQVNlWCxNIiwiZmlsZSI6IjAuY2E0NDlmODVlZGQ0NjBlZDhjMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdCA9IChwcm9wcykgPT4gKCAgXG4gIDxkaXY+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgIHZhbHVlPXtwcm9wcy5zZWxlY3RlZE9wdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jb250cm9sRnVuY30+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT1cIlwiIGRpc2FibGVkPntwcm9wcy5kb2NBY2Nlc3N9PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk9wdGlvbiAxPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk9wdGlvbiAyPC9vcHRpb24+XG4gICAgIFxuICAgIDwvc2VsZWN0PlxuICAgIDxsYWJlbD57cHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgPC9kaXY+XG4pO1xuXG5TZWxlY3QucHJvcFR5cGVzID0geyAgXG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZG9jQWNjZXNzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIHNlbGVjdGVkT3B0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjb250cm9sRnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1zQ29tcG9uZW50L1NlbGVjdC5qc3giXSwic291cmNlUm9vdCI6IiJ9