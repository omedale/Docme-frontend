webpackHotUpdate(0,{

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(58);

var _redux = __webpack_require__(47);

var _reactRouterDom = __webpack_require__(24);

var _DocumentList = __webpack_require__(288);

var _DocumentList2 = _interopRequireDefault(_DocumentList);

var _SingleInput = __webpack_require__(86);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(87);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _NavigationBar = __webpack_require__(33);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _ApiCalls = __webpack_require__(44);

var _ApiCalls2 = _interopRequireDefault(_ApiCalls);

var _Select = __webpack_require__(85);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(57);

var documentActions = _interopRequireWildcard(_documentAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewDocument = function (_React$Component) {
  _inherits(ViewDocument, _React$Component);

  function ViewDocument(props) {
    _classCallCheck(this, ViewDocument);

    var _this = _possibleConstructorReturn(this, (ViewDocument.__proto__ || Object.getPrototypeOf(ViewDocument)).call(this, props));

    _this.state = {
      currentDocument: ''
    };
    return _this;
  }

  _createClass(ViewDocument, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _ApiCalls2.default.getDocument(this.props.match.params.id).then(function (document) {
        _this2.setState({
          currentDocument: document
        });
      });
      this.props.actions.AllDocuments();
    }
  }, {
    key: 'render',
    value: function render() {
      var content = '';
      if (this.state.currentDocument !== '') {
        console.log(this.state.currentDocument.data.content);
        content = this.state.currentDocument.data.content;
      }

      var documents = this.props.documents;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: '' },
          _react2.default.createElement(_NavigationBar2.default, { history: this.props.history })
        ),
        _react2.default.createElement(
          'div',
          { className: 'docContainer' },
          _react2.default.createElement(
            'div',
            { className: ' bodycard' },
            _react2.default.createElement(
              'div',
              { className: 'card-content' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'viewContainer' },
                  _react2.default.createElement(
                    'object',
                    { className: 'viewContainer', width: '400', height: '400' },
                    content,
                    _react2.default.createElement(
                      'p',
                      null,
                      'Hellow word'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Hellow word'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ViewDocument;
}(_react2.default.Component);

ViewDocument.propTypes = {};

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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ViewDocument);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ViewDocument.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9WaWV3RG9jdW1lbnQuanN4PzliM2MiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwiVmlld0RvY3VtZW50IiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnREb2N1bWVudCIsImdldERvY3VtZW50IiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInRoZW4iLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiYWN0aW9ucyIsIkFsbERvY3VtZW50cyIsImNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImRvY3VtZW50cyIsImhpc3RvcnkiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFhQSxlOzs7Ozs7Ozs7Ozs7SUFFUEMsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQjtBQUROLEtBQWI7QUFGaUI7QUFLbEI7Ozs7eUNBRW9CO0FBQUE7O0FBQ25CLHlCQUFRQyxXQUFSLENBQW9CLEtBQUtILEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0JDLEVBQTVDLEVBQWdEQyxJQUFoRCxDQUFxRCxvQkFBVztBQUM5RCxlQUFLQyxRQUFMLENBQWM7QUFDWk4sMkJBQWlCTztBQURMLFNBQWQ7QUFHRCxPQUpEO0FBS0EsV0FBS1QsS0FBTCxDQUFXVSxPQUFYLENBQW1CQyxZQUFuQjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJQyxVQUFVLEVBQWQ7QUFDQSxVQUFJLEtBQUtYLEtBQUwsQ0FBV0MsZUFBWCxLQUErQixFQUFuQyxFQUF1QztBQUNyQ1csZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLYixLQUFMLENBQVdDLGVBQVgsQ0FBMkJhLElBQTNCLENBQWdDSCxPQUE1QztBQUNBQSxrQkFBVSxLQUFLWCxLQUFMLENBQVdDLGVBQVgsQ0FBMkJhLElBQTNCLENBQWdDSCxPQUExQztBQUNEOztBQUxNLFVBUUNJLFNBUkQsR0FRZSxLQUFLaEIsS0FScEIsQ0FRQ2dCLFNBUkQ7O0FBU1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEVBQWY7QUFDRSxtRUFBZSxTQUFTLEtBQUtoQixLQUFMLENBQVdpQixPQUFuQztBQURGLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNBO0FBQUE7QUFBQSxvQkFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQVEsV0FBVSxlQUFsQixFQUFrQyxPQUFNLEtBQXhDLEVBQThDLFFBQU8sS0FBckQ7QUFDR0wsMkJBREg7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBREY7QUFEQTtBQURGO0FBREY7QUFERjtBQUpGLE9BREY7QUFzQkQ7Ozs7RUFoRHdCLGdCQUFNTSxTOztBQWtEakNuQixhQUFhb0IsU0FBYixHQUF5QixFQUF6Qjs7QUFJQSxTQUFTQyxlQUFULENBQXlCbkIsS0FBekIsRUFBZ0NvQixRQUFoQyxFQUEwQztBQUN4QyxTQUFPO0FBQ0xMLGVBQVdmLE1BQU1lO0FBRFosR0FBUDtBQUdEOztBQUVELFNBQVNNLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxTQUFPO0FBQ0xiLGFBQVMsK0JBQW1CWixlQUFuQixFQUFvQ3lCLFFBQXBDO0FBREosR0FBUDtBQUdEOztrQkFFYyx5QkFBUUgsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDdkIsWUFBN0MsQyIsImZpbGUiOiIwLjI4MDQ5YWMwMGY0MWZiYTYwMTI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IExpbmssIFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgRG9jdW1lbnRMaXN0IGZyb20gJy4vRG9jdW1lbnRMaXN0JztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgQXBpQ2FsbCBmcm9tICcuLi91dGlsL0FwaUNhbGxzJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgKiAgYXMgZG9jdW1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZG9jdW1lbnRBY3Rpb24nO1xuXG5jbGFzcyBWaWV3RG9jdW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudERvY3VtZW50OiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBBcGlDYWxsLmdldERvY3VtZW50KHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKS50aGVuKGRvY3VtZW50ID0+e1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnREb2N1bWVudDogZG9jdW1lbnRcbiAgICAgIH0pXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuQWxsRG9jdW1lbnRzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSAnJ1xuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnREb2N1bWVudCAhPT0gJycpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY3VycmVudERvY3VtZW50LmRhdGEuY29udGVudClcbiAgICAgIGNvbnRlbnQgPSB0aGlzLnN0YXRlLmN1cnJlbnREb2N1bWVudC5kYXRhLmNvbnRlbnQ7XG4gICAgfVxuXG5cbiAgICBjb25zdCB7IGRvY3VtZW50cyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYm9keWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxvYmplY3QgY2xhc3NOYW1lPVwidmlld0NvbnRhaW5lclwiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICAgICAgICAgIDxwPkhlbGxvdyB3b3JkPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+SGVsbG93IHdvcmQ8L3A+XG4gICAgICAgICAgICAgICAgPC9vYmplY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuVmlld0RvY3VtZW50LnByb3BUeXBlcyA9IHtcblxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGRvY3VtZW50QWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlld0RvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9WaWV3RG9jdW1lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==