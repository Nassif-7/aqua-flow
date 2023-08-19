import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_RESETPASSWORD_REQUEST,
  USER_RESETPASSWORD_SUCCESS,
  USER_RESETPASSWORD_FAILURE
} from './userTypes';

const initialState = {
  loading: false,
  user: {},
  error: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: ''
      };
    case USER_LOGIN_FAILURE:
      return {
        loading: false,
        user: {},
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
