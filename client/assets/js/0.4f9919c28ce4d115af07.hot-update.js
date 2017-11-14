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
        var parser = void 0,
            xmlDoc = void 0;
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(this.state.currentDocument.data.content, "text/xml");
        var child = element.documentElement.querySelector('body').firstChild;
        console.log(child);
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
                    content
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9WaWV3RG9jdW1lbnQuanN4PzliM2MiXSwibmFtZXMiOlsiZG9jdW1lbnRBY3Rpb25zIiwiVmlld0RvY3VtZW50IiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnREb2N1bWVudCIsImdldERvY3VtZW50IiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsInRoZW4iLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiYWN0aW9ucyIsIkFsbERvY3VtZW50cyIsImNvbnRlbnQiLCJwYXJzZXIiLCJ4bWxEb2MiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJkYXRhIiwiY2hpbGQiLCJlbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcnN0Q2hpbGQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnRzIiwiaGlzdG9yeSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm93blByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQWFBLGU7Ozs7Ozs7Ozs7OztJQUVQQyxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsdUJBQWlCO0FBRE4sS0FBYjtBQUZpQjtBQUtsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFDbkIseUJBQVFDLFdBQVIsQ0FBb0IsS0FBS0gsS0FBTCxDQUFXSSxLQUFYLENBQWlCQyxNQUFqQixDQUF3QkMsRUFBNUMsRUFBZ0RDLElBQWhELENBQXFELG9CQUFXO0FBQzlELGVBQUtDLFFBQUwsQ0FBYztBQUNaTiwyQkFBaUJPO0FBREwsU0FBZDtBQUdELE9BSkQ7QUFLQSxXQUFLVCxLQUFMLENBQVdVLE9BQVgsQ0FBbUJDLFlBQW5CO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUlDLFVBQVUsRUFBZDtBQUNBLFVBQUksS0FBS1gsS0FBTCxDQUFXQyxlQUFYLEtBQStCLEVBQW5DLEVBQXVDO0FBQ3JDLFlBQUlXLGVBQUo7QUFBQSxZQUFZQyxlQUFaO0FBQ0FELGlCQUFTLElBQUlFLFNBQUosRUFBVDtBQUNBRCxpQkFBU0QsT0FBT0csZUFBUCxDQUF1QixLQUFLZixLQUFMLENBQVdDLGVBQVgsQ0FBMkJlLElBQTNCLENBQWdDTCxPQUF2RCxFQUFnRSxVQUFoRSxDQUFUO0FBQ0EsWUFBTU0sUUFBUUMsUUFBUUMsZUFBUixDQUF3QkMsYUFBeEIsQ0FBc0MsTUFBdEMsRUFBOENDLFVBQTVEO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlOLEtBQVo7QUFDQU4sa0JBQVUsS0FBS1gsS0FBTCxDQUFXQyxlQUFYLENBQTJCZSxJQUEzQixDQUFnQ0wsT0FBMUM7QUFDRDs7QUFUTSxVQVlDYSxTQVpELEdBWWUsS0FBS3pCLEtBWnBCLENBWUN5QixTQVpEOztBQWFQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxFQUFmO0FBQ0UsbUVBQWUsU0FBUyxLQUFLekIsS0FBTCxDQUFXMEIsT0FBbkM7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLEtBQWY7QUFDQTtBQUFBO0FBQUEsb0JBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFRLFdBQVUsZUFBbEIsRUFBa0MsT0FBTSxLQUF4QyxFQUE4QyxRQUFPLEtBQXJEO0FBQ0dkO0FBREg7QUFERjtBQURBO0FBREY7QUFERjtBQURGO0FBSkYsT0FERjtBQW9CRDs7OztFQWxEd0IsZ0JBQU1lLFM7O0FBb0RqQzVCLGFBQWE2QixTQUFiLEdBQXlCLEVBQXpCOztBQUlBLFNBQVNDLGVBQVQsQ0FBeUI1QixLQUF6QixFQUFnQzZCLFFBQWhDLEVBQTBDO0FBQ3hDLFNBQU87QUFDTEwsZUFBV3hCLE1BQU13QjtBQURaLEdBQVA7QUFHRDs7QUFFRCxTQUFTTSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMdEIsYUFBUywrQkFBbUJaLGVBQW5CLEVBQW9Da0MsUUFBcEM7QUFESixHQUFQO0FBR0Q7O2tCQUVjLHlCQUFRSCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNoQyxZQUE3QyxDIiwiZmlsZSI6IjAuNGY5OTE5YzI4Y2U0ZDExNWFmMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTGluaywgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBEb2N1bWVudExpc3QgZnJvbSAnLi9Eb2N1bWVudExpc3QnO1xuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2luZ2xlSW5wdXQnO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vRm9ybXNDb21wb25lbnQvVGV4dEFyZWEnO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi9OYXZpZ2F0aW9uQmFyJztcbmltcG9ydCBBcGlDYWxsIGZyb20gJy4uL3V0aWwvQXBpQ2FsbHMnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCAqICBhcyBkb2N1bWVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9kb2N1bWVudEFjdGlvbic7XG5cbmNsYXNzIFZpZXdEb2N1bWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50RG9jdW1lbnQ6ICcnXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIEFwaUNhbGwuZ2V0RG9jdW1lbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpLnRoZW4oZG9jdW1lbnQgPT57XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudERvY3VtZW50OiBkb2N1bWVudFxuICAgICAgfSlcbiAgICB9KVxuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5BbGxEb2N1bWVudHMoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudCA9ICcnXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudERvY3VtZW50ICE9PSAnJykge1xuICAgICAgbGV0IHBhcnNlciwgeG1sRG9jO1xuICAgICAgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh0aGlzLnN0YXRlLmN1cnJlbnREb2N1bWVudC5kYXRhLmNvbnRlbnQsIFwidGV4dC94bWxcIik7XG4gICAgICBjb25zdCBjaGlsZCA9IGVsZW1lbnQuZG9jdW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5maXJzdENoaWxkO1xuICAgICAgY29uc29sZS5sb2coY2hpbGQpXG4gICAgICBjb250ZW50ID0gdGhpcy5zdGF0ZS5jdXJyZW50RG9jdW1lbnQuZGF0YS5jb250ZW50O1xuICAgIH1cblxuXG4gICAgY29uc3QgeyBkb2N1bWVudHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbkJhciBoaXN0b3J5PXt0aGlzLnByb3BzLmhpc3Rvcnl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJvZHljYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8b2JqZWN0IGNsYXNzTmFtZT1cInZpZXdDb250YWluZXJcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjQwMFwiPlxuICAgICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9vYmplY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuVmlld0RvY3VtZW50LnByb3BUeXBlcyA9IHtcblxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKGRvY3VtZW50QWN0aW9ucywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlld0RvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9WaWV3RG9jdW1lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==