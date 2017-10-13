webpackHotUpdate(0,{

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _NavigationBar = __webpack_require__(49);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _SingleInput = __webpack_require__(338);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      email: '',
      isAuthenticated: false,
      docTitle: '',
      docContent: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'handleChange',
    value: function handleChange(event) {
      console.log(event.target.value.docContent);
      this.setState({
        docTitle: event.target.value.docTitle,
        docContent: event.target.value.docContent
      });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave(event) {
      event.preventDefault();
      alert(event.target.docTitle.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_NavigationBar2.default, { history: this.props.history })
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'h1',
              null,
              'Add Document'
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: this.onClickSave, className: 'col s12' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react2.default.createElement(_SingleInput2.default, {
                    inputType: 'text',
                    title: 'Title',
                    id: 'docTitle',
                    name: 'docTitle',
                    controlFunc: this.handleChange,
                    content: this.state.docTitle,
                    placeholder: 'Title' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react2.default.createElement(
                    'select',
                    null,
                    _react2.default.createElement(
                      'option',
                      { disabled: true, defaultValue: '' },
                      'Choose your option'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: '1' },
                      'Option 1'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: '2' },
                      'Option 2'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: '3' },
                      'Option 3'
                    )
                  ),
                  _react2.default.createElement(
                    'label',
                    null,
                    'Materialize Select'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement(TextArea, {
                    title: 'Document Content',
                    rows: 5,
                    resize: false,
                    content: this.state.description,
                    name: 'currentPetInfo',
                    controlFunc: this.handleDescriptionChange,
                    placeholder: 'Please be thorough in your descriptions' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement(
                    'button',
                    { className: 'pull-right waves-effect waves-light btn' },
                    'Login'
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'waves-effect waves-light btn' },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons left' },
                      'check'
                    ),
                    'button'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'card bodycard' },
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              _react2.default.createElement(
                'p',
                null,
                'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-tabs' },
              _react2.default.createElement(
                'ul',
                { className: 'tabs tabs-fixed-width' },
                _react2.default.createElement(
                  'li',
                  { className: 'tab' },
                  _react2.default.createElement(
                    'a',
                    { className: 'active', href: '#test4' },
                    'Test 1'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'tab' },
                  _react2.default.createElement(
                    'a',
                    { href: '#test5' },
                    'Test 2'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'tab' },
                  _react2.default.createElement(
                    'a',
                    { href: '#test6' },
                    'Test 3'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-content grey lighten-4' },
              _react2.default.createElement(
                'div',
                { id: 'test4' },
                'Test 1'
              ),
              _react2.default.createElement(
                'div',
                { id: 'test5' },
                'Test 2'
              ),
              _react2.default.createElement(
                'div',
                { id: 'test6' },
                'Test 3'
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Home.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeD9kMzBlIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJpc0F1dGhlbnRpY2F0ZWQiLCJkb2NUaXRsZSIsImRvY0NvbnRlbnQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwib25DbGlja1NhdmUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImhpc3RvcnkiLCJkZXNjcmlwdGlvbiIsImhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLHVCQUFpQixLQUZOO0FBR1hDLGdCQUFVLEVBSEM7QUFJWEMsa0JBQVk7QUFKRCxLQUFiO0FBTUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFUaUI7QUFVbEI7Ozs7aUNBRVlFLEssRUFBTztBQUNsQkMsY0FBUUMsR0FBUixDQUFZRixNQUFNRyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJSLFVBQS9CO0FBQ0EsV0FBS1MsUUFBTCxDQUFjO0FBQ1pWLGtCQUFVSyxNQUFNRyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJULFFBRGpCO0FBRVpDLG9CQUFZSSxNQUFNRyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJSO0FBRm5CLE9BQWQ7QUFJRDs7O2dDQUdXSSxLLEVBQU87QUFDakJBLFlBQU1NLGNBQU47QUFDQUMsWUFBTVAsTUFBTUcsTUFBTixDQUFhUixRQUFiLENBQXNCUyxLQUE1QjtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZjtBQUNFLG1FQUFlLFNBQVMsS0FBS2IsS0FBTCxDQUFXaUIsT0FBbkM7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFNLFVBQVUsS0FBS1QsV0FBckIsRUFBa0MsV0FBVSxTQUE1QztBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxvQkFBZjtBQUNFO0FBQ0UsK0JBQVcsTUFEYjtBQUVFLDJCQUFPLE9BRlQ7QUFHRSx3QkFBSSxVQUhOO0FBSUUsMEJBQU0sVUFKUjtBQUtFLGlDQUFhLEtBQUtGLFlBTHBCO0FBTUUsNkJBQVMsS0FBS0wsS0FBTCxDQUFXRyxRQU50QjtBQU9FLGlDQUFhLE9BUGY7QUFERixpQkFERjtBQVdFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLHdCQUFRLGNBQVIsRUFBaUIsY0FBYSxFQUE5QjtBQUFBO0FBQUEscUJBREY7QUFFRTtBQUFBO0FBQUEsd0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxxQkFGRjtBQUdFO0FBQUE7QUFBQSx3QkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLHFCQUhGO0FBSUU7QUFBQTtBQUFBLHdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFKRixtQkFERjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQVhGLGVBREY7QUFzQkU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHFCQUFmO0FBQ0UsZ0RBQUMsUUFBRDtBQUNFLDJCQUFPLGtCQURUO0FBRUUsMEJBQU0sQ0FGUjtBQUdFLDRCQUFRLEtBSFY7QUFJRSw2QkFBUyxLQUFLSCxLQUFMLENBQVdpQixXQUp0QjtBQUtFLDBCQUFNLGdCQUxSO0FBTUUsaUNBQWEsS0FBS0MsdUJBTnBCO0FBT0UsaUNBQWEseUNBUGY7QUFERjtBQURGLGVBdEJGO0FBa0NFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBUSxXQUFVLHlDQUFsQjtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQUcsV0FBVSw4QkFBYjtBQUE0QztBQUFBO0FBQUEsd0JBQUcsV0FBVSxxQkFBYjtBQUFBO0FBQUEscUJBQTVDO0FBQUE7QUFBQTtBQUZGO0FBREY7QUFsQ0Y7QUFGRjtBQURGLFNBSkY7QUFrREU7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQURGO0FBSUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLHVCQUFkO0FBQ0U7QUFBQTtBQUFBLG9CQUFJLFdBQVUsS0FBZDtBQUFvQjtBQUFBO0FBQUEsc0JBQUcsV0FBVSxRQUFiLEVBQXNCLE1BQUssUUFBM0I7QUFBQTtBQUFBO0FBQXBCLGlCQURGO0FBRUU7QUFBQTtBQUFBLG9CQUFJLFdBQVUsS0FBZDtBQUFvQjtBQUFBO0FBQUEsc0JBQUcsTUFBSyxRQUFSO0FBQUE7QUFBQTtBQUFwQixpQkFGRjtBQUdFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLEtBQWQ7QUFBb0I7QUFBQTtBQUFBLHNCQUFHLE1BQUssUUFBUjtBQUFBO0FBQUE7QUFBcEI7QUFIRjtBQURGLGFBSkY7QUFXRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSw2QkFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxJQUFHLE9BQVI7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQUssSUFBRyxPQUFSO0FBQUE7QUFBQSxlQUZGO0FBR0U7QUFBQTtBQUFBLGtCQUFLLElBQUcsT0FBUjtBQUFBO0FBQUE7QUFIRjtBQVhGO0FBREY7QUFsREYsT0FERjtBQXdFRDs7OztFQXBHZ0IsZ0JBQU1DLFM7O2tCQXNHVnJCLEkiLCJmaWxlIjoiMC5jZjYwNmRhOTIyYjg1OGIyZTE2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCdcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICAgZG9jVGl0bGU6ICcnLFxuICAgICAgZG9jQ29udGVudDogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2tTYXZlID0gdGhpcy5vbkNsaWNrU2F2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlLmRvY0NvbnRlbnQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkb2NUaXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlLmRvY0NvbnRlbnRcbiAgICB9KTtcbiAgfVxuXG5cbiAgb25DbGlja1NhdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFsZXJ0KGV2ZW50LnRhcmdldC5kb2NUaXRsZS52YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDE+QWRkIERvY3VtZW50PC9oMT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uQ2xpY2tTYXZlfSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxTaW5nbGVJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU9eyd0ZXh0J31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydUaXRsZSd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnZG9jVGl0bGUnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsnZG9jVGl0bGUnfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZG9jVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIGRlZmF1bHRWYWx1ZT1cIlwiPkNob29zZSB5b3VyIG9wdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk9wdGlvbiAxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5PcHRpb24gMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+TWF0ZXJpYWxpemUgU2VsZWN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydEb2N1bWVudCBDb250ZW50J31cbiAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICAgICAgICAgICAgcmVzaXplPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17J2N1cnJlbnRQZXRJbmZvJ31cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnUGxlYXNlIGJlIHRob3JvdWdoIGluIHlvdXIgZGVzY3JpcHRpb25zJ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbGVmdFwiPmNoZWNrPC9pPmJ1dHRvbjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib2R5Y2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHA+SSBhbSBhIHZlcnkgc2ltcGxlIGNhcmQuIEkgYW0gZ29vZCBhdCBjb250YWluaW5nIHNtYWxsIGJpdHMgb2YgaW5mb3JtYXRpb24uIEkgYW0gY29udmVuaWVudCBiZWNhdXNlIEkgcmVxdWlyZSBsaXR0bGUgbWFya3VwIHRvIHVzZSBlZmZlY3RpdmVseS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10YWJzXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJzIHRhYnMtZml4ZWQtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgY2xhc3NOYW1lPVwiYWN0aXZlXCIgaHJlZj1cIiN0ZXN0NFwiPlRlc3QgMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBocmVmPVwiI3Rlc3Q1XCI+VGVzdCAyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIGhyZWY9XCIjdGVzdDZcIj5UZXN0IDM8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQgZ3JleSBsaWdodGVuLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRlc3Q0XCI+VGVzdCAxPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXN0NVwiPlRlc3QgMjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVzdDZcIj5UZXN0IDM8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS5qc3giXSwic291cmNlUm9vdCI6IiJ9