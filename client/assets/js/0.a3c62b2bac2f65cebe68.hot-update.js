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
      console.log(this.props);
      // if (this.props.match.params.id) {
      //   ApiCall.getDocument(this.props.match.params.id).then(document => {
      //     this.setState({
      //       tinymceContent: document.data.content,
      //     })
      //   })   
      // }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.l;
      console.log(nextProps);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeD9jNGU3Il0sIm5hbWVzIjpbIlRpbnlNY2VFZGl0b3IiLCJzdGF0ZSIsImVkaXRvciIsInRpbnltY2VDb250ZW50IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwibmV4dFByb3BzIiwibCIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJpZCIsImhlaWdodCIsInBsdWdpbnMiLCJ0b29sYmFyIiwidGFibGVfdG9vbGJhciIsImZvbnRzaXplX2Zvcm1hdHMiLCJyZW1vdmUiLCJkZWZhdWx0VmFsdWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiaGFuZGxlRWRpdG9yQ2hhbmdlIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsYTs7O0FBQ0o7Ozs7QUFJQSwyQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLElBREc7QUFFWEMsc0JBQWdCO0FBRkwsS0FBYjtBQUZZO0FBTWI7Ozs7eUNBRW9CO0FBQ25CQyxjQUFRQyxHQUFSLENBQVksS0FBS0MsS0FBakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7OENBQ3lCQyxTLEVBQVc7QUFDbkNILGNBQVFJLENBQVI7QUFDQUosY0FBUUMsR0FBUixDQUFZRSxTQUFaO0FBQ0Q7QUFDRDs7Ozs7Ozs7O3dDQU1vQjtBQUNsQkUsY0FBUUMsSUFBUixDQUFhO0FBQ1hDLHdCQUFhLEtBQUtMLEtBQUwsQ0FBV00sRUFEYjtBQUVYQyxnQkFBUyxLQUZFO0FBR1hDLHVHQUhXO0FBS1hDLDBNQUxXO0FBU1hDLDRMQVRXO0FBYVhDLDBCQUFrQjtBQWJQLE9BQWI7QUFlRDs7QUFFRDs7Ozs7Ozs7OzJDQU11QjtBQUNyQlIsY0FBUVMsTUFBUixDQUFlLEtBQUtqQixLQUFMLENBQVdDLE1BQTFCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs2QkFNUzs7QUFFUEUsY0FBUUMsR0FBUixDQUFZLEtBQUtDLEtBQUwsQ0FBV2EsWUFBdkI7QUFDQSxhQUNFO0FBQ0UsWUFBSSxLQUFLYixLQUFMLENBQVdNLEVBRGpCO0FBRUUsc0JBQWMsS0FBS1gsS0FBTCxDQUFXRTtBQUYzQixRQURGO0FBTUQ7Ozs7OztBQUdISCxjQUFjb0IsU0FBZCxHQUEwQjtBQUN4QlIsTUFBSSxvQkFBVVMsTUFBVixDQUFpQkMsVUFERztBQUV4QkMsc0JBQW9CLG9CQUFVQyxJQUFWLENBQWVGO0FBRlgsQ0FBMUI7O2tCQUtldEIsYSIsImZpbGUiOiIwLmEzYzYyYjJiYWMyZjY1Y2ViZTY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4uL3V0aWwvQXBpQ2FsbHMnXG5cbi8qKlxuICogVGlueU1jZSByZWFjdCBjb21wb25lbnQgY2xhc3NcbiAqIEBjbGFzcyBUaW55TWNlQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyB7Q29tcG9uZW50fVxuICovXG5jbGFzcyBUaW55TWNlRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgVGlueU1jZUNvbXBvbmVudC5cbiAgICogQG1lbWJlck9mIFRpbnlNY2VDb21wb25lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBlZGl0b3I6IG51bGwsXG4gICAgICB0aW55bWNlQ29udGVudDogJydcbiAgICB9O1xuICB9XG4gIFxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcbiAgICAvLyBpZiAodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpIHtcbiAgICAvLyAgIEFwaUNhbGwuZ2V0RG9jdW1lbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpLnRoZW4oZG9jdW1lbnQgPT4ge1xuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAvLyAgICAgICB0aW55bWNlQ29udGVudDogZG9jdW1lbnQuZGF0YS5jb250ZW50LFxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfSkgICBcbiAgICAvLyB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zb2xlLmxcbiAgICBjb25zb2xlLmxvZyhuZXh0UHJvcHMpO1xuICB9XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRpbnltY2Ugb24gY29tcG5lbnQgbW91bnRcbiAgICogQG1ldGhvZCBDb21wb25lbnREaWRNb3VudFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGlueW1jZS5pbml0KHtcbiAgICAgIHNlbGVjdG9yOmAjJHt0aGlzLnByb3BzLmlkfWAsXG4gICAgICBoZWlnaHQgOiBcIjQwMFwiLFxuICAgICAgcGx1Z2luczogYGF1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgXG4gICAgICBwcmludCBwcmV2aWV3IHRleHRjb2xvciB0YWJsZSBlbW90aWNvbnMgY29kZXNhbXBsZWAsXG4gICAgICB0b29sYmFyOiBgdW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgfCBcbiAgICAgIGZvbnRzaXplc2VsZWN0IGZvbnRzZWxlY3QgfCBcbiAgICAgIGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IHwgZm9yZWNvbG9yIGJhY2tjb2xvciBcbiAgICAgIHwgdGFibGUgfCBudW1saXN0IGJ1bGxpc3QgfCBlbW90aWNvbnMgfCBjb2Rlc2FtcGxlYCxcbiAgICAgIHRhYmxlX3Rvb2xiYXI6IGB0YWJsZXByb3BzIHRhYmxlZGVsZXRlICBcbiAgICAgIHwgdGFibGVpbnNlcnRyb3diZWZvcmUgXG4gICAgICB0YWJsZWluc2VydHJvd2FmdGVyIHRhYmxlZGVsZXRlcm93IHwgdGFibGVpbnNlcnRjb2xiZWZvcmUgXG4gICAgICB0YWJsZWluc2VydGNvbGFmdGVyIHRhYmxlZGVsZXRlY29sYCxcbiAgICAgIGZvbnRzaXplX2Zvcm1hdHM6ICc4cHQgMTBwdCAxMnB0IDE0cHQgMThwdCAyNHB0IDM2cHQnLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnN0YW5jZSBvZiB0aW55bWNlIG9uIGNvbXBuZW50IHVubW91bnRcbiAgICogQG1ldGhvZCBDb21wb25lbnRXaWxsVW5tb3VudFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGlueW1jZS5yZW1vdmUodGhpcy5zdGF0ZS5lZGl0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGNvbXBvbmVudFxuICAgKiBAbWV0aG9kIHJlbmRlclxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKiBAbWVtYmVyT2YgVGlueU1jZUNvbXBvbmVudFxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS50aW55bWNlQ29udGVudH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5UaW55TWNlRWRpdG9yLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGFuZGxlRWRpdG9yQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGlueU1jZUVkaXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9UaW55TWNlRWRpdG9yLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=