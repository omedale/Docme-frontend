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
      isAuthenticated: false,
      docs: { title: '', content: '' }
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var document = this.state.docs;
      document.title = event.target.title.value;
      document.content = event.target.content.value;
      this.setState({
        docs: document
      });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave() {
      alert(this.state.docs.title);
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
                  _react2.default.createElement('input', { value: this.state.title, onChange: this.handleChange, placeholder: 'Placeholder', id: 'first_name', type: 'text', className: 'validate' }),
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
                  _react2.default.createElement('textarea', { value: this.state.content, onChange: this.handleChange, id: 'textarea1', className: 'materialize-textarea' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeD9kMzBlIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwiZG9jcyIsInRpdGxlIiwiY29udGVudCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImV2ZW50IiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiYWxlcnQiLCJoaXN0b3J5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsSTs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQixLQUROO0FBRVhDLFlBQU0sRUFBQ0MsT0FBTyxFQUFSLEVBQVlDLFNBQVMsRUFBckI7QUFGSyxLQUFiO0FBSUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFQaUI7QUFRbEI7Ozs7aUNBRVlFLEssRUFBTztBQUNsQixVQUFNQyxXQUFXLEtBQUtULEtBQUwsQ0FBV0UsSUFBNUI7QUFDQU8sZUFBU04sS0FBVCxHQUFpQkssTUFBTUUsTUFBTixDQUFhUCxLQUFiLENBQW1CUSxLQUFwQztBQUNBRixlQUFTTCxPQUFULEdBQW1CSSxNQUFNRSxNQUFOLENBQWFOLE9BQWIsQ0FBcUJPLEtBQXhDO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQ1pWLGNBQU1PO0FBRE0sT0FBZDtBQUdEOzs7a0NBRWE7QUFDWkksWUFBTSxLQUFLYixLQUFMLENBQVdFLElBQVgsQ0FBZ0JDLEtBQXRCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtB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RDs7OztFQXBGZ0IsZ0JBQU1RLFM7O2tCQXNGVmpCLEkiLCJmaWxlIjoiMC5lNjdiZmQ3NTQ2ODQ4Nzg2NTAzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgIGRvY3M6IHt0aXRsZTogJycsIGNvbnRlbnQ6ICcnfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1NhdmUgPSB0aGlzLm9uQ2xpY2tTYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBkb2N1bWVudCA9IHRoaXMuc3RhdGUuZG9jc1xuICAgIGRvY3VtZW50LnRpdGxlID0gZXZlbnQudGFyZ2V0LnRpdGxlLnZhbHVlO1xuICAgIGRvY3VtZW50LmNvbnRlbnQgPSBldmVudC50YXJnZXQuY29udGVudC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY3M6IGRvY3VtZW50XG4gICAgfSlcbiAgfVxuXG4gIG9uQ2xpY2tTYXZlKCkge1xuICAgIGFsZXJ0KHRoaXMuc3RhdGUuZG9jcy50aXRsZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDE+QWRkIERvY3VtZW50PC9oMT5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIiBpZD1cImZpcnN0X25hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgZGVmYXVsdFZhbHVlPVwiXCI+Q2hvb3NlIHlvdXIgb3B0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5PcHRpb24gMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPk9wdGlvbiAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYXRlcmlhbGl6ZSBTZWxlY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlkPVwidGV4dGFyZWExXCIgY2xhc3NOYW1lPVwibWF0ZXJpYWxpemUtdGV4dGFyZWFcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlRleHRhcmVhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrID0ge3RoaXMub25DbGlja1NhdmV9IGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvZHljYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD5JIGFtIGEgdmVyeSBzaW1wbGUgY2FyZC4gSSBhbSBnb29kIGF0IGNvbnRhaW5pbmcgc21hbGwgYml0cyBvZiBpbmZvcm1hdGlvbi4gSSBhbSBjb252ZW5pZW50IGJlY2F1c2UgSSByZXF1aXJlIGxpdHRsZSBtYXJrdXAgdG8gdXNlIGVmZmVjdGl2ZWx5LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRhYnNcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYnMgdGFicy1maXhlZC13aWR0aFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBjbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPVwiI3Rlc3Q0XCI+VGVzdCAxPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIGhyZWY9XCIjdGVzdDVcIj5UZXN0IDI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgaHJlZj1cIiN0ZXN0NlwiPlRlc3QgMzwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBncmV5IGxpZ2h0ZW4tNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVzdDRcIj5UZXN0IDE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRlc3Q1XCI+VGVzdCAyPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXN0NlwiPlRlc3QgMzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=