import request from "../utils/request";

export const fetchLogin = (email, password) =>
  request
    .post(`/user/login?username=${email}&password=${password}`)
    .catch((error) => ({ error }));

export const fetchAccountInfo = () =>
  request.get(`/user/profile`).catch((err) => {});

export const logoutApi = () =>
  request.post(`/user/logout`).catch((err) => {
    console.log("err", err);
  });



export const fetchLastAccess = () =>
  request.get(`/account/last/access`).catch((err) => {
    console.log("err", err);
  });


export const fetchChangePassword = (oldPassword, newPassword) =>
  request
    .post(`/account/change/password`, {
      ...{ oldPassword: oldPassword },
      ...{ newPassword: newPassword },
    })
    .catch((err) => {
      console.log("err", err);
    });




