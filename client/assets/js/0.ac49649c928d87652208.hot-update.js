webpackHotUpdate(0,{

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(42);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(39);

var _ApiCalls = __webpack_require__(51);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

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
      var _this2 = this;

      event.preventDefault();
      var data = {
        email: event.target.email.value,
        password: event.target.password.value,
        name: event.target.name.value,
        phone: event.target.phone.value
      };
      _ApiCalls2.default.RegisterUser(data).then(function (res) {
        console.log(res);
        if (res.data.message === 'Registration Successfull and Logged In') {
          _ApiCalls2.default.saveToken(res.data.user.token);
          _this2.props.history.push('/home');
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Register.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9SZWdpc3Rlci5qc3g/ZTc2MyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInByb3BzIiwic3RhdGUiLCJlcnJvclN0YXR1cyIsImVycm9yTWVzc2FnZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwaG9uZSIsIm5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiUmVnaXN0ZXJVc2VyIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwic2F2ZVRva2VuIiwidXNlciIsInRva2VuIiwiaGlzdG9yeSIsInB1c2giLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxLQURGO0FBRVhDLG9CQUFjLEVBRkg7QUFHWEMsYUFBTyxFQUhJO0FBSVhDLGdCQUFVLEVBSkM7QUFLWEMsYUFBTyxFQUxJO0FBTVhDLFlBQU07QUFOSyxLQUFiO0FBUUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFYaUI7QUFZbEI7Ozs7aUNBRVlFLEssRUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFDWlIsZUFBT08sTUFBTUUsTUFBTixDQUFhQyxLQUFiLENBQW1CVixLQURkO0FBRVpDLGtCQUFVTSxNQUFNRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJULFFBRmpCO0FBR1pFLGNBQU1JLE1BQU1FLE1B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LE9BREY7QUFrQ0Q7Ozs7RUFoRm9CLGdCQUFNb0IsUzs7a0JBbUZkN0IsUSIsImZpbGUiOiIwLmFjNDk2NDljOTI4ZDg3NjUyMjA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi8uLi91dGlsL0FwaUNhbGxzJztcblxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JTdGF0dXM6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHBob25lOiAnJyxcbiAgICAgIG5hbWU6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZS5wYXNzd29yZCxcbiAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZS5uYW1lLFxuICAgICAgcGhvbmU6IGV2ZW50LnRhcmdldC52YWx1ZS5waG9uZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICBlbWFpbDogZXZlbnQudGFyZ2V0LmVtYWlsLnZhbHVlLFxuICAgICBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnBhc3N3b3JkLnZhbHVlLFxuICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZS52YWx1ZSxcbiAgICAgcGhvbmU6IGV2ZW50LnRhcmdldC5waG9uZS52YWx1ZSxcbiAgICB9O1xuICAgQXBpQ2FsbC5SZWdpc3RlclVzZXIoZGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT09ICdSZWdpc3RyYXRpb24gU3VjY2Vzc2Z1bGwgYW5kIExvZ2dlZCBJbicpIHtcbiAgICAgICAgQXBpQ2FsbC5zYXZlVG9rZW4ocmVzLmRhdGEudXNlci50b2tlbilcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9ob21lJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvclN0YXR1czogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnN0YXRlLmVycm9yU3RhdHVzID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1ib3JkZXIgYWxlcnQtZGFuZ2VyXCI+XG4gICAgPHN0cm9uZz5PaCBzbmFwITwvc3Ryb25nPiBDaGFuZ2UgYSBmZXcgdGhpbmdzIHVwIGFuZCB0cnkgc3VibWl0dGluZyBhZ2Fpbi48L2Rpdj4gOiAnJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcmVnQ29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJlZ2lzdGVyaGVhZGVyXCI+XG4gICAgICAgICAgPGgyPlJlZ2lzdGVyPC9oMj5cbiAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcmVnQ2FyZCBjYXJkXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPkVudGVyIHlvdXIgRnVsbG5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiAgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbnRlciB5b3VyIGVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgIHR5cGU9XCJlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5FbnRlciB5b3VyIHBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPkVudGVyIHlvdXIgUGhvbmUgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInBob25lXCIgIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUucGhvbmV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj4gSSBBbHJlYWR5IEhhdmUgYW4gQWNjb3VudCA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzNlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodCB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9SZWdpc3Rlci5qc3giXSwic291cmNlUm9vdCI6IiJ9