import {defineAsyncAction} from '../../utils/actionTrainer';
import {call, put, takeEvery} from 'redux-saga/effects';
import {get} from '../../utils/request';

export const ALBUMS = defineAsyncAction('ALBUMS');

export function albumsInit() {
  return {
    type: ALBUMS.REQUEST,
  };
}

export function albumsSuccess(data, service) {
  return {
    type: ALBUMS.SUCCESS,
    data,
    service,
  };
}

export function albumsFailed(data) {
  return {
    type: ALBUMS.FAIL,
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
    case ALBUMS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALBUMS.FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case ALBUMS.SUCCESS:
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
function* albumsRequest() {
  const requestURL = '';
  const requestOpt = {};

  try {
    const data = yield call(get, requestURL, requestOpt);
    yield put(albumsSuccess(data));
  } catch (err) {
    yield put(albumsFailed(err));
  }
}

export function* sagas() {
  yield takeEvery(ALBUMS.REQUEST, albumsRequest);
}
