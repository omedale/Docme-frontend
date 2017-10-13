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
function PrivateRoute(_ref) {
  var Component = _ref.component,
      isAuthenticated = _ref.isAuthenticated,
      rest = _objectWithoutProperties(_ref, ['component', 'isAuthenticated']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
    }
  }));
}

PrivateRoute.propTypes = {
  component: _propTypes2.default.func.isRequired,
  isAuthenticated: _propTypes2.default.bool.isRequired
};

/**
 * Proctected public Route
 * @params {object} { component: Component, isAuthenticated, ...rest }
 * @returns {component} public route
 */
function PublicRoute(_ref2) {
  var Component = _ref2.component,
      isAuthenticated = _ref2.isAuthenticated,
      rest = _objectWithoutProperties(_ref2, ['component', 'isAuthenticated']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === false ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/home' });
    }
  }));
}

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
      isAuthenticated: true
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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      console.log("am herer");
      var token = _ApiCalls2.default.getToken();
      _ApiCalls2.default.verifyToken(token).then(function (res) {
        if (res.data.message === 'Valid Token') {
          console.log('valid token');
          _this2.setState({ isAuthenticated: true });
        } else if (res.data.message === 'Empty Token') {
          console.log('empty valid token');
          _this2.setState({ isAuthenticated: false });
        } else {
          console.log('not valid token');
          _this2.setState({ isAuthenticated: false });
        }
      });
      console.log(this.state.isAuthenticated);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJwcm9wcyIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIlB1YmxpY1JvdXRlIiwiUm91dGVzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJnZXRUb2tlbiIsInZlcmlmeVRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUdBOzs7OztBQUtBLFNBQVNBLFlBQVQsT0FBMEU7QUFBQSxNQUF2Q0MsU0FBdUMsUUFBbERDLFNBQWtEO0FBQUEsTUFBNUJDLGVBQTRCLFFBQTVCQSxlQUE0QjtBQUFBLE1BQVJDLElBQVE7O0FBQ3hFLFNBQ0Usa0VBQ01BLElBRE47QUFFRSxZQUFRO0FBQUEsYUFBVUQsb0JBQW9CLElBQXBCLEdBQ2hCLDhCQUFDLFNBQUQsRUFBZUUsS0FBZixDQURnQixHQUVoQiwwREFBVSxJQUFHLFFBQWIsR0FGTTtBQUFBO0FBRlYsS0FERjtBQVFEOztBQUVETCxhQUFhTSxTQUFiLEdBQXlCO0FBQ3ZCSixhQUFXLG9CQUFVSyxJQUFWLENBQWVDLFVBREg7QUFFdkJMLG1CQUFpQixvQkFBVU0sSUFBVixDQUFlRDtBQUZULENBQXpCOztBQUtBOzs7OztBQUtBLFNBQVNFLFdBQVQsUUFBeUU7QUFBQSxNQUF2Q1QsU0FBdUMsU0FBbERDLFNBQWtEO0FBQUEsTUFBNUJDLGVBQTRCLFNBQTVCQSxlQUE0QjtBQUFBLE1BQVJDLElBQVE7O0FBQ3ZFLFNBQ0Usa0VBQ01BLElBRE47QUFFRSxZQUFRO0FBQUEsYUFBVUQsb0JBQW9CLEtBQXBCLEdBQ2hCLDhCQUFDLFNBQUQsRUFBZUUsS0FBZixDQURnQixHQUVoQiwwREFBVSxJQUFHLE9BQWIsR0FGTTtBQUFBO0FBRlYsS0FERjtBQVFEOztBQUVESyxZQUFZSixTQUFaLEdBQXdCO0FBQ3RCSixhQUFXLG9CQUFVSyxJQUFWLENBQWVDLFVBREo7QUFFdEJMLG1CQUFpQixvQkFBVU0sSUFBVixDQUFlRDtBQUZWLENBQXhCOztBQUtBOzs7Ozs7O0lBTU1HLE07OztBQUNKLG9CQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hULHVCQUFpQjtBQUROLEtBQWI7QUFHQVUsWUFBUUMsR0FBUixDQUFZLElBQVo7QUFMWTtBQU1iO0FBQ0Q7Ozs7Ozs7Ozs7eUNBTXFCO0FBQUE7O0FBQ25CRCxjQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBLFVBQU1DLFFBQVEsbUJBQVFDLFFBQVIsRUFBZDtBQUNBLHlCQUFRQyxXQUFSLENBQW9CRixLQUFwQixFQUEyQkcsSUFBM0IsQ0FBZ0MsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZDLFlBQUlBLElBQUlDLElBQUosQ0FBU0MsT0FBVCxLQUFxQixhQUF6QixFQUF3QztBQUN0Q1Isa0JBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsaUJBQUtRLFFBQUwsQ0FBYyxFQUFDbkIsaUJBQWlCLElBQWxCLEVBQWQ7QUFDRCxTQUhELE1BR08sSUFBSWdCLElBQUlDLElBQUosQ0FBU0MsT0FBVCxLQUFxQixhQUF6QixFQUF3QztBQUM3Q1Isa0JBQVFDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLGlCQUFLUSxRQUFMLENBQWMsRUFBQ25CLGlCQUFpQixLQUFsQixFQUFkO0FBQ0QsU0FITSxNQUdBO0FBQ0xVLGtCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQSxpQkFBS1EsUUFBTCxDQUFjLEVBQUNuQixpQkFBaUIsS0FBbEIsRUFBZDtBQUNEO0FBQ0YsT0FYRDtBQVlBVSxjQUFRQyxHQUFSLENBQVksS0FBS0YsS0FBTCxDQUFXVCxlQUF2QjtBQUNEOztBQUVEOzs7Ozs7Ozs2QkFLUztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLUyxLQUFMLENBQVdULGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxHQUhQO0FBSUU7QUFKRixjQURGO0FBT0UsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLUyxLQUFMLENBQVdULGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxVQUhQO0FBSUU7QUFKRixjQVBGO0FBYUUsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLUyxLQUFMLENBQVdULGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxPQUhQO0FBSUU7QUFKRixjQWJGO0FBbUJFLDBDQUFDLFdBQUQ7QUFDRSwrQkFBaUIsS0FBS1MsS0FBTCxDQUFXVCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssUUFIUDtBQUlFO0FBSkYsY0FuQkY7QUF5QkUsMENBQUMsV0FBRDtBQUNFLCtCQUFpQixLQUFLUyxLQUFMLENBQVdULGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyxXQUhQO0FBSUU7QUFKRixjQXpCRjtBQStCRSwwQ0FBQyxZQUFEO0FBQ0UsK0JBQWlCLEtBQUtTLEtBQUwsQ0FBV1QsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLDhCQUhQO0FBSUU7QUFKRixjQS9CRjtBQXFDRSxtRUFBTyxNQUFLLEdBQVosRUFBZ0IsNkJBQWhCO0FBckNGO0FBREY7QUFERixPQURGO0FBNkNEOzs7O0VBbkZrQixnQkFBTUYsUzs7a0JBc0ZaVSxNIiwiZmlsZSI6IjAuYzYxZmFmZWNhN2NlYWViMzFjNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFJlZGlyZWN0LCBTd2l0Y2hcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL2NvbXBvbmVudHMvRGV0YWlscyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luJztcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0ZXInO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuL3V0aWwvQXBpQ2FsbHMnO1xuXG5cbi8qKlxuICogUHJvY3RlY3RlZCBwcml2YXRlIFJvdXRlXG4gKiBAcGFyYW1zIHtvYmplY3R9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIGlzQXV0aGVudGljYXRlZCwgLi4ucmVzdCB9XG4gKiBAcmV0dXJucyB7Y29tcG9uZW50fSBwcm90ZWN0ZWQgcm91dGVcbiAqL1xuZnVuY3Rpb24gUHJpdmF0ZVJvdXRlKHsgY29tcG9uZW50OiBDb21wb25lbnQsIGlzQXV0aGVudGljYXRlZCwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlXG4gICAgICB7Li4ucmVzdH1cbiAgICAgIHJlbmRlcj17cHJvcHMgPT4gKGlzQXV0aGVudGljYXRlZCA9PT0gdHJ1ZVxuICAgICAgPyA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDogPFJlZGlyZWN0IHRvPVwiL2xvZ2luXCIgLz4pfVxuICAgIC8+XG4gICk7XG59XG5cblByaXZhdGVSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG4vKipcbiAqIFByb2N0ZWN0ZWQgcHVibGljIFJvdXRlXG4gKiBAcGFyYW1zIHtvYmplY3R9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIGlzQXV0aGVudGljYXRlZCwgLi4ucmVzdCB9XG4gKiBAcmV0dXJucyB7Y29tcG9uZW50fSBwdWJsaWMgcm91dGVcbiAqL1xuZnVuY3Rpb24gUHVibGljUm91dGUoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVuZGVyPXtwcm9wcyA9PiAoaXNBdXRoZW50aWNhdGVkID09PSBmYWxzZVxuICAgICAgPyA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDogPFJlZGlyZWN0IHRvPVwiL2hvbWVcIiAvPil9XG4gICAgLz5cbiAgKTtcbn1cblxuUHVibGljUm91dGUucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzQXV0aGVudGljYXRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufTtcblxuLyoqXG4gKiBUaGUgY29tcG9uZW50IG1haW50YWlucyBhbGwgcm91dGVzLlxuICogQ2hlY2tzIGZvciB1c2VyIHNpZ25lZCBpbiBhbmQgc2lnbmVkIG91dFxuICogQGNsYXNzIEFwcFxuICogQGV4dGVuZHMge1JlYWN0LkNvbXBvbmVudH1cbiAqL1xuY2xhc3MgUm91dGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhcIj09XCIpO1xuICB9XG4gIC8qKlxuICAgKiBDaGVja3MgZm9yIHVzZXIgc2lnbmluIG9yIHNpZ25vdXRcbiAgICogc2V0IHRoZSBzdGF0ZVxuICAgKiBAbWVtYmVyb2YgQXBwXG4gICAqIEByZXR1cm4ge3N0cmluZ3xib2xlYW59IGRpc3BsYXlOYW1lLCBpc0F1dGhlbnRpY2F0ZWRcbiAgICovXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImFtIGhlcmVyXCIpO1xuICAgIGNvbnN0IHRva2VuID0gQXBpQ2FsbC5nZXRUb2tlbigpO1xuICAgIEFwaUNhbGwudmVyaWZ5VG9rZW4odG9rZW4pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT09ICdWYWxpZCBUb2tlbicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkIHRva2VuJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQXV0aGVudGljYXRlZDogdHJ1ZX0pO1xuICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5tZXNzYWdlID09PSAnRW1wdHkgVG9rZW4nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlbXB0eSB2YWxpZCB0b2tlbicpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIHRva2VuJyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQXV0aGVudGljYXRlZDogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgcm91dGVzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyb2YgQXBwXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9cIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0hvbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL2RldGFpbHNcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0RldGFpbHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL2hvbWVcIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0hvbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFB1YmxpY1JvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvbG9naW5cIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xvZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQdWJsaWNSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL3JlZ2lzdGVyXCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtSZWdpc3Rlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvbmV3c2ZlZWRzLzpzb3VyY2VJZC86c29ydEJ5XCJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMb2dpbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUm91dGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9Sb3V0ZXMuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==