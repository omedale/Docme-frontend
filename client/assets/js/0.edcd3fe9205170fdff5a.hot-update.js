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
      _react2.default.createElement("option", { defaultValue: "", disabled: true }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZG9jQWNjZXNzIiwiYXJyYXkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxZQUFJQSxNQUFNQyxFQURaO0FBRUUsY0FBTUQsTUFBTUUsSUFGZDtBQUdFLGVBQU9GLE1BQU1HLGNBSGY7QUFJRSxrQkFBVUgsTUFBTUksV0FKbEI7QUFLRSxnREFBUSxjQUFhLEVBQXJCLEVBQXdCLGNBQXhCLEdBTEY7QUFNRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BTkY7QUFPRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBO0FBUEYsS0FERjtBQVdFO0FBQUE7QUFBQTtBQUFRSixZQUFNSztBQUFkO0FBWEYsR0FEYTtBQUFBLENBQWY7O0FBZ0JBTixPQUFPTyxTQUFQLEdBQW1CO0FBQ2pCSixRQUFNLGdCQUFNSyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEWjtBQUVqQkosU0FBTyxnQkFBTUUsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRmI7QUFHakJSLE1BQUksZ0JBQU1NLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUhWO0FBSWpCQyxhQUFXLGdCQUFNSCxTQUFOLENBQWdCSSxLQUpWO0FBS2pCUixrQkFBZ0IsZ0JBQU1JLFNBQU4sQ0FBZ0JDLE1BTGY7QUFNakJKLGVBQWEsZ0JBQU1HLFNBQU4sQ0FBZ0JLLElBQWhCLENBQXFCSDtBQU5qQixDQUFuQjs7a0JBU2VWLE0iLCJmaWxlIjoiMC5lZGNkM2ZlOTIwNTE3MGZkZmY1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2VsZWN0ID0gKHByb3BzKSA9PiAoICBcbiAgPGRpdj5cbiAgICA8c2VsZWN0XG4gICAgICBpZD17cHJvcHMuaWR9XG4gICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgdmFsdWU9e3Byb3BzLnNlbGVjdGVkT3B0aW9ufVxuICAgICAgb25DaGFuZ2U9e3Byb3BzLmNvbnRyb2xGdW5jfT5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCIgZGlzYWJsZWQ+e308L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L29wdGlvbj5cbiAgICAgXG4gICAgPC9zZWxlY3Q+XG4gICAgPGxhYmVsPntwcm9wcy50aXRsZX08L2xhYmVsPlxuICA8L2Rpdj5cbik7XG5cblNlbGVjdC5wcm9wVHlwZXMgPSB7ICBcbiAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkb2NBY2Nlc3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgc2VsZWN0ZWRPcHRpb246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRyb2xGdW5jOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0OyAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybXNDb21wb25lbnQvU2VsZWN0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=