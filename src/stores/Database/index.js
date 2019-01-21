import {put, takeEvery} from 'redux-saga/effects';
import {scraplistInit} from '../ScrapList';
import db from '../../utils/firebase.conf';

export const DATABASE = {
  REQUEST: 'gumbo/DATABASE/REQUEST',
  SUCCESS: 'gumbo/DATABASE/SUCCESS',
  FAIL: 'gumbo/DATABASE/FAIL',
  WRITE_ALBUM: 'gumbo/DATABASE/WRITE_ALBUM',
};

export function databaseInit() {
  return {
    type: DATABASE.REQUEST,
  };
}
export function databaseAddAlbum(album) {
  return {
    type: DATABASE.WRITE_ALBUM,
    album,
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
    case DATABASE.WRITE_ALBUM:
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
        return snap.forEach(doc => {
          listSnap = {
            ...listSnap,
            [doc.id]: doc.data(),
          };
        });
      });

    console.log(listSnap);

    yield put(scraplistInit(listSnap));
    yield put(databaseSuccess());
  } catch (err) {
    yield put(databaseFailed(err));
  }
}

function* databaseAlbum(action) {
  try {
    // CHECK: album is already registered

    // STEP: register the album
    yield db
      .collection('albums')
      .add({...action.album})
      .then(docRef => console.log('Document written with ID: ', docRef.id))
      .catch(err => databaseFailed(err));

    // STEP: register the scrapped data
    // yield db.collection('scrapping_list');
  } catch (err) {
    yield put(databaseFailed(err));
  }
}

export function* sagas() {
  yield takeEvery(DATABASE.REQUEST, databaseRequest);
  yield takeEvery(DATABASE.WRITE_ALBUM, databaseAlbum);
}
