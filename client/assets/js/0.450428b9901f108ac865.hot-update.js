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
      return new Promise(function (resolve, reject) {
        _axios2.default.get(url).then(function (res) {
          resolve(res.data.articles);
        }).catch(function (error) {
          reject(error.response);
        });
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9SZWdpc3Rlci5qc3g/ZTc2MyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInByb3BzIiwic3RhdGUiLCJlcnJvclN0YXR1cyIsImVycm9yTWVzc2FnZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwaG9uZSIsIm5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiYXJ0aWNsZXMiLCJjYXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsS0FERjtBQUVYQyxvQkFBYyxFQUZIO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxnQkFBVSxFQUpDO0FBS1hDLGFBQU8sRUFMSTtBQU1YQyxZQUFNO0FBTkssS0FBYjtBQVFBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBWGlCO0FBWWxCOzs7O2lDQUVZRSxLLEVBQU87QUFDbEIsV0FBS0MsUUFBTCxDQUFjO0FBQ1pSLGVBQU9PLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlYsS0FEZDtBQUVaQyxrQkFBVU0sTUFBTUUsTUFBTixDQUFhQyxLQUFiLENBQW1CVCxRQUZqQjtBQUdaRSxjQUFNSSxNQUFNRSxNQUFOLENBQWFDLEtBQWIs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YWM4NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvclN0YXR1czogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcGhvbmU6ICcnLFxuICAgICAgbmFtZTogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQudmFsdWUuZW1haWwsXG4gICAgICBwYXNzd29yZDogZXZlbnQudGFyZ2V0LnZhbHVlLnBhc3N3b3JkLFxuICAgICAgbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlLm5hbWUsXG4gICAgICBwaG9uZTogZXZlbnQudGFyZ2V0LnZhbHVlLnBob25lXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgIGVtYWlsOiBldmVudC50YXJnZXQuZW1haWwudmFsdWUsXG4gICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQucGFzc3dvcmQudmFsdWUsXG4gICAgIG5hbWU6IGV2ZW50LnRhcmdldC5uYW1lLnZhbHVlLFxuICAgICBwaG9uZTogZXZlbnQudGFyZ2V0LnBob25lLnZhbHVlLFxuICAgIH07XG4gICAgLy8gYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS91c2Vycy9hdXRoL3JlZ2lzdGVyYCwgZGF0YSlcbiAgICAvLyAudGhlbigocmVzKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIC8vIH0pXG4gICAgLy8gLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vIH0pO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcy5kYXRhLmFydGljbGVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gdGhpcy5zdGF0ZS5lcnJvclN0YXR1cyA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtYm9yZGVyIGFsZXJ0LWRhbmdlclwiPlxuICAgIDxzdHJvbmc+T2ggc25hcCE8L3N0cm9uZz4gQ2hhbmdlIGEgZmV3IHRoaW5ncyB1cCBhbmQgdHJ5IHN1Ym1pdHRpbmcgYWdhaW4uPC9kaXY+IDogJyc7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJlZ0NvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByZWdpc3RlcmhlYWRlclwiPlxuICAgICAgICAgIDxoMj5SZWdpc3RlcjwvaDI+XG4gICAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJlZ0NhcmQgY2FyZFwiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5FbnRlciB5b3VyIEZ1bGxuYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW50ZXIgeW91ciBlbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiICB0eXBlPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+RW50ZXIgeW91ciBwYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5FbnRlciB5b3VyIFBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJwaG9uZVwiICB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBob25lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0IGNvbCBzNlwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+IEkgQWxyZWFkeSBIYXZlIGFuIEFjY291bnQgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczZcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvUmVnaXN0ZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==