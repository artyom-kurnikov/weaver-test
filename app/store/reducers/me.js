import { changeFieldsForState } from "../../helpers";

export const FILL_ME = 'FILL_ME';
export const REQUEST_REGISTRATION = 'REQUEST_REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const RESET_ME = 'RESET_ME';

const getInitialState = () => ({
  userId: '',
  email: '',
  username: '',
  isRegistering: false,
  isLoggingIn: false,
  isLoggedIn: false
});

const registrationPassed = changeFieldsForState({
  isRegistering: false,
  isLoggedIn: true
});

const loginPassed = changeFieldsForState({
  isLoggingIn: false,
  isLoggedIn: true
});

const fillMe = (state, action) => ({
  ...state,
  userId: action.payload.userId || state.userId,
  email: action.payload.email || state.email,
  username: action.payload.username || state.username
});

const types = {
  [FILL_ME]: fillMe,

  [REQUEST_REGISTRATION]: changeFieldsForState({ isRegistering: true }),

  [REGISTRATION_SUCCESS]: (state, action) =>
    registrationPassed(fillMe(state, action)),

  [REGISTRATION_FAILED]: changeFieldsForState({ isRegistering: false }),

  [REQUEST_LOGIN]: changeFieldsForState({ isLoggingIn: true }),

  [LOGIN_SUCCESS]: (state, action) =>
    loginPassed(fillMe(state, action)),

  [LOGIN_FAILED]: changeFieldsForState({ isLoggingIn: false }),

  [RESET_ME]: getInitialState
};

export default (state = getInitialState(), action) =>
  types[action.type]
    ? types[action.type](state, action)
    : state;
