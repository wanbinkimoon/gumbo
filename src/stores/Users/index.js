import {defineAsyncAction} from '../../utils/actionTrainer';
import {call, put, takeEvery} from 'redux-saga/effects';
import {get} from '../../utils/request';

export const USERS = defineAsyncAction('USERS');

export function usersInit() {
  return {
    type: USERS.REQUEST,
  };
}

export function usersSuccess(data) {
  return {
    type: USERS.SUCCESS,
    data,
  };
}

export function usersFailed(data) {
  return {
    type: USERS.FAIL,
    data,
  };
}

const initialState = {
  loading: false,
  loaded: false,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USERS.FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case USERS.SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: {...action.data},
      };
    default:
      return state;
  }
};

// Sagas
function* usersRequest() {
  const requestURL = '';
  const requestOpt = {};

  try {
    const data = yield call(get, requestURL, requestOpt);
    yield put(usersSuccess(data));
  } catch (err) {
    yield put(usersFailed(err));
  }
}

export function* sagas() {
  yield takeEvery(USERS.REQUEST, usersRequest);
}