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

  console.log(isAuthenticated);
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
      console.log(this.state.a);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJQdWJsaWNSb3V0ZSIsIlJvdXRlcyIsInN0YXRlIiwidG9rZW4iLCJnZXRUb2tlbiIsInZlcmlmeVRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwic2V0U3RhdGUiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFLQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBd0Q7QUFBQSxNQUExQ0MsU0FBMEMsUUFBckRDLFNBQXFEO0FBQUEsTUFBL0JDLGVBQStCLFFBQS9CQSxlQUErQjtBQUFBLE1BQVhDLElBQVc7O0FBQzNFQyxVQUFRQyxHQUFSLENBQVlILGVBQVo7QUFDQSxTQUNFLGtFQUNNQyxJQUROO0FBRUUsWUFBUTtBQUFBLGFBQVVELG9CQUFvQixJQUFwQixHQUNkLDhCQUFDLFNBQUQsRUFBZUksS0FBZixDQURjLEdBRWQsMERBQVUsSUFBRyxRQUFiLEdBRkk7QUFBQTtBQUZWLEtBREY7QUFRRCxDQVZEOztBQVlBUCxhQUFhUSxTQUFiLEdBQXlCO0FBQ3ZCTixhQUFXLG9CQUFVTyxJQUFWLENBQWVDLFVBREg7QUFFdkJQLG1CQUFpQixvQkFBVVEsSUFBVixDQUFlRDtBQUZULENBQXpCOztBQUtBOzs7OztBQUtBLElBQU1FLGNBQWMsU0FBZEEsV0FBYyxRQUF3RDtBQUFBLE1BQTFDWCxTQUEwQyxTQUFyREMsU0FBcUQ7QUFBQSxNQUEvQkMsZUFBK0IsU0FBL0JBLGVBQStCO0FBQUEsTUFBWEMsSUFBVzs7QUFDMUUsU0FDRSxrRUFDTUEsSUFETjtBQUVFLFlBQVE7QUFBQSxhQUFVRCxvQkFBb0IsS0FBcEIsR0FDZCw4QkFBQyxTQUFELEVBQWVJLEtBQWYsQ0FEYyxHQUVkLDBEQUFVLElBQUcsT0FBYixHQUZJO0FBQUE7QUFGVixLQURGO0FBUUQsQ0FURDs7QUFXQUssWUFBWUosU0FBWixHQUF3QjtBQUN0Qk4sYUFBVyxvQkFBVU8sSUFBVixDQUFlQyxVQURKO0FBRXRCUCxtQkFBaUIsb0JBQVVRLElBQVYsQ0FBZUQ7QUFGVixDQUF4Qjs7QUFLQTs7Ozs7OztJQU1NRyxNOzs7QUFDSixrQkFBWU4sS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLTyxLQUFMLEdBQWE7QUFDWFgsdUJBQWlCO0FBRE4sS0FBYjtBQUdBRSxZQUFRQyxHQUFSLENBQVksSUFBWjtBQUxpQjtBQU1sQjtBQUNEOzs7Ozs7Ozs7O3dDQU1vQjtBQUFBOztBQUNsQkQsY0FBUUMsR0FBUixDQUFZLFVBQVo7QUFDQSxVQUFNUyxRQUFRLG1CQUFRQyxRQUFSLEVBQWQ7QUFDQSx5QkFBUUMsV0FBUixDQUFvQkYsS0FBcEIsRUFBMkJHLElBQTNCLENBQWdDLFVBQUNDLEdBQUQsRUFBUztBQUN2QyxZQUFJQSxJQUFJQyxJQUFKLENBQVNDLE9BQVQsS0FBcUIsYUFBekIsRUFBd0M7QUFDdENoQixrQkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxpQkFBS2dCLFFBQUwsQ0FBYyxFQUFDbkIsaUJBQWlCLElBQWxCLEVBQWQ7QUFDRCxTQUhELE1BR087QUFDTCxpQkFBS21CLFFBQUwsQ0FBYyxFQUFDbkIsaUJBQWlCLEtBQWxCLEVBQWQ7QUFDRDtBQUNGLE9BUEQ7QUFRRDs7QUFFRDs7Ozs7Ozs7NkJBS1M7QUFDUEUsY0FBUUMsR0FBUixDQUFZLEtBQUtRLEtBQUwsQ0FBV1MsQ0FBdkI7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLDBDQUFDLFlBQUQ7QUFDRSwrQkFBaUIsS0FBS1QsS0FBTCxDQUFXWCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssR0FIUDtBQUlFO0FBSkYsY0FERjtBQU9FLDBDQUFDLFlBQUQ7QUFDRSwrQkFBaUIsS0FBS1csS0FBTCxDQUFXWCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssVUFIUDtBQUlFO0FBSkYsY0FQRjtBQWFFLDBDQUFDLFlBQUQ7QUFDRSwrQkFBaUIsS0FBS1csS0FBTCxDQUFXWCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssT0FIUDtBQUlFO0FBSkYsY0FiRjtBQW1CRSwwQ0FBQyxXQUFEO0FBQ0UsK0JBQWlCLEtBQUtXLEtBQUwsQ0FBV1gsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLFFBSFA7QUFJRTtBQUpGLGNBbkJGO0FBeUJFLDBDQUFDLFdBQUQ7QUFDRSwrQkFBaUIsS0FBS1csS0FBTCxDQUFXWCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssV0FIUDtBQUlFO0FBSkYsY0F6QkY7QUErQkUsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLVyxLQUFMLENBQVdYLGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyw4QkFIUDtBQUlFO0FBSkYsY0EvQkY7QUFxQ0UsbUVBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQXJDRjtBQURGO0FBREYsT0FERjtBQTZDRDs7OztFQS9Fa0IsZ0JBQU1GLFM7O2tCQWtGWlksTSIsImZpbGUiOiIwLmIwNTVlZjM1ZjYxODI4MGI2OTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdGVyJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi91dGlsL0FwaUNhbGxzJztcblxuLyoqXG4gKiBQcm9jdGVjdGVkIHByaXZhdGUgUm91dGVcbiAqIEBwYXJhbXMge29iamVjdH0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH1cbiAqIEByZXR1cm5zIHtjb21wb25lbnR9IHByb3RlY3RlZCByb3V0ZVxuICovXG5jb25zdCBQcml2YXRlUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc29sZS5sb2coaXNBdXRoZW50aWNhdGVkKVxuICByZXR1cm4gKFxuICAgIDxSb3V0ZVxuICAgICAgey4uLnJlc3R9XG4gICAgICByZW5kZXI9e3Byb3BzID0+IChpc0F1dGhlbnRpY2F0ZWQgPT09IHRydWVcbiAgICAgICAgPyA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgOiA8UmVkaXJlY3QgdG89XCIvbG9naW5cIiAvPil9XG4gICAgLz5cbiAgKTtcbn1cblxuUHJpdmF0ZVJvdXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbi8qKlxuICogUHJvY3RlY3RlZCBwdWJsaWMgUm91dGVcbiAqIEBwYXJhbXMge29iamVjdH0geyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH1cbiAqIEByZXR1cm5zIHtjb21wb25lbnR9IHB1YmxpYyByb3V0ZVxuICovXG5jb25zdCBQdWJsaWNSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZVxuICAgICAgey4uLnJlc3R9XG4gICAgICByZW5kZXI9e3Byb3BzID0+IChpc0F1dGhlbnRpY2F0ZWQgPT09IGZhbHNlXG4gICAgICAgID8gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDogPFJlZGlyZWN0IHRvPVwiL2hvbWVcIiAvPil9XG4gICAgLz5cbiAgKTtcbn1cblxuUHVibGljUm91dGUucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuLyoqXG4gKiBUaGUgY29tcG9uZW50IG1haW50YWlucyBhbGwgcm91dGVzLlxuICogQ2hlY2tzIGZvciB1c2VyIHNpZ25lZCBpbiBhbmQgc2lnbmVkIG91dFxuICogQGNsYXNzIEFwcFxuICogQGV4dGVuZHMge1JlYWN0LkNvbXBvbmVudH1cbiAqL1xuY2xhc3MgUm91dGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKFwiPT1cIik7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrcyBmb3IgdXNlciBzaWduaW4gb3Igc2lnbm91dFxuICAgKiBzZXQgdGhlIHN0YXRlXG4gICAqIEBtZW1iZXJvZiBBcHBcbiAgICogQHJldHVybiB7c3RyaW5nfGJvbGVhbn0gZGlzcGxheU5hbWUsIGlzQXV0aGVudGljYXRlZFxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJhbSBoZXJlclwiKTtcbiAgICBjb25zdCB0b2tlbiA9IEFwaUNhbGwuZ2V0VG9rZW4oKTtcbiAgICBBcGlDYWxsLnZlcmlmeVRva2VuKHRva2VuKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09PSAnVmFsaWQgVG9rZW4nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCB0b2tlbicpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0F1dGhlbnRpY2F0ZWQ6IHRydWV9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQXV0aGVudGljYXRlZDogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSByb3V0ZXNcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJvZiBBcHBcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmEpO1xuICAgIHJldHVybiAoXG4gICAgICA8Um91dGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtIb21lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9kZXRhaWxzXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtEZXRhaWxzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9ob21lXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtIb21lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQdWJsaWNSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL2xvZ2luXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMb2dpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHVibGljUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9yZWdpc3RlclwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17UmVnaXN0ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL25ld3NmZWVkcy86c291cmNlSWQvOnNvcnRCeVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17TG9naW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JvdXRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvUm91dGVzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=