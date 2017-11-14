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

  /**
   * Initialize tinymce on compnent mount
   * @method ComponentDidMount
   * @return {void}
   * @memberOf TinyMceComponent
   */


  _createClass(TinyMceEditor, [{
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
      this.setState({
        docTitle: event.target.value.docTitle,
        access: event.target.value.access
      });tinymec;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeD9jNGU3Il0sIm5hbWVzIjpbIlRpbnlNY2VFZGl0b3IiLCJzdGF0ZSIsImVkaXRvciIsInRpbnltY2VDb250ZW50IiwidGlueW1jZSIsImluaXQiLCJzZWxlY3RvciIsInByb3BzIiwiaWQiLCJoZWlnaHQiLCJwbHVnaW5zIiwidG9vbGJhciIsInRhYmxlX3Rvb2xiYXIiLCJmb250c2l6ZV9mb3JtYXRzIiwicmVtb3ZlIiwic2V0U3RhdGUiLCJkb2NUaXRsZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJhY2Nlc3MiLCJ0aW55bWVjIiwiZGVmYXVsdFZhbHVlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImhhbmRsZUVkaXRvckNoYW5nZSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxhOzs7QUFDSjs7OztBQUlBLDJCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsSUFERztBQUVYQyxzQkFBZ0I7QUFGTCxLQUFiO0FBRlk7QUFNYjs7QUFFRDs7Ozs7Ozs7Ozt3Q0FNb0I7QUFDbEJDLGNBQVFDLElBQVIsQ0FBYTtBQUNYQyx3QkFBYSxLQUFLQyxLQUFMLENBQVdDLEVBRGI7QUFFWEMsZ0JBQVMsS0FGRTtBQUdYQyx1R0FIVztBQUtYQywwTUFMVztBQVNYQyw0TEFUVztBQWFYQywwQkFBa0I7QUFiUCxPQUFiO0FBZUQ7O0FBRUQ7Ozs7Ozs7OzsyQ0FNdUI7QUFDckJULGNBQVFVLE1BQVIsQ0FBZSxLQUFLYixLQUFMLENBQVdDLE1BQTFCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs2QkFNUztBQUNQLFdBQUthLFFBQUwsQ0FBYztBQUNaQyxrQkFBVUMsTUFBTUMsTUFBTixDQUFhQyxLQUFiLENBQW1CSCxRQURqQjtBQUVaSSxnQkFBUUgsTUFBTUMsTUFBTixDQUFhQyxLQUFiLENBQW1CQztBQUZmLE9BQWQsRUFHR0M7O0FBRUgsYUFDRTtBQUNFLFlBQUksS0FBS2QsS0FBTCxDQUFXQyxFQURqQjtBQUVFLHNCQUFjLEtBQUtELEtBQUwsQ0FBV2U7QUFGM0IsUUFERjtBQU1EOzs7Ozs7QUFHSHRCLGNBQWN1QixTQUFkLEdBQTBCO0FBQ3hCZixNQUFJLG9CQUFVZ0IsTUFBVixDQUFpQkMsVUFERztBQUV4QkMsc0JBQW9CLG9CQUFVQyxJQUFWLENBQWVGO0FBRlgsQ0FBMUI7O2tCQUtlekIsYSIsImZpbGUiOiIwLjdiYzNiMGVhOWY2NzA1YWEzY2I0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBUaW55TWNlIHJlYWN0IGNvbXBvbmVudCBjbGFzc1xuICogQGNsYXNzIFRpbnlNY2VDb21wb25lbnRcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmNsYXNzIFRpbnlNY2VFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBUaW55TWNlQ29tcG9uZW50LlxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGVkaXRvcjogbnVsbCxcbiAgICAgIHRpbnltY2VDb250ZW50OiAnJ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aW55bWNlIG9uIGNvbXBuZW50IG1vdW50XG4gICAqIEBtZXRob2QgQ29tcG9uZW50RGlkTW91bnRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICBzZWxlY3RvcjpgIyR7dGhpcy5wcm9wcy5pZH1gLFxuICAgICAgaGVpZ2h0IDogXCI0MDBcIixcbiAgICAgIHBsdWdpbnM6IGBhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIFxuICAgICAgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zIGNvZGVzYW1wbGVgLFxuICAgICAgdG9vbGJhcjogYHVuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHwgXG4gICAgICBmb250c2l6ZXNlbGVjdCBmb250c2VsZWN0IHwgXG4gICAgICBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGZvcmVjb2xvciBiYWNrY29sb3IgXG4gICAgICB8IHRhYmxlIHwgbnVtbGlzdCBidWxsaXN0IHwgZW1vdGljb25zIHwgY29kZXNhbXBsZWAsXG4gICAgICB0YWJsZV90b29sYmFyOiBgdGFibGVwcm9wcyB0YWJsZWRlbGV0ZSAgXG4gICAgICB8IHRhYmxlaW5zZXJ0cm93YmVmb3JlIFxuICAgICAgdGFibGVpbnNlcnRyb3dhZnRlciB0YWJsZWRlbGV0ZXJvdyB8IHRhYmxlaW5zZXJ0Y29sYmVmb3JlIFxuICAgICAgdGFibGVpbnNlcnRjb2xhZnRlciB0YWJsZWRlbGV0ZWNvbGAsXG4gICAgICBmb250c2l6ZV9mb3JtYXRzOiAnOHB0IDEwcHQgMTJwdCAxNHB0IDE4cHQgMjRwdCAzNnB0JyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW5zdGFuY2Ugb2YgdGlueW1jZSBvbiBjb21wbmVudCB1bm1vdW50XG4gICAqIEBtZXRob2QgQ29tcG9uZW50V2lsbFVubW91bnRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRpbnltY2UucmVtb3ZlKHRoaXMuc3RhdGUuZWRpdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjb21wb25lbnRcbiAgICogQG1ldGhvZCByZW5kZXJcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY1RpdGxlOiBldmVudC50YXJnZXQudmFsdWUuZG9jVGl0bGUsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC52YWx1ZS5hY2Nlc3NcbiAgICB9KTt0aW55bWVjXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cblRpbnlNY2VFZGl0b3IucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYW5kbGVFZGl0b3JDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW55TWNlRWRpdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1RpbnlNY2VFZGl0b3IuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==