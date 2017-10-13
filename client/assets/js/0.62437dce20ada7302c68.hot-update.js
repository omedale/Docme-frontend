webpackHotUpdate(0,{

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(8), RootInstanceProvider = __webpack_require__(9), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SingleInput = __webpack_require__(78);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _TextArea = __webpack_require__(79);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = __webpack_require__(77);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentForm = function DocumentForm(_ref) {
  var documentData = _ref.documentData,
      selectedOption = _ref.selectedOption,
      onSave = _ref.onSave,
      onChange = _ref.onChange;

  var accessType = ['Public', 'Private'];
  var options = accessType.map(function (access) {
    var index = 0;
    return {
      id: index,
      value: access
    };
    index++;
  });

  return _react2.default.createElement(
    'form',
    { onSubmit: onSave, className: 'col s12' },
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
          controlFunc: onChange,
          content: documentData.docTitle,
          placeholder: 'Title' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'input-field col s6' },
        _react2.default.createElement(_Select2.default, {
          name: 'access',
          id: 'access',
          title: 'Access',
          controlFunc: onChange,
          selectedOption: selectedOption,
          docAccess: options
        })
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
          content: documentData.docContent,
          name: 'docContent',
          id: 'docContent',
          controlFunc: onChange,
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
  );
};

DocumentForm.propTypes = {
  documentData: _react2.default.PropTypes.object.isRequired,
  onSave: _react2.default.PropTypes.func.isRequired,
  onChange: _react2.default.PropTypes.func.isRequired
};

exports.default = DocumentForm;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(10); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DocumentForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ }),

/***/ 351:
false,

/***/ 352:
false,

/***/ 353:
false,

/***/ 354:
false,

/***/ 355:
false,

/***/ 356:
false,

/***/ 357:
false,

/***/ 358:
false,

/***/ 359:
false,

/***/ 360:
false,

/***/ 361:
false,

/***/ 362:
false,

/***/ 363:
false,

/***/ 364:
false,

/***/ 365:
false,

/***/ 366:
false,

/***/ 367:
false,

/***/ 368:
false,

/***/ 369:
false,

/***/ 370:
false,

/***/ 371:
false,

/***/ 372:
false,

/***/ 373:
false,

/***/ 374:
false,

/***/ 375:
false,

/***/ 376:
false,

/***/ 377:
false,

/***/ 378:
false,

/***/ 379:
false,

/***/ 380:
false,

/***/ 381:
false,

/***/ 382:
false,

/***/ 383:
false,

/***/ 384:
false,

/***/ 385:
false,

/***/ 386:
false,

/***/ 387:
false,

/***/ 388:
false,

/***/ 389:
false,

/***/ 390:
false,

/***/ 391:
false,

/***/ 392:
false,

/***/ 393:
false,

/***/ 394:
false,

/***/ 395:
false,

/***/ 396:
false,

/***/ 397:
false,

/***/ 398:
false,

/***/ 399:
false,

/***/ 400:
false,

/***/ 401:
false,

/***/ 402:
false,

/***/ 403:
false,

/***/ 404:
false,

/***/ 405:
false,

/***/ 406:
false,

/***/ 407:
false,

/***/ 408:
false,

/***/ 409:
false,

/***/ 410:
false,

/***/ 411:
false,

/***/ 412:
false,

/***/ 413:
false,

/***/ 414:
false,

/***/ 415:
false,

/***/ 416:
false,

/***/ 417:
false,

/***/ 418:
false,

/***/ 419:
false,

/***/ 420:
false,

/***/ 421:
false,

/***/ 422:
false,

/***/ 423:
false,

/***/ 424:
false,

/***/ 425:
false,

/***/ 426:
false,

/***/ 427:
false,

/***/ 428:
false,

/***/ 429:
false,

/***/ 430:
false,

/***/ 431:
false,

/***/ 432:
false,

/***/ 433:
false,

/***/ 434:
false,

/***/ 435:
false,

/***/ 436:
false,

/***/ 437:
false,

/***/ 438:
false,

/***/ 439:
false,

/***/ 440:
false,

/***/ 441:
false,

/***/ 442:
false,

/***/ 443:
false,

/***/ 444:
false,

/***/ 445:
false,

/***/ 446:
false,

/***/ 447:
false,

/***/ 448:
false,

/***/ 449:
false,

/***/ 450:
false,

/***/ 451:
false,

/***/ 452:
false,

/***/ 453:
false,

/***/ 454:
false,

/***/ 455:
false,

/***/ 456:
false,

/***/ 457:
false,

/***/ 458:
false,

/***/ 459:
false,

/***/ 460:
false,

/***/ 461:
false,

/***/ 462:
false,

/***/ 463:
false,

/***/ 464:
false,

/***/ 465:
false,

/***/ 466:
false,

/***/ 467:
false,

/***/ 468:
false,

/***/ 469:
false,

/***/ 470:
false,

/***/ 471:
false,

/***/ 472:
false,

/***/ 473:
false,

/***/ 474:
false,

/***/ 475:
false,

/***/ 476:
false,

/***/ 477:
false,

/***/ 478:
false,

/***/ 479:
false,

/***/ 480:
false,

/***/ 481:
false,

/***/ 482:
false,

/***/ 483:
false,

/***/ 484:
false,

/***/ 485:
false,

/***/ 486:
false,

/***/ 487:
false,

/***/ 488:
false,

/***/ 489:
false,

/***/ 490:
false,

/***/ 491:
false,

/***/ 492:
false,

/***/ 493:
false,

/***/ 494:
false,

/***/ 495:
false,

/***/ 496:
false,

/***/ 497:
false,

/***/ 498:
false,

/***/ 499:
false,

/***/ 500:
false,

/***/ 501:
false,

/***/ 502:
false,

/***/ 503:
false,

/***/ 504:
false,

/***/ 505:
false,

/***/ 506:
false,

/***/ 507:
false,

/***/ 508:
false,

/***/ 509:
false,

/***/ 510:
false,

/***/ 511:
false,

/***/ 512:
false,

/***/ 513:
false,

/***/ 514:
false,

/***/ 515:
false,

/***/ 516:
false,

/***/ 517:
false,

/***/ 518:
false,

/***/ 519:
false,

/***/ 520:
false,

/***/ 521:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4PzZiYmUiXSwibmFtZXMiOlsiRG9jdW1lbnRGb3JtIiwiZG9jdW1lbnREYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJvblNhdmUiLCJvbkNoYW5nZSIsImFjY2Vzc1R5cGUiLCJvcHRpb25zIiwibWFwIiwiaW5kZXgiLCJpZCIsInZhbHVlIiwiYWNjZXNzIiwiZG9jVGl0bGUiLCJkb2NDb250ZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLE9BQXdEO0FBQUEsTUFBckRDLFlBQXFELFFBQXJEQSxZQUFxRDtBQUFBLE1BQXZDQyxjQUF1QyxRQUF2Q0EsY0FBdUM7QUFBQSxNQUF2QkMsTUFBdUIsUUFBdkJBLE1BQXVCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUMzRSxNQUFJQyxhQUFhLENBQUMsUUFBRCxFQUFXLFNBQVgsQ0FBakI7QUFDQSxNQUFNQyxVQUFVRCxXQUFXRSxHQUFYLENBQWUsa0JBQVU7QUFDdkMsUUFBSUMsUUFBUSxDQUFaO0FBQ0EsV0FBTztBQUNMQyxVQUFJRCxLQURDO0FBRUxFLGFBQU9DO0FBRkYsS0FBUDtBQUlBSDtBQUNELEdBUGUsQ0FBaEI7O0FBU0EsU0FDRTtBQUFBO0FBQUEsTUFBTSxVQUFVTCxNQUFoQixFQUF3QixXQUFVLFNBQWxDO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNFO0FBQ0UscUJBQVcsTUFEYjtBQUVFLGlCQUFPLE9BRlQ7QUFHRSxjQUFJLFVBSE47QUFJRSxnQkFBTSxVQUpSO0FBS0UsdUJBQWFDLFFBTGY7QUFNRSxtQkFBU0gsYUFBYVcsUUFOeEI7QUFPRSx1QkFBYSxPQVBmO0FBREYsT0FERjtBQVdFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUNFLGdCQUFNLFFBRFI7QUFFRSxjQUFJLFFBRk47QUFHRSxpQkFBTyxRQUhUO0FBSUUsdUJBQWFSLFFBSmY7QUFLRSwwQkFBZ0JGLGNBTGxCO0FBTUUscUJBQVdJO0FBTmI7QUFERjtBQVhGLEtBREY7QUF1QkU7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUNFO0FBQ0UsaUJBQU8sa0JBRFQ7QUFFRSxnQkFBTSxDQUZSO0FBR0Usa0JBQVEsS0FIVjtBQUlFLG1CQUFTTCxhQUFhWSxVQUp4QjtBQUtFLGdCQUFNLFlBTFI7QUFNRSxjQUFJLFlBTk47QUFPRSx1QkFBYVQsUUFQZjtBQVFFLHVCQUFhLGdDQVJmO0FBREY7QUFERixLQXZCRjtBQW9DRTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEI7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBRyxXQUFVLDhCQUFiO0FBQTRDO0FBQUE7QUFBQSxjQUFHLFdBQVUscUJBQWI7QUFBQTtBQUFBLFdBQTVDO0FBQUE7QUFBQTtBQUZGO0FBREY7QUFwQ0YsR0FERjtBQTZDRCxDQXhERDs7QUEwREFKLGFBQWFjLFNBQWIsR0FBeUI7QUFDdkJiLGdCQUFjLGdCQUFNYyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkMsVUFEZDtBQUV2QmQsVUFBUSxnQkFBTVksU0FBTixDQUFnQkcsSUFBaEIsQ0FBcUJELFVBRk47QUFHdkJiLFlBQVUsZ0JBQU1XLFNBQU4sQ0FBZ0JHLElBQWhCLENBQXFCRDtBQUhSLENBQXpCOztrQkFNZWpCLFkiLCJmaWxlIjoiMC42MjQzN2RjZTIwYWRhNzMwMmM2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaW5nbGVJbnB1dCBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1NpbmdsZUlucHV0JztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL0Zvcm1zQ29tcG9uZW50L1RleHRBcmVhJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9Gb3Jtc0NvbXBvbmVudC9TZWxlY3QnO1xuXG5jb25zdCBEb2N1bWVudEZvcm0gPSAoeyBkb2N1bWVudERhdGEsIHNlbGVjdGVkT3B0aW9uLCBvblNhdmUsIG9uQ2hhbmdlIH0pID0+IHtcbiAgbGV0IGFjY2Vzc1R5cGUgPSBbJ1B1YmxpYycsICdQcml2YXRlJ107XG4gIGNvbnN0IG9wdGlvbnMgPSBhY2Nlc3NUeXBlLm1hcChhY2Nlc3MgPT4ge1xuICAgIGxldCBpbmRleCA9IDBcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGluZGV4LFxuICAgICAgdmFsdWU6IGFjY2Vzc1xuICAgIH1cbiAgICBpbmRleCsrXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TYXZlfSBjbGFzc05hbWU9XCJjb2wgczEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgICAgIDxTaW5nbGVJbnB1dFxuICAgICAgICAgICAgaW5wdXRUeXBlPXsndGV4dCd9XG4gICAgICAgICAgICB0aXRsZT17J1RpdGxlJ31cbiAgICAgICAgICAgIGlkPXsnZG9jVGl0bGUnfVxuICAgICAgICAgICAgbmFtZT17J2RvY1RpdGxlJ31cbiAgICAgICAgICAgIGNvbnRyb2xGdW5jPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIGNvbnRlbnQ9e2RvY3VtZW50RGF0YS5kb2NUaXRsZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnVGl0bGUnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBuYW1lPXsnYWNjZXNzJ31cbiAgICAgICAgICAgIGlkPXsnYWNjZXNzJ31cbiAgICAgICAgICAgIHRpdGxlPXsnQWNjZXNzJ31cbiAgICAgICAgICAgIGNvbnRyb2xGdW5jPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICAgIGRvY0FjY2Vzcz17b3B0aW9uc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICB0aXRsZT17J0RvY3VtZW50IENvbnRlbnQnfVxuICAgICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICAgIHJlc2l6ZT17ZmFsc2V9XG4gICAgICAgICAgICBjb250ZW50PXtkb2N1bWVudERhdGEuZG9jQ29udGVudH1cbiAgICAgICAgICAgIG5hbWU9eydkb2NDb250ZW50J31cbiAgICAgICAgICAgIGlkPXsnZG9jQ29udGVudCd9XG4gICAgICAgICAgICBjb250cm9sRnVuYz17b25DaGFuZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17J1BsZWFzZSB0eXBlIHlvdXIgZG9jdW1lbnQgaGVyZSd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGxlZnRcIj5jaGVjazwvaT5idXR0b248L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbkRvY3VtZW50Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50RGF0YTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvblNhdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2N1bWVudEZvcm0uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==