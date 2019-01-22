import {defineAsyncAction} from '../../utils/actionTrainer';
// import {put, takeEvery} from 'redux-saga/effects';
// import {} from '../../utils/request';
// import normalizeScrapList from './normalizeScrapList';

export const SCRAPLIST = defineAsyncAction('SCRAPLIST');

export function scraplistSuccess(data) {
  return {
    type: SCRAPLIST.SUCCESS,
    data,
  };
}

const initialState = {
  loading: true,
  loaded: null,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SCRAPLIST.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SCRAPLIST.SUCCESS:
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
