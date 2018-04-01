import weaverService from '../../services/weaverService';
import {
  REQUEST_REGISTRATION,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET_ME
} from '../reducers/me';

const requestTypes = {
  signUp: [
    REQUEST_REGISTRATION,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED
  ],
  signIn: [
    REQUEST_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED
  ]
};

const auth = type => userData => dispatch => {
  const [ REQUEST, SUCCESS, FAIL ] = requestTypes[type];

  dispatch({ type: REQUEST });

  return weaverService[type](userData)
    .then(user => {
      dispatch({
        type: SUCCESS,
        payload: user
      });
      localStorage.setItem('authToken', user.authToken);
    })
    .catch(err => {
      dispatch({
        type: FAIL
      });

      // If not have a code then it's an application error
      if (!err.code) console.error(err);

      throw err;
    });
};

export const login = auth('signIn');

export const register = auth('signUp');

export const resetMe = () => ({ type: RESET_ME });
