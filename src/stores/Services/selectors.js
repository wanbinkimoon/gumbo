import {createSelector} from 'reselect';

const tokenDomains = () => state => state.services;

export const getServices = () =>
  createSelector(tokenDomains(), substate => {
    return {
      spotify: substate.spotify,
    };
  });
