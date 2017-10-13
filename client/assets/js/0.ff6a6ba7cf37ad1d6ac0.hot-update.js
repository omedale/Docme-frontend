webpackHotUpdate(0,{

/***/ 219:
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

var _axios = __webpack_require__(273);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(232);

var _ApiCalls = __webpack_require__(292);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      errorStatus: false,
      errorMessage: '',
      email: '',
      password: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    console.log(_this.rest);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        email: event.target.value.email,
        password: event.target.value.password
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var data = {
        email: event.target.email.value,
        password: event.target.password.value
      };
      _ApiCalls2.default.LoginUser(data).then(function (res) {
        if (res.data.message === 'Login Successful') {
          _ApiCalls2.default.saveToken(res.data.token);
          _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
            render: function render(props) {
              return isAuthenticated === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
            }
          }));
          console.log("greate");
        } else {
          _this2.setState({ errorStatus: false });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var errorMessage = this.state.errorStatus ? _react2.default.createElement(
        'div',
        { className: 'alert alert-border alert-danger' },
        _react2.default.createElement(
          'strong',
          null,
          'Oh snap!'
        ),
        ' Change a few things up and try submitting again.'
      ) : '';
      return _react2.default.createElement(
        'div',
        { className: 'container regContainer' },
        _react2.default.createElement(
          'div',
          { className: 'row registerheader' },
          _react2.default.createElement(
            'h2',
            null,
            'Login'
          ),
          errorMessage
        ),
        _react2.default.createElement(
          'div',
          { className: 'row regCard card' },
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              'label',
              { htmlFor: 'email' },
              'Enter your email'
            ),
            _react2.default.createElement('input', { id: 'email', type: 'email', value: this.state.email, onChange: this.handleChange }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'birthdate' },
              'Enter your password'
            ),
            _react2.default.createElement('input', { id: 'password', name: 'password', type: 'password', value: this.state.password, onChange: this.handleChange }),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'pull-left col s6' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/register' },
                  ' I don\'t have an Account '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col s6' },
                _react2.default.createElement(
                  'button',
                  { className: 'pull-right waves-effect waves-light btn' },
                  'Login'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Login.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Mb2dpbi5qc3g/ZjFiZCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwic3RhdGUiLCJlcnJvclN0YXR1cyIsImVycm9yTWVzc2FnZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInJlc3QiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJMb2dpblVzZXIiLCJ0aGVuIiwicmVzIiwibWVzc2FnZSIsInNhdmVUb2tlbiIsInRva2VuIiwiaXNBdXRoZW50aWNhdGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxLQURGO0FBRVhDLG9CQUFjLEVBRkg7QUFHWEMsYUFBTyxFQUhJO0FBSVhDLGdCQUFVO0FBSkMsS0FBYjtBQU1BLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBQ0FFLFlBQVFDLEdBQVIsQ0FBWSxNQUFLQyxJQUFqQjtBQVZpQjtBQVdsQjs7OztpQ0FFWUMsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYztBQUNaVCxlQUFPUSxNQUFNRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJYLEtBRGQ7QUFFWkMsa0JBQVVPLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlY7QUFGakIsT0FBZDtBQUlEOzs7aUNBRVlPLEssRUFBTztBQUFBOztBQUNsQkEsWUFBTUksY0FBTjtBQUNBLFVBQU1DLE9BQU87QUFDWmIsZUFBT1EsTUFBTUUsTUFBTixDQUFhVixLQUFiLENBQW1CVyxLQURkO0FBRVpWLGtCQUFVTyxNQUFNRSxNQUFOLENBQWFULFFBQWIsQ0FBc0JVO0FBRnBCLE9BQWI7QUFJRCx5QkFBUUcsU0FBUixDQUFrQkQsSUFBbEIsRUFBd0JFLElBQXhCLENBQTZCLFVBQUNDLEdBQUQsRUFBUztBQUNuQyxZQUFJQSxJQUFJSCxJQUFKLENBQVNJLE9BQVQsS0FBcUIsa0JBQXpCLEVBQTZDO0FBQzNDLDZCQUFRQyxTQUFSLENBQWtCRixJQUFJSCxJQUFKLENBQVNNLEtBQTNCO0FBQ0EsNEVBQ0laLElBREo7QUFFQSxvQkFBUTtBQUFBLHFCQUFVYSxvQkFBb0IsSUFBcEIsR0FDZCw4QkFBQyxTQUFELEVBQWV4QixLQUFmLENBRGMsR0FFZCwwREFBVSxJQUFHLFFBQWIsR0FGSTtBQUFBO0FBRlI7QUFNQVMsa0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsU0FURCxNQVNPO0FBQ0wsaUJBQUtHLFFBQUwsQ0FBYyxFQUFDWCxhQUFhLEtBQWQsRUFBZDtBQUNEO0FBQ0YsT0FiRjtBQWNBOzs7NkJBRVE7QUFDUCxVQUFNQyxlQUFlLEtBQUtGLEtBQUwsQ0FBV0MsV0FBWCxHQUF5QjtBQUFBO0FBQUEsVUFBSyxXQUFVLGlDQUFmO0FBQzlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEOEM7QUFBQTtBQUFBLE9BQXpCLEdBQzhELEVBRG5GO0FBRUEsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVHQztBQUZILFNBREY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU0sVUFBVSxLQUFLSyxZQUFyQjtBQUVFO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE9BQWY7QUFBQTtBQUFBLGFBRkY7QUFHRSxxREFBTyxJQUFHLE9BQVYsRUFBbUIsTUFBSyxPQUF4QixFQUFnQyxPQUFPLEtBQUtQLEtBQUwsQ0FBV0csS0FBbEQsRUFBeUQsVUFBVSxLQUFLRSxZQUF4RSxHQUhGO0FBS0U7QUFBQTtBQUFBLGdCQUFPLFNBQVEsV0FBZjtBQUFBO0FBQUEsYUFMRjtBQU1FLHFEQUFPLElBQUcsVUFBVixFQUFxQixNQUFLLFVBQTFCLEVBQXFDLE1BQUssVUFBMUMsRUFBcUQsT0FBTyxLQUFLTCxLQUFMLENBQVdJLFFBQXZFLEVBQWlGLFVBQVUsS0FBS0MsWUFBaEcsR0FORjtBQVFFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBTSxJQUFHLFdBQVQ7QUFBQTtBQUFBO0FBREYsZUFERjtBQUlFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQVEsV0FBVSx5Q0FBbEI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQVJGO0FBREY7QUFORixPQURGO0FBNEJEOzs7O0VBMUVpQixnQkFBTW1CLFM7O2tCQTZFWDFCLEsiLCJmaWxlIjoiMC5mZjZhNmJhN2NmMzdhZDFkNmFjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFJlZGlyZWN0LCBTd2l0Y2hcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuLy4uL3V0aWwvQXBpQ2FsbHMnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvclN0YXR1czogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucmVzdCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUuZW1haWwsXG4gICAgICBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlLnBhc3N3b3JkXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgIGVtYWlsOiBldmVudC50YXJnZXQuZW1haWwudmFsdWUsXG4gICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQucGFzc3dvcmQudmFsdWUsXG4gICAgfTtcbiAgIEFwaUNhbGwuTG9naW5Vc2VyKGRhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT09ICdMb2dpbiBTdWNjZXNzZnVsJykge1xuICAgICAgICBBcGlDYWxsLnNhdmVUb2tlbihyZXMuZGF0YS50b2tlbik7XG4gICAgICAgIDxSb3V0ZVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgcmVuZGVyPXtwcm9wcyA9PiAoaXNBdXRoZW50aWNhdGVkID09PSB0cnVlXG4gICAgICAgICAgPyA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA6IDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+KX1cbiAgICAgIC8+XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ3JlYXRlXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvclN0YXR1czogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnN0YXRlLmVycm9yU3RhdHVzID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1ib3JkZXIgYWxlcnQtZGFuZ2VyXCI+XG4gICAgPHN0cm9uZz5PaCBzbmFwITwvc3Ryb25nPiBDaGFuZ2UgYSBmZXcgdGhpbmdzIHVwIGFuZCB0cnkgc3VibWl0dGluZyBhZ2Fpbi48L2Rpdj4gOiAnJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVnQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJlZ2lzdGVyaGVhZGVyXCI+XG4gICAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcmVnQ2FyZCBjYXJkXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVudGVyIHlvdXIgZW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiAgdHlwZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiaXJ0aGRhdGVcIj5FbnRlciB5b3VyIHBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIj4gSSBkb24ndCBoYXZlIGFuIEFjY291bnQgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTG9naW4uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==