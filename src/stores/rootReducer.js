import {combineReducers} from 'redux';
import search from './Search/index';
import services from './Services/index';

export const rootReducer = combineReducers({
  search,
  services,
});
