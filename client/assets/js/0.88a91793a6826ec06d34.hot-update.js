webpackHotUpdate(0,{

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(36);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(47);

var _ApiCalls = __webpack_require__(46);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationBar = function (_React$Component) {
  _inherits(NavigationBar, _React$Component);

  function NavigationBar(props) {
    _classCallCheck(this, NavigationBar);

    var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));

    _this.state = {
      isAuthenticated: false
    };
    return _this;
  }

  _createClass(NavigationBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var token = _ApiCalls2.default.getToken();
      _ApiCalls2.default.verifyToken(token).then(function (res) {
        console.log('valid ====== token');
        if (res.data.message === 'Valid Token') {
          console.log('valid token');
          _this2.setState({ isAuthenticated: true });
        } else {
          console.log('not valid token');
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
        }
      }).catch();
    }
    /**
     * Renders the routes
     * @returns {void}
     * @memberof App
     */

  }, {
    key: 'render',
    value: function render() {
      console.log(this.props);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { id: 'dropdown1', className: 'dropdown-content' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'dropdowncolor', to: 'home' },
              'Detail'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'dropdowncolor', to: 'home' },
              'Detail'
            )
          ),
          _react2.default.createElement('li', { className: 'divider' }),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'dropdowncolor', to: 'home' },
              'Detail'
            )
          )
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'div',
            { className: 'nav-wrapper mainbg' },
            _react2.default.createElement(
              'a',
              { href: '#!', className: 'brand-logo fontcolor' },
              'Logo'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'right hide-on-med-and-down' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  {
                    to: '/' },
                  ' Home'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: 'details' },
                  'Detail'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: 'login' },
                  'Login'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: 'register' },
                  'Register'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'collapsible.html' },
                  'JavaScript'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'dropdown-button', href: '#', 'data-activates': 'dropdown1' },
                  'Dropdown',
                  _react2.default.createElement(
                    'i',
                    { className: 'material-icons right' },
                    'arrow_drop_down'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return NavigationBar;
}(_react2.default.Component);

exports.default = NavigationBar;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(20); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NavigationBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeD8yZmM4Il0sIm5hbWVzIjpbIk5hdmlnYXRpb25CYXIiLCJwcm9wcyIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwidG9rZW4iLCJnZXRUb2tlbiIsInZlcmlmeVRva2VuIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWVzc2FnZSIsInNldFN0YXRlIiwiY2F0Y2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGE7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx1QkFBaUI7QUFETixLQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVvQjtBQUFBOztBQUNuQixVQUFNQyxRQUFRLG1CQUFRQyxRQUFSLEVBQWQ7QUFDQSx5QkFBUUMsV0FBUixDQUFvQkYsS0FBcEIsRUFBMkJHLElBQTNCLENBQWdDLFVBQUNDLEdBQUQsRUFBUztBQUN2Q0MsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBLFlBQUlGLElBQUlHLElBQUosQ0FBU0MsT0FBVCxLQUFxQixhQUF6QixFQUF3QztBQUN0Q0gsa0JBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsaUJBQUtHLFFBQUwsQ0FBYyxFQUFFVixpQkFBaUIsSUFBbkIsRUFBZDtBQUNELFNBSEQsTUFHTztBQUNMTSxrQkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsaUJBQU8sMERBQVUsSUFBRyxRQUFiLEdBQVA7QUFDRDtBQUNGLE9BVEQsRUFVQ0ksS0FWRDtBQVdEO0FBQ0Q7Ozs7Ozs7OzZCQUtTO0FBQ1BMLGNBQVFDLEdBQVIsQ0FBWSxLQUFLVCxLQUFqQjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUksSUFBRyxXQUFQLEVBQW1CLFdBQVUsa0JBQTdCO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGdCQUFNLFdBQVUsZUFBaEIsRUFBZ0MsSUFBRyxNQUFuQztBQUFBO0FBQUE7QUFBSixXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGdCQUFNLFdBQVUsZUFBaEIsRUFBZ0MsSUFBRyxNQUFuQztBQUFBO0FBQUE7QUFBSixXQUZGO0FBR0UsZ0RBQUksV0FBVSxTQUFkLEdBSEY7QUFJRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsZ0JBQU0sV0FBVSxlQUFoQixFQUFnQyxJQUFHLE1BQW5DO0FBQUE7QUFBQTtBQUFKO0FBSkYsU0FERjtBQU9FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxJQUFSLEVBQWEsV0FBVSxzQkFBdkI7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSw0QkFBZDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHdCQUFHLEdBREw7QUFBQTtBQUFBO0FBREYsZUFERjtBQUlFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBTSxJQUFHLFNBQVQ7QUFBQTtBQUFBO0FBQUosZUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBTSxJQUFHLE9BQVQ7QUFBQTtBQUFBO0FBQUosZUFMRjtBQU1FO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBTSxJQUFHLFVBQVQ7QUFBQTtBQUFBO0FBQUosZUFORjtBQU9FO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBRyxNQUFLLGtCQUFSO0FBQUE7QUFBQTtBQUFKLGVBUEY7QUFRRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQUcsV0FBVSxpQkFBYixFQUErQixNQUFLLEdBQXBDLEVBQXdDLGtCQUFlLFdBQXZEO0FBQUE7QUFBMkU7QUFBQTtBQUFBLHNCQUFHLFdBQVUsc0JBQWI7QUFBQTtBQUFBO0FBQTNFO0FBQUo7QUFSRjtBQUZGO0FBREY7QUFQRixPQURGO0FBMEJEOzs7O0VBdkR5QixnQkFBTWMsUzs7a0JBMERuQmYsYSIsImZpbGUiOiIwLjg4YTkxNzkzYTY4MjZlYzA2ZDM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuLy4uL3V0aWwvQXBpQ2FsbHMnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHRva2VuID0gQXBpQ2FsbC5nZXRUb2tlbigpO1xuICAgIEFwaUNhbGwudmVyaWZ5VG9rZW4odG9rZW4pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3ZhbGlkID09PT09PSB0b2tlbicpO1xuICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT09ICdWYWxpZCBUb2tlbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkIHRva2VuJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIHRva2VuJyk7XG4gICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvbG9naW5cIiAvPjtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgpXG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIHJvdXRlc1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlcm9mIEFwcFxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWwgaWQ9XCJkcm9wZG93bjFcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgPGxpPjxMaW5rIGNsYXNzTmFtZT1cImRyb3Bkb3duY29sb3JcIiB0bz1cImhvbWVcIj5EZXRhaWw8L0xpbms+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgY2xhc3NOYW1lPVwiZHJvcGRvd25jb2xvclwiIHRvPVwiaG9tZVwiPkRldGFpbDwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgY2xhc3NOYW1lPVwiZHJvcGRvd25jb2xvclwiIHRvPVwiaG9tZVwiPkRldGFpbDwvTGluaz48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXIgbWFpbmJnXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIGZvbnRjb2xvclwiPkxvZ288L2E+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz1cIi9cIj4gSG9tZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCJkZXRhaWxzXCI+RGV0YWlsPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cImxvZ2luXCI+TG9naW48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwicmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImNvbGxhcHNpYmxlLmh0bWxcIj5KYXZhU2NyaXB0PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1idXR0b25cIiBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwiZHJvcGRvd24xXCI+RHJvcGRvd248aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPmFycm93X2Ryb3BfZG93bjwvaT48L2E+PC9saT5cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci5qc3giXSwic291cmNlUm9vdCI6IiJ9