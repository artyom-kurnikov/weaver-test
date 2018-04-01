import weaverService from '../../services/weaverService';
import {
  REQUEST_REGISTRATION,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../reducers/me';

const requestTypes = {
  signIn: [
    REQUEST_REGISTRATION,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILED
  ],
  signUp: [
    REQUEST_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED
  ]
};

const auth = type => userData => dispatch => {
  const [ REQUEST, SUCCESS, FAIL ] = requestTypes[type];

  dispatch({ type: REQUEST });

  return weaverService[type](userData)
    .then(user =>
      dispatch({
        type: SUCCESS,
        payload: user
      })
    )
    .catch(err => {
      dispatch({
        type: FAIL
      });
      console.error(err);
    })
};

export const login = auth('signIn');

export const register = auth('signUp');
