import request from "../utils/request";

export const fetchLogin = (email, password) =>
  request
    .post(`/backend/api/user/login?username=${email}&password=${password}`)
    .catch((error) => ({ error }));

export const fetchAccountInfo = () =>
  request.get(`/backend/api/user/profile`).catch((err) => {});

export const logoutApi = () =>
  request.post(`/backend/api/user/logout`).catch((err) => {
    console.log("err", err);
  });



export const fetchLastAccess = () =>
  request.get(`/backend/api/account/last/access`).catch((err) => {
    console.log("err", err);
  });


export const fetchChangePassword = (oldPassword, newPassword) =>
  request
    .post(`/backend/api/account/change/password`, {
      ...{ oldPassword: oldPassword },
      ...{ newPassword: newPassword },
    })
    .catch((err) => {
      console.log("err", err);
    });




