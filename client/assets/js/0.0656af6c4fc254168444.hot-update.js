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
      props.docAccess.map(function (opt) {
        return _react2.default.createElement(
          "option",
          {
            keys: opt,
            value: opt },
          opt
        );
      })
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
  options: _react2.default.PropTypes.array.isRequired,
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = Select;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Select.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwiZG9jQWNjZXNzIiwibWFwIiwib3B0IiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib3B0aW9ucyIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsWUFBSUEsTUFBTUMsRUFEWjtBQUVFLGNBQU1ELE1BQU1FLElBRmQ7QUFHRSxlQUFPRixNQUFNRyxjQUhmO0FBSUUsa0JBQVVILE1BQU1JLFdBSmxCO0FBS0U7QUFBQTtBQUFBLFVBQVEsY0FBYSxFQUFyQixFQUF3QixjQUF4QjtBQUFBO0FBQUEsT0FMRjtBQU1FO0FBQUE7QUFBQSxVQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsT0FORjtBQU9FO0FBQUE7QUFBQSxVQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsT0FQRjtBQVFHSixZQUFNSyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixlQUFPO0FBQzFCLGVBQVE7QUFBQTtBQUFBO0FBQ1Isa0JBQU1DLEdBREU7QUFFUixtQkFBT0EsR0FGQztBQUdQQTtBQUhPLFNBQVI7QUFJRCxPQUxBO0FBUkgsS0FERjtBQWdCRTtBQUFBO0FBQUE7QUFBUVAsWUFBTVE7QUFBZDtBQWhCRixHQURhO0FBQUEsQ0FBZjs7QUFxQkFULE9BQU9VLFNBQVAsR0FBbUI7QUFDakJQLFFBQU0sZ0JBQU1RLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURaO0FBRWpCSixTQUFPLGdCQUFNRSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFGYjtBQUdqQlgsTUFBSSxnQkFBTVMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBSFY7QUFJakJDLFdBQVMsZ0JBQU1ILFNBQU4sQ0FBZ0JJLEtBQWhCLENBQXNCRixVQUpkO0FBS2pCVCxrQkFBZ0IsZ0JBQU1PLFNBQU4sQ0FBZ0JDLE1BTGY7QUFNakJQLGVBQWEsZ0JBQU1NLFNBQU4sQ0FBZ0JLLElBQWhCLENBQXFCSDtBQU5qQixDQUFuQjs7a0JBU2ViLE0iLCJmaWxlIjoiMC4wNjU2YWY2YzRmYzI1NDE2ODQ0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2VsZWN0ID0gKHByb3BzKSA9PiAoICBcbiAgPGRpdj5cbiAgICA8c2VsZWN0XG4gICAgICBpZD17cHJvcHMuaWR9XG4gICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgdmFsdWU9e3Byb3BzLnNlbGVjdGVkT3B0aW9ufVxuICAgICAgb25DaGFuZ2U9e3Byb3BzLmNvbnRyb2xGdW5jfT5cbiAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCIgZGlzYWJsZWQ+Q2hvb3NlIHlvdXIgb3B0aW9uPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk9wdGlvbiAxPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk9wdGlvbiAyPC9vcHRpb24+XG4gICAgICB7cHJvcHMuZG9jQWNjZXNzLm1hcChvcHQgPT4ge1xuICAgICAgICByZXR1cm4gKDxvcHRpb25cbiAgICAgICAga2V5cz17b3B0fVxuICAgICAgICB2YWx1ZT17b3B0fT5cbiAgICAgICAge29wdH08L29wdGlvbj4pXG4gICAgICB9KX1cbiAgICA8L3NlbGVjdD5cbiAgICA8bGFiZWw+e3Byb3BzLnRpdGxlfTwvbGFiZWw+XG4gIDwvZGl2PlxuKTtcblxuU2VsZWN0LnByb3BUeXBlcyA9IHsgIFxuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9wdGlvbnM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZE9wdGlvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udHJvbEZ1bmM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7ICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==