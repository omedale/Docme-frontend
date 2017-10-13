webpackHotUpdate(0,{

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(39);

var _history = __webpack_require__(184);

var _reactRedux = __webpack_require__(52);

var _reactRedux2 = _interopRequireDefault(_reactRedux);

var _propTypes = __webpack_require__(14);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NavigationBar = __webpack_require__(38);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _Home = __webpack_require__(283);

var _Home2 = _interopRequireDefault(_Home);

var _Details = __webpack_require__(282);

var _Details2 = _interopRequireDefault(_Details);

var _ManageDocument = __webpack_require__(349);

var _ManageDocument2 = _interopRequireDefault(_ManageDocument);

var _Login = __webpack_require__(284);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(286);

var _Register2 = _interopRequireDefault(_Register);

var _NotFound = __webpack_require__(285);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _ApiCalls = __webpack_require__(51);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _history.createBrowserHistory)();

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    { history: history },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/details', component: _Details2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document', component: _ManageDocument2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/document/:id', component: _ManageDocument2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NotFound2.default })
    )
  );
};
exports.default = Routes;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ }),

/***/ 281:
false,

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(52);

var _redux = __webpack_require__(40);

var _NavigationBar = __webpack_require__(38);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _SingleInput = __webpack_require__(118);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(119);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(117);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(116);

var documentActions = _interopRequireWildcard(_documentAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateDocument = function (_React$Component) {
  _inherits(CreateDocument, _React$Component);

  function CreateDocument(props) {
    _classCallCheck(this, CreateDocument);

    var _this = _possibleConstructorReturn(this, (CreateDocument.__proto__ || Object.getPrototypeOf(CreateDocument)).call(this, props));

    _this.state = {
      email: '',
      docTitle: '',
      docContent: '',
      access: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);
    return _this;
  }

  _createClass(CreateDocument, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        docTitle: event.target.value.docTitle,
        docContent: event.target.value.docContent,
        access: event.target.value.access
      });
    }
  }, {
    key: 'onClickSave',
    value: function onClickSave(event) {
      event.preventDefault();
      var doc = {
        title: event.target.docTitle.value,
        content: event.target.docContent.value
      };
      this.props.actions.createDocument(doc);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_NavigationBar2.default, { history: this.props.history })
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'h3',
              null,
              'Add Document'
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: this.onClickSave, className: 'col s12' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react2.default.createElement(_SingleInput2.default, {
                    inputType: 'text',
                    title: 'Title',
                    id: 'docTitle',
                    name: 'docTitle',
                    controlFunc: this.handleChange,
                    content: this.state.docTitle,
                    placeholder: 'Title' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react2.default.createElement(_Select2.default, {
                    name: 'ageRange',
                    id: 'access',
                    title: 'Access',
                    placeholder: 'Choose your age range',
                    controlFunc: this.handleChange,
                    options: this.state.access,
                    selectedOption: this.state.ownerAgeRangeSelection })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement(_TextArea2.default, {
                    title: 'Document Content',
                    rows: 5,
                    resize: false,
                    content: this.state.docContent,
                    name: 'docContent',
                    id: 'docContent',
                    controlFunc: this.handleChange,
                    placeholder: 'Please type your document here' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement(
                    'button',
                    { className: 'pull-right waves-effect waves-light btn' },
                    'Login'
                  ),
                  _react2.default.createElement(
                    'a',
                    { className: 'waves-effect waves-light btn' },
                    _react2.default.createElement(
                      'i',
                      { className: 'material-icons left' },
                      'check'
                    ),
                    'button'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CreateDocument;
}(_react2.default.Component);

CreateDocument.propTypes = {
  actions: _react2.default.PropTypes.object.isRequired,
  documents: _react2.default.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    documents: state.documents
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(documentActions, dispatch)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreateDocument);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ManageDocument.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvUm91dGVzLmpzeD9jMjA4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL01hbmFnZURvY3VtZW50LmpzeD9lMjA0Il0sIm5hbWVzIjpbImhpc3RvcnkiLCJSb3V0ZXMiLCJkb2N1bWVudEFjdGlvbnMiLCJDcmVhdGVEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwidGl0bGUiLCJjb250ZW50IiwiYWN0aW9ucyIsImNyZWF0ZURvY3VtZW50Iiwib3duZXJBZ2VSYW5nZVNlbGVjdGlvbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJkb2N1bWVudHMiLCJhcnJheSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUdBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLG9DQUFoQjs7QUFFQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixTQUNFO0FBQUE7QUFBQSxNQUFRLFNBQVNELE9BQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsNkRBQU8sTUFBSyxRQUFaLEVBQXFCLDBCQUFyQixHQURGO0FBRUUsNkRBQU8sTUFBSyxXQUFaLEVBQXdCLDZCQUF4QixHQUZGO0FBR0UsNkRBQU8sTUFBSyxVQUFaLEVBQXVCLDRCQUF2QixHQUhGO0FB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TUUsd0JBQUksWUFOTjtBQU9FLGlDQUFhLEtBQUtFLFlBUHBCO0FBUUUsaUNBQWEsZ0NBUmY7QUFERjtBQURGLGVBdkJGO0FBb0NFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBUSxXQUFVLHlDQUFsQjtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUEsc0JBQUcsV0FBVSw4QkFBYjtBQUE0QztBQUFBO0FBQUEsd0JBQUcsV0FBVSxxQkFBYjtBQUFBO0FBQUEscUJBQTVDO0FBQUE7QUFBQTtBQUZGO0FBREY7QUFwQ0Y7QUFGRjtBQURGO0FBSkYsT0FERjtBQXVERDs7OztFQXZGMEIsZ0JBQU1jLFM7O0FBeUZuQ3JCLGVBQWVzQixTQUFmLEdBQTJCO0FBQ3pCSixXQUFTLGdCQUFNSyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEUDtBQUV6QkMsYUFBVyxnQkFBTUgsU0FBTixDQUFnQkksS0FBaEIsQ0FBc0JGO0FBRlIsQ0FBM0I7O0FBS0EsU0FBU0csZUFBVCxDQUF5QjFCLEtBQXpCLEVBQWdDMkIsUUFBaEMsRUFBeUM7QUFDdkMsU0FBTztBQUNMSCxlQUFXeEIsTUFBTXdCO0FBRFosR0FBUDtBQUdEOztBQUVELFNBQVNJLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxTQUFPO0FBQ0xiLGFBQVMsK0JBQW1CbkIsZUFBbkIsRUFBb0NnQyxRQUFwQztBQURKLEdBQVA7QUFHRDs7a0JBRWMseUJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2QzlCLGNBQTdDLEMiLCJmaWxlIjoiMC45ZmNhYjdlY2M0YzM5MTA2NzM0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgUmVkaXJlY3QsIFN3aXRjaCwgYnJvd3Nlckhpc3Rvcnlcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IFByb3ZpZGVyIGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4vY29tcG9uZW50cy9EZXRhaWxzJztcbmltcG9ydCBNYW5hZ2VEb2N1bWVudCBmcm9tICcuL2NvbXBvbmVudHMvTWFuYWdlRG9jdW1lbnQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdGVyJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuaW1wb3J0IEFwaUNhbGwgZnJvbSAnLi91dGlsL0FwaUNhbGxzJztcblxuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XG5cbmNvbnN0IFJvdXRlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RldGFpbHNcIiBjb21wb25lbnQ9e0RldGFpbHN9IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RvY3VtZW50XCIgY29tcG9uZW50PXtNYW5hZ2VEb2N1bWVudH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZG9jdW1lbnQvOmlkXCIgY29tcG9uZW50PXtNYW5hZ2VEb2N1bWVudH0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgPC9Sb3V0ZXI+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBSb3V0ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L1JvdXRlcy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJztcblxuY2xhc3MgQ3JlYXRlRG9jdW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgZG9jVGl0bGU6ICcnLFxuICAgICAgZG9jQ29udGVudDogJycsXG4gICAgICBhY2Nlc3M6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrU2F2ZSA9IHRoaXMub25DbGlja1NhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9jVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQudmFsdWUuYWNjZXNzXG4gICAgfSk7XG4gIH1cblxuXG4gIG9uQ2xpY2tTYXZlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkb2MgPSB7XG4gICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LmRvY1RpdGxlLnZhbHVlLFxuICAgICAgY29udGVudDogZXZlbnQudGFyZ2V0LmRvY0NvbnRlbnQudmFsdWVcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNyZWF0ZURvY3VtZW50KGRvYyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb25CYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGgzPkFkZCBEb2N1bWVudDwvaDM+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vbkNsaWNrU2F2ZX0gY2xhc3NOYW1lPVwiY29sIHMxMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8U2luZ2xlSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlPXsndGV4dCd9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnVGl0bGUnfVxuICAgICAgICAgICAgICAgICAgICBpZD17J2RvY1RpdGxlJ31cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17J2RvY1RpdGxlJ31cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnN0YXRlLmRvY1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J1RpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsnYWdlUmFuZ2UnfVxuICAgICAgICAgICAgICAgICAgICBpZD17J2FjY2Vzcyd9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQWNjZXNzJ31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydDaG9vc2UgeW91ciBhZ2UgcmFuZ2UnfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUuYWNjZXNzfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17dGhpcy5zdGF0ZS5vd25lckFnZVJhbmdlU2VsZWN0aW9ufSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0RvY3VtZW50IENvbnRlbnQnfVxuICAgICAgICAgICAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgICAgICAgICAgICByZXNpemU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLnN0YXRlLmRvY0NvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydkb2NDb250ZW50J31cbiAgICAgICAgICAgICAgICAgICAgaWQ9eydkb2NDb250ZW50J31cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbEZ1bmM9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J1BsZWFzZSB0eXBlIHlvdXIgZG9jdW1lbnQgaGVyZSd9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IHdhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGxlZnRcIj5jaGVjazwvaT5idXR0b248L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbkNyZWF0ZURvY3VtZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpe1xuICByZXR1cm4ge1xuICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzIFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDcmVhdGVEb2N1bWVudCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTWFuYWdlRG9jdW1lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==