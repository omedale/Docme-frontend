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

  deleteDocument: function deleteDocument(id) {
    var AuthStr = localStorage.getItem('UserAccessToken');
    return _axios2.default.delete(baseUrl + 'users/1/documents/' + id, { headers: { Authorization: AuthStr } }).then(function (response) {
      return response;
    }).catch(function (error) {
      return error;
    });
  },

  saveDocuments: function saveDocuments(newDocument) {
    var AuthStr = localStorage.getItem('UserAccessToken');
    var config = {
      headers: { 'Authorization': AuthStr }
    };
    return new Promise(function (resolve, reject) {
      if (newDocument.id) {
        console.log('update');
        return _axios2.default.put('http://localhost:3000/users/1/documents/' + newDocument.id, newDocument, config).then(function (response) {
          resolve(response);
        }).catch(function (error) {
          console.log(error);
          reject(error.response);
        });
      } else {
        return _axios2.default.post('http://localhost:3000/users/1/documents', newDocument, config).then(function (response) {
          resolve(response);
        }).catch(function (error) {
          reject(error.response);
        });
      }
    });
  }
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ApiCalls.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJSZWdpc3RlclVzZXIiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwb3N0IiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsIkxvZ2luVXNlciIsInNhdmVUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJsb2dVc2VyT3V0IiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwidmVyaWZ5VG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsRG9jdW1lbnRzIiwiQXV0aFN0ciIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0RG9jdW1lbnQiLCJpZCIsImRlbGV0ZURvY3VtZW50IiwiZGVsZXRlIiwic2F2ZURvY3VtZW50cyIsIm5ld0RvY3VtZW50IiwiY29uZmlnIiwicHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQU1BLFVBQVUsd0JBQWhCO2tCQUNlO0FBQ2JDLGdCQUFjLHNCQUFDQyxJQUFELEVBQVU7QUFDdEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHNCQUFNQyxJQUFOLENBQVcsZ0NBQVgsRUFBNkNKLElBQTdDLEVBQ0dLLElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYkosZ0JBQVFJLEdBQVI7QUFDRCxPQUhILEVBSUdDLEtBSkgsQ0FJUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQU5IO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0FYWTtBQVliQyxhQUFXLG1CQUFDVixJQUFELEVBQVU7QUFDbkIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RD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b250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5jb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIFJlZ2lzdGVyVXNlcjogKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlZ2lzdGVyJywgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBMb2dpblVzZXI6IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbicsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc2F2ZVRva2VuOiAodG9rZW4pID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicsIHRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXV0aGVudGljYXRlZCcsIHRydWUpO1xuICB9LFxuICBsb2dVc2VyT3V0OiAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoZW50aWNhdGVkJywgdHJ1ZSk7XG4gIH0sXG4gIGdldFRva2VuOiAoKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgfSxcbiAgdmVyaWZ5VG9rZW46ICh0b2tlbikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7IHRva2VuIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92ZXJpZnlhY2Nlc3MnLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGdldEFsbERvY3VtZW50czogKCkgPT4ge1xuICAgIGNvbnN0IEF1dGhTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLmdldChgJHtiYXNlVXJsfXVzZXJzLzEvZG9jdW1lbnRzYCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IEF1dGhTdHIgfSB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGdldERvY3VtZW50OiAoaWQpID0+IHtcbiAgICBjb25zdCBBdXRoU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5nZXQoYCR7YmFzZVVybH11c2Vycy8xL2RvY3VtZW50cy8ke2lkfWAsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBBdXRoU3RyIH0gfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBkZWxldGVEb2N1bWVudDogKGlkKSA9PiB7IFxuICAgIGNvbnN0IEF1dGhTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2Jhc2VVcmx9dXNlcnMvMS9kb2N1bWVudHMvJHtpZH1gLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogQXV0aFN0ciB9fSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvclxuICAgICAgICB9KTtcbiAgfSxcblxuICBzYXZlRG9jdW1lbnRzOiAobmV3RG9jdW1lbnQpID0+IHtcbiAgICBjb25zdCBBdXRoU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogQXV0aFN0ciB9XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKG5ld0RvY3VtZW50LmlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUnKVxuICAgICAgICByZXR1cm4gYXhpb3MucHV0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvMS9kb2N1bWVudHMvJHtuZXdEb2N1bWVudC5pZH1gLCBuZXdEb2N1bWVudCwgY29uZmlnKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzLzEvZG9jdW1lbnRzJywgbmV3RG9jdW1lbnQsIGNvbmZpZylcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlsL0FwaUNhbGxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==