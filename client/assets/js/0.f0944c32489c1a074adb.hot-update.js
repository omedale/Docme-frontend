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
      this.setState({
        tinymceContent: this.props.defaultValue
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeD9jNGU3Il0sIm5hbWVzIjpbIlRpbnlNY2VFZGl0b3IiLCJzdGF0ZSIsImVkaXRvciIsInRpbnltY2VDb250ZW50Iiwic2V0U3RhdGUiLCJwcm9wcyIsImRlZmF1bHRWYWx1ZSIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJpZCIsImhlaWdodCIsInBsdWdpbnMiLCJ0b29sYmFyIiwidGFibGVfdG9vbGJhciIsImZvbnRzaXplX2Zvcm1hdHMiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImhhbmRsZUVkaXRvckNoYW5nZSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxhOzs7QUFDSjs7OztBQUlBLDJCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsSUFERztBQUVYQyxzQkFBZ0I7QUFGTCxLQUFiO0FBRlk7QUFNYjs7QUFFRDs7Ozs7Ozs7Ozt3Q0FNb0I7QUFDbEIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pELHdCQUFnQixLQUFLRSxLQUFMLENBQVdDO0FBRGYsT0FBZDtBQUdBQyxjQUFRQyxJQUFSLENBQWE7QUFDWEMsd0JBQWEsS0FBS0osS0FBTCxDQUFXSyxFQURiO0FBRVhDLGdCQUFTLEtBRkU7QUFHWEMsdUdBSFc7QUFLWEMsME1BTFc7QUFTWEMsNExBVFc7QUFhWEMsMEJBQWtCO0FBYlAsT0FBYjtBQWdCRDs7QUFFRDs7Ozs7Ozs7OzJDQU11QjtBQUNyQlIsY0FBUVMsTUFBUixDQUFlLEtBQUtmLEtBQUwsQ0FBV0MsTUFBMUI7QUFDRDs7QUFFRDs7Ozs7Ozs7OzZCQU1TO0FBQ1BlLGNBQVFDLEdBQVIsQ0FBWSxLQUFLakIsS0FBTCxDQUFXRSxjQUF2QjtBQUNBLGFBQ0U7QUFDRSxZQUFJLEtBQUtFLEtBQUwsQ0FBV0ssRUFEakI7QUFFRSxzQkFBYyxLQUFLVCxLQUFMLENBQVdFO0FBRjNCLFFBREY7QUFNRDs7Ozs7O0FBR0hILGNBQWNtQixTQUFkLEdBQTBCO0FBQ3hCVCxNQUFJLG9CQUFVVSxNQUFWLENBQWlCQyxVQURHO0FBRXhCQyxzQkFBb0Isb0JBQVVDLElBQVYsQ0FBZUY7QUFGWCxDQUExQjs7a0JBS2VyQixhIiwiZmlsZSI6IjAuZjA5NDRjMzI0ODljMWEwNzRhZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIFRpbnlNY2UgcmVhY3QgY29tcG9uZW50IGNsYXNzXG4gKiBAY2xhc3MgVGlueU1jZUNvbXBvbmVudFxuICogQGV4dGVuZHMge0NvbXBvbmVudH1cbiAqL1xuY2xhc3MgVGlueU1jZUVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFRpbnlNY2VDb21wb25lbnQuXG4gICAqIEBtZW1iZXJPZiBUaW55TWNlQ29tcG9uZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgZWRpdG9yOiBudWxsLFxuICAgICAgdGlueW1jZUNvbnRlbnQ6ICcnXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRpbnltY2Ugb24gY29tcG5lbnQgbW91bnRcbiAgICogQG1ldGhvZCBDb21wb25lbnREaWRNb3VudFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW55bWNlQ29udGVudDogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWVcbiAgICB9KTtcbiAgICB0aW55bWNlLmluaXQoe1xuICAgICAgc2VsZWN0b3I6YCMke3RoaXMucHJvcHMuaWR9YCxcbiAgICAgIGhlaWdodCA6IFwiNDAwXCIsXG4gICAgICBwbHVnaW5zOiBgYXV0b2xpbmsgbGluayBpbWFnZSBsaXN0cyBcbiAgICAgIHByaW50IHByZXZpZXcgdGV4dGNvbG9yIHRhYmxlIGVtb3RpY29ucyBjb2Rlc2FtcGxlYCxcbiAgICAgIHRvb2xiYXI6IGB1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyB8IFxuICAgICAgZm9udHNpemVzZWxlY3QgZm9udHNlbGVjdCB8IFxuICAgICAgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgfCBmb3JlY29sb3IgYmFja2NvbG9yIFxuICAgICAgfCB0YWJsZSB8IG51bWxpc3QgYnVsbGlzdCB8IGVtb3RpY29ucyB8IGNvZGVzYW1wbGVgLFxuICAgICAgdGFibGVfdG9vbGJhcjogYHRhYmxlcHJvcHMgdGFibGVkZWxldGUgIFxuICAgICAgfCB0YWJsZWluc2VydHJvd2JlZm9yZSBcbiAgICAgIHRhYmxlaW5zZXJ0cm93YWZ0ZXIgdGFibGVkZWxldGVyb3cgfCB0YWJsZWluc2VydGNvbGJlZm9yZSBcbiAgICAgIHRhYmxlaW5zZXJ0Y29sYWZ0ZXIgdGFibGVkZWxldGVjb2xgLFxuICAgICAgZm9udHNpemVfZm9ybWF0czogJzhwdCAxMHB0IDEycHQgMTRwdCAxOHB0IDI0cHQgMzZwdCcsXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW5zdGFuY2Ugb2YgdGlueW1jZSBvbiBjb21wbmVudCB1bm1vdW50XG4gICAqIEBtZXRob2QgQ29tcG9uZW50V2lsbFVubW91bnRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRpbnltY2UucmVtb3ZlKHRoaXMuc3RhdGUuZWRpdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjb21wb25lbnRcbiAgICogQG1ldGhvZCByZW5kZXJcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRpbnltY2VDb250ZW50KVxuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS50aW55bWNlQ29udGVudH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5UaW55TWNlRWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGFuZGxlRWRpdG9yQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGlueU1jZUVkaXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=