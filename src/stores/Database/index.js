import {put, select, takeEvery} from 'redux-saga/effects';

import {scraplistSuccess} from '../ScrapList';
import {getScrapListData} from '../ScrapList/selectors';

import {albumsSuccess} from '../Albums';

import db from '../../utils/firebase.conf';

export const DATABASE = {
  READ_LIST: 'gumbo/DATABASE/REQUEST',
  SUCCESS: 'gumbo/DATABASE/SUCCESS',
  FAIL: 'gumbo/DATABASE/FAIL',
  WRITE_ALBUM: 'gumbo/DATABASE/WRITE_ALBUM',
  READ_ALBUMS: 'gumbo/DATABASE/READ_ALBUMS',
};

export function databaseReadList() {
  return {
    type: DATABASE.READ_LIST,
  };
}

export function databaseReadAlbums() {
  return {
    type: DATABASE.READ_ALBUMS,
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
    case DATABASE.READ_LIST:
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

    yield put(scraplistSuccess(listSnap));
    yield put(databaseSuccess());
  } catch (err) {
    yield put(databaseFailed(err));
  }
}

// RESULT: store album in the
function* databaseAlbumWrite(action) {
  const dbData = yield select(getScrapListData());

  console.log(action);

  // CHECK: album is already registered
  const isPresent =
    Object.keys(dbData.scrapped).filter(
      d => dbData.scrapped[d].title === action.album.title.toLowerCase()
    ) > 0;

  // STEP: if it is drop the process
  // TODO: show alert in UI!
  if (isPresent) {
    console.log('Album already present in the db');
    return;
  } else {
    try {
      // STEP: register the album
      yield db
        .collection('albums')
        .add({...action.album})
        .then(docRef => console.log('Document written with ID: ', docRef.id))
        .catch(err => databaseFailed(err));

      // STEP: register the scrapped data
      yield db
        .collection('scrapping_list ')
        .add({
          id: {
            discogs: null,
            musicbrainz: null,
            spotify: action.album.spotifyLink || true,
            wikipedia: null,
          },
          title: action.album.title,
          year: action.album.year,
        })
        .then(docRef => console.log('Document written with ID: ', docRef.id))
        .catch(err => databaseFailed(err));
    } catch (err) {
      yield put(databaseFailed(err));
    }
  }
}

function* databaseAlbumRead() {
  try {
    let listSnap = {};

    yield db
      .collection('albums')
      .get()
      .then(snap => {
        return snap.forEach(doc => {
          listSnap = {
            ...listSnap,
            [doc.id]: doc.data(),
          };
        });
      });

    yield put(albumsSuccess(listSnap));
    yield put(databaseSuccess());
  } catch (err) {
    yield put(databaseFailed(err));
  }
}

export function* sagas() {
  yield takeEvery(DATABASE.READ_LIST, databaseRequest);
  yield takeEvery(DATABASE.WRITE_ALBUM, databaseAlbumWrite);
  yield takeEvery(DATABASE.READ_ALBUMS, databaseAlbumRead);
}
