import {call, put, takeEvery} from 'redux-saga/effects';
import {get} from '../../utils/request';
import {
  defineAsyncAction,
  // defineAction
} from '../../utils/actionTrainer';

export const HOME = defineAsyncAction('HOME');

export function homeInit(label) {
  return {
    type: HOME.REQUEST,
    label,
  };
}

export function homeSuccess(data) {
  return {
    type: HOME.SUCCESS,
    data,
  };
}

export function homeFailed(data) {
  return {
    type: HOME.FAIL,
    data,
  };
}

const initialState = {
  label: 'Hello there! 🙉',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME.REQUEST:
      return {
        ...state,
        label: action.label,
      };
    default:
      return state;
  }
};

// Sagas
function* homeRequest() {
  const requestURL = '';
  const requestOpt = {};
  try {
    const data = yield call(get, requestURL, requestOpt);
    yield put(homeSuccess(data));
  } catch (err) {
    yield put(homeFailed(err));
  }
}
export function* sagas() {
  yield takeEvery('FALSE', homeRequest);
}
