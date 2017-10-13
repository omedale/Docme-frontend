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
  docAccess: _react2.default.PropTypes.array,
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = Select;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Select.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwiaWQiLCJuYW1lIiwidGl0bGUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwiZG9jQWNjZXNzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFFQyxFQUFGLFFBQUVBLEVBQUY7QUFBQSxNQUFNQyxJQUFOLFFBQU1BLElBQU47QUFBQSxNQUFZQyxLQUFaLFFBQVlBLEtBQVo7QUFBQSxNQUFtQkMsY0FBbkIsUUFBbUJBLGNBQW5CO0FBQUEsTUFBbUNDLFdBQW5DLFFBQW1DQSxXQUFuQztBQUFBLE1BQWdEQyxTQUFoRCxRQUFnREEsU0FBaEQ7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLFlBQUlMLEVBRE47QUFFRSxjQUFNQyxJQUZSO0FBR0UsZUFBT0UsY0FIVDtBQUlFLGtCQUFVQyxXQUpaO0FBS0U7QUFBQTtBQUFBLFVBQVEsY0FBYSxFQUFyQixFQUF3QixjQUF4QjtBQUFrQ0M7QUFBbEMsT0FMRjtBQU1FO0FBQUE7QUFBQSxVQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsT0FORjtBQU9FO0FBQUE7QUFBQSxVQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFQRixLQURGO0FBV0U7QUFBQTtBQUFBO0FBQVFIO0FBQVI7QUFYRixHQURhO0FBQUEsQ0FBZjs7QUFnQkFILE9BQU9PLFNBQVAsR0FBbUI7QUFDakJMLFFBQU0sZ0JBQU1NLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURaO0FBRWpCUCxTQUFPLGdCQUFNSyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFGYjtBQUdqQlQsTUFBSSxnQkFBTU8sU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBSFY7QUFJakJKLGFBQVcsZ0JBQU1FLFNBQU4sQ0FBZ0JHLEtBSlY7QUFLakJQLGtCQUFnQixnQkFBTUksU0FBTixDQUFnQkMsTUFMZjtBQU1qQkosZUFBYSxnQkFBTUcsU0FBTixDQUFnQkksSUFBaEIsQ0FBcUJGO0FBTmpCLENBQW5COztrQkFTZVYsTSIsImZpbGUiOiIwLjRhM2U3OWYzY2ZkNWIzMzAzODRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2VsZWN0ID0gKHtpZCwgbmFtZSwgdGl0bGUsIHNlbGVjdGVkT3B0aW9uLCBjb250cm9sRnVuYywgZG9jQWNjZXNzfSkgPT4gKCAgXG4gIDxkaXY+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e2lkfVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXtjb250cm9sRnVuY30+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT1cIlwiIGRpc2FibGVkPntkb2NBY2Nlc3N9PC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk9wdGlvbiAxPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPk9wdGlvbiAyPC9vcHRpb24+XG4gICAgIFxuICAgIDwvc2VsZWN0PlxuICAgIDxsYWJlbD57dGl0bGV9PC9sYWJlbD5cbiAgPC9kaXY+XG4pO1xuXG5TZWxlY3QucHJvcFR5cGVzID0geyAgXG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZG9jQWNjZXNzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gIHNlbGVjdGVkT3B0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjb250cm9sRnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1zQ29tcG9uZW50L1NlbGVjdC5qc3giXSwic291cmNlUm9vdCI6IiJ9