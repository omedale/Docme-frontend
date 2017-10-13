webpackHotUpdate(0,{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(40);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(38);

var _ApiCalls = __webpack_require__(50);

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
    _this.logOut = _this.logOut.bind(_this);
    return _this;
  }

  _createClass(NavigationBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var token = _ApiCalls2.default.getToken();
      _ApiCalls2.default.verifyToken(token).then(function (res) {
        if (res.data.message === 'Valid Token') {
          _this2.setState({ isAuthenticated: true });
        }
      }).catch(function () {
        logOut();
      });
    }

    /**
    * Sign Out user
    * @method signOut
    * @return {void} - sign out user
    */

  }, {
    key: 'logOut',
    value: function logOut() {
      _ApiCalls2.default.logUserOut();
      this.props.history.push('/login');
      return true;
    }
    /**
     * Renders the routes
     * @returns {void}
     * @memberof App
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { id: 'dropdown1', className: 'dropdown-content' },
          _react2.default.createElement(
            'li',
            { className: 'dropdowncolor' },
            'Profile'
          ),
          _react2.default.createElement(
            'li',
            { className: 'dropdowncolor', onClick: function onClick() {
                return _this3.logOut();
              } },
            'Log Out'
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
                  { className: 'dropdown-button', href: '#!', 'data-activates': 'dropdown1' },
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NavigationBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeD8yZmM4Il0sIm5hbWVzIjpbIk5hdmlnYXRpb25CYXIiLCJwcm9wcyIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwibG9nT3V0IiwiYmluZCIsInRva2VuIiwiZ2V0VG9rZW4iLCJ2ZXJpZnlUb2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwibWVzc2FnZSIsInNldFN0YXRlIiwiY2F0Y2giLCJsb2dVc2VyT3V0IiwiaGlzdG9yeSIsInB1c2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGE7OztBQUNKLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx1QkFBaUI7QUFETixLQUFiO0FBR0EsVUFBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkO0FBTGlCO0FBTWxCOzs7O3lDQUVvQjtBQUFBOztBQUNuQixVQUFNQyxRQUFRLG1CQUFRQyxRQUFSLEVBQWQ7QUFDQSx5QkFBUUMsV0FBUixDQUFvQkYsS0FBcEIsRUFBMkJHLElBQTNCLENBQWdDLFVBQUNDLEdBQUQsRUFBUztBQUN2QyxZQUFJQSxJQUFJQyxJQUFKLENBQVNDLE9BQVQsS0FBcUIsYUFBekIsRUFBd0M7QUFDdEMsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFVixpQkFBaUIsSUFBbkIsRUFBZDtBQUNEO0FBQ0YsT0FKRCxFQUtDVyxLQUxELENBS08sWUFBTTtBQUNYVjtBQUNELE9BUEQ7QUFRRDs7QUFFQzs7Ozs7Ozs7NkJBS087QUFDUCx5QkFBUVcsVUFBUjtBQUNBLFdBQUtkLEtBQUwsQ0FBV2UsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsUUFBeEI7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNEOzs7Ozs7Ozs2QkFLUztBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUksSUFBRyxXQUFQLEVBQW1CLFdBQVUsa0JBQTdCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxlQUFkO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUksV0FBVSxlQUFkLEVBQThCLFNBQVM7QUFBQSx1QkFBTSxPQUFLYixNQUFMLEVBQU47QUFBQSxlQUF2QztBQUFBO0FBQUE7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLElBQVIsRUFBYSxXQUFVLHNCQUF2QjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLDRCQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usd0JBQUcsR0FETDtBQUFBO0FBQUE7QUFERixlQURGO0FBSUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLElBQUcsU0FBVDtBQUFBO0FBQUE7QUFBSixlQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLElBQUcsT0FBVDtBQUFBO0FBQUE7QUFBSixlQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLElBQUcsVUFBVDtBQUFBO0FBQUE7QUFBSixlQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFHLE1BQUssa0JBQVI7QUFBQTtBQUFBO0FBQUosZUFQRjtBQVFFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBRyxXQUFVLGlCQUFiLEVBQStCLE1BQUssSUFBcEMsRUFBeUMsa0JBQWUsV0FBeEQ7QUFBQTtBQUE0RTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxzQkFBYjtBQUFBO0FBQUE7QUFBNUU7QUFBSjtBQVJGO0FBRkY7QUFERjtBQUxGLE9BREY7QUF3QkQ7Ozs7RUE3RHlCLGdCQUFNYyxTOztrQkFnRW5CbEIsYSIsImZpbGUiOiIwLjhhYmUxNzg3NjFkMDM0ZWQ0M2QwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuLy4uL3V0aWwvQXBpQ2FsbHMnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMubG9nT3V0ID0gdGhpcy5sb2dPdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB0b2tlbiA9IEFwaUNhbGwuZ2V0VG9rZW4oKTtcbiAgICBBcGlDYWxsLnZlcmlmeVRva2VuKHRva2VuKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09PSAnVmFsaWQgVG9rZW4nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgbG9nT3V0KClcbiAgICB9KVxuICB9XG5cbiAgICAvKipcbiAgICogU2lnbiBPdXQgdXNlclxuICAgKiBAbWV0aG9kIHNpZ25PdXRcbiAgICogQHJldHVybiB7dm9pZH0gLSBzaWduIG91dCB1c2VyXG4gICAqL1xuICBsb2dPdXQoKSB7XG4gICAgQXBpQ2FsbC5sb2dVc2VyT3V0KCk7XG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSByb3V0ZXNcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJvZiBBcHBcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsIGlkPVwiZHJvcGRvd24xXCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bmNvbG9yXCI+UHJvZmlsZTwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duY29sb3JcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvZ091dCgpfT5Mb2cgT3V0PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIG1haW5iZ1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyBmb250Y29sb3JcIj5Mb2dvPC9hPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89XCIvXCI+IEhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiZGV0YWlsc1wiPkRldGFpbDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCJsb2dpblwiPkxvZ2luPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cInJlZ2lzdGVyXCI+UmVnaXN0ZXI8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJjb2xsYXBzaWJsZS5odG1sXCI+SmF2YVNjcmlwdDwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24tYnV0dG9uXCIgaHJlZj1cIiMhXCIgZGF0YS1hY3RpdmF0ZXM9XCJkcm9wZG93bjFcIj5Ecm9wZG93bjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHJpZ2h0XCI+YXJyb3dfZHJvcF9kb3duPC9pPjwvYT48L2xpPlxuXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=