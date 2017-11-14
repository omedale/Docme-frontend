webpackHotUpdate(0,{

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingleInput = function SingleInput(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('input', {
      id: props.id,
      name: props.name,
      type: props.inputType,
      value: props.content,
      onChange: props.controlFunc
    }),
    _react2.default.createElement('label', null)
  );
};

SingleInput.propTypes = {
  inputType: _react2.default.PropTypes.oneOf(['text', 'number']).isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  name: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  controlFunc: _react2.default.PropTypes.func.isRequired
  // content: React.PropTypes.oneOfType([
  //   React.PropTypes.string,
  //   React.PropTypes.number,
  // ]).isRequired,
  // placeholder: React.PropTypes.string,
};

exports.default = SingleInput;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SingleInput.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dC5qc3g/YzZkMyJdLCJuYW1lcyI6WyJTaW5nbGVJbnB1dCIsInByb3BzIiwiaWQiLCJuYW1lIiwiaW5wdXRUeXBlIiwiY29udGVudCIsImNvbnRyb2xGdW5jIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwidGl0bGUiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsU0FDbEI7QUFBQTtBQUFBO0FBQ0U7QUFDRSxVQUFJQSxNQUFNQyxFQURaO0FBRUUsWUFBTUQsTUFBTUUsSUFGZDtBQUdFLFlBQU1GLE1BQU1HLFNBSGQ7QUFJRSxhQUFPSCxNQUFNSSxPQUpmO0FBS0UsZ0JBQVVKLE1BQU1LO0FBTGxCLE1BREY7QUFRSTtBQVJKLEdBRGtCO0FBQUEsQ0FBcEI7O0FBYUFOLFlBQVlPLFNBQVosR0FBd0I7QUFDdEJILGFBQVcsZ0JBQU1JLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBdEIsRUFBMENDLFVBRC9CO0FBRXRCQyxTQUFPLGdCQUFNSCxTQUFOLENBQWdCSSxNQUFoQixDQUF1QkYsVUFGUjtBQUd0QlAsUUFBTSxnQkFBTUssU0FBTixDQUFnQkksTUFBaEIsQ0FBdUJGLFVBSFA7QUFJdEJSLE1BQUksZ0JBQU1NLFNBQU4sQ0FBZ0JJLE1BQWhCLENBQXVCRixVQUpMO0FBS3RCSixlQUFhLGdCQUFNRSxTQUFOLENBQWdCSyxJQUFoQixDQUFxQkg7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZzQixDQUF4Qjs7a0JBYWVWLFciLCJmaWxlIjoiMC41MGVmZTJkMzNmMmU4MzNjMGU4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2luZ2xlSW5wdXQgPSAocHJvcHMpID0+ICggIFxuICA8ZGl2PlxuICAgIDxpbnB1dFxuICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgIHR5cGU9e3Byb3BzLmlucHV0VHlwZX1cbiAgICAgIHZhbHVlPXtwcm9wcy5jb250ZW50fVxuICAgICAgb25DaGFuZ2U9e3Byb3BzLmNvbnRyb2xGdW5jfVxuICAgIC8+XG4gICAgICA8bGFiZWw+e308L2xhYmVsPlxuICA8L2Rpdj5cbik7XG5cblNpbmdsZUlucHV0LnByb3BUeXBlcyA9IHsgIFxuICBpbnB1dFR5cGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJ10pLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29udHJvbEZ1bmM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8vIGNvbnRlbnQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAvLyAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8vICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLy8gXSkuaXNSZXF1aXJlZCxcbiAgLy8gcGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVJbnB1dDsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=