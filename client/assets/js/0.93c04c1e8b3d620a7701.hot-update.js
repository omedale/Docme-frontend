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
      _react2.default.createElement("option", null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsWUFBSUEsTUFBTUMsRUFEWjtBQUVFLGNBQU1ELE1BQU1FLElBRmQ7QUFHRSxlQUFPRixNQUFNRyxjQUhmO0FBSUUsa0JBQVVILE1BQU1JLFdBSmxCO0FBS0U7QUFBQTtBQUFBLFVBQVEsY0FBYSxFQUFyQixFQUF3QixjQUF4QjtBQUFBO0FBQUEsT0FMRjtBQU1FO0FBQUE7QUFBQSxVQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsT0FORjtBQU9FO0FBQUE7QUFBQSxVQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsT0FQRjtBQVFDO0FBUkQsS0FERjtBQVdFO0FBQUE7QUFBQTtBQUFRSixZQUFNSztBQUFkO0FBWEYsR0FEYTtBQUFBLENBQWY7O0FBZ0JBTixPQUFPTyxTQUFQLEdBQW1CO0FBQ2pCSixRQUFNLGdCQUFNSyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEWjtBQUVqQkosU0FBTyxnQkFBTUUsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRmI7QUFHakJSLE1BQUksZ0JBQU1NLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUhWO0FBSWpCTixrQkFBZ0IsZ0JBQU1JLFNBQU4sQ0FBZ0JDLE1BSmY7QUFLakJKLGVBQWEsZ0JBQU1HLFNBQU4sQ0FBZ0JHLElBQWhCLENBQXFCRDtBQUxqQixDQUFuQjs7a0JBUWVWLE0iLCJmaWxlIjoiMC45M2MwNGMxZThiM2Q2MjBhNzcwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2VsZWN0ID0gKHByb3BzKSA9PiAoICBcbiAgPGRpdj5cbiAgICA8c2VsZWN0XG4gICAgICBpZD17cHJvcHMuaWR9XG4gICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgdmFsdWU9e3Byb3BzLnNlbGVjdGVkT3B0aW9ufVxuICAgICAgb25DaGFuZ2U9e3Byb3BzLmNvbnRyb2xGdW5jfT5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCIgZGlzYWJsZWQ+Q2hvb3NlIHlvdXIgb3B0aW9uPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk9wdGlvbiAxPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk9wdGlvbiAyPC9vcHRpb24+XG4gICAgIDxvcHRpb24+PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICAgPGxhYmVsPntwcm9wcy50aXRsZX08L2xhYmVsPlxuICA8L2Rpdj5cbik7XG5cblNlbGVjdC5wcm9wVHlwZXMgPSB7ICBcbiAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZE9wdGlvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udHJvbEZ1bmM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7ICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==