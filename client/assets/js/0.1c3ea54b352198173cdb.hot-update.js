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
      password: ''
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
        password: event.target.value.password
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var data = {
        email: event.target.email.value,
        password: event.target.password.value
      };
      this.setState({ errorStatus: true });
      console.log(data);
      return;
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.errorStatus);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9SZWdpc3Rlci5qc3g/ZTc2MyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInByb3BzIiwic3RhdGUiLCJlcnJvclN0YXR1cyIsImVycm9yTWVzc2FnZSIsImVtYWlsIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsS0FERjtBQUVYQyxvQkFBYyxFQUZIO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxnQkFBVTtBQUpDLEtBQWI7QUFNQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQVRpQjtBQVVsQjs7OztpQ0FFWUUsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYztBQUNaTixlQUFPSyxNQUFNRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJSLEtBRGQ7QUFFWkMsa0JBQVVJLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlA7QUFGakIsT0FBZDtBQUlEOzs7aUNBRVlJLEssRUFBTztBQUNsQkEsWUFBTUksY0FBTjtBQUNBLFVBQU1DLE9BQU87QUFDWlYsZUFBT0ssTUFBTUUsTUFBTixDQUFhUCxLQUFiLENBQW1CUSxLQURkO0FBRVpQLGtCQUFVSSxNQUFNRSxNQUFOLENBQWFOLFFBQWIsQ0FBc0JPO0FBRnBCLE9BQWI7QUFJQSxXQUFLRixRQUFMLENBQWMsRUFBQ1IsYUFBYSxJQUFkLEVBQWQ7QUFDQWEsY0FBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0E7QUFDRDs7OzZCQUVRO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLZixLQUFMLENBQVdDLFdBQXZCO0FBQ0EsVUFBTUMsZUFBZSxLQUFLRixLQUFMLENBQVdDLFdBQVgsR0FBeUI7QUFBQTtBQUFBLFVBQUssV0FBVSxpQ0FBZjtBQUM5QztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRDhDO0FBQUE7QUFBQSxPQUF6QixHQUM4RCxFQURuRjtBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFR0M7QUFGSCxTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxjQUFNLFVBQVUsS0FBS0ssWUFBckI7QUFFRTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxPQUFmO0FBQUE7QUFBQSxhQUZGO0FBR0UscURBQU8sSUFBRyxPQUFWLEVBQW1CLE1BQUssT0FBeEIsRUFBZ0MsT0FBTyxLQUFLUCxLQUFMLENBQVdHLEtBQWxELEVBQXlELFVBQVUsS0FBS0UsWUFBeEUsR0FIRjtBQUtFO0FBQUE7QUFBQSxnQkFBTyxTQUFRLFdBQWY7QUFBQTtBQUFBLGFBTEY7QUFNRSxxREFBTyxJQUFHLFVBQVYsRUFBcUIsTUFBSyxVQUExQixFQUFxQyxNQUFLLFVBQTFDLEVBQXFELE9BQU8sS0FBS0wsS0FBTCxDQUFXSSxRQUF2RSxFQUFpRixVQUFVLEtBQUtDLFlBQWhHLEdBTkY7QUFRRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQU0sSUFBRyxRQUFUO0FBQUE7QUFBQTtBQURGLGVBREY7QUFJRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFRLFdBQVUseUNBQWxCO0FBQUE7QUFBQTtBQURGO0FBSkY7QUFSRjtBQURGO0FBTkYsT0FERjtBQTRCRDs7OztFQS9Eb0IsZ0JBQU1XLFM7O2tCQWtFZGxCLFEiLCJmaWxlIjoiMC4xYzNlYTU0YjM1MjE5ODE3M2NkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JTdGF0dXM6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUucGFzc3dvcmRcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgZW1haWw6IGV2ZW50LnRhcmdldC5lbWFpbC52YWx1ZSxcbiAgICAgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC5wYXNzd29yZC52YWx1ZSxcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yU3RhdHVzOiB0cnVlfSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZXJyb3JTdGF0dXMpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHRoaXMuc3RhdGUuZXJyb3JTdGF0dXMgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWJvcmRlciBhbGVydC1kYW5nZXJcIj5cbiAgICA8c3Ryb25nPk9oIHNuYXAhPC9zdHJvbmc+IENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLjwvZGl2PiA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciByZWdDb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcmVnaXN0ZXJoZWFkZXJcIj5cbiAgICAgICAgICA8aDI+TG9naW48L2gyPlxuICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByZWdDYXJkIGNhcmRcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW50ZXIgeW91ciBlbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiICB0eXBlPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJpcnRoZGF0ZVwiPkVudGVyIHlvdXIgcGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtbGVmdCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPiBJIEFscmVhZHkgSGF2ZSBhbiBBY2NvdW50IDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj5SZWdpc3RlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1JlZ2lzdGVyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=