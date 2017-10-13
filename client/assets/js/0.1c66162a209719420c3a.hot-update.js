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
    return localStorage.get('UserAccessToken', token);
  },
  verifyToken: function verifyToken(data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbIlJlZ2lzdGVyVXNlciIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwiTG9naW5Vc2VyIiwic2F2ZVRva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0VG9rZW4iLCJnZXQiLCJ2ZXJpZnlUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYkEsZ0JBQWMsc0JBQUNDLElBQUQsRUFBVTtBQUN0QixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsc0JBQU1DLElBQU4sQ0FBVyxrREFBWCxFQUErREosSUFBL0QsRUFDQ0ssSUFERCxDQUNNLFVBQUNDLEdBQUQsRUFBUztBQUNiSixnQkFBUUksR0FBUjtBQUNELE9BSEQsRUFJQ0MsS0FKRCxDQUlPLFVBQUNDLEtBQUQsRUFBVztBQUNoQkwsZUFBT0ssTUFBTUMsUUFBYjtBQUNELE9BTkQ7QUFPRCxLQVJNLENBQVA7QUFTRCxHQVhZO0FBWWJDLGFBQVcsbUJBQUNWLElBQUQsRUFBVTtBQUNuQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsc0JBQU1DLElBQU4sQ0FBVywrQ0FBWCxFQUE0REosSUFBNUQsRUFDQ0ssSUFERCxDQUNNLFVBQUNDLEdBQUQsRUFBUztBQUNiSixnQkFBUUksR0FBUjtBQUNELE9BSEQsRUFJQ0MsS0FKRCxDQUlPLFVBQUNDLEtBQUQsRUFBVztBQUNoQkwsZUFBT0ssTUFBTUMsUUFBYjtBQUNELE9BTkQ7QUFPRCxLQVJNLENBQVA7QUFTRCxHQXRCWTtBQXVCYkUsYUFBVyxtQkFBQ0MsS0FBRCxFQUFXO0FBQ3BCQyxpQkFBYUMsT0FBYixDQUFxQixpQkFBckIsRUFBd0NGLEtBQXhDO0FBQ0QsR0F6Qlk7QUEwQmJHLFlBQVUsa0JBQUNILEtBQUQsRUFBVztBQUNuQixXQUFPQyxhQUFhRyxHQUFiLENBQWlCLGlCQUFqQixFQUFvQ0osS0FBcEMsQ0FBUDtBQUNELEdBNUJZO0FBNkJiSyxlQUFhLHFCQUFDakIsSUFBRCxFQUFVO0FBQ3JCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLHNEQUFYLEVBQW1FSixJQUFuRSxFQUNDSyxJQURELENBQ00sVUFBQ0MsR0FBRCxFQUFTO0FBQ2JKLGdCQUFRSSxHQUFSO0FBQ0QsT0FIRCxFQUlDQyxLQUpELENBSU8sVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCTCxlQUFPSyxNQUFNQyxRQUFiO0FBQ0QsT0FORDtBQU9ELEtBUk0sQ0FBUDtBQVNEO0FBdkNZLEMiLCJmaWxlIjoiMC4xYzY2MTYyYTIwOTcxOTQyMGMzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBSZWdpc3RlclVzZXI6IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvdXNlcnMvYXV0aC9yZWdpc3RlcicsIGRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgTG9naW5Vc2VyOiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL3VzZXJzL2F1dGgvbG9naW4nLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHNhdmVUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicsIHRva2VuKTtcbiAgfSxcbiAgZ2V0VG9rZW46ICh0b2tlbikgPT4ge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0KCdVc2VyQWNjZXNzVG9rZW4nLCB0b2tlbik7XG4gIH0sXG4gIHZlcmlmeVRva2VuOiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL3VzZXJzL2F1dGgvdmVyaWZ5YWNjZXNzJywgZGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3V0aWwvQXBpQ2FsbHMuanMiXSwic291cmNlUm9vdCI6IiJ9