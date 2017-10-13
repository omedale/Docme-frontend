webpackHotUpdate(0,{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(8), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(42);

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
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:3000/login', data).then(function (res) {
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
    localStorage.removeItem('authenticated', true);
  },
  getToken: function getToken() {
    return localStorage.getItem('UserAccessToken');
  },
  verifyToken: function verifyToken(token) {
    var data = { token: token };
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:3000/verifyaccess', data).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        console.log(error);
        reject(error.response);
      });
    });
  },
  getAllDocuments: function getAllDocuments() {
    var AuthStr = localStorage.getItem('UserAccessToken');
    return _axios2.default.get('http://localhost:3000/users/1/documents', { headers: { Authorization: AuthStr } }).then(function (response) {
      return response;
    }).catch(function (error) {
      return error;
    });
  }
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(12); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ApiCalls.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module), __webpack_require__(3)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbIlJlZ2lzdGVyVXNlciIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwiTG9naW5Vc2VyIiwic2F2ZVRva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImxvZ1VzZXJPdXQiLCJnZXRUb2tlbiIsImdldEl0ZW0iLCJ2ZXJpZnlUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRBbGxEb2N1bWVudHMiLCJBdXRoU3RyIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ2JBLGdCQUFjLHNCQUFDQyxJQUFELEVBQVU7QUFDdEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHNCQUFNQyxJQUFOLENBQVcsZ0NBQVgsRUFBNkNKLElBQTdDLEVBQ0NLLElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDYkosZ0JBQVFJLEdBQVI7QUFDRCxPQUhELEVBSUNDLEtBSkQsQ0FJTyxVQUFDQyxLQUFELEVBQVc7QUFDaEJMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQU5EO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0FYWTtBQVliQyxhQUFXLG1CQUFDVixJQUFELEVBQVU7QUFDbkIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHNCQUFNQyxJQUFOLENBQVcsNkJBQVgsRUFBMENKLElBQTFDLEVBQ0NLLElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDYkosZ0JBQVFJLEdBQVI7QUFDRCxPQUhELEVBSUNDLEtBSkQsQ0FJTyxVQUFDQyxLQUFELEVBQVc7QUFDaEJMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQU5EO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0F0Qlk7QUF1QmJFLGFBQVcsbUJBQUNDLEtBQUQsRUFBVztBQUNwQkMsaUJBQWFDLFVBQWIsQ0FBd0IsaUJBQXhCO0FBQ0FELGlCQUFhRSxPQUFiLENBQXFCLGlCQUFyQixFQUF3Q0gsS0FBeEM7QUFDQUMsaUJBQWFFLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0MsSUFBdEM7QUFDRCxHQTNCWTtBQTRCYkMsY0FBWSxzQkFBTTtBQUNoQkgsaUJBQWFDLFVBQWIsQ0FBd0IsaUJBQXhCO0FBQ0FELGlCQUFhQyxVQUFiLENBQXdCLGVBQXhCLEVBQXlDLElBQXpDO0FBQ0QsR0EvQlk7QUFnQ2JHLFlBQVUsb0JBQU07QUFDZCxXQUFPSixhQUFhSyxPQUFiLENBQXFCLGlCQUFyQixDQUFQO0FBQ0QsR0FsQ1k7QUFtQ2JDLGVBQWEscUJBQUNQLEtBQUQsRUFBVztBQUN0QixRQUFNWixPQUFPLEVBQUNZLFlBQUQsRUFBYjtBQUNBLFdBQU8sSUFBSVgsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLG9DQUFYLEVBQWlESixJQUFqRCxFQUNDSyxJQURELENBQ00sVUFBQ0MsR0FBRCxFQUFTO0FBQ2JKLGdCQUFRSSxHQUFSO0FBQ0QsT0FIRCxFQUlDQyxLQUpELENBSU8sVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCWSxnQkFBUUMsR0FBUixDQUFZYixLQUFaO0FBQ0FMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQVBEO0FBUUQsS0FUTSxDQUFQO0FBVUQsR0EvQ1k7QUFnRGJhLG1CQUFpQiwyQkFBTTtBQUNyQixRQUFNQyxVQUFVVixhQUFhSyxPQUFiLENBQXFCLGlCQUFyQixDQUFoQjtBQUNBLFdBQU8sZ0JBQU1NLEdBQU4sQ0FBVSx5Q0FBVixFQUFxRCxFQUFFQyxTQUFTLEVBQUVDLGVBQWVILE9BQWpCLEVBQVgsRUFBckQsRUFDSmxCLElBREksQ0FDQyxVQUFVSSxRQUFWLEVBQW9CO0FBQ3hCLGFBQU9BLFFBQVA7QUFDRCxLQUhJLEVBSUpGLEtBSkksQ0FJRSxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCLGFBQU9BLEtBQVA7QUFDRCxLQU5JLENBQVA7QUFPRDtBQXpEWSxDIiwiZmlsZSI6IjAuMWI3ZjE2MDdiODdlNTY0OThkMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUmVnaXN0ZXJVc2VyOiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvcmVnaXN0ZXInLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIExvZ2luVXNlcjogKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJywgZGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBzYXZlVG9rZW46ICh0b2tlbikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJywgdG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGVkJywgdHJ1ZSk7XG4gIH0sXG4gIGxvZ1VzZXJPdXQ6ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhlbnRpY2F0ZWQnLCB0cnVlKTtcbiAgfSxcbiAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICB9LFxuICB2ZXJpZnlUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHt0b2tlbn07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92ZXJpZnlhY2Nlc3MnLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRBbGxEb2N1bWVudHM6ICgpID0+IHtcbiAgICBjb25zdCBBdXRoU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIHJldHVybiBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vycy8xL2RvY3VtZW50cycsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBBdXRoU3RyIH0gfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlsL0FwaUNhbGxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==