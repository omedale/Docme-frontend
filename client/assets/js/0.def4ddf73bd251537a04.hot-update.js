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
  getToken: function getToken(token) {
    return localStorage.getItem('UserAccessToken');
  },
  verifyToken: function verifyToken(token) {
    var data = { token: token };
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:8080/api/v1/users/auth/verifyaccess', data).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  }
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ApiCalls.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbIlJlZ2lzdGVyVXNlciIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwiTG9naW5Vc2VyIiwic2F2ZVRva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwidmVyaWZ5VG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ2JBLGdCQUFjLHNCQUFDQyxJQUFELEVBQVU7QUFDdEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHNCQUFNQyxJQUFOLENBQVcsa0RBQVgsRUFBK0RKLElBQS9ELEVBQ0NLLElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDYkosZ0JBQVFJLEdBQVI7QUFDRCxPQUhELEVBSUNDLEtBSkQsQ0FJTyxVQUFDQyxLQUFELEVBQVc7QUFDaEJMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQU5EO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0FYWTtBQVliQyxhQUFXLG1CQUFDVixJQUFELEVBQVU7QUFDbkIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHNCQUFNQyxJQUFOLENBQVcsK0NBQVgsRUFBNERKLElBQTVELEVBQ0NLLElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDYkosZ0JBQVFJLEdBQVI7QUFDRCxPQUhELEVBSUNDLEtBSkQsQ0FJTyxVQUFDQyxLQUFELEVBQVc7QUFDaEJMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQU5EO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0F0Qlk7QUF1QmJFLGFBQVcsbUJBQUNDLEtBQUQsRUFBVztBQUNwQkMsaUJBQWFDLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDRixLQUF4QztBQUNELEdBekJZO0FBMEJiRyxZQUFVLGtCQUFDSCxLQUFELEVBQVc7QUFDbkIsV0FBT0MsYUFBYUcsT0FBYixDQUFxQixpQkFBckIsQ0FBUDtBQUNELEdBNUJZO0FBNkJiQyxlQUFhLHFCQUFDTCxLQUFELEVBQVc7QUFDdEIsUUFBTVosT0FBTyxFQUFDWSxZQUFELEVBQWI7QUFDQSxXQUFPLElBQUlYLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsc0JBQU1DLElBQU4sQ0FBVyxzREFBWCxFQUFtRUosSUFBbkUsRUFDQ0ssSUFERCxDQUNNLFVBQUNDLEdBQUQsRUFBUztBQUNiSixnQkFBUUksR0FBUjtBQUNELE9BSEQsRUFJQ0MsS0FKRCxDQUlPLFVBQUNDLEtBQUQsRUFBVztBQUNoQkwsZUFBT0ssTUFBTUMsUUFBYjtBQUNELE9BTkQ7QUFPRCxLQVJNLENBQVA7QUFTRDtBQXhDWSxDIiwiZmlsZSI6IjAuZGVmNGRkZjczYmQyNTE1MzdhMDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUmVnaXN0ZXJVc2VyOiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL3VzZXJzL2F1dGgvcmVnaXN0ZXInLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIExvZ2luVXNlcjogKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS91c2Vycy9hdXRoL2xvZ2luJywgZGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBzYXZlVG9rZW46ICh0b2tlbikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nLCB0b2tlbik7XG4gIH0sXG4gIGdldFRva2VuOiAodG9rZW4pID0+IHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICB9LFxuICB2ZXJpZnlUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHt0b2tlbn07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvdXNlcnMvYXV0aC92ZXJpZnlhY2Nlc3MnLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=