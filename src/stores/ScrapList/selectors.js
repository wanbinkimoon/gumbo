import {createSelector} from 'reselect';

const scrapListDomain = () => state => state.scrapList;

const getScrapListData = () =>
  createSelector(scrapListDomain(), substate => {
    return {
      IDs: substate,
    };
  });
