webpackHotUpdate(0,{

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(53);

var _redux = __webpack_require__(41);

var _NavigationBar = __webpack_require__(31);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _DocumentForm = __webpack_require__(282);

var _DocumentForm2 = _interopRequireDefault(_DocumentForm);

var _SingleInput = __webpack_require__(78);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(79);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(77);

var _Select2 = _interopRequireDefault(_Select);

var _documentAction = __webpack_require__(52);

var documentActions = _interopRequireWildcard(_documentAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ManageDocument = function (_React$Component) {
  _inherits(ManageDocument, _React$Component);

  function ManageDocument(props) {
    _classCallCheck(this, ManageDocument);

    var _this = _possibleConstructorReturn(this, (ManageDocument.__proto__ || Object.getPrototypeOf(ManageDocument)).call(this, props));

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

  _createClass(ManageDocument, [{
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
        content: event.target.docContent.value,
        access: event.target.access.value
        // this.props.actions.createDocument(doc);
      };
    }
  }, {
    key: 'render',
    value: function render() {

      var documentData = {
        docTitle: this.state.docTitle,
        docContent: this.state.docContent,
        access: this.state.access
      };
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
            _react2.default.createElement(_DocumentForm2.default, {
              selectedOption: this.state.access,
              documentData: documentData,
              onSave: this.onClickSave,
              onChange: this.handleChange
            })
          )
        )
      );
    }
  }]);

  return ManageDocument;
}(_react2.default.Component);

ManageDocument.propTypes = {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ManageDocument);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ManageDocument.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwidGl0bGUiLCJjb250ZW50IiwiZG9jdW1lbnREYXRhIiwiaGlzdG9yeSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFjdGlvbnMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRzIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBYUEsZTs7Ozs7Ozs7Ozs7O0lBRVBDLGM7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxrQkFBWSxFQUhEO0FBSVhDLGNBQVE7QUFKRyxLQUFiO0FBTUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFUaUI7QUFVbEI7Ozs7aUNBRVlFLEssRUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFDWlAsa0JBQVVNLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlQsUUFEakI7QUFFWkMsb0JBQVlLLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlIsVUFGbkI7QUFHWkMsZ0JBQVFJLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlA7QUFIZixPQUFkO0FBS0Q7OztnQ0FJV0ksSyxFQUFPO0FBQ2pCQSxZQUFNSSxjQUFOO0FBQ0EsVUFBTUMsTUFBTTtBQUNWQyxlQUFPTixNQUFNRSxNQUFOLENBQWFSLFFBQWIsQ0FBc0JTLEtBRG5CO0FBRVZJLGlCQUFTUCxNQUFNRSxNQUFOLENBQWFQLFVBQWIsQ0FBd0JRLEtBRnZCO0FBR1ZQLGdCQUFRSSxNQUFNRSxNQUFOLENBQWFOLE1BQWIsQ0FBb0JPO0FBRTlCO0FBTFksT0FBWjtBQU1EOzs7NkJBRVE7O0FBRVAsVUFBTUssZUFBZTtBQUNuQmQsa0JBQVUsS0FBS0YsS0FBTCxDQUFXRSxRQURGO0FBRW5CQyxvQkFBWSxLQUFLSCxLQUFMLENBQVdHLFVBRko7QUFHbkJDLGdCQUFRLEtBQUtKLEtBQUwsQ0FBV0k7QUFIQSxPQUFyQjtBQUtBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0UsbUVBQWUsU0FBUyxLQUFLTCxLQUFMLENBQVdrQixPQUFuQztBQURGLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUNBLDhCQUFnQixLQUFLakIsS0FBTCxDQUFXSSxNQUQzQjtBQUVBLDRCQUFjWSxZQUZkO0FBR0Esc0JBQVEsS0FBS1QsV0FIYjtBQUlBLHdCQUFVLEtBQUtGO0FBSmY7QUFGRjtBQURGO0FBSkYsT0FERjtBQWtCRDs7OztFQTFEMEIsZ0JBQU1hLFM7O0FBNERuQ3BCLGVBQWVxQixTQUFmLEdBQTJCO0FBQ3pCQyxXQUFTLGdCQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEUDtBQUV6QkMsYUFBVyxnQkFBTUgsU0FBTixDQUFnQkksS0FBaEIsQ0FBc0JGO0FBRlIsQ0FBM0I7O0FBS0EsU0FBU0csZUFBVCxDQUF5QjFCLEtBQXpCLEVBQWdDMkIsUUFBaEMsRUFBeUM7QUFDdkMsU0FBTztBQUNMSCxlQUFXeEIsTUFBTXdCO0FBRFosR0FBUDtBQUdEOztBQUVELFNBQVNJLGtCQUFULENBQTRCQyxRQUE1QixFQUFzQztBQUNwQyxTQUFPO0FBQ0xULGFBQVMsK0JBQW1CdkIsZUFBbkIsRUFBb0NnQyxRQUFwQztBQURKLEdBQVA7QUFHRDs7a0JBRWMseUJBQVFILGVBQVIsRUFBeUJFLGtCQUF6QixFQUE2QzlCLGNBQTdDLEMiLCJmaWxlIjoiMC5mM2NjMmIxOWU1NGI4NTU0YWRmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtiaW5kQWN0aW9uQ3JlYXRvcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4vTmF2aWdhdGlvbkJhcic7XG5pbXBvcnQgRG9jdW1lbnRGb3JtIGZyb20gJy4vRG9jdW1lbnRGb3JtJztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0ICogIGFzIGRvY3VtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2RvY3VtZW50QWN0aW9uJztcblxuY2xhc3MgTWFuYWdlRG9jdW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgZG9jVGl0bGU6ICcnLFxuICAgICAgZG9jQ29udGVudDogJycsXG4gICAgICBhY2Nlc3M6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrU2F2ZSA9IHRoaXMub25DbGlja1NhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZG9jVGl0bGU6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiBldmVudC50YXJnZXQudmFsdWUuYWNjZXNzXG4gICAgfSk7XG4gIH1cblxuXG5cbiAgb25DbGlja1NhdmUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRvYyA9IHtcbiAgICAgIHRpdGxlOiBldmVudC50YXJnZXQuZG9jVGl0bGUudmFsdWUsXG4gICAgICBjb250ZW50OiBldmVudC50YXJnZXQuZG9jQ29udGVudC52YWx1ZSxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LmFjY2Vzcy52YWx1ZVxuICAgIH1cbiAgICAvLyB0aGlzLnByb3BzLmFjdGlvbnMuY3JlYXRlRG9jdW1lbnQoZG9jKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBjb25zdCBkb2N1bWVudERhdGEgPSB7XG4gICAgICBkb2NUaXRsZTogdGhpcy5zdGF0ZS5kb2NUaXRsZSxcbiAgICAgIGRvY0NvbnRlbnQ6IHRoaXMuc3RhdGUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogdGhpcy5zdGF0ZS5hY2Nlc3MsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoMz5BZGQgRG9jdW1lbnQ8L2gzPlxuICAgICAgICAgICAgPERvY3VtZW50Rm9ybVxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb249e3RoaXMuc3RhdGUuYWNjZXNzfVxuICAgICAgICAgICAgZG9jdW1lbnREYXRhPXtkb2N1bWVudERhdGF9XG4gICAgICAgICAgICBvblNhdmU9e3RoaXMub25DbGlja1NhdmV9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbk1hbmFnZURvY3VtZW50LnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkb2N1bWVudHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpe1xuICByZXR1cm4ge1xuICAgIGRvY3VtZW50czogc3RhdGUuZG9jdW1lbnRzIFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoZG9jdW1lbnRBY3Rpb25zLCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYW5hZ2VEb2N1bWVudCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvTWFuYWdlRG9jdW1lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==