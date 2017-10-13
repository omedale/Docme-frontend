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
      title: '',
      content: ''
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var title = this.state.title;
      this.setState({
        title: title
      });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave() {
      alert();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeD9kMzBlIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwidGl0bGUiLCJjb250ZW50IiwiZXZlbnQiLCJzZXRTdGF0ZSIsImFsZXJ0IiwiaGlzdG9yeSIsImhhbmRsZUNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx1QkFBaUIsS0FETjtBQUVYQyxhQUFPLEVBRkk7QUFHWEMsZUFBUztBQUhFLEtBQWI7QUFGaUI7QUFPbEI7Ozs7aUNBRVlDLEssRUFBTztBQUNsQixVQUFNRixRQUFRLEtBQUtGLEtBQUwsQ0FBV0UsS0FBekI7QUFDQSxXQUFLRyxRQUFMLENBQWM7QUFDWkgsZUFBT0E7QUFESyxPQUFkO0FBR0Q7OztrQ0FFYTtBQUNaSTtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZjtBQUNFLG1FQUFlLFNBQVMsS0FBS1AsS0FBTCxDQUFXUSxPQUFuQztBQURGLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQU0sV0FBVSxTQUFoQjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxvQkFBZjtBQUNFLDJEQUFPLE9BQU8sS0FBS1AsS0FBTCxDQUFXRSxLQUF6QixFQUFnQyxVQUFVLEtBQUtNLFlBQS9DLEVBQTZELGFBQVksYUFBekUsRUFBdUYsSUFBRyxZQUExRixFQUF1RyxNQUFLLE1BQTVHLEVBQW1ILFdBQVUsVUFBN0gsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixpQkFERjtBQUtFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLHdCQUFRLGNBQVIsRUFBaUIsY0FBYSxFQUE5QjtBQUFBO0FBQUEscUJBREY7QUFFRTtBQUFBO0FBQUEsd0JBQVEsT0FBTSxHQUFkO0FBQUE7QUFBQSxxQkFGRjtBQUdFO0FBQUE7QUFBQSx3QkFBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLHFCQUhGO0FBSUU7QUFBQTtBQUFBLHdCQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUE7QUFKRixtQkFERjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUxGLGVBREY7QUFnQkU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHFCQUFmO0FBQ0UsOERBQVUsT0FBTyxLQUFLUixLQUFMLENBQVdHLE9BQTVCLEVBQXFDLFVBQVUsS0FBS0ssWUFBcEQsRUFBa0UsSUFBRyxXQUFyRSxFQUFpRixXQUFVLHNCQUEzRixHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBREYsZUFoQkY7QUFzQkU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFHLFdBQVUsOEJBQWI7QUFBNEM7QUFBQTtBQUFBLHdCQUFHLFdBQVUscUJBQWI7QUFBQTtBQUFBLHFCQUE1QztBQUFBO0FBQUE7QUFERjtBQURGO0FBdEJGO0FBRkY7QUFERixTQUpGO0FBcUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFERjtBQUlFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUksV0FBVSx1QkFBZDtBQUNFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLEtBQWQ7QUFBb0I7QUFBQTtBQUFBLHNCQUFHLFdBQVUsUUFBYixFQUFzQixNQUFLLFFBQTNCO0FBQUE7QUFBQTtBQUFwQixpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBSSxXQUFVLEtBQWQ7QUFBb0I7QUFBQTtBQUFBLHNCQUFHLE1BQUssUUFBUjtBQUFBO0FBQUE7QUFBcEIsaUJBRkY7QUFHRTtBQUFBO0FBQUEsb0JBQUksV0FBVSxLQUFkO0FBQW9CO0FBQUE7QUFBQSxzQkFBRyxNQUFLLFFBQVI7QUFBQTtBQUFBO0FBQXBCO0FBSEY7QUFERixhQUpGO0FBV0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsNkJBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssSUFBRyxPQUFSO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFLLElBQUcsT0FBUjtBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQSxrQkFBSyxJQUFHLE9BQVI7QUFBQTtBQUFBO0FBSEY7QUFYRjtBQURGO0FBckNGLE9BREY7QUEyREQ7Ozs7RUFqRmdCLGdCQUFNQyxTOztrQkFtRlZYLEkiLCJmaWxlIjoiMC5kODM3YTE3Y2Y0YWFkM2IwZjVhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGNvbnRlbnQ6ICcnXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5zdGF0ZS50aXRsZVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGl0bGU6IHRpdGxlXG4gICAgfSlcbiAgfVxuXG4gIG9uQ2xpY2tTYXZlKCkge1xuICAgIGFsZXJ0KClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDE+QWRkIERvY3VtZW50PC9oMT5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIiBpZD1cImZpcnN0X25hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgZGVmYXVsdFZhbHVlPVwiXCI+Q2hvb3NlIHlvdXIgb3B0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5PcHRpb24gMjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPk9wdGlvbiAzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYXRlcmlhbGl6ZSBTZWxlY3Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGlkPVwidGV4dGFyZWExXCIgY2xhc3NOYW1lPVwibWF0ZXJpYWxpemUtdGV4dGFyZWFcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlRleHRhcmVhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbGVmdFwiPmNoZWNrPC9pPmJ1dHRvbjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib2R5Y2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHA+SSBhbSBhIHZlcnkgc2ltcGxlIGNhcmQuIEkgYW0gZ29vZCBhdCBjb250YWluaW5nIHNtYWxsIGJpdHMgb2YgaW5mb3JtYXRpb24uIEkgYW0gY29udmVuaWVudCBiZWNhdXNlIEkgcmVxdWlyZSBsaXR0bGUgbWFya3VwIHRvIHVzZSBlZmZlY3RpdmVseS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10YWJzXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJzIHRhYnMtZml4ZWQtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgY2xhc3NOYW1lPVwiYWN0aXZlXCIgaHJlZj1cIiN0ZXN0NFwiPlRlc3QgMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBocmVmPVwiI3Rlc3Q1XCI+VGVzdCAyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIGhyZWY9XCIjdGVzdDZcIj5UZXN0IDM8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQgZ3JleSBsaWdodGVuLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRlc3Q0XCI+VGVzdCAxPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXN0NVwiPlRlc3QgMjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVzdDZcIj5UZXN0IDM8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS5qc3giXSwic291cmNlUm9vdCI6IiJ9