import {defineAsyncAction} from '../../utils/actionTrainer';
import {call, put, takeEvery} from 'redux-saga/effects';
import {get} from '../../utils/request';

export const DATABASE = defineAsyncAction('DATABASE');

export function databaseInit() {
  return {
    type: DATABASE.REQUEST,
  };
}

export function databaseSuccess(data) {
  return {
    type: DATABASE.SUCCESS,
    data,
  };
}

export function databaseFailed(data) {
  return {
    type: DATABASE.FAIL,
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
    case DATABASE.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DATABASE.FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case DATABASE.SUCCESS:
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
function* databaseRequest() {
  const requestURL = '';
  const requestOpt = {};

  try {
    const data = yield call(get, requestURL, requestOpt);
    yield put(databaseSuccess(data));
  } catch (err) {
    yield put(databaseFailed(err));
  }
}

export function* sagas() {
  yield takeEvery(DATABASE.REQUEST, databaseRequest);
}