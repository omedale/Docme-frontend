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
      props.options.maps(function (opt) {
        _react2.default.createElement(
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
  selectedOption: _react2.default.PropTypes.string,
  controlFunc: _react2.default.PropTypes.func.isRequired
};

exports.default = Select;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Select.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QuanN4P2M0NzkiXSwibmFtZXMiOlsiU2VsZWN0IiwicHJvcHMiLCJpZCIsIm5hbWUiLCJzZWxlY3RlZE9wdGlvbiIsImNvbnRyb2xGdW5jIiwib3B0aW9ucyIsIm1hcHMiLCJvcHQiLCJ0aXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxZQUFJQSxNQUFNQyxFQURaO0FBRUUsY0FBTUQsTUFBTUUsSUFGZDtBQUdFLGVBQU9GLE1BQU1HLGNBSGY7QUFJRSxrQkFBVUgsTUFBTUksV0FKbEI7QUFLRTtBQUFBO0FBQUEsVUFBUSxjQUFhLEVBQXJCLEVBQXdCLGNBQXhCO0FBQUE7QUFBQSxPQUxGO0FBTUU7QUFBQTtBQUFBLFVBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxPQU5GO0FBT0U7QUFBQTtBQUFBLFVBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxPQVBGO0FBUUdKLFlBQU1LLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixlQUFPO0FBQ3pCO0FBQUE7QUFBQTtBQUNBLGtCQUFNQyxHQUROO0FBRUEsbUJBQU9BLEdBRlA7QUFHQ0E7QUFIRDtBQUlELE9BTEE7QUFSSCxLQURGO0FBZ0JFO0FBQUE7QUFBQTtBQUFRUCxZQUFNUTtBQUFkO0FBaEJGLEdBRGE7QUFBQSxDQUFmOztBQXFCQVQsT0FBT1UsU0FBUCxHQUFtQjtBQUNqQlAsUUFBTSxnQkFBTVEsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFo7QUFFakJKLFNBQU8sZ0JBQU1FLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQUZiO0FBR2pCWCxNQUFJLGdCQUFNUyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFIVjtBQUlqQlQsa0JBQWdCLGdCQUFNTyxTQUFOLENBQWdCQyxNQUpmO0FBS2pCUCxlQUFhLGdCQUFNTSxTQUFOLENBQWdCRyxJQUFoQixDQUFxQkQ7QUFMakIsQ0FBbkI7O2tCQVFlYixNIiwiZmlsZSI6IjAuMWI3M2RlYzYwNWEzN2UzNzhkZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdCA9IChwcm9wcykgPT4gKCAgXG4gIDxkaXY+XG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgIHZhbHVlPXtwcm9wcy5zZWxlY3RlZE9wdGlvbn1cbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jb250cm9sRnVuY30+XG4gICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT1cIlwiIGRpc2FibGVkPkNob29zZSB5b3VyIG9wdGlvbjwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5PcHRpb24gMTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5PcHRpb24gMjwvb3B0aW9uPlxuICAgICAge3Byb3BzLm9wdGlvbnMubWFwcyhvcHQgPT4ge1xuICAgICAgICA8b3B0aW9uXG4gICAgICAgIGtleXM9e29wdH1cbiAgICAgICAgdmFsdWU9e29wdH0+XG4gICAgICAgIHtvcHR9PC9vcHRpb24+XG4gICAgICB9KX1cbiAgICA8L3NlbGVjdD5cbiAgICA8bGFiZWw+e3Byb3BzLnRpdGxlfTwvbGFiZWw+XG4gIDwvZGl2PlxuKTtcblxuU2VsZWN0LnByb3BUeXBlcyA9IHsgIFxuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkT3B0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjb250cm9sRnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1zQ29tcG9uZW50L1NlbGVjdC5qc3giXSwic291cmNlUm9vdCI6IiJ9