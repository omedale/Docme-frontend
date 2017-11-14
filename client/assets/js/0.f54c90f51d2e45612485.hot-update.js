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
      console.log(this.state.tinymceContent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeD9jNGU3Il0sIm5hbWVzIjpbIlRpbnlNY2VFZGl0b3IiLCJzdGF0ZSIsImVkaXRvciIsInRpbnltY2VDb250ZW50IiwidGlueW1jZSIsImluaXQiLCJzZWxlY3RvciIsInByb3BzIiwiaWQiLCJoZWlnaHQiLCJwbHVnaW5zIiwidG9vbGJhciIsInRhYmxlX3Rvb2xiYXIiLCJmb250c2l6ZV9mb3JtYXRzIiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRWYWx1ZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsYTs7O0FBQ0o7Ozs7QUFJQSwyQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLElBREc7QUFFWEMsc0JBQWdCO0FBRkwsS0FBYjtBQUZZO0FBTWI7O0FBRUQ7Ozs7Ozs7Ozs7d0NBTW9COztBQUVsQkMsY0FBUUMsSUFBUixDQUFhO0FBQ1hDLHdCQUFhLEtBQUtDLEtBQUwsQ0FBV0MsRUFEYjtBQUVYQyxnQkFBUyxLQUZFO0FBR1hDLHVHQUhXO0FBS1hDLDBNQUxXO0FBU1hDLDRMQVRXO0FBYVhDLDBCQUFrQjtBQWJQLE9BQWI7QUFlRDs7QUFFRDs7Ozs7Ozs7OzJDQU11QjtBQUNyQlQsY0FBUVUsTUFBUixDQUFlLEtBQUtiLEtBQUwsQ0FBV0MsTUFBMUI7QUFDRDs7QUFFRDs7Ozs7Ozs7OzZCQU1TO0FBQ1BhLGNBQVFDLEdBQVIsQ0FBWSxLQUFLZixLQUFMLENBQVdFLGNBQXZCO0FBQ0FZLGNBQVFDLEdBQVIsQ0FBWSxLQUFLVCxLQUFMLENBQVdVLFlBQXZCO0FBQ0EsYUFDRTtBQUNFLFlBQUksS0FBS1YsS0FBTCxDQUFXQyxFQURqQjtBQUVFLHNCQUFjLEtBQUtQLEtBQUwsQ0FBV0U7QUFGM0IsUUFERjtBQU1EOzs7Ozs7QUFHSEgsY0FBY2tCLFNBQWQsR0FBMEI7QUFDeEJWLE1BQUksb0JBQVVXLE1BQVYsQ0FBaUJDLFVBREc7QUFFeEJDLHNCQUFvQixvQkFBVUMsSUFBVixDQUFlRjtBQUZYLENBQTFCOztrQkFLZXBCLGEiLCJmaWxlIjoiMC5mNTRjOTBmNTFkMmU0NTYxMjQ4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogVGlueU1jZSByZWFjdCBjb21wb25lbnQgY2xhc3NcbiAqIEBjbGFzcyBUaW55TWNlQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5jbGFzcyBUaW55TWNlRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgVGlueU1jZUNvbXBvbmVudC5cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBlZGl0b3I6IG51bGwsXG4gICAgICB0aW55bWNlQ29udGVudDogJydcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGlueW1jZSBvbiBjb21wbmVudCBtb3VudFxuICAgKiBAbWV0aG9kIENvbXBvbmVudERpZE1vdW50XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqIEBtZW1iZXJPZiBUaW55TWNlQ29tcG9uZW50XG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICBzZWxlY3RvcjpgIyR7dGhpcy5wcm9wcy5pZH1gLFxuICAgICAgaGVpZ2h0IDogXCI0MDBcIixcbiAgICAgIHBsdWdpbnM6IGBhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIFxuICAgICAgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zIGNvZGVzYW1wbGVgLFxuICAgICAgdG9vbGJhcjogYHVuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHwgXG4gICAgICBmb250c2l6ZXNlbGVjdCBmb250c2VsZWN0IHwgXG4gICAgICBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGZvcmVjb2xvciBiYWNrY29sb3IgXG4gICAgICB8IHRhYmxlIHwgbnVtbGlzdCBidWxsaXN0IHwgZW1vdGljb25zIHwgY29kZXNhbXBsZWAsXG4gICAgICB0YWJsZV90b29sYmFyOiBgdGFibGVwcm9wcyB0YWJsZWRlbGV0ZSAgXG4gICAgICB8IHRhYmxlaW5zZXJ0cm93YmVmb3JlIFxuICAgICAgdGFibGVpbnNlcnRyb3dhZnRlciB0YWJsZWRlbGV0ZXJvdyB8IHRhYmxlaW5zZXJ0Y29sYmVmb3JlIFxuICAgICAgdGFibGVpbnNlcnRjb2xhZnRlciB0YWJsZWRlbGV0ZWNvbGAsXG4gICAgICBmb250c2l6ZV9mb3JtYXRzOiAnOHB0IDEwcHQgMTJwdCAxNHB0IDE4cHQgMjRwdCAzNnB0JyxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW5zdGFuY2Ugb2YgdGlueW1jZSBvbiBjb21wbmVudCB1bm1vdW50XG4gICAqIEBtZXRob2QgQ29tcG9uZW50V2lsbFVubW91bnRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRpbnltY2UucmVtb3ZlKHRoaXMuc3RhdGUuZWRpdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjb21wb25lbnRcbiAgICogQG1ldGhvZCByZW5kZXJcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRpbnltY2VDb250ZW50KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnRpbnltY2VDb250ZW50fVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cblRpbnlNY2VFZGl0b3IucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYW5kbGVFZGl0b3JDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW55TWNlRWRpdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1RpbnlNY2VFZGl0b3IuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==