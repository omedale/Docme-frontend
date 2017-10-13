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
  controlFunc: _react2.default.PropTypes.func.isRequired
  // content: React.PropTypes.oneOfType([
  //   React.PropTypes.string,
  //   React.PropTypes.number,
  // ]).isRequired,
  // placeholder: React.PropTypes.string,
};

exports.default = SingleInput;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SingleInput.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dC5qc3g/YzZkMyJdLCJuYW1lcyI6WyJTaW5nbGVJbnB1dCIsInByb3BzIiwiaWQiLCJuYW1lIiwiaW5wdXRUeXBlIiwiY29udGVudCIsImNvbnRyb2xGdW5jIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsU0FDbEI7QUFBQTtBQUFBO0FBQ0U7QUFDRSxVQUFJQSxNQUFNQyxFQURaO0FBRUUsWUFBTUQsTUFBTUUsSUFGZDtBQUdFLFlBQU1GLE1BQU1HLFNBSGQ7QUFJRSxhQUFPSCxNQUFNSSxPQUpmO0FBS0UsZ0JBQVVKLE1BQU1LO0FBTGxCLE1BREY7QUFRSTtBQUFBO0FBQUE7QUFBUUwsWUFBTU07QUFBZDtBQVJKLEdBRGtCO0FBQUEsQ0FBcEI7O0FBYUFQLFlBQVlRLFNBQVosR0FBd0I7QUFDdEJKLGFBQVcsZ0JBQU1LLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBdEIsRUFBMENDLFVBRC9CO0FBRXRCSixTQUFPLGdCQUFNRSxTQUFOLENBQWdCRyxNQUFoQixDQUF1QkQsVUFGUjtBQUd0QlIsUUFBTSxnQkFBTU0sU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUJELFVBSFA7QUFJdEJULE1BQUksZ0JBQU1PLFNBQU4sQ0FBZ0JHLE1BQWhCLENBQXVCRCxVQUpMO0FBS3RCTCxlQUFhLGdCQUFNRyxTQUFOLENBQWdCSSxJQUFoQixDQUFxQkY7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZzQixDQUF4Qjs7a0JBYWVYLFciLCJmaWxlIjoiMC5lYjhiMmU5NWIzYjVmZWRlNWI5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2luZ2xlSW5wdXQgPSAocHJvcHMpID0+ICggIFxuICA8ZGl2PlxuICAgIDxpbnB1dFxuICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgIHR5cGU9e3Byb3BzLmlucHV0VHlwZX1cbiAgICAgIHZhbHVlPXtwcm9wcy5jb250ZW50fVxuICAgICAgb25DaGFuZ2U9e3Byb3BzLmNvbnRyb2xGdW5jfVxuICAgIC8+XG4gICAgICA8bGFiZWw+e3Byb3BzLnRpdGxlfTwvbGFiZWw+XG4gIDwvZGl2PlxuKTtcblxuU2luZ2xlSW5wdXQucHJvcFR5cGVzID0geyAgXG4gIGlucHV0VHlwZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsndGV4dCcsICdudW1iZXInXSkuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb250cm9sRnVuYzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gY29udGVudDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIC8vICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgLy8gICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAvLyBdKS5pc1JlcXVpcmVkLFxuICAvLyBwbGFjZWhvbGRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUlucHV0OyAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==