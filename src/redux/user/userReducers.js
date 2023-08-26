import {
  FETCH_USER,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_RESETPASSWORD_REQUEST,
  USER_RESETPASSWORD_SUCCESS,
  USER_RESETPASSWORD_FAILURE
} from './userTypes';

const initialState = {
  loading: false,
  // user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  error: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };

    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case USER_RESETPASSWORD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case USER_RESETPASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: ''
      };
    case USER_RESETPASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
