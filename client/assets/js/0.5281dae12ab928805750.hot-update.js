webpackHotUpdate(0,{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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
    _react2.default.createElement(
      'label',
      null,
      props.title
    )
  );
};

SingleInput.propTypes = {
  inputType: _react2.default.PropTypes.oneOf(['text', 'number']).isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  name: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  controlFunc: _react2.default.PropTypes.func.isRequired,
  // content: React.PropTypes.oneOfType([
  //   React.PropTypes.string,
  //   React.PropTypes.number,
  // ]).isRequired,
  placeholder: _react2.default.PropTypes.string
};

exports.default = SingleInput;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SingleInput.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dC5qc3g/YzZkMyJdLCJuYW1lcyI6WyJTaW5nbGVJbnB1dCIsInByb3BzIiwiaWQiLCJuYW1lIiwiaW5wdXRUeXBlIiwiY29udGVudCIsImNvbnRyb2xGdW5jIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUNsQjtBQUFBO0FBQUE7QUFDRTtBQUNFLFVBQUlBLE1BQU1DLEVBRFo7QUFFRSxZQUFNRCxNQUFNRSxJQUZkO0FBR0UsWUFBTUYsTUFBTUcsU0FIZDtBQUlFLGFBQU9ILE1BQU1JLE9BSmY7QUFLRSxnQkFBVUosTUFBTUs7QUFMbEIsTUFERjtBQVFJO0FBQUE7QUFBQTtBQUFRTCxZQUFNTTtBQUFkO0FBUkosR0FEa0I7QUFBQSxDQUFwQjs7QUFhQVAsWUFBWVEsU0FBWixHQUF3QjtBQUN0QkosYUFBVyxnQkFBTUssU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBQyxNQUFELEVBQVMsUUFBVCxDQUF0QixFQUEwQ0MsVUFEL0I7QUFFdEJKLFNBQU8sZ0JBQU1FLFNBQU4sQ0FBZ0JHLE1BQWhCLENBQXVCRCxVQUZSO0FBR3RCUixRQUFNLGdCQUFNTSxTQUFOLENBQWdCRyxNQUFoQixDQUF1QkQsVUFIUDtBQUl0QlQsTUFBSSxnQkFBTU8sU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUJELFVBSkw7QUFLdEJMLGVBQWEsZ0JBQU1HLFNBQU4sQ0FBZ0JJLElBQWhCLENBQXFCRixVQUxaO0FBTXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0FHLGVBQWEsZ0JBQU1MLFNBQU4sQ0FBZ0JHO0FBVlAsQ0FBeEI7O2tCQWFlWixXIiwiZmlsZSI6IjAuNTI4MWRhZTEyYWI5Mjg4MDU3NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNpbmdsZUlucHV0ID0gKHByb3BzKSA9PiAoICBcbiAgPGRpdj5cbiAgICA8aW5wdXRcbiAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICB0eXBlPXtwcm9wcy5pbnB1dFR5cGV9XG4gICAgICB2YWx1ZT17cHJvcHMuY29udGVudH1cbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jb250cm9sRnVuY31cbiAgICAvPlxuICAgICAgPGxhYmVsPntwcm9wcy50aXRsZX08L2xhYmVsPlxuICA8L2Rpdj5cbik7XG5cblNpbmdsZUlucHV0LnByb3BUeXBlcyA9IHsgIFxuICBpbnB1dFR5cGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJ10pLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29udHJvbEZ1bmM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8vIGNvbnRlbnQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAvLyAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8vICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgLy8gXSkuaXNSZXF1aXJlZCxcbiAgcGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVJbnB1dDsgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=