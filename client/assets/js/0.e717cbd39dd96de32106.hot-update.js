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

    console.log(id);
    return _axios2.default.delete(baseUrl + 'users/1/documents/' + id, { headers: { Authorization: AuthStr } }).then(function (response) {
      return response;
    }).catch(function (error) {
      return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJSZWdpc3RlclVzZXIiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwb3N0IiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsIkxvZ2luVXNlciIsInNhdmVUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJsb2dVc2VyT3V0IiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwidmVyaWZ5VG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsRG9jdW1lbnRzIiwiQXV0aFN0ciIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0RG9jdW1lbnQiLCJpZCIsImRlbGV0ZURvY3VtZW50IiwiZGVsZXRlIiwic2F2ZURvY3VtZW50cyIsIm5ld0RvY3VtZW50IiwiY29uZmlnIiwicHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBLElBQU1BLFVBQVUsd0JBQWhCO2tCQUNlO0FBQ2JDLGdCQUFjLHNCQUFDQyxJQUFELEVBQVU7QUFDdEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHNCQUFNQyxJQUFOLENBQVcsZ0NBQVgsRUFBNkNKLElBQTdDLEVBQ0dLLElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYkosZ0JBQVFJLEdBQVI7QUFDRCxPQUhILEVBSUdDLEtBSkgsQ0FJUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQU5IO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0FYWTtBQVliQyxhQUFXLG1CQUFDVixJQUFELEVBQVU7QUFDbkIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLHNCQUFNQyxJQUFOLENBQVcsNkJBQVgsRUFBMENKLElBQTFDLEVBQ0dLLElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYkosZ0JBQVFJLEdBQVI7QUFDRCxPQUhILEVBSUdDLEtBSkgsQ0FJUyxVQUFDQyxLQUFELEVBQVc7QUFDaEJMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQU5IO0FBT0QsS0FSTSxDQUFQO0FBU0QsR0F0Qlk7QUF1QmJFLGFBQVcsbUJBQUNDLEtBQUQsRUFBVztBQUNwQkMsaUJBQWFDLFVBQWIsQ0FBd0IsaUJBQXhCO0FBQ0FELGlCQUFhRSxPQUFiLENBQXFCLGlCQUFyQixFQUF3Q0gsS0FBeEM7QUFDQUMsaUJBQWFFLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0MsSUFBdEM7QUFDRCxHQTNCWTtBQTRCYkMsY0FBWSxzQkFBTTtBQUNoQkgsaUJBQWFDLFVBQWIsQ0FBd0IsaUJBQXhCO0FBQ0FELGlCQUFhQyxVQUFiLENBQXdCLGVBQXhCLEVBQXlDLElBQXpDO0FBQ0QsR0EvQlk7QUFnQ2JHLFlBQVUsb0JBQU07QUFDZCxXQUFPSixhQUFhSyxPQUFiLENBQXFCLGlCQUFyQixDQUFQO0FBQ0QsR0FsQ1k7QUFtQ2JDLGVBQWEscUJBQUNQLEtBQUQsRUFBVztBQUN0QixRQUFNWixPQUFPLEVBQUVZLFlBQUYsRUFBYjtBQUNBLFdBQU8sSUFBSVgsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLG9DQUFYLEVBQWlESixJQUFqRCxFQUNHSyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JKLGdCQUFRSSxHQUFSO0FBQ0QsT0FISCxFQUlHQyxLQUpILENBSVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCWSxnQkFBUUMsR0FBUixDQUFZYixLQUFaO0FBQ0FMLGVBQU9LLE1BQU1DLFFBQWI7QUFDRCxPQVBIO0FBUUQsS0FUTSxDQUFQO0FBVUQsR0EvQ1k7QUFnRGJhLG1CQUFpQiwyQkFBTTtBQUNyQixRQUFNQyxVQUFVVixhQUFhSyxPQUFiLENBQXFCLGlCQUFyQixDQUFoQjtBQUNBLFdBQU8sSUFBSWpCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsc0JBQU1xQixHQUFOLENBQWExQixPQUFiLHdCQUF5QyxFQUFFMkIsU0FBUyxFQUFFQyxlQUFlSCxPQUFqQixFQUFYLEVBQXpDLEVBQ0dsQixJQURILENBQ1EsVUFBVUksUUFBVixFQUFvQjtBQUN4QlAsZ0JBQVFPLFFBQVI7QUFDRCxPQUhILEVBSUdGLEtBSkgsQ0FJUyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCTCxlQUFPSyxNQUFNQyxRQUFiO0FBQ0QsT0FOSDtBQU9ELEtBUk0sQ0FBUDtBQVNELEdBM0RZOztBQTZEYmtCLGVBQWEscUJBQUNDLEVBQUQsRUFBUTtBQUNuQixRQUFNTCxVQUFVVixhQUFhSyxPQUFiLENBQXFCLGlCQUFyQixDQUFoQjtBQUNBLFdBQU8sSUFBSWpCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsc0JBQU1xQixHQUFOLENBQWExQixPQUFiLDBCQUF5QzhCLEVBQXpDLEVBQStDLEVBQUVILFNBQVMsRUFBRUMsZUFBZUgsT0FBakIsRUFBWCxFQUEvQyxFQUNHbEIsSUFESCxDQUNRLFVBQVVJLFFBQVYsRUFBb0I7QUFDeEJQLGdCQUFRTyxRQUFSO0FBQ0QsT0FISCxFQUlHRixLQUpILENBSVMsVUFBVUMsS0FBVixFQUFpQjtBQUN0QkwsZUFBT0ssTUFBTUMsUUFBYjtBQUNELE9BTkg7QUFPRCxLQVJNLENBQVA7QUFTRCxHQXhFWTs7QUEwRWJvQixrQkFBZ0Isd0JBQUNELEVBQUQsRUFBUTs7QUFFdEIsUUFBTUwsVUFBVVYsYUFBYUssT0FBYixDQUFxQixpQkFBckIsQ0FBaEI7O0FBRUVFLFlBQVFDLEdBQVIsQ0FBWU8sRUFBWjtBQUNBLFdBQU8sZ0JBQU1FLE1BQU4sQ0FBZ0JoQyxPQUFoQiwwQkFBNEM4QixFQUE1QyxFQUFrRCxFQUFFSCxTQUFTLEVBQUVDLGVBQWVILE9BQWpCLEVBQVgsRUFBbEQsRUFDSmxCLElBREksQ0FDQyxVQUFVSSxRQUFWLEVBQW9CO0FBQ3pCLGFBQU9BLFFBQVA7QUFDQSxLQUhJLEVBSUpGLEtBSkksQ0FJRSxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCO0FBQ0QsS0FOSSxDQUFQO0FBT0gsR0F0Rlk7O0FBd0ZidUIsaUJBQWUsdUJBQUNDLFdBQUQsRUFBaUI7QUFDOUIsUUFBTVQsVUFBVVYsYUFBYUssT0FBYixDQUFxQixpQkFBckIsQ0FBaEI7QUFDQSxRQUFJZSxTQUFTO0FBQ1hSLGVBQVMsRUFBRSxpQkFBaUJGLE9BQW5CO0FBREUsS0FBYjtBQUdBLFdBQU8sSUFBSXRCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsVUFBSTZCLFlBQVlKLEVBQWhCLEVBQW9CO0FBQ2xCUixnQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxlQUFPLGdCQUFNYSxHQUFOLDhDQUFxREYsWUFBWUosRUFBakUsRUFBdUVJLFdBQXZFLEVBQW9GQyxNQUFwRixFQUNKNUIsSUFESSxDQUNDLFVBQVVJLFFBQVYsRUFBb0I7QUFDeEJQLGtCQUFRTyxRQUFSO0FBQ0QsU0FISSxFQUlKRixLQUpJLENBSUUsVUFBVUMsS0FBVixFQUFpQjtBQUN0Qlksa0JBQVFDLEdBQVIsQ0FBWWIsS0FBWjtBQUNBTCxpQkFBT0ssTUFBTUMsUUFBYjtBQUNELFNBUEksQ0FBUDtBQVFELE9BVkQsTUFVTztBQUNMLGVBQU8sZ0JBQU1MLElBQU4sQ0FBVyx5Q0FBWCxFQUFzRDRCLFdBQXRELEVBQW1FQyxNQUFuRSxFQUNKNUIsSUFESSxDQUNDLFVBQVVJLFFBQVYsRUFBb0I7QUFDeEJQLGtCQUFRTyxRQUFSO0FBQ0QsU0FISSxFQUlKRixLQUpJLENBSUUsVUFBVUMsS0FBVixFQUFpQjtBQUN0QkwsaUJBQU9LLE1BQU1DLFFBQWI7QUFDRCxTQU5JLENBQVA7QUFPRDtBQUNGLEtBcEJNLENBQVA7QUFxQkQ7QUFsSFksQyIsImZpbGUiOiIwLmU3MTdjYmQzOWRkOTZkZTMyMTA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBSZWdpc3RlclVzZXI6IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWdpc3RlcicsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgTG9naW5Vc2VyOiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHNhdmVUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nLCB0b2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhlbnRpY2F0ZWQnLCB0cnVlKTtcbiAgfSxcbiAgbG9nVXNlck91dDogKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aGVudGljYXRlZCcsIHRydWUpO1xuICB9LFxuICBnZXRUb2tlbjogKCkgPT4ge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gIH0sXG4gIHZlcmlmeVRva2VuOiAodG9rZW4pID0+IHtcbiAgICBjb25zdCBkYXRhID0geyB0b2tlbiB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdmVyaWZ5YWNjZXNzJywgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBnZXRBbGxEb2N1bWVudHM6ICgpID0+IHtcbiAgICBjb25zdCBBdXRoU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5nZXQoYCR7YmFzZVVybH11c2Vycy8xL2RvY3VtZW50c2AsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBBdXRoU3RyIH0gfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBnZXREb2N1bWVudDogKGlkKSA9PiB7XG4gICAgY29uc3QgQXV0aFN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9dXNlcnMvMS9kb2N1bWVudHMvJHtpZH1gLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogQXV0aFN0ciB9IH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZGVsZXRlRG9jdW1lbnQ6IChpZCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IEF1dGhTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgIFxuICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke2Jhc2VVcmx9dXNlcnMvMS9kb2N1bWVudHMvJHtpZH1gLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogQXV0aFN0ciB9IH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH0pO1xuICB9LFxuXG4gIHNhdmVEb2N1bWVudHM6IChuZXdEb2N1bWVudCkgPT4ge1xuICAgIGNvbnN0IEF1dGhTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiBBdXRoU3RyIH1cbiAgICB9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAobmV3RG9jdW1lbnQuaWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZScpXG4gICAgICAgIHJldHVybiBheGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2Vycy8xL2RvY3VtZW50cy8ke25ld0RvY3VtZW50LmlkfWAsIG5ld0RvY3VtZW50LCBjb25maWcpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvMS9kb2N1bWVudHMnLCBuZXdEb2N1bWVudCwgY29uZmlnKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3V0aWwvQXBpQ2FsbHMuanMiXSwic291cmNlUm9vdCI6IiJ9