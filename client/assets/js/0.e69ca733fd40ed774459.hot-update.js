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

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
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
      isAuthenticated: true
    };
    return _this;
  }

  /**
   * Renders the routes
   * @returns {void}
   * @memberof App
   */


  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(_NavigationBar2.default, null)
          ),
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(PublicRoute, {
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
            _react2.default.createElement(PrivateRoute, {
              isAuthenticated: this.state.isAuthenticated,
              exact: true,
              path: '/login',
              component: _Login2.default
            }),
            _react2.default.createElement(PrivateRoute, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Il0sIm5hbWVzIjpbIlByaXZhdGVSb3V0ZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJwcm9wcyIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIlB1YmxpY1JvdXRlIiwiUm91dGVzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFLQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWUsT0FBd0Q7QUFBQSxNQUExQ0MsU0FBMEMsUUFBckRDLFNBQXFEO0FBQUEsTUFBL0JDLGVBQStCLFFBQS9CQSxlQUErQjtBQUFBLE1BQVhDLElBQVc7O0FBQzNFLFNBQ0Usa0VBQ01BLElBRE47QUFFRSxZQUFRO0FBQUEsYUFBVUQsb0JBQW9CLElBQXBCLEdBQ2QsOEJBQUMsU0FBRCxFQUFlRSxLQUFmLENBRGMsR0FFZCwwREFBVSxJQUFHLEdBQWIsR0FGSTtBQUFBO0FBRlYsS0FERjtBQVFELENBVEQ7O0FBV0FMLGFBQWFNLFNBQWIsR0FBeUI7QUFDdkJKLGFBQVcsb0JBQVVLLElBQVYsQ0FBZUMsVUFESDtBQUV2QkwsbUJBQWlCLG9CQUFVTSxJQUFWLENBQWVEO0FBRlQsQ0FBekI7O0FBS0E7Ozs7O0FBS0EsSUFBTUUsY0FBYyxTQUFkQSxXQUFjLFFBQXdEO0FBQUEsTUFBMUNULFNBQTBDLFNBQXJEQyxTQUFxRDtBQUFBLE1BQS9CQyxlQUErQixTQUEvQkEsZUFBK0I7QUFBQSxNQUFYQyxJQUFXOztBQUMxRSxTQUNFLGtFQUNNQSxJQUROO0FBRUUsWUFBUTtBQUFBLGFBQVVELG9CQUFvQixLQUFwQixHQUNkLDhCQUFDLFNBQUQsRUFBZUUsS0FBZixDQURjLEdBRWQsMERBQVUsSUFBRyxPQUFiLEdBRkk7QUFBQTtBQUZWLEtBREY7QUFRRCxDQVREOztBQVdBSyxZQUFZSixTQUFaLEdBQXdCO0FBQ3RCSixhQUFXLG9CQUFVSyxJQUFWLENBQWVDLFVBREo7QUFFdEJMLG1CQUFpQixvQkFBVU0sSUFBVixDQUFlRDtBQUZWLENBQXhCOztBQUtBOzs7Ozs7O0lBTU1HLE07OztBQUNKLG9CQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hULHVCQUFpQjtBQUROLEtBQWI7QUFGWTtBQUtiOztBQUVEOzs7Ozs7Ozs7NkJBS1M7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFLDBDQUFDLFdBQUQ7QUFDRSwrQkFBaUIsS0FBS1MsS0FBTCxDQUFXVCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssR0FIUDtBQUlFO0FBSkYsY0FERjtBQU9FLDBDQUFDLFlBQUQ7QUFDRSwrQkFBaUIsS0FBS1MsS0FBTCxDQUFXVCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssVUFIUDtBQUlFO0FBSkYsY0FQRjtBQWFFLDBDQUFDLFlBQUQ7QUFDRSwrQkFBaUIsS0FBS1MsS0FBTCxDQUFXVCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssT0FIUDtBQUlFO0FBSkYsY0FiRjtBQW1CRSwwQ0FBQyxZQUFEO0FBQ0UsK0JBQWlCLEtBQUtTLEtBQUwsQ0FBV1QsZUFEOUI7QUFFRSx5QkFGRjtBQUdFLG9CQUFLLFFBSFA7QUFJRTtBQUpGLGNBbkJGO0FBeUJFLDBDQUFDLFlBQUQ7QUFDRSwrQkFBaUIsS0FBS1MsS0FBTCxDQUFXVCxlQUQ5QjtBQUVFLHlCQUZGO0FBR0Usb0JBQUssV0FIUDtBQUlFO0FBSkYsY0F6QkY7QUErQkUsMENBQUMsWUFBRDtBQUNFLCtCQUFpQixLQUFLUyxLQUFMLENBQVdULGVBRDlCO0FBRUUseUJBRkY7QUFHRSxvQkFBSyw4QkFIUDtBQUlFO0FBSkYsY0EvQkY7QUFxQ0UsbUVBQU8sTUFBSyxHQUFaLEVBQWdCLDZCQUFoQjtBQXJDRjtBQUpGO0FBREYsT0FERjtBQWdERDs7OztFQTlEa0IsZ0JBQU1GLFM7O2tCQWlFWlUsTSIsImZpbGUiOiIwLmU2OWNhNzMzZmQ0MGVkNzc0NDU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBSZWRpcmVjdCwgU3dpdGNoXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHMnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdGVyJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuXG4vKipcbiAqIFByb2N0ZWN0ZWQgcHJpdmF0ZSBSb3V0ZVxuICogQHBhcmFtcyB7b2JqZWN0fSB7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfVxuICogQHJldHVybnMge2NvbXBvbmVudH0gcHJvdGVjdGVkIHJvdXRlXG4gKi9cbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCBpc0F1dGhlbnRpY2F0ZWQsIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZVxuICAgICAgey4uLnJlc3R9XG4gICAgICByZW5kZXI9e3Byb3BzID0+IChpc0F1dGhlbnRpY2F0ZWQgPT09IHRydWVcbiAgICAgICAgPyA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgOiA8UmVkaXJlY3QgdG89XCIvXCIgLz4pfVxuICAgIC8+XG4gICk7XG59XG5cblByaXZhdGVSb3V0ZS5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNBdXRoZW50aWNhdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXG59O1xuXG4vKipcbiAqIFByb2N0ZWN0ZWQgcHVibGljIFJvdXRlXG4gKiBAcGFyYW1zIHtvYmplY3R9IHsgY29tcG9uZW50OiBDb21wb25lbnQsIGlzQXV0aGVudGljYXRlZCwgLi4ucmVzdCB9XG4gKiBAcmV0dXJucyB7Y29tcG9uZW50fSBwdWJsaWMgcm91dGVcbiAqL1xuY29uc3QgUHVibGljUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcmVuZGVyPXtwcm9wcyA9PiAoaXNBdXRoZW50aWNhdGVkID09PSBmYWxzZVxuICAgICAgICA/IDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICA6IDxSZWRpcmVjdCB0bz1cIi9ob21lXCIgLz4pfVxuICAgIC8+XG4gICk7XG59XG5cblB1YmxpY1JvdXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc0F1dGhlbnRpY2F0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcbn07XG5cbi8qKlxuICogVGhlIGNvbXBvbmVudCBtYWludGFpbnMgYWxsIHJvdXRlcy5cbiAqIENoZWNrcyBmb3IgdXNlciBzaWduZWQgaW4gYW5kIHNpZ25lZCBvdXRcbiAqIEBjbGFzcyBBcHBcbiAqIEBleHRlbmRzIHtSZWFjdC5Db21wb25lbnR9XG4gKi9cbmNsYXNzIFJvdXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgcm91dGVzXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKiBAbWVtYmVyb2YgQXBwXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxQdWJsaWNSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SG9tZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvZGV0YWlsc1wiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17RGV0YWlsc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvaG9tZVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17SG9tZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UHJpdmF0ZVJvdXRlXG4gICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17dGhpcy5zdGF0ZS5pc0F1dGhlbnRpY2F0ZWR9XG4gICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgIHBhdGg9XCIvbG9naW5cIlxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xvZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcml2YXRlUm91dGVcbiAgICAgICAgICAgICAgaXNBdXRoZW50aWNhdGVkPXt0aGlzLnN0YXRlLmlzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgcGF0aD1cIi9yZWdpc3RlclwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17UmVnaXN0ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFByaXZhdGVSb3V0ZVxuICAgICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e3RoaXMuc3RhdGUuaXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICBwYXRoPVwiL25ld3NmZWVkcy86c291cmNlSWQvOnNvcnRCeVwiXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17TG9naW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JvdXRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvUm91dGVzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=