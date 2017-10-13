webpackHotUpdate(0,{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(14), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(40);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  RegisterUser: function RegisterUser(data) {
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:8080/register', data).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },
  LoginUser: function LoginUser(data) {
    console.og;
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:3000/login', data).then(function (res) {
        console.log(res);
        resolve(res);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },
  saveToken: function saveToken(token) {
    localStorage.removeItem('UserAccessToken');
    localStorage.setItem('UserAccessToken', token);
    localStorage.setItem('authenticated', true);
  },
  logUserOut: function logUserOut() {
    localStorage.removeItem('UserAccessToken');
  },
  getToken: function getToken() {
    return localStorage.getItem('UserAccessToken');
  },
  verifyToken: function verifyToken(token) {
    var data = { token: token };
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:3000/verifyaccess', data).then(function (res) {
        console.log(res);
        resolve(res);
      }).catch(function (error) {
        console.log(error);
        reject(error.response);
      });
    });
  }
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ApiCalls.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module), __webpack_require__(4)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbIlJlZ2lzdGVyVXNlciIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwiTG9naW5Vc2VyIiwiY29uc29sZSIsIm9nIiwibG9nIiwic2F2ZVRva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImxvZ1VzZXJPdXQiLCJnZXRUb2tlbiIsImdldEl0ZW0iLCJ2ZXJpZnlUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsZ0JBQWMsc0JBQUNDLElBQUQsRUFBVTtBQUN0QixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsc0JBQU1DLElBQU4sQ0FBVyxnQ0FBWCxFQUE2Q0osSUFBN0MsRUFDQ0ssSUFERCxDQUNNLFVBQUNDLEdBQUQsRUFBUztBQUNiSixnQkFBUUksR0FBUjtBQUNELE9BSEQsRUFJQ0MsS0FKRCxDQUlPLFVBQUNDLEtBQUQsRUFBVztBQUNoQkwsZUFBT0ssTUFBTUMsUUFBYjtBQUNELE9BTkQ7QUFPRCxLQVJNLENBQVA7QUFTRCxHQVhZO0FBWWJDLGFBQVcsbUJBQUNWLElBQUQsRUFBVTtBQUNuQlcsWUFBUUMsRUFBUjtBQUNBLFdBQU8sSUFBSVgsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLDZCQUFYLEVBQTBDSixJQUExQyxFQUNDSyxJQURELENBQ00sVUFBQ0MsR0FBRCxFQUFTO0FBQ2JLLGdCQUFRRSxHQUFSLENBQVlQLEdBQVo7QUFDQUosZ0JBQVFJLEdBQVI7QUFDRCxPQUpELEVBS0NDLEtBTEQsQ0FLTyxVQUFDQyxLQUFELEVBQVc7QUFDaEJMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQVBEO0FBUUQsS0FUTSxDQUFQO0FBVUQsR0F4Qlk7QUF5QmJLLGFBQVcsbUJBQUNDLEtBQUQsRUFBVztBQUNwQkMsaUJBQWFDLFVBQWIsQ0FBd0IsaUJBQXhCO0FBQ0FELGlCQUFhRSxPQUFiLENBQXFCLGlCQUFyQixFQUF3Q0gsS0FBeEM7QUFDQUMsaUJBQWFFLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0MsSUFBdEM7QUFDRCxHQTdCWTtBQThCYkMsY0FBWSxzQkFBTTtBQUNoQkgsaUJBQWFDLFVBQWIsQ0FBd0IsaUJBQXhCO0FBQ0QsR0FoQ1k7QUFpQ2JHLFlBQVUsb0JBQU07QUFDZCxXQUFPSixhQUFhSyxPQUFiLENBQXFCLGlCQUFyQixDQUFQO0FBQ0QsR0FuQ1k7QUFvQ2JDLGVBQWEscUJBQUNQLEtBQUQsRUFBVztBQUN0QixRQUFNZixPQUFPLEVBQUNlLFlBQUQsRUFBYjtBQUNBLFdBQU8sSUFBSWQsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLG9DQUFYLEVBQWlESixJQUFqRCxFQUNDSyxJQURELENBQ00sVUFBQ0MsR0FBRCxFQUFTO0FBQ2JLLGdCQUFRRSxHQUFSLENBQVlQLEdBQVo7QUFDQUosZ0JBQVFJLEdBQVI7QUFDRCxPQUpELEVBS0NDLEtBTEQsQ0FLTyxVQUFDQyxLQUFELEVBQVc7QUFDaEJHLGdCQUFRRSxHQUFSLENBQVlMLEtBQVo7QUFDQUwsZUFBT0ssTUFBTUMsUUFBYjtBQUNELE9BUkQ7QUFTRCxLQVZNLENBQVA7QUFXRDtBQWpEWSxDIiwiZmlsZSI6IjAuMjg5YmQyZDdjNGY2YzQ1ZWUzZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUmVnaXN0ZXJVc2VyOiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvcmVnaXN0ZXInLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIExvZ2luVXNlcjogKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLm9nXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbicsIGRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBzYXZlVG9rZW46ICh0b2tlbikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJywgdG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGVkJywgdHJ1ZSk7XG4gIH0sXG4gIGxvZ1VzZXJPdXQ6ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gIH0sXG4gIGdldFRva2VuOiAoKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgfSxcbiAgdmVyaWZ5VG9rZW46ICh0b2tlbikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7dG9rZW59O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdmVyaWZ5YWNjZXNzJywgZGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3V0aWwvQXBpQ2FsbHMuanMiXSwic291cmNlUm9vdCI6IiJ9