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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(20); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NavigationBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeD8yZmM4Il0sIm5hbWVzIjpbIk5hdmlnYXRpb25CYXIiLCJwcm9wcyIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwibG9nT3V0IiwiYmluZCIsInRva2VuIiwiZ2V0VG9rZW4iLCJ2ZXJpZnlUb2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImNhdGNoIiwiaGlzdG9yeSIsInB1c2giLCJsb2dVc2VyT3V0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsdUJBQWlCO0FBRE4sS0FBYjtBQUdBLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUxpQjtBQU1sQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsUUFBUSxtQkFBUUMsUUFBUixFQUFkO0FBQ0EseUJBQVFDLFdBQVIsQ0FBb0JGLEtBQXBCLEVBQTJCRyxJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdkMsWUFBSUEsSUFBSUMsSUFBSixDQUFTQyxPQUFULEtBQXFCLGFBQXpCLEVBQXdDO0FBQ3RDQyxrQkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUVaLGlCQUFpQixJQUFuQixFQUFkO0FBQ0Q7QUFDRixPQUxELEVBTUNhLEtBTkQsQ0FNTyxZQUFNO0FBQ1hILGdCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQSxlQUFLYixLQUFMLENBQVdnQixPQUFYLENBQW1CQyxJQUFuQixDQUF3QixRQUF4QjtBQUNELE9BVEQ7QUFVRDs7QUFFQzs7Ozs7Ozs7NkJBS087QUFDUCx5QkFBUUMsVUFBUjtBQUNBLFdBQUtsQixLQUFMLENBQVdnQixPQUFYLENBQW1CQyxJQUFuQixDQUF3QixRQUF4QjtBQUNBLGFBQU8sSUFBUDtBQUNEO0FBQ0Q7Ozs7Ozs7OzZCQUtTO0FBQUE7O0FBQ1BMLGNBQVFDLEdBQVIsQ0FBWSxLQUFLYixLQUFqQjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUksSUFBRyxXQUFQLEVBQW1CLFdBQVUsa0JBQTdCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxlQUFkO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUksV0FBVSxlQUFkLEVBQThCLFNBQVM7QUFBQSx1QkFBTSxPQUFLRyxNQUFMLEVBQU47QUFBQSxlQUF2QztBQUFBO0FBQUE7QUFGRixTQURGO0FBS0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLElBQVIsRUFBYSxXQUFVLHNCQUF2QjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLDRCQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usd0JBQUcsR0FETDtBQUFBO0FBQUE7QUFERixlQURGO0FBSUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLElBQUcsU0FBVDtBQUFBO0FBQUE7QUFBSixlQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLElBQUcsT0FBVDtBQUFBO0FBQUE7QUFBSixlQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLElBQUcsVUFBVDtBQUFBO0FBQUE7QUFBSixlQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFHLE1BQUssa0JBQVI7QUFBQTtBQUFBO0FBQUosZUFQRjtBQVFFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBRyxXQUFVLGlCQUFiLEVBQStCLE1BQUssSUFBcEMsRUFBeUMsa0JBQWUsV0FBeEQ7QUFBQTtBQUE0RTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxzQkFBYjtBQUFBO0FBQUE7QUFBNUU7QUFBSjtBQVJGO0FBRkY7QUFERjtBQUxGLE9BREY7QUF3QkQ7Ozs7RUFoRXlCLGdCQUFNZ0IsUzs7a0JBbUVuQnBCLGEiLCJmaWxlIjoiMC5iMTU1YTQ5YzQyZTFmNGExZWZlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi8uLi91dGlsL0FwaUNhbGxzJztcblxuY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmxvZ091dCA9IHRoaXMubG9nT3V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBBcGlDYWxsLmdldFRva2VuKCk7XG4gICAgQXBpQ2FsbC52ZXJpZnlUb2tlbih0b2tlbikudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSA9PT0gJ1ZhbGlkIFRva2VuJykge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsaWQgdG9rZW4nKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQXV0aGVudGljYXRlZDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIHRva2VuJyk7XG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xvZ2luJyk7XG4gICAgfSlcbiAgfVxuXG4gICAgLyoqXG4gICAqIFNpZ24gT3V0IHVzZXJcbiAgICogQG1ldGhvZCBzaWduT3V0XG4gICAqIEByZXR1cm4ge3ZvaWR9IC0gc2lnbiBvdXQgdXNlclxuICAgKi9cbiAgbG9nT3V0KCkge1xuICAgIEFwaUNhbGwubG9nVXNlck91dCgpO1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVycyB0aGUgcm91dGVzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyb2YgQXBwXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCBpZD1cImRyb3Bkb3duMVwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25jb2xvclwiPlByb2ZpbGU8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bmNvbG9yXCIgb25DbGljaz17KCkgPT4gdGhpcy5sb2dPdXQoKX0+TG9nIE91dDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBtYWluYmdcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ28gZm9udGNvbG9yXCI+TG9nbzwvYT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPVwiL1wiPiBIb21lPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cImRldGFpbHNcIj5EZXRhaWw8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwibG9naW5cIj5Mb2dpbjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCJyZWdpc3RlclwiPlJlZ2lzdGVyPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiY29sbGFwc2libGUuaHRtbFwiPkphdmFTY3JpcHQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ1dHRvblwiIGhyZWY9XCIjIVwiIGRhdGEtYWN0aXZhdGVzPVwiZHJvcGRvd24xXCI+RHJvcGRvd248aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPmFycm93X2Ryb3BfZG93bjwvaT48L2E+PC9saT5cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhci5qc3giXSwic291cmNlUm9vdCI6IiJ9