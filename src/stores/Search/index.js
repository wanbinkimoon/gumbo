import {defineAsyncAction} from '../../utils/actionTrainer';
import {call, put, takeEvery, select} from 'redux-saga/effects';
import {get} from '../../utils/request';
import {getServices} from '../Services/selectors';

export const SEARCH = defineAsyncAction('SEARCH');

export function searchInit(album) {
  return {
    type: SEARCH.REQUEST,
    name: album.name,
    year: album.year,
  };
}

export function searchSuccess(data, service) {
  return {
    type: SEARCH.SUCCESS,
    data,
    service,
  };
}

export function searchFailed(data) {
  console.error('SEARCH.FAIL', data);
  return {
    type: SEARCH.FAIL,
    data,
  };
}

const initialState = {
  loading: false,
  loaded: null,
  data: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH.FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    case SEARCH.SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        [action.service]: [...action.data.albums.items],
      };
    default:
      return state;
  }
};

// Sagas
function* searchRequest(action) {
  const services = yield select(getServices());
  const spotifyRequestURL = `${services.spotify.url}search?q=${
    action.name
  }%20year:${action.year}&type=album`;
  const spotifyRequestOpt = {
    headers: {
      Authorization: `Bearer ${services.spotify.token}`,
    },
  };

  try {
    const spotifyData = yield call(get, spotifyRequestURL, spotifyRequestOpt);
    yield put(searchSuccess(spotifyData, 'spotify'));
  } catch (err) {
    yield put(searchFailed(err));
  }
}

export function* sagas() {
  yield takeEvery(SEARCH.REQUEST, searchRequest);
}
