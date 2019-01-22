import {createSelector} from 'reselect';

const scrapListDomain = () => state => state.scrapList;

export const getScrapListData = () =>
  createSelector(scrapListDomain(), substate => {
    return {
      scrapped: substate.data,
    };
  });
