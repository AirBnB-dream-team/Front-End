import {
    START_REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
  } from '../actions/register';

  import { 
      START_LOGIN, 
      LOGIN_SUCCESS, 
      LOGIN_FAILURE
    } from "../actions/login";

const initialState = {
    credentials: {
        username: "",
        email: "",
        password: ""
    },
    isLoggedIn: false,
    isFetching: false,
     error: ""
    };
      
    export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_REGISTER:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
        case REGISTER_SUCCESS:
        return {
            ...state,
            credentials: action.payload,
            isFetching: false,
            error: ""
        };
        case REGISTER_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        };
        case START_LOGIN:
        return {
            ...state,
            isFetching: true,
            isLoggedIn: false,
            error: ""
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            credentials: action.payload,
            isFetching: false,
            isLoggedIn: true,
            error: ""
        };
        case LOGIN_FAILURE:
        return {
            ...state,
            isFetching: false,
            isLoggedIn: false,
            error: action.payload
        };
        default:
        return state;
    }
};
      