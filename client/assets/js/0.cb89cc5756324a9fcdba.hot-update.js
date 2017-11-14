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
      if (nextProps.mode) {
        tinymce.activeEditor.setContent('' + nextProps.defaultValue, { format: 'raw' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeD9jNGU3Il0sIm5hbWVzIjpbIlRpbnlNY2VFZGl0b3IiLCJzdGF0ZSIsImVkaXRvciIsInRpbnltY2VDb250ZW50IiwibmV4dFByb3BzIiwiY29uc29sZSIsImxvZyIsIm1vZGUiLCJ0aW55bWNlIiwiYWN0aXZlRWRpdG9yIiwic2V0Q29udGVudCIsImRlZmF1bHRWYWx1ZSIsImZvcm1hdCIsImluaXQiLCJzZWxlY3RvciIsInByb3BzIiwiaWQiLCJoZWlnaHQiLCJwbHVnaW5zIiwidG9vbGJhciIsInRhYmxlX3Rvb2xiYXIiLCJmb250c2l6ZV9mb3JtYXRzIiwic2V0dXAiLCJzZXRTdGF0ZSIsIm9uIiwiY29udGVudCIsImdldENvbnRlbnQiLCJoYW5kbGVFZGl0b3JDaGFuZ2UiLCJyZW1vdmUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsYTs7O0FBQ0o7Ozs7QUFJQSwyQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLElBREc7QUFFWEMsc0JBQWdCO0FBRkwsS0FBYjtBQUZZO0FBTWI7Ozs7OENBQ3lCQyxTLEVBQVc7QUFDbkNDLGNBQVFDLEdBQVIsQ0FBWUYsU0FBWjtBQUNBLFVBQUdBLFVBQVVHLElBQWIsRUFBbUI7QUFDakJDLGdCQUFRQyxZQUFSLENBQXFCQyxVQUFyQixNQUFtQ04sVUFBVU8sWUFBN0MsRUFBNkQsRUFBQ0MsUUFBUSxLQUFULEVBQTdEO0FBQ0Q7QUFDRjtBQUNEOzs7Ozs7Ozs7d0NBTW9CO0FBQUE7O0FBQ2xCSixjQUFRSyxJQUFSLENBQWE7QUFDWEMsd0JBQWEsS0FBS0MsS0FBTCxDQUFXQyxFQURiO0FBRVhDLGdCQUFTLEtBRkU7QUFHWEMsdUdBSFc7QUFLWEMsME1BTFc7QUFTWEMsNExBVFc7QUFhWEMsMEJBQWtCLG1DQWJQO0FBY1hDLGVBQU8sZUFBQ3BCLE1BQUQsRUFBWTtBQUNqQixpQkFBS3FCLFFBQUwsQ0FBYyxFQUFFckIsY0FBRixFQUFkO0FBQ0FBLGlCQUFPc0IsRUFBUCxDQUFVLGNBQVYsRUFBMEIsWUFBTTtBQUM5QixnQkFBTUMsVUFBVXZCLE9BQU93QixVQUFQLEVBQWhCO0FBQ0EsbUJBQUtYLEtBQUwsQ0FBV1ksa0JBQVgsQ0FBOEJGLE9BQTlCO0FBQ0QsV0FIRDtBQUlEO0FBcEJVLE9BQWI7QUFzQkQ7O0FBRUQ7Ozs7Ozs7OzsyQ0FNdUI7QUFDckJqQixjQUFRb0IsTUFBUixDQUFlLEtBQUszQixLQUFMLENBQVdDLE1BQTFCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs2QkFNUztBQUNQLGFBQ0U7QUFDRSxZQUFJLEtBQUthLEtBQUwsQ0FBV0MsRUFEakI7QUFFRSxzQkFBYyxLQUFLRCxLQUFMLENBQVdKO0FBRjNCLFFBREY7QUFNRDs7Ozs7O0FBR0hYLGNBQWM2QixTQUFkLEdBQTBCO0FBQ3hCYixNQUFJLG9CQUFVYyxNQUFWLENBQWlCQyxVQURHO0FBRXhCSixzQkFBb0Isb0JBQVVLLElBQVYsQ0FBZUQ7QUFGWCxDQUExQjs7a0JBS2UvQixhIiwiZmlsZSI6IjAuY2I4OWNjNTc1NjMyNGE5ZmNkYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi4vdXRpbC9BcGlDYWxscydcblxuLyoqXG4gKiBUaW55TWNlIHJlYWN0IGNvbXBvbmVudCBjbGFzc1xuICogQGNsYXNzIFRpbnlNY2VDb21wb25lbnRcbiAqIEBleHRlbmRzIHtDb21wb25lbnR9XG4gKi9cbmNsYXNzIFRpbnlNY2VFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBUaW55TWNlQ29tcG9uZW50LlxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGVkaXRvcjogbnVsbCxcbiAgICAgIHRpbnltY2VDb250ZW50OiAnJ1xuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhuZXh0UHJvcHMpXG4gICAgaWYobmV4dFByb3BzLm1vZGUpIHtcbiAgICAgIHRpbnltY2UuYWN0aXZlRWRpdG9yLnNldENvbnRlbnQoYCR7bmV4dFByb3BzLmRlZmF1bHRWYWx1ZX1gLCB7Zm9ybWF0OiAncmF3J30pOyAgICAgIFxuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aW55bWNlIG9uIGNvbXBuZW50IG1vdW50XG4gICAqIEBtZXRob2QgQ29tcG9uZW50RGlkTW91bnRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICBzZWxlY3RvcjpgIyR7dGhpcy5wcm9wcy5pZH1gLFxuICAgICAgaGVpZ2h0IDogXCI0MDBcIixcbiAgICAgIHBsdWdpbnM6IGBhdXRvbGluayBsaW5rIGltYWdlIGxpc3RzIFxuICAgICAgcHJpbnQgcHJldmlldyB0ZXh0Y29sb3IgdGFibGUgZW1vdGljb25zIGNvZGVzYW1wbGVgLFxuICAgICAgdG9vbGJhcjogYHVuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHwgXG4gICAgICBmb250c2l6ZXNlbGVjdCBmb250c2VsZWN0IHwgXG4gICAgICBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCB8IGZvcmVjb2xvciBiYWNrY29sb3IgXG4gICAgICB8IHRhYmxlIHwgbnVtbGlzdCBidWxsaXN0IHwgZW1vdGljb25zIHwgY29kZXNhbXBsZWAsXG4gICAgICB0YWJsZV90b29sYmFyOiBgdGFibGVwcm9wcyB0YWJsZWRlbGV0ZSAgXG4gICAgICB8IHRhYmxlaW5zZXJ0cm93YmVmb3JlIFxuICAgICAgdGFibGVpbnNlcnRyb3dhZnRlciB0YWJsZWRlbGV0ZXJvdyB8IHRhYmxlaW5zZXJ0Y29sYmVmb3JlIFxuICAgICAgdGFibGVpbnNlcnRjb2xhZnRlciB0YWJsZWRlbGV0ZWNvbGAsXG4gICAgICBmb250c2l6ZV9mb3JtYXRzOiAnOHB0IDEwcHQgMTJwdCAxNHB0IDE4cHQgMjRwdCAzNnB0JyxcbiAgICAgIHNldHVwOiAoZWRpdG9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0b3IgfSk7XG4gICAgICAgIGVkaXRvci5vbigna2V5dXAgY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlRWRpdG9yQ2hhbmdlKGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW5zdGFuY2Ugb2YgdGlueW1jZSBvbiBjb21wbmVudCB1bm1vdW50XG4gICAqIEBtZXRob2QgQ29tcG9uZW50V2lsbFVubW91bnRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRpbnltY2UucmVtb3ZlKHRoaXMuc3RhdGUuZWRpdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjb21wb25lbnRcbiAgICogQG1ldGhvZCByZW5kZXJcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cblRpbnlNY2VFZGl0b3IucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYW5kbGVFZGl0b3JDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW55TWNlRWRpdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1RpbnlNY2VFZGl0b3IuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==