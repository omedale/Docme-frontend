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
        "Choose your option"
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
      ),
      props.options
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
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = Select;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Select.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwib3B0aW9ucyIsInRpdGxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLFlBQUlBLE1BQU1DLEVBRFo7QUFFRSxjQUFNRCxNQUFNRSxJQUZkO0FBR0UsZUFBT0YsTUFBTUcsY0FIZjtBQUlFLGtCQUFVSCxNQUFNSSxXQUpsQjtBQUtFO0FBQUE7QUFBQSxVQUFRLGNBQWEsRUFBckIsRUFBd0IsY0FBeEI7QUFBQTtBQUFBLE9BTEY7QUFNRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BTkY7QUFPRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BUEY7QUFRR0osWUFBTUs7QUFSVCxLQURGO0FBV0U7QUFBQTtBQUFBO0FBQVFMLFlBQU1NO0FBQWQ7QUFYRixHQURhO0FBQUEsQ0FBZjs7QUFnQkFQLE9BQU9RLFNBQVAsR0FBbUI7QUFDakJMLFFBQU0sZ0JBQU1NLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURaO0FBRWpCSixTQUFPLGdCQUFNRSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFGYjtBQUdqQlQsTUFBSSxnQkFBTU8sU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBSFY7QUFJakJQLGtCQUFnQixnQkFBTUssU0FBTixDQUFnQkMsTUFKZjtBQUtqQkwsZUFBYSxnQkFBTUksU0FBTixDQUFnQkcsSUFBaEIsQ0FBcUJEO0FBTGpCLENBQW5COztrQkFRZVgsTSIsImZpbGUiOiIwLjY4OTQxZWE3YWM2Mjc2ODFiMTQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3QgPSAocHJvcHMpID0+ICggIFxuICA8ZGl2PlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICB2YWx1ZT17cHJvcHMuc2VsZWN0ZWRPcHRpb259XG4gICAgICBvbkNoYW5nZT17cHJvcHMuY29udHJvbEZ1bmN9PlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9XCJcIiBkaXNhYmxlZD5DaG9vc2UgeW91ciBvcHRpb248L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L29wdGlvbj5cbiAgICAgIHtwcm9wcy5vcHRpb25zfVxuICAgIDwvc2VsZWN0PlxuICAgIDxsYWJlbD57cHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgPC9kaXY+XG4pO1xuXG5TZWxlY3QucHJvcFR5cGVzID0geyAgXG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRPcHRpb246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRyb2xGdW5jOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0OyAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybXNDb21wb25lbnQvU2VsZWN0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=