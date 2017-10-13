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

  function Routes() {
    _classCallCheck(this, Routes);

    var _this = _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).call(this));

    _this.state = {
      isAuthenticated: false
    };
    console.log("==");
    return _this;
  }

  _createClass(Routes, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.l;
    }

    /**
     * Checks for user signin or signout
     * set the state
     * @memberof App
     * @return {string|bolean} displayName, isAuthenticated
     */

  }, {
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

exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJQdWJsaWNSb3V0ZSIsIlJvdXRlcyIsInN0YXRlIiwibmV4dFByb3BzIiwibCIsInRva2VuIiwiZ2V0VG9rZW4iLCJ2ZXJpZnlUb2tlbiIsInRoZW4iLCJyZXMiLCJkYXRhIiwibWVzc2FnZSIsInNldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFLQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBd0Q7QUFBQSxNQUExQ0MsU0FBMEMsUUFBckRDLFNBQXFEO0FBQUEsTUFBL0JDLGVBQStCLFFBQS9CQSxlQUErQjtBQUFBLE1BQVhDLElBQVc7O0FBQzNFQyxVQUFRQyxHQUFSLENBQVlILGVBQVo7QUFDQSxTQUNFLGtFQUNNQyxJQUROO0FBRUUsWUFBUTtBQUFBLGFBQVVELG9CQUFvQixJQUFwQixHQUNkLDhCQUFDLFNBQUQsRUFBZUksS0FBZixDQURjLEdBRWQsMERBQVUsSUFBRyxRQUFiLEdBRkk7QUFBQTtBQUZWLEtBREY7QUFRRCxDQVZEOztBQVlBUCxhQUFhUSxTQUFiLEdBQXlCO0FBQ3ZCTixhQUFXLG9CQUFVTyxJQUFWLENBQWVDLFVBREg7QUFFdkJQLG1CQUFpQixvQkFBVVEsSUFBVixDQUFlRDtBQUZULENBQXpCOztBQUtBOzs7OztBQUtBLElBQU1FLGNBQWMsU0FBZEEsV0FBYyxRQUF3RDtBQUFBLE1BQTFDWCxTQUEwQyxTQUFyREMsU0FBcUQ7QUFBQSxNQUEvQkMsZUFBK0IsU0FBL0JBLGVBQStCO0FBQUEsTUFBWEMsSUFBVzs7QUFDMUUsU0FDRSxrRUFDTUEsSUFETjtBQUVFLFlBQVE7QUFBQSxhQUFVRCxvQkFBb0IsS0FBcEIsR0FDZCw4QkFBQyxTQUFELEVBQWVJLEtBQWYsQ0FEYyxHQUVkLDBEQUFVLElBQUcsT0FBYixHQUZJO0FBQUE7QUFGVixLQURGO0FBUUQsQ0FURDs7QUFXQUssWUFBWUosU0FBWixHQUF3QjtBQUN0Qk4sYUFBVyxvQkFBVU8sSUFBVixDQUFlQyxVQURKO0FBRXRCUCxtQkFBaUIsb0JBQVVRLElBQVYsQ0FBZUQ7QUFGVixDQUF4Qjs7QUFLQTs7Ozs7OztJQU1NRyxNOzs7QUFDSixvQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYWCx1QkFBaUI7QUFETixLQUFiO0FBR0FFLFlBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBTFk7QUFNYjs7Ozs4Q0FFeUJTLFMsRUFBVztBQUNuQ1YsY0FBUVcsQ0FBUjtBQUNEOztBQUdEOzs7Ozs7Ozs7d0NBTW9CO0FBQUE7O0FBQ2xCWCxjQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLFVBQU1XLFFBQVEsbUJBQVFDLFFBQVIsRUFBZDtBQUNBLHlCQUFRQyxXQUFSLENBQW9CRixLQUFwQixFQUEyQkcsSUFBM0IsQ0FBZ0MsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZDLFlBQUlBLElBQUlDLElBQUosQ0FBU0MsT0FBVCxLQUFxQixhQUF6QixFQUF3QztBQUN0Q2xCLGtCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBLGlCQUFLa0IsUUFBTCxDQUFjLEVBQUNyQixpQkFBaUIsSUFBbEIsRUFBZDtBQUNELFNBSEQsTUFHTztBQUNMLGlCQUFLcUIsUUFBTCxDQUFjLEVBQUNyQixpQkFBaUIsS0FBbEIsRUFBZDtBQUNEO0FBQ0YsT0FQRDtBQVFEOztBQUVEOzs7Ozs7Ozs2QkFLUztBQUNQRSxjQUFRQyxHQUFSLENBQVksS0FBS1EsS0FBTCxDQUFXWCxlQUF2QjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLVyxLQUFMLENBQVdYLGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxHQUhQO0FBSUU7QUFKRixjQURGO0FBT0UsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLVyxLQUFMLENBQVdYLGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxVQUhQO0FBSUU7QUFKRixjQVBGO0FBYUUsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLVyxLQUFMLENBQVdYLGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxPQUhQO0FBSUU7QUFKRixjQWJGO0FBbUJFLDBDQUFDLFdBQUQ7QUFDRSwrQkFBaUIsS0FBS1csS0FBTCxDQUFXWCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssUUFIUDtBQUlFO0FBSkYsY0FuQkY7QUF5QkUsMENBQUMsV0FBRDtBQUNFLCtCQUFpQixLQUFLVyxLQUFMLENBQVdYLGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxXQUhQO0FBSUU7QUFKRixjQXpCRjtBQStCRSwwQ0FBQyxZQUFEO0FBQ0UsK0JBQWlCLEtBQUtXLEtBQUwsQ0FBV1gsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLDhCQUhQO0FBSUU7QUFKRixjQS9CRjtBQXFDRSxtRUFBTyxNQUFLLEdBQVosRUFBZ0IsNkJBQWhCO0FBckNGO0FBREY7QUFERixPQURGO0FBNkNEOzs7O0VBckZrQixnQkFBTUYsUzs7a0JBd0ZaWSxNIiwiZmlsZSI6IjAuODRhNDE4OGZmZDJkODc2YzYyNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFJlZGlyZWN0LCBTd2l0Y2hcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL2NvbXBvbmVudHMvRGV0YWlscyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0ZXInO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuL3V0aWwvQXBpQ2FsbHMnO1xuXG4vKipcbiAqIFByb2N0ZWN0ZWQgcHJpdmF0ZSBSb3V0ZVxuICogQHBhcmFtcyB7b2JqZWN0fSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfVxuICogQHJldHVybnMge2NvbXBvbmVudH0gcHJvdGVjdGVkIHJvdXRlXG4gKi9cbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhpc0F1dGhlbnRpY2F0ZWQpXG4gIHJldHVybiAoXG4gICAgPFJvdXRlXG4gICAgICB7Li4ucmVzdH1cbiAgICAgIHJlbmRlcj17cHJvcHMgPT4gKGlzQXV0aGVudGljYXRlZCA9PT0gdHJ1ZVxuICAgICAgICA/IDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICA6IDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+KX1cbiAgICAvPlxuICApO1xufVxuXG5Qcml2YXRlUm91dGUucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuLyoqXG4gKiBQcm9jdGVjdGVkIHB1YmxpYyBSb3V0ZVxuICogQHBhcmFtcyB7b2JqZWN0fSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfVxuICogQHJldHVybnMge2NvbXBvbmVudH0gcHVibGljIHJvdXRlXG4gKi9cbmNvbnN0IFB1YmxpY1JvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIGlzQXV0aGVudGljYXRlZCwgLi4ucmVzdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlXG4gICAgICB7Li4ucmVzdH1cbiAgICAgIHJlbmRlcj17cHJvcHMgPT4gKGlzQXV0aGVudGljYXRlZCA9PT0gZmFsc2VcbiAgICAgICAgPyA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgOiA8UmVkaXJlY3QgdG89XCIvaG9tZVwiIC8+KX1cbiAgICAvPlxuICApO1xufVxuXG5QdWJsaWNSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG4vKipcbiAqIFRoZSBjb21wb25lbnQgbWFpbnRhaW5zIGFsbCByb3V0ZXMuXG4gKiBDaGVja3MgZm9yIHVzZXIgc2lnbmVkIGluIGFuZCBzaWduZWQgb3V0XG4gKiBAY2xhc3MgQXBwXG4gKiBAZXh0ZW5kcyB7UmVhY3QuQ29tcG9uZW50fVxuICovXG5jbGFzcyBSb3V0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIj09XCIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zb2xlLmxcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENoZWNrcyBmb3IgdXNlciBzaWduaW4gb3Igc2lnbm91dFxuICAgKiBzZXQgdGhlIHN0YXRlXG4gICAqIEBtZW1iZXJvZiBBcHBcbiAgICogQHJldHVybiB7c3RyaW5nfGJvbGVhbn0gZGlzcGxheU5hbWUsIGlzQXV0aGVudGljYXRlZFxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJhbSBoZXJlclwiKTtcbiAgICBjb25zdCB0b2tlbiA9IEFwaUNhbGwuZ2V0VG9rZW4oKTtcbiAgICBBcGlDYWxsLnZlcmlmeVRva2VuKHRva2VuKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09PSAnVmFsaWQgVG9rZW4nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCB0b2tlbicpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0F1dGhlbnRpY2F0ZWQ6IHRydWV9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQXV0aGVudGljYXRlZDogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSByb3V0ZXNcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqIEBtZW1iZXJvZiBBcHBcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZClcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SG9tZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvZGV0YWlsc1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17RGV0YWlsc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvaG9tZVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SG9tZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHVibGljUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9sb2dpblwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17TG9naW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFB1YmxpY1JvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvcmVnaXN0ZXJcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1JlZ2lzdGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9uZXdzZmVlZHMvOnNvdXJjZUlkLzpzb3J0QnlcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xvZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L1JvdXRlcy5qc3giXSwic291cmNlUm9vdCI6IiJ9