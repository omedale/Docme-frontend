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
          console.log('valid token');
          _this2.setState({ isAuthenticated: true });
        }
      }).catch(function () {
        console.log('not valid token');
        _this2.props.history.push('/login');
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
            'Detail'
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
                  { className: 'dropdown-button', 'data-activates': 'dropdown1' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeD8yZmM4Il0sIm5hbWVzIjpbIk5hdmlnYXRpb25CYXIiLCJwcm9wcyIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwibG9nT3V0IiwiYmluZCIsInRva2VuIiwiZ2V0VG9rZW4iLCJ2ZXJpZnlUb2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImNhdGNoIiwiaGlzdG9yeSIsInB1c2giLCJsb2dVc2VyT3V0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsdUJBQWlCO0FBRE4sS0FBYjtBQUdBLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUxpQjtBQU1sQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsUUFBUSxtQkFBUUMsUUFBUixFQUFkO0FBQ0EseUJBQVFDLFdBQVIsQ0FBb0JGLEtBQXBCLEVBQTJCRyxJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdkMsWUFBSUEsSUFBSUMsSUFBSixDQUFTQyxPQUFULEtBQXFCLGFBQXpCLEVBQXdDO0FBQ3RDQyxrQkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUVaLGlCQUFpQixJQUFuQixFQUFkO0FBQ0Q7QUFDRixPQUxELEVBTUNhLEtBTkQsQ0FNTyxZQUFNO0FBQ1hILGdCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQSxlQUFLYixLQUFMLENBQVdnQixPQUFYLENBQW1CQyxJQUFuQixDQUF3QixRQUF4QjtBQUNELE9BVEQ7QUFVRDs7QUFFQzs7Ozs7Ozs7NkJBS087QUFDUCx5QkFBUUMsVUFBUjtBQUNBLFdBQUtsQixLQUFMLENBQVdnQixPQUFYLENBQW1CQyxJQUFuQixDQUF3QixRQUF4QjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBQ0Q7Ozs7Ozs7OzZCQUtTO0FBQUE7O0FBQ1BMLGNBQVFDLEdBQVIsQ0FBWSxLQUFLYixLQUFqQjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUksSUFBRyxXQUFQLEVBQW1CLFdBQVUsa0JBQTdCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUksV0FBVSxlQUFkLEVBQThCLFNBQVM7QUFBQSx1QkFBTSxPQUFLRyxNQUFMLEVBQU47QUFBQSxlQUF2QztBQUFBO0FBQUE7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLElBQVIsRUFBYSxXQUFVLHNCQUF2QjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLDRCQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usd0JBQUcsR0FETDtBQUFBO0FBQUE7QUFERixlQURGO0FBSUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLElBQUcsU0FBVDtBQUFBO0FBQUE7QUFBSixlQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLElBQUcsT0FBVDtBQUFBO0FBQUE7QUFBSixlQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLElBQUcsVUFBVDtBQUFBO0FBQUE7QUFBSixlQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFHLE1BQUssa0JBQVI7QUFBQTtBQUFBO0FBQUosZUFQRjtBQVFFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBRyxXQUFVLGlCQUFiLEVBQStCLGtCQUFlLFdBQTlDO0FBQUE7QUFBa0U7QUFBQTtBQUFBLHNCQUFHLFdBQVUsc0JBQWI7QUFBQTtBQUFBO0FBQWxFO0FBQUo7QUFSRjtBQUZGO0FBREY7QUFMRixPQURGO0FBd0JEOzs7O0VBaEV5QixnQkFBTWdCLFM7O2tCQW1FbkJwQixhIiwiZmlsZSI6IjAuNjI1ZDdmZGZmZjcwNmZlNGVmMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4vLi4vdXRpbC9BcGlDYWxscyc7XG5cbmNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5sb2dPdXQgPSB0aGlzLmxvZ091dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHRva2VuID0gQXBpQ2FsbC5nZXRUb2tlbigpO1xuICAgIEFwaUNhbGwudmVyaWZ5VG9rZW4odG9rZW4pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT09ICdWYWxpZCBUb2tlbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkIHRva2VuJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ25vdCB2YWxpZCB0b2tlbicpO1xuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpO1xuICAgIH0pXG4gIH1cblxuICAgIC8qKlxuICAgKiBTaWduIE91dCB1c2VyXG4gICAqIEBtZXRob2Qgc2lnbk91dFxuICAgKiBAcmV0dXJuIHt2b2lkfSAtIHNpZ24gb3V0IHVzZXJcbiAgICovXG4gIGxvZ091dCgpIHtcbiAgICBBcGlDYWxsLmxvZ1VzZXJPdXQoKTtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xvZ2luJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIHJvdXRlc1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlcm9mIEFwcFxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWwgaWQ9XCJkcm9wZG93bjFcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgPGxpPkRldGFpbDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duY29sb3JcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvZ091dCgpfT5Mb2cgT3V0PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIG1haW5iZ1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiMhXCIgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyBmb250Y29sb3JcIj5Mb2dvPC9hPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89XCIvXCI+IEhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiZGV0YWlsc1wiPkRldGFpbDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCJsb2dpblwiPkxvZ2luPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cInJlZ2lzdGVyXCI+UmVnaXN0ZXI8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJjb2xsYXBzaWJsZS5odG1sXCI+SmF2YVNjcmlwdDwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZHJvcGRvd24tYnV0dG9uXCIgZGF0YS1hY3RpdmF0ZXM9XCJkcm9wZG93bjFcIj5Ecm9wZG93bjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHJpZ2h0XCI+YXJyb3dfZHJvcF9kb3duPC9pPjwvYT48L2xpPlxuXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=