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
      docAccess.map(function (option) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwiaWQiLCJuYW1lIiwidGl0bGUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwiZG9jQWNjZXNzIiwibWFwIiwib3B0aW9uIiwidmFsdWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBRUMsRUFBRixRQUFFQSxFQUFGO0FBQUEsTUFBTUMsSUFBTixRQUFNQSxJQUFOO0FBQUEsTUFBWUMsS0FBWixRQUFZQSxLQUFaO0FBQUEsTUFBbUJDLGNBQW5CLFFBQW1CQSxjQUFuQjtBQUFBLE1BQW1DQyxXQUFuQyxRQUFtQ0EsV0FBbkM7QUFBQSxNQUFnREMsU0FBaEQsUUFBZ0RBLFNBQWhEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxZQUFJTCxFQUROO0FBRUUsY0FBTUMsSUFGUjtBQUdFLGVBQU9FLGNBSFQ7QUFJRSxrQkFBVUMsV0FKWjtBQUtFO0FBQUE7QUFBQSxVQUFRLGNBQWEsRUFBckIsRUFBd0IsY0FBeEI7QUFBQTtBQUFBLE9BTEY7QUFNRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BTkY7QUFPRTtBQUFBO0FBQUEsVUFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLE9BUEY7QUFRR0MsZ0JBQVVDLEdBQVYsQ0FBYyxrQkFBVTtBQUN2QixlQUFPO0FBQUE7QUFBQSxZQUFRLEtBQUtDLE9BQU9QLEVBQXBCO0FBQUE7QUFBMEJPLGlCQUFPQyxLQUFqQztBQUFBO0FBQUEsU0FBUDtBQUNELE9BRkE7QUFSSCxLQURGO0FBY0U7QUFBQTtBQUFBO0FBQVFOO0FBQVI7QUFkRixHQURhO0FBQUEsQ0FBZjs7QUFtQkFILE9BQU9VLFNBQVAsR0FBbUI7QUFDakJSLFFBQU0sZ0JBQU1TLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURaO0FBRWpCVixTQUFPLGdCQUFNUSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFGYjtBQUdqQlosTUFBSSxnQkFBTVUsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBSFY7QUFJakJQLGFBQVcsZ0JBQU1LLFNBQU4sQ0FBZ0JHLE9BQWhCLENBQXdCLGlCQUFVQyxNQUFsQyxDQUpNO0FBS2pCWCxrQkFBZ0IsZ0JBQU1PLFNBQU4sQ0FBZ0JDLE1BTGY7QUFNakJQLGVBQWEsZ0JBQU1NLFNBQU4sQ0FBZ0JLLElBQWhCLENBQXFCSDtBQU5qQixDQUFuQjs7a0JBU2ViLE0iLCJmaWxlIjoiMC40YzI5NjQ0MWY4MzQzNWMwZWI0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdCA9ICh7aWQsIG5hbWUsIHRpdGxlLCBzZWxlY3RlZE9wdGlvbiwgY29udHJvbEZ1bmMsIGRvY0FjY2Vzc30pID0+ICggIFxuICA8ZGl2PlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPXtpZH1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICBvbkNoYW5nZT17Y29udHJvbEZ1bmN9PlxuICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWU9XCJcIiBkaXNhYmxlZD4gIDwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5vcHRpb24gMTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5PcHRpb24gMjwvb3B0aW9uPlxuICAgICAge2RvY0FjY2Vzcy5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtvcHRpb24uaWR9PiB7b3B0aW9uLnZhbHVlfSA8L29wdGlvbj47XG4gICAgICB9KVxuICAgIH1cbiAgICA8L3NlbGVjdD5cbiAgICA8bGFiZWw+e3RpdGxlfTwvbGFiZWw+XG4gIDwvZGl2PlxuKTtcblxuU2VsZWN0LnByb3BUeXBlcyA9IHsgIFxuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRvY0FjY2VzczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIHNlbGVjdGVkT3B0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjb250cm9sRnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1zQ29tcG9uZW50L1NlbGVjdC5qc3giXSwic291cmNlUm9vdCI6IiJ9