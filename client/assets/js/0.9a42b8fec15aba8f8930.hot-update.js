webpackHotUpdate(0,{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(14), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The component maintains all routes.
 * Checks for user signed in and signed out
 * @class App
 * @extends {React.Component}
 */
var Routes = function (_React$Component) {
  _inherits(Routes, _React$Component);

  function Routes(props) {
    _classCallCheck(this, Routes);

    var _this = _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this, props));

    _this.state = {
      isAuthenticated: false
    };
    console.log("==");
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
      var _this3 = this;

      console.log(this.state.isAuthenticated);
      var token = _ApiCalls2.default.getToken();
      _ApiCalls2.default.verifyToken(token).then(function (res) {
        if (res.data.message === 'Valid Token') {
          console.log('valid token');
          _this3.setState({ isAuthenticated: true });
        } else {
          _this3.setState({ isAuthenticated: false });
        }
      });
      console.log(this.state.isAuthenticated);
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
/**
 * Proctected private Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} protected route
 */


var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      isAuthenticated = _ref.isAuthenticated,
      rest = _objectWithoutProperties(_ref, ['component', 'isAuthenticated']);

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

exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlJvdXRlcyIsInByb3BzIiwic3RhdGUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJnZXRUb2tlbiIsInZlcmlmeVRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJQcml2YXRlUm91dGUiLCJjb21wb25lbnQiLCJyZXN0IiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwiUHVibGljUm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUdBOzs7Ozs7SUFNTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQjtBQUROLEtBQWI7QUFHQUMsWUFBUUMsR0FBUixDQUFZLElBQVo7QUFMaUI7QUFNbEI7QUFDRDs7Ozs7Ozs7Ozt3Q0FNb0I7QUFBQTs7QUFDbEJELGNBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsVUFBTUMsUUFBUSxtQkFBUUMsUUFBUixFQUFkO0FBQ0EseUJBQVFDLFdBQVIsQ0FBb0JGLEtBQXBCLEVBQTJCRyxJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdkMsWUFBSUEsSUFBSUMsSUFBSixDQUFTQyxPQUFULEtBQXFCLGFBQXpCLEVBQXdDO0FBQ3RDUixrQkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxpQkFBS1EsUUFBTCxDQUFjLEVBQUNWLGlCQUFpQixJQUFsQixFQUFkO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsaUJBQUtVLFFBQUwsQ0FBYyxFQUFDVixpQkFB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QjtBQUN0QkYsYUFBVyxvQkFBVUcsSUFBVixDQUFlQyxVQURKO0FBRXRCakIsbUJBQWlCLG9CQUFVa0IsSUFBVixDQUFlRDtBQUZWLENBQXhCOztrQkFLZXBCLE0iLCJmaWxlIjoiMC45YTQyYjhmZWMxNWFiYThmODkzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgUmVkaXJlY3QsIFN3aXRjaFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vY29tcG9uZW50cy9EZXRhaWxzJztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9SZWdpc3Rlcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4vdXRpbC9BcGlDYWxscyc7XG5cblxuLyoqXG4gKiBUaGUgY29tcG9uZW50IG1haW50YWlucyBhbGwgcm91dGVzLlxuICogQ2hlY2tzIGZvciB1c2VyIHNpZ25lZCBpbiBhbmQgc2lnbmVkIG91dFxuICogQGNsYXNzIEFwcFxuICogQGV4dGVuZHMge1JlYWN0LkNvbXBvbmVudH1cbiAqL1xuY2xhc3MgUm91dGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiPT1cIik7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrcyBmb3IgdXNlciBzaWduaW4gb3Igc2lnbm91dFxuICAgKiBzZXQgdGhlIHN0YXRlXG4gICAqIEBtZW1iZXJvZiBBcHBcbiAgICogQHJldHVybiB7c3RyaW5nfGJvbGVhbn0gZGlzcGxheU5hbWUsIGlzQXV0aGVudGljYXRlZFxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJhbSBoZXJlclwiKTtcbiAgICBjb25zdCB0b2tlbiA9IEFwaUNhbGwuZ2V0VG9rZW4oKTtcbiAgICBBcGlDYWxsLnZlcmlmeVRva2VuKHRva2VuKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09PSAnVmFsaWQgVG9rZW4nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCB0b2tlbicpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0F1dGhlbnRpY2F0ZWQ6IHRydWV9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQXV0aGVudGljYXRlZDogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSByb3V0ZXNcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJvZiBBcHBcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZCk7XG4gICAgY29uc3QgdG9rZW4gPSBBcGlDYWxsLmdldFRva2VuKCk7XG4gICAgQXBpQ2FsbC52ZXJpZnlUb2tlbih0b2tlbikudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSA9PT0gJ1ZhbGlkIFRva2VuJykge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsaWQgdG9rZW4nKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNBdXRoZW50aWNhdGVkOiB0cnVlfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWQpO1xuICAgIHJldHVybiAoXG4gICAgICA8Um91dGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtIb21lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9kZXRhaWxzXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtEZXRhaWxzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9ob21lXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtIb21lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQdWJsaWNSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL2xvZ2luXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMb2dpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHVibGljUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9yZWdpc3RlclwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17UmVnaXN0ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL25ld3NmZWVkcy86c291cmNlSWQvOnNvcnRCeVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17TG9naW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JvdXRlcj5cbiAgICApO1xuICB9XG59XG4vKipcbiAqIFByb2N0ZWN0ZWQgcHJpdmF0ZSBSb3V0ZVxuICogQHBhcmFtcyB7b2JqZWN0fSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfVxuICogQHJldHVybnMge2NvbXBvbmVudH0gcHJvdGVjdGVkIHJvdXRlXG4gKi9cbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZVxuICAgICAgey4uLnJlc3R9XG4gICAgICByZW5kZXI9e3Byb3BzID0+IChpc0F1dGhlbnRpY2F0ZWQgPT09IHRydWVcbiAgICAgICAgPyA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgOiA8UmVkaXJlY3QgdG89XCIvbG9naW5cIiAvPil9XG4gICAgLz5cbiAgKTtcbn1cblxuUHJpdmF0ZVJvdXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbi8qKlxuICogUHJvY3RlY3RlZCBwdWJsaWMgUm91dGVcbiAqIEBwYXJhbXMge29iamVjdH0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH1cbiAqIEByZXR1cm5zIHtjb21wb25lbnR9IHB1YmxpYyByb3V0ZVxuICovXG5jb25zdCBQdWJsaWNSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZVxuICAgICAgey4uLnJlc3R9XG4gICAgICByZW5kZXI9e3Byb3BzID0+IChpc0F1dGhlbnRpY2F0ZWQgPT09IGZhbHNlXG4gICAgICAgID8gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDogPFJlZGlyZWN0IHRvPVwiL2hvbWVcIiAvPil9XG4gICAgLz5cbiAgKTtcbn1cblxuUHVibGljUm91dGUucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9Sb3V0ZXMuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==