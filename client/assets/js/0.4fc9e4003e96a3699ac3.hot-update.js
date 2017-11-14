webpackHotUpdate(0,{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(50);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = "http://localhost:3000/";
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
    return new Promise(function (resolve, reject) {
      _axios2.default.get(baseUrl + 'users/1/documents', { headers: { Authorization: AuthStr } }).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },

  getDocument: function getDocument(id) {
    var AuthStr = localStorage.getItem('UserAccessToken');
    return new Promise(function (resolve, reject) {
      _axios2.default.get(baseUrl + 'users/1/documents/' + id, { headers: { Authorization: AuthStr } }).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },
  saveDocuments: function saveDocuments(newDocument) {
    var AuthStr = localStorage.getItem('UserAccessToken');
    var config = {
      headers: { 'Authorization': AuthStr }
    };
    return new Promise(function (resolve, reject) {
      if (newDocument.id) return _axios2.default.post('http://localhost:3000/users/1/documents', newDocument, config).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  }
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ApiCalls.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJSZWdpc3RlclVzZXIiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwb3N0IiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsIkxvZ2luVXNlciIsInNhdmVUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJsb2dVc2VyT3V0IiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwidmVyaWZ5VG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsRG9jdW1lbnRzIiwiQXV0aFN0ciIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0RG9jdW1lbnQiLCJpZCIsInNhdmVEb2N1bWVudHMiLCJuZXdEb2N1bWVudCIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFNQSxVQUFVLHdCQUFoQjtrQkFDZTtBQUNiQyxnQkFBYyxzQkFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLGdDQUFYLEVBQTZDSixJQUE3QyxFQUNHSyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JKLGdCQUFRSSxHQUFSO0FBQ0QsT0FISCxFQUlHQyxLQUpILENBSVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCTCxlQUFPSyxNQUFNQyxRQUFiO0FBQ0QsT0FOSDtBQU9ELEtBUk0sQ0FBUDtBQVNELEdBWFk7QUFZYkMsYUFBVyxtQkFBQ1YsSUFBRCxFQUFVO0FBQ25CLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLDZCQUFYLEVBQTBDSixJ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SUFBTixDQUFXLHlDQUFYLEVBQXNEMEIsV0FBdEQsRUFBbUVDLE1BQW5FLEVBQ04xQixJQURNLENBQ0QsVUFBVUksUUFBVixFQUFvQjtBQUN4QlAsZ0JBQVFPLFFBQVI7QUFDRCxPQUhNLEVBSU5GLEtBSk0sQ0FJQSxVQUFVQyxLQUFWLEVBQWlCO0FBQ3JCTCxlQUFPSyxNQUFNQyxRQUFiO0FBQ0YsT0FOTSxDQUFQO0FBT0QsS0FUTSxDQUFQO0FBVUQ7QUF4RlksQyIsImZpbGUiOiIwLjRmYzllNDAwM2U5NmEzNjk5YWMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBSZWdpc3RlclVzZXI6IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWdpc3RlcicsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgTG9naW5Vc2VyOiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHNhdmVUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nLCB0b2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhlbnRpY2F0ZWQnLCB0cnVlKTtcbiAgfSxcbiAgbG9nVXNlck91dDogKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aGVudGljYXRlZCcsIHRydWUpO1xuICB9LFxuICBnZXRUb2tlbjogKCkgPT4ge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gIH0sXG4gIHZlcmlmeVRva2VuOiAodG9rZW4pID0+IHtcbiAgICBjb25zdCBkYXRhID0geyB0b2tlbiB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdmVyaWZ5YWNjZXNzJywgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRBbGxEb2N1bWVudHM6ICgpID0+IHtcbiAgICBjb25zdCBBdXRoU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5nZXQoYCR7YmFzZVVybH11c2Vycy8xL2RvY3VtZW50c2AsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBBdXRoU3RyIH0gfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0RG9jdW1lbnQ6IChpZCkgPT4ge1xuICAgIGNvbnN0IEF1dGhTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLmdldChgJHtiYXNlVXJsfXVzZXJzLzEvZG9jdW1lbnRzLyR7aWR9YCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IEF1dGhTdHIgfSB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc2F2ZURvY3VtZW50czogKG5ld0RvY3VtZW50KSA9PiB7XG4gICAgY29uc3QgQXV0aFN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgaGVhZGVyczogeydBdXRob3JpemF0aW9uJzogQXV0aFN0ciB9XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKG5ld0RvY3VtZW50LmlkKVxuICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vycy8xL2RvY3VtZW50cycsIG5ld0RvY3VtZW50LCBjb25maWcpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgIH0pOyBcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlsL0FwaUNhbGxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==