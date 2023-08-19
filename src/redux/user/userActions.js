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
import { API_BASE_URL } from '../../global';

export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get(`${API_BASE_URL}/auth/me`)
      .then((response) => {
        dispatch(fetch_user_request(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const login = (credintials) => {
  return (dispatch) => {
    dispatch(user_login_request());
    axios
      .post(`${API_BASE_URL}/auth/login`, credintials)
      .then((response) => {
        dispatch(user_login_success(response.data.data));
      })
      .catch((error) => {
        dispatch(user_login_failure(error.message));
      });
  };
};

export const resetPassword = (newPassword) => {
  return (dispatch) => {
    dispatch(user_resetpassword_request());
    axios
      .post(`${API_BASE_URL}/reset-password`, { newPassword })
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
