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
    return _this;
  }

  _createClass(Home, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var document = this.state.docs;
      document.title = event.target.value.title;
      document.content = event.target.value.content;
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
                  _react2.default.createElement('input', { value: this.state.docs.title, onChange: this.handleChange, placeholder: 'Placeholder', id: 'first_name', type: 'text', className: 'validate' }),
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
                  _react2.default.createElement('textarea', { value: this.state.docs.content, onChange: this.handleChange, id: 'textarea1', className: 'materialize-textarea' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeD9kMzBlIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwiZG9jcyIsInRpdGxlIiwiY29udGVudCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJldmVudCIsImRvY3VtZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImFsZXJ0IiwiaGlzdG9yeSIsIm9uQ2xpY2tTYXZlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsSTs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQixLQUROO0FBRVhDLFlBQU0sRUFBQ0MsT0FBTyxFQUFSLEVBQVlDLFNBQVMsRUFBckI7QUFGSyxLQUFiO0FBSUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQU5pQjtBQU9sQjs7OztpQ0FFWUMsSyxFQUFPO0FBQ2xCLFVBQU1DLFdBQVcsS0FBS1IsS0FBTCxDQUFXRSxJQUE1QjtBQUNBTSxlQUFTTCxLQUFULEdBQWlCSSxNQUFNRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJQLEtBQXBDO0FBQ0FLLGVBQVNKLE9BQVQsR0FBbUJHLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQk4sT0FBdEM7QUFDQSxXQUFLTyxRQUFMLENBQWM7QUFDWlQsY0FBTU07QUFETSxPQUFkO0FBR0Q7OztrQ0FFYTtBQUNaSSxZQUFNLEtBQUtaLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkMsS0FBdEI7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFdBQWY7QUFDRSxtRUFBZSxTQUFTLEtBQUtKLEtBQUwsQ0FBV2Ms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akIsSSIsImZpbGUiOiIwLmE5ZGQyNDczNzlmYThmODMzNGU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxuICAgICAgZG9jczoge3RpdGxlOiAnJywgY29udGVudDogJyd9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IGRvY3VtZW50ID0gdGhpcy5zdGF0ZS5kb2NzXG4gICAgZG9jdW1lbnQudGl0bGUgPSBldmVudC50YXJnZXQudmFsdWUudGl0bGU7XG4gICAgZG9jdW1lbnQuY29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZS5jb250ZW50O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9jczogZG9jdW1lbnRcbiAgICB9KVxuICB9XG5cbiAgb25DbGlja1NhdmUoKSB7XG4gICAgYWxlcnQodGhpcy5zdGF0ZS5kb2NzLnRpdGxlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMT5BZGQgRG9jdW1lbnQ8L2gxPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuZG9jcy50aXRsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyXCIgaWQ9XCJmaXJzdF9uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIGRlZmF1bHRWYWx1ZT1cIlwiPkNob29zZSB5b3VyIG9wdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPk9wdGlvbiAxPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5PcHRpb24gMzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+TWF0ZXJpYWxpemUgU2VsZWN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3RoaXMuc3RhdGUuZG9jcy5jb250ZW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlkPVwidGV4dGFyZWExXCIgY2xhc3NOYW1lPVwibWF0ZXJpYWxpemUtdGV4dGFyZWFcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlRleHRhcmVhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrID0ge3RoaXMub25DbGlja1NhdmV9IGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBsZWZ0XCI+Y2hlY2s8L2k+YnV0dG9uPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvZHljYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cD5JIGFtIGEgdmVyeSBzaW1wbGUgY2FyZC4gSSBhbSBnb29kIGF0IGNvbnRhaW5pbmcgc21hbGwgYml0cyBvZiBpbmZvcm1hdGlvbi4gSSBhbSBjb252ZW5pZW50IGJlY2F1c2UgSSByZXF1aXJlIGxpdHRsZSBtYXJrdXAgdG8gdXNlIGVmZmVjdGl2ZWx5LjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRhYnNcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYnMgdGFicy1maXhlZC13aWR0aFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBjbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPVwiI3Rlc3Q0XCI+VGVzdCAxPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIGhyZWY9XCIjdGVzdDVcIj5UZXN0IDI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgaHJlZj1cIiN0ZXN0NlwiPlRlc3QgMzwvYT48L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudCBncmV5IGxpZ2h0ZW4tNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVzdDRcIj5UZXN0IDE8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRlc3Q1XCI+VGVzdCAyPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXN0NlwiPlRlc3QgMzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=