webpackHotUpdate(0,{

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(14), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(273);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  RegisterUser: function RegisterUser(data) {
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:8080/api/v1/users/auth/register', data).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },
  LoginUser: function LoginUser(data) {
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:8080/api/v1/users/auth/login', data).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },
  saveToken: function saveToken(token) {
    localStorage.setItem('UserAccessToken', token);
  },
  verifyToken: function verifyToken(token) {}
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ApiCalls.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbIlJlZ2lzdGVyVXNlciIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwiTG9naW5Vc2VyIiwic2F2ZVRva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidmVyaWZ5VG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ2JBLGdCQUFjLHNCQUFDQyxJQUFELEVBQVU7QUFDdEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHNCQUFNQyxJQUFOLENBQVcsa0RBQVgsRUFBK0RKLElBQS9ELEVBQ0NLLElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDYkosZ0JBQVFJLEdBQVI7QUFDRCxPQUhELEVBSUNDLEtBSkQsQ0FJTyxVQUFDQyxLQUFELEVBQVc7QUFDaEJMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQU5EO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0FYWTtBQVliQyxhQUFXLG1CQUFDVixJQUFELEVBQVU7QUFDbkIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHNCQUFNQyxJQUFOLENBQVcsK0NBQVgsRUFBNERKLElBQTVELEVBQ0NLLElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDYkosZ0JBQVFJLEdBQVI7QUFDRCxPQUhELEVBSUNDLEtBSkQsQ0FJTyxVQUFDQyxLQUFELEVBQVc7QUFDaEJMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQU5EO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0F0Qlk7QUF1QmJFLGFBQVcsbUJBQUNDLEtBQUQsRUFBVztBQUNwQkMsaUJBQWFDLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDRixLQUF4QztBQUNELEdBekJZO0FBMEJiRyxlQUFhLHFCQUFDSCxLQUFELEVBQVcsQ0FFdkI7QUE1QlksQyIsImZpbGUiOiIwLmU2ZGU0NTAyYWNmMGMzYWFmZWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFJlZ2lzdGVyVXNlcjogKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS91c2Vycy9hdXRoL3JlZ2lzdGVyJywgZGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBMb2dpblVzZXI6IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvdXNlcnMvYXV0aC9sb2dpbicsIGRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc2F2ZVRva2VuOiAodG9rZW4pID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJywgdG9rZW4pO1xuICB9LFxuICB2ZXJpZnlUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlsL0FwaUNhbGxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==