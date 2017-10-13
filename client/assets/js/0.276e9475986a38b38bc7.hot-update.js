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
              { className: 'col s12' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react2.default.createElement('input', { id: '', type: 'text', value: this.state.docTitle, onChange: this.handleChange }),
                  _react2.default.createElement(
                    'label',
                    null,
                    'Title'
                  )
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
                  _react2.default.createElement('textarea', { value: this.state.docContent, onChange: this.handleChange, id: 'textarea1', className: 'materialize-textarea' }),
                  _react2.default.createElement(
                    'label',
                    null,
                    'Textarea'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement(
                    'a',
                    { onClick: this.onClickSave, className: 'waves-effect waves-light btn' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeD9kMzBlIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJpc0F1dGhlbnRpY2F0ZWQiLCJkb2NUaXRsZSIsImRvY0NvbnRlbnQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwib25DbGlja1NhdmUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImhpc3RvcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLHVCQUFpQixLQUZOO0FBR1hDLGdCQUFVLEVBSEM7QUFJWEMsa0JBQVk7QUFKRCxLQUFiO0FBTUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFUaUI7QUFVbEI7Ozs7aUNBRVlFLEssRUFBTztBQUNsQkMsY0FBUUMsR0FBUixDQUFZRixNQUFNRyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJSLFVBQS9CO0FBQ0EsV0FBS1MsUUFBTCxDQUFjO0FBQ1pWLGtCQUFVSyxNQUFNRyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJULFFBRGpCO0FBRVpDLG9CQUFZSSxNQUFNRyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJSO0FBRm5CLE9BQWQ7QUFJRDs7O2dDQUdXSSxLLEVBQU87QUFDakJBLFlBQU1NLGNBQU47QUFDQUMsWUFBTVAsTUFBTUcsTUFBTixDQUFhUixRQUFiLENBQXNCUyxLQUE1QjtBQUNEOzs7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QTJERDs7OztFQXZGZ0IsZ0JBQU1VLFM7O2tCQXlGVm5CLEkiLCJmaWxlIjoiMC4yNzZlOTQ3NTk4NmEzOGIzOGJjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgIGRvY1RpdGxlOiAnJyxcbiAgICAgIGRvY0NvbnRlbnQ6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrU2F2ZSA9IHRoaXMub25DbGlja1NhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZS5kb2NDb250ZW50KVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9jVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NDb250ZW50XG4gICAgfSk7XG4gIH1cblxuXG4gIG9uQ2xpY2tTYXZlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhbGVydChldmVudC50YXJnZXQuZG9jVGl0bGUudmFsdWUpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb25CYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGgxPkFkZCBEb2N1bWVudDwvaDE+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIlwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZG9jVGl0bGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgZGVmYXVsdFZhbHVlPVwiXCI+Q2hvb3NlIHlvdXIgb3B0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5PcHRpb24gMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPk9wdGlvbiAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYXRlcmlhbGl6ZSBTZWxlY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17dGhpcy5zdGF0ZS5kb2NDb250ZW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlkPVwidGV4dGFyZWExXCIgY2xhc3NOYW1lPVwibWF0ZXJpYWxpemUtdGV4dGFyZWFcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlRleHRhcmVhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrID0ge3RoaXMub25DbGlja1NhdmV9IGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvZHljYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD5JIGFtIGEgdmVyeSBzaW1wbGUgY2FyZC4gSSBhbSBnb29kIGF0IGNvbnRhaW5pbmcgc21hbGwgYml0cyBvZiBpbmZvcm1hdGlvbi4gSSBhbSBjb252ZW5pZW50IGJlY2F1c2UgSSByZXF1aXJlIGxpdHRsZSBtYXJrdXAgdG8gdXNlIGVmZmVjdGl2ZWx5LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRhYnNcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYnMgdGFicy1maXhlZC13aWR0aFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBjbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPVwiI3Rlc3Q0XCI+VGVzdCAxPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIGhyZWY9XCIjdGVzdDVcIj5UZXN0IDI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgaHJlZj1cIiN0ZXN0NlwiPlRlc3QgMzwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBncmV5IGxpZ2h0ZW4tNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVzdDRcIj5UZXN0IDE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRlc3Q1XCI+VGVzdCAyPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXN0NlwiPlRlc3QgMzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=