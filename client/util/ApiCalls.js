import axios from 'axios';
// const baseUrl = "http://localhost:3000/";

const baseUrl = "https://dockme.herokuapp.com/";
export default {
  RegisterUser: (data) => {
    return new Promise((resolve, reject) => {
      axios.post(`${baseUrl}register`, data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  LoginUser: (data) => {
    return new Promise((resolve, reject) => {
      axios.post(`${baseUrl}login`, data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  saveToken: (token) => {
    localStorage.removeItem('UserAccessToken');
    localStorage.setItem('UserAccessToken', token);
    localStorage.setItem('authenticated', true);
  },
  logUserOut: () => {
    localStorage.removeItem('UserAccessToken');
    localStorage.removeItem('authenticated', true);
  },
  getToken: () => {
    return localStorage.getItem('UserAccessToken');
  },
  verifyToken: (token) => {
    const data = { token };
    return new Promise((resolve, reject) => {
      axios.post(`${baseUrl}verifyaccess`, data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  getUserInfo: (token) => {
    const data = { token };
    const AuthStr = localStorage.getItem('UserAccessToken');
    var config = {
      headers: { 'Authorization': AuthStr }
    };
    return new Promise((resolve, reject) => {
      axios.post(`${baseUrl}get-user-id`, data, config)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  getAllDocuments: () => {
    const currentUserId = localStorage.getItem('current_user_id');
    const AuthStr = localStorage.getItem('UserAccessToken');
    return new Promise((resolve, reject) => {
      axios.get(`${baseUrl}users/${currentUserId}/documents`, { headers: { Authorization: AuthStr } })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error.response);
        });
    });
  },

  getDocument: (id) => {
    const currentUserId = localStorage.getItem('current_user_id');
    const AuthStr = localStorage.getItem('UserAccessToken');
    return new Promise((resolve, reject) => {
      axios.get(`${baseUrl}users/${currentUserId}/documents/${id}`, { headers: { Authorization: AuthStr } })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error.response);
        });
    });
  },

  deleteDocument: (id) => { 
    const currentUserId = localStorage.getItem('current_user_id');
    const AuthStr = localStorage.getItem('UserAccessToken');
      return axios.delete(`${baseUrl}users/${currentUserId}/documents/${id}`, { headers: { Authorization: AuthStr }})
        .then(function (response) {
         return response
        })
        .catch(function (error) {
          return error
        });
  },

  saveDocuments: (newDocument) => {
    const currentUserId = localStorage.getItem('current_user_id');
    const AuthStr = localStorage.getItem('UserAccessToken');
    var config = {
      headers: { 'Authorization': AuthStr }
    };
    return new Promise((resolve, reject) => {
      if (newDocument.id) {
        return axios.put(`${baseUrl}/users/${currentUserId}/documents/${newDocument.id}`, newDocument, config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error.response);
          });
      } else {
        return axios.post(`${baseUrl}users/${currentUserId}/documents`, newDocument, config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error.response);
          });
      }
    });
  }
}