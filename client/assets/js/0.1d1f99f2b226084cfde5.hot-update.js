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
      };
      console.log(doc);
      this.props.actions.saveDocuments(doc).then(function (res) {
        console.log;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3g/ZTIwNCJdLCJuYW1lcyI6WyJkb2N1bWVudEFjdGlvbnMiLCJNYW5hZ2VEb2N1bWVudCIsInByb3BzIiwic3RhdGUiLCJlbWFpbCIsImRvY1RpdGxlIiwiZG9jQ29udGVudCIsImFjY2VzcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJvbkNsaWNrU2F2ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZG9jIiwidGl0bGUiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsImFjdGlvbnMiLCJzYXZlRG9jdW1lbnRzIiwidGhlbiIsImRvY3VtZW50RGF0YSIsImhpc3RvcnkiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZG9jdW1lbnRzIiwiYXJyYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJvd25Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBYUEsZTs7Ozs7Ozs7Ozs7O0lBRVBDLGM7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxrQkFBWSxFQUhEO0FBSVhDLGNBQVE7QUFKRyxLQUFiO0FBTUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFUaUI7QUFVbEI7Ozs7aUNBRVlFLEssRUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWM7QUFDWlAsa0JBQVVNLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlQsUUFEakI7QUFFWkMsb0JBQVlLLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlIsVUFGbkI7QUFHWkMsZ0JBQVFJLE1BQU1FLE1BQU4sQ0FBYUMsS0FBYixDQUFtQlA7QUFIZixPQUFkO0FBS0Q7OztnQ0FJV0ksSyxFQUFPO0FBQ2pCQSxZQUFNSSxjQUFOO0FBQ0EsVUFBTUMsTUFBTTtBQUNWQyxlQUFPTixNQUFNRSxNQUFOLENBQWFSLFFBQWIsQ0FBc0JTLEtBRG5CO0FBRVZJLGlCQUFTUCxNQUFNRSxNQUFOLENBQWFQLFVBQWIsQ0FBd0JRLEtBRnZCO0FBR1ZQLGdCQUFRSSxNQUFNRSxNQUFOLENBQWFOLE1BQWIsQ0FBb0JPO0FBSGxCLE9BQVo7QUFLQUssY0FBUUMsR0FBUixDQUFZSixHQUFaO0FBQ0EsV0FBS2QsS0FBTCxDQUFXbUIsT0FBWCxDQUFtQkMsYUFBbkIsQ0FBaUNOLEdBQWpDLEVBQXNDTyxJQUF0QyxDQUEyQyxlQUFPO0FBQ2hESixnQkFBUUMsR0FBUjtBQUNELE9BRkQ7QUFHRDs7OzZCQUVROztBQUVQLFVBQU1JLGVBQWU7QUFDbkJuQixrQkFBVSxLQUFLRixLQUFMLENBQVdFLFFBREY7QUFFbkJDLG9CQUFZLEtBQUtILEtBQUwsQ0FBV0csVUFGSjtBQUduQkMsZ0JBQVEsS0FBS0osS0FBTCxDQUFXSTtBQUhBLE9BQXJCO0FBS0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFdBQWY7QUFDRSxtRUFBZSxTQUFTLEtBQUtMLEtBQUwsQ0FBV3VCLE9BQW5DO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQ0EsOEJBQWdCLEtBQUt0QixLQUFMLENBQVdJLE1BRDNCO0FBRUEsNEJBQWNpQixZQUZkO0FBR0Esc0JBQVEsS0FBS2QsV0FIYjtBQUlBLHdCQUFVLEtBQUtGO0FBSmY7QUFGRjtBQURGO0FBSkYsT0FERjtBQWtCRDs7OztFQTdEMEIsZ0JBQU1rQixTOztBQStEbkN6QixlQUFlMEIsU0FBZixHQUEyQjtBQUN6Qk4sV0FBUyxnQkFBTU8sU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBRFA7QUFFekJDLGFBQVcsZ0JBQU1ILFNBQU4sQ0FBZ0JJLEtBQWhCLENBQXNCRjtBQUZSLENBQTNCOztBQUtBLFNBQVNHLGVBQVQsQ0FBeUI5QixLQUF6QixFQUFnQytCLFFBQWhDLEVBQXlDO0FBQ3ZDLFNBQU87QUFDTEgsZUFBVzVCLE1BQU00QjtBQURaLEdBQVA7QUFHRDs7QUFFRCxTQUFTSSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTztBQUNMZixhQUFTLCtCQUFtQnJCLGVBQW5CLEVBQW9Db0MsUUFBcEM7QUFESixHQUFQO0FBR0Q7O2tCQUVjLHlCQUFRSCxlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkNsQyxjQUE3QyxDIiwiZmlsZSI6IjAuMWQxZjk5ZjJiMjI2MDg0Y2ZkZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuL05hdmlnYXRpb25CYXInO1xuaW1wb3J0IERvY3VtZW50Rm9ybSBmcm9tICcuL0RvY3VtZW50Rm9ybSc7XG5pbXBvcnQgU2luZ2xlSW5wdXQgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TaW5nbGVJbnB1dCc7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9UZXh0QXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vRm9ybXNDb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCAqICBhcyBkb2N1bWVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9kb2N1bWVudEFjdGlvbic7XG5cbmNsYXNzIE1hbmFnZURvY3VtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGRvY1RpdGxlOiAnJyxcbiAgICAgIGRvY0NvbnRlbnQ6ICcnLFxuICAgICAgYWNjZXNzOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DbGlja1NhdmUgPSB0aGlzLm9uQ2xpY2tTYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRvY1RpdGxlOiBldmVudC50YXJnZXQudmFsdWUuZG9jVGl0bGUsXG4gICAgICBkb2NDb250ZW50OiBldmVudC50YXJnZXQudmFsdWUuZG9jQ29udGVudCxcbiAgICAgIGFjY2VzczogZXZlbnQudGFyZ2V0LnZhbHVlLmFjY2Vzc1xuICAgIH0pO1xuICB9XG5cblxuXG4gIG9uQ2xpY2tTYXZlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkb2MgPSB7XG4gICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LmRvY1RpdGxlLnZhbHVlLFxuICAgICAgY29udGVudDogZXZlbnQudGFyZ2V0LmRvY0NvbnRlbnQudmFsdWUsXG4gICAgICBhY2Nlc3M6IGV2ZW50LnRhcmdldC5hY2Nlc3MudmFsdWVcbiAgICB9XG4gICAgY29uc29sZS5sb2coZG9jKVxuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5zYXZlRG9jdW1lbnRzKGRvYykudGhlbihyZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2dcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIGNvbnN0IGRvY3VtZW50RGF0YSA9IHtcbiAgICAgIGRvY1RpdGxlOiB0aGlzLnN0YXRlLmRvY1RpdGxlLFxuICAgICAgZG9jQ29udGVudDogdGhpcy5zdGF0ZS5kb2NDb250ZW50LFxuICAgICAgYWNjZXNzOiB0aGlzLnN0YXRlLmFjY2VzcyxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPE5hdmlnYXRpb25CYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGgzPkFkZCBEb2N1bWVudDwvaDM+XG4gICAgICAgICAgICA8RG9jdW1lbnRGb3JtXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbj17dGhpcy5zdGF0ZS5hY2Nlc3N9XG4gICAgICAgICAgICBkb2N1bWVudERhdGE9e2RvY3VtZW50RGF0YX1cbiAgICAgICAgICAgIG9uU2F2ZT17dGhpcy5vbkNsaWNrU2F2ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuTWFuYWdlRG9jdW1lbnQucHJvcFR5cGVzID0ge1xuICBhY3Rpb25zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyl7XG4gIHJldHVybiB7XG4gICAgZG9jdW1lbnRzOiBzdGF0ZS5kb2N1bWVudHMgXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhkb2N1bWVudEFjdGlvbnMsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1hbmFnZURvY3VtZW50KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9NYW5hZ2VEb2N1bWVudC5qc3giXSwic291cmNlUm9vdCI6IiJ9