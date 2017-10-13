webpackHotUpdate(0,{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(14), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(232);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavigationBar = __webpack_require__(95);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _Home = __webpack_require__(218);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(217);

var _Details2 = _interopRequireDefault(_Details);

var _Login = __webpack_require__(219);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(265);

var _Register2 = _interopRequireDefault(_Register);

var _NotFound = __webpack_require__(220);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ApiCalls = __webpack_require__(292);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Proctected private Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} protected route
 */
var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      isAuthenticated = _ref.isAuthenticated,
      rest = _objectWithoutProperties(_ref, ['component', 'isAuthenticated']);

  var token = _ApiCalls2.default.getToken();
  _ApiCalls2.default.verifyToken(token).then(function (res) {
    if (res.data.message === 'Valid Token') {
      console.log('valid token');
      isAuthenticated = true;
    } else {
      isAuthenticated = false;
    }
  });
  console.log();
  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
    }
  }));
};

PrivateRoute.propTypes = {
  component: _propTypes2.default.func.isRequired,
  isAuthenticated: _propTypes2.default.bool.isRequired
};

/**
 * Proctected public Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} public route
 */
var PublicRoute = function PublicRoute(_ref2) {
  var Component = _ref2.component,
      isAuthenticated = _ref2.isAuthenticated,
      rest = _objectWithoutProperties(_ref2, ['component', 'isAuthenticated']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === false ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/home' });
    }
  }));
};

PublicRoute.propTypes = {
  component: _propTypes2.default.func.isRequired,
  isAuthenticated: _propTypes2.default.bool.isRequired
};

/**
 * The component maintains all routes.
 * Checks for user signed in and signed out
 * @class App
 * @extends {React.Component}
 */

var Routes = function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes() {
    _classCallCheck(this, Routes);

    var _this = _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this));

    _this.state = {
      isAuthenticated: false
    };
    return _this;
  }
  /**
   * Checks for user signin or signout
   * set the state
   * @memberof App
   * @return {string|bolean} displayName, isAuthenticated
   */


  _createClass(Routes, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log("am herer");
      var token = _ApiCalls2.default.getToken();
      _ApiCalls2.default.verifyToken(token).then(function (res) {
        if (res.data.message === 'Valid Token') {
          console.log('valid token');
          _this2.setState({ isAuthenticated: true });
        } else {
          _this2.setState({ isAuthenticated: false });
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
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(PrivateRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/',
              component: _Home2.default
            }),
            _react2.default.createElement(PrivateRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/details',
              component: _Details2.default
            }),
            _react2.default.createElement(PrivateRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/home',
              component: _Home2.default
            }),
            _react2.default.createElement(PublicRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/login',
              component: _Login2.default
            }),
            _react2.default.createElement(PublicRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/register',
              component: _Register2.default
            }),
            _react2.default.createElement(PrivateRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/newsfeeds/:sourceId/:sortBy',
              component: _Login2.default
            }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
          )
        )
      );
    }
  }]);

  return Routes;
}(_react2.default.Component);

exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJ0b2tlbiIsImdldFRva2VuIiwidmVyaWZ5VG9rZW4iLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJQdWJsaWNSb3V0ZSIsIlJvdXRlcyIsInN0YXRlIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUtBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUF3RDtBQUFBLE1BQTFDQyxTQUEwQyxRQUFyREMsU0FBcUQ7QUFBQSxNQUEvQkMsZUFBK0IsUUFBL0JBLGVBQStCO0FBQUEsTUFBWEMsSUFBVzs7QUFDM0UsTUFBTUMsUUFBUSxtQkFBUUMsUUFBUixFQUFkO0FBQ0EscUJBQVFDLFdBQVIsQ0FBb0JGLEtBQXBCLEVBQTJCRyxJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdkMsUUFBSUEsSUFBSUMsSUFBSixDQUFTQyxPQUFULEtBQXFCLGFBQXpCLEVBQXdDO0FBQ3RDQyxjQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBVix3QkFBa0IsSUFBbEI7QUFDRCxLQUhELE1BR087QUFDTEEsd0JBQWtCLEtBQWxCO0FBQ0Q7QUFDRixHQVBEO0FBUUFTLFVBQVFDLEdBQVI7QUFDQSxTQUNFLGtFQUNNVCxJQUROO0FBRUUsWUFBUTtBQUFBLGFBQVVELG9CQUFvQixJQUFwQixHQUNkLDhCQUFDLFNBQUQsRUFBZVcsS0FBZixDQURjLEdBRWQs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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdGVyJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi91dGlsL0FwaUNhbGxzJztcblxuLyoqXG4gKiBQcm9jdGVjdGVkIHByaXZhdGUgUm91dGVcbiAqIEBwYXJhbXMge29iamVjdH0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH1cbiAqIEByZXR1cm5zIHtjb21wb25lbnR9IHByb3RlY3RlZCByb3V0ZVxuICovXG5jb25zdCBQcml2YXRlUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgdG9rZW4gPSBBcGlDYWxsLmdldFRva2VuKCk7XG4gIEFwaUNhbGwudmVyaWZ5VG9rZW4odG9rZW4pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09PSAnVmFsaWQgVG9rZW4nKSB7XG4gICAgICBjb25zb2xlLmxvZygndmFsaWQgdG9rZW4nKTtcbiAgICAgIGlzQXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIGNvbnNvbGUubG9nKClcbiAgcmV0dXJuIChcbiAgICA8Um91dGVcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVuZGVyPXtwcm9wcyA9PiAoaXNBdXRoZW50aWNhdGVkID09PSB0cnVlXG4gICAgICAgID8gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDogPFJlZGlyZWN0IHRvPVwiL2xvZ2luXCIgLz4pfVxuICAgIC8+XG4gICk7XG59XG5cblByaXZhdGVSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG4vKipcbiAqIFByb2N0ZWN0ZWQgcHVibGljIFJvdXRlXG4gKiBAcGFyYW1zIHtvYmplY3R9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIGlzQXV0aGVudGljYXRlZCwgLi4ucmVzdCB9XG4gKiBAcmV0dXJucyB7Y29tcG9uZW50fSBwdWJsaWMgcm91dGVcbiAqL1xuY29uc3QgUHVibGljUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVuZGVyPXtwcm9wcyA9PiAoaXNBdXRoZW50aWNhdGVkID09PSBmYWxzZVxuICAgICAgICA/IDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICA6IDxSZWRpcmVjdCB0bz1cIi9ob21lXCIgLz4pfVxuICAgIC8+XG4gICk7XG59XG5cblB1YmxpY1JvdXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbi8qKlxuICogVGhlIGNvbXBvbmVudCBtYWludGFpbnMgYWxsIHJvdXRlcy5cbiAqIENoZWNrcyBmb3IgdXNlciBzaWduZWQgaW4gYW5kIHNpZ25lZCBvdXRcbiAqIEBjbGFzcyBBcHBcbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIFJvdXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBDaGVja3MgZm9yIHVzZXIgc2lnbmluIG9yIHNpZ25vdXRcbiAgICogc2V0IHRoZSBzdGF0ZVxuICAgKiBAbWVtYmVyb2YgQXBwXG4gICAqIEByZXR1cm4ge3N0cmluZ3xib2xlYW59IGRpc3BsYXlOYW1lLCBpc0F1dGhlbnRpY2F0ZWRcbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKFwiYW0gaGVyZXJcIik7XG4gICAgY29uc3QgdG9rZW4gPSBBcGlDYWxsLmdldFRva2VuKCk7XG4gICAgQXBpQ2FsbC52ZXJpZnlUb2tlbih0b2tlbikudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSA9PT0gJ1ZhbGlkIFRva2VuJykge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsaWQgdG9rZW4nKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNBdXRoZW50aWNhdGVkOiB0cnVlfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgcm91dGVzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyb2YgQXBwXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SG9tZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvZGV0YWlsc1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17RGV0YWlsc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvaG9tZVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SG9tZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHVibGljUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9sb2dpblwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17TG9naW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFB1YmxpY1JvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvcmVnaXN0ZXJcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JlZ2lzdGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9uZXdzZmVlZHMvOnNvdXJjZUlkLzpzb3J0QnlcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xvZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L1JvdXRlcy5qc3giXSwic291cmNlUm9vdCI6IiJ9