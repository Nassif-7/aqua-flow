import axios from 'axios';
import {
  FETCH_USER,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_RESETPASSWORD_REQUEST,
  USER_RESETPASSWORD_SUCCESS,
  USER_RESETPASSWORD_FAILURE
} from './userTypes';

// import { API_BASE_URL } from '../../global';

export const login = (credintials) => {
  return (dispatch) => {
    dispatch(user_login_request());
    axios
      .post(`/auth/login`, credintials)
      .then((responseLogin) => {
        dispatch(user_login_success(responseLogin.data.data));
        localStorage.setItem('token', responseLogin.data.data);
        axios
          .get(`/auth/me`, {
            headers: {
              Authorization: `Bearer ${responseLogin.data.data}`
            }
          })
          .then((responseFetchUser) => {
            dispatch(fetch_user_request(responseFetchUser.data.data));
            localStorage.setItem('user', responseFetchUser.data.data);
          })
          .catch((errorFetchUser) => {
            console.log(errorFetchUser);
          });
      })
      .catch((errorLogin) => {
        dispatch(user_login_failure(errorLogin.message));
      });
  };
};

export const resetPassword = (newPassword) => {
  return (dispatch) => {
    dispatch(user_resetpassword_request());
    axios
      .post(`/reset-password`, { newPassword })
      .then((response) => {
        dispatch(user_resetpassword_success());
      })
      .catch((error) => {
        dispatch(user_resetpassword_failure(error.message));
      });
  };
};

export const fetch_user_request = (user) => {
  return {
    type: FETCH_USER,
    payload: user
  };
};

export const user_login_request = () => {
  return {
    type: USER_LOGIN_REQUEST
  };
};

export const user_login_success = (token) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: token
  };
};

export const user_login_failure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error
  };
};

export const user_resetpassword_request = () => {
  return {
    type: USER_RESETPASSWORD_REQUEST
  };
};

export const user_resetpassword_success = () => {
  return {
    type: USER_RESETPASSWORD_SUCCESS
  };
};

export const user_resetpassword_failure = (error) => {
  return {
    type: USER_RESETPASSWORD_FAILURE,
    payload: error
  };
};
