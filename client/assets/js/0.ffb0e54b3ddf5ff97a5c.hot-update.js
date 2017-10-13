webpackHotUpdate(0,{

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(116);

var _redux = __webpack_require__(128);

var _NavigationBar = __webpack_require__(49);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _SingleInput = __webpack_require__(338);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(339);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(340);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(344);

var documentActions = _interopRequireWildcard(_documentAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      email: '',
      isAuthenticated: false,
      docTitle: '',
      docContent: '',
      access: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.onClickSave = _this.onClickSave.bind(_this);
    return _this;
  }

  _createClass(Home, [{
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
      this.props.dispatch(documentActions.createDocument(doc));
    }
  }, {
    key: 'documentRow',
    value: function documentRow(document, index) {
      return _react2.default.createElement(
        'div',
        { key: index },
        document.title
      );
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
              'h1',
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
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'card bodycard' },
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              _react2.default.createElement(
                'p',
                null,
                'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-tabs' },
              _react2.default.createElement(
                'ul',
                { className: 'tabs tabs-fixed-width' },
                _react2.default.createElement(
                  'li',
                  { className: 'tab' },
                  _react2.default.createElement(
                    'a',
                    { className: 'active', href: '#test4' },
                    'Test 1'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'tab' },
                  _react2.default.createElement(
                    'a',
                    { href: '#test5' },
                    'Test 2'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'tab' },
                  _react2.default.createElement(
                    'a',
                    { href: '#test6' },
                    'Test 3'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-content grey lighten-4' },
              _react2.default.createElement(
                'div',
                { id: 'test4' },
                this.props.documents.map(this.documentRow)
              ),
              _react2.default.createElement(
                'div',
                { id: 'test5' },
                'Test 2'
              ),
              _react2.default.createElement(
                'div',
                { id: 'test6' },
                'Test 3'
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.propTypes = {
  dispatch: _react2.default.PropTypes.func.isRequired,
  document: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    documents: state.documents
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Home.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Ib21lLmpzeD9kMzBlIl0sIm5hbWVzIjpbImRvY3VtZW50QWN0aW9ucyIsIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwiZW1haWwiLCJpc0F1dGhlbnRpY2F0ZWQiLCJkb2NUaXRsZSIsImRvY0NvbnRlbnQiLCJhY2Nlc3MiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwib25DbGlja1NhdmUiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImRvYyIsInRpdGxlIiwiY29udGVudCIsImRpc3BhdGNoIiwiY3JlYXRlRG9jdW1lbnQiLCJkb2N1bWVudCIsImluZGV4IiwiaGlzdG9yeSIsIm93bmVyQWdlUmFuZ2VTZWxlY3Rpb24iLCJkb2N1bWVudHMiLCJtYXAiLCJkb2N1bWVudFJvdyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFhQSxlOzs7Ozs7Ozs7Ozs7SUFFUEMsSTs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyx1QkFBaUIsS0FGTjtBQUdYQyxnQkFBVSxFQUhDO0FBSVhDLGtCQUFZLEVBSkQ7QUFLWEMsY0FBUTtBQUxHLEtBQWI7QUFPQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtB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eUJBQVFlLGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2Q3BDLElBQTdDLEMiLCJmaWxlIjoiMC5mZmIwZTU0YjNkZGY1ZmY5N2E1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCAqICBhcyBkb2N1bWVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9kb2N1bWVudEFjdGlvbic7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgIGRvY1RpdGxlOiAnJyxcbiAgICAgIGRvY0NvbnRlbnQ6ICcnLFxuICAgICAgYWNjZXNzOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1NhdmUgPSB0aGlzLm9uQ2xpY2tTYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY1RpdGxlOiBldmVudC50YXJnZXQudmFsdWUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiBldmVudC50YXJnZXQudmFsdWUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LnZhbHVlLmFjY2Vzc1xuICAgIH0pO1xuICB9XG5cblxuICBvbkNsaWNrU2F2ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgdGl0bGU6IGV2ZW50LnRhcmdldC5kb2NUaXRsZS52YWx1ZSxcbiAgICAgIGNvbnRlbnQ6IGV2ZW50LnRhcmdldC5kb2NDb250ZW50LnZhbHVlXG4gICAgfVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZG9jdW1lbnRBY3Rpb25zLmNyZWF0ZURvY3VtZW50KChkb2MpKSlcbiAgfVxuXG4gIGRvY3VtZW50Um93KGRvY3VtZW50LCBpbmRleCkge1xuICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9Pntkb2N1bWVudC50aXRsZX08L2Rpdj5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDE+QWRkIERvY3VtZW50PC9oMT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uQ2xpY2tTYXZlfSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICAgICAgICAgIDxTaW5nbGVJbnB1dFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU9eyd0ZXh0J31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydUaXRsZSd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnZG9jVGl0bGUnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsnZG9jVGl0bGUnfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZG9jVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydhZ2VSYW5nZSd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXsnYWNjZXNzJ31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydBY2Nlc3MnfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J0Nob29zZSB5b3VyIGFnZSByYW5nZSd9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xGdW5jPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5hY2Nlc3N9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXt0aGlzLnN0YXRlLm93bmVyQWdlUmFuZ2VTZWxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnRG9jdW1lbnQgQ29udGVudCd9XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZG9jQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgICAgICAgICAgICBpZD17J2RvY0NvbnRlbnQnfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sRnVuYz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnUGxlYXNlIHR5cGUgeW91ciBkb2N1bWVudCBoZXJlJ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbGVmdFwiPmNoZWNrPC9pPmJ1dHRvbjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib2R5Y2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHA+SSBhbSBhIHZlcnkgc2ltcGxlIGNhcmQuIEkgYW0gZ29vZCBhdCBjb250YWluaW5nIHNtYWxsIGJpdHMgb2YgaW5mb3JtYXRpb24uIEkgYW0gY29udmVuaWVudCBiZWNhdXNlIEkgcmVxdWlyZSBsaXR0bGUgbWFya3VwIHRvIHVzZSBlZmZlY3RpdmVseS48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10YWJzXCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJzIHRhYnMtZml4ZWQtd2lkdGhcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgY2xhc3NOYW1lPVwiYWN0aXZlXCIgaHJlZj1cIiN0ZXN0NFwiPlRlc3QgMTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBocmVmPVwiI3Rlc3Q1XCI+VGVzdCAyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIGhyZWY9XCIjdGVzdDZcIj5UZXN0IDM8L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQgZ3JleSBsaWdodGVuLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRlc3Q0XCI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRvY3VtZW50cy5tYXAodGhpcy5kb2N1bWVudFJvdyl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidGVzdDVcIj5UZXN0IDI8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInRlc3Q2XCI+VGVzdCAzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5Ib21lLnByb3BUeXBlcyA9IHtcbiAgZGlzcGF0Y2g6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRvY3VtZW50OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKXtcbiAgcmV0dXJuIHtcbiAgICBkb2N1bWVudHM6IHN0YXRlLmRvY3VtZW50cyBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS5qc3giXSwic291cmNlUm9vdCI6IiJ9