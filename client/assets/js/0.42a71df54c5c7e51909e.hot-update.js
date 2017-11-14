webpackHotUpdate(0,{

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ApiCalls = __webpack_require__(34);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TinyMce react component class
 * @class TinyMceComponent
 * @extends {Component}
 */
var TinyMceEditor = function (_Component) {
  _inherits(TinyMceEditor, _Component);

  /**
   * Creates an instance of TinyMceComponent.
   * @memberOf TinyMceComponent
   */
  function TinyMceEditor() {
    _classCallCheck(this, TinyMceEditor);

    var _this = _possibleConstructorReturn(this, (TinyMceEditor.__proto__ || Object.getPrototypeOf(TinyMceEditor)).call(this));

    _this.state = {
      editor: null,
      tinymceContent: ''
    };
    return _this;
  }

  _createClass(TinyMceEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      // tinymce.activeEditor.setContent(`${nextProps.defaultValue}`, {format: 'raw'});
    }
    /**
     * Initialize tinymce on compnent mount
     * @method ComponentDidMount
     * @return {void}
     * @memberOf TinyMceComponent
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      tinymce.init({
        selector: '#' + this.props.id,
        height: "400",
        plugins: 'autolink link image lists \n      print preview textcolor table emoticons codesample',
        toolbar: 'undo redo | bold italic | \n      fontsizeselect fontselect | \n      alignleft aligncenter alignright | forecolor backcolor \n      | table | numlist bullist | emoticons | codesample',
        table_toolbar: 'tableprops tabledelete  \n      | tableinsertrowbefore \n      tableinsertrowafter tabledeleterow | tableinsertcolbefore \n      tableinsertcolafter tabledeletecol',
        fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
        setup: function setup(editor) {
          _this2.setState({ editor: editor });
          editor.on('keyup change', function () {
            var content = editor.getContent();
            _this2.props.handleEditorChange(content);
          });
        }
      });
    }

    /**
     * Remove instance of tinymce on compnent unmount
     * @method ComponentWillUnmount
     * @return {void}
     * @memberOf TinyMceComponent
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      tinymce.remove(this.state.editor);
    }

    /**
     * Renders the component
     * @method render
     * @return {void}
     * @memberOf TinyMceComponent
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('textarea', {
        id: this.props.id,
        defaultValue: this.props.defaultValue
      });
    }
  }]);

  return TinyMceEditor;
}(_react.Component);

TinyMceEditor.propTypes = {
  id: _propTypes2.default.string.isRequired,
  handleEditorChange: _propTypes2.default.func.isRequired
};

exports.default = TinyMceEditor;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TinyMceEditor.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeD9jNGU3Il0sIm5hbWVzIjpbIlRpbnlNY2VFZGl0b3IiLCJzdGF0ZSIsImVkaXRvciIsInRpbnltY2VDb250ZW50IiwibmV4dFByb3BzIiwiY29uc29sZSIsImxvZyIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJwcm9wcyIsImlkIiwiaGVpZ2h0IiwicGx1Z2lucyIsInRvb2xiYXIiLCJ0YWJsZV90b29sYmFyIiwiZm9udHNpemVfZm9ybWF0cyIsInNldHVwIiwic2V0U3RhdGUiLCJvbiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiaGFuZGxlRWRpdG9yQ2hhbmdlIiwicmVtb3ZlIiwiZGVmYXVsdFZhbHVlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS01BLGE7OztBQUNKOzs7O0FBSUEsMkJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUSxJQURHO0FBRVhDLHNCQUFnQjtBQUZMLEtBQWI7QUFGWTtBQU1iOzs7OzhDQUN5QkMsUyxFQUFXO0FBQ25DQyxjQUFRQyxHQUFSLENBQVlGLFNBQVo7QUFDQTtBQUNEO0FBQ0Q7Ozs7Ozs7Ozt3Q0FNb0I7QUFBQTs7QUFDbEJHLGNBQVFDLElBQVIsQ0FBYTtBQUNYQyx3QkFBYSxLQUFLQyxLQUFMLENBQVdDLEVBRGI7QUFFWEMsZ0JBQVMsS0FGRTtBQUdYQyx1R0FIVztBQUtYQywwTUFMVztBQVNYQyw0TEFUVztBQWFYQywwQkFBa0IsbUNBYlA7QUFjWEMsZUFBTyxlQUFDZixNQUFELEVBQVk7QUFDakIsaUJBQUtnQixRQUFMLENBQWMsRUFBRWhCLGNBQUYsRUFBZDtBQUNBQSxpQkFBT2lCLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFlBQU07QUFDOUIsZ0JBQU1DLFVBQVVsQixPQUFPbUIsVUFBUCxFQUFoQjtBQUNBLG1CQUFLWCxLQUFMLENBQVdZLGtCQUFYLENBQThCRixPQUE5QjtBQUNELFdBSEQ7QUFJRDtBQXBCVSxPQUFiO0FBc0JEOztBQUVEOzs7Ozs7Ozs7MkNBTXVCO0FBQ3JCYixjQUFRZ0IsTUFBUixDQUFlLEtBQUt0QixLQUFMLENBQVdDLE1BQTFCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs2QkFNUztBQUNQLGFBQ0U7QUFDRSxZQUFJLEtBQUtRLEtBQUwsQ0FBV0MsRUFEakI7QUFFRSxzQkFBYyxLQUFLRCxLQUFMLENBQVdjO0FBRjNCLFFBREY7QUFNRDs7Ozs7O0FBR0h4QixjQUFjeUIsU0FBZCxHQUEwQjtBQUN4QmQsTUFBSSxvQkFBVWUsTUFBVixDQUFpQkMsVUFERztBQUV4Qkwsc0JBQW9CLG9CQUFVTSxJQUFWLENBQWVEO0FBRlgsQ0FBMUI7O2tCQUtlM0IsYSIsImZpbGUiOiIwLjQyYTcxZGY1NGM1YzdlNTE5MDllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4uL3V0aWwvQXBpQ2FsbHMnXG5cbi8qKlxuICogVGlueU1jZSByZWFjdCBjb21wb25lbnQgY2xhc3NcbiAqIEBjbGFzcyBUaW55TWNlQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5jbGFzcyBUaW55TWNlRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgVGlueU1jZUNvbXBvbmVudC5cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBlZGl0b3I6IG51bGwsXG4gICAgICB0aW55bWNlQ29udGVudDogJydcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc29sZS5sb2cobmV4dFByb3BzKVxuICAgIC8vIHRpbnltY2UuYWN0aXZlRWRpdG9yLnNldENvbnRlbnQoYCR7bmV4dFByb3BzLmRlZmF1bHRWYWx1ZX1gLCB7Zm9ybWF0OiAncmF3J30pO1xuICB9XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRpbnltY2Ugb24gY29tcG5lbnQgbW91bnRcbiAgICogQG1ldGhvZCBDb21wb25lbnREaWRNb3VudFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGlueW1jZS5pbml0KHtcbiAgICAgIHNlbGVjdG9yOmAjJHt0aGlzLnByb3BzLmlkfWAsXG4gICAgICBoZWlnaHQgOiBcIjQwMFwiLFxuICAgICAgcGx1Z2luczogYGF1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgXG4gICAgICBwcmludCBwcmV2aWV3IHRleHRjb2xvciB0YWJsZSBlbW90aWNvbnMgY29kZXNhbXBsZWAsXG4gICAgICB0b29sYmFyOiBgdW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgfCBcbiAgICAgIGZvbnRzaXplc2VsZWN0IGZvbnRzZWxlY3QgfCBcbiAgICAgIGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgZm9yZWNvbG9yIGJhY2tjb2xvciBcbiAgICAgIHwgdGFibGUgfCBudW1saXN0IGJ1bGxpc3QgfCBlbW90aWNvbnMgfCBjb2Rlc2FtcGxlYCxcbiAgICAgIHRhYmxlX3Rvb2xiYXI6IGB0YWJsZXByb3BzIHRhYmxlZGVsZXRlICBcbiAgICAgIHwgdGFibGVpbnNlcnRyb3diZWZvcmUgXG4gICAgICB0YWJsZWluc2VydHJvd2FmdGVyIHRhYmxlZGVsZXRlcm93IHwgdGFibGVpbnNlcnRjb2xiZWZvcmUgXG4gICAgICB0YWJsZWluc2VydGNvbGFmdGVyIHRhYmxlZGVsZXRlY29sYCxcbiAgICAgIGZvbnRzaXplX2Zvcm1hdHM6ICc4cHQgMTBwdCAxMnB0IDE0cHQgMThwdCAyNHB0IDM2cHQnLFxuICAgICAgc2V0dXA6IChlZGl0b3IpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRvciB9KTtcbiAgICAgICAgZWRpdG9yLm9uKCdrZXl1cCBjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGVkaXRvci5nZXRDb250ZW50KCk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVFZGl0b3JDaGFuZ2UoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnN0YW5jZSBvZiB0aW55bWNlIG9uIGNvbXBuZW50IHVubW91bnRcbiAgICogQG1ldGhvZCBDb21wb25lbnRXaWxsVW5tb3VudFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGlueW1jZS5yZW1vdmUodGhpcy5zdGF0ZS5lZGl0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbXBvbmVudFxuICAgKiBAbWV0aG9kIHJlbmRlclxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuVGlueU1jZUVkaXRvci5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUVkaXRvckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbnlNY2VFZGl0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvVGlueU1jZUVkaXRvci5qc3giXSwic291cmNlUm9vdCI6IiJ9