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
      props.options.map(function (opt) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwib3B0aW9ucyIsIm1hcCIsIm9wdCIsInRpdGxlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsWUFBSUEsTUFBTUMsRUFEWjtBQUVFLGNBQU1ELE1BQU1FLElBRmQ7QUFHRSxlQUFPRixNQUFNRyxjQUhmO0FBSUUsa0JBQVVILE1BQU1JLFdBSmxCO0FBS0U7QUFBQTtBQUFBLFVBQVEsY0FBYSxFQUFyQixFQUF3QixjQUF4QjtBQUFBO0FBQUEsT0FMRjtBQU1FO0FBQUE7QUFBQSxVQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsT0FORjtBQU9FO0FBQUE7QUFBQSxVQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsT0FQRjtBQVFHSixZQUFNSyxPQUFOLENBQWNDLEdBQWQsQ0FBa0IsZUFBTztBQUN4QixlQUFRO0FBQUE7QUFBQTtBQUNSLGtCQUFNQyxHQURFO0FBRVIsbUJBQU9BLEdBRkM7QUFHUEE7QUFITyxTQUFSO0FBSUQsT0FMQTtBQVJILEtBREY7QUFnQkU7QUFBQTtBQUFBO0FBQVFQLFlBQU1RO0FBQWQ7QUFoQkYsR0FEYTtBQUFBLENBQWY7O0FBcUJBVCxPQUFPVSxTQUFQLEdBQW1CO0FBQ2pCUCxRQUFNLGdCQUFNUSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEWjtBQUVqQkosU0FBTyxnQkFBTUUsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRmI7QUFHakJYLE1BQUksZ0JBQU1TLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUhWO0FBSWpCUCxXQUFTLGdCQUFNSyxTQUFOLENBQWdCRyxLQUFoQixDQUFzQkQsVUFKZDtBQUtqQlQsa0JBQWdCLGdCQUFNTyxTQUFOLENBQWdCQyxNQUxmO0FBTWpCUCxlQUFhLGdCQUFNTSxTQUFOLENBQWdCSSxJQUFoQixDQUFxQkY7QUFOakIsQ0FBbkI7O2tCQVNlYixNIiwiZmlsZSI6IjAuODE1ZjQwZjQzMDNkYzM4Zjc3YjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdCA9IChwcm9wcykgPT4gKCAgXG4gIDxkaXY+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgIHZhbHVlPXtwcm9wcy5zZWxlY3RlZE9wdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jb250cm9sRnVuY30+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT1cIlwiIGRpc2FibGVkPkNob29zZSB5b3VyIG9wdGlvbjwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5PcHRpb24gMTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5PcHRpb24gMjwvb3B0aW9uPlxuICAgICAge3Byb3BzLm9wdGlvbnMubWFwKG9wdCA9PiB7XG4gICAgICAgIHJldHVybiAoPG9wdGlvblxuICAgICAgICBrZXlzPXtvcHR9XG4gICAgICAgIHZhbHVlPXtvcHR9PlxuICAgICAgICB7b3B0fTwvb3B0aW9uPilcbiAgICAgIH0pfVxuICAgIDwvc2VsZWN0PlxuICAgIDxsYWJlbD57cHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgPC9kaXY+XG4pO1xuXG5TZWxlY3QucHJvcFR5cGVzID0geyAgXG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkT3B0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjb250cm9sRnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1zQ29tcG9uZW50L1NlbGVjdC5qc3giXSwic291cmNlUm9vdCI6IiJ9