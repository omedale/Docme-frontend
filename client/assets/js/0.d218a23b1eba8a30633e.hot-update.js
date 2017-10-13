webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(14), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(273);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(232);

var _ApiCalls = __webpack_require__(292);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationBar = function (_React$Component) {
  _inherits(NavigationBar, _React$Component);

  function NavigationBar(props) {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));
  }

  _createClass(NavigationBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      console.log("am herer");
      var token = _ApiCalls2.default.getToken();
      _ApiCalls2.default.verifyToken(token).then(function (res) {
        if (res.data.message === 'Valid Token') {
          console.log('valid token');
          _this2.setState({ isAuthenticated: true });
        } else {
          console.log('not valid token');
          _this2.setState({ isAuthenticated: false });
        }
      });
      console.log(this.state.isAuthenticated);
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NavigationBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeD8yZmM4Il0sIm5hbWVzIjpbIk5hdmlnYXRpb25CYXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsImdldFRva2VuIiwidmVyaWZ5VG9rZW4iLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm1lc3NhZ2UiLCJzZXRTdGF0ZSIsImlzQXV0aGVudGljYXRlZCIsInN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlIQUNYQSxLQURXO0FBRWxCOzs7O3lDQUVvQjtBQUFBOztBQUNuQkMsY0FBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSxVQUFNQyxRQUFRLG1CQUFRQyxRQUFSLEVBQWQ7QUFDQSx5QkFBUUMsV0FBUixDQUFvQkYsS0FBcEIsRUFBMkJHLElBQTNCLENBQWdDLFVBQUNDLEdBQUQsRUFBUztBQUN2QyxZQUFJQSxJQUFJQyxJQUFKLENBQVNDLE9BQVQsS0FBcUIsYUFBekIsRUFBd0M7QUFDdENSLGtCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBLGlCQUFLUSxRQUFMLENBQWMsRUFBQ0MsaUJBQWlCLElBQWxCLEVBQWQ7QUFDRCxTQUhELE1BR087QUFDTFYsa0JBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLGlCQUFLUSxRQUFMLENBQWMsRUFBQ0MsaUJBQWlCLEtBQWxCLEVBQWQ7QUFDRDtBQUNGLE9BUkQ7QUFTQVYsY0FBUUMsR0FBUixDQUFZLEtBQUtVLEtBQUwsQ0FBV0QsZUFBdkI7QUFDRDtBQUNEOzs7Ozs7Ozs2QkFLUztBQUNQVixjQUFRQyxHQUFSLENBQVksS0FBS0YsS0FBakI7QUFDRixhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxZQUFJLElBQUcsV0FBUCxFQUFtQixXQUFVLGtCQUE3QjtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQkFBTSxXQUFVLGVBQWhCLEVBQWdDLElBQUcsTUFBbkM7QUFBQTtBQUFBO0FBQUosV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQkFBTSxXQUFVLGVBQWhCLEVBQWdDLElBQUcsTUFBbkM7QUFBQTtBQUFBO0FBQUosV0FGRjtBQUdFLGdEQUFJLFdBQVUsU0FBZCxHQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGdCQUFNLFdBQVUsZUFBaEIsRUFBZ0MsSUFBRyxNQUFuQztBQUFBO0FBQUE7QUFBSjtBQUpGLFNBREE7QUFPQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssSUFBUixFQUFhLFdBQVUsc0JBQXZCO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFJLFdBQVUsNEJBQWQ7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQSx3QkFBRyxHQURIO0FBQUE7QUFBQTtBQURBLGVBREE7QUFJQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxTQUFUO0FBQUE7QUFBQTtBQUFKLGVBSkE7QUFLQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxPQUFUO0FBQUE7QUFBQTtBQUFKLGVBTEE7QUFNQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxVQUFUO0FBQUE7QUFBQTtBQUFKLGVBTkE7QUFPQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQUE7QUFBSixlQVBBO0FBUUE7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFHLFdBQVUsaUJBQWIsRUFBK0IsTUFBSyxHQUFwQyxFQUF3QyxrQkFBZSxXQUF2RDtBQUFBO0FBQTJFO0FBQUE7QUFBQSxzQkFBRyxXQUFVLHNCQUFiO0FBQUE7QUFBQTtBQUEzRTtBQUFKO0FBUkE7QUFGRjtBQURGO0FBUEEsT0FERjtBQTBCRDs7OztFQXBEMkIsZ0JBQU1hLFM7O2tCQXVEbkJkLGEiLCJmaWxlIjoiMC5kMjE4YTIzYjFlYmE4YTMwNjMzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuLy4uL3V0aWwvQXBpQ2FsbHMnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJhbSBoZXJlclwiKTtcbiAgICBjb25zdCB0b2tlbiA9IEFwaUNhbGwuZ2V0VG9rZW4oKTtcbiAgICBBcGlDYWxsLnZlcmlmeVRva2VuKHRva2VuKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09PSAnVmFsaWQgVG9rZW4nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCB0b2tlbicpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0F1dGhlbnRpY2F0ZWQ6IHRydWV9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3QgdmFsaWQgdG9rZW4nKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNBdXRoZW50aWNhdGVkOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVycyB0aGUgcm91dGVzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyb2YgQXBwXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICA8dWwgaWQ9XCJkcm9wZG93bjFcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICA8bGk+PExpbmsgY2xhc3NOYW1lPVwiZHJvcGRvd25jb2xvclwiIHRvPVwiaG9tZVwiPkRldGFpbDwvTGluaz48L2xpPlxuICAgICAgPGxpPjxMaW5rIGNsYXNzTmFtZT1cImRyb3Bkb3duY29sb3JcIiB0bz1cImhvbWVcIj5EZXRhaWw8L0xpbms+PC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9saT5cbiAgICAgIDxsaT48TGluayBjbGFzc05hbWU9XCJkcm9wZG93bmNvbG9yXCIgdG89XCJob21lXCI+RGV0YWlsPC9MaW5rPjwvbGk+XG4gICAgPC91bD5cbiAgICA8bmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBtYWluYmdcIj5cbiAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyBmb250Y29sb3JcIj5Mb2dvPC9hPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgPGxpPlxuICAgICAgICA8TGluayBcbiAgICAgICAgdG89XCIvXCI+IEhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiZGV0YWlsc1wiPkRldGFpbDwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgdG89XCJsb2dpblwiPkxvZ2luPC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaT48TGluayB0bz1cInJlZ2lzdGVyXCI+UmVnaXN0ZXI8L0xpbms+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCJjb2xsYXBzaWJsZS5odG1sXCI+SmF2YVNjcmlwdDwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24tYnV0dG9uXCIgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cImRyb3Bkb3duMVwiPkRyb3Bkb3duPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcmlnaHRcIj5hcnJvd19kcm9wX2Rvd248L2k+PC9hPjwvbGk+XG4gICAgICAgIFxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci5qc3giXSwic291cmNlUm9vdCI6IiJ9