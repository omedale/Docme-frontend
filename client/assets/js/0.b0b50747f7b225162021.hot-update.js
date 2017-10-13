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
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = Select;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Select.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsWUFBSUEsTUFBTUMsRUFEWjtBQUVFLGNBQU1ELE1BQU1FLElBRmQ7QUFHRSxlQUFPRixNQUFNRyxjQUhmO0FBSUUsa0JBQVVILE1BQU1JLFdBSmxCO0FBS0U7QUFBQTtBQUFBLFVBQVEsY0FBYSxFQUFyQixFQUF3QixjQUF4QjtBQUFBO0FBQUEsT0FMRjtBQU1FO0FBQUE7QUFBQSxVQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsT0FORjtBQU9FO0FBQUE7QUFBQSxVQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFQRixLQURGO0FBV0U7QUFBQTtBQUFBO0FBQVFKLFlBQU1LO0FBQWQ7QUFYRixHQURhO0FBQUEsQ0FBZjs7QUFnQkFOLE9BQU9PLFNBQVAsR0FBbUI7QUFDakJKLFFBQU0sZ0JBQU1LLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURaO0FBRWpCSixTQUFPLGdCQUFNRSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFGYjtBQUdqQlIsTUFBSSxnQkFBTU0sU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBSFY7QUFJakJOLGtCQUFnQixnQkFBTUksU0FBTixDQUFnQkMsTUFKZjtBQUtqQkosZUFBYSxnQkFBTUcsU0FBTixDQUFnQkcsSUFBaEIsQ0FBcUJEO0FBTGpCLENBQW5COztrQkFRZVYsTSIsImZpbGUiOiIwLmIwYjUwNzQ3ZjdiMjI1MTYyMDIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3QgPSAocHJvcHMpID0+ICggIFxuICA8ZGl2PlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICB2YWx1ZT17cHJvcHMuc2VsZWN0ZWRPcHRpb259XG4gICAgICBvbkNoYW5nZT17cHJvcHMuY29udHJvbEZ1bmN9PlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9XCJcIiBkaXNhYmxlZD5DaG9vc2UgeW91ciBvcHRpb248L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L29wdGlvbj5cbiAgICAgXG4gICAgPC9zZWxlY3Q+XG4gICAgPGxhYmVsPntwcm9wcy50aXRsZX08L2xhYmVsPlxuICA8L2Rpdj5cbik7XG5cblNlbGVjdC5wcm9wVHlwZXMgPSB7ICBcbiAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZE9wdGlvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udHJvbEZ1bmM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7ICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==