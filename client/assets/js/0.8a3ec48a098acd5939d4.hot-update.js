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

var _TextArea = __webpack_require__(339);

var _TextArea2 = _interopRequireDefault(_TextArea);

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
      this.setState({
        docTitle: event.target.value.docTitle,
        docContent: event.target.value.docContent
      });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave(event) {
      event.preventDefault();
      console.log(event.target.docTitle.value);
      console.log(event.target.docContent.value);
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
                      { value: '', disabled: true, selected: true },
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
                  _react2.default.createElement(_TextArea2.default, {
                    title: 'Document Content',
                    rows: 5,
                    resize: false,
                    content: this.state.docContent,
                    name: 'docContent',
                    id: 'docContent',
                    controlFunc: this.handleChange,
                    placeholder: 'Please type your document here' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeD9kMzBlIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJpc0F1dGhlbnRpY2F0ZWQiLCJkb2NUaXRsZSIsImRvY0NvbnRlbnQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwib25DbGlja1NhdmUiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoaXN0b3J5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsdUJBQWlCLEtBRk47QUFHWEMsZ0JBQVUsRUFIQztBQUlYQyxrQkFBWTtBQUpELEtBQWI7QUFNQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQVRpQjtBQVVsQjs7OztpQ0FFWUUsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYztBQUNaTixrQkFBVUssTUFBTUUsTUFBTixDQUFhQyxLQUFiLENBQW1CUixRQURqQjtBQUVaQyxvQkFBWUksTUFBTUUsTUFBTixDQUFhQyxLQUFiLENBQW1CUDtBQUZuQixPQUFkO0FBSUQ7OztnQ0FHV0ksSyxFQUFPO0FBQ2pCQSxZQUFNSSxjQUFOO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWU4sTUFBTUUsTUFBTixDQUFhUCxRQUFiLENBQXNCUSxLQUFsQztBQUNBRSxjQUFRQyxHQUFSLENBQVlOLE1BQU1FLE1BQU4sQ0FBYU4sVUFBYixD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QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQUssSUFBRyxPQUFSO0FBQUE7QUFBQSxlQUZGO0FBR0U7QUFBQTtBQUFBLGtCQUFLLElBQUcsT0FBUjtBQUFBO0FBQUE7QUFIRjtBQVhGO0FBREY7QUFuREYsT0FERjtBQXlFRDs7OztFQXJHZ0IsZ0JBQU1XLFM7O2tCQXVHVmxCLEkiLCJmaWxlIjoiMC44YTNlYzQ4YTA5OGFjZDU5MzlkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICBkb2NUaXRsZTogJycsXG4gICAgICBkb2NDb250ZW50OiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1NhdmUgPSB0aGlzLm9uQ2xpY2tTYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY1RpdGxlOiBldmVudC50YXJnZXQudmFsdWUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiBldmVudC50YXJnZXQudmFsdWUuZG9jQ29udGVudFxuICAgIH0pO1xuICB9XG5cblxuICBvbkNsaWNrU2F2ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmRvY1RpdGxlLnZhbHVlKVxuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5kb2NDb250ZW50LnZhbHVlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMT5BZGQgRG9jdW1lbnQ8L2gxPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25DbGlja1NhdmV9IGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgPFNpbmdsZUlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZT17J3RleHQnfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1RpdGxlJ31cbiAgICAgICAgICAgICAgICAgICAgaWQ9eydkb2NUaXRsZSd9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydkb2NUaXRsZSd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5kb2NUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydUaXRsZSd9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkPkNob29zZSB5b3VyIG9wdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5PcHRpb24gMTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5PcHRpb24gMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5PcHRpb24gMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5NYXRlcmlhbGl6ZSBTZWxlY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydEb2N1bWVudCBDb250ZW50J31cbiAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICAgICAgICAgICAgcmVzaXplPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5kb2NDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydQbGVhc2UgdHlwZSB5b3VyIGRvY3VtZW50IGhlcmUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvZHljYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD5JIGFtIGEgdmVyeSBzaW1wbGUgY2FyZC4gSSBhbSBnb29kIGF0IGNvbnRhaW5pbmcgc21hbGwgYml0cyBvZiBpbmZvcm1hdGlvbi4gSSBhbSBjb252ZW5pZW50IGJlY2F1c2UgSSByZXF1aXJlIGxpdHRsZSBtYXJrdXAgdG8gdXNlIGVmZmVjdGl2ZWx5LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRhYnNcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYnMgdGFicy1maXhlZC13aWR0aFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBjbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPVwiI3Rlc3Q0XCI+VGVzdCAxPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIGhyZWY9XCIjdGVzdDVcIj5UZXN0IDI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgaHJlZj1cIiN0ZXN0NlwiPlRlc3QgMzwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBncmV5IGxpZ2h0ZW4tNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVzdDRcIj5UZXN0IDE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRlc3Q1XCI+VGVzdCAyPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXN0NlwiPlRlc3QgMzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=