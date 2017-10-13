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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Proctected private Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} protected route
 */
var PrivateRoute = function PrivateRoute(_ref) {
  var _console;

  var Component = _ref.component,
      isAuthenticated = _ref.isAuthenticated,
      rest = _objectWithoutProperties(_ref, ['component', 'isAuthenticated']);

  console.log(Component);
  (_console = console).log.apply(_console, _toConsumableArray(rest));
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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var token = _ApiCalls2.default.getToken();
      _ApiCalls2.default.verifyToken(token).then(function (res) {
        if (res.data.message === 'Valid Token') {
          c;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJQdWJsaWNSb3V0ZSIsIlJvdXRlcyIsInN0YXRlIiwidG9rZW4iLCJnZXRUb2tlbiIsInZlcmlmeVRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwiYyIsInNldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUtBLElBQU1BLGVBQWUsU0FBZkEsWUFBZSxPQUF3RDtBQUFBOztBQUFBLE1BQTFDQyxTQUEwQyxRQUFyREMsU0FBcUQ7QUFBQSxNQUEvQkMsZUFBK0IsUUFBL0JBLGVBQStCO0FBQUEsTUFBWEMsSUFBVzs7QUFDM0VDLFVBQVFDLEdBQVIsQ0FBWUwsU0FBWjtBQUNBLHVCQUFRSyxHQUFSLG9DQUFlRixJQUFmO0FBQ0EsU0FDRSxrRUFDTUEsSUFETjtBQUVFLFlBQVE7QUFBQSxhQUFVRCxvQkFBb0IsSUFBcEIsR0FDZCw4QkFBQyxTQUFELEVBQWVJLEtBQWYsQ0FEYyxHQUVkLDBEQUFVLElBQUcsUUFBYixHQUZJO0FBQUE7QUFGVixLQURGO0FBUUQsQ0FYRDs7QUFhQVAsYUFBYVEsU0FBYixHQUF5QjtBQUN2Qk4sYUFBVyxvQkFBVU8sSUFBVixDQUFlQyxVQURIO0FBRXZCUCxtQkFBaUIsb0JBQVVRLElBQVYsQ0FBZUQ7QUFGVCxDQUF6Qjs7QUFLQTs7Ozs7QUFLQSxJQUFNRSxjQUFjLFNBQWRBLFdBQWMsUUFBd0Q7QUFBQSxNQUExQ1gsU0FBMEMsU0FBckRDLFNBQXFEO0FBQUEsTUFBL0JDLGVBQStCLFNBQS9CQSxlQUErQjtBQUFBLE1BQVhDLElBQVc7O0FBQzFFLFNBQ0Usa0VBQ01BLElBRE47QUFFRSxZQUFRO0FBQUEsYUFBVUQsb0JBQW9CLEtBQXBCLEdBQ2QsOEJBQUMsU0FBRCxFQUFlSSxLQUFmLENBRGMsR0FFZCwwREFBVSxJQUFHLE9BQWIsR0FGSTtBQUFBO0FBRlYsS0FERjtBQVFELENBVEQ7O0FBV0FLLFlBQVlKLFNBQVosR0FBd0I7QUFDdEJOLGFBQVcsb0JBQVVPLElBQVYsQ0FBZUMsVUFESjtBQUV0QlAsbUJBQWlCLG9CQUFVUSxJQUFWLENBQWVEO0FBRlYsQ0FBeEI7O0FBS0E7Ozs7Ozs7SUFNTUcsTTs7O0FBQ0osb0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWFgsdUJBQWlCO0FBRE4sS0FBYjtBQUZZO0FBS2I7O0FBR0Q7Ozs7Ozs7Ozs7eUNBTXFCO0FBQUE7O0FBQ25CLFVBQU1ZLFFBQVEsbUJBQVFDLFFBQVIsRUFBZDtBQUNBLHlCQUFRQyxXQUFSLENBQW9CRixLQUFwQixFQUEyQkcsSUFBM0IsQ0FBZ0MsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZDLFlBQUlBLElBQUlDLElBQUosQ0FBU0MsT0FBVCxLQUFxQixhQUF6QixFQUF3QztBQUN0Q0M7QUFDQSxpQkFBS0MsUUFBTCxDQUFjLEVBQUNwQixpQkFBaUIsSUFBbEIsRUFBZDtBQUNELFNBSEQsTUFHTztBQUNMLGlCQUFLb0IsUUFBTCxDQUFjLEVBQUNwQixpQkFBaUIsS0FBbEIsRUFBZDtBQUNEO0FBQ0YsT0FQRDtBQVFEOztBQUVEOzs7Ozs7Ozs2QkFLUztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLVyxLQUFMLENBQVdYLGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxHQUhQO0FBSUU7QUFKRixjQURGO0FBT0UsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLVyxLQUFMLENBQVdYLGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxVQUhQO0FBSUU7QUFKRixjQVBGO0FBYUUsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLVyxLQUFMLENBQVdYLGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxPQUhQO0FBSUU7QUFKRixjQWJGO0FBbUJFLDBDQUFDLFdBQUQ7QUFDRSwrQkFBaUIsS0FBS1csS0FBTCxDQUFXWCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssUUFIUDtBQUlFO0FBSkYsY0FuQkY7QUF5QkUsMENBQUMsV0FBRDtBQUNFLCtCQUFpQixLQUFLVyxLQUFMLENBQVdYLGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxXQUhQO0FBSUU7QUFKRixjQXpCRjtBQStCRSwwQ0FBQyxZQUFEO0FBQ0UsK0JBQWlCLEtBQUtXLEtBQUwsQ0FBV1gsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLDhCQUhQO0FBSUU7QUFKRixjQS9CRjtBQXFDRSxtRUFBTyxNQUFLLEdBQVosRUFBZ0IsNkJBQWhCO0FBckNGO0FBREY7QUFERixPQURGO0FBNkNEOzs7O0VBOUVrQixnQkFBTUYsUzs7a0JBaUZaWSxNIiwiZmlsZSI6IjAuMjA4YmUyN2UxNWE2MWJlMDhhYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFJlZGlyZWN0LCBTd2l0Y2hcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL2NvbXBvbmVudHMvRGV0YWlscyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0ZXInO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuL3V0aWwvQXBpQ2FsbHMnO1xuXG4vKipcbiAqIFByb2N0ZWN0ZWQgcHJpdmF0ZSBSb3V0ZVxuICogQHBhcmFtcyB7b2JqZWN0fSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfVxuICogQHJldHVybnMge2NvbXBvbmVudH0gcHJvdGVjdGVkIHJvdXRlXG4gKi9cbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhDb21wb25lbnQpO1xuICBjb25zb2xlLmxvZyguLi5yZXN0KTtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVuZGVyPXtwcm9wcyA9PiAoaXNBdXRoZW50aWNhdGVkID09PSB0cnVlXG4gICAgICAgID8gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDogPFJlZGlyZWN0IHRvPVwiL2xvZ2luXCIgLz4pfVxuICAgIC8+XG4gICk7XG59XG5cblByaXZhdGVSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG4vKipcbiAqIFByb2N0ZWN0ZWQgcHVibGljIFJvdXRlXG4gKiBAcGFyYW1zIHtvYmplY3R9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIGlzQXV0aGVudGljYXRlZCwgLi4ucmVzdCB9XG4gKiBAcmV0dXJucyB7Y29tcG9uZW50fSBwdWJsaWMgcm91dGVcbiAqL1xuY29uc3QgUHVibGljUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVuZGVyPXtwcm9wcyA9PiAoaXNBdXRoZW50aWNhdGVkID09PSBmYWxzZVxuICAgICAgICA/IDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICA6IDxSZWRpcmVjdCB0bz1cIi9ob21lXCIgLz4pfVxuICAgIC8+XG4gICk7XG59XG5cblB1YmxpY1JvdXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbi8qKlxuICogVGhlIGNvbXBvbmVudCBtYWludGFpbnMgYWxsIHJvdXRlcy5cbiAqIENoZWNrcyBmb3IgdXNlciBzaWduZWQgaW4gYW5kIHNpZ25lZCBvdXRcbiAqIEBjbGFzcyBBcHBcbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIFJvdXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cblxuICAvKipcbiAgICogQ2hlY2tzIGZvciB1c2VyIHNpZ25pbiBvciBzaWdub3V0XG4gICAqIHNldCB0aGUgc3RhdGVcbiAgICogQG1lbWJlcm9mIEFwcFxuICAgKiBAcmV0dXJuIHtzdHJpbmd8Ym9sZWFufSBkaXNwbGF5TmFtZSwgaXNBdXRoZW50aWNhdGVkXG4gICAqL1xuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBBcGlDYWxsLmdldFRva2VuKCk7XG4gICAgQXBpQ2FsbC52ZXJpZnlUb2tlbih0b2tlbikudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSA9PT0gJ1ZhbGlkIFRva2VuJykge1xuICAgICAgICBjXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQXV0aGVudGljYXRlZDogdHJ1ZX0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNBdXRoZW50aWNhdGVkOiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIHJvdXRlc1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICogQG1lbWJlcm9mIEFwcFxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Um91dGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtIb21lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9kZXRhaWxzXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtEZXRhaWxzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9ob21lXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtIb21lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQdWJsaWNSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL2xvZ2luXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMb2dpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHVibGljUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9yZWdpc3RlclwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17UmVnaXN0ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL25ld3NmZWVkcy86c291cmNlSWQvOnNvcnRCeVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17TG9naW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JvdXRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvUm91dGVzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=