import {defineAction as define} from 'redux-define';

const NS = 'carotine';

export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const REQUEST = 'REQUEST';
export const RESET = 'RESET';

export const defineAsyncAction = (
  key,
  prefix = NS,
  steps = [REQUEST, SUCCESS, FAIL]
) => define(key, steps, prefix);

export const defineAction = (key, prefix = NS) => define(key, prefix);
