import {combineReducers} from 'redux';
import search from './Search/index';
import albums from './Albums/index';
import services from './Services/index';
import scrapList from './ScrapList/index';

export const rootReducer = combineReducers({
  albums,
  search,
  services,
  scrapList,
});
