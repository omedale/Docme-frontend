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
    _react2.default.createElement(
      'label',
      null,
      title
    ),
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SingleInput.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dC5qc3g/YzZkMyJdLCJuYW1lcyI6WyJTaW5nbGVJbnB1dCIsInByb3BzIiwiaWQiLCJuYW1lIiwiaW5wdXRUeXBlIiwiY29udGVudCIsImNvbnRyb2xGdW5jIiwidGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsU0FDbEI7QUFBQTtBQUFBO0FBQ0U7QUFDRSxVQUFJQSxNQUFNQyxFQURaO0FBRUUsWUFBTUQsTUFBTUUsSUFGZDtBQUdFLFlBQU1GLE1BQU1HLFNBSGQ7QUFJRSxhQUFPSCxNQUFNSSxPQUpmO0FBS0UsZ0JBQVVKLE1BQU1LO0FBTGxCLE1BREY7QUFRRTtBQUFBO0FBQUE7QUFBUUM7QUFBUixLQVJGO0FBU0k7QUFBQTtBQUFBO0FBQVFOLFlBQU1NO0FBQWQ7QUFUSixHQURrQjtBQUFBLENBQXBCOztBQWNBUCxZQUFZUSxTQUFaLEdBQXdCO0FBQ3RCSixhQUFXLGdCQUFNSyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQixDQUFDLE1BQUQsRUFBUyxRQUFULENBQXRCLEVBQTBDQyxVQUQvQjtBQUV0QkosU0FBTyxnQkFBTUUsU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUJELFVBRlI7QUFHdEJSLFFBQU0sZ0JBQU1NLFNBQU4sQ0FBZ0JHLE1BQWhCLENBQXVCRCxVQUhQO0FBSXRCVCxNQUFJLGdCQUFNTyxTQUFOLENBQWdCRyxNQUFoQixDQUF1QkQsVUFKTDtBQUt0QkwsZUFBYSxnQkFBTUcsU0FBTixDQUFnQkksSUFBaEIsQ0FBcUJGO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWc0IsQ0FBeEI7O2tCQWFlWCxXIiwiZmlsZSI6IjAuOTJlZGY4MGY0OGY4MTkyNjM4YTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNpbmdsZUlucHV0ID0gKHByb3BzKSA9PiAoICBcbiAgPGRpdj5cbiAgICA8aW5wdXRcbiAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICB0eXBlPXtwcm9wcy5pbnB1dFR5cGV9XG4gICAgICB2YWx1ZT17cHJvcHMuY29udGVudH1cbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jb250cm9sRnVuY31cbiAgICAvPlxuICAgIDxsYWJlbD57dGl0bGV9PC9sYWJlbD5cbiAgICAgIDxsYWJlbD57cHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgPC9kaXY+XG4pO1xuXG5TaW5nbGVJbnB1dC5wcm9wVHlwZXMgPSB7ICBcbiAgaW5wdXRUeXBlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWyd0ZXh0JywgJ251bWJlciddKS5pc1JlcXVpcmVkLFxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbnRyb2xGdW5jOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvLyBjb250ZW50OiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgLy8gICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvLyAgIFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8vIF0pLmlzUmVxdWlyZWQsXG4gIC8vIHBsYWNlaG9sZGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlSW5wdXQ7ICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dC5qc3giXSwic291cmNlUm9vdCI6IiJ9