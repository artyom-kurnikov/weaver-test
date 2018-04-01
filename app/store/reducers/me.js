export const FILL_ME = 'FILL_ME';
export const REQUEST_REGISTRATION = 'REQUEST_REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

const initialState = {
  userId: '',
  email: '',
  username: '',
  isRegistering: false,
  isLoggingIn: false,
  isLoggedIn: false
};

const fieldToValue = (fieldName, value) => state => ({
  ...state,
  [fieldName]: value
});

const isRegisteringToFalse = fieldToValue('isRegistering', false);

const isLoggingInToFalse = fieldToValue('isLoggingIn', false);

const fillMe = (state, action) => ({
  ...state,
  userId: action.payload.userId || state.userId,
  email: action.payload.email || state.email,
  username: action.payload.username || state.username
});

const types = {
  [FILL_ME]: fillMe,

  [REQUEST_REGISTRATION]: fieldToValue('isRegistering', true),

  [REGISTRATION_SUCCESS]: (state, action) =>
    isRegisteringToFalse(fillMe(state, action)),

  [REGISTRATION_FAILED]: isRegisteringToFalse,

  [REQUEST_LOGIN]: fieldToValue('isLoggingIn', true),

  [LOGIN_SUCCESS]: (state, action) =>
    isLoggingInToFalse(fillMe(state, action)),

  [LOGIN_FAILED]: isLoggingInToFalse
};

export default (state = initialState, action) =>
  types[action.type]
    ? types[action.type](state, action)
    : state;
