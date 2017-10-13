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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeD8yZmM4Il0sIm5hbWVzIjpbIk5hdmlnYXRpb25CYXIiLCJwcm9wcyIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwibG9nT3V0IiwiYmluZCIsInRva2VuIiwiZ2V0VG9rZW4iLCJ2ZXJpZnlUb2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImNhdGNoIiwiaGlzdG9yeSIsInB1c2giLCJsb2dVc2VyT3V0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsdUJBQWlCO0FBRE4sS0FBYjtBQUdBLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUxpQjtBQU1sQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsUUFBUSxtQkFBUUMsUUFBUixFQUFkO0FBQ0EseUJBQVFDLFdBQVIsQ0FBb0JGLEtBQXBCLEVBQTJCRyxJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdkMsWUFBSUEsSUFBSUMsSUFBSixDQUFTQyxPQUFULEtBQXFCLGFBQXpCLEVBQXdDO0FBQ3RDQyxrQkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUVaLGlCQUFpQixJQUFuQixFQUFkO0FBQ0Q7QUFDRixPQUxELEVBTUNhLEtBTkQsQ0FNTyxZQUFNO0FBQ1gsZUFBS2YsS0FBTCxDQUFXZ0IsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsUUFBeEI7QUFDRCxPQVJEO0FBU0Q7O0FBRUM7Ozs7Ozs7OzZCQUtPO0FBQ1AseUJBQVFDLFVBQVI7QUFDQSxXQUFLbEIsS0FBTCxDQUFXZ0IsT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsUUFBeEI7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNEOzs7Ozs7Ozs2QkFLUztBQUFBOztBQUNQTCxjQUFRQyxHQUFSLENBQVksS0FBS2IsS0FBakI7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFJLElBQUcsV0FBUCxFQUFtQixXQUFVLGtCQUE3QjtBQUNFO0FBQUE7QUFBQSxjQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFJLFdBQVUsZUFBZCxFQUE4QixTQUFTO0FBQUEsdUJBQU0sT0FBS0csTUFBTCxFQUFOO0FBQUEsZUFBdkM7QUFBQTtBQUFBO0FBRkYsU0FERjtBQUtFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxJQUFSLEVBQWEsV0FBVSxzQkFBdkI7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSw0QkFBZDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHdCQUFHLEdBREw7QUFBQTtBQUFBO0FBREYsZUFERjtBQUlFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBTSxJQUFHLFNBQVQ7QUFBQTtBQUFBO0FBQUosZUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBTSxJQUFHLE9BQVQ7QUFBQTtBQUFBO0FBQUosZUFMRjtBQU1FO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBTSxJQUFHLFVBQVQ7QUFBQTtBQUFBO0FBQUosZUFORjtBQU9FO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxvQkFBRyxNQUFLLGtCQUFSO0FBQUE7QUFBQTtBQUFKLGVBUEY7QUFRRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQUcsV0FBVSxpQkFBYixFQUErQixNQUFLLElBQXBDLEVBQXlDLGtCQUFlLFdBQXhEO0FBQUE7QUFBNEU7QUFBQTtBQUFBLHNCQUFHLFdBQVUsc0JBQWI7QUFBQTtBQUFBO0FBQTVFO0FBQUo7QUFSRjtBQUZGO0FBREY7QUFMRixPQURGO0FBd0JEOzs7O0VBL0R5QixnQkFBTWdCLFM7O2tCQWtFbkJwQixhIiwiZmlsZSI6IjAuMTAyNjZjZWVmMzcwMTdmYzRjNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4vLi4vdXRpbC9BcGlDYWxscyc7XG5cbmNsYXNzIE5hdmlnYXRpb25CYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5sb2dPdXQgPSB0aGlzLmxvZ091dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHRva2VuID0gQXBpQ2FsbC5nZXRUb2tlbigpO1xuICAgIEFwaUNhbGwudmVyaWZ5VG9rZW4odG9rZW4pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT09ICdWYWxpZCBUb2tlbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkIHRva2VuJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpO1xuICAgIH0pXG4gIH1cblxuICAgIC8qKlxuICAgKiBTaWduIE91dCB1c2VyXG4gICAqIEBtZXRob2Qgc2lnbk91dFxuICAgKiBAcmV0dXJuIHt2b2lkfSAtIHNpZ24gb3V0IHVzZXJcbiAgICovXG4gIGxvZ091dCgpIHtcbiAgICBBcGlDYWxsLmxvZ1VzZXJPdXQoKTtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2xvZ2luJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIHJvdXRlc1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlcm9mIEFwcFxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWwgaWQ9XCJkcm9wZG93bjFcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duY29sb3JcIj5Qcm9maWxlPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25jb2xvclwiIG9uQ2xpY2s9eygpID0+IHRoaXMubG9nT3V0KCl9PkxvZyBPdXQ8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXIgbWFpbmJnXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiIyFcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIGZvbnRjb2xvclwiPkxvZ288L2E+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICB0bz1cIi9cIj4gSG9tZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCJkZXRhaWxzXCI+RGV0YWlsPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cImxvZ2luXCI+TG9naW48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwicmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImNvbGxhcHNpYmxlLmh0bWxcIj5KYXZhU2NyaXB0PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJkcm9wZG93bi1idXR0b25cIiBocmVmPVwiIyFcIiBkYXRhLWFjdGl2YXRlcz1cImRyb3Bkb3duMVwiPkRyb3Bkb3duPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcmlnaHRcIj5hcnJvd19kcm9wX2Rvd248L2k+PC9hPjwvbGk+XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==