import {put, takeEvery} from 'redux-saga/effects';
import {scraplistInit} from '../ScrapList';
import db from '../../utils/firebase.conf';

export const DATABASE = {
  REQUEST: 'gumbo/DATABASE/REQUEST',
  SUCCESS: 'gumbo/DATABASE/SUCCESS',
  FAIL: 'gumbo/DATABASE/FAIL',
  WRITE: 'gumbo/DATABASE/WRITE',
};

export function databaseInit() {
  return {
    type: DATABASE.REQUEST,
  };
}

export function databaseSuccess() {
  return {
    type: DATABASE.SUCCESS,
  };
}

export function databaseFailed(err) {
  console.error('Database request failed \n', err);
  return {
    type: DATABASE.FAIL,
    err,
  };
}

const initialState = {
  loading: false,
  loaded: false,
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
  try {
    let listSnap = {};
    yield db
      .collection('scrapping_list ')
      .get()
      .then(snap => {
        return snap.forEach(
          doc =>
            (listSnap = {
              ...listSnap,
              [doc.id]: doc.data(),
            })
        );
      });

    yield put(scraplistInit(listSnap));
    yield put(databaseSuccess());
  } catch (err) {
    yield put(databaseFailed(err));
  }
}

export function* sagas() {
  yield takeEvery(DATABASE.REQUEST, databaseRequest);
}
