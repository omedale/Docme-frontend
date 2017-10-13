webpackHotUpdate(0,{

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(14), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(273);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(232);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.state = {
      errorStatus: false,
      errorMessage: '',
      email: '',
      password: '',
      phone: '',
      name: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        email: event.target.value.email,
        password: event.target.value.password,
        name: event.target.value.name,
        phone: event.target.value.phone
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var data = {
        email: event.target.email.value,
        password: event.target.password.value,
        name: event.target.name.value,
        phone: event.target.phone.value
      };
      // axios.post(`http://localhost:8080/api/v1/users/auth/register`, data)
      // .then((res) => {
      //   console.log(res);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      return;
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
            'Register'
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
              { htmlFor: 'name' },
              'Enter your Fullname'
            ),
            _react2.default.createElement('input', { id: 'name', type: 'text', value: this.state.name, onChange: this.handleChange }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'email' },
              'Enter your email'
            ),
            _react2.default.createElement('input', { id: 'email', type: 'email', value: this.state.email, onChange: this.handleChange }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'password' },
              'Enter your password'
            ),
            _react2.default.createElement('input', { id: 'password', name: 'password', type: 'password', value: this.state.password, onChange: this.handleChange }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'phone' },
              'Enter your Phone Number'
            ),
            _react2.default.createElement('input', { id: 'phone', type: 'text', value: this.state.phone, onChange: this.handleChange }),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'pull-left col s6' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/login' },
                  ' I Already Have an Account '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col s6' },
                _react2.default.createElement(
                  'button',
                  { className: 'pull-right waves-effect waves-light btn' },
                  'Register'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Register;
}(_react2.default.Component);

exports.default = Register;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Register.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9SZWdpc3Rlci5qc3g/ZTc2MyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInByb3BzIiwic3RhdGUiLCJlcnJvclN0YXR1cyIsImVycm9yTWVzc2FnZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwaG9uZSIsIm5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG1CQUFhLEtBREY7QUFFWEMsb0JBQWMsRUFGSDtBQUdYQyxhQUFPLEVBSEk7QUFJWEMsZ0JBQVUsRUFKQztBQUtYQyxhQUFPLEVBTEk7QUFNWEMsWUFBTTtBQU5LLEtBQWI7QUFRQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVhpQjtBQVlsQjs7OztpQ0FFWUUsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYztBQUNaUixlQUFPTyxNQUFNRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJWLEtBRGQ7QUFFWkMsa0JBQVVNLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlQsUUFGakI7QUFHWkUsY0FBTUksTUFBTUUsTUFBTixDQUFhQyxLQUFiLENBQW1CUCxJQUhiO0FBSVpELGVBQU9LLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlI7QUFKZCxPQUFkO0FBTUQ7OztpQ0FFWUssSyxFQUFPO0FBQ2xCQSxZQUFNSSxjQUFOO0FBQ0EsVUFBTUMsT0FBTztBQUNaWixlQUFPTyxNQUFNRSxNQUFOLENBQWFULEtBQWIsQ0FBbUJVLEtBRGQ7QUFFWlQsa0JBQVVNLE1BQU1FLE1BQU4sQ0FBYVIsUUFBYixDQUFzQlMsS0FGcEI7QUFHWlAsY0FBTUksTUFBTUUsTUFBTixDQUFhTixJQUFiLENBQWtCTyxLQUhaO0FBSVpSLGVBQU9LLE1BQU1FLE1BQU4sQ0FBYVAsS0FBYixDQUFtQlE7QUFKZCxPQUFiO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNWCxlQUFlLEtBQUtGLEtBQUwsQ0FBV0MsV0FBWCxHQUF5QjtBQUFBO0FBQUEsVUFBSyxXQUFVLGlDQUFmO0FBQzlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEOEM7QUFBQTtBQUFBLE9BQXpCLEdBQzhELEVBRG5GO0FBRUEsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVHQztBQUZILFNBREY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQU0sVUFBVSxLQUFLTyxZQUFyQjtBQUVBO0FBQUE7QUFBQSxnQkFBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLGFBRkE7QUFHQSxxREFBTyxJQUFHLE1BQVYsRUFBa0IsTUFBSyxNQUF2QixFQUE4QixPQUFPLEtBQUtULEtBQUwsQ0FBV00sSUFBaEQsRUFBc0QsVUFBVSxLQUFLQyxZQUFyRSxHQUhBO0FBS0U7QUFBQTtBQUFBLGdCQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsYUFMRjtBQU1FLHFEQUFPLElBQUcsT0FBVixFQUFtQixNQUFLLE9BQXhCLEVBQWdDLE9BQU8sS0FBS1AsS0FBTCxDQUFXRyxLQUFsRCxFQUF5RCxVQUFVLEtBQUtJLFlBQXhFLEdBTkY7QUFRRTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxhQVJGO0FBU0UscURBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsTUFBSyxVQUExQyxFQUFxRCxPQUFPLEtBQUtQLEtBQUwsQ0FBV0ksUUFBdkUsRUFBaUYsVUFBVSxLQUFLRyxZQUFoRyxHQVRGO0FBV0U7QUFBQTtBQUFBLGdCQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsYUFYRjtBQVlFLHFEQUFPLElBQUcsT0FBVixFQUFtQixNQUFLLE1BQXhCLEVBQStCLE9BQU8sS0FBS1AsS0FBTCxDQUFXSyxLQUFqRCxFQUF3RCxVQUFVLEtBQUtFLFlBQXZFLEdBWkY7QUFjRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxRQUFUO0FBQUE7QUFBQTtBQURGLGVBREY7QUFJRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFRLFdBQVUseUNBQWxCO0FBQUE7QUFBQTtBQURGO0FBSkY7QUFkRjtBQURGO0FBTkYsT0FERjtBQWtDRDs7OztFQS9Fb0IsZ0JBQU1TLFM7O2tCQWtGZGxCLFEiLCJmaWxlIjoiMC45ZDcwMDVjMWY5Yzk0MzIxYjdmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yU3RhdHVzOiBmYWxzZSxcbiAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBwaG9uZTogJycsXG4gICAgICBuYW1lOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUucGFzc3dvcmQsXG4gICAgICBuYW1lOiBldmVudC50YXJnZXQudmFsdWUubmFtZSxcbiAgICAgIHBob25lOiBldmVudC50YXJnZXQudmFsdWUucGhvbmVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgZW1haWw6IGV2ZW50LnRhcmdldC5lbWFpbC52YWx1ZSxcbiAgICAgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC5wYXNzd29yZC52YWx1ZSxcbiAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWUsXG4gICAgIHBob25lOiBldmVudC50YXJnZXQucGhvbmUudmFsdWUsXG4gICAgfTtcbiAgICAvLyBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL3VzZXJzL2F1dGgvcmVnaXN0ZXJgLCBkYXRhKVxuICAgIC8vIC50aGVuKChyZXMpID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgLy8gfSlcbiAgICAvLyAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMuc3RhdGUuZXJyb3JTdGF0dXMgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWJvcmRlciBhbGVydC1kYW5nZXJcIj5cbiAgICA8c3Ryb25nPk9oIHNuYXAhPC9zdHJvbmc+IENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLjwvZGl2PiA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWdDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcmVnaXN0ZXJoZWFkZXJcIj5cbiAgICAgICAgICA8aDI+UmVnaXN0ZXI8L2gyPlxuICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByZWdDYXJkIGNhcmRcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+RW50ZXIgeW91ciBGdWxsbmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiICB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVudGVyIHlvdXIgZW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiAgdHlwZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPkVudGVyIHlvdXIgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBob25lXCI+RW50ZXIgeW91ciBQaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwicGhvbmVcIiAgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtbGVmdCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPiBJIEFscmVhZHkgSGF2ZSBhbiBBY2NvdW50IDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1JlZ2lzdGVyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=