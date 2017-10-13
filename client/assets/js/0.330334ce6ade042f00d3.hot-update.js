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
        console.log('valid token');
        if (res.data.message === 'Valid Token') {
          console.log('valid token');
          _this2.setState({ isAuthenticated: true });
        } else {
          console.log('not valid token');
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeD8yZmM4Il0sIm5hbWVzIjpbIk5hdmlnYXRpb25CYXIiLCJwcm9wcyIsInN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwidG9rZW4iLCJnZXRUb2tlbiIsInZlcmlmeVRva2VuIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwibWVzc2FnZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsdUJBQWlCO0FBRE4sS0FBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIsVUFBTUMsUUFBUSxtQkFBUUMsUUFBUixFQUFkO0FBQ0EseUJBQVFDLFdBQVIsQ0FBb0JGLEtBQXBCLEVBQTJCRyxJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdkNDLGdCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBLFlBQUlGLElBQUlHLElBQUosQ0FBU0MsT0FBVCxLQUFxQixhQUF6QixFQUF3QztBQUN0Q0gsa0JBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsaUJBQUtHLFFBQUwsQ0FBYyxFQUFFVixpQkFBaUIsSUFBbkIsRUFBZDtBQUNELFNBSEQsTUFHTztBQUNMTSxrQkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsaUJBQU8sMERBQVUsSUFBRyxRQUFiLEdBQVA7QUFDRDtBQUNGLE9BVEQ7QUFVRDtBQUNEOzs7Ozs7Ozs2QkFLUztBQUNQRCxjQUFRQyxHQUFSLENBQVksS0FBS1QsS0FBakI7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFJLElBQUcsV0FBUCxFQUFtQixXQUFVLGtCQUE3QjtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQkFBTSxXQUFVLGVBQWhCLEVBQWdDLElBQUcsTUFBbkM7QUFBQTtBQUFBO0FBQUosV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQkFBTSxXQUFVLGVBQWhCLEVBQWdDLElBQUcsTUFBbkM7QUFBQTtBQUFBO0FBQUosV0FGRjtBQUdFLGdEQUFJLFdBQVUsU0FBZCxHQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGdCQUFNLFdBQVUsZUFBaEIsRUFBZ0MsSUFBRyxNQUFuQztBQUFBO0FBQUE7QUFBSjtBQUpGLFNBREY7QUFPRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssSUFBUixFQUFhLFdBQVUsc0JBQXZCO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFJLFdBQVUsNEJBQWQ7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSx3QkFBRyxHQURMO0FBQUE7QUFBQTtBQURGLGVBREY7QUFJRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxTQUFUO0FBQUE7QUFBQTtBQUFKLGVBSkY7QUFLRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxPQUFUO0FBQUE7QUFBQTtBQUFKLGVBTEY7QUFNRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxVQUFUO0FBQUE7QUFBQTtBQUFKLGVBTkY7QUFPRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQUcsTUFBSyxrQkFBUjtBQUFBO0FBQUE7QUFBSixlQVBGO0FBUUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFHLFdBQVUsaUJBQWIsRUFBK0IsTUFBSyxHQUFwQyxFQUF3QyxrQkFBZSxXQUF2RDtBQUFBO0FBQTJFO0FBQUE7QUFBQSxzQkFBRyxXQUFVLHNCQUFiO0FBQUE7QUFBQTtBQUEzRTtBQUFKO0FBUkY7QUFGRjtBQURGO0FBUEYsT0FERjtBQTBCRDs7OztFQXREeUIsZ0JBQU1hLFM7O2tCQXlEbkJkLGEiLCJmaWxlIjoiMC4zMzAzMzRjZTZhZGUwNDJmMDBkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBMaW5rLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi8uLi91dGlsL0FwaUNhbGxzJztcblxuY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB0b2tlbiA9IEFwaUNhbGwuZ2V0VG9rZW4oKTtcbiAgICBBcGlDYWxsLnZlcmlmeVRva2VuKHRva2VuKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCB0b2tlbicpO1xuICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT09ICdWYWxpZCBUb2tlbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkIHRva2VuJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIHRva2VuJyk7XG4gICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvbG9naW5cIiAvPjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVycyB0aGUgcm91dGVzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyb2YgQXBwXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx1bCBpZD1cImRyb3Bkb3duMVwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICA8bGk+PExpbmsgY2xhc3NOYW1lPVwiZHJvcGRvd25jb2xvclwiIHRvPVwiaG9tZVwiPkRldGFpbDwvTGluaz48L2xpPlxuICAgICAgICAgIDxsaT48TGluayBjbGFzc05hbWU9XCJkcm9wZG93bmNvbG9yXCIgdG89XCJob21lXCI+RGV0YWlsPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2xpPlxuICAgICAgICAgIDxsaT48TGluayBjbGFzc05hbWU9XCJkcm9wZG93bmNvbG9yXCIgdG89XCJob21lXCI+RGV0YWlsPC9MaW5rPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBtYWluYmdcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjIVwiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ28gZm9udGNvbG9yXCI+TG9nbzwvYT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHRvPVwiL1wiPiBIb21lPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayB0bz1cImRldGFpbHNcIj5EZXRhaWw8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwibG9naW5cIj5Mb2dpbjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCJyZWdpc3RlclwiPlJlZ2lzdGVyPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiY29sbGFwc2libGUuaHRtbFwiPkphdmFTY3JpcHQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ1dHRvblwiIGhyZWY9XCIjXCIgZGF0YS1hY3RpdmF0ZXM9XCJkcm9wZG93bjFcIj5Ecm9wZG93bjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIHJpZ2h0XCI+YXJyb3dfZHJvcF9kb3duPC9pPjwvYT48L2xpPlxuXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=