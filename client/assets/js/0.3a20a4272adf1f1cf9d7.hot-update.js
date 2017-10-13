webpackHotUpdate(0,{

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

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
      onChange: props.controlFunc,
      placeholder: props.placeholder }),
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
  content: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.any]).isRequired,
  placeholder: _react2.default.PropTypes.string
};

exports.default = SingleInput;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SingleInput.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dC5qc3g/YzZkMyJdLCJuYW1lcyI6WyJTaW5nbGVJbnB1dCIsInByb3BzIiwiaWQiLCJuYW1lIiwiaW5wdXRUeXBlIiwiY29udGVudCIsImNvbnRyb2xGdW5jIiwicGxhY2Vob2xkZXIiLCJ0aXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUNsQjtBQUFBO0FBQUE7QUFDRTtBQUNFLFVBQUlBLE1BQU1DLEVBRFo7QUFFRSxZQUFNRCxNQUFNRSxJQUZkO0FBR0UsWUFBTUYsTUFBTUcsU0FIZDtBQUlFLGFBQU9ILE1BQU1JLE9BSmY7QUFLRSxnQkFBVUosTUFBTUssV0FMbEI7QUFNRSxtQkFBYUwsTUFBTU0sV0FOckIsR0FERjtBQVFJO0FBQUE7QUFBQTtBQUFRTixZQUFNTztBQUFkO0FBUkosR0FEa0I7QUFBQSxDQUFwQjs7QUFhQVIsWUFBWVMsU0FBWixHQUF3QjtBQUN0QkwsYUFBVyxnQkFBTU0sU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBQyxNQUFELEVBQVMsUUFBVCxDQUF0QixFQUEwQ0MsVUFEL0I7QUFFdEJKLFNBQU8sZ0JBQU1FLFNBQU4sQ0FBZ0JHLE1BQWhCLENBQXVCRCxVQUZSO0FBR3RCVCxRQUFNLGdCQUFNTyxTQUFOLENBQWdCRyxNQUFoQixDQUF1QkQsVUFIUDtBQUl0QlYsTUFBSSxnQkFBTVEsU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUJELFVBSkw7QUFLdEJOLGVBQWEsZ0JBQU1JLFNBQU4sQ0FBZ0JJLElBQWhCLENBQXFCRixVQUxaO0FBTXRCUCxXQUFTLGdCQUFNSyxTQUFOLENBQWdCSyxTQUFoQixDQUEwQixDQUNqQyxnQkFBTUwsU0FBTixDQUFnQkcsTUFEaUIsRUFFakMsZ0JBQU1ILFNBQU4sQ0FBZ0JNLE1BRmlCLEVBR2pDLGdCQUFNTixTQUFOLENBQWdCTyxHQUhpQixDQUExQixFQUlOTCxVQVZtQjtBQVd0QkwsZUFBYSxnQkFBTUcsU0FBTixDQUFnQkc7QUFYUCxDQUF4Qjs7a0JBY2ViLFciLCJmaWxlIjoiMC4zYTIwYTQyNzJhZGYxZjFjZjlkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2luZ2xlSW5wdXQgPSAocHJvcHMpID0+ICggIFxuICA8ZGl2PlxuICAgIDxpbnB1dFxuICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgIHR5cGU9e3Byb3BzLmlucHV0VHlwZX1cbiAgICAgIHZhbHVlPXtwcm9wcy5jb250ZW50fVxuICAgICAgb25DaGFuZ2U9e3Byb3BzLmNvbnRyb2xGdW5jfVxuICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfSAvPlxuICAgICAgPGxhYmVsPntwcm9wcy50aXRsZX08L2xhYmVsPlxuICA8L2Rpdj5cbik7XG5cblNpbmdsZUlucHV0LnByb3BUeXBlcyA9IHsgIFxuICBpbnB1dFR5cGU6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJ10pLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29udHJvbEZ1bmM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNvbnRlbnQ6IFJlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBSZWFjdC5Qcm9wVHlwZXMuYW55LFxuICBdKS5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUlucHV0OyAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==