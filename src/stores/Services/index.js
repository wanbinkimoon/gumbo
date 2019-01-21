export const SERVICES = {
  STORE_TOKEN: 'gumbo/SERVICES/STORE_TOKEN',
};

export function storeToken(token, service) {
  return {
    type: SERVICES.STORE_TOKEN,
    token,
    service,
  };
}

const initialState = {
  spotify: {
    token: null,
    url: 'https://api.spotify.com/v1/',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SERVICES.STORE_TOKEN:
      return {
        ...state,
        [action.service]: {
          ...state[action.service],
          token: action.token,
        },
      };
    default:
      return state;
  }
};
