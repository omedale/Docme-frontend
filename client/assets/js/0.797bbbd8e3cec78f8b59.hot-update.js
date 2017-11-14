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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        tinymceContent: this.props.defaultValue
      });
      console.log(this.props.defaultValue);
      if (this.props.match.params.id) {
        _ApiCalls2.default.getDocument(this.props.match.params.id).then(function (document) {
          _this2.setState({
            docTitle: document.data.title,
            tinymceContent: document.data.content,
            access: document.data.access
          });
        });
      }
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
      tinymce.init({
        selector: '#' + this.props.id,
        height: "400",
        plugins: 'autolink link image lists \n      print preview textcolor table emoticons codesample',
        toolbar: 'undo redo | bold italic | \n      fontsizeselect fontselect | \n      alignleft aligncenter alignright | forecolor backcolor \n      | table | numlist bullist | emoticons | codesample',
        table_toolbar: 'tableprops tabledelete  \n      | tableinsertrowbefore \n      tableinsertrowafter tabledeleterow | tableinsertcolbefore \n      tableinsertcolafter tabledeletecol',
        fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt'
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

      console.log(this.props.defaultValue);
      return _react2.default.createElement('textarea', {
        id: this.props.id,
        defaultValue: this.state.tinymceContent
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeD9jNGU3Il0sIm5hbWVzIjpbIlRpbnlNY2VFZGl0b3IiLCJzdGF0ZSIsImVkaXRvciIsInRpbnltY2VDb250ZW50Iiwic2V0U3RhdGUiLCJwcm9wcyIsImRlZmF1bHRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCIsInBhcmFtcyIsImlkIiwiZ2V0RG9jdW1lbnQiLCJ0aGVuIiwiZG9jVGl0bGUiLCJkb2N1bWVudCIsImRhdGEiLCJ0aXRsZSIsImNvbnRlbnQiLCJhY2Nlc3MiLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwiaGVpZ2h0IiwicGx1Z2lucyIsInRvb2xiYXIiLCJ0YWJsZV90b29sYmFyIiwiZm9udHNpemVfZm9ybWF0cyIsInJlbW92ZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxhOzs7QUFDSjs7OztBQUlBLDJCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsSUFERztBQUVYQyxzQkFBZ0I7QUFGTCxLQUFiO0FBRlk7QUFNYjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pELHdCQUFnQixLQUFLRSxLQUFMLENBQVdDO0FBRGYsT0FBZDtBQUdBQyxjQUFRQyxHQUFSLENBQVksS0FBS0gsS0FBTCxDQUFXQyxZQUF2QjtBQUNBLFVBQUksS0FBS0QsS0FBTCxDQUFXSSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsRUFBNUIsRUFBZ0M7QUFDOUIsMkJBQVFDLFdBQVIsQ0FBb0IsS0FBS1AsS0FBTCxDQUFXSSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsRUFBNUMsRUFBZ0RFLElBQWhELENBQXFELG9CQUFZO0FBQy9ELGlCQUFLVCxRQUFMLENBQWM7QUFDWlUsc0JBQVVDLFNBQVNDLElBQVQsQ0FBY0MsS0FEWjtBQUVaZCw0QkFBZ0JZLFNBQVNDLElBQVQsQ0FBY0UsT0FGbEI7QUFHWkMsb0JBQVFKLFNBQVNDLElBQVQsQ0FBY0c7QUFIVixXQUFkO0FBS0QsU0FORDtBQU9EO0FBQ0Y7QUFDRDs7Ozs7Ozs7O3dDQU1vQjtBQUNsQkMsY0FBUUMsSUFBUixDQUFhO0FBQ1hDLHdCQUFhLEtBQUtqQixLQUFMLENBQVdNLEVBRGI7QUFFWFksZ0JBQVMsS0FGRTtBQUdYQyx1R0FIVztBQUtYQywwTUFMVztBQVNYQyw0TEFUVztBQWFYQywwQkFBa0I7QUFiUCxPQUFiO0FBZUQ7O0FBRUQ7Ozs7Ozs7OzsyQ0FNdUI7QUFDckJQLGNBQVFRLE1BQVIsQ0FBZSxLQUFLM0IsS0FBTCxDQUFXQyxNQUExQjtBQUNEOztBQUVEOzs7Ozs7Ozs7NkJBTVM7O0FBRVBLLGNBQVFDLEdBQVIsQ0FBWSxLQUFLSCxLQUFMLENBQVdDLFlBQXZCO0FBQ0EsYUFDRTtBQUNFLFlBQUksS0FBS0QsS0FBTCxDQUFXTSxFQURqQjtBQUVFLHNCQUFjLEtBQUtWLEtBQUwsQ0FBV0U7QUFGM0IsUUFERjtBQU1EOzs7Ozs7QUFHSEgsY0FBYzZCLFNBQWQsR0FBMEI7QUFDeEJsQixNQUFJLG9CQUFVbUIsTUFBVixDQUFpQkMsVUFERztBQUV4QkMsc0JBQW9CLG9CQUFVQyxJQUFWLENBQWVGO0FBRlgsQ0FBMUI7O2tCQUtlL0IsYSIsImZpbGUiOiIwLjc5N2JiYmQ4ZTNjZWM3OGY4YjU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4uL3V0aWwvQXBpQ2FsbHMnXG5cbi8qKlxuICogVGlueU1jZSByZWFjdCBjb21wb25lbnQgY2xhc3NcbiAqIEBjbGFzcyBUaW55TWNlQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5jbGFzcyBUaW55TWNlRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgVGlueU1jZUNvbXBvbmVudC5cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBlZGl0b3I6IG51bGwsXG4gICAgICB0aW55bWNlQ29udGVudDogJydcbiAgICB9O1xuICB9XG4gIFxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW55bWNlQ29udGVudDogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWVcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKSB7XG4gICAgICBBcGlDYWxsLmdldERvY3VtZW50KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKS50aGVuKGRvY3VtZW50ID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZG9jVGl0bGU6IGRvY3VtZW50LmRhdGEudGl0bGUsXG4gICAgICAgICAgdGlueW1jZUNvbnRlbnQ6IGRvY3VtZW50LmRhdGEuY29udGVudCxcbiAgICAgICAgICBhY2Nlc3M6IGRvY3VtZW50LmRhdGEuYWNjZXNzXG4gICAgICAgIH0pXG4gICAgICB9KSAgIFxuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aW55bWNlIG9uIGNvbXBuZW50IG1vdW50XG4gICAqIEBtZXRob2QgQ29tcG9uZW50RGlkTW91bnRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICBzZWxlY3RvcjpgIyR7dGhpcy5wcm9wcy5pZH1gLFxuICAgICAgaGVpZ2h0IDogXCI0MDBcIixcbiAgICAgIHBsdWdpbnM6IGBhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIFxuICAgICAgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zIGNvZGVzYW1wbGVgLFxuICAgICAgdG9vbGJhcjogYHVuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHwgXG4gICAgICBmb250c2l6ZXNlbGVjdCBmb250c2VsZWN0IHwgXG4gICAgICBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGZvcmVjb2xvciBiYWNrY29sb3IgXG4gICAgICB8IHRhYmxlIHwgbnVtbGlzdCBidWxsaXN0IHwgZW1vdGljb25zIHwgY29kZXNhbXBsZWAsXG4gICAgICB0YWJsZV90b29sYmFyOiBgdGFibGVwcm9wcyB0YWJsZWRlbGV0ZSAgXG4gICAgICB8IHRhYmxlaW5zZXJ0cm93YmVmb3JlIFxuICAgICAgdGFibGVpbnNlcnRyb3dhZnRlciB0YWJsZWRlbGV0ZXJvdyB8IHRhYmxlaW5zZXJ0Y29sYmVmb3JlIFxuICAgICAgdGFibGVpbnNlcnRjb2xhZnRlciB0YWJsZWRlbGV0ZWNvbGAsXG4gICAgICBmb250c2l6ZV9mb3JtYXRzOiAnOHB0IDEwcHQgMTJwdCAxNHB0IDE4cHQgMjRwdCAzNnB0JyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW5zdGFuY2Ugb2YgdGlueW1jZSBvbiBjb21wbmVudCB1bm1vdW50XG4gICAqIEBtZXRob2QgQ29tcG9uZW50V2lsbFVubW91bnRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRpbnltY2UucmVtb3ZlKHRoaXMuc3RhdGUuZWRpdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjb21wb25lbnRcbiAgICogQG1ldGhvZCByZW5kZXJcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgIFxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudGlueW1jZUNvbnRlbnR9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuVGlueU1jZUVkaXRvci5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUVkaXRvckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbnlNY2VFZGl0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvVGlueU1jZUVkaXRvci5qc3giXSwic291cmNlUm9vdCI6IiJ9