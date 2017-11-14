webpackHotUpdate(0,{

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RegisterUser$LoginUs;

var _axios = __webpack_require__(48);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_RegisterUser$LoginUs = {
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
      _axios2.default.get('http://localhost:3000/users/1/documents', { headers: { Authorization: AuthStr } }).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  }

}, _defineProperty(_RegisterUser$LoginUs, 'getAllDocuments', function getAllDocuments() {
  var AuthStr = localStorage.getItem('UserAccessToken');
  return new Promise(function (resolve, reject) {
    _axios2.default.get('http://localhost:3000/users/1/documents', { headers: { Authorization: AuthStr } }).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      reject(error.response);
    });
  });
}), _defineProperty(_RegisterUser$LoginUs, 'saveDocuments', function saveDocuments(newDocument) {
  var AuthStr = localStorage.getItem('UserAccessToken');
  var config = {
    headers: { 'Authorization': AuthStr }
  };
  return new Promise(function (resolve, reject) {
    return _axios2.default.post('http://localhost:3000/users/1/documents', newDocument, config).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      reject(error.response);
    });
  });
}), _RegisterUser$LoginUs);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ApiCalls.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbIlJlZ2lzdGVyVXNlciIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwiTG9naW5Vc2VyIiwic2F2ZVRva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImxvZ1VzZXJPdXQiLCJnZXRUb2tlbiIsImdldEl0ZW0iLCJ2ZXJpZnlUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRBbGxEb2N1bWVudHMiLCJBdXRoU3RyIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJuZXdEb2N1bWVudCIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQUdFQSxnQkFBYyxzQkFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLGdDQUFYLEVBQTZDSixJQUE3QyxFQUNHSyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JKLGdCQUFRSSxHQUFSO0FBQ0QsT0FISCxFQUlHQyxLQUpILENBSVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCTCxlQUFPSyxNQUFNQyxRQUFiO0FBQ0QsT0FOSDtBQU9ELEtBUk0sQ0FBUDtBQVNELEc7QUFDREMsYUFBVyxtQkFBQ1YsSUFBRCxFQUFVO0FBQ25CLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLDZCQUFYLEVBQTBDSixJQUExQyxFQUNHSyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JKLGdCQUFRSSxHQUFSO0FBQ0QsT0FISCxFQUlHQyxL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O0FBT0QsR0FSTSxDQUFQO0FBU0QsQyIsImZpbGUiOiIwLjQ1ZDJjNGUyNDAyOTk5NWZiMDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFJlZ2lzdGVyVXNlcjogKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlZ2lzdGVyJywgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBMb2dpblVzZXI6IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbicsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc2F2ZVRva2VuOiAodG9rZW4pID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicsIHRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aGVudGljYXRlZCcsIHRydWUpO1xuICB9LFxuICBsb2dVc2VyT3V0OiAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoZW50aWNhdGVkJywgdHJ1ZSk7XG4gIH0sXG4gIGdldFRva2VuOiAoKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgfSxcbiAgdmVyaWZ5VG9rZW46ICh0b2tlbikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7IHRva2VuIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92ZXJpZnlhY2Nlc3MnLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldEFsbERvY3VtZW50czogKCkgPT4ge1xuICAgIGNvbnN0IEF1dGhTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzLzEvZG9jdW1lbnRzJywgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IEF1dGhTdHIgfSB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgXG4gIGdldEFsbERvY3VtZW50czogKCkgPT4ge1xuICAgIGNvbnN0IEF1dGhTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzLzEvZG9jdW1lbnRzJywgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IEF1dGhTdHIgfSB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc2F2ZURvY3VtZW50czogKG5ld0RvY3VtZW50KSA9PiB7XG4gICAgY29uc3QgQXV0aFN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgaGVhZGVyczogeydBdXRob3JpemF0aW9uJzogQXV0aFN0ciB9XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vycy8xL2RvY3VtZW50cycsIG5ld0RvY3VtZW50LCBjb25maWcpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3V0aWwvQXBpQ2FsbHMuanMiXSwic291cmNlUm9vdCI6IiJ9